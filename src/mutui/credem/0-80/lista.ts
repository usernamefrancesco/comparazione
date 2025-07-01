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
      },


      //2bank 1 luglio
      {
        "id": "mutuo-credem-green-fisso",
        "banca": profilo.nome,
        "immagineBanca": profilo.img,
        "nomeProdotto": "Mutuo Green Credem - Tasso Fisso",
        "importoMutuo": 180000,
        "durataAnni": 25,
        "rataMensile": 849.35,
        "rataTotale": 254805,
        "tassoScelto": 3.20,
        "taeg": 3.35,
        "tipiTasso": "Fisso",
        "dataScadenzaOfferta": null,
        "importoInfo": {
          "importoMax": 500000,
          "importoMin": 50000
        },
        "soloClassiAB": true,
        "soloClassiLista": ["A", "B"],
        "consap": false,
        "irs": true,
        "isee": false,
        "spesePerizia": {
          "importo": 300,
          "condizioni": "Importo fisso applicato per ogni perizia. Il perito è selezionato dalla banca.",
          "maxImporto": 300
        },
        "speseIstruttoria": {
          "percentualeSuImporto": true,
          "percentualeApplicata": 0.01,
          "importo": 1800,
          "promozione": "Azzeramento istruttoria per immobili in classe energetica A o B.",
          "attiva": true,
          "importoMax": 0,
          "importoMin": 1200,
          "ltvImporto": false,
          "importoLtv": []
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
          "esiste": true,
          "importo": 49
        },
        "altriTipiSpese": {
          "annuali": true,
          "importo": 49
        },
        "totaleDaRimborsare": 254805,
        "totaliCostiExtra": 2301.5,
        "assicurazioniObbligatorie": {
          "assicurazioneCasa": true,
          "assicurazioneVita": false,
          "assicurazioneCasaMensile": false,
          "assicurazioneVitaMensile": false,
          "percentualePremioVita": 0,
          "costoStimatoCasa": 500,
          "costoStimatoVita": 0
        },
        "ltvMutuo": 80.0,
        "eta": {
          "minima": 18,
          "massima": 75,
          "maxUnder36": false
        },
        "score": 82,
        "rrrMax": 35,
        "tassiPerLTV": {
          "00.00-50.00": {
            "5": 0,
            "10": 0,
            "15": 0,
            "20": 0.03,
            "25": 0.05,
            "30": 0.05
          },
          "50.01-70.00": {
            "5": 0.01,
            "10": 0.01,
            "15": 0.01,
            "20": 0.04,
            "25": 0.06,
            "30": 0.06
          },
          "70.01-80.00": {
            "5": 0.05,
            "10": 0.05,
            "15": 0.05,
            "20": 0.05,
            "25": 0.25,
            "30": 0.25
          }
        },
        "tipiDurata": [5, 10, 15, 20, 25, 30],
        "scontisticheGenerali": {
          "esistono": true,
          "listaSconti": [
            {
              "causaleSconti": "Azzeramento istruttoria per immobili in classe A o B",
              "percentualeSconto": 1.0
            }
          ]
        },
        "proMutuo": [
          {
            "titolo": "Tasso indicizzato all’IRS con spread contenuto",
            "descrizione": "Il mutuo offre tassi competitivi con spread particolarmente ridotti per LTV bassi."
          },
          {
            "titolo": "Zero spese di istruttoria per immobili efficienti",
            "descrizione": "Prevista l’eliminazione delle spese di istruttoria per immobili in classe A o B, riducendo i costi iniziali."
          }
        ],
        "controMutuo": [
          {
            "titolo": "Accesso limitato a immobili in classi energetiche alte",
            "descrizione": "Il mutuo è riservato esclusivamente a immobili in classe A o B, escludendo una parte significativa del mercato."
          },
          {
            "titolo": "Obbligo di perizia a pagamento con tecnici selezionati dalla banca",
            "descrizione": "La perizia è obbligatoria e deve essere effettuata da tecnici accreditati, con un costo fisso non negoziabile."
          }
        ],
        "praticaScore": {
          "pro": [
            "Tassi IRS + spread molto contenuti su tutte le durate",
            "Nessuna spesa di istruttoria per immobili green"
          ],
          "contro": [
            "Non accessibile a immobili non efficienti",
            "Costo fisso perizia anche in presenza di promozioni"
          ]
        }
      }
      

      
]