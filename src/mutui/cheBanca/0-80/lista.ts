import { Mutuo } from "@/lib/interface";


const profilo = {
    nome: 'CheBanca!',
    img: 'https://img.gruppomol.it/mutuionline/loghi_high_density/46.svg'
}

export const cheBanca780giu : Mutuo[]= [
    {
        "id": "chebanca-mutuofisso-giugno2025",
        "banca": profilo.nome,
        "immagineBanca": profilo.img,
        "nomeProdotto": "Mutuo Fisso Acquisto e Ristrutturazione",
        "importoMutuo": 180000,
        "durataAnni": 25,
        "rataMensile": 820,
        "rataTotale": 246000,
        "tassoScelto": 2.75,
        "taeg": 3.10,
        "tipiTasso": "Fisso",
        "dataScadenzaOfferta": "2025-06-30",
        "importoInfo": {
          "importoMax": 500000,
          "importoMin": 50000
        },
        "soloClassiAB": false,
        "soloClassiLista": [],
        "consap": false,
        "irs": true,
        "isee": false,
        "spesePerizia": {
          "importo": 300,
          "condizioni": "Trattenute dall’importo erogato. Da applicare per ogni immobile offerto in garanzia. Gratuita solo in caso di surroga.",
          "maxImporto": 300
        },
        "speseIstruttoria": {
          "percentualeSuImporto": true,
          "percentualeApplicata": 0.01,
          "importo": 1800,
          "promozione": "Azzerata per immobili in classe energetica A o B",
          "attiva": true,
          "importoMax": 3000,
          "importoMin": 1000,
          "ltvImporto": false,
          "importoLtv": []
        },
        "impostaSostitutiva": {
          "promozione": false,
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
          "importo": 50
        },
        "totaleDaRimborsare": 246000,
        "totaliCostiExtra": 2600,
        "assicurazioniObbligatorie": {
          "assicurazioneCasa": true,
          "assicurazioneVita": false,
          "assicurazioneCasaMensile": false,
          "assicurazioneVitaMensile": false,
          "percentualePremioVita": 0,
          "costoStimatoCasa": 300,
          "costoStimatoVita": 0
        },
        "ltvMutuo": 80,
        "eta": {
          "minima": 18,
          "massima": 70,
          "maxUnder36": false
        },
        "score": 87,
        "rrrMax": 35,
        "tassiPerLTV": {
          "00.00-50.00": {
            "10": 0.60,
            "15": 0.60,
            "20": 0.60,
            "25": 0.65,
            "30": 0.70
          },
          "50.01-60.00": {
            "10": 0.60,
            "15": 0.60,
            "20": 0.60,
            "25": 0.65,
            "30": 0.70
          },
          "60.01-80.00": {
            "10": 0.65,
            "15": 0.65,
            "20": 0.65,
            "25": 0.70,
            "30": 0.75
          }
        },
        "tipiDurata": [10, 15, 20, 25, 30],
        "scontisticheGenerali": {
          "esistono": true,
          "listaSconti": [
            {
              "causaleSconti": "Sconto spread 0.10% per mutui superiori a 250.000€",
              "percentualeSconto": 0.10
            },
            {
              "causaleSconti": "Istruttoria gratuita per immobili in classe A o B",
              "percentualeSconto": 100
            }
          ]
        },
        "proMutuo": [
          {
            "titolo": "Condizioni agevolate per immobili efficienti",
            "descrizione": "Zero spese di istruttoria per immobili in classe energetica A o B"
          },
          {
            "titolo": "Tasso fisso competitivo indicizzato all’Eurirs",
            "descrizione": "Tasso stabile per tutta la durata con spread competitivo a seconda dell’LTV"
          }
        ],
        "controMutuo": [
          {
            "titolo": "Gestione pratica con spese annuali",
            "descrizione": "Prevista una commissione annua di gestione da 50€"
          },
          {
            "titolo": "Spese perizia non rimborsabili",
            "descrizione": "300€ di perizia sempre dovuti salvo casi di surroga"
          }
        ],
        "praticaScore": {
          "pro": [
            "Agevolazioni su immobili energeticamente efficienti",
            "Spread decrescente con LTV più basso",
            "Istruttoria azzerata in promozione"
          ],
          "contro": [
            "Spese di gestione annuali presenti",
            "Perizia obbligatoria sempre a carico del cliente"
          ]
        }
      }
      
]