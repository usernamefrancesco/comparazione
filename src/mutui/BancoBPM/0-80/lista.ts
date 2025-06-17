import { Mutuo } from "@/lib/interface";

const profilo = {
    nome: 'Banco BPM',
    img: 'https://www.mutuisupermarket.it/static/e44e010ae740971ec8f2f116ff5be19b/Banco_BPM-1.svg'
}
export const bancoBPM80giu: Mutuo[] = [
    {
        "id": "mutuo_green_fisso_001",
        "banca": profilo.nome,
        "immagineBanca": profilo.img,
        "nomeProdotto": "Mutuo Casa Tasso Fisso Green Last Minute",
        "importoMutuo": 180000,
        "durataAnni": 25,
        "rataMensile": 820,
        "rataTotale": 246000,
        "tassoScelto": 0.45,
        "taeg": 0.65,
        "tipiTasso": "Fisso",
        "dataScadenzaOfferta": "2025-06-30",
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
          "condizioni": "Valutazione obbligatoria a carico del mutuatario",
          "maxImporto": 320
        },
        "speseIstruttoria": {
          "percentualeSuImporto": true,
          "percentualeApplicata": 0.01,
          "importo": 1000,
          "promozione": "Istruttoria scontata a massimo 1000 euro",
          "attiva": true,
          "importoMax": 1000,
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
          "importo": 2
        },
        "costoGestionePratica": {
          "esiste": false,
          "importo": 0
        },
        "altriTipiSpese": {
          "annuali": false,
          "importo": 0
        },
        "totaleDaRimborsare": 246000,
        "totaliCostiExtra": 1785,
        "assicurazioniObbligatorie": {
          "assicurazioneCasa": true,
          "assicurazioneVita": false,
          "assicurazioneCasaMensile": false,
          "assicurazioneVitaMensile": false,
          "percentualePremioVita": 0,
          "costoStimatoCasa": 250,
          "costoStimatoVita": 0
        },
        "ltvMutuo": 80,
        "eta": {
          "minima": 18,
          "massima": 80,
          "maxUnder36": false
        },
        "score": 8.3,
        "rrrMax": 35,
        "tassiPerLTV": {
          "00.00-70.00": {
            "10": 0.3,
            "15": 0.3,
            "20": 0.3,
            "25": 0.3,
            "30": 0.4
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
              "causaleSconti": "Sconto Green per immobili in classe A o B",
              "percentualeSconto": 0.2
            },
            {
              "causaleSconti": "Sconto giovani under 45",
              "percentualeSconto": 0.05
            },
            {
              "causaleSconti": "Green Factor: miglioramento di due classi energetiche",
              "percentualeSconto": 0.1
            }
          ]
        },
        "proMutuo": [
          {
            "titolo": "Sconto per immobili efficienti",
            "descrizione": "Accesso a spread ridotto del 0,20% per immobili in classe A o B"
          },
          {
            "titolo": "Possibilità di sconto post erogazione",
            "descrizione": "Riduzione ulteriore dello spread se si migliora la classe energetica dell'immobile"
          },
          {
            "titolo": "Spread competitivo anche ad LTV 80%",
            "descrizione": "Lo spread rimane contenuto fino all’80% di finanziamento"
          }
        ],
        "controMutuo": [
          {
            "titolo": "Obbligo perizia a carico del cliente",
            "descrizione": "Il mutuatario deve sostenere il costo della perizia di 320 €"
          },
          {
            "titolo": "Assicurazione casa obbligatoria vincolata",
            "descrizione": "È obbligatorio presentare copertura incendio con vincolo alla banca"
          },
          {
            "titolo": "Nessuna agevolazione per immobili non green",
            "descrizione": "Senza immobili in classe A o B, non si accede alle migliori condizioni"
          }
        ],
        "praticaScore": {
          "pro": [
            "Accessibile anche a chi ha LTV elevato",
            "Diversi sconti cumulabili sullo spread"
          ],
          "contro": [
            "Spese iniziali relativamente elevate",
            "Assicurazioni e costi accessori a carico del cliente"
          ]
        }
      },


      // 2 bank
      {
        "id": "mutuo_green_fisso_001",
        "banca": profilo.nome,
        "immagineBanca": profilo.img,
        "nomeProdotto": "Mutuo Casa Tasso Fisso Green Last Minute",
        "importoMutuo": 180000,
        "durataAnni": 25,
        "rataMensile": 820,
        "rataTotale": 246000,
        "tassoScelto": 0.45,
        "taeg": 0.65,
        "tipiTasso": "Fisso",
        "dataScadenzaOfferta": "2025-06-30",
        "importoInfo": {
          "importoMax": 400000,
          "importoMin": 50000
        },
        "soloClassiAB": true,
        "soloClassiLista": ['A', 'B'],
        "consap": false,
        "irs": true,
        "isee": false,
        "spesePerizia": {
          "importo": 320,
          "condizioni": "Valutazione obbligatoria a carico del mutuatario",
          "maxImporto": 320
        },
        "speseIstruttoria": {
          "percentualeSuImporto": true,
          "percentualeApplicata": 0.01,
          "importo": 1000,
          "promozione": "Istruttoria scontata a massimo 1000 euro",
          "attiva": true,
          "importoMax": 1000,
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
          "importo": 2
        },
        "costoGestionePratica": {
          "esiste": false,
          "importo": 0
        },
        "altriTipiSpese": {
          "annuali": false,
          "importo": 0
        },
        "totaleDaRimborsare": 246000,
        "totaliCostiExtra": 1785,
        "assicurazioniObbligatorie": {
          "assicurazioneCasa": true,
          "assicurazioneVita": false,
          "assicurazioneCasaMensile": false,
          "assicurazioneVitaMensile": false,
          "percentualePremioVita": 0,
          "costoStimatoCasa": 250,
          "costoStimatoVita": 0
        },
        "ltvMutuo": 80,
        "eta": {
          "minima": 18,
          "massima": 80,
          "maxUnder36": false
        },
        "score": 8.3,
        "rrrMax": 35,
        "tassiPerLTV": {
          "00.00-70.00": {
            "10": 0.10,
            "15": 0.10,
            "20": 0.1,
            "25": 0.1,
            "30": 0.2
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
              "causaleSconti": "Sconto Green per immobili in classe A o B",
              "percentualeSconto": 0.2
            },
            {
              "causaleSconti": "Sconto giovani under 45",
              "percentualeSconto": 0.05
            },
            {
              "causaleSconti": "Green Factor: miglioramento di due classi energetiche",
              "percentualeSconto": 0.1
            }
          ]
        },
        "proMutuo": [
          {
            "titolo": "Sconto per immobili efficienti",
            "descrizione": "Accesso a spread ridotto del 0,20% per immobili in classe A o B"
          },
          {
            "titolo": "Possibilità di sconto post erogazione",
            "descrizione": "Riduzione ulteriore dello spread se si migliora la classe energetica dell'immobile"
          },
          {
            "titolo": "Spread competitivo anche ad LTV 80%",
            "descrizione": "Lo spread rimane contenuto fino all’80% di finanziamento"
          }
        ],
        "controMutuo": [
          {
            "titolo": "Obbligo perizia a carico del cliente",
            "descrizione": "Il mutuatario deve sostenere il costo della perizia di 320 €"
          },
          {
            "titolo": "Assicurazione casa obbligatoria vincolata",
            "descrizione": "È obbligatorio presentare copertura incendio con vincolo alla banca"
          },
          {
            "titolo": "Nessuna agevolazione per immobili non green",
            "descrizione": "Senza immobili in classe A o B, non si accede alle migliori condizioni"
          }
        ],
        "praticaScore": {
          "pro": [
            "Accessibile anche a chi ha LTV elevato",
            "Diversi sconti cumulabili sullo spread"
          ],
          "contro": [
            "Spese iniziali relativamente elevate",
            "Assicurazioni e costi accessori a carico del cliente"
          ]
        }
      },
      
]