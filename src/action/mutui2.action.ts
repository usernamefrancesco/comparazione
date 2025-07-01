"use server";

import { Mutuo, FormDataBasic } from "@/lib/interface";
import { listaMutui } from "./listamutui.action";
import { irs } from "@/irs/irs";

export async function trovaMutuo(mutuoId: string) {
  return listaMutui.find((x) => x.id == mutuoId);
}

// =====================================================
// UTILITY FUNCTIONS
// =====================================================

/**
 * Pulisce e converte una stringa numerica rimuovendo caratteri non numerici

*/
type FasciaLTV = "00.00-80.00" | "80.01-95.00" | "95.01-100";

function calculateSpeseIstruttoria(
  mutuo: Mutuo,
  importoMutuo: number,
  ltvMutuo: number
) {

  if (mutuo.speseIstruttoria.percentualeSuImporto) {
    const spesaIstruttoria = importoMutuo * mutuo.speseIstruttoria.percentualeApplicata;
    
    if (spesaIstruttoria > mutuo.speseIstruttoria.importoMax && mutuo.speseIstruttoria.importoMax !== 0) {
      return mutuo.speseIstruttoria.importoMax; // CORRETTO: dovrebbe restituire il massimo
    } else if (spesaIstruttoria < mutuo.speseIstruttoria.importoMin) {
      return mutuo.speseIstruttoria.importoMin;
    } else {
      return spesaIstruttoria;
    }
  } 
  else if (mutuo.speseIstruttoria.ltvImporto) {
    
    for (let x of mutuo.speseIstruttoria.importoLtv) {
      if (ltvMutuo <= x.ltv) {
        
        if (x.percentualeApplicata === 0) {
          return x.importo;
        } else {
          // CORREZIONE PRINCIPALE: logica per i range di importo
          if (importoMutuo >= x.importoMin && importoMutuo <= x.importoMax) {
            return importoMutuo * x.percentualeApplicata;
          } else{
            continue
          }
        }
      }
    }
    
    // Se nessuna regola si applica, restituisce 0 o un valore di default
    return 0;
  } 
  else {
    return mutuo.speseIstruttoria.importo;
  }
}

function calculateMedia(lista: any[], valore: string) {
  return (
    lista.reduce((acc, item) => {
      return (acc += item[valore]);
    }, 0) / lista.length
  );
}

function calculatePolizze(
  mutuo: Mutuo,
  importoMutuo: number,
  durataMutuo: number
) {
  let assicurazioneVita = 0;
  let assicurazioneIncendio = 0;

  const rataMensileVita =
    mutuo.assicurazioniObbligatorie.assicurazioneVitaMensile;
  const rataMensileIncendio =
    mutuo.assicurazioniObbligatorie.assicurazioneCasaMensile;

  if (mutuo.assicurazioniObbligatorie.assicurazioneVita) {
    assicurazioneVita =
      mutuo.assicurazioniObbligatorie.percentualePremioVita * importoMutuo;
    if (mutuo.assicurazioniObbligatorie.assicurazioneVitaMensile) {
      assicurazioneVita = Number(
        (assicurazioneVita / (durataMutuo * 12)).toFixed(2)
      );
    }
  }

  if (mutuo.assicurazioniObbligatorie.assicurazioneCasaMensile) {
    assicurazioneIncendio = (importoMutuo * 0.0055) / 12;
  } else {
    assicurazioneIncendio = importoMutuo * 0.0055;
  }

  return {
    assicurazioneVita,
    assicurazioneIncendio,
    rataMensileIncendio,
    rataMensileVita,
  };
}

 function parseNumericValue(value: string): number {
  const cleaned = value.replace(/[^\d]/g, "");
  const result = Number(cleaned);
  if (isNaN(result) || result < 0) {
    throw new Error(`Valore numerico non valido: ${value}`);
  }
  return result;
}

// calcolo rata Totale

function calculateRataTotale(
  speseGestionePratica: number,
  incassoRata: number,
  rata: number,
  polizze: {
    assicurazioneVita: number;
    assicurazioneIncendio: number;
    rataMensileIncendio: boolean;
    rataMensileVita: boolean;
  },
  altriTipiSpese: {
    annuali: boolean;
    importo: number;
  }
) {
  if (!altriTipiSpese.annuali) {
    const rataTotale =
      incassoRata +
      rata +
      (polizze.rataMensileVita ? polizze.assicurazioneVita : 0) +
      (polizze.rataMensileIncendio ? polizze.assicurazioneIncendio : 0) +
      altriTipiSpese.importo +
      speseGestionePratica;
    return Number(rataTotale.toFixed(2));
  } else {
    const rataTotale =
      incassoRata +
      rata +
      (polizze.rataMensileVita ? polizze.assicurazioneVita : 0) +
      (polizze.rataMensileIncendio ? polizze.assicurazioneIncendio : 0) +
      speseGestionePratica;
    return Number(rataTotale.toFixed(2));
  }
}

