import { Mutuo } from "@/lib/interface"

const profilo = {
    nome: 'Webank',
    img: 'https://www.mutuisupermarket.it/static/456c0d41aa4bdc606ed340f3b4111ef2/Webank-1.svg'
}
export const mutui80su: Mutuo[] = [
   

      // 3bank

      {
        "id": "mutuo-consap-giovani-2025",
        "banca": profilo.nome,
        "immagineBanca": profilo.img,
        "nomeProdotto": "Mutuo Giovani Tasso Fisso CONSAP",
      
        "importoMutuo": 180000,
        "durataAnni": 25,
        "rataMensile": 850.00,
        "rataTotale": 255000.00,
        "tassoScelto": 3.10,
        "taeg": 3.25,
        "tipiTasso": "Fisso",
        "dataScadenzaOfferta": "2025-07-31",
      
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
          "condizioni": "A carico della banca, effettuata da società esterna specializzata",
          "maxImporto": 0
        },
      
        "speseIstruttoria": {
          "percentualeSuImporto": false,
          "percentualeApplicata": 0,
          "importo": 0,
          "promozione": "Istruttoria gratuita per tutte le richieste entro il 31 luglio 2025",
          "attiva": true,
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
          "esiste": false,
          "importo": 0
        },
      
        "costoGestionePratica": {
          "esiste": false,
          "importo": 0
        },
      
        "altriTipiSpese": {
          "annuali": true,
          "importo": 0.95
        },
      
        "totaleDaRimborsare": 255000.95,
        "totaliCostiExtra": 450.95,
      
        "assicurazioniObbligatorie": {
          "assicurazioneCasa": false,
          "assicurazioneVita": false,
          "assicurazioneCasaMensile": false,
          "assicurazioneVitaMensile": false,
          "percentualePremioVita": 0,
          "costoStimatoCasa": 0,
          "costoStimatoVita": 0
        },
      
        "ltvMutuo": 90.00,
      
        "eta": {
          "minima": 18,
          "massima": 75,
          "maxUnder36": true
        },
      
        "score": 82,
        "rrrMax": 35,
      
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
              "causaleSconti": "Sconto sul tasso per immobili in classe energetica A o B",
              "percentualeSconto": 0.20
            },
            {
              "causaleSconti": "Sconto sul tasso per interventi di efficientamento energetico",
              "percentualeSconto": 0.10
            },
            {
              "causaleSconti": "Sconto per importo mutuo superiore all'80% e ISEE < 40.000€",
              "percentualeSconto": 0.10
            }
          ]
        },
      
        "proMutuo": [
          {
            "titolo": "Accesso prioritario per i giovani under 36",
            "descrizione": "Il mutuo è pensato per favorire l’accesso alla casa da parte di giovani e giovani coppie, con priorità di approvazione"
          },
          {
            "titolo": "Garanzia pubblica fino all’80%",
            "descrizione": "Grazie al Fondo Prima Casa, è possibile ottenere fino all’80% di garanzia pubblica, riducendo i requisiti patrimoniali"
          },
          {
            "titolo": "Spese iniziali azzerate",
            "descrizione": "Istruttoria e perizia gratuite, senza costi nascosti o anticipi"
          }
        ],
      
        "controMutuo": [
          {
            "titolo": "Obbligo di ISEE sotto i 40.000€ per massima agevolazione",
            "descrizione": "Per accedere alla garanzia all’80% è necessario rientrare sotto la soglia ISEE, limitando la platea"
          },
          {
            "titolo": "Tasso definito solo alla proposta vincolante",
            "descrizione": "Il tasso finale dipende dal valore IRS del mese precedente alla proposta irrevocabile, introducendo variabilità"
          },
          {
            "titolo": "Finanziamento solo prima casa",
            "descrizione": "Il mutuo non è disponibile per acquisti diversi dalla prima abitazione o per finalità differenti"
          }
        ],
      
        "praticaScore": {
          "pro": [
            "Zero costi iniziali",
            "Garanzia pubblica elevata",
            "Tasso fisso con sconti per efficienza energetica"
          ],
          "contro": [
            "Limite ISEE per condizioni migliori",
            "Importo massimo limitato a 250.000€",
            "Rischio IRS elevato al momento della stipula"
          ]
        }
      },

      // 4bank
      {
        "id": "mutuo-consap-giovani-2025",
        "banca": profilo.nome,
        "immagineBanca": profilo.img,
        "nomeProdotto": "Mutuo Giovani Green Tasso Fisso CONSAP",
      
        "importoMutuo": 180000,
        "durataAnni": 25,
        "rataMensile": 850.00,
        "rataTotale": 255000.00,
        "tassoScelto": 3.10,
        "taeg": 3.25,
        "tipiTasso": "Fisso",
        "dataScadenzaOfferta": "2025-07-31",
      
        "importoInfo": {
          "importoMax": 250000,
          "importoMin": 50000
        },
      
        "soloClassiAB": true,
        "soloClassiLista": ['A', 'B'],
      
        "consap": true,
        "irs": true,
        "isee": true,
      
        "spesePerizia": {
          "importo": 0,
          "condizioni": "A carico della banca, effettuata da società esterna specializzata",
          "maxImporto": 0
        },
      
        "speseIstruttoria": {
          "percentualeSuImporto": false,
          "percentualeApplicata": 0,
          "importo": 0,
          "promozione": "Istruttoria gratuita per tutte le richieste entro il 31 luglio 2025",
          "attiva": true,
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
          "esiste": false,
          "importo": 0
        },
      
        "costoGestionePratica": {
          "esiste": false,
          "importo": 0
        },
      
        "altriTipiSpese": {
          "annuali": true,
          "importo": 0.95
        },
      
        "totaleDaRimborsare": 255000.95,
        "totaliCostiExtra": 450.95,
      
        "assicurazioniObbligatorie": {
          "assicurazioneCasa": false,
          "assicurazioneVita": false,
          "assicurazioneCasaMensile": false,
          "assicurazioneVitaMensile": false,
          "percentualePremioVita": 0,
          "costoStimatoCasa": 0,
          "costoStimatoVita": 0
        },
      
        "ltvMutuo": 90.00,
      
        "eta": {
          "minima": 18,
          "massima": 75,
          "maxUnder36": true
        },
      
        "score": 82,
        "rrrMax": 35,
      
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
              "causaleSconti": "Sconto sul tasso per interventi di efficientamento energetico",
              "percentualeSconto": 0.10
            },
            
          ]
        },
      
        "proMutuo": [
          {
            "titolo": "Accesso prioritario per i giovani under 36",
            "descrizione": "Il mutuo è pensato per favorire l’accesso alla casa da parte di giovani e giovani coppie, con priorità di approvazione"
          },
          {
            "titolo": "Garanzia pubblica fino all’80%",
            "descrizione": "Grazie al Fondo Prima Casa, è possibile ottenere fino all’80% di garanzia pubblica, riducendo i requisiti patrimoniali"
          },
          {
            "titolo": "Spese iniziali azzerate",
            "descrizione": "Istruttoria e perizia gratuite, senza costi nascosti o anticipi"
          }
        ],
      
        "controMutuo": [
          {
            "titolo": "Obbligo di ISEE sotto i 40.000€ per massima agevolazione",
            "descrizione": "Per accedere alla garanzia all’80% è necessario rientrare sotto la soglia ISEE, limitando la platea"
          },
          {
            "titolo": "Tasso definito solo alla proposta vincolante",
            "descrizione": "Il tasso finale dipende dal valore IRS del mese precedente alla proposta irrevocabile, introducendo variabilità"
          },
          {
            "titolo": "Finanziamento solo prima casa",
            "descrizione": "Il mutuo non è disponibile per acquisti diversi dalla prima abitazione o per finalità differenti"
          }
        ],
      
        "praticaScore": {
          "pro": [
            "Zero costi iniziali",
            "Garanzia pubblica elevata",
            "Tasso fisso con sconti per efficienza energetica"
          ],
          "contro": [
            "Limite ISEE per condizioni migliori",
            "Importo massimo limitato a 250.000€",
            "Rischio IRS elevato al momento della stipula"
          ]
        }
      }
      
      
      
      
]