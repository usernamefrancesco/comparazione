import { Mutuo } from "@/lib/interface";

const profilo = {
    nome: 'Banca Desio',
    img: 'https://img.gruppomol.it/mutuionline/loghi_high_density/193.svg'

}

export const desio80giu: Mutuo[]= [
    {
        "id": "Desio80-1",
        "banca": profilo.nome,
        "immagineBanca": profilo.img,
        "nomeProdotto": "Mutuo Acquisto Prima Casa",
      
        "importoMutuo": 180000,
        "durataAnni": 25,
        "rataMensile": 850.75,
        "rataTotale": 255225,
      
        "tassoScelto": 3.1,
        "taeg": 3.3,
        "tipiTasso": "Fisso",
        "dataScadenzaOfferta": null,
      
        "importoInfo": {
          "importoMax": 250000,
          "importoMin": 50000
        },
      
        "soloClassiAB": false,
        "soloClassiLista": [],
      
        "consap": false,
        "irs": true,
        "isee": false,
      
        "spesePerizia": {
          "importo": 219.6,
          "condizioni": "Importo indicativo per singola unità immobiliare residenziale e relative pertinenze, 180 € + IVA",
          "maxImporto": 219.6
        },
      
        "speseIstruttoria": {
          "percentualeSuImporto": true,
          "percentualeApplicata": 0.008,
          "importo": 1440,
          "promozione": "Non prevista promozione",
          "attiva": false,
          "importoMax": 2000,
          "importoMin": 750,
          "ltvImporto": false,
          "importoLtv": []
        },
      
        "impostaSostitutiva": {
          "promozione": true,
          "importo": 450
        },
      
        "incassoRata": {
          "esiste": true,
          "importo": 4.5
        },
      
        "costoGestionePratica": {
          "esiste": false,
          "importo": 0
        },
      
        "altriTipiSpese": {
          "annuali": false,
          "importo": 0
        },
      
        "totaleDaRimborsare": 255225,
        "totaliCostiExtra": 2114.1,
      
        "assicurazioniObbligatorie": {
          "assicurazioneCasa": true,
          "assicurazioneVita": false,
          "assicurazioneCasaMensile": false,
          "assicurazioneVitaMensile": false,
          "percentualePremioVita": 0,
          "costoStimatoCasa": 2500,
          "costoStimatoVita": 0
        },
      
        "ltvMutuo": 72,
      
        "eta": {
          "minima": 18,
          "massima": 40,
          "maxUnder36": false
        },
      
        "score": 82,
        "rrrMax": 35,
      
        "tassiPerLTV": {
          "00.00-60.00": {
            "10": 0.35,
            "15": 0.35,
            "20": 0.35,
            "25": 0.4,
            "30": 0.5
          },
          "60.01-80.00": {
            "10": 0.5,
            "15": 0.5,
            "20": 0.6,
            "25": 0.6,
            "30": 0.7
          }
        },
      
        "tipiDurata": [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
      
        "scontisticheGenerali": {
          "esistono": true,
          "listaSconti": [
            {
              "causaleSconti": "Sconto sullo spread per immobili in classe energetica A o B",
              "percentualeSconto": 0.25
            },
            {
              "causaleSconti": "Esenzione spese incasso rata con addebito su conto Banco Desio",
              "percentualeSconto": 100
            }
          ]
        },
      
        "proMutuo": [
          {
            "titolo": "Sconto sul tasso per immobili green",
            "descrizione": "Riduzione di 0,25 punti percentuali per immobili in classe energetica A o B"
          },
          {
            "titolo": "Importo finanziabile elevato",
            "descrizione": "Fino all’80% del valore dell’immobile, con massimale a 250.000 €"
          },
          {
            "titolo": "Durata flessibile",
            "descrizione": "Ampia gamma di durate, da 5 fino a 30 anni"
          }
        ],
      
        "controMutuo": [
          {
            "titolo": "Spese di istruttoria elevate",
            "descrizione": "Fino all’0,80% dell’importo erogato, con minimo 750 €"
          },
          {
            "titolo": "Obbligo di assicurazione con banca partner",
            "descrizione": "Polizza casa obbligatoria con compagnia convenzionata se si vuole accedere a condizioni agevolate"
          },
          {
            "titolo": "Età massima limitata",
            "descrizione": "Il mutuo è riservato a clienti con età massima di 40 anni"
          }
        ],
      
        "praticaScore": {
          "pro": [
            "Ampia flessibilità nella durata",
            "Tasso scontato per immobili green",
            "Buon rapporto tra tasso offerto e LTV"
          ],
          "contro": [
            "Età limitata per l’accesso",
            "Istruttoria con importo elevato rispetto ad altri istituti",
            "Copertura assicurativa da attivare con partner specifico"
          ]
        }
      },
      // 2bank
      {
        "id": "Desio80-2",
        "banca": profilo.nome,
        "immagineBanca": profilo.img,
        "nomeProdotto": "Mutuo Green Acquisto Prima Casa",
      
        "importoMutuo": 180000,
        "durataAnni": 25,
        "rataMensile": 850.75,
        "rataTotale": 255225,
      
        "tassoScelto": 3.1,
        "taeg": 3.3,
        "tipiTasso": "Fisso",
        "dataScadenzaOfferta": null,
      
        "importoInfo": {
          "importoMax": 250000,
          "importoMin": 50000
        },
      
        "soloClassiAB": true,
        "soloClassiLista": ["A", "B"],
      
        "consap": false,
        "irs": true,
        "isee": false,
      
        "spesePerizia": {
          "importo": 219.6,
          "condizioni": "Importo indicativo per singola unità immobiliare residenziale e relative pertinenze, 180 € + IVA",
          "maxImporto": 219.6
        },
      
        "speseIstruttoria": {
          "percentualeSuImporto": true,
          "percentualeApplicata": 0.008,
          "importo": 1440,
          "promozione": "Non prevista promozione",
          "attiva": false,
          "importoMax": 2000,
          "importoMin": 750,
          "ltvImporto": false,
          "importoLtv": []
        },
      
        "impostaSostitutiva": {
          "promozione": true,
          "importo": 450
        },
      
        "incassoRata": {
          "esiste": true,
          "importo": 4.5
        },
      
        "costoGestionePratica": {
          "esiste": false,
          "importo": 0
        },
      
        "altriTipiSpese": {
          "annuali": false,
          "importo": 0
        },
      
        "totaleDaRimborsare": 255225,
        "totaliCostiExtra": 2114.1,
      
        "assicurazioniObbligatorie": {
          "assicurazioneCasa": true,
          "assicurazioneVita": false,
          "assicurazioneCasaMensile": false,
          "assicurazioneVitaMensile": false,
          "percentualePremioVita": 0,
          "costoStimatoCasa": 2500,
          "costoStimatoVita": 0
        },
      
        "ltvMutuo": 72,
      
        "eta": {
          "minima": 18,
          "massima": 40,
          "maxUnder36": false
        },
      
        "score": 82,
        "rrrMax": 35,
      
        "tassiPerLTV": {
          "00.00-60.00": {
            "10": 0.10,
            "15": 0.10,
            "20": 0.10,
            "25": 0.15,
            "30": 0.25
          },
          "60.01-80.00": {
            "10": 0.25,
            "15": 0.25,
            "20": 0.35,
            "25": 0.35,
            "30": 0.45
          }
        },
      
        "tipiDurata": [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
      
        "scontisticheGenerali": {
          "esistono": true,
          "listaSconti": [
            {
              "causaleSconti": "Esenzione spese incasso rata con addebito su conto Banco Desio",
              "percentualeSconto": 100
            }
          ]
        },
      
        "proMutuo": [
          {
            "titolo": "Sconto sul tasso per immobili green",
            "descrizione": "Riduzione di 0,25 punti percentuali per immobili in classe energetica A o B"
          },
          {
            "titolo": "Importo finanziabile elevato",
            "descrizione": "Fino all’80% del valore dell’immobile, con massimale a 250.000 €"
          },
          {
            "titolo": "Durata flessibile",
            "descrizione": "Ampia gamma di durate, da 5 fino a 30 anni"
          }
        ],
      
        "controMutuo": [
          {
            "titolo": "Spese di istruttoria elevate",
            "descrizione": "Fino all’0,80% dell’importo erogato, con minimo 750 €"
          },
          {
            "titolo": "Obbligo di assicurazione con banca partner",
            "descrizione": "Polizza casa obbligatoria con compagnia convenzionata se si vuole accedere a condizioni agevolate"
          },
          {
            "titolo": "Età massima limitata",
            "descrizione": "Il mutuo è riservato a clienti con età massima di 40 anni"
          }
        ],
      
        "praticaScore": {
          "pro": [
            "Ampia flessibilità nella durata",
            "Tasso scontato per immobili green",
            "Buon rapporto tra tasso offerto e LTV"
          ],
          "contro": [
            "Età limitata per l’accesso",
            "Istruttoria con importo elevato rispetto ad altri istituti",
            "Copertura assicurativa da attivare con partner specifico"
          ]
        }
      }
      
]