import { Mutuo } from "@/lib/interface"


const profilo = {
    nome: 'Banco BPM',
    img: 'https://www.mutuisupermarket.it/static/e44e010ae740971ec8f2f116ff5be19b/Banco_BPM-1.svg'
}

export const BancoBPM80su: Mutuo[] = [
  
  {
    "id": "mutuo-last-minute-green",
    "banca": profilo.nome,
    "immagineBanca": profilo.img,
    "nomeProdotto": "Mutuo Casa Tasso Fisso Last Minute",
    
    "importoMutuo": 180000,
    "durataAnni": 25,
    "rataMensile": 800,
    "rataTotale": 240000,
    "tassoScelto": 2.35,
    "taeg": 2.60,
    "tipiTasso": "Fisso",
    "dataScadenzaOfferta": null,
    
    "importoInfo": {
      "importoMax": 250000,
      "importoMin": 30000
    },
    
    "soloClassiAB": false,
    "soloClassiLista": [],
    
    "consap": true,
    "irs": true,
    "isee": true,
    
    "spesePerizia": {
      "importo": 320,
      "condizioni": "Obbligatorio servizio di valutazione con spese a carico del mutuatario",
      "maxImporto": 320
    },
    
    "speseIstruttoria": {
      "percentualeSuImporto": false,
      "percentualeApplicata": 0,
      "importo": 0,
      "promozione": "Spese di istruttoria azzerate per tutta la durata della promozione",
      "attiva": true,
      "importoMax": 0,
      "importoMin": 0,
      "ltvImporto": false,
      "importoLtv": []
    },
    
    "impostaSostitutiva": {
      "promozione": false,
      "importo": 0.0025
    },
    
    "incassoRata": {
      "esiste": false,
      "importo": 0
    },
    
    "costoGestionePratica": {
      "esiste": true,
      "importo": 1.25
    },
    
    "altriTipiSpese": {
      "annuali": false,
      "importo": 15
    },
    
    "totaleDaRimborsare": 240320,
    "totaliCostiExtra": 336.25,
    
    "assicurazioniObbligatorie": {
      "assicurazioneCasa": true,
      "assicurazioneVita": false,
      "assicurazioneCasaMensile": false,
      "assicurazioneVitaMensile": false,
      "percentualePremioVita": 0,
      "costoStimatoCasa": 200,
      "costoStimatoVita": 0
    },
    
    "ltvMutuo": 80,
    
    "eta": {
      "minima": 18,
      "massima": 35,
      "maxUnder36": true
    },
    
    "score": 87,
    "rrrMax": 35,
    
    "tassiPerLTV": {
      "00.00-100.00": {
        "10": 0.35,
        "15": 0.35,
        "20": 0.35,
        "25": 0.50,
        "30": 0.45
      }
    },
    
    "tipiDurata": [10, 15, 20, 25, 30],
    
    "scontisticheGenerali": {
      "esistono": true,
      "listaSconti": [
        {
          "causaleSconti": "Sconto sullo spread per immobili in classe energetica A o B",
          "percentualeSconto": 0.2
        },
        {
          "causaleSconti": "Riduzione spread con miglioramento di almeno due classi energetiche o EPgl, nren ridotto del 30%",
          "percentualeSconto": 0.1
        }
      ]
    },
    
    "proMutuo": [
      {
        "titolo": "Accesso al Fondo Consap",
        "descrizione": "Accesso alla garanzia pubblica gratuita del Fondo Prima Casa per mutui fino all'80% del valore dell'immobile."
      },
      {
        "titolo": "Sconto aggiuntivo per immobili green",
        "descrizione": "Riduzione dello spread fino a 0,20% per immobili in classe A o B con APE valido."
      },
      {
        "titolo": "Spese di istruttoria azzerate",
        "descrizione": "Il mutuo non prevede costi di istruttoria, riducendo l'esborso iniziale."
      }
    ],
    
    "controMutuo": [
      {
        "titolo": "Limite massimo di importo finanziabile",
        "descrizione": "Il mutuo non supera i 250.000 €, rendendolo inadatto per immobili di valore più elevato."
      },
      {
        "titolo": "Spese di perizia obbligatorie a carico del cliente",
        "descrizione": "È prevista una spesa fissa per la perizia di 320 € non rimborsabile."
      },
      {
        "titolo": "Costi extra per mancato addebito diretto",
        "descrizione": "È previsto un costo aggiuntivo di € 1,25 se la rata non viene pagata tramite addebito sul conto dell’istituto."
      }
    ],
    
    "praticaScore": {
      "pro": [
        "Processo semplificato con garanzia Consap",
        "Sconti concreti per immobili ad alta efficienza energetica"
      ],
      "contro": [
        "Limite di età stringente",
        "Vincolo di classe energetica per sconto massimo"
      ]
    }
  },
  


  // 2
  {
    "id": "mutuo-last-minute-green",
    "banca": profilo.nome,
    "immagineBanca": profilo.img,
    "nomeProdotto": "Mutuo Casa Tasso Fisso Last Minute GREEN",
    
    "importoMutuo": 180000,
    "durataAnni": 25,
    "rataMensile": 800,
    "rataTotale": 240000,
    "tassoScelto": 2.35,
    "taeg": 2.60,
    "tipiTasso": "Fisso",
    "dataScadenzaOfferta": "2025-07-31",
    
    "importoInfo": {
      "importoMax": 250000,
      "importoMin": 30000
    },
    
    "soloClassiAB": true,
    "soloClassiLista": ["A", "B"],
    
    "consap": true,
    "irs": true,
    "isee": true,
    
    "spesePerizia": {
      "importo": 320,
      "condizioni": "Obbligatorio servizio di valutazione con spese a carico del mutuatario",
      "maxImporto": 320
    },
    
    "speseIstruttoria": {
      "percentualeSuImporto": false,
      "percentualeApplicata": 0,
      "importo": 0,
      "promozione": "Spese di istruttoria azzerate per tutta la durata della promozione",
      "attiva": true,
      "importoMax": 0,
      "importoMin": 0,
      "ltvImporto": false,
      "importoLtv": []
    },
    
    "impostaSostitutiva": {
      "promozione": false,
      "importo": 0.0025
    },
    
    "incassoRata": {
      "esiste": false,
      "importo": 0
    },
    
    "costoGestionePratica": {
      "esiste": true,
      "importo": 1.25
    },
    
    "altriTipiSpese": {
      "annuali": false,
      "importo": 15
    },
    
    "totaleDaRimborsare": 240320,
    "totaliCostiExtra": 336.25,
    
    "assicurazioniObbligatorie": {
      "assicurazioneCasa": true,
      "assicurazioneVita": false,
      "assicurazioneCasaMensile": false,
      "assicurazioneVitaMensile": false,
      "percentualePremioVita": 0,
      "costoStimatoCasa": 200,
      "costoStimatoVita": 0
    },
    
    "ltvMutuo": 80,
    
    "eta": {
      "minima": 18,
      "massima": 35,
      "maxUnder36": true
    },
    
    "score": 87,
    "rrrMax": 35,
    
    "tassiPerLTV": {
      "00.00-100.00": {
        "10": 0.15,
        "15": 0.15,
        "20": 0.15,
        "25": 0.30,
        "30": 0.25
      }
    },
    
    "tipiDurata": [10, 15, 20, 25, 30],
    
    "scontisticheGenerali": {
      "esistono": true,
      "listaSconti": [
        {
          "causaleSconti": "Sconto sullo spread per immobili in classe energetica A o B",
          "percentualeSconto": 0.2
        },
        {
          "causaleSconti": "Riduzione spread con miglioramento di almeno due classi energetiche o EPgl, nren ridotto del 30%",
          "percentualeSconto": 0.1
        }
      ]
    },
    
    "proMutuo": [
      {
        "titolo": "Accesso al Fondo Consap",
        "descrizione": "Accesso alla garanzia pubblica gratuita del Fondo Prima Casa per mutui fino all'80% del valore dell'immobile."
      },
      {
        "titolo": "Sconto aggiuntivo per immobili green",
        "descrizione": "Riduzione dello spread fino a 0,20% per immobili in classe A o B con APE valido."
      },
      {
        "titolo": "Spese di istruttoria azzerate",
        "descrizione": "Il mutuo non prevede costi di istruttoria, riducendo l'esborso iniziale."
      }
    ],
    
    "controMutuo": [
      {
        "titolo": "Limite massimo di importo finanziabile",
        "descrizione": "Il mutuo non supera i 250.000 €, rendendolo inadatto per immobili di valore più elevato."
      },
      {
        "titolo": "Spese di perizia obbligatorie a carico del cliente",
        "descrizione": "È prevista una spesa fissa per la perizia di 320 € non rimborsabile."
      },
      {
        "titolo": "Costi extra per mancato addebito diretto",
        "descrizione": "È previsto un costo aggiuntivo di € 1,25 se la rata non viene pagata tramite addebito sul conto dell’istituto."
      }
    ],
    
    "praticaScore": {
      "pro": [
        "Processo semplificato con garanzia Consap",
        "Sconti concreti per immobili ad alta efficienza energetica"
      ],
      "contro": [
        "Limite di età stringente",
        "Vincolo di classe energetica per sconto massimo"
      ]
    }
  }
  
  
      
]