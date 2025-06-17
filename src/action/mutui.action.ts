"use server";

import { irs30, listaMutui } from "./listamutui.action";
import { typeConsulenzaAvanzata, Mutuo, FormDataBasic } from "@/lib/interface";

export interface FormDataMutuo {
  valoreImmobile: string;
  importoMutuo: string;
  durataMutuo: string;
  tipoTasso: string;
  provinciaImmobile: object;
  reddito: string;
  eta: boolean;
  classeEnergetica: string;
}

// lista prdotti mutui => in base info cliente (CONSULENZA STANDARD)
export async function listaProdotti(dati: FormDataBasic) {
  const listaFiltrata = listaMutui.filter(
    (mutuo) =>
      // eta, vede se è eta è true

      (dati.eta ? mutuo : !mutuo.eta.maxUnder36) &&
      (dati.classeEnergetica == "Si" || dati.classeEnergetica == "Non lo so"
        ? mutuo
        : !mutuo.soloClassiAB)
  );
  console.log(" ");

  // modifica i parametri con la rata giusta e tasso
  const listaFinale = listaFiltrata.map((mutuo, indice) => {
    // pulire i dati, avendo  caratteri come € e .
    const clearImportoMutuo = Number(
      dati.importoMutuo
        .split("")
        .filter((x) => x != "€" && x != " " && x != ".")
        .join("")
    );
    const clearValoreImmobile = Number(
      dati.valoreImmobile
        .split("")
        .filter((x) => x != "€" && x != " " && x != ".")
        .join("")
    );
    const clearDurataMutuo = Number(dati.durataMutuo);

    // ltv mutuo
    const ltvMutuo = Number(
      ((clearImportoMutuo / clearValoreImmobile) * 100).toFixed(2)
    );

    // decidere quale tasso prendere
    let tasso = 0;
    const listaTassi = Object.keys(mutuo.tassiPerLTV);

    for (let x of listaTassi) {
      const numero1 = Number(x.slice(0, 5));
      const numero2 = Number(x.slice(6));
      const aggiungiIrs = mutuo.irs ? irs30 : 0;

      if (ltvMutuo >= numero1 && ltvMutuo <= numero2) {
        tasso = mutuo.tassiPerLTV[x][clearDurataMutuo] + aggiungiIrs;
      }
    }

    // calcolo rata mutuo
    const r = Number((tasso / 100).toFixed(4));
    const n = Number(dati.durataMutuo) * 12;

    const rata = Number(
      (
        Number(clearImportoMutuo) *
        (((r / 12) * (1 + r / 12) ** n) / ((1 + r / 12) ** n - 1))
      ).toFixed(2)
    );

    // imposta sostitutiva
    let impostaSostitutiva = clearImportoMutuo * 0.0025;
    if (impostaSostitutiva < 250) impostaSostitutiva = 250;

    mutuo.impostaSostitutiva?.promozione
      ? (impostaSostitutiva = 0)
      : impostaSostitutiva;

    // totale costi extra
    let costiTotExtra =
      impostaSostitutiva +
      (mutuo.spesePerizia?.importo ? mutuo.spesePerizia?.importo : 0) +
      mutuo.speseIstruttoria.importo;

    console.log("totale costi", ltvMutuo);
    return {
      ...mutuo,
      totaliCostiExtra: costiTotExtra,
      ltvMutuo: ltvMutuo,
      rataMensile: rata,
      tassoFisso: Number(tasso.toFixed(2)),
      importoMutuo: clearImportoMutuo,
      durataAnni: clearDurataMutuo,
      impostaSostitutiva: {
        ...mutuo.impostaSostitutiva,
        importo: impostaSostitutiva,
      },
    };
  });

  const finale = listaFinale
    .filter((x) => !isNaN(x.rataMensile))
    .sort((a, b) => {
      const num1 = a.tassoFisso;
      const num2 = b.tassoFisso;
      if (num1 < num2) {
        return -1;
      }
      if (num1 > num2) {
        return 1;
      }

      return 0;
    });

  return finale;
}

// (CONSULENZA AVANZATA)

