import { Mutuo } from "@/lib/interface";

const profilo ={
    nome: 'ING Bank',
    img: 'https://img.gruppomol.it/mutuionline/loghi_high_density/6.svg'
}

export const ing80su: Mutuo[] = [
  {
    "id": "mutuo_green_001",
    "banca": profilo.nome,
    "immagineBanca": profilo.img,
    "nomeProdotto": "Mutuo Arancio Green",
    "importoMutuo": 200000,
    "durataAnni": 25,
    "rataMensile": 890.50,
    "rataTotale": 267150,
    "tassoScelto": 3.10,
    "taeg": 3.28,
    "tipiTasso": "Fisso",
    "dataScadenzaOfferta": "2025-08-06",
    "importoInfo": {
      "importoMax": 2000000,
      "importoMin": 50000
    },
    "soloClassiAB": true,
    "soloClassiLista": ["A", "B"],
    "consap": false,
    "irs": true,
    "isee": false,
    "spesePerizia": {
      "importo": 0,
      "condizioni": "Azzerata per immobili in classe A o B",
      "maxImporto": 300
    },
    "speseIstruttoria": {
      "percentualeSuImporto": false,
      "percentualeApplicata": 0,
      "importo": 950,
      "promozione": "Nessuna promozione attiva",
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
      "importo": 1.5
    },
    "costoGestionePratica": {
      "esiste": true,
      "importo": 39
    },
    "altriTipiSpese": {
      "annuali": true,
      "importo": 39
    },
    "totaleDaRimborsare": 267150,
    "totaliCostiExtra": 1511.5,
    "assicurazioniObbligatorie": {
      "assicurazioneCasa": false,
      "assicurazioneVita": false,
      "assicurazioneCasaMensile": false,
      "assicurazioneVitaMensile": false,
      "percentualePremioVita": 0,
      "costoStimatoCasa": 0,
      "costoStimatoVita": 0
    },
    "ltvMutuo": 90,
    "eta": {
      "minima": 18,
      "massima": 80,
      "maxUnder36": false
    },
    "score": 82,
    "rrrMax": 35,
    "tassiPerLTV": {
      "00.00-50.00": {
        "10": 1.05,
        "15": 1.15,
        "20": 1.25,
        "25": 1.15,
        "30": 1.25
      },
      "50.01-70.00": {
        "10": 1.10,
        "15": 1.20,
        "20": 1.30,
        "25": 1.20,
        "30": 1.30
      },
      "70.01-80.00": {
        "10": 1.15,
        "15": 1.25,
        "20": 1.35,
        "25": 1.25,
        "30": 1.35
      },
      "80.01-95.00": {
        "10": 1.85,
        "15": 1.95,
        "20": 2.05,
        "25": 1.95,
        "30": 2.05
      }
    },
    "tipiDurata": [10, 15, 20, 25, 30],
    "scontisticheGenerali": {
      "esistono": true,
      "listaSconti": [
        {
          "causaleSconti": "Sconto sul tasso per immobili in classe energetica A o B",
          "percentualeSconto": 0.2
        }
      ]
    },
    "proMutuo": [
      {
        "titolo": "Spread ridotto per immobili efficienti",
        "descrizione": "La presenza di un immobile in classe energetica elevata garantisce un tasso più conveniente"
      },
      {
        "titolo": "Perizia gratuita per immobili green",
        "descrizione": "Azzeramento delle spese di perizia per immobili in classe A o B"
      }
    ],
    "controMutuo": [
      {
        "titolo": "Offerta limitata solo a immobili efficienti",
        "descrizione": "Non accessibile a chi acquista immobili con classe energetica inferiore"
      }
    ],
    "praticaScore": {
      "pro": [
        "Spese di perizia azzerate",
        "Tasso agevolato grazie alla classe energetica"
      ],
      "contro": [
        "Limitato alle classi energetiche elevate"
      ]
    }
  },
  
  // 2bank
  {
    "id": "mutuo_standard_001",
    "banca": profilo.nome,
    "immagineBanca": profilo.img,
    "nomeProdotto": "Mutuo Arancio Acquisto",
    "importoMutuo": 180000,
    "durataAnni": 20,
    "rataMensile": 870.25,
    "rataTotale": 208860,
    "tassoScelto": 3.30,
    "taeg": 3.55,
    "tipiTasso": "Fisso",
    "dataScadenzaOfferta": "2025-08-06",
    "importoInfo": {
      "importoMax": 2000000,
      "importoMin": 50000
    },
    "soloClassiAB": false,
    "soloClassiLista": [],
    "consap": false,
    "irs": true,
    "isee": false,
    "spesePerizia": {
      "importo": 300,
      "condizioni": "Standard",
      "maxImporto": 300
    },
    "speseIstruttoria": {
      "percentualeSuImporto": false,
      "percentualeApplicata": 0,
      "importo": 950,
      "promozione": "",
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
      "importo": 1.5
    },
    "costoGestionePratica": {
      "esiste": true,
      "importo": 39
    },
    "altriTipiSpese": {
      "annuali": true,
      "importo": 39
    },
    "totaleDaRimborsare": 208860,
    "totaliCostiExtra": 1379,
    "assicurazioniObbligatorie": {
      "assicurazioneCasa": false,
      "assicurazioneVita": false,
      "assicurazioneCasaMensile": false,
      "assicurazioneVitaMensile": false,
      "percentualePremioVita": 0,
      "costoStimatoCasa": 0,
      "costoStimatoVita": 0
    },
    "ltvMutuo": 80,
    "eta": {
      "minima": 18,
      "massima": 80,
      "maxUnder36": false
    },
    "score": 78,
    "rrrMax": 36,
    "tassiPerLTV": {
      "00.00-50.00": {
        "10": 1.25,
        "15": 1.35,
        "20": 1.45,
        "25": 1.35,
        "30": 1.45
      },
      "50.01-70.00": {
        "10": 1.30,
        "15": 1.40,
        "20": 1.50,
        "25": 1.40,
        "30": 1.50
      },
      "70.01-80.00": {
        "10": 1.35,
        "15": 1.45,
        "20": 1.55,
        "25": 1.45,
        "30": 1.55
      },
      "80.01-95.00": {
        "10": 2.05,
        "15": 2.15,
        "20": 2.25,
        "25": 2.15,
        "30": 2.25
      }
    },
    "tipiDurata": [10, 15, 20, 25, 30],
    "scontisticheGenerali": {
      "esistono": false,
      "listaSconti": []
    },
    "proMutuo": [
      {
        "titolo": "Ampia possibilità di importi finanziabili",
        "descrizione": "Importo massimo fino a 2 milioni, adatto anche a immobili di alto valore"
      },
      {
        "titolo": "Durata fino a 30 anni",
        "descrizione": "Maggiore flessibilità per pianificare la rata in base alle proprie esigenze"
      }
    ],
    "controMutuo": [
      {
        "titolo": "Costi di perizia e istruttoria non trascurabili",
        "descrizione": "Spese fisse anche per importi medio-bassi"
      },
      {
        "titolo": "Nessun incentivo per classe energetica bassa",
        "descrizione": "Tasso pieno anche per immobili non green"
      }
    ],
    "praticaScore": {
      "pro": [
        "Possibilità di lunga durata",
        "Ampio importo massimo"
      ],
      "contro": [
        "Spese iniziali fisse importanti",
        "Mancanza di sconti per immobili standard"
      ]
    }
  }
  
      
]