/**
 * Calcola gli anni di lavoro dalla data di assunzione
 */

/**
 * Calcola il tasso per un mutuo specifico basato su LTV e durata
 */
function calculateTasso(
  mutuo: Mutuo,
  ltvMutuo: number,
  durataMutuo: number
): number {
  const listaTassi = Object.keys(mutuo.tassiPerLTV);
  const aggiungiIrs = mutuo.irs ? irs[durataMutuo] : 0;

  for (let x of listaTassi) {
    const numero1 = Number(x.slice(0, 5));
    const numero2 = Number(x.slice(6));

    if (ltvMutuo >= numero1 && ltvMutuo <= numero2) {
      const tassiForRange = mutuo.tassiPerLTV[x as keyof typeof mutuo.tassiPerLTV];
      if (tassiForRange) {
        return Number(
          (tassiForRange[durataMutuo] + aggiungiIrs).toFixed(4)
        );
      }
    }
  }

  throw new Error(
    `Tasso non trovato per LTV ${ltvMutuo}% e durata ${durataMutuo} anni`
  );
}

// CALCOLA IMPORTO DA RATA
function calculateImportoMutuo(
  rata: number,
  tasso: number,
  durataMutuo: number
) {
  const r = tasso / 100;
  const n = durataMutuo * 12;
  const importoMutuo =
    rata / (((r / 12) * (1 + r / 12) ** n) / ((1 + r / 12) ** n - 1));

  return Math.round(Number(importoMutuo.toFixed(0)) / 1000) * 1000;
}

/**
 * Calcola la rata mensile del mutuo
 */
 function calculateRataMutuo(
  importoMutuo: number,
  tasso: number,
  durataMutuo: number
): number {
  const r = tasso / 100;
  const n = durataMutuo * 12;

  if (r === 0) {
    return importoMutuo / n;
  }

  const rata =
    importoMutuo * (((r / 12) * (1 + r / 12) ** n) / ((1 + r / 12) ** n - 1));
  return Number(rata.toFixed(2));
}

// calcolo taeg
function calculateTaeg(
  importoMutuo: number,
  durataMutuo: number,
  tassoNominale: number,
  rataMensile: number,
  costiExtra: number,
  speseMensili: number
): number {
  // Converti durata in mesi
  const n = durataMutuo * 12;

  // Definizione funzione valore attuale netto (NPV) dato un tasso mensile i
  function npv(i: number): number {
    let npvValue = -importoMutuo + costiExtra; // Capitale ricevuto meno costi extra (spese pagate all'inizio)
    for (let m = 1; m <= n; m++) {
      npvValue += (rataMensile + speseMensili) / Math.pow(1 + i, m);
    }
    return npvValue;
  }

  // Ricerca binaria per trovare il tasso mensile che azzera l'NPV
  let low = 0;
  let high = 1; // 100% mensile, valore alto iniziale
  let mid = 0;
  const precision = 1e-8;
  let iterations = 0;
  const maxIterations = 100;

  while (iterations < maxIterations) {
    mid = (low + high) / 2;
    const value = npv(mid);

    if (Math.abs(value) < precision) break;

    if (value > 0) {
      low = mid;
    } else {
      high = mid;
    }
    iterations++;
  }

  // Il tasso mensile trovato, moltiplichiamo per 12 per ottenere il tasso annuo nominale effettivo
  const taeg = (Math.pow(1 + mid, 12) - 1) * 100; // in percentuale

  return Number(taeg.toFixed(4));
}

// Calcolo TAEG corretto e robusto
// Calcolo TAEG corretto e robusto

// Esempio di chiamata corretta:
// const taeg = calculateTaeg(mutuo, parsedData.importoMutuo, parsedData.durataMutuo, tasso, rata);

// =====================================================
// SCORING FUNCTIONS
// =====================================================

interface ScoreResult {
  score: number;
  pros: string[];
  cons: string[];
}

/**
 * Calcola lo score basato su LTV
 */
function calculateLTVScore(ltv: number): ScoreResult {
  const pros: string[] = [];
  const cons: string[] = [];
  let score = 0;

  if (ltv < 50) {
    score += 15;
    pros.push("Percentuale bassa di mutuo");
  } else if (ltv < 65) {
    score += 8;
    pros.push("Percentuale bassa di mutuo");
  } else if (ltv <= 80) {
    score += 2;
  } else if (ltv <= 90) {
    score -= 2;
  } else {
    score -= 5;
    cons.push("Percentuale alta di mutuo");
  }

  return { score, pros, cons };
}

