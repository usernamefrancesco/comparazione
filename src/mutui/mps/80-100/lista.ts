import { Mutuo } from "@/lib/interface";

const profilo = {
    nome: 'Monte dei Paschi di Siena',
    img: 'https://img.gruppomol.it/mutuionline/loghi_high_density/5.svg'
}
export const mps80su : Mutuo[] = [
    {
        "id": "mutuo-mps-prima-casa-under36",
        "banca": profilo.nome,
        "immagineBanca": profilo.img,
        "nomeProdotto": "Mutuo Prima Casa Giovani - MPS",
      
        "importoMutuo": 180000,
        "durataAnni": 25,
        "rataMensile": 850,
        "rataTotale": 255000,
        "tassoScelto": 3.1,
        "taeg": 3.45,
        "tipiTasso": "Fisso",
        "dataScadenzaOfferta": null,
      
        "importoInfo": {
          "importoMax": 250000,
          "importoMin": 40000
        },
      
        "soloClassiAB": false,
        "soloClassiLista": [],
      
        "consap": true,
        "irs": true,
        "isee": true,
      
        "spesePerizia": {
          "importo": 300,
          "condizioni": "Costo stimato da MutuiOnline, a carico cliente. Il perito è incaricato dalla banca.",
          "maxImporto": 300
        },
      
        "speseIstruttoria": {
          "percentualeSuImporto": true,
          "percentualeApplicata": 0.005,
          "importo": 900,
          "promozione": "Riduzione al 0,50% per LTV ≤ 80%",
          "attiva": true,
          "importoMax": 0,
          "importoMin": 500,
          "ltvImporto": true,
          "importoLtv": [
            {
              "ltv": 80,
              "importo": 0.005,
              "percentualeApplicata": 0.005,
              "importoMax": 0,
              "importoMin": 500
            },
            {
              "ltv": 100,
              "importo": 0.01,
              "percentualeApplicata": 0.01,
              "importoMax": 0,
              "importoMin": 500
            }
          ]
        },
      
        "impostaSostitutiva": {
          "promozione": true,
          "importo": 450
        },
      
        "incassoRata": {
          "esiste": true,
          "importo": 2.5
        },
      
        "costoGestionePratica": {
          "esiste": false,
          "importo": 0
        },
      
        "altriTipiSpese": {
          "annuali": false,
          "importo": 0
        },
      
        "totaleDaRimborsare": 255000,
        "totaliCostiExtra": 1652.5,
      
        "assicurazioniObbligatorie": {
          "assicurazioneCasa": true,
          "assicurazioneVita": false,
          "assicurazioneCasaMensile": false,
          "assicurazioneVitaMensile": false,
          "percentualePremioVita": 0,
          "costoStimatoCasa": 900,
          "costoStimatoVita": 0
        },
      
        "ltvMutuo": 90,
      
        "eta": {
          "minima": 18,
          "massima": 35,
          "maxUnder36": true
        },
      
        "score": 83,
        "rrrMax": 35,
      
        "tassiPerLTV": {
          "00.00-80.00": {
            "10": 0.6,
            "15": 0.6,
            "20": 0.6,
            "25": 0.6,
            "30": 0.6
          },
          "80.01-95.00": {
            "10": 0.6,
            "15": 0.6,
            "20": 0.6,
            "25": 0.6,
            "30": 0.6
          },
          "95.01-100": {
            "10": 0.6,
            "15": 0.6,
            "20": 0.6,
            "25": 0.6,
            "30": 0.6
          }
        },
      
        "tipiDurata": [10, 15, 20, 25, 30],
      
        "scontisticheGenerali": {
          "esistono": true,
          "listaSconti": [
            {
              "causaleSconti": "Sconto istruttoria per LTV ≤ 80%",
              "percentualeSconto": 50
            }
          ]
        },
      
        "proMutuo": [
          {
            "titolo": "Accessibilità per giovani",
            "descrizione": "Prodotto riservato a under36 o famiglie prioritarie con requisiti ISEE, rende il mutuo più accessibile anche con LTV fino al 100%."
          },
          {
            "titolo": "Tasso indicizzato IRS con spread contenuto",
            "descrizione": "Lo spread di soli 0,60% sopra IRS rende il tasso competitivo e facilmente comparabile."
          },
          {
            "titolo": "Polizza incendio integrabile direttamente nel mutuo",
            "descrizione": "Permette di pagare l'assicurazione con riduzione diretta sull'importo erogato, facilitando la gestione iniziale delle spese."
          }
        ],
      
        "controMutuo": [
          {
            "titolo": "Limiti di età e composizione familiare",
            "descrizione": "Accessibile solo a categorie ristrette (giovani, famiglie numerose o monogenitoriali), quindi non adatto a tutti."
          },
          {
            "titolo": "Tasso IRS variabile mensilmente",
            "descrizione": "Il tasso definitivo è legato al valore IRS del mese di stipula, creando incertezza fino alla firma."
          },
          {
            "titolo": "Obbligo perizia esterna a carico cliente",
            "descrizione": "La perizia non è gratuita e il costo può variare in base al perito incaricato."
          }
        ],
      
        "praticaScore": {
          "pro": [
            "Accesso con LTV > 80% grazie al Fondo CONSAP",
            "Istruttoria agevolata per LTV ≤ 80%",
            "Zero penali per estinzione anticipata"
          ],
          "contro": [
            "Età massima rigida alla scadenza del mutuo",
            "Costo perizia non negoziabile",
            "Tasso definito solo al momento della stipula"
          ]
        }
      }
      
]