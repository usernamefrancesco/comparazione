import { Mutuo } from "@/lib/interface";


const profilo = {
    nome: 'Credem',
    img: 'https://img.gruppomol.it/mutuionline/loghi_high_density/1.svg'
}


export const credem80giu: Mutuo[] = [
    {
        "id": "credem-mutuo-001",
        "banca": profilo.nome,
        "immagineBanca": profilo.img,
        "nomeProdotto": "Mutuo Credem Prima o Seconda Casa - Tasso Fisso",
        "importoMutuo": 180000,
        "durataAnni": 25,
        "rataMensile": 850,
        "rataTotale": 255000,
        "tassoScelto": 2.75,
        "taeg": 2.95,
        "tipiTasso": "Fisso",
        "dataScadenzaOfferta": null,
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
          "importo": 300,
          "condizioni": "Costo fisso per la perizia sull’immobile eseguita da periti della banca",
          "maxImporto": 300
        },
        "speseIstruttoria": {
            ltvImporto: false,
      importoLtv: [],
          "percentualeSuImporto": true,
          "percentualeApplicata": 0.01,
          "importo": 1800,
          "promozione": "Spese azzerate per immobili in classe A o B",
          "attiva": true,
          "importoMax": 0,
          "importoMin": 1200
        },
        "impostaSostitutiva": {
          "promozione": false,
          "importo": 450
        },
        "incassoRata": {
          "esiste": true,
          "importo": 3.5
        },
        "costoGestionePratica": {
          "esiste": false,
          "importo": 0
        },
        "altriTipiSpese": {
          "annuali": true,
          "importo": 49
        },
        "totaleDaRimborsare": 255000,
        "totaliCostiExtra": 2601.5,
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
          "massima": 75,
          "maxUnder36": false
        },
        "score": 83,
        "rrrMax": 35,
        "tassiPerLTV": {
          "00.00-50.00": {
            "10": 0.17,
            "15": 0.17,
            "20": 0.18,
            "25": 0.32,
            "30": 0.32
          },
          "50.01-70.00": {
            "10": 0.18,
            "15": 0.18,
            "20": 0.19,
            "25": 0.33,
            "30": 0.33
          },
          "70.01-80.00": {
            "10": 0.41,
            "15": 0.41,
            "20": 0.41,
            "25": 0.59,
            "30": 0.59
          }
        },
        "tipiDurata": [5, 10, 15, 20, 25, 30],
        "scontisticheGenerali": {
          "esistono": true,
          "listaSconti": [
            {
              "causaleSconti": "Classe A o B - Azzeramento spese istruttoria",
              "percentualeSconto": 100
            }
          ]
        },
        "proMutuo": [
          {
            "titolo": "Ampia flessibilità nelle durate",
            "descrizione": "Durate da 5 a 30 anni per adattarsi a diverse esigenze finanziarie."
          },
          {
            "titolo": "Tassi trasparenti legati all’IRS",
            "descrizione": "Calcolo basato su IRS più spread chiaro e predeterminato in base all’LTV."
          },
          {
            "titolo": "Condizioni migliorative per immobili efficienti",
            "descrizione": "Azzeramento spese istruttoria per immobili in classe energetica A o B."
          }
        ],
        "controMutuo": [
          {
            "titolo": "Assicurazione obbligatoria solo tramite banca",
            "descrizione": "Polizza incendio/scoppio da sottoscrivere con la banca obbligatoriamente."
          },
          {
            "titolo": "Costi periodici fissi",
            "descrizione": "Sono previste spese fisse di gestione e incasso rata, anche con addebito in conto."
          },
          {
            "titolo": "Spread elevato su LTV alti",
            "descrizione": "Con LTV tra 70%-80%, lo spread arriva fino allo 0,59%, aumentando il costo del mutuo."
          }
        ],
        "praticaScore": {
          "pro": [
            "Documentazione e processo trasparente",
            "Agevolazioni per immobili green"
          ],
          "contro": [
            "Spese fisse ricorrenti",
            "Spread meno competitivo per LTV alto"
          ]
        }
      }
      
]