export async function consulenzaAvanzata(dati: typeConsulenzaAvanzata) {
  // cambio valori
  const clearEtaNumero = Number(dati.eta);
  const clearValoreImmobile = Number(
    dati.valoreImmobile
      .split("")
      .filter((x) => x != " " && x != "€" && x != ".")
      .join("")
  );
  const clearImportoMutuo = Number(
    dati.importoMutuo
      .split("")
      .filter((x) => x != " " && x != "€" && x != ".")
      .join("")
  );
  const clearDurataMutuo = Number(
    dati.durataMutuo
      .split("")
      .filter((x) => x != " " && x != "€" && x != "anni")
      .join("")
  );
  const clearStipendio = Number(
    dati.reddito
      .split("")
      .filter((x) => x != " " && x != "€" && x != ".")
      .join("")
  );
  const clearFinanziamento =
    dati.finanziamentiBool && dati.finanziamentiTot != "€ 0"
      ? Number(
          dati.finanziamentiTot
            .split("")
            .filter((x) => x != " " && x != "€" && x != ".")
            .join("")
        )
      : 0;

  // mutuo
  const ltvMutuo = (clearImportoMutuo / clearValoreImmobile) * 100;

  console.log("lista mutui", dati.finanziamentiTot);

  // CORREZIONE 1: Filtro età corretto senza operatore ternario
  const listaFiltrata = listaMutui.filter((mutuo) => {
    // L'età deve essere compresa tra minima e massima
    const etaValida =
      clearEtaNumero >= mutuo.eta.minima && clearEtaNumero <= mutuo.eta.massima;

    // Controllo classe energetica
    const classeEnergeticaValida =
      dati.classeEnergetica === "Non lo so" ||
      dati.classeEnergetica === "Si" ||
      !mutuo.soloClassiAB;

    return etaValida && classeEnergeticaValida;
  });

  // CORREZIONE 2: Salvare il risultato del map invece di solo fare console.log
  const listaConCalcoli = listaFiltrata.map((mutuo: Mutuo) => {
    console.log("BANCA", mutuo.banca);

    // pro vs contro pratica
    let proPratica: string[] = [];
    let controPratica: string[] = [];
    // calcolo tasso
    let tasso = 0;
    const listaTassi = Object.keys(mutuo.tassiPerLTV);

    for (let x of listaTassi) {
      const numero1 = Number(x.slice(0, 5));
      const numero2 = Number(x.slice(6));
      const aggiungiIrs = mutuo.irs ? irs30 : 0;

      if (ltvMutuo >= numero1 && ltvMutuo <= numero2) {
        tasso = Number(
          (mutuo.tassiPerLTV[x][clearDurataMutuo] + aggiungiIrs).toFixed(4)
        );
      }
    }

    // calcolo rata
    const r = Number((tasso / 100).toFixed(4));
    const n = clearDurataMutuo * 12;

    const rata = Number(
      (
        Number(clearImportoMutuo) *
        (((r / 12) * (1 + r / 12) ** n) / ((1 + r / 12) ** n - 1))
      ).toFixed(2)
    );

    // totale interessi
    const totaleDaRimborsare = rata * 12 * clearDurataMutuo - clearImportoMutuo;

    // polizza incendio e scoppio
    const costoStimato = clearImportoMutuo * 0.009;

    // calcolo R/R
    const rrr = ((rata / (clearStipendio - clearFinanziamento)) * 100).toFixed(
      2
    );

    // score pratica
    let score = 50; // partenza da 50/100

    // 2) LTV
    if (ltvMutuo < 50) {
      score += 15;
      proPratica = [...proPratica, "Percentuale bassa di mutuo"];
    } else if (ltvMutuo < 65) {
      score += 8;
    } else if (ltvMutuo <= 80) {
      score += 2;
    } else if (ltvMutuo <= 90) {
      score -= 2;
    } else {
      score -= 7;
      controPratica = [...controPratica, "Percentuale alta di mutuo"];
    }
    // 3) Contratto & Anzianità
    const dateTod = new Date(
      dati.dataAssunzione.slice(0, 2) + "-01-" + dati.dataAssunzione.slice(3)
    );
    const anni = (new Date() - dateTod) / (365 * 24 * 3600 * 1000);
    if (dati.tipoContratto === "T. indeterminato") {
      if (anni > 3) {
        score += 12;
        proPratica = [...proPratica, "Buona anzianita lavorativa"];
      } else if (anni > 1) {
        score += 6;
      } else {
        score -= 5;
        controPratica = [...controPratica, "Poca anzianità lavorativa"];
      }
    } else if (dati.tipoContratto === "T. determinato") {
      if (anni > 2) {
        score += 4;
      } else {
        score -= 15;
        controPratica = [
          ...controPratica,
          "Contratto a tempo determinato con poca anzianità",
        ];
      }
    } else {
      // altre tipologie (freelance, pensionato, ecc.)
      score -= 5;
    }
    score +=
      dati.tipoContratto === "T. indeterminato" && anni > 2
        ? 10
        : anni > 3
        ? 5
        : -10;

    score +=
      dati.tipoContratto === "T. determinato" && anni <= 3
        ? -15
        : anni < 1
        ? -30
        : -10;

    // 4) Persone a carico
    score -= (Number(dati.numeroPersoneACarico) - 1) * 5;
    if (Number(dati.numeroPersoneACarico) > 2) {
      controPratica = [...controPratica, "Persone a carico"];
    }

    // 6) Età
    score +=
      clearEtaNumero < 25 || clearEtaNumero > 70
        ? -10
        : clearEtaNumero < 35 || clearEtaNumero > 60
        ? 0
        : 10;

    // score sussistenza
    if (clearStipendio >= dati.totaleSussistenza) {
      score += 8;
    } else {
      score -= 14;
      controPratica = [...controPratica, "Oltre la soglia di sussistenza"];
    }
    // score su stipendio + rata
    const redditoDisponibile = clearStipendio - clearFinanziamento;
    const dti =
      redditoDisponibile > 0
        ? Number(((rata / redditoDisponibile) * 100).toFixed(2))
        : 100;
    if (dti < 20) {
      score += 20;
      proPratica = [...proPratica, "Rapporto rata/reddito ottimo"];
    } else if (dti < mutuo.rrrMax) {
      score += 7;
    } else if (dti <= 45) {
      score -= 15;
      controPratica = [...controPratica, "Rapporto rata/reddito troppo alta"];
    } else {
      score -= 30;
      controPratica = [...controPratica, "Rapporto rata/reddito troppo alta"];
    }

    if ((clearFinanziamento / clearStipendio) * 100 >= 30) {
      controPratica = [
        ...controPratica,
        "Finanziamenti troppo elevati rispetto allo stipendio",
      ];
    }

    // tipo di mutuo
    if (mutuo.consap) {
      // CONSAP garantisce parte del finanziamento: bonus di 5 punti
      score += 2;
    }
    if (mutuo.soloClassiAB) {
      score += 2;
    }
    // Cappare lo score
    score = Math.max(0, Math.min(100, score));

    console.log("dti", dti);
    console.log("sussistenza", dati.totaleSussistenza);
    console.log("finanziamenti tot", dati.finanziamentiTot);

    // totale costi extra
    let costiTotExtra =
      mutuo.impostaSostitutiva.importo +
      (mutuo.spesePerizia?.importo ? mutuo.spesePerizia?.importo : 0) +
      mutuo.speseIstruttoria.importo +
      costoStimato;

    console.log(" ");

    return {
      ...mutuo,
      ltvMutuo: Number(ltvMutuo.toFixed(2)),
      importoMutuo: clearImportoMutuo,
      rataMensile: rata,
      tassoFisso: tasso,
      score: score,
      totaliCostiExtra: costiTotExtra,
      durataAnni: clearDurataMutuo,
      impostaSostitutiva: {
        ...mutuo.impostaSostitutiva,
        importo:
          clearImportoMutuo * 0.0025 < 250 ? 250 : clearImportoMutuo * 0.0025,
      },
      totaleDaRimborsare: totaleDaRimborsare,
      assicurazioniObbligatorie: {
        ...mutuo.assicurazioniObbligatorie,
        costoStimatoCasa: costoStimato,
      },
      praticaScore: {
        pro: proPratica,
        contro: controPratica,
      },
    };
  });

  // CORREZIONE 4: Filtrare sui risultati del map, non sulla lista originale
  const result = listaConCalcoli.filter((x) => !isNaN(x.rataMensile));
  console.log("risultato", result.length);

  return result;
}

