import { listaMutui } from "@/action/listamutui.action";
import { Mutuo } from "@/lib/interface";

const profilo = {
    nome: "Intesa San Paolo",
    img: "https://www.mutuisupermarket.it/static/63ad502a71a1a9006a0d700a7e09b282/Intesa_Sanpaolo-1.svg",
  };
  


 export  const mutui80giu: Mutuo[] = [
    
    {
        "id": "intesa80-1",
        "banca":profilo.nome,
        "immagineBanca": profilo.img,
        "nomeProdotto": "Mutuo Domus Green Giovani",
      
        "importoMutuo": 250000,
        "durataAnni": 25,
        "rataMensile": 1200,
        "rataTotale": 360000,
        "tassoScelto": 2.54,
        "taeg": 2.75,
        "tipiTasso": "Fisso",
        "dataScadenzaOfferta": "2025-07-31",
      
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
          "importo": 320,
          "condizioni": "Costo per perizia fino a 300.000 € di mutuo",
          "maxImporto": 320
        },
      
        "speseIstruttoria": {
          "percentualeSuImporto": false,
          "percentualeApplicata": 0,
          ltvImporto: false,
      importoLtv: [],
          "importo": 0,
          "promozione": "Azzeramento spese istruttoria per stipule del mese in corso",
          "attiva": true,
          "importoMax": 0,
          "importoMin": 0
        },
      
        "impostaSostitutiva": {
          "promozione": true,
          "importo": 625
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
      
        "totaleDaRimborsare": 360000,
        "totaliCostiExtra": 995,
      
        "assicurazioniObbligatorie": {
          "assicurazioneCasa": true,
          "assicurazioneVita": false,
          "assicurazioneCasaMensile": false,
          "assicurazioneVitaMensile": false,
          "percentualePremioVita": 0,
          "costoStimatoCasa": 25,
          "costoStimatoVita": 0
        },
      
        "ltvMutuo": 80,
      
        "eta": {
          "minima": 18,
          "massima": 35,
          "maxUnder36": true
        },
      
        "score": 78,
        "rrrMax": 35,
      
        "tassiPerLTV": {
          "00.00-80.00": {
            "10": 2.48,
            "15": 2.52,
            "20": 2.53,
            "25": 2.54,
            "30": 2.54
          }
        },
      
        "tipiDurata": [10, 15, 20, 25, 30],
      
        "scontisticheGenerali": {
          "esistono": true,
          "listaSconti": [
            {
              "causaleSconti": "Classe A o superiore",
              "percentualeSconto": 0.10
            }
          ]
        },
      
        "proMutuo": [
          {
            "titolo": "Tasso fisso promozionale competitivo",
            "descrizione": "Il mutuo offre tassi fissi inferiori rispetto al mercato per la fascia under 36, permettendo una pianificazione finanziaria sicura e stabile."
          },
          {
            "titolo": "Preammortamento fino a 10 anni",
            "descrizione": "Possibilità di iniziare con un periodo di soli interessi per agevolare la gestione finanziaria iniziale."
          }
        ],
      
        "controMutuo": [
          {
            "titolo": "Restrizione sull’età",
            "descrizione": "L’offerta è riservata esclusivamente ai giovani under 36, escludendo un’ampia fascia di potenziali clienti."
          },
          {
            "titolo": "Obbligo di polizza incendio",
            "descrizione": "La polizza incendio è obbligatoria, limitando la libertà del cliente nella scelta dell’assicurazione."
          }
        ],
      
        "praticaScore": {
          "pro": [
            "Tasso competitivo per giovani",
            "Preammortamento flessibile",
            "Spese istruttoria azzerate"
          ],
          "contro": [
            "Vincolo classe energetica immobile",
            "Obbligo polizza incendio",
            "Limiti di età stringenti"
          ]
        }
      },

      // 2bank
      {
        "id": "intesa80-2",
        "banca": profilo.nome,
        "immagineBanca": profilo.img,
        "nomeProdotto": "Mutuo Domus Giovani - Tasso Fisso",
      
        "importoMutuo": 200000,
        "durataAnni": 25,
        "rataMensile": 954.83,
        "rataTotale": 286449,
      
        "tassoScelto": 3.09,
        "taeg": 3.25,
        "tipiTasso": "Fisso",
        "dataScadenzaOfferta": "2025-06-30",
      
        "importoInfo": {
          "importoMax": 1000000,
          "importoMin": 30000
        },
      
        "soloClassiAB": false,
        "soloClassiLista": [],
      
        "consap": false,
        "irs": false,
        "isee": false,
      
        "spesePerizia": {
          "importo": 500,
          "condizioni": "Costo perizia fino a 500.000 €, come da fasce indicate. Include sopralluogo tecnico e relazione.",
          "maxImporto": 890
        },
      
        "speseIstruttoria": {
          "percentualeSuImporto": false,
          "percentualeApplicata": 0,
          "importo": 1050,
          "promozione": "50% di sconto sulle spese di istruttoria per domande presentate nel mese di Giugno",
          "attiva": true,
          "importoMax": 1050,
          "importoMin": 750,
          "ltvImporto": true,
          "importoLtv": [
            { "ltv": 50.00, "importo": 750 , percentualeApplicata: 0,importoMax: 0 , importoMin:0},
            { "ltv": 70.00, "importo": 950 , percentualeApplicata: 0,importoMax: 0 , importoMin:0},
            { "ltv": 80.00, "importo": 1050 , percentualeApplicata: 0,importoMax: 0 , importoMin:0}
          ]
        },
      
        "impostaSostitutiva": {
          "promozione": true,
          "importo": 500
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
          "importo": 50
        },
      
        "totaleDaRimborsare": 286449,
        "totaliCostiExtra": 1600,
      
        "assicurazioniObbligatorie": {
          "assicurazioneCasa": true,
          "assicurazioneVita": false,
          "assicurazioneCasaMensile": false,
          "assicurazioneVitaMensile": false,
          "percentualePremioVita": 0,
          "costoStimatoCasa": 450,
          "costoStimatoVita": 0
        },
      
        "ltvMutuo": 80.0,
      
        "eta": {
          "minima": 18,
          "massima": 66,
          "maxUnder36": true
        },
      
        "score": 87,
        "rrrMax": 40,
      
        "tassiPerLTV": {
          "00.00-50.00": {
            "10": 2.98,
            "15": 3.02,
            "20": 3.03,
            "25": 3.04,
            "30": 3.04
          },
          "50.01-70.00": {
            "10": 3.03,
            "15": 3.07,
            "20": 3.08,
            "25": 3.09,
            "30": 3.09
          },
          "70.01-80.00": {
            "10": 3.08,
            "15": 3.08,
            "20": 3.08,
            "25": 3.09,
            "30": 3.09
          }
        },
      
        "tipiDurata": [10, 15, 20, 25, 30],
      
        "scontisticheGenerali": {
          "esistono": false,
          "listaSconti": []
        },
      
        "proMutuo": [
          {
            "titolo": "Tassi agevolati per Under 36",
            "descrizione": "Condizioni promozionali dedicate ai giovani fino a 36 anni non compiuti con finalità prima casa."
          },
          {
            "titolo": "Possibilità di preammortamento fino a 10 anni",
            "descrizione": "Flessibilità nella fase iniziale del piano di rimborso, anche con possibilità di interrompere anticipatamente il preammortamento."
          },
          {
            "titolo": "Sconto sulle spese di istruttoria",
            "descrizione": "Per richieste nel mese corrente è previsto uno sconto del 50% sulle spese di istruttoria."
          },
          {
            "titolo": "Ampia personalizzazione del piano di ammortamento",
            "descrizione": "Disponibile il piano Base Light, con opzioni di flessibilità adattabili alle esigenze del cliente."
          }
        ],
      
        "controMutuo": [
          {
            "titolo": "Importo massimo vincolato per lavoratori atipici",
            "descrizione": "In caso di contratti atipici, l'importo massimo erogabile è limitato a 400.000 euro."
          },
          {
            "titolo": "Assicurazione incendio obbligatoria solo se stipulata con la banca",
            "descrizione": "La polizza deve essere vincolata alla banca o stipulata tramite i canali indicati, limitando la libertà di scelta."
          },
          {
            "titolo": "Previsione di spese perizia elevate",
            "descrizione": "Le spese di perizia possono arrivare fino a 890 €, impattando i costi iniziali."
          },
          {
            "titolo": "LTV massimo limitato all’80%",
            "descrizione": "Non consente il finanziamento oltre l’80% del valore immobile, riducendo l’accessibilità per chi ha bassa liquidità iniziale."
          }
        ],
      
        "praticaScore": {
          "pro": [
            "Condizioni dedicate agli under 36",
            "Sconto sulle spese di istruttoria",
            "Piano Base Light flessibile",
            "Tasso fisso garantito"
          ],
          "contro": [
            "LTV massimo 80%",
            "Costi perizia elevati in alcune fasce",
            "Vincolo assicurativo incendio con banca",
            "Importo limitato per lavoratori atipici"
          ]
        }
      },
      {
        "id": "mutuo-green-superflash",
        "banca": profilo.nome,
        "immagineBanca": profilo.img,
        "nomeProdotto": "Mutuo Domus Green Offerta Superflash",
      
        "importoMutuo": 180000,
        "durataAnni": 25,
        "rataMensile": 816.87,
        "rataTotale": 245061,
        "tassoScelto": 2.59,
        "taeg": 2.71,
        "tipiTasso": "Fisso",
        "dataScadenzaOfferta": null,
      
        "importoInfo": {
          "importoMax": 400000,
          "importoMin": 30000
        },
      
        "soloClassiAB": false,
        "soloClassiLista": [],
      
        "consap": true,
        "irs": false,
        "isee": true,
      
        "spesePerizia": {
          "importo": 320,
          "condizioni": "Recupero costi perizia effettuata da tecnico incaricato dalla banca",
          "maxImporto": 320
        },
      
        "speseIstruttoria": {
          "percentualeSuImporto": false,
          "percentualeApplicata": 0,
          "importo": 0,
          "promozione": "Istruttoria gratuita con Offerta Superflash",
          "attiva": true,
          "importoMax": 0,
          "importoMin": 0,
          "ltvImporto": false,
          "importoLtv": []
        },
      
        "impostaSostitutiva": {
          "promozione": false,
          "importo": 350
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
      
        "totaleDaRimborsare": 245411,
        "totaliCostiExtra": 670.05,
      
        "assicurazioniObbligatorie": {
          "assicurazioneCasa": true,
          "assicurazioneVita": false,
          "assicurazioneCasaMensile": false,
          "assicurazioneVitaMensile": false,
          "percentualePremioVita": 0,
          "costoStimatoCasa": 652.05,
          "costoStimatoVita": 0
        },
      
        "ltvMutuo": 90,
      
        "eta": {
          "minima": 18,
          "massima": 75,
          "maxUnder36": true
        },
      
        "score": 88,
        "rrrMax": 35,
      
        "tassiPerLTV": {
          "00.00-50.00": {
            "10": 2.48,
            "15": 2.52,
            "20": 2.53,
            "30": 2.54,
            "35": 2.84,
            "40": 2.79
          },
          "50.01-70.00": {
            "10": 2.53,
            "15": 2.57,
            "20": 2.58,
            "30": 2.59,
            "35": 2.89,
            "40": 2.84
          },
          "70.01-80.00": {
            "20": 2.58,
            "30": 2.59,
            "35": 2.89,
            "40": 2.84
          },
          "80.01-95.00": {
            "20": 3.03,
            "30": 3.04,
            "35": 3.69,
            "40": 3.64
          },
          "95.01-100": {
            "20": 3.63,
            "30": 3.64,
            "35": 3.69,
            "40": 3.64
          }
        },
      
        "tipiDurata": [10, 15, 20, 25, 30, 35, 40],
      
        "scontisticheGenerali": {
          "esistono": true,
          "listaSconti": [
            {
              "causaleSconti": "Sconto su spese ricorrenti per promozione Offerta Superflash",
              "percentualeSconto": 100
            },
            {
              "causaleSconti": "Istruttoria gratuita con Offerta Superflash",
              "percentualeSconto": 100
            }
          ]
        },
      
        "proMutuo": [
          {
            "titolo": "Finanziamento fino al 100%",
            "descrizione": "Copertura fino al 100% del valore immobile per acquisto prima casa"
          },
          {
            "titolo": "Tasso Fisso competitivo",
            "descrizione": "Tasso fisso a partire dal 2,48% anche su LTV elevati"
          },
          {
            "titolo": "Opzioni flessibilità gratuite",
            "descrizione": "Include gratuitamente sospensione rate e flessibilità della durata"
          },
          {
            "titolo": "Nessun costo ricorrente",
            "descrizione": "Zero spese ricorrenti grazie alla promozione Offerta Superflash"
          }
        ],
      
        "controMutuo": [
          {
            "titolo": "Erogazione lenta",
            "descrizione": "Tempi medi di erogazione molto lunghi: fino a 88 giorni"
          },
          {
            "titolo": "Assicurazione obbligatoria vincolata",
            "descrizione": "Polizza incendio obbligatoria vincolata alla banca, con possibili costi elevati"
          },
          {
            "titolo": "Limiti d’età restrittivi",
            "descrizione": "Riservato esclusivamente agli under 36 e con età massima 75 anni alla scadenza"
          },
          {
            "titolo": "Vincoli per offerta green",
            "descrizione": "Requisiti stringenti su efficienza energetica per accedere alle condizioni agevolate"
          }
        ],
      
        "praticaScore": {
          "pro": [
            "Fino al 100% LTV su prima casa",
            "Zero spese istruttoria e gestione",
            "Durata flessibile fino a 40 anni"
          ],
          "contro": [
            "Tempi di delibera lunghi",
            "Offerta riservata a soggetti con ISEE < 40.000 €",
            "Tasso vantaggioso solo su immobili con alte classi energetiche"
          ]
        }
      }
      
      
      

  ]

