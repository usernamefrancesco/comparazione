import { listaMutui } from "@/action/listamutui.action";
import { Mutuo } from "@/lib/interface";

const profilo = {
    nome: "Intesa San Paolo",
    img: "https://www.mutuisupermarket.it/static/63ad502a71a1a9006a0d700a7e09b282/Intesa_Sanpaolo-1.svg",
  };
  


 export  const mutui80giu: Mutuo[] = [
    
  {
    "id": "mutuo-green-giovani-fisso-isp",
    "banca": profilo.nome,
    "immagineBanca": profilo.img,
    "nomeProdotto": "Mutuo Domus Green Giovani Tasso Fisso",
  
    "importoMutuo": 180000,
    "durataAnni": 25,
    "rataMensile": 818.42,
    "rataTotale": 245526,
    "tassoScelto": 2.61,
    "taeg": 2.75,
    "tipiTasso": "Fisso",
    "dataScadenzaOfferta": null,
  
    "importoInfo": {
      "importoMax": 400000,
      "importoMin": 30000
    },
  
    "soloClassiAB": true,
    "soloClassiLista": ["A", "B", "C"],
  
    "consap": false,
    "irs": false,
    "isee": false,
  
    "spesePerizia": {
      "importo": 500,
      "condizioni": "Spesa variabile in base all’importo del mutuo. Es. 320€ fino a 300k, 500€ fino a 500k.",
      "maxImporto": 890
    },
  
    "speseIstruttoria": {
      "percentualeSuImporto": false,
      "percentualeApplicata": 0,
      "importo": 0,
      "promozione": "Azzeramento spese d’istruttoria per stipule del mese in corso",
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
      "esiste": true,
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
  
    "totaleDaRimborsare": 245526,
    "totaliCostiExtra": 950,
  
    "assicurazioniObbligatorie": {
      "assicurazioneCasa": true,
      "assicurazioneVita": false,
      "assicurazioneCasaMensile": false,
      "assicurazioneVitaMensile": false,
      "percentualePremioVita": 0,
      "costoStimatoCasa": 550,
      "costoStimatoVita": 0
    },
  
    "ltvMutuo": 75.0,
  
    "eta": {
      "minima": 18,
      "massima": 76,
      "maxUnder36": true
    },
  
    "score": 85,
    "rrrMax": 35,
  
    "tassiPerLTV": {
      "00.00-50.00": {
        "10": 2.48,
        "15": 2.52,
        "20": 2.53,
        "25": 2.56,
        "30": 2.57
      },
      "50.01-70.00": {
        "10": 2.53,
        "15": 2.57,
        "20": 2.58,
        "25": 2.61,
        "30": 2.62
      },
      "70.01-80.00": {
        "10": 2.58,
        "15": 2.58,
        "20": 2.58,
        "25": 2.61,
        "30": 2.62
      }
    },
  
    "tipiDurata": [10, 15, 20, 25, 30],
  
    "scontisticheGenerali": {
      "esistono": true,
      "listaSconti": [
        {
          "causaleSconti": "Tasso promozionale riservato a immobili green in classe energetica A, B o C",
          "percentualeSconto": 0.3
        },
        {
          "causaleSconti": "Azzeramento spese incasso rata per under 36",
          "percentualeSconto": 100
        },
        {
          "causaleSconti": "Azzeramento spese istruttoria per richieste del mese corrente",
          "percentualeSconto": 100
        }
      ]
    },
  
    "proMutuo": [
      {
        "titolo": "Tasso promozionale per immobili green",
        "descrizione": "Accesso a un tasso d’interesse ribassato per immobili ad alta efficienza energetica, con certificazione APE."
      },
      {
        "titolo": "Preammortamento flessibile fino a 10 anni",
        "descrizione": "Possibilità di preammortamento fino a 10 anni con opzione di interruzione anticipata dopo il primo anno."
      },
      {
        "titolo": "Esenzione spese incasso rata e istruttoria",
        "descrizione": "Spese incasso rata e istruttoria azzerate per clienti under 36 nel mese corrente."
      }
    ],
  
    "controMutuo": [
      {
        "titolo": "Vincoli stringenti sulla classe energetica",
        "descrizione": "L’accesso all’offerta è riservato a immobili green con requisiti energetici specifici e documentazione APE valida."
      },
      {
        "titolo": "Esclusione mutuatari over 36",
        "descrizione": "L’offerta è accessibile solo a chi ha meno di 36 anni alla stipula, escludendo altri potenziali acquirenti."
      },
      {
        "titolo": "Copertura assicurativa obbligatoria",
        "descrizione": "Obbligo di attivare una polizza incendio, anche se con possibilità di scelta del fornitore, comporta un costo aggiuntivo."
      }
    ],
  
    "praticaScore": {
      "pro": [
        "Tasso fisso competitivo per immobili green",
        "Promozioni dedicate agli under 36",
        "Preammortamento fino a 10 anni con flessibilità"
      ],
      "contro": [
        "Requisiti energetici complessi e vincolanti",
        "Età limitata a meno di 36 anni",
        "Spese accessorie non totalmente azzerate (es. perizia, assicurazione)"
      ]
    }
  },
  

      // 2bank
      
      {
        "id": "mutuo-domus-giovani",
        "banca": profilo.nome,
        "immagineBanca": profilo.img,
        "nomeProdotto": "Mutuo Domus Giovani",
      
        "importoMutuo": 200000,
        "durataAnni": 25,
        "rataMensile": 950,
        "rataTotale": 285000,
        "tassoScelto": 3.11,
        "taeg": 3.25,
        "tipiTasso": "Fisso",
        "dataScadenzaOfferta": null,
      
        "importoInfo": {
          "importoMax": 400000,
          "importoMin": 30000
        },
      
        "soloClassiAB": false,
        "soloClassiLista": [],
      
        "consap": false,
        "irs": false,
        "isee": false,
      
        "spesePerizia": {
          "importo": 500,
          "condizioni": "Costo perizia fino a 500.000 € di mutuo richiesto",
          "maxImporto": 890
        },
      
        "speseIstruttoria": {
          "percentualeSuImporto": false,
          "percentualeApplicata": 0,
          "importo": 950,
          "promozione": "Sconto 50% su spese di istruttoria per richieste Mutuo Giovani sottoscritte a giugno",
          "attiva": true,
          "importoMax": 1050,
          "importoMin": 750,
          "ltvImporto": true,
          "importoLtv": [
            {
              "ltv": 50,
              "importo": 750,
              "percentualeApplicata": 0,
              "importoMax": 750,
              "importoMin": 750
            },
            {
              "ltv": 70,
              "importo": 950,
              "percentualeApplicata": 0,
              "importoMax": 950,
              "importoMin": 950
            },
            {
              "ltv": 80,
              "importo": 1050,
              "percentualeApplicata": 0,
              "importoMax": 1050,
              "importoMin": 1050
            }
          ]
        },
      
        "impostaSostitutiva": {
          "promozione": true,
          "importo": 500
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
          "annuali": true,
          "importo": 30
        },
      
        "totaleDaRimborsare": 285000,
        "totaliCostiExtra": 1480,
      
        "assicurazioniObbligatorie": {
          "assicurazioneCasa": false,
          "assicurazioneVita": false,
          "assicurazioneCasaMensile": false,
          "assicurazioneVitaMensile": false,
          "percentualePremioVita": 0,
          "costoStimatoCasa": 300,
          "costoStimatoVita": 0
        },
      
        "ltvMutuo": 75,
      
        "eta": {
          "minima": 18,
          "massima": 76,
          "maxUnder36": true
        },
      
        "score": 85,
        "rrrMax": 35,
      
        "tassiPerLTV": {
          "00.00-50.00": {
            "10": 2.98,
            "15": 3.02,
            "20": 3.03,
            "25": 3.06,
            "30": 3.07
          },
          "50.01-70.00": {
            "10": 3.03,
            "15": 3.07,
            "20": 3.08,
            "25": 3.11,
            "30": 3.12
          },
          "70.01-80.00": {
            "10": 3.08,
            "15": 3.08,
            "20": 3.08,
            "25": 3.11,
            "30": 3.12
          }
        },
      
        "tipiDurata": [10, 15, 20, 25, 30],
      
        "scontisticheGenerali": {
          "esistono": true,
          "listaSconti": [
            {
              "causaleSconti": "Sconto 50% spese istruttoria per richieste sottoscritte a giugno con finalità prima casa",
              "percentualeSconto": 50
            }
          ]
        },
      
        "proMutuo": [
          {
            "titolo": "Tassi promozionali riservati agli under 36",
            "descrizione": "Tassi fissi inferiori a quelli di mercato per clienti giovani con finalità prima casa"
          },
          {
            "titolo": "Possibilità di preammortamento fino a 10 anni",
            "descrizione": "Flessibilità nei primi anni per adattarsi a situazioni lavorative instabili o temporanee"
          },
          {
            "titolo": "Ampia modularità del piano di ammortamento",
            "descrizione": "Scelta tra piano base o light per ottimizzare la gestione finanziaria"
          }
        ],
      
        "controMutuo": [
          {
            "titolo": "Tassi non cumulabili con altre agevolazioni",
            "descrizione": "Non compatibile con altre forme di sconto o benefici statali"
          },
          {
            "titolo": "Assicurazione incendio obbligatoria vincolata",
            "descrizione": "La polizza deve essere vincolata alla banca anche se stipulata con terze compagnie"
          },
          {
            "titolo": "Sconto istruttoria solo in specifici mesi",
            "descrizione": "Le promozioni non sono sempre disponibili e possono variare mensilmente"
          }
        ],
      
        "praticaScore": {
          "pro": [
            "Tasso fisso promozionale inferiore al 3,1%",
            "Nessun costo per incasso rata",
            "Possibilità di preammortamento con flessibilità attivabile dopo 12 mesi"
          ],
          "contro": [
            "Spese perizia elevate per mutui oltre i 500.000 €",
            "Sconti limitati a specifiche finestre promozionali",
            "Assicurazione incendio obbligatoria anche se stipulata esternamente"
          ]
        }
      },

      
      
      
      
      

  ]

