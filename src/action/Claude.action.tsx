
'use server'
import {  Mutuo, ScoreGenerale, typeConsulenzaAvanzata } from "@/lib/interface";
import { listaMutui } from "./listamutui.action";
import { irs } from "@/irs/irs";
// =====================================================
// UTILITY FUNCTIONS
// =====================================================

/**
 * Pulisce e converte una stringa numerica rimuovendo caratteri non numerici

*/
type FasciaLTV = "00.00-80.00" | "80.01-95.00" | "95.01-100";

function calculateMedia(lista: any[], valore: string) {
  return (
    lista.reduce((acc, item) => {
      return (acc += item[valore]);
    }, 0) / lista.length
  );
}

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


function calculatePolizze(mutuo: Mutuo, importoMutuo: number, durataMutuo: number  ){
  let assicurazioneVita = 0
  let assicurazioneIncendio = 0

  const rataMensileVita = mutuo.assicurazioniObbligatorie.assicurazioneVitaMensile
  const rataMensileIncendio = mutuo.assicurazioniObbligatorie.assicurazioneCasaMensile


  if(mutuo.assicurazioniObbligatorie.assicurazioneVita){
    assicurazioneVita = Math.round((mutuo.assicurazioniObbligatorie.percentualePremioVita * importoMutuo)/10)*10
    if(mutuo.assicurazioniObbligatorie.assicurazioneVitaMensile){
      assicurazioneVita = Number((assicurazioneVita / (durataMutuo * 12)).toFixed(2))

    }
  }

  if(mutuo.assicurazioniObbligatorie.assicurazioneCasaMensile){
    assicurazioneIncendio = (importoMutuo * 0.0055)/12
  }else{
    assicurazioneIncendio = Math.round((importoMutuo * 0.0055)/10)*10
  }

  return { assicurazioneVita, assicurazioneIncendio,rataMensileIncendio, rataMensileVita }

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

function calculateRataTotale(speseGestionePratica: number,incassoRata: number, rata: number, polizze: {assicurazioneVita: number, assicurazioneIncendio: number, rataMensileIncendio: boolean, rataMensileVita: boolean}, altriTipiSpese: {
  annuali: boolean,
  importo: number,
}){

  if(!altriTipiSpese.annuali){

    const rataTotale  = incassoRata + rata + (polizze.rataMensileVita ? polizze.assicurazioneVita  : 0) + (polizze.rataMensileIncendio ? polizze.assicurazioneIncendio  : 0) + altriTipiSpese.importo + speseGestionePratica
    return Number(rataTotale.toFixed(2))
  }else{
    const rataTotale  = incassoRata + rata + (polizze.rataMensileVita ? polizze.assicurazioneVita  : 0) + (polizze.rataMensileIncendio ? polizze.assicurazioneIncendio  : 0) +speseGestionePratica
    return Number(rataTotale.toFixed(2))
  }
}

/**
 * Calcola gli anni di lavoro dalla data di assunzione
 */
function calculateWorkYears(dataAssunzione: string): number {
  try {
    const [mese, anno] = dataAssunzione.split("/");
    const startDate = new Date(Number(anno), Number(mese) - 1, 1);
    const now = new Date();

    if (startDate > now) {
      throw new Error("Data assunzione nel futuro");
    }

    return (
      (now.getTime() - startDate.getTime()) / (365.25 * 24 * 60 * 60 * 1000)
    );
  } catch (error) {
    throw new Error(`Data assunzione non valida: ${dataAssunzione}`);
  }
}

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



/**
 * Calcola il TAEG includendo l'assicurazione vita (opzionale ma obbligatoria per sconto)
 * @param mutuo Mutuo
 * @returns numero: TAEG annuo (es. 0.02563 per 2.563%)
 */
function calculateTaeg2(mutuo: Mutuo, assicurazioneCasa: number): number {
  const {
    importoMutuo,
    durataAnni,
    rataMensile,
    spesePerizia,
    impostaSostitutiva,
    assicurazioniObbligatorie
  } = mutuo;

  const nRate = durataAnni * 12;
  // calcola premio mensile vita
  const premioAnnuo = assicurazioniObbligatorie.assicurazioneVita
    ? importoMutuo * assicurazioniObbligatorie.percentualePremioVita
    : 0;
  const premioMensile = assicurazioniObbligatorie.assicurazioneVita && assicurazioniObbligatorie.assicurazioneVitaMensile
    ? premioAnnuo / 12
    : 0;

  // rata comprensiva
  const rataConPremio = rataMensile + premioMensile;

  // importo netto iniziale
  const netReceived = importoMutuo - spesePerizia.importo - impostaSostitutiva.importo - assicurazioneCasa;

  // crea cashflow
  const cashFlows: number[] = [netReceived];
  for (let i = 0; i < nRate; i++) {
    cashFlows.push(-rataConPremio);
  }

  // IRR con Newton
  function irr(flows: number[], guess = 0.01): number {
    let x0 = guess;
    for (let iter = 0; iter < 1000; iter++) {
      let f = 0;
      let fPrime = 0;
      flows.forEach((cf, t) => {
        f += cf / Math.pow(1 + x0, t);
        fPrime += -t * cf / Math.pow(1 + x0, t + 1);
      });
      const x1 = x0 - f / fPrime;
      if (Math.abs(x1 - x0) < 1e-8) break;
      x0 = x1;
    }
    return x0;
  }

  const irrMensile = irr(cashFlows);
  const taegAnnuo = Math.pow(1 + irrMensile, 12) - 1;
  return taegAnnuo;
}

// Esempio:
// const taeg = calculateTaeg(mioMutuo);
// console.log((taeg * 100).toFixed(3) + "%");

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
      npvValue += (rataMensile+ speseMensili) / Math.pow(1 + i, m);
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
function calculateAgeScore(eta: number): ScoreResult {
  const pros: string[] = [];
  const cons: string[] = [];
  let score = 0;

  if (eta < 25 || eta > 70) {
    score -= 10;
    if (eta < 25) cons.push("Età molto giovane");
    if (eta > 70) cons.push("Età elevata");
  } else if (eta >= 35 && eta <= 60) {
    score += 10;
    pros.push("Età ottimale");
  }

  return { score, pros, cons };
}

/**
 * Calcola lo score completo combinando tutti i fattori
 */
function calculateCompleteScore(
  dati: typeConsulenzaAvanzata,
  parsedData: any,
  ltvMutuo: number,
  anniLavoro: number,
  rata: number,
  mutuo: Mutuo
): { totalScore: number; pros: string[]; cons: string[] } {
  let totalScore = 50; // Punteggio base
  const allPros: string[] = [];
  const allCons: string[] = [];

  // 1. Score LTV
  const ltvScore = calculateLTVScore(ltvMutuo);
  totalScore += ltvScore.score;
  allPros.push(...ltvScore.pros);
  allCons.push(...ltvScore.cons);

  // 2. Score Contratto e Anzianità
  const contractScore = calculateContractScore(dati.tipoContratto, anniLavoro);
  totalScore += contractScore.score;
  allPros.push(...contractScore.pros);
  allCons.push(...contractScore.cons);

  // 3. Score Età
  const ageScore = calculateAgeScore(parsedData.eta);
  totalScore += ageScore.score;
  allPros.push(...ageScore.pros);
  allCons.push(...ageScore.cons);

  // 4. Score Persone a Carico
  const personeACarico = Number(dati.numeroPersoneACarico);
  if (personeACarico > 2) {
    totalScore -= (personeACarico - 1) * 5;
    allCons.push("Molte persone a carico");
  }

  // 5. Score Sussistenza
  if (parsedData.reddito >= dati.totaleSussistenza) {
    totalScore += 8;
  } else {
    totalScore -= 14;
    allCons.push("Reddito sotto soglia sussistenza");
  }

  // 6. Score DTI
  const redditoDisponibile = parsedData.reddito - parsedData.finanziamenti;
  const dti =
    redditoDisponibile > 0
      ? Number(((rata / redditoDisponibile) * 100).toFixed(2))
      : 100;

  const dtiScore = calculateDTIScore(dti, mutuo.rrrMax);

  totalScore += dtiScore.score;
  allPros.push(...dtiScore.pros);
  allCons.push(...dtiScore.cons);

  // 7. Score Finanziamenti Esistenti
  const rapportoFinanziamenti =
    (parsedData.finanziamenti / parsedData.reddito) * 100;
  if (rapportoFinanziamenti >= 30) {
    totalScore -= 10;
    allCons.push("Finanziamenti troppo elevati rispetto allo stipendio");
  }

  // 8. Bonus per tipologie mutuo speciali
  if (mutuo.consap) {
    totalScore += 2;
    allPros.push("Mutuo con garanzia CONSAP");
  }
  if (mutuo.soloClassiAB) {
    totalScore += 2;
    allPros.push("Mutuo per classi energetiche efficienti");
  }

  // Limita lo score tra 0 e 100
  totalScore = Math.max(0, Math.min(100, totalScore));


  return {
    totalScore,
    pros: [...new Set(allPros)], // Rimuove duplicati
    cons: [...new Set(allCons)], // Rimuove duplicati
  };
}

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
function validateConsulenzaInput(
  dati:  typeConsulenzaAvanzata
): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  try {
    // Validazione età
    const eta = parseNumericValue(dati.eta);
    if (eta < 18 || eta > 85) {
      errors.push("Età deve essere tra 18 e 85 anni");
    }
    if (eta > 70) {
      warnings.push("Età elevata potrebbe limitare le opzioni");
    }

    // Validazione importi
    const valoreImmobile = parseNumericValue(dati.valoreImmobile);
    const importoMutuo = parseNumericValue(dati.importoMutuo);

    if (valoreImmobile < 50000) {
      errors.push("Valore immobile troppo basso (minimo €50.000)");
    }
    if (importoMutuo < 10000) {
      errors.push("Importo mutuo troppo basso (minimo €10.000)");
    }

    // Validazione LTV
    const ltv = (importoMutuo / valoreImmobile) * 100;
    if (ltv > 100) {
      errors.push("LTV non può superare il 100%");
    }
    if (ltv > 90) {
      warnings.push("LTV elevato (>90%) limita le opzioni bancarie");
    }

    // Validazione reddito
    const reddito = parseNumericValue(dati.reddito);
    if (reddito < 900) {
      errors.push("Reddito troppo basso per ottenere un mutuo");
    }

    // Validazione durata
    const durata = parseNumericValue(dati.durataMutuo);
    if (durata < 5 || durata > 40) {
      errors.push("Durata mutuo deve essere tra 5 e 40 anni");
    }

    // Validazione data assunzione
    if (!dati.dataAssunzione.match(/^\d{2}\/\d{4}$/)) {
      errors.push("Formato data assunzione non valido (deve essere MM/YYYY)");
    }

    // Validazione tipo contratto
    const contrattiValidi = [
      "Tempo indeterminato",
      "Tempo determinato",
      "Freelance",
      "Pensionato",
    ];
    if (!contrattiValidi.includes(dati.tipoContratto)) {
      warnings.push("Tipo contratto non standard");
    }
  } catch (error) {
    errors.push(`Errore nella validazione: ${error}`);
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  };
}

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
    assicurazioneVita: number 
  };
}