export async function mediaScore(listaMutui: Mutuo[]) {
  let totaleScore = 0;
  listaMutui.map((mutuo) => {
    totaleScore += mutuo.score;
  });

  return totaleScore / listaMutui.length;
}

export async function sortLista(listaMutui: Mutuo[], tipologia: string) {
  if(!listaMutui)return;
  const finale = [...listaMutui].sort((a, b) => {
    // Spread per creare una copia
    let num1 = a.rataMensile;
    let num2 = b.rataMensile;

    if (tipologia == "score") {
      num1 = a.score;
      num2 = b.score;

      console.log(num1, num2, "score");

      if (num1 > num2) {
        return -1;
      }
      if (num1 < num2) {
        return 1;
      }
      return 0;
    } else if (tipologia == "rata totale") {
      num1 = a.rataTotale;
      num2 = b.rataTotale;

      if (num1 < num2) {
        return -1;
      }
      if (num1 > num2) {
        return 1;
      }
      return 0;
    }  else if (tipologia == "taeg") {
      num1 = a.taeg;
      num2 = b.taeg;

      if (num1 < num2) {
        return -1;
      }
      if (num1 > num2) {
        return 1;
      }
      return 0
    } else {
      if (num1 < num2) {
        return -1;
      }
      if (num1 > num2) {
        return 1;
      }
      return 0;
    }
  });

  return finale;
}



