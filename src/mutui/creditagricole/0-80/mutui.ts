import { Mutuo } from "@/lib/interface"

const profilo = {
    nome: 'Credit Agricole',
    img: 'https://upload.wikimedia.org/wikipedia/it/b/b7/Cr%C3%A9dit_Agricole_logo.svg'
}

export const mutui80giu: Mutuo[] = [

    {
        "id": "CredirAgricole80-1",
        "banca": profilo.nome,
        "immagineBanca": profilo.img,
        "nomeProdotto": "Mutuo Crédit Agricole Greenback Tasso Fisso Esplicito",
      
        "importoMutuo": 160000,
        "durataAnni": 30,
        "rataMensile": 606.71,
        "rataTotale": 606.71 * 12 * 30,
        "tassoScelto": 2.19,
        "taeg": 2.337,
        "tipiTasso": "Fisso",
        "dataScadenzaOfferta": "2025-06-30",
      
        "importoInfo": {
          "importoMax": 160000,
          "importoMin": 10000
        },
      
        "soloClassiAB": true,
        "soloClassiLista": ["A", "B"],
      
        "consap": false,
        "irs": false,
        "isee": false,
      
        "spesePerizia": {
          "importo": 0,
          "condizioni": "Spese di perizia incluse nelle commissioni di istruttoria in caso di mutuo perfezionato. In caso di rinuncia o mutuo non perfezionato, costo perizia di 300€.",
          "maxImporto": 300
        },
      
        "speseIstruttoria": {
          "percentualeSuImporto": false,
          ltvImporto: false,
      importoLtv: [],
          "percentualeApplicata": 0,
          "importo": 0,
          "promozione": "Gratuite per acquisto immobili in classe A o B",
          "attiva": true,
          "importoMax": 1000,
          "importoMin": 0
        },
      
        "impostaSostitutiva": {
          "promozione": true,
          "importo": 0.0025 * 160000
        },
      
        "incassoRata": {
          "esiste": true,
          "importo": 1.50
        },
      
        "costoGestionePratica": {
          "esiste": true,
          "importo": 3.25
        },
      
        "altriTipiSpese": {
          "annuali": false,
          "importo": 0
        },
      
        "totaleDaRimborsare": 606.71 * 12 * 30,
        "totaliCostiExtra": 3.25 * 12 * 30 + 1.50 * 12 * 30 + (0.85 + 3.00 + 24.56) * 30,
      
        "assicurazioniObbligatorie": {
          "assicurazioneCasa": false,
          "assicurazioneVita": true,
          "assicurazioneCasaMensile": false,
          "assicurazioneVitaMensile": true,
          "percentualePremioVita": 0.02,
          "costoStimatoCasa": 24.56,
          "costoStimatoVita": 0
        },
      
        "ltvMutuo": 80,
      
        "eta": {
          "minima": 18,
          "massima": 75,
          "maxUnder36": false
        },
      
        "score": 85,
        "rrrMax": 35,
      
        "tassiPerLTV": {
          "00.00-80.00": {
            "10": 2.49,
            "15": 2.49,
            "20": 2.19,
            "25": 2.19,
            "30": 2.19
          }
        },
      
        "tipiDurata": [10, 15, 20, 25, 30],
      
        "scontisticheGenerali": {
          "esistono": true,
          "listaSconti": [
            {
              "causaleSconti": "Miglioramento di almeno 2 classi energetiche o riduzione del 30% dell’IPE",
              "percentualeSconto": 0.10
            }
          ]
        },
      
        "proMutuo": [
          {
            "titolo": "Tasso Fisso garantito",
            "descrizione": "Il tasso fisso esplicito offre certezza di rata per tutta la durata del mutuo, facilitando la pianificazione finanziaria."
          },
          {
            "titolo": "Sconto tasso con polizza CPI Vita",
            "descrizione": "Sconto di 0,50% sul tasso fisso per sottoscrizione della polizza CPI Vita CACI o equivalente."
          },
          {
            "titolo": "Opzione Flexi",
            "descrizione": "Possibilità di modificare la tipologia di tasso da fisso a variabile (e viceversa) fino a 4 volte dopo 12 mesi dalla stipula, con maggiorazione fissa di 0,15%."
          }
        ],
      
        "controMutuo": [
          {
            "titolo": "Vincolo di polizza CPI per tasso scontato",
            "descrizione": "Per ottenere il tasso promozionale è necessario sottoscrivere la polizza CPI Vita, che comporta un costo aggiuntivo non incluso nella rata."
          },
          {
            "titolo": "Spese di gestione e incasso rata mensili",
            "descrizione": "Nonostante l'assenza di spese di istruttoria per immobili in classe A o B, si applicano costi mensili per incasso rata e gestione pratica."
          },
          {
            "titolo": "Limitazione solo immobili in classi A o B",
            "descrizione": "L’offerta è riservata esclusivamente a immobili in classi energetiche A o B, escludendo un'ampia fascia di potenziali clienti."
          }
        ],
      
        "praticaScore": {
          "pro": [
            "Tasso fisso con condizioni promozionali vantaggiose",
            "Flessibilità nella modifica del tasso con Opzione Flexi",
            "Nessuna penale per estinzione anticipata"
          ],
          "contro": [
            "Obbligo di polizza CPI per ottenere condizioni migliori",
            "Costi mensili aggiuntivi per incasso rata e gestione pratica",
            "Vincoli rigidi sulla classe energetica dell’immobile"
          ]
        }
      },
      


      // 2bank
      {
        "id": "mutuo-credit-agricole-greenback",
        "banca": profilo.nome,
        "immagineBanca": profilo.img,
        "nomeProdotto": "Mutuo Crédit Agricole Greenback",
      
        "importoMutuo": 160000,
        "durataAnni": 30,
        "rataMensile": 698.09,
        "rataTotale": 698.09 * 12 * 30,
        "tassoScelto": 3.27,
        "taeg": 3.472,
        "tipiTasso": "Fisso",
        "dataScadenzaOfferta": "2025-06-30",
      
        "importoInfo": {
          "importoMax": 500000,
          "importoMin": 50000
        },
      
        "soloClassiAB": true,
        "soloClassiLista": ["A", "B", "C"],
      
        "consap": false,
        "irs": true,
        "isee": false,
      
        "spesePerizia": {
          "importo": 300,
          "condizioni": "Applicate solo in caso di rinuncia o non perfezionamento del mutuo",
          "maxImporto": 300
        },
      
        "speseIstruttoria": {
          "percentualeSuImporto": false,
          ltvImporto: false,
      importoLtv: [],
          "percentualeApplicata": 0,
          "importo": 1000,
          "promozione": "Gratuite per immobili in classe A o B",
          "attiva": true,
          "importoMax": 1000,
          "importoMin": 0
        },
      
        "impostaSostitutiva": {
          "promozione": false,
          "importo": 0.25
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
          "importo": (0.85 + 3.00)
        },
      
        "totaleDaRimborsare": 255274.70,
        "totaliCostiExtra": (1.5 + 3.25) * 12 * 30 + (0.85 + 3.00) * 30,
      
        "assicurazioniObbligatorie": {
          "assicurazioneCasa": true,
          "assicurazioneVita": true,
          "assicurazioneCasaMensile": false,
          "assicurazioneVitaMensile": true,
          "percentualePremioVita": 0.02,
          "costoStimatoCasa": 600,
          "costoStimatoVita": 800
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
          "00.00-80.00": {
            "10": 0.10,
            "15": 0.10,
            "20": 0.10,
            "25": 0.10,
            "30": 0.10
          }
        },
      
        "tipiDurata": [10, 15, 20, 25, 30],
      
        "scontisticheGenerali": {
          "esistono": true,
          "listaSconti": [
            {
              "causaleSconti": "Miglioramento di almeno 2 classi energetiche o riduzione del 30% dell’IPE",
              "percentualeSconto": 0.10
            }
          ]
        },
      
        "proMutuo": [
          {
            "titolo": "Opzioni di flessibilità avanzate",
            "descrizione": "Permette sospensione o variazione rate fino a 4 volte durante la vita del mutuo"
          },
          {
            "titolo": "Sconto sul tasso con riqualificazione energetica",
            "descrizione": "Riduzione stabile dello 0,10% con interventi migliorativi sull'immobile"
          },
          {
            "titolo": "Possibilità di cambio tasso fino a 4 volte",
            "descrizione": "Con l'Opzione Flexi è possibile modificare il tasso da fisso a variabile o viceversa"
          }
        ],
      
        "controMutuo": [
          {
            "titolo": "Obbligo implicito di polizza per tasso agevolato",
            "descrizione": "La sottoscrizione della polizza vita è necessaria per ottenere le condizioni promozionali"
          },
          {
            "titolo": "Costi fissi accessori annuali",
            "descrizione": "Gestione pratica e incasso rata generano un costo ricorrente annuo non trascurabile"
          },
          {
            "titolo": "Limite all'importo per ristrutturazione",
            "descrizione": "Per interventi di ristrutturazione il finanziamento massimo è solo il 60% dell'immobile"
          }
        ],
      
        "praticaScore": {
          "pro": [
            "Durata ampia fino a 30 anni",
            "Possibilità di sospensione rate",
            "Sconto tasso con riqualificazione"
          ],
          "contro": [
            "Polizza vita necessaria per sconto",
            "Spese accessorie fisse",
            "Limiti per ristrutturazione"
          ]
        }
      }
      
]