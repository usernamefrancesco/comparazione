import { Mutuo } from "@/lib/interface";


const profilo = {
    nome: 'CheBanca!',
    img: 'https://img.gruppomol.it/mutuionline/loghi_high_density/46.svg'
}

export const cheBanca780giu : Mutuo[]= [
  {
    "id": "mutuo-chebanca-tasso-fisso-luglio-2025",
    "banca": "CheBanca!",
    "immagineBanca": profilo.img,
    "nomeProdotto": "Mutuo Tasso Fisso Luglio 2025",
    "importoMutuo": 200000,
    "durataAnni": 25,
    "rataMensile": 935.45,
    "rataTotale": 280635,
    "tassoScelto": 3.2,
    "taeg": 3.35,
    "tipiTasso": "Fisso",
    "dataScadenzaOfferta": "2025-07-31",
    "importoInfo": {
      "importoMax": 1000000,
      "importoMin": 50000
    },
    "soloClassiAB": false,
    "soloClassiLista": [],
    "consap": false,
    "irs": true,
    "isee": false,
    "spesePerizia": {
      "importo": 300,
      "condizioni": "300 € per ogni immobile in garanzia. In caso di più immobili, si applicano per ciascuno. Gratuite in caso di surroga.",
      "maxImporto": 300
    },
    "speseIstruttoria": {
      "percentualeSuImporto": true,
      "percentualeApplicata": 0.01,
      "importo": 2000,
      "promozione": "Azzerate per immobili in classe energetica A o B.",
      "attiva": true,
      "importoMax": 3000,
      "importoMin": 1000,
      "ltvImporto": false,
      "importoLtv": []
    },
    "impostaSostitutiva": {
      "promozione": true,
      "importo": 500
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
      "annuali": true,
      "importo": 50
    },
    "totaleDaRimborsare": 281135,
    "totaliCostiExtra": 2600,
    "assicurazioniObbligatorie": {
      "assicurazioneCasa": true,
      "assicurazioneVita": false,
      "assicurazioneCasaMensile": false,
      "assicurazioneVitaMensile": false,
      "percentualePremioVita": 0,
      "costoStimatoCasa": 450,
      "costoStimatoVita": 0
    },
    "ltvMutuo": 80,
    "eta": {
      "minima": 18,
      "massima": 80,
      "maxUnder36": false
    },
    "score": 78,
    "rrrMax": 35,
    "tassiPerLTV": {
      "00.00-50.00": {
        "10": 0.7,
        "15": 0.7,
        "20": 0.7,
        "25": 0.75,
        "30": 0.8
      },
      "50.01-60.00": {
        "10": 0.7,
        "15": 0.7,
        "20": 0.7,
        "25": 0.75,
        "30": 0.8
      },
      "60.01-70.00": {
        "10": 0.75,
        "15": 0.75,
        "20": 0.75,
        "25": 0.8,
        "30": 0.85
      },
      "70.01-80.00": {
        "10": 0.85,
        "15": 0.85,
        "20": 0.85,
        "25": 0.85,
        "30": 0.9
      }
    },
    "tipiDurata": [10, 15, 20, 25, 30],
    "scontisticheGenerali": {
      "esistono": true,
      "listaSconti": [
        {
          "causaleSconti": "Sconto sullo spread per importi superiori a €250.000",
          "percentualeSconto": 0.1
        },
        {
          "causaleSconti": "Azzeramento spese di istruttoria per immobili in classe energetica A o B",
          "percentualeSconto": 100
        }
      ]
    },
    "proMutuo": [
      {
        "titolo": "Spread competitivo per LTV bassi",
        "descrizione": "Con LTV inferiori al 60%, lo spread applicato è tra i più bassi sul mercato, rendendo il mutuo molto vantaggioso per chi ha un alto anticipo."
      },
      {
        "titolo": "Istruttoria gratuita per immobili ad alta efficienza energetica",
        "descrizione": "Azzeramento delle spese per immobili in classe A o B, incentivando la sostenibilità e il risparmio."
      }
    ],
    "controMutuo": [
      {
        "titolo": "Tasso vincolato all’IRS",
        "descrizione": "Il tasso effettivo dipende dall’EURIRS del mese precedente alla delibera, rendendo poco prevedibile il valore finale fino all'approvazione."
      },
      {
        "titolo": "Spese di perizia a carico del cliente anche per tranches successive",
        "descrizione": "Ogni perizia extra comporta un costo aggiuntivo per il cliente, anche nei casi di erogazioni frazionate."
      }
    ],
    "praticaScore": {
      "pro": [
        "Istruttoria gratuita per immobili in classe energetica A o B",
        "Spese di incasso rata non previste",
        "Possibilità di ottenere spread ridotti per importi elevati"
      ],
      "contro": [
        "Tasso non noto al momento della richiesta",
        "Costo di gestione annuo non trascurabile",
        "Spese di perizia anche per tranches successive"
      ]
    }
  }
  
      
]