/**
 * Calcola lo score basato su contratto e anzianità
 */
function calculateContractScore(
  tipoContratto: string,
  anni: number
): ScoreResult {
  const pros: string[] = [];
  const cons: string[] = [];
  let score = 0;

  switch (tipoContratto) {
    case "Tempo indeterminato":
      if (anni > 3) {
        score += 12;
        pros.push("Buona anzianità lavorativa");
      } else if (anni > 1) {
        score += 6;
      } else {
        score -= 10;
        cons.push("Poca anzianità lavorativa");
      }
      break;

    case "Tempo determinato":
      if (anni > 3) {
        score += 2;
      } else {
        score -= 45;
        cons.push("Contratto a tempo determinato con poca anzianità");
      }
      break;

    default:
      score -= 5;
      cons.push("Tipologia contrattuale rischiosa");
  }

  return { score, pros, cons };
}

/**
 * Calcola lo score basato su DTI (Debt-to-Income)
 */
function calculateDTIScore(dti: number, maxDTI: number): ScoreResult {
  const pros: string[] = [];
  const cons: string[] = [];
  let score = 0;

  if (dti <= 20) {
    score += 25;
    pros.push("Rapporto rata/reddito ottimo");
  } else if (dti >= 20 && dti < maxDTI) {
    score += 7;
  } else if (dti > maxDTI) {
    score -= 15;
    cons.push("Rapporto rata/reddito troppo alto");
  } else {
    score -= 30;
    cons.push("Rapporto rata/reddito troppo alto");
  }

  return { score, pros, cons };
}

/**
 * Calcola lo score basato sull'età
 */

/**
 * Calcola lo score completo combinando tutti i fattori
 */

// =====================================================
// VALIDATION FUNCTIONS
// =====================================================

interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

/**
 * Valida tutti i dati di input
 */

// =====================================================
// COST CALCULATION FUNCTIONS
// =====================================================

interface CostiExtra {
  totale: number;
  dettaglio: {
    impostaSostitutiva: number;
    spesePerizia: number;
    speseIstruttoria: number;
    assicurazioneIncendio: number;
    assicurazioneVita: number;
  };
}

/**
 * Calcola tutti i costi extra del mutuo
 */
function calculateCostiExtra(
  mutuo: Mutuo,
  importoMutuo: number,
  costoStimato: {
    assicurazioneVita: number;
    assicurazioneIncendio: number;
    rataMensileIncendio: boolean;
    rataMensileVita: boolean;
  },
  speseIstruttoria: number
): CostiExtra {
  const impostaSostitutiva = Math.max(250, importoMutuo * 0.0025);
  const spesePerizia = mutuo.spesePerizia?.importo || 0;
  const assicurazioneIncendio = costoStimato.rataMensileIncendio
    ? 0
    : costoStimato.assicurazioneIncendio;
  const assicurazioneVita = costoStimato.rataMensileVita
    ? 0
    : costoStimato.assicurazioneVita;

  const totale =
    impostaSostitutiva +
    spesePerizia +
    speseIstruttoria +
    assicurazioneIncendio +
    assicurazioneVita;

  return {
    totale,
    dettaglio: {
      impostaSostitutiva,
      spesePerizia,
      speseIstruttoria,
      assicurazioneIncendio,
      assicurazioneVita,
    },
  };
}

// =====================================================
// MAIN FUNCTION
// =====================================================

/**
 * Funzione principale per la consulenza avanzata mutui - Versione migliorata
 */
