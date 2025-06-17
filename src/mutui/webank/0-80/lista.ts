import { Mutuo } from "@/lib/interface";

const profilo = {
    nome: 'Webank',
    img: 'https://www.mutuisupermarket.it/static/456c0d41aa4bdc606ed340f3b4111ef2/Webank-1.svg'
}

export const webank80giu : Mutuo[] = [
    {
        "id": "weBank80-1",
        "banca": profilo.nome,
        "immagineBanca": profilo.img,
        "nomeProdotto": "Mutuo Tasso Fisso Green",
        "importoMutuo": 180000,
        "durataAnni": 25,
        "rataMensile": 856.43,
        "rataTotale": 256929,
        "tassoScelto": 2.35,
        "taeg": 2.51,
        "tipiTasso": "Fisso",
        "dataScadenzaOfferta": "2025-06-30",
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
          "importo": 0,
          "condizioni": "Gratuita. Effettuata a cura di società esterna specializzata.",
          "maxImporto": 0
        },
        "speseIstruttoria": {
          "percentualeSuImporto": false,
          "percentualeApplicata": 0,
          "importo": 500,
          "promozione": "Nessuna promozione attiva al momento",
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
          "importo": 0
        },
        "costoGestionePratica": {
          "esiste": false,
          "importo": 0
        },
        "altriTipiSpese": {
          "annuali": false,
          "importo": 0.95
        },
        "totaleDaRimborsare": 256929.45,
        "totaliCostiExtra": 950.95,
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
        "score": 82,
        "rrrMax": 35,
        "tassiPerLTV": {
          "00.00-70.00": {
            "10": 0.4,
            "15": 0.4,
            "20": 0.4,
            "25": 0.4,
            "30": 0.5
          },
          "70.01-80.00": {
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
              "causaleSconti": "Classe A o superiore",
              "percentualeSconto": 0.20
            },
            {
              "causaleSconti": "Età inferiore a 45 anni",
              "percentualeSconto": 0.05
            },
            {
              "causaleSconti": "Efficientamento energetico documentato",
              "percentualeSconto": 0.10
            }
          ]
        },
        "proMutuo": [
          {
            "titolo": "Tasso fisso competitivo",
            "descrizione": "Spread particolarmente contenuto rispetto alla media di mercato per mutui green."
          },
          {
            "titolo": "Ampie possibilità di sconto",
            "descrizione": "Combinazione di sconti su base energetica, età e ristrutturazioni permette di ottenere condizioni vantaggiose."
          },
          {
            "titolo": "Perizia gratuita",
            "descrizione": "La banca si fa carico della perizia senza alcun costo per il cliente."
          }
        ],
        "controMutuo": [
          {
            "titolo": "Accessibilità limitata a LTV massimo 80%",
            "descrizione": "Non adatto a chi ha necessità di finanziare oltre l’80% del valore dell’immobile."
          },
          {
            "titolo": "Assicurazioni facoltative escluse",
            "descrizione": "Nessuna offerta integrata per coperture assicurative, che devono essere gestite separatamente se desiderate."
          },
          {
            "titolo": "Soglia minima di 50.000 €",
            "descrizione": "Non utilizzabile per finanziamenti inferiori a 50.000 €, rendendolo inadatto a piccoli importi."
          }
        ],
        "praticaScore": {
          "pro": [
            "Perizia gratuita",
            "Istruttoria fissa e trasparente",
            "Tasso scontabile per più profili"
          ],
          "contro": [
            "Assenza spese periodiche solo per gestione digitale",
            "Agevolazioni solo fino a 80% LTV",
            "Non supporta mutui piccoli sotto i 50k"
          ]
        }
      }
      
]