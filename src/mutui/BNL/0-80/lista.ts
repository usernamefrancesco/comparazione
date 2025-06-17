import { Mutuo } from "@/lib/interface";

const profilo = {
  nome: "BNL - Gruppo BNP Paribas",
  img: "https://img.gruppomol.it/mutuionline/loghi_high_density/19.svg",
};
export const bnl80giu: Mutuo[] = [
  {
    id: "mutuo-bnl-green-fisso",
    banca: profilo.nome,
    immagineBanca: profilo.img,
    nomeProdotto: "BNL Mutuo Green Fisso",

    importoMutuo: 180000,
    durataAnni: 25,
    rataMensile: 824.18,
    rataTotale: 247254,
    tassoScelto: 2.7,
    taeg: 2.85,
    tipiTasso: "Fisso",
    dataScadenzaOfferta: "2025-07-31",

    importoInfo: {
      importoMax: 150000,
      importoMin: 30000,
    },

    soloClassiAB: true,
    soloClassiLista: ["A", "B"],

    consap: false,
    irs: false,
    isee: false,

    spesePerizia: {
      importo: 350,
      condizioni: "Importo fisso per mutui fino a 500.000 €",
      maxImporto: 350,
    },

    speseIstruttoria: {
      percentualeSuImporto: false,
      ltvImporto: false,
      importoLtv: [],
      percentualeApplicata: 0.009,
      importo: 650,
      promozione: "Sconto 50% per immobili in classe A o B",
      attiva: true,
      importoMax: 2500,
      importoMin: 1170,
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
      annuali: false,
      importo: 0,
    },

    totaleDaRimborsare: 247254,
    totaliCostiExtra: 2470,

    assicurazioniObbligatorie: {
      assicurazioneCasa: false,
      assicurazioneVita: false,
      assicurazioneCasaMensile: false,
      assicurazioneVitaMensile: false,
      percentualePremioVita: 0,
      costoStimatoCasa: 300,
      costoStimatoVita: 0,
    },

    ltvMutuo: 80.0,

    eta: {
      minima: 18,
      massima: 70,
      maxUnder36: false,
    },

    score: 8.5,
    rrrMax: 35,

    tassiPerLTV: {
      "00.00-80.00": {
        "10": 2.7,
        "15": 2.7,
        "20": 2.7,
        "25": 2.7,
        "30": 2.7,
      },
    },

    tipiDurata: [10, 15, 20, 25, 30],

    scontisticheGenerali: {
      esistono: false,
      listaSconti: [
        {
          causaleSconti:
            "Sconto su spesa istruttoria per classi energetiche A o B",
          percentualeSconto: 50,
        },
      ],
    },

    proMutuo: [
      {
        titolo: "Tasso fisso competitivo",
        descrizione:
          "Il tasso del 2,70% fino a 30 anni è tra i più bassi sul mercato per l’LTV fino all’80%.",
      },
      {
        titolo: "Sconto sulle spese di istruttoria per immobili efficienti",
        descrizione:
          "Promozione dedicata a immobili in classe A o B, con spese dimezzate.",
      },
      {
        titolo: "Erogazione contestuale alla stipula",
        descrizione:
          "Disponibilità immediata del mutuo al momento del rogito, senza attese.",
      },
      {
        titolo: "Delibera rapida",
        descrizione:
          "La banca garantisce risposta creditizia entro 5 giorni lavorativi dalla domanda firmata.",
      },
    ],

    controMutuo: [
      {
        titolo: "LTV limitato all’80%",
        descrizione:
          "Non adatto a chi ha bassa disponibilità iniziale e necessiterebbe di un finanziamento superiore all’80%.",
      },
      {
        titolo: "Spese di istruttoria elevate senza sconto",
        descrizione:
          "Per immobili non in classe A o B, le spese d’istruttoria possono risultare onerose.",
      },
      {
        titolo: "Vincolo su assicurazione obbligatoria",
        descrizione:
          "È obbligatorio presentare una polizza incendio conforme ai requisiti della banca.",
      },
      {
        titolo: "Assenza di vantaggi per under 36",
        descrizione:
          "Non sono previste agevolazioni specifiche per i giovani o per l’acquisto della prima casa da parte di under 36.",
      },
    ],

    praticaScore: {
      pro: [
        "Offerta chiara e stabile nel tempo",
        "Istruttoria agevolata per immobili green",
        "Tempistiche rapide per la delibera",
      ],
      contro: [
        "Offerta limitata all’80% del valore immobile",
        "Costi accessori da considerare per immobili non efficienti",
      ],
    },
  },


  // 2bank
  {
    "id": "mutuo-bnl-under36-2025",
    "banca": profilo.nome,
    "immagineBanca": profilo.img,
    "nomeProdotto": "Mutuo Giovani Prima Casa BNL",
  
    "importoMutuo": 180000,
    "durataAnni": 25,
    "rataMensile": 860,
    "rataTotale": 258000,
    "tassoScelto": 3.20,
    "taeg": 3.45,
    "tipiTasso": "Fisso",
    "dataScadenzaOfferta": "2025-07-31",
  
    "importoInfo": {
      "importoMax": 500000,
      "importoMin": 30000
    },
  
    "soloClassiAB": false,
    "soloClassiLista": [],
  
    "consap": false,
    "irs": false,
    "isee": false,
  
    "spesePerizia": {
      "importo": 350,
      "condizioni": "Per mutui fino a 500.000€, costo fisso di 350€",
      "maxImporto": 350
    },
  
    "speseIstruttoria": {
      "percentualeSuImporto": false,
      "percentualeApplicata": 0.008,
      "importo": 1440,
      "promozione": "Sconto del 20% sulle condizioni ordinarie",
      "attiva": true,
      "importoMax": 2500,
      "importoMin": 800,
      "ltvImporto": true,
      "importoLtv": [
        {
          "ltv": 80,
          "importo": 180000,
          "percentualeApplicata": 0.0125,
          "importoMax": 80000,
          "importoMin": 0
        },
        {
          "ltv": 80,
          "importo": 180000,
          "percentualeApplicata": 0.01,
          "importoMax": 250000,
          "importoMin": 80000.01,
        },
        {
          "ltv": 80,
          "importo": 180000,
          "percentualeApplicata": 0.0090,
          "importoMax": 10000000,
          "importoMin": 250000.01
        },
      ]
    },
  
    "impostaSostitutiva": {
      "promozione": false,
      "importo": 450
    },
  
    "incassoRata": {
      "esiste": false,
      "importo": 0
    },
  
    "costoGestionePratica": {
      "esiste": false,
      "importo": 0
    },
  
    "altriTipiSpese": {
      "annuali": false,
      "importo": 0
    },
  
    "totaleDaRimborsare": 258000,
    "totaliCostiExtra": 2220,
  
    "assicurazioniObbligatorie": {
      "assicurazioneCasa": false,
      "assicurazioneVita": false,
      "assicurazioneCasaMensile": false,
      "assicurazioneVitaMensile": false,
      "percentualePremioVita": 0,
      "costoStimatoCasa": 320,
      "costoStimatoVita": 0
    },
  
    "ltvMutuo": 80,
  
    "eta": {
      "minima": 18,
      "massima": 85,
      "maxUnder36": true
    },
  
    "score": 82,
    "rrrMax": 35,
  
    "tassiPerLTV": {
      "00.00-80.00": {
        "10": 3.00,
        "15": 3.10,
        "20": 3.15,
        "25": 3.20,
        "30": 3.20
      }
    },
  
    "tipiDurata": [10, 15, 20, 25, 30],
  
    "scontisticheGenerali": {
      "esistono": false,
      "listaSconti": []
    },
  
    "proMutuo": [
      {
        "titolo": "Condizioni promozionali garantite fino al 31/07/2025",
        "descrizione": "Fino alla scadenza promozionale il mutuo prevede tassi agevolati rispetto alle condizioni ordinarie"
      },
      {
        "titolo": "Delibera in tempi rapidi",
        "descrizione": "Delibera creditizia entro 5 giorni lavorativi dalla firma della domanda per l'acquisto prima casa"
      },
      {
        "titolo": "Ampia scelta di durate",
        "descrizione": "Il mutuo è disponibile con durate da 10 a 30 anni, adattandosi a diverse esigenze"
      }
    ],
  
    "controMutuo": [
      {
        "titolo": "Importo finanziabile limitato",
        "descrizione": "Il finanziamento è disponibile solo fino all'80% del valore dell'immobile, limitando la leva finanziaria"
      },
      {
        "titolo": "Spese di istruttoria elevate",
        "descrizione": "Nonostante la promozione, le spese di istruttoria possono essere significative, soprattutto per importi più alti"
      },
      {
        "titolo": "Età limitata per accesso",
        "descrizione": "Accessibile solo a chi ha meno di 36 anni, escludendo una parte significativa dei potenziali mutuatari"
      }
    ],
  
    "praticaScore": {
      "pro": [
        "Ampia flessibilità nella durata",
        "Tempi rapidi di delibera",
        "Promozione con tassi agevolati"
      ],
      "contro": [
        "Importo massimo limitato all’80% LTV",
        "Età massima 36 anni non prorogabile",
        "Spese d'istruttoria con soglie elevate anche se scontate"
      ]
    }
  }
  
];
