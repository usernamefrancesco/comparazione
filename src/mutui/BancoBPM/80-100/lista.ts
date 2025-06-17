import { Mutuo } from "@/lib/interface"


const bancobpm = {
    nome: 'Banco BPM',
    img: 'https://www.mutuisupermarket.it/static/e44e010ae740971ec8f2f116ff5be19b/Banco_BPM-1.svg'
}

export const BancoBPM80su: Mutuo[] = [
  {
    "id": "mutuo-green-giovani-2025",
    "banca": bancobpm.nome,
    "immagineBanca": bancobpm.img,
    "nomeProdotto": "Mutuo Green Giovani Tasso Fisso",
  
    "importoMutuo": 200000,
    "durataAnni": 25,
    "rataMensile": 950,
    "rataTotale": 285000,
    "tassoScelto": 2.50,
    "taeg": 2.67,
    "tipiTasso": "Fisso",
    "dataScadenzaOfferta": "2025-06-30T00:00:00.000Z",
  
    "importoInfo": {
      "importoMax": 250000,
      "importoMin": 50000
    },
  
    "soloClassiAB": true,
    "soloClassiLista": ["A", "B"],
  
    "consap": true,
    "irs": true,
    "isee": true,
  
    "spesePerizia": {
      "importo": 320,
      "condizioni": "Obbligatoria e a carico del mutuatario",
      "maxImporto": 320
    },
  
    "speseIstruttoria": {
      percentualeSuImporto: false ,
      percentualeApplicata: 0,
      ltvImporto: false,
      importoLtv: [],
      importoMin: 0,
          importoMax: 0,
      "importo": 0,
      "promozione": "Azzeramento delle spese di istruttoria",
      "attiva": true
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
      "importo": 15
    },
  
    "totaleDaRimborsare": 285000,
    "totaliCostiExtra": 835,
  
    "assicurazioniObbligatorie": {
      "assicurazioneCasa": true,
      "assicurazioneVita": false,
      "assicurazioneCasaMensile": false,
      "assicurazioneVitaMensile": false,
      "percentualePremioVita": 0,
      "costoStimatoCasa": 300,
      "costoStimatoVita": 0
    },
  
    "ltvMutuo": 80.0,
  
    "eta": {
      "minima": 18,
      "massima": 35,
      "maxUnder36": true
    },
  
    "score": 82,
    "rrrMax": 35,
  
    "tassiPerLTV": {
      "00.00-80.00": {
        "10": 0.15,
        "15": 0.15,
        "20": 0.15,
        "25": 0.30,
        "30": 0.25
      },
      "80.01-95.00": {
        "10": 0.15,
        "15": 0.15,
        "20": 0.15,
        "25": 0.30,
        "30": 0.25
      },
      "95.01-100": {
        "10": 0.15,
        "15": 0.15,
        "20": 0.15,
        "25": 0.30,
        "30": 0.25
      },
    },
  
    "tipiDurata": [10, 15, 20, 25, 30],
  
    "scontisticheGenerali": {
      "esistono": true,
      "listaSconti": [
        
        {
          "causaleSconti": "Miglioramento di almeno due classi energetiche o EP gl, nren inferiore del 30%",
          "percentualeSconto": 0.10
        }
      ]
    },
  
    "proMutuo": [
      {
        "titolo": "Tasso competitivo per giovani",
        "descrizione": "Spread contenuto con possibilità di sconti per efficienza energetica"
      },
      {
        "titolo": "Zero costi di istruttoria",
        "descrizione": "Nessuna spesa per apertura pratica"
      },
      {
        "titolo": "Nessuna penale per estinzione anticipata",
        "descrizione": "Estinzione gratuita in qualsiasi momento"
      }
    ],
  
    "controMutuo": [
      {
        "titolo": "Spese di perizia obbligatorie",
        "descrizione": "Costo fisso di €320 a carico del richiedente"
      },
      {
        "titolo": "Vincolo di classe energetica",
        "descrizione": "Accessibile solo per immobili in classe A o B"
      }
    ],
  
    "praticaScore": {
      "pro": [
        "Tasso IRS + spread competitivo",
        "Sconto per immobili Green",
        "Consap inclusa"
      ],
      "contro": [
        "Classe energetica vincolante",
        "Spese di perizia non incluse"
      ]
    }
  },
  // 2
  {
    "id": "bancoBPM-2",
    "banca": bancobpm.nome,
    "immagineBanca": bancobpm.img,
    "nomeProdotto": "Mutuo Giovani Tasso Fisso",
  
    "importoMutuo": 200000,
    "durataAnni": 25,
    "rataMensile": 950,
    "rataTotale": 285000,
    "tassoScelto": 2.50,
    "taeg": 2.67,
    "tipiTasso": "Fisso",
    "dataScadenzaOfferta": "2025-06-30T00:00:00.000Z",
  
    "importoInfo": {
      "importoMax": 250000,
      "importoMin": 50000
    },
  
    "soloClassiAB": false,
    "soloClassiLista": ["A", "B"],
  
    "consap": true,
    "irs": true,
    "isee": true,
  
    "spesePerizia": {
      "importo": 320,
      "condizioni": "Obbligatoria e a carico del mutuatario",
      "maxImporto": 320
    },
  
    "speseIstruttoria": {
      percentualeSuImporto: false ,
      percentualeApplicata: 0,
      ltvImporto: false,
      importoLtv: [],
      importoMin: 0,
          importoMax: 0,
      "importo": 0,
      "promozione": "Azzeramento delle spese di istruttoria",
      "attiva": true
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
      "importo": 15
    },
  
    "totaleDaRimborsare": 285000,
    "totaliCostiExtra": 835,
  
    "assicurazioniObbligatorie": {
      "assicurazioneCasa": true,
      "assicurazioneVita": false,
      "assicurazioneCasaMensile": false,
      "assicurazioneVitaMensile": false,
      "percentualePremioVita": 0,
      "costoStimatoCasa": 300,
      "costoStimatoVita": 0
    },
  
    "ltvMutuo": 80.0,
  
    "eta": {
      "minima": 18,
      "massima": 35,
      "maxUnder36": true
    },
  
    "score": 82,
    "rrrMax": 35,
  
    "tassiPerLTV": {
      "00.00-80.00": {
        "10": 0.35,
        "15": 0.35,
        "20": 0.35,
        "25": 0.50,
        "30": 0.45
      },
      "80.01-95.00": {
        "10": 0.35,
        "15": 0.35,
        "20": 0.35,
        "25": 0.50,
        "30": 0.45
      },
      "95.01-100": {
        "10": 0.35,
        "15": 0.35,
        "20": 0.35,
        "25": 0.50,
        "30": 0.45
      },
    },
  
    "tipiDurata": [10, 15, 20, 25, 30],
  
    "scontisticheGenerali": {
      "esistono": true,
      "listaSconti": [
        
        {
          "causaleSconti": "Miglioramento di almeno due classi energetiche o EP gl, nren inferiore del 30%",
          "percentualeSconto": 0.10
        }
      ]
    },
  
    "proMutuo": [
      {
        "titolo": "Tasso competitivo per giovani",
        "descrizione": "Spread contenuto con possibilità di sconti per efficienza energetica"
      },
      {
        "titolo": "Zero costi di istruttoria",
        "descrizione": "Nessuna spesa per apertura pratica"
      },
      {
        "titolo": "Nessuna penale per estinzione anticipata",
        "descrizione": "Estinzione gratuita in qualsiasi momento"
      }
    ],
  
    "controMutuo": [
      {
        "titolo": "Spese di perizia obbligatorie",
        "descrizione": "Costo fisso di €320 a carico del richiedente"
      },
      {
        "titolo": "Vincolo di classe energetica",
        "descrizione": "Accessibile solo per immobili in classe A o B"
      }
    ],
  
    "praticaScore": {
      "pro": [
        "Tasso IRS + spread competitivo",
        "Sconto per immobili Green",
        "Consap inclusa"
      ],
      "contro": [
        "Classe energetica vincolante",
        "Spese di perizia non incluse"
      ]
    }
  }
  
      
]