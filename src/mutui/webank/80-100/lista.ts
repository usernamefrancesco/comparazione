import { Mutuo } from "@/lib/interface"

const profilo = {
    nome: 'Webank',
    img: 'https://www.mutuisupermarket.it/static/456c0d41aa4bdc606ed340f3b4111ef2/Webank-1.svg'
}
export const mutui80su: Mutuo[] = [
    {
        "id": "mutuoWeBank100-1",
        "banca": profilo.nome,
        "immagineBanca": profilo.img,
        "nomeProdotto": "Mutuo Webank giovani fisso Green",
      
        "importoMutuo": 150000,
        "durataAnni": 25,
        "rataMensile": 668.12,
        "rataTotale": 200436,
      
        "tassoScelto": 3.00,
        "taeg": 3.12,
        "tipiTasso": "Fisso",
        "dataScadenzaOfferta": "2025-08-31T00:00:00.000Z",
      
        "importoInfo": {
          "importoMax": 250000,
          "importoMin": 50000
        },
      
        "soloClassiAB": true,
        "soloClassiLista": [],
      
        "consap": true,
        "irs": true,
        "isee": true,
      
        "spesePerizia": {
          "importo": 0,
          "condizioni": "Perizia a carico della banca, effettuata da società esterna specializzata",
          "maxImporto": 0
        },
      
        "speseIstruttoria": {
          percentualeSuImporto: false, 
          ltvImporto: false,
      importoLtv: [],
          percentualeApplicata: 0,
          importoMin: 0,
          importoMax: 0,
          "importo": 0,
          "promozione": "Nessun costo di istruttoria per tutta la durata della promozione",
          "attiva": true
        },
      
        "impostaSostitutiva": {
          "promozione": true,
          "importo": 375
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
      
        "totaleDaRimborsare": 200436,
        "totaliCostiExtra": 375,
      
        "assicurazioniObbligatorie": {
          "assicurazioneCasa": true,
          "assicurazioneVita": false,
          "assicurazioneCasaMensile": false,
          "assicurazioneVitaMensile": false,
          "percentualePremioVita": 0,
          "costoStimatoCasa": 0,
          "costoStimatoVita": 0
        },
      
        "ltvMutuo": 100,
      
        "eta": {
          "minima": 18,
          "massima": 75,
          "maxUnder36": true
        },
      
        "score": 87,
        "rrrMax": 33,
      
        "tassiPerLTV": {
          "00.00-80.00": {
            "10": 0.25,
            "15": 0.25,
            "20": 0.25,
            "25": 0.25,
            "30": 0.35
          },
          "80.01-95.00": {
            "10": 0.25,
            "15": 0.25,
            "20": 0.25,
            "25": 0.25,
            "30": 0.35
          },
          "95.01-100": {
            "10": 0.25,
            "15": 0.25,
            "20": 0.25,
            "25": 0.25,
            "30": 0.35
          }
        },
      
        "tipiDurata": [10, 15, 20, 25, 30],
      
        "scontisticheGenerali": {
          "esistono": true,
          "listaSconti": [
            
            {
              "causaleSconti": "Interventi di efficientamento energetico sull’immobile",
              "percentualeSconto": 0.10
            }
          ]
        },
      
        "proMutuo": [
          {
            "titolo": "Zero costi di istruttoria e perizia",
            "descrizione": "La banca si fa carico dei costi perizia e non applica alcun costo di istruttoria"
          },
          {
            "titolo": "Accesso prioritario con garanzia CONSAP",
            "descrizione": "Supporto per i giovani e categorie prioritarie tramite garanzia pubblica"
          },
          {
            "titolo": "Assicurazione incendio gratuita",
            "descrizione": "Polizza incendio e scoppio a carico della banca, senza costi per il cliente"
          },
          
        ],
      
        "controMutuo": [
          {
            "titolo": "Obbligo ISEE < 40.000€ per i benefici CONSAP",
            "descrizione": "Per ottenere la garanzia all’80% è necessario avere un ISEE inferiore a 40.000€"
          },
          {
            "titolo": "Vincolo giovani under 36",
            "descrizione": "L’offerta è riservata a giovani con meno di 36 anni o giovani coppie"
          },
          {
            "titolo": "Maggiore spread sotto i 100.000€",
            "descrizione": "Per mutui inferiori ai 100.000€, lo spread è aumentato di 0,10%"
          }
        ],
      
        "praticaScore": {
          "pro": [
            "Zero costi di istruttoria",
            "Perizia gratuita",
            "Accesso agevolato con garanzia pubblica"
          ],
          "contro": [
            "Requisiti stringenti su età e ISEE",
            "Spread aumentato sotto i 100.000€"
          ]
        }
      },


      // 2bank
      {
        "id": "mutuoWeBank100-2",
        "banca": profilo.nome,
        "immagineBanca": profilo.img,
        "nomeProdotto": "Mutuo Webank giovani fisso",
      
        "importoMutuo": 150000,
        "durataAnni": 25,
        "rataMensile": 668.12,
        "rataTotale": 200436,
      
        "tassoScelto": 3.00,
        "taeg": 3.12,
        "tipiTasso": "Fisso",
        "dataScadenzaOfferta": "2025-08-31T00:00:00.000Z",
      
        "importoInfo": {
          "importoMax": 250000,
          "importoMin": 50000
        },
      
        "soloClassiAB": false,
        "soloClassiLista": [],
      
        "consap": true,
        "irs": true,
        "isee": true,
      
        "spesePerizia": {
          "importo": 0,
          "condizioni": "Perizia a carico della banca, effettuata da società esterna specializzata",
          "maxImporto": 0
        },
      
        "speseIstruttoria": {
          percentualeSuImporto: false ,
          percentualeApplicata: 0,
          ltvImporto: false,
          importoLtv: [],
          importoMin: 0,
          importoMax: 0,
          "importo": 0,
          "promozione": "Nessun costo di istruttoria per tutta la durata della promozione",
          "attiva": true
        },
      
        "impostaSostitutiva": {
          "promozione": true,
          "importo": 375
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
      
        "totaleDaRimborsare": 200436,
        "totaliCostiExtra": 375,
      
        "assicurazioniObbligatorie": {
          "assicurazioneCasa": true,
          "assicurazioneVita": false,
          "assicurazioneCasaMensile": false,
          "assicurazioneVitaMensile": false,
          "percentualePremioVita": 0,
          "costoStimatoCasa": 0,
          "costoStimatoVita": 0
        },
      
        "ltvMutuo": 100,
      
        "eta": {
          "minima": 18,
          "massima": 75,
          "maxUnder36": true
        },
      
        "score": 87,
        "rrrMax": 33,
      
        "tassiPerLTV": {
          "00.00-80.00": {
            "10": 0.45,
            "15": 0.45,
            "20": 0.45,
            "25": 0.45,
            "30": 0.55
          },
          "80.01-95.00": {
            "10": 0.45,
            "15": 0.45,
            "20": 0.45,
            "25": 0.45,
            "30": 0.55
          },
          "95.01-100": {
            "10": 0.45,
            "15": 0.45,
            "20": 0.45,
            "25": 0.45,
            "30": 0.55
          }
        },
      
        "tipiDurata": [10, 15, 20, 25, 30],
      
        "scontisticheGenerali": {
          "esistono": true,
          "listaSconti": [
            {
              "causaleSconti": "Classe energetica A o B",
              "percentualeSconto": 0.20
            },
            {
              "causaleSconti": "Interventi di efficientamento energetico sull’immobile",
              "percentualeSconto": 0.10
            }
          ]
        },
      
        "proMutuo": [
          {
            "titolo": "Zero costi di istruttoria e perizia",
            "descrizione": "La banca si fa carico dei costi perizia e non applica alcun costo di istruttoria"
          },
          {
            "titolo": "Accesso prioritario con garanzia CONSAP",
            "descrizione": "Supporto per i giovani e categorie prioritarie tramite garanzia pubblica"
          },
          {
            "titolo": "Assicurazione incendio gratuita",
            "descrizione": "Polizza incendio e scoppio a carico della banca, senza costi per il cliente"
          },
          
        ],
      
        "controMutuo": [
          {
            "titolo": "Obbligo ISEE < 40.000€ per i benefici CONSAP",
            "descrizione": "Per ottenere la garanzia all’80% è necessario avere un ISEE inferiore a 40.000€"
          },
          {
            "titolo": "Vincolo giovani under 36",
            "descrizione": "L’offerta è riservata a giovani con meno di 36 anni o giovani coppie"
          },
          {
            "titolo": "Maggiore spread sotto i 100.000€",
            "descrizione": "Per mutui inferiori ai 100.000€, lo spread è aumentato di 0,10%"
          }
        ],
      
        "praticaScore": {
          "pro": [
            "Zero costi di istruttoria",
            "Perizia gratuita",
            "Accesso agevolato con garanzia pubblica"
          ],
          "contro": [
            "Requisiti stringenti su età e ISEE",
            "Spread aumentato sotto i 100.000€"
          ]
        }
      }
      
      
]