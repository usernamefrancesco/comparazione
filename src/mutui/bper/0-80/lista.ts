import { Mutuo } from "@/lib/interface";
const profilo = {
    nome: 'BPER Banca',
    img: 'https://www.mutuisupermarket.it/static/e32d1504187496a3edb32ae3348162ce/Bper_Banca-1.svg'
}

export const bper80giu : Mutuo[] = [
    {
        "id": "mutuoBPER80-1 ",
        "banca": profilo.nome,
        "immagineBanca": profilo.img,
        "nomeProdotto": "Mutuo Casa Tasso Fisso",
      
        "importoMutuo": 180000,
        "durataAnni": 20,
        "rataMensile": 1000,
        "rataTotale": 240000,
        "tassoScelto": 3.1,
        "taeg": 3.45,
        "tipiTasso": "Fisso",
        "dataScadenzaOfferta": null,
      
        "importoInfo": {
          "importoMax": 500000,
          "importoMin": 50000
        },
      
        "soloClassiAB": false,
        "soloClassiLista": [],
      
        "consap": false,
        "irs": false,
        "isee": false,
      
        "spesePerizia": {
          "importo": 350,
          "condizioni": "Perizia unica o iniziale su immobile residenziale (max 2 unità con pertinenze).",
          "maxImporto": 350
        },
      
        "speseIstruttoria": {
          "percentualeSuImporto": true,
          "percentualeApplicata": 0.008,
          "importo": 1440,
          "promozione": "0.50% per immobili green (minimo €698)",
          "attiva": true,
          "importoMax": 0,
          "importoMin": 998,
          "ltvImporto": false,
          "importoLtv": []
        },
      
        "impostaSostitutiva": {
          "promozione": false,
          "importo": 450
        },
      
        "incassoRata": {
          "esiste": true,
          "importo": 2.75
        },
      
        "costoGestionePratica": {
          "esiste": false,
          "importo": 0
        },
      
        "altriTipiSpese": {
          "annuali": true,
          "importo": 0.90
        },
      
        "totaleDaRimborsare": 240000,
        "totaliCostiExtra": 1793.65,
      
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
          "massima": 78,
          "maxUnder36": false
        },
      
        "score": 78,
        "rrrMax": 35,
      
        "tassiPerLTV": {
          "00.00-50.00": {
            "10": 2.95,
            "15": 3.05,
            "20": 3.10,
            "25": 3.30,
            "30": 3.30
          },
          "50.01-70.00": {
            "10": 2.95,
            "15": 3.05,
            "20": 3.10,
            "25": 3.30,
            "30": 3.30
          },
          "70.01-80.00": {
            "10": 2.95,
            "15": 3.05,
            "20": 3.10,
            "25": 3.30,
            "30": 3.30
          }
        },
      
        "tipiDurata": [5, 10, 15, 20, 25, 30],
      
        "scontisticheGenerali": {
          "esistono": false,
          "listaSconti": [
            
          ]
        },
      
        "proMutuo": [
          {
            "titolo": "Tasso fisso garantito",
            "descrizione": "Il tasso resta invariato per tutta la durata del mutuo, offrendo stabilità nella rata."
          },
          {
            "titolo": "Sconto per immobili green",
            "descrizione": "Spese di istruttoria ridotte per chi acquista immobili ad alta efficienza energetica."
          },
          {
            "titolo": "Ampia gamma di finalità",
            "descrizione": "Finanzia acquisti, ristrutturazioni, costruzioni, aste e operazioni combinate."
          }
        ],
      
        "controMutuo": [
          {
            "titolo": "Perizia obbligatoria a pagamento",
            "descrizione": "È sempre prevista una perizia dell’immobile con costo a carico del richiedente."
          },
          {
            "titolo": "Nessuna flessibilità su penali accessorie",
            "descrizione": "Alcune spese come incasso rata e spese periodiche non sono azzerabili."
          },
          {
            "titolo": "LTV limitato all'80%",
            "descrizione": "Il mutuo non copre più dell'80% del valore, richiedendo un apporto personale significativo."
          }
        ],
      
        "praticaScore": {
          "pro": [
            "Tasso fisso stabile nel tempo",
            "Sconto green su istruttoria",
            "Durata fino a 30 anni disponibile"
          ],
          "contro": [
            "Spese accessorie non trascurabili",
            "Perizia obbligatoria",
            "Nessun tasso agevolato per ISEE basso"
          ]
        }
      }
      
]