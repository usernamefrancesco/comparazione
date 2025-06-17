import { Mutuo } from "@/lib/interface";
import { listaMutui } from "@/action/listamutui.action";
const profilo = {
  nome: "Intesa San Paolo",
  img: "https://www.mutuisupermarket.it/static/63ad502a71a1a9006a0d700a7e09b282/Intesa_Sanpaolo-1.svg",
};

export const listaMutuiNuovi: Mutuo[] = [
  {
    id: "mutuoIntesa-1",
    banca: profilo.nome,
    immagineBanca: profilo.img,
    nomeProdotto: "Mutuo Domus Green Giovani Prima Casa",

    importoMutuo: 180000,
    durataAnni: 25,
    rataMensile: 806.43,
    rataTotale: 241929,
    tassoScelto: 2.49,
    taeg: 2.65,
    tipiTasso: "Fisso",
    dataScadenzaOfferta: null,

    importoInfo: {
      importoMax: 250000,
      importoMin: 30000,
    },

    soloClassiAB: true,
    soloClassiLista: ["A", "A1", "A2", "A3", "A4"],

    consap: true,
    irs: false,
    isee: true,

    spesePerizia: {
      importo: 320,
      condizioni:
        "320 € per importi fino a 300.000 €; soggetto a variazione oltre soglie indicate",
      maxImporto: 890,
    },

    speseIstruttoria: {
      percentualeSuImporto: false,
      percentualeApplicata: 0,
      ltvImporto: false,
      importoLtv: [],
      importoMin: 0,
      importoMax: 0,
      importo: 0,
      promozione:
        "Azzeramento istruttoria per stipule del mese in corso - Offerta Mutuo Giovani",
      attiva: true,
    },

    impostaSostitutiva: {
      promozione: true,
      importo: 450,
    },

    incassoRata: {
      esiste: false,
      importo: 0,
    },

    costoGestionePratica: {
      esiste: false,
      importo: 0,
    },

    altriTipiSpese: {
      annuali: true,
      importo: 30,
    },

    totaleDaRimborsare: 241929,
    totaliCostiExtra: 800,

    assicurazioniObbligatorie: {
      assicurazioneCasa: true,
      assicurazioneVita: false,
      assicurazioneCasaMensile: false,
      assicurazioneVitaMensile: false,
      percentualePremioVita: 0,
      costoStimatoCasa: 450,
      costoStimatoVita: 0,
    },

    ltvMutuo: 95,

    eta: {
      minima: 18,
      massima: 76,
      maxUnder36: true,
    },

    score: 88,
    rrrMax: 40,

    tassiPerLTV: {
      "80.01-95.00": {
        "10": 2.48,
        "15": 2.48,
        "20": 2.48,
        "25": 2.49,
        "30": 2.49,
      },
      "95.01-100": {
        "10": 2.48,
        "15": 2.48,
        "20": 2.48,
        "25": 2.49,
        "30": 2.49,
      },
    },

    tipiDurata: [10, 15, 20, 25, 30],

    scontisticheGenerali: {
      esistono: true,
      listaSconti: [
        {
          causaleSconti: "Classe A o superiore",
          percentualeSconto: 0.5,
        },
      ],
    },

    proMutuo: [
      {
        titolo: "Zero spese istruttoria",
        descrizione:
          "Promozione attiva per giovani under 36, istruttoria gratuita",
      },
      {
        titolo: "Fino al 100% di finanziamento",
        descrizione:
          "Possibilità di ottenere l’intero importo del valore di perizia o acquisto",
      },
      {
        titolo: "Tasso fisso in promozione",
        descrizione: "Sconto sul tasso rispetto al Mutuo Domus ordinario",
      },
      {
        titolo: "Offerta green",
        descrizione:
          "Condizioni migliorative per immobili ad alta efficienza energetica",
      },
    ],

    controMutuo: [
      {
        titolo: "Limitazioni di età",
        descrizione: "Offerta riservata esclusivamente a clienti under 36",
      },
      {
        titolo: "Vincoli energetici",
        descrizione:
          "Necessaria classe energetica alta per accedere all’offerta Green",
      },
      {
        titolo: "ISEE obbligatorio per LTV > 80%",
        descrizione:
          "Richiesto ISEE < 40.000 € per accedere alle condizioni con LTV elevato",
      },
    ],

    praticaScore: {
      pro: [
        "Agevolazioni fiscali giovani",
        "Tassi promozionali competitivi",
        "Ampia durata disponibile",
        "Flessibilità preammortamento",
      ],
      contro: [
        "Obbligo di documentazione energetica specifica",
        "Non disponibile per età > 36 anni",
      ],
    },
  },

  // 2bank
  {
    id: "mutuoIntesa-2",
    banca: profilo.nome,
    immagineBanca: profilo.img,
    nomeProdotto: "Mutuo Domus Giovani Fisso",

    importoMutuo: 200000,
    durataAnni: 25,
    rataMensile: 945.23,
    rataTotale: 283569,

    tassoScelto: 2.99,
    taeg: 3.11,
    tipiTasso: "Fisso",
    dataScadenzaOfferta: null,

    importoInfo: {
      importoMax: 250000,
      importoMin: 30000,
    },

    soloClassiAB: false,
    soloClassiLista: [],

    consap: true,
    irs: false,
    isee: true,

    spesePerizia: {
      importo: 320,
      condizioni: "Per importi fino a 300.000 euro.",
      maxImporto: 890,
    },

    speseIstruttoria: {
      percentualeSuImporto: false,
      percentualeApplicata: 0,
      ltvImporto: false,
      importoLtv: [],
      importoMin: 0,
      importoMax: 0,
      importo: 0,
      promozione: "Azzerate per Mutuo Giovani",
      attiva: true,
    },

    impostaSostitutiva: {
      promozione: true,
      importo: 500,
    },

    incassoRata: {
      esiste: false,
      importo: 0,
    },

    costoGestionePratica: {
      esiste: false,
      importo: 0,
    },

    altriTipiSpese: {
      annuali: false,
      importo: 0,
    },

    totaleDaRimborsare: 283569,
    totaliCostiExtra: 820,

    assicurazioniObbligatorie: {
      assicurazioneCasa: true,
      assicurazioneVita: false,
      assicurazioneCasaMensile: false,
      assicurazioneVitaMensile: false,
      percentualePremioVita: 0,
      costoStimatoCasa: 500,
      costoStimatoVita: 0,
    },

    ltvMutuo: 95,

    eta: {
      minima: 18,
      massima: 35,
      maxUnder36: true,
    },

    score: 88,
    rrrMax: 40.0,

    tassiPerLTV: {
      "80.01-95.00": {
        "10": 2.98,
        "15": 2.98,
        "20": 2.98,
        "25": 2.99,
        "30": 2.99,
      },
      "95.01-100": {
        "10": 2.98,
        "15": 2.98,
        "20": 2.98,
        "25": 2.99,
        "30": 2.99,
      },
    },

    tipiDurata: [10, 15, 20, 25, 30],

    scontisticheGenerali: {
      esistono: false,
      listaSconti: [],
    },

    proMutuo: [
      {
        titolo: "Accesso al 100% di LTV",
        descrizione:
          "Consente il finanziamento fino al 100% del valore dell'immobile, rendendo accessibile l’acquisto anche senza anticipo iniziale.",
      },
      {
        titolo: "Condizioni agevolate per under 36",
        descrizione:
          "Zero spese di istruttoria e incasso rata, tassi promozionali riservati ai giovani fino a 35 anni non compiuti.",
      },
      {
        titolo: "Garanzia Consap inclusa",
        descrizione:
          "Accesso al Fondo di Garanzia Prima Casa per giovani senza necessità di garanzie aggiuntive.",
      },
    ],

    controMutuo: [
      {
        titolo: "Vincolo di età e ISEE",
        descrizione:
          "Limitato a richiedenti under 36 con ISEE inferiore a 40.000 euro per beneficiare delle condizioni.",
      },
      {
        titolo: "Polizza incendio obbligatoria vincolata",
        descrizione:
          "La polizza deve essere vincolata alla banca, con requisiti specifici anche se stipulata esternamente.",
      },
      {
        titolo: "Offerta non disponibile per seconde case",
        descrizione:
          "Riservato esclusivamente all’acquisto della prima casa, escludendo chi cerca soluzioni per investimento o seconde abitazioni.",
      },
    ],

    praticaScore: {
      pro: [
        "Azzeramento costi di istruttoria",
        "Garanzia statale inclusa",
        "Tasso promozionale fisso stabile nel tempo",
      ],
      contro: [
        "ISEE massimo richiesto",
        "Età limitata per accesso",
        "Obbligo di assicurazione incendio",
      ],
    },
  },

  // 3bank
  {
    id: "mutuo-domus-fisso-base",
    banca: profilo.nome,
    immagineBanca: profilo.img,
    nomeProdotto: "Mutuo Domus Fisso Piano Base",

    importoMutuo: 180000,
    durataAnni: 25,
    rataMensile: 915.32,
    rataTotale: 274596,
    tassoScelto: 3.59,
    taeg: 3.81,
    tipiTasso: "Fisso",
    dataScadenzaOfferta: null,

    importoInfo: {
      importoMax: 400000,
      importoMin: 30000,
    },

    soloClassiAB: false,
    soloClassiLista: [],

    consap: false,
    irs: false,
    isee: false,

    spesePerizia: {
      importo: 320,
      condizioni: "Costo fisso per importi fino a 300.000 euro",
      maxImporto: 890,
    },

    speseIstruttoria: {
      percentualeSuImporto: false,
      percentualeApplicata: 0,
      importo: 1350,
      promozione: "Nessuna promozione attiva sulle spese di istruttoria",
      attiva: false,
      importoMax: 0,
      importoMin: 0,
      ltvImporto: false,
      importoLtv: [{ importoMax: 300000, importoMin: 0 , importo: 320, percentualeApplicata: 0, ltv: 100}, {
        importoMax: 500000, importoMin: 300001 , importo: 500, percentualeApplicata: 0, ltv: 100
      },
      {importoMax: 700000, importoMin: 500001 , importo: 700, percentualeApplicata: 0, ltv: 100},
    ],
    },

    impostaSostitutiva: {
      promozione: true,
      importo: 450,
    },

    incassoRata: {
      esiste: true,
      importo: 4,
    },

    costoGestionePratica: {
      esiste: false,
      importo: 0,
    },

    altriTipiSpese: {
      annuali: true,
      importo: 0,
    },

    totaleDaRimborsare: 274596,
    totaliCostiExtra: 2124,

    assicurazioniObbligatorie: {
      assicurazioneCasa: true,
      assicurazioneVita: false,
      assicurazioneCasaMensile: false,
      assicurazioneVitaMensile: false,
      percentualePremioVita: 0,
      costoStimatoCasa: 400,
      costoStimatoVita: 0,
    },

    ltvMutuo: 90,

    eta: {
      minima: 18,
      massima: 75,
      maxUnder36: false,
    },

    score: 78,
    rrrMax: 35,

    tassiPerLTV: {
      "80.01-95.00": {
        "10": 3.58,
        "15": 3.58,
        "20": 3.58,
        "25": 3.59,
        "30": 3.59,
      },
      "95.01-100": {
        "10": 4.18,
        "15": 4.18,
        "20": 4.18,
        "25": 4.19,
        "30": 4.19,
      },
    },

    tipiDurata: [10, 15, 20, 25, 30],

    scontisticheGenerali: {
      esistono: true,
      listaSconti: [
        {
          causaleSconti:
            "Sconto sul tasso promozionale rispetto alle condizioni base del Foglio Informativo",
          percentualeSconto: 0.4,
        },
      ],
    },

    proMutuo: [
      {
        titolo: "Finanziamento fino al 100%",
        descrizione:
          "Consente di finanziare l'intero valore dell'immobile entro i limiti di LTV, utile per chi non dispone di capitale iniziale.",
      },
      {
        titolo: "Tasso fisso garantito",
        descrizione:
          "La rata resta invariata per tutta la durata, utile in contesti di inflazione o rialzi dei tassi.",
      },
      {
        titolo: "Elevata personalizzazione",
        descrizione:
          "Soluzioni flessibili con possibilità di combinare opzioni di rimborso e protezione su misura.",
      },
    ],

    controMutuo: [
      {
        titolo: "Spese iniziali elevate",
        descrizione:
          "L'importo delle spese di istruttoria e perizia può incidere significativamente sull'esborso iniziale.",
      },
      {
        titolo: "Tassi meno competitivi oltre il 95% LTV",
        descrizione:
          "I tassi aumentano sensibilmente per LTV superiori al 95%, rendendo il mutuo meno conveniente.",
      },
      {
        titolo: "Nessun vantaggio per immobili ad alta efficienza energetica",
        descrizione:
          "Non sono previsti sconti dedicati per immobili in classi A o B, a differenza di altri prodotti sul mercato.",
      },
    ],

    praticaScore: {
      pro: [
        "Tasso promozionale vantaggioso",
        "Ampia scelta di durate disponibili",
        "Copertura assicurativa non vincolata alla banca",
      ],
      contro: [
        "Spese fisse elevate non negoziabili",
        "Nessuna agevolazione under 36",
        "Assenza di opzioni green incentive",
      ],
    },
  },
];