export async function consulenzaStandard(dati: FormDataBasic) {
  try {
    // 1. VALIDAZIONE INPUT

    // 2. PARSING SICURO DEI VALORI
    const parsedData = {
      eta: dati.eta,
      valoreImmobile: parseNumericValue(dati.valoreImmobile),
      importoMutuo: parseNumericValue(dati.importoMutuo),
      durataMutuo: parseNumericValue(dati.durataMutuo),
      reddito: parseNumericValue(dati.reddito),
    };

    // 3. CALCOLI BASE
    const ltvMutuo =
      (parsedData.importoMutuo / parsedData.valoreImmobile) * 100;

    // 4. FILTRO MUTUI DISPONIBILI
    const listaFiltrata = listaMutui.filter((mutuo) => {
      const etaValida = mutuo.eta.maxUnder36 ? parsedData.eta : true
        
      const classeEnergeticaValida =
        dati.classeEnergetica === "Non lo so" ||
        dati.classeEnergetica === "Si" ||
        !mutuo.soloClassiAB;

        
      const scadenzaData = !mutuo.dataScadenzaOfferta || new Date() <= new Date(mutuo.dataScadenzaOfferta) 
        
      
      const iseeValido = !mutuo.isee || dati.isee === 'No' || dati.isee === 'Non lo so';


      const importoValidatiom = parsedData.importoMutuo >= mutuo.importoInfo.importoMin && parsedData.importoMutuo <=  mutuo.importoInfo.importoMax 

      return etaValida && classeEnergeticaValida && iseeValido && importoValidatiom && scadenzaData;
    });

    if (listaFiltrata.length === 0) {
      return [];
    }

    // 5. CALCOLO DETTAGLIATO PER OGNI MUTUO
    const risultati = [];
    const mediaScore = [];

    for (const mutuo of listaFiltrata) {
      try {
        // Calcolo tasso
        const tasso = calculateTasso(mutuo, ltvMutuo, parsedData.durataMutuo);
        const spesaIstruttoria = calculateSpeseIstruttoria(
          mutuo,
          parsedData.importoMutuo,
          ltvMutuo
        );

        // Calcolo rata
        const rata = calculateRataMutuo(
          parsedData.importoMutuo,
          tasso,
          parsedData.durataMutuo
        );

        // Verifica rata valida
        if (isNaN(rata) || rata <= 0) {
          console.warn(`⚠️ Rata non valida per ${mutuo.banca}: ${rata}`);
          continue;
        }

        // Calcolo scoring completo

        const costoStimatoPolizze = calculatePolizze(
          mutuo,
          parsedData.importoMutuo,
          parsedData.durataMutuo
        );

        // Calcolo costi extra
        const costiExtra = calculateCostiExtra(
          mutuo,
          parsedData.importoMutuo,
          costoStimatoPolizze,
          spesaIstruttoria
        );

        const speseMensili =
          mutuo.costoGestionePratica.importo + mutuo.incassoRata.importo;
        // Calcolo TAEG
        const taeg = calculateTaeg(
          parsedData.importoMutuo,
          parsedData.durataMutuo,
          tasso,
          rata,
          costiExtra.totale,
          speseMensili
        );

        // Calcolo totale da rimborsare
        const totaleDaRimborsare =
          rata * 12 * parsedData.durataMutuo - parsedData.importoMutuo;

        // Calcolo DTI per logging
        const redditoDisponibile = parsedData.reddito;
        const dti =
          redditoDisponibile > 0
            ? ((rata / redditoDisponibile) * 100).toFixed(2)
            : "100.00";

        let rataMiglioreConsigliata = redditoDisponibile * 0.35; // Partiamo da una % più bassa per trovare il rating migliore
        let rataMassimaAccettabile = redditoDisponibile * 0.45; // Limite massimo accettabile

        // 3. RICERCA RATA MASSIMA (Score >= 30)

        const rataTotale = calculateRataTotale(
          mutuo.costoGestionePratica.importo,
          mutuo.incassoRata.importo,
          rata,
          costoStimatoPolizze,
          mutuo.altriTipiSpese
        );

        
        // Costruzione risultato
        risultati.push({
          ...mutuo,
          ltvMutuo: Number(ltvMutuo.toFixed(2)),
          importoMutuo: parsedData.importoMutuo,
          rataMensile: rata,
          rataTotale: rataTotale,
          taeg: taeg,
          tassoScelto: tasso,
          totaliCostiExtra: costiExtra.totale,
          durataAnni: parsedData.durataMutuo,
          impostaSostitutiva: {
            ...mutuo.impostaSostitutiva,
            importo: costiExtra.dettaglio.impostaSostitutiva,
          },
          speseIstruttoria: {
            ...mutuo.speseIstruttoria,
            importo: spesaIstruttoria,
          },
          totaleDaRimborsare: totaleDaRimborsare,
          assicurazioniObbligatorie: {
            ...mutuo.assicurazioniObbligatorie,
            costoStimatoCasa: costoStimatoPolizze.assicurazioneIncendio,
            costoStimatoVita: costoStimatoPolizze.assicurazioneVita,
          },
          dettaglioCosti: costiExtra.dettaglio,
        });
      } catch (error) {
        console.error(`❌ Errore nel calcolo per ${mutuo.banca}:`, error);
        // Continua con il prossimo mutuo invece di interrompere tutto
        continue;
      }
    }

    // 6. CONTROLLO RISULTATI FINALI
    if (risultati.length === 0) {
      return [];
    }

    return risultati;
  } catch (error) {
    console.error("💥 Errore nella consulenza avanzata:", error);
    throw error; // Re-throw per permettere gestione upstream
  }
}
