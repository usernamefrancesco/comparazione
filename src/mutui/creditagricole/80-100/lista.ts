import { Mutuo } from "@/lib/interface";

const profilo = {
    nome: 'Credit Agricole',
    img: 'https://upload.wikimedia.org/wikipedia/it/b/b7/Cr%C3%A9dit_Agricole_logo.svg'
}
export const CreditAgricol80su : Mutuo[] = [
    {
        "id": "CrediAgricole100-1",
        "banca": profilo.nome,
        "immagineBanca": profilo.img,
        "nomeProdotto": "Mutuo Crédit Agricole Greenback",
      
        "importoMutuo": 180000,
        "durataAnni": 30,
        "rataMensile": 772.55,
        "rataTotale": 278118,
        "tassoScelto": 3.14,
        "taeg": 3.326,
        "tipiTasso": "Fisso",
        "dataScadenzaOfferta": "2025-12-31",
      
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
          "condizioni": "Solo in caso di mutuo non perfezionato o rinunciato",
          "maxImporto": 300
        },
      
        "speseIstruttoria": {
          "percentualeSuImporto": true,
          "percentualeApplicata": 0.011,
          ltvImporto: false,
      importoLtv: [],
          "importo": 10000,
          "promozione": "Gratuita per immobili in classe A o B",
          "attiva": true,
          "importoMax": 2800,
          "importoMin": 1500
        },
      
        "impostaSostitutiva": {
          "promozione": true,
          "importo": 0
        },
      
        "incassoRata": {
          "esiste": true,
          "importo": 1.5
        },
      
        "costoGestionePratica": {
          "esiste": true,
          "importo": 3.25
        },
      
        "altriTipiSpese": {
          "annuali": true,
          "importo": 3.85
        },
      
        "totaleDaRimborsare": 282660.30,
        "totaliCostiExtra": 4542.3,
      
        "assicurazioniObbligatorie": {
          "assicurazioneCasa": true,
          "assicurazioneVita": false,
          "assicurazioneCasaMensile": false,
          "assicurazioneVitaMensile": false,
          "percentualePremioVita": 0.002,
          "costoStimatoCasa": 300,
          "costoStimatoVita": 432
        },
      
        "ltvMutuo": 90,
      
        "eta": {
          "minima": 18,
          "massima": 35,
          "maxUnder36": true
        },
      
        "score": 87,
        "rrrMax": 35,
      
        "tassiPerLTV": {
          "80.01-95.00": {
            "10": 0.29,
            "15": 0.18,
            "20": 0.19,
            "25": 0.26,
            "30": 0.47
          },
          "95.01-100": {
            "10": 0.29,
            "15": 0.18,
            "20": 0.19,
            "25": 0.26,
            "30": 0.47
          }
        },
      
        "tipiDurata": [10, 15, 20, 25, 30],
      
        "scontisticheGenerali": {
          "esistono": true,
          "listaSconti": [
            {
              "causaleSconti": "Miglioramento di almeno 2 classi energetiche o riduzione del 30% IPE",
              "percentualeSconto": 0.10
            },
            {
              causaleSconti: "Spese d'istruttoria azzerate per classi energetiche A o B",
              percentualeSconto: 100
            }
          ]
        },
      
        "proMutuo": [
          {
            "titolo": "Accesso al 100% di LTV con CONSAP",
            "descrizione": "Permette il finanziamento fino al 100% del valore dell’immobile con garanzia statale"
          },
          {
            "titolo": "Ampie opzioni di flessibilità post-stipula",
            "descrizione": "Consente sospensioni o variazioni del piano di ammortamento senza costi aggiuntivi"
          },
          {
            "titolo": "Opzione Flexi per cambio tasso fino a 4 volte",
            "descrizione": "Possibilità di passare da tasso fisso a variabile e viceversa durante il mutuo"
          }
        ],
      
        "controMutuo": [
          {
            "titolo": "Obbligo ISEE per accedere alle condizioni agevolate",
            "descrizione": "ISEE inferiore a 40.000€ necessario per usufruire di imposta azzerata e tasso promozionale"
          },
          {
            "titolo": "Spese gestione pratica e incasso rata non trascurabili",
            "descrizione": "Sono previste spese mensili ricorrenti che aumentano il costo effettivo del mutuo"
          },
          {
            "titolo": "Tasso IRS variabile nel tempo",
            "descrizione": "Il tasso finale dipende dallo scenario IRS alla stipula, riducendo la prevedibilità futura"
          }
        ],
      
        "praticaScore": {
          "pro": [
            "Flessibilità nella gestione delle rate",
            "Agevolazioni per riqualificazione energetica",
            "Tasso fisso abbinato a possibilità di modifica"
          ],
          "contro": [
            "Vincolo su ISEE per benefici fiscali",
            "Spese mensili che si sommano al costo complessivo",
            "Condizioni promozionali legate alla sottoscrizione di altri prodotti"
          ]
        }
      }, 
      
]