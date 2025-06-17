import { Mutuo } from "@/lib/interface"

const profiloBper = {
    nome: 'BPER Banca',
    img: 'https://www.mutuisupermarket.it/static/e32d1504187496a3edb32ae3348162ce/Bper_Banca-1.svg'
}
export const bperMutui80su: Mutuo[] = [
   
    {
        "id": "mutuoBper100-1",
        "banca": profiloBper.nome,
        "immagineBanca": profiloBper.img,
        "nomeProdotto": "Mutuo Giovani Under 36 Green",
      
        "importoMutuo": 200000,
        "durataAnni": 25,
        "rataMensile": 951.00,
        "rataTotale": 285300,
        "tassoScelto": 2.90,
        "taeg": 3.15,
        "tipiTasso": "Fisso",
        "dataScadenzaOfferta": "2025-12-31T00:00:00.000Z",
      
        "importoInfo": {
          "importoMax": 250000,
          "importoMin": 50000
        },
      
        "soloClassiAB": true,
        "soloClassiLista": ["A", "B", "C"],
      
        "consap": true,
        "irs": false,
        "isee": true,
      
        "spesePerizia": {
          "importo": 350,
          "condizioni": "Perizia su immobile ad uso residenziale, massimo due unità con pertinenze.",
          "maxImporto": 350
        },
      
        "speseIstruttoria": {
          percentualeSuImporto: false ,
          percentualeApplicata: 0,
          ltvImporto: false,
          importoLtv: [],
          importoMin: 0,
          importoMax: 0,
          "importo": 600,
          "promozione": "",
          "attiva": false
        },
      
        "impostaSostitutiva": {
          "promozione": true,
          "importo": 500
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
          "importo": 0.90
        },
      
        "totaleDaRimborsare": 285300,
        "totaliCostiExtra": 952.90,
      
        "assicurazioniObbligatorie": {
          "assicurazioneCasa": true,
          "assicurazioneVita": false,
          "assicurazioneCasaMensile": false,
          "assicurazioneVitaMensile": false,
          "percentualePremioVita": 0,
          "costoStimatoCasa": 400,
          "costoStimatoVita": 0
        },
      
        "ltvMutuo": 100,
      
        "eta": {
          "minima": 18,
          "massima": 78,
          "maxUnder36": true
        },
      
        "score": 82,
        "rrrMax": 33,
      
        "tassiPerLTV": {
          "00.00-80.00": {
            "5": 2.90,
            "10": 2.90,
            "15": 2.90,
            "20": 2.90,
            "25": 2.90,
            "30": 2.90
          },
          "80.01-95.00": {
            "5": 2.90,
            "10": 2.90,
            "15": 2.90,
            "20": 2.90,
            "25": 2.90,
            "30": 2.90
          },
          "95.01-100": {
            "5": 2.90,
            "10": 2.90,
            "15": 2.90,
            "20": 2.90,
            "25": 2.90,
            "30": 2.90
          }
        },
      
        "tipiDurata": [5, 10, 15, 20, 25, 30],
      
        "scontisticheGenerali": {
          "esistono": false,
          "listaSconti": [
            
          ]
        },
      
        "proMutuo": [
          {
            "titolo": "Tasso agevolato per immobili green",
            "descrizione": "Sconto sul TAN dello 0,20% per immobili in classe energetica A, B o C"
          },
          {
            "titolo": "Copertura 100% valore immobile",
            "descrizione": "Possibilità di finanziare l'intero valore dell'immobile (minore tra perizia e prezzo)"
          },
          {
            "titolo": "Zero penali di estinzione anticipata",
            "descrizione": "Estinzione anticipata gratuita in qualsiasi momento"
          }
        ],
      
        "controMutuo": [
          {
            "titolo": "Spese istruttoria elevate",
            "descrizione": "Costo fisso di €600 anche in presenza di promozione CONSAP"
          },
          {
            "titolo": "Obbligo di classe energetica A, B o C",
            "descrizione": "Vincolato all’acquisto di immobili in buone classi energetiche"
          },
          {
            "titolo": "Età massima stringente",
            "descrizione": "Età massima al termine del mutuo fissata a 78 anni"
          }
        ],
      
        "praticaScore": {
          "pro": [
            "Possibilità di ottenere il 100% del valore dell’immobile",
            "Tasso fisso vantaggioso per immobili green",
            "Assenza di costi di estinzione"
          ],
          "contro": [
            "Importo massimo limitato a €250.000",
            "Isee inferiore a 40.000€ richiesto per condizioni agevolate",
            "Spese iniziali (istruttoria e perizia) non trascurabili"
          ]
        }
      },

      // 2bank
      {
        "id": "mutuoBper100-1",
        "banca": profiloBper.nome,
        "immagineBanca": profiloBper.img,
        "nomeProdotto": "Mutuo Giovani Under 36 Green",
      
        "importoMutuo": 200000,
        "durataAnni": 25,
        "rataMensile": 951.00,
        "rataTotale": 285300,
        "tassoScelto": 2.90,
        "taeg": 3.15,
        "tipiTasso": "Fisso",
        "dataScadenzaOfferta": "2025-12-31T00:00:00.000Z",
      
        "importoInfo": {
          "importoMax": 250000,
          "importoMin": 50000
        },
      
        "soloClassiAB": false,
        "soloClassiLista": ["A", "B", "C"],
      
        "consap": true,
        "irs": false,
        "isee": true,
      
        "spesePerizia": {
          "importo": 350,
          "condizioni": "Perizia su immobile ad uso residenziale, massimo due unità con pertinenze.",
          "maxImporto": 350
        },
      
        "speseIstruttoria": {
          percentualeSuImporto: false ,
          percentualeApplicata: 0,
          ltvImporto: false,
          importoLtv: [],
          importoMin: 0,
          importoMax: 0,
          "importo": 600,
          "promozione": "",
          "attiva": false
        },
      
        "impostaSostitutiva": {
          "promozione": true,
          "importo": 500
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
          "importo": 0.90
        },
      
        "totaleDaRimborsare": 285300,
        "totaliCostiExtra": 952.90,
      
        "assicurazioniObbligatorie": {
          "assicurazioneCasa": true,
          "assicurazioneVita": false,
          "assicurazioneCasaMensile": false,
          "assicurazioneVitaMensile": false,
          "percentualePremioVita": 0,
          "costoStimatoCasa": 400,
          "costoStimatoVita": 0
        },
      
        "ltvMutuo": 100,
      
        "eta": {
          "minima": 18,
          "massima": 78,
          "maxUnder36": true
        },
      
        "score": 82,
        "rrrMax": 33,
      
        "tassiPerLTV": {
          "00.00-80.00": {
            "5": 3.10,
            "10": 3.10,
            "15": 3.10,
            "20": 3.10,
            "25": 3.10,
            "30": 3.10
          },
          "80.01-95.00": {
            "5": 3.10,
            "10": 3.10,
            "15": 3.10,
            "20": 3.10,
            "25": 3.10,
            "30": 3.10
          },
          "95.01-100": {
            "5": 3.10,
            "10": 3.10,
            "15": 3.10,
            "20": 3.10,
            "25": 3.10,
            "30": 3.10
          }
        },
      
        "tipiDurata": [5, 10, 15, 20, 25, 30],
      
        "scontisticheGenerali": {
          "esistono": true,
          "listaSconti": [
            {
              "causaleSconti": "Classi A, B o C",
              "percentualeSconto": 0.20
            }
          ]
        },
      
        "proMutuo": [
          {
            "titolo": "Tasso agevolato per immobili green",
            "descrizione": "Sconto sul TAN dello 0,20% per immobili in classe energetica A, B o C"
          },
          {
            "titolo": "Copertura 100% valore immobile",
            "descrizione": "Possibilità di finanziare l'intero valore dell'immobile (minore tra perizia e prezzo)"
          },
          {
            "titolo": "Zero penali di estinzione anticipata",
            "descrizione": "Estinzione anticipata gratuita in qualsiasi momento"
          }
        ],
      
        "controMutuo": [
          {
            "titolo": "Spese istruttoria elevate",
            "descrizione": "Costo fisso di €600 anche in presenza di promozione CONSAP"
          },
          {
            "titolo": "Obbligo di classe energetica A, B o C",
            "descrizione": "Vincolato all’acquisto di immobili in buone classi energetiche"
          },
          {
            "titolo": "Età massima stringente",
            "descrizione": "Età massima al termine del mutuo fissata a 78 anni"
          }
        ],
      
        "praticaScore": {
          "pro": [
            "Possibilità di ottenere il 100% del valore dell’immobile",
            "Tasso fisso vantaggioso per immobili green",
            "Assenza di costi di estinzione"
          ],
          "contro": [
            "Importo massimo limitato a €250.000",
            "Isee inferiore a 40.000€ richiesto per condizioni agevolate",
            "Spese iniziali (istruttoria e perizia) non trascurabili"
          ]
        }
      }
      
      
]