/**
 * Calcola tutti i costi extra del mutuo
 */
function calculateCostiExtra(mutuo: Mutuo, importoMutuo: number,costoStimato: {assicurazioneVita: number, assicurazioneIncendio: number, rataMensileIncendio: boolean, rataMensileVita: boolean}, speseIstruttoria: number): CostiExtra {
  const impostaSostitutiva = Math.max(250, importoMutuo * 0.0025);
  const spesePerizia = mutuo.spesePerizia?.importo || 0;
  const assicurazioneIncendio = (costoStimato.rataMensileIncendio ? 0: costoStimato.assicurazioneIncendio)
  const assicurazioneVita = (costoStimato.rataMensileVita ? 0 : costoStimato.assicurazioneVita)

  const totale =
    impostaSostitutiva +
    spesePerizia +
    speseIstruttoria +assicurazioneIncendio
     +  assicurazioneVita;

  return {
    totale,
    dettaglio: {
      impostaSostitutiva,
      spesePerizia,
      speseIstruttoria,
      assicurazioneIncendio,
      assicurazioneVita
    },
  };
}

// =====================================================
// MAIN FUNCTION
// =====================================================

/**
 * Funzione principale per la consulenza avanzata mutui - Versione migliorata
 */
export async function consulenzaAvanzata(dati:  typeConsulenzaAvanzata) {

  try {
    // 1. VALIDAZIONE INPUT
    const validation = validateConsulenzaInput(dati);
    if (!validation.isValid) {
      console.error("❌ Validazione fallita:", validation.errors);
      throw new Error(`Dati non validi: ${validation.errors.join(", ")}`);
    }

    if (validation.warnings.length > 0) {
      console.warn("⚠️ Avvisi:", validation.warnings);
    }

    // 2. PARSING SICURO DEI VALORI
    const parsedData = {
      eta: parseNumericValue(dati.eta),
      valoreImmobile: parseNumericValue(dati.valoreImmobile),
      importoMutuo: parseNumericValue(dati.importoMutuo),
      durataMutuo: parseNumericValue(dati.durataMutuo),
      reddito: parseNumericValue(dati.reddito),
      finanziamenti:
        dati.finanziamentiBool && dati.finanziamentiTot !== "€ 0"
          ? parseNumericValue(dati.finanziamentiTot)
          : 0,
    };

    // 3. CALCOLI BASE
    const ltvMutuo =
      (parsedData.importoMutuo / parsedData.valoreImmobile) * 100;
    const anniLavoro = calculateWorkYears(dati.dataAssunzione);

    // 4. FILTRO MUTUI DISPONIBILI
    const listaFiltrata = listaMutui.filter((mutuo) => {
      const etaValida =
        parsedData.eta >= mutuo.eta.minima &&
        parsedData.eta <= mutuo.eta.massima;
      const classeEnergeticaValida =
        dati.classeEnergetica === "Non lo so" ||
        dati.classeEnergetica === "Si" ||
        !mutuo.soloClassiAB;
      
      const isee = dati.isee === 'Si' ? !mutuo.isee  : mutuo

      const importoValidatiom = parsedData.importoMutuo >= mutuo.importoInfo.importoMin && parsedData.importoMutuo <=  mutuo.importoInfo.importoMax 

      return etaValida && classeEnergeticaValida && isee && importoValidatiom;
    });

    if (listaFiltrata.length === 0) {
      return []
    }

    // 5. CALCOLO DETTAGLIATO PER OGNI MUTUO
    const risultati = [];
    const mediaScore = [];

    for (const mutuo of listaFiltrata) {
      try {
        // Calcolo tasso
        const tasso = calculateTasso(mutuo, ltvMutuo, parsedData.durataMutuo);

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

        const spesaIstruttoria = calculateSpeseIstruttoria(mutuo, parsedData.importoMutuo, ltvMutuo)

        // Calcolo scoring completo
        const scoringResult = calculateCompleteScore(
          dati,
          parsedData,
          ltvMutuo,
          anniLavoro,
          rata,
          mutuo
        );


        const costoStimatoPolizze = calculatePolizze(mutuo, parsedData.importoMutuo, parsedData.durataMutuo)


        // Calcolo costi extra
        const costiExtra = calculateCostiExtra(mutuo, parsedData.importoMutuo,costoStimatoPolizze , spesaIstruttoria);
        const speseMensili = mutuo.costoGestionePratica.importo + mutuo.incassoRata.importo + (costoStimatoPolizze.assicurazioneVita ? costoStimatoPolizze.assicurazioneVita : 0)


        


        // Calcolo totale da rimborsare
        const totaleDaRimborsare =
          rata * 12 * parsedData.durataMutuo - parsedData.importoMutuo;

        // Calcolo DTI per logging
        const redditoDisponibile =
          parsedData.reddito - parsedData.finanziamenti;
        const dti =
          redditoDisponibile > 0
            ? ((rata / redditoDisponibile) * 100).toFixed(2)
            : "100.00";

        let rataMiglioreConsigliata = redditoDisponibile * 0.35; // Partiamo da una % più bassa per trovare il rating migliore
        let rataMassimaAccettabile = redditoDisponibile * 0.45; // Limite massimo accettabile

        let bestScore = 0;
        let bestRata = rata;
        let bestScoringResult = scoringResult;

        let scoreMax = 0;
        let rataMax = rata;

        const SOGLIA_SCORE_ACCETTABILE = 65;
        const SOGLIA_SCORE_MINIMA = 42;
        const STEP_DECREMENTO = 25; // Riduciamo lo step per una ricerca più granulare

        
        while (rataMiglioreConsigliata > 100) {
          // Soglia minima più realistica
          const scoring = calculateCompleteScore(
            dati,
            parsedData,
            ltvMutuo,
            anniLavoro,
            rataMiglioreConsigliata,
            mutuo
          );

         
          

          if (scoring.totalScore >= SOGLIA_SCORE_ACCETTABILE) {
            bestScore = scoring.totalScore;
            bestRata = rataMiglioreConsigliata;
            bestScoringResult = scoring;
            
            break;
          }

          rataMiglioreConsigliata -= STEP_DECREMENTO;
        }

        // 3. RICERCA RATA MASSIMA (Score >= 30)
        while (rataMassimaAccettabile > 100) {
          const scoring = calculateCompleteScore(
            dati,
            parsedData,
            ltvMutuo,
            anniLavoro,
            rataMassimaAccettabile,
            mutuo
          );

          

          if (scoring.totalScore >= SOGLIA_SCORE_MINIMA) {
            scoreMax = scoring.totalScore;
            rataMax = rataMassimaAccettabile;
            
            break;
          }

          rataMassimaAccettabile -= STEP_DECREMENTO;
        }

        const importoCons = calculateImportoMutuo(
          bestRata,
          tasso,
          parsedData.durataMutuo
        );
        const importoMax = calculateImportoMutuo(
          rataMax,
          tasso,
          parsedData.durataMutuo
        );


        const rataTotale = calculateRataTotale(mutuo.costoGestionePratica.importo, mutuo.incassoRata.importo, rata,costoStimatoPolizze,mutuo.altriTipiSpese )
      
        const taeg = calculateTaeg(parsedData.importoMutuo,parsedData.durataMutuo, tasso, rata,costiExtra.totale, speseMensili)
        // const taeg = calculateTaeg2(mutuo, costoStimatoPolizze.assicurazioneIncendio)


        
        mediaScore.push({
          rataMax: rataMax,
          rataCons: bestRata,
          importoCons: importoCons,
          importoMax: importoMax,
        });





        // Costruzione risultato
        risultati.push({
          ...mutuo,
          ltvMutuo: Number(ltvMutuo.toFixed(2)),
          importoMutuo: parsedData.importoMutuo,
          rataMensile: rata,
          rataTotale: rataTotale,
          taeg: taeg,
          tassoScelto: tasso,
          score: scoringResult.totalScore,
          totaliCostiExtra: costiExtra.totale,
          durataAnni: parsedData.durataMutuo,
          impostaSostitutiva: {
            ...mutuo.impostaSostitutiva,
            importo: costiExtra.dettaglio.impostaSostitutiva,
          },
          speseIstruttoria: {
            ...mutuo.speseIstruttoria,
            importo: spesaIstruttoria
          }, 
          totaleDaRimborsare: totaleDaRimborsare,
          assicurazioniObbligatorie: {
            ...mutuo.assicurazioniObbligatorie,
            costoStimatoCasa: costoStimatoPolizze.assicurazioneIncendio,
            costoStimatoVita: costoStimatoPolizze.assicurazioneVita
          },
          praticaScore: {
            pro: scoringResult.pros,
            contro: scoringResult.cons,
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
      throw new Error(
        "Nessun mutuo calcolabile con i parametri forniti. Verifica i dati inseriti."
      );
    }

    let finalMediaScore: ScoreGenerale = {
      rataMax: calculateMedia(mediaScore, "rataMax"),
      rataCons: calculateMedia(mediaScore, "rataCons"),
      importoCons:
        Math.round(calculateMedia(mediaScore, "importoCons") / 1000) * 1000,
      importoMax:
        Math.round(calculateMedia(mediaScore, "importoMax") / 1000) * 1000,
      scoreMedio: Number((calculateMedia(risultati, "score")).toFixed(0)),
      importoRichiesto: parsedData.importoMutuo
    };





    return { risultati: risultati, scoreGenerale: finalMediaScore };
  } catch (error) {
    console.error("💥 Errore nella consulenza avanzata:", error);
    throw error; // Re-throw per permettere gestione upstream
  }
}
