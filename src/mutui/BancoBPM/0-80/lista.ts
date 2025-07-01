import { Mutuo } from "@/lib/interface";

const profilo = {
    nome: 'Banco BPM',
    img: 'https://www.mutuisupermarket.it/static/e44e010ae740971ec8f2f116ff5be19b/Banco_BPM-1.svg'
}
export const bancoBPM80giu: Mutuo[] = [
  {
    "id": "mutuo-green-01",
    "banca": profilo.nome,
    "immagineBanca": profilo.img,
    "nomeProdotto": "Mutuo Casa Tasso Fisso Last Minute GREEN",
  
    "importoMutuo": 180000,
    "durataAnni": 25,
    "rataMensile": 885.30,
    "rataTotale": 265590,
  
    "tassoScelto": 2.30,
    "taeg": 2.52,
    "tipiTasso": "Fisso",
    "dataScadenzaOfferta": "2025-09-30",
  
    "importoInfo": {
      "importoMax": 400000,
      "importoMin": 50000
    },
  
    "soloClassiAB": true,
    "soloClassiLista": ["A", "B"],
  
    "consap": false,
    "irs": true,
    "isee": false,
  
    "spesePerizia": {
      "importo": 320,
      "condizioni": "Obbligatoria perizia con costo a carico del mutuatario",
      "maxImporto": 320
    },
  
    "speseIstruttoria": {
      "percentualeSuImporto": true,
      "percentualeApplicata": 0.01,
      "importo": 1000,
      "promozione": "",
      "attiva": false,
      "importoMax": 1000,
      "importoMin": 0,
      "ltvImporto": false,
      "importoLtv": []
    },
  
    "impostaSostitutiva": {
      "promozione": false,
      "importo": 450
    },
  
    "incassoRata": {
      "esiste": true,
      "importo": 2
    },
  
    "costoGestionePratica": {
      "esiste": false,
      "importo": 0
    },
  
    "altriTipiSpese": {
      "annuali": true,
      "importo": 15
    },
  
    "totaleDaRimborsare": 265590,
    "totaliCostiExtra": 1785,
  
    "assicurazioniObbligatorie": {
      "assicurazioneCasa": true,
      "assicurazioneVita": false,
      "assicurazioneCasaMensile": false,
      "assicurazioneVitaMensile": false,
      "percentualePremioVita": 0,
      "costoStimatoCasa": 300,
      "costoStimatoVita": 0
    },
  
    "ltvMutuo": 80.00,
  
    "eta": {
      "minima": 18,
      "massima": 80,
      "maxUnder36": false
    },
  
    "score": 87,
    "rrrMax": 35,
  
    "tassiPerLTV": {
      "00.00-70.00": {
        "10": 0.10,
        "15": 0.10,
        "20": 0.10,
        "25": 0.10,
        "30": 0.20
      },
      "70.01-80.00": {
        "10": 0.15,
        "15": 0.15,
        "20": 0.15,
        "25": 0.15,
        "30": 0.25
      }
    },
  
    "tipiDurata": [10, 15, 20, 25, 30],
  
    "scontisticheGenerali": {
      "esistono": true,
      "listaSconti": [
        {
          "causaleSconti": "Riduzione 0,20% per immobile in classe A o B",
          "percentualeSconto": 0.20
        },
        {
          "causaleSconti": "Ulteriore sconto 0,10% per miglioramento energetico documentato",
          "percentualeSconto": 0.10
        },
        {
          "causaleSconti": "Sconto 0,05% per richiedenti under 45",
          "percentualeSconto": 0.05
        }
      ]
    },
  
    "proMutuo": [
      {
        "titolo": "Sconti importanti per immobili green",
        "descrizione": "La riduzione dello spread rende il mutuo tra i più competitivi sul mercato per immobili classe A o B."
      },
      {
        "titolo": "Durata fino a 30 anni",
        "descrizione": "Ampia possibilità di dilazione, utile per contenere la rata."
      }
    ],
  
    "controMutuo": [
      {
        "titolo": "Accesso limitato a classi energetiche",
        "descrizione": "L’offerta è disponibile solo per immobili in classe A o B, escludendo la maggior parte degli immobili esistenti."
      },
      {
        "titolo": "Perizia obbligatoria a carico del cliente",
        "descrizione": "Costi iniziali non trascurabili per l’accesso al mutuo."
      }
    ],
  
    "praticaScore": {
      "pro": [
        "Sconti cumulabili per classe A/B, miglioramento energetico e giovani",
        "Tasso competitivo rispetto alla media di mercato"
      ],
      "contro": [
        "Offerta esclusiva e vincolata alla classe energetica",
        "Perizia e costi accessori a carico del cliente"
      ]
    }
  },  


      // 2 bank
      {
        "id": "mutuo-standard-01",
        "banca": profilo.nome,
        "immagineBanca": profilo.img,
        "nomeProdotto": "Mutuo Casa Tasso Fisso Standard",
      
        "importoMutuo": 180000,
        "durataAnni": 25,
        "rataMensile": 905.60,
        "rataTotale": 271680,
      
        "tassoScelto": 2.60,
        "taeg": 2.80,
        "tipiTasso": "Fisso",
        "dataScadenzaOfferta": "2025-09-30",
      
        "importoInfo": {
          "importoMax": 400000,
          "importoMin": 50000
        },
      
        "soloClassiAB": false,
        "soloClassiLista": [],
      
        "consap": false,
        "irs": true,
        "isee": false,
      
        "spesePerizia": {
          "importo": 320,
          "condizioni": "Obbligatoria perizia con costo a carico del mutuatario",
          "maxImporto": 320
        },
      
        "speseIstruttoria": {
          "percentualeSuImporto": true,
          "percentualeApplicata": 0.01,
          "importo": 1000,
          "promozione": "",
          "attiva": false,
          "importoMax": 1000,
          "importoMin": 0,
          "ltvImporto": false,
          "importoLtv": []
        },
      
        "impostaSostitutiva": {
          "promozione": false,
          "importo": 450
        },
      
        "incassoRata": {
          "esiste": true,
          "importo": 2
        },
      
        "costoGestionePratica": {
          "esiste": false,
          "importo": 0
        },
      
        "altriTipiSpese": {
          "annuali": true,
          "importo": 15
        },
      
        "totaleDaRimborsare": 271680,
        "totaliCostiExtra": 1785,
      
        "assicurazioniObbligatorie": {
          "assicurazioneCasa": true,
          "assicurazioneVita": false,
          "assicurazioneCasaMensile": false,
          "assicurazioneVitaMensile": false,
          "percentualePremioVita": 0,
          "costoStimatoCasa": 300,
          "costoStimatoVita": 0
        },
      
        "ltvMutuo": 80.00,
      
        "eta": {
          "minima": 18,
          "massima": 80,
          "maxUnder36": true
        },
      
        "score": 82,
        "rrrMax": 35,
      
        "tassiPerLTV": {
          "00.00-70.00": {
            "10": 0.30,
            "15": 0.30,
            "20": 0.30,
            "25": 0.30,
            "30": 0.40
          },
          "70.01-80.00": {
            "10": 0.35,
            "15": 0.35,
            "20": 0.35,
            "25": 0.35,
            "30": 0.45
          }
        },
      
        "tipiDurata": [10, 15, 20, 25, 30],
      
        "scontisticheGenerali": {
          "esistono": true,
          "listaSconti": [
            {
              "causaleSconti": "Sconto 0,05% per richiedenti under 45",
              "percentualeSconto": 0.05
            }
          ]
        },
      
        "proMutuo": [
          {
            "titolo": "Durata fino a 30 anni",
            "descrizione": "Offerta flessibile anche per chi cerca rate contenute nel lungo periodo."
          },
          {
            "titolo": "Spread stabile e trasparente",
            "descrizione": "Lo spread viene calcolato in base all'LTV e alla durata in modo chiaro."
          }
        ],
      
        "controMutuo": [
          {
            "titolo": "Nessuna agevolazione per classi energetiche elevate",
            "descrizione": "Chi ha immobili efficienti non ottiene sconti rispetto al mutuo GREEN."
          },
          {
            "titolo": "Costi iniziali a carico del cliente",
            "descrizione": "Tra perizia, istruttoria e imposta, le spese iniziali sono significative."
          }
        ],
      
        "praticaScore": {
          "pro": [
            "Disponibile anche per immobili in classi energetiche inferiori",
            "Tasso fisso con spread predefinito"
          ],
          "contro": [
            "Nessun incentivo green",
            "Costi accessori rilevanti"
          ]
        }
      }
      
      
      
]