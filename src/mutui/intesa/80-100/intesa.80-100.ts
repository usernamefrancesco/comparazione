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
        "25": 2.51,
        "30": 2.52,
      },
      "95.01-100": {
        "10": 2.48,
        "15": 2.48,
        "20": 2.48,
        "25": 2.51,
        "30": 2.52,
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
        "25": 3.01,
        "30": 3.02,
      },
      "95.01-100": {
        "10": 2.98,
        "15": 2.98,
        "20": 2.98,
        "25": 3.01,
        "30": 3.02,
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
    "id": "mutuo_domus_giovani_under36_fisso",
    "banca": profilo.nome,
    "immagineBanca": profilo.img,
    "nomeProdotto": "Mutuo Giovani Under 36 - Tasso Fisso",
  
    "importoMutuo": 180000,
    "durataAnni": 30,
    "rataMensile": 812.52,
    "rataTotale": 292507.20,
    "tassoScelto": 4.17,
    "taeg": 4.35,
    "tipiTasso": "Fisso",
    "dataScadenzaOfferta": "2025-07-31",
  
    "importoInfo": {
      "importoMax": 400000,
      "importoMin": 30000
    },
  
    "soloClassiAB": false,
    "soloClassiLista": [],
  
    "consap": false,
    "irs": false,
    "isee": true,
  
    "spesePerizia": {
      "importo": 320,
      "condizioni": "Importo fino a 300.000 €. Importi superiori seguono fasce incrementali.",
      "maxImporto": 890
    },
  
    "speseIstruttoria": {
      "percentualeSuImporto": false,
      "percentualeApplicata": 0,
      "importo": 1350,
      "promozione": "Nessuna promozione attiva",
      "attiva": false,
      "importoMax": 0,
      "importoMin": 0,
      "ltvImporto": false,
      "importoLtv": []
    },
  
    "impostaSostitutiva": {
      "promozione": true,
      "importo": 450
    },
  
    "incassoRata": {
      "esiste": true,
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
  
    "totaleDaRimborsare": 292957.20,
    "totaliCostiExtra": 2120,
  
    "assicurazioniObbligatorie": {
      "assicurazioneCasa": false,
      "assicurazioneVita": false,
      "assicurazioneCasaMensile": false,
      "assicurazioneVitaMensile": false,
      "percentualePremioVita": 0,
      "costoStimatoCasa": 350,
      "costoStimatoVita": 0
    },
  
    "ltvMutuo": 95,
    
    "eta": {
      "minima": 18,
      "massima": 35,
      "maxUnder36": true
    },
  
    "score": 83,
    "rrrMax": 35,
  
    "tassiPerLTV": {
      "80.01-95.00": {
        "10": 3.53,
        "15": 3.53,
        "20": 3.53,
        "25": 3.56,
        "30": 3.57,
      },
      "95.01-100": {
        "10": 4.13,
        "15": 4.13,
        "20": 4.13,
        "25": 4.16,
        "30": 4.17,
      
      }
    },
  
    "tipiDurata": [10, 15, 20, 25, 30, 35, 40],
  
    "scontisticheGenerali": {
      "esistono": true,
      "listaSconti": [
        {
          "causaleSconti": "Tasso agevolato riservato a under 36 per acquisto prima casa",
          "percentualeSconto": 0.40
        }
      ]
    },
  
    "proMutuo": [
      {
        "titolo": "Tassi agevolati under 36",
        "descrizione": "Accesso a tassi ridotti rispetto alle condizioni standard per i giovani richiedenti."
      },
      {
        "titolo": "Preammortamento flessibile fino a 10 anni",
        "descrizione": "Possibilità di iniziare con rate di soli interessi, utile per chi ha entrate crescenti nel tempo."
      },
      {
        "titolo": "Durate molto ampie",
        "descrizione": "Possibilità di estendere la durata fino a 40 anni, utile per contenere la rata mensile."
      }
    ],
  
    "controMutuo": [
      {
        "titolo": "Tassi più alti per LTV oltre 95%",
        "descrizione": "Superare il 95% di finanziamento comporta un aumento del tasso applicato."
      },
      {
        "titolo": "Spese iniziali elevate",
        "descrizione": "Tra perizia e istruttoria, le spese iniziali possono superare i 1.500 euro."
      },
      {
        "titolo": "Copertura assicurativa da vincolare",
        "descrizione": "In caso di polizza incendio non sottoscritta con la banca, è obbligatorio vincolarla formalmente."
      }
    ],
  
    "praticaScore": {
      "pro": [
        "Ampia durata e preammortamento flessibile",
        "Tasso competitivo per i giovani",
        "Assenza di costi periodici grazie alla promozione"
      ],
      "contro": [
        "Nessuna cumulabilità con altre agevolazioni",
        "Istruttoria fissa costosa",
        "Disponibile solo per finalità prima casa"
      ]
    }
  },

  // 4bank 1 luglio
  {
    "id": "mutuo-green-domus",
    "banca": profilo.nome,
    "immagineBanca": profilo.img,
    "nomeProdotto": "Mutuo Domus Green Tasso Fisso",
  
    "importoMutuo": 250000,
    "durataAnni": 25,
    "rataMensile": 1290.55,
    "rataTotale": 387165,
  
    "tassoScelto": 3.71,
    "taeg": 3.85,
    "tipiTasso": "Fisso",
    "dataScadenzaOfferta": null,
  
    "importoInfo": {
      "importoMax": 400000,
      "importoMin": 30000
    },
  
    "soloClassiAB": true,
    "soloClassiLista": ["A", "B"],
  
    "consap": false,
    "irs": false,
    "isee": false,
  
    "spesePerizia": {
      "importo": 320,
      "condizioni": "Importo valido per mutui fino a 300.000 €, soggetto a variazioni per importi superiori",
      "maxImporto": 890
    },
  
    "speseIstruttoria": {
      "percentualeSuImporto": false,
      "percentualeApplicata": 0,
      "importo": 0,
      "promozione": "Azzeramento delle spese d’istruttoria per stipule del mese in corso",
      "attiva": true,
      "importoMax": 0,
      "importoMin": 0,
      "ltvImporto": false,
      "importoLtv": []
    },
  
    "impostaSostitutiva": {
      "promozione": true,
      "importo": 625
    },
  
    "incassoRata": {
      "esiste": true,
      "importo": 4
    },
  
    "costoGestionePratica": {
      "esiste": false,
      "importo": 0
    },
  
    "altriTipiSpese": {
      "annuali": false,
      "importo": 0
    },
  
    "totaleDaRimborsare": 387165,
    "totaliCostiExtra": 949,
  
    "assicurazioniObbligatorie": {
      "assicurazioneCasa": true,
      "assicurazioneVita": false,
      "assicurazioneCasaMensile": false,
      "assicurazioneVitaMensile": false,
      "percentualePremioVita": 0,
      "costoStimatoCasa": 650,
      "costoStimatoVita": 0
    },
  
    "ltvMutuo": 90.0,
  
    "eta": {
      "minima": 18,
      "massima": 75,
      "maxUnder36": false
    },
  
    "score": 88,
    "rrrMax": 35.0,
  
    "tassiPerLTV": {
      "80.01-95.00": {
        "10": 3.68,
        "15": 3.68,
        "20": 3.68,
        "25": 3.71,
        "30": 3.72
      },
      "95.01-100": {
        "10": 3.68,
        "15": 3.68,
        "20": 3.68,
        "25": 3.71,
        "30": 3.72
      }
    },
  
    "tipiDurata": [10, 15, 20, 25, 30],
  
    "scontisticheGenerali": {
      "esistono": true,
      "listaSconti": [
        {
          "causaleSconti": "Sconto sul tasso per immobili con classe energetica A o B",
          "percentualeSconto": 0.15
        }
      ]
    },
  
    "proMutuo": [
      {
        "titolo": "Tasso fisso garantito",
        "descrizione": "Tassi certi per tutta la durata del mutuo, ottimali per pianificazione a lungo termine"
      },
      {
        "titolo": "Accesso dedicato per immobili green",
        "descrizione": "Condizioni agevolate riservate a immobili con elevata efficienza energetica"
      },
      {
        "titolo": "Istruttoria gratuita",
        "descrizione": "Zero costi di apertura pratica per stipule entro il mese in corso"
      }
    ],
  
    "controMutuo": [
      {
        "titolo": "Obbligo di polizza incendio vincolata",
        "descrizione": "È necessario stipulare una polizza incendio vincolata alla banca, aumentando il costo iniziale"
      },
      {
        "titolo": "Offerta non cumulabile",
        "descrizione": "L’offerta Green non si può combinare con altre promozioni o agevolazioni"
      },
      {
        "titolo": "Costi di perizia elevati",
        "descrizione": "Le spese per la perizia variano significativamente in base all’importo, fino a 890€"
      }
    ],
  
    "praticaScore": {
      "pro": [
        "Durate flessibili fino a 30 anni",
        "Condizioni agevolate per chi acquista immobili ad alta efficienza",
        "Zero spese istruttoria"
      ],
      "contro": [
        "Non accessibile per immobili in classi energetiche inferiori",
        "Obbligo di copertura incendio con vincolo a favore banca",
        "Nessuna cumulabilità con altri bonus casa"
      ]
    }
  },

  // 5bank 1 luglio
  {
    "id": "mutuo-domus-fisso-001",
    "banca": "Intesa Sanpaolo",
    "immagineBanca": profilo.img,
    "nomeProdotto": "Mutuo Domus Fisso Piano Base",
    "importoMutuo": 250000,
    "durataAnni": 25,
    "rataMensile": 1350,
    "rataTotale": 1350 * 25 * 12,
    "tassoScelto": 4.21,
    "taeg": 4.50,
    "tipiTasso": "Fisso",
    "dataScadenzaOfferta": null,
    "importoInfo": {
      "importoMax": 400000,
      "importoMin": 30000
    },
    "soloClassiAB": false,
    "soloClassiLista": [],
    "consap": false,
    "irs": false,
    "isee": false,
    "spesePerizia": {
      "importo": 320,
      "condizioni": "Costo per perizia fino a 300.000 € di importo mutuo.",
      "maxImporto": 320
    },
    "speseIstruttoria": {
      "percentualeSuImporto": false,
      "percentualeApplicata": 0,
      "importo": 1350,
      "promozione": "Nessuna promozione attiva",
      "attiva": false,
      "importoMax": 1350,
      "importoMin": 1350,
      "ltvImporto": false,
      "importoLtv": []
    },
    "impostaSostitutiva": {
      "promozione": true,
      "importo": 0.0025 * 250000
    },
    "incassoRata": {
      "esiste": true,
      "importo": 4
    },
    "costoGestionePratica": {
      "esiste": false,
      "importo": 0
    },
    "altriTipiSpese": {
      "annuali": true,
      "importo": 50
    },
    "totaleDaRimborsare": 1350 * 25 * 12 + 50 * 25 + 1350 + 320 + 4 * 12 * 25 + 0.0025 * 250000,
    "totaliCostiExtra": 50 * 25 + 1350 + 320 + 4 * 12 * 25 + 0.0025 * 250000,
    "assicurazioniObbligatorie": {
      "assicurazioneCasa": true,
      "assicurazioneVita": false,
      "assicurazioneCasaMensile": true,
      "assicurazioneVitaMensile": false,
      "percentualePremioVita": 0,
      "costoStimatoCasa": 480,
      "costoStimatoVita": 0
    },
    "ltvMutuo": 80,
    "eta": {
      "minima": 18,
      "massima": 75,
      "maxUnder36": false
    },
    "score": 75,
    "rrrMax": 35,
    "tassiPerLTV": {
      "80.01-95.00": {
        "10": 4.18,
        "15": 4.18,
        "20": 4.18,
        "25": 4.21,
        "30": 4.22
      },
      "95.01-100": {
        "10": 4.18,
        "15": 4.18,
        "20": 4.18,
        "25": 4.21,
        "30": 4.22
      }
    },
    "tipiDurata": [10, 15, 20, 25, 30],
    "scontisticheGenerali": {
      "esistono": false,
      "listaSconti": []
    },
    "proMutuo": [
      {
        "titolo": "Tasso fisso garantito per tutta la durata",
        "descrizione": "Il tasso fisso consente la certezza della rata per tutta la durata del mutuo, proteggendo da possibili rialzi dei tassi di mercato."
      },
      {
        "titolo": "Finanziamento fino al 100% LTV",
        "descrizione": "Consente di finanziare fino al 100% del valore di acquisto o perizia, facilitando l'accesso anche senza anticipo."
      },
      {
        "titolo": "Nessuna penale per estinzione anticipata",
        "descrizione": "Possibilità di estinguere parzialmente o totalmente il mutuo senza costi aggiuntivi."
      }
    ],
    "controMutuo": [
      {
        "titolo": "Tasso relativamente alto per mercato attuale",
        "descrizione": "Il tasso fisso supera il 4%, non competitivo rispetto a tassi variabili più bassi e potrebbe risultare oneroso sul lungo periodo."
      },
      {
        "titolo": "Spese istruttoria fisse elevate",
        "descrizione": "La spesa istruttoria di 1350 € è significativa e non modulata in base all'importo del mutuo, aumentando il costo iniziale."
      },
      {
        "titolo": "Obbligo di polizza incendio vincolata",
        "descrizione": "La banca richiede polizza incendio con vincolo a favore dell'istituto, limitando la libertà di scelta assicurativa."
      }
    ],
    "praticaScore": {
      "pro": [
        "Elevata flessibilità durata mutuo",
        "Nessuna penale estinzione anticipata",
        "Finanziamento fino al 100% LTV"
      ],
      "contro": [
        "Costo istruttoria elevato e non proporzionato",
        "Tasso fisso piuttosto alto rispetto a soluzioni alternative",
        "Obbligo polizza incendio con vincolo"
      ]
    }
  },

  // 5 bank 1 lugl
  {
    "id": "mutuo-domus-under46-green-2025",
    "banca": "Intesa Sanpaolo",
    "immagineBanca": profilo.img,
    "nomeProdotto": "Mutuo Domus Offerta Under 46 Green",
    "importoMutuo": 95000,
    "durataAnni": 30,
    "rataMensile": 404.12,
    "rataTotale": 145483.2,
    "tassoScelto": 3.07,
    "taeg": 3.26,
    "tipiTasso": "Fisso",
    "dataScadenzaOfferta": null,
    "importoInfo": {
      "importoMax": 400000,
      "importoMin": 30000
    },
    "soloClassiAB": true,
    "soloClassiLista": ["A", "B", "C"],
    "consap": false,
    "irs": false,
    "isee": false,
    "spesePerizia": {
      "importo": 320,
      "condizioni": "Costo della perizia per importi fino a 300.000 €",
      "maxImporto": 320
    },
    "speseIstruttoria": {
      "percentualeSuImporto": false,
      "percentualeApplicata": 0,
      "importo": 0,
      "promozione": "Azzeramento spese istruttoria per stipule mese in corso",
      "attiva": true,
      "importoMax": 0,
      "importoMin": 0,
      "ltvImporto": false,
      "importoLtv": []
    },
    "impostaSostitutiva": {
      "promozione": true,
      "importo": 237.5
    },
    "incassoRata": {
      "esiste": true,
      "importo": 4
    },
    "costoGestionePratica": {
      "esiste": false,
      "importo": 0
    },
    "altriTipiSpese": {
      "annuali": true,
      "importo": 0
    },
    "totaleDaRimborsare": 145483.2,
    "totaliCostiExtra": 561.5,
    "assicurazioniObbligatorie": {
      "assicurazioneCasa": true,
      "assicurazioneVita": false,
      "assicurazioneCasaMensile": false,
      "assicurazioneVitaMensile": false,
      "percentualePremioVita": 0,
      "costoStimatoCasa": 320,
      "costoStimatoVita": 0
    },
    "ltvMutuo": 95,
    "eta": {
      "minima": 18,
      "massima": 46,
      "maxUnder36": false
    },
    "score": 78,
    "rrrMax": 38,
    "tassiPerLTV": {
      "80.01-95.00": {
        "10": 3.03,
        "15": 3.03,
        "20": 3.03,
        "25": 3.06,
        "30": 3.07
      }
    },
    "tipiDurata": [10, 15, 20, 25, 30],
    "scontisticheGenerali": {
      "esistono": true,
      "listaSconti": [
        {
          "causaleSconti": "Sconto tasso per classe energetica A o B",
          "percentualeSconto": 0.15
        }
      ]
    },
    "proMutuo": [
      {
        "titolo": "Offerta riservata under 46",
        "descrizione": "Accesso a condizioni agevolate per giovani fino a 46 anni non compiuti."
      },
      {
        "titolo": "Tasso fisso competitivo per fascia LTV alta",
        "descrizione": "Tassi fissi vantaggiosi anche per finanziamenti fino al 95% del valore dell’immobile."
      },
      {
        "titolo": "Azzeramento spese istruttoria",
        "descrizione": "Per stipule nel mese in corso, nessun costo aggiuntivo per l’istruttoria."
      }
    ],
    "controMutuo": [
      {
        "titolo": "Assicurazione incendio obbligatoria",
        "descrizione": "Polizza casa obbligatoria con costi non trascurabili, senza possibilità di esclusione."
      },
      {
        "titolo": "Limite età massimo rigido",
        "descrizione": "Non è possibile accedere all’offerta se al termine del mutuo si supera l’età di 76 anni."
      },
      {
        "titolo": "Nessuna flessibilità su spese di gestione pratica",
        "descrizione": "Costi di gestione pratica non esplicitamente inclusi e potenzialmente a carico del cliente."
      }
    ],
    "praticaScore": {
      "pro": [
        "Importo minimo finanziabile accessibile a giovani",
        "Durate flessibili con scelta multipla",
        "Azzeramento spese istruttoria come incentivo"
      ],
      "contro": [
        "Spese obbligatorie di perizia e assicurazione casa",
        "Limitazioni anagrafiche stringenti",
        "Tasso fisso che potrebbe risultare alto rispetto al variabile in alcuni scenari"
      ]
    }
  },

  // 6bank 1 lug
  {
    "id": "mutuo-domus-fisso-giovani",
    "banca": "Intesa Sanpaolo",
    "immagineBanca": profilo.img,
    "nomeProdotto": "MUTUO DOMUS OFFERTA UNDER 46",
  
    "importoMutuo": 200000,
    "durataAnni": 25,
    "rataMensile": 1007.25,
    "rataTotale": 302175,
    "tassoScelto": 3.56,
    "taeg": 3.79,
    "tipiTasso": "Fisso",
    "dataScadenzaOfferta": null,
  
    "importoInfo": {
      "importoMax": 400000,
      "importoMin": 30000
    },
  
    "soloClassiAB": false,
    "soloClassiLista": [],
  
    "consap": false,
    "irs": false,
    "isee": false,
  
    "spesePerizia": {
      "importo": 320,
      "condizioni": "Importo applicabile per mutui fino a 300.000€",
      "maxImporto": 890
    },
  
    "speseIstruttoria": {
      "percentualeSuImporto": false,
      "percentualeApplicata": 0,
      "importo": 1350,
      "promozione": "Nessuna promozione attiva sull'istruttoria",
      "attiva": false,
      "importoMax": 0,
      "importoMin": 0,
      "ltvImporto": false,
      "importoLtv": []
    },
  
    "impostaSostitutiva": {
      "promozione": true,
      "importo": 500
    },
  
    "incassoRata": {
      "esiste": true,
      "importo": 4
    },
  
    "costoGestionePratica": {
      "esiste": false,
      "importo": 0
    },
  
    "altriTipiSpese": {
      "annuali": true,
      "importo": 48
    },
  
    "totaleDaRimborsare": 302175,
    "totaliCostiExtra": 2222,
  
    "assicurazioniObbligatorie": {
      "assicurazioneCasa": false,
      "assicurazioneVita": false,
      "assicurazioneCasaMensile": false,
      "assicurazioneVitaMensile": false,
      "percentualePremioVita": 0,
      "costoStimatoCasa": 300,
      "costoStimatoVita": 0
    },
  
    "ltvMutuo": 95,
  
    "eta": {
      "minima": 18,
      "massima": 46,
      "maxUnder36": false
    },
  
    "score": 87,
    "rrrMax": 40,
  
    "tassiPerLTV": {
      "80.01-95.00": {
        "10": 3.53,
        "15": 3.53,
        "20": 3.53,
        "25": 3.56,
        "30": 3.57
      }
    },
  
    "tipiDurata": [10, 15, 20, 25, 30],
  
    "scontisticheGenerali": {
      "esistono": true,
      "listaSconti": [
        {
          "causaleSconti": "Sconto sul tasso rispetto alle condizioni economiche standard",
          "percentualeSconto": 0.30
        }
      ]
    },
  
    "proMutuo": [
      {
        "titolo": "Tasso fisso promozionato",
        "descrizione": "Offerta con tasso fisso ridotto rispetto alle condizioni standard del foglio informativo"
      },
      {
        "titolo": "Ampia scelta di piani di rimborso",
        "descrizione": "Disponibilità di piano classico o piano light con preammortamento fino a 10 anni"
      },
      {
        "titolo": "Durata flessibile",
        "descrizione": "Possibilità di scegliere tra durate da 10 a 30 anni per adattarsi alle esigenze del cliente"
      }
    ],
  
    "controMutuo": [
      {
        "titolo": "Tasso fisso non cumulabile con agevolazioni",
        "descrizione": "Le condizioni promozionali non sono cumulabili con altre agevolazioni statali o fiscali"
      },
      {
        "titolo": "Obbligo di perizia a pagamento",
        "descrizione": "La perizia ha un costo variabile a carico del cliente, fino a 890€"
      },
      {
        "titolo": "Spese di incasso rata",
        "descrizione": "È previsto un costo fisso mensile per l'incasso della rata"
      }
    ],
  
    "praticaScore": {
      "pro": [
        "Tasso fisso competitivo anche per LTV fino al 95%",
        "Non è obbligatoria l'apertura del conto corrente",
        "Possibilità di polizza incendio esterna"
      ],
      "contro": [
        "Età massima limitata per i cointestatari",
        "Polizza incendio obbligatoria, anche se libera nella scelta",
        "Nessuna flessibilità sul cumulo con altre agevolazioni"
      ]
    }
  }
  

  
  
  
];
