import { Mutuo } from "@/lib/interface";


const profilo=  {
    nome: 'Banca Sella',
    img: 'https://www.mutuisupermarket.it/static/ec2f18bb23f1f226c1f5764b61390c69/sella-1.svg'
}

export const Sella80su: Mutuo[] = [
    {
        "id": "mutuoSella100-1",
        "banca": profilo.nome,
        "immagineBanca": profilo.img,
        "nomeProdotto": "Mutuo Giovani Consap Tasso Fisso",
      
        "importoMutuo": 180000,
        "durataAnni": 25,
        "rataMensile": 859.21,
        "rataTotale": 257763,
        "tassoScelto": 3.10,
        "taeg": 3.21,
        "tipiTasso": "Fisso",
        "dataScadenzaOfferta": null,
      
        "importoInfo": {
          "importoMax": 250000,
          "importoMin": 50000
        },
      
        "soloClassiAB": false,
        "soloClassiLista": [],
      
        "consap": true,
        "irs": false,
        "isee": true,
      
        "spesePerizia": {
          "importo": 200,
          "condizioni": "Costo indicativo, a carico del cliente e soggetto a variazioni secondo la valutazione del tecnico incaricato dalla banca",
          "maxImporto": 400
        },
      
        "speseIstruttoria": {
          "percentualeSuImporto": false,
          "percentualeApplicata": 0,
          "importo": 0,
          "promozione": "Istruttoria gratuita per tutta la durata dell'iniziativa",
          "attiva": true,
          "importoMax": 0,
          "importoMin": 0,
          ltvImporto: false,
          importoLtv: []

        },
      
        "impostaSostitutiva": {
          "promozione": true,
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
          "annuali": false,
          "importo": 0
        },
      
        "totaleDaRimborsare": 257763,
        "totaliCostiExtra": 658.7,
      
        "assicurazioniObbligatorie": {
          "assicurazioneCasa": true,
          "assicurazioneVita": false,
          "assicurazioneCasaMensile": false,
          "assicurazioneVitaMensile": false,
          "percentualePremioVita": 0,
          "costoStimatoCasa": 350,
          "costoStimatoVita": 0
        },
      
        "ltvMutuo": 100.0,
      
        "eta": {
          "minima": 18,
          "massima": 35,
          "maxUnder36": true
        },
      
        "score": 87,
        "rrrMax": 35,
      
        "tassiPerLTV": {
            "00.00-80.00": {
            "10": 3.10,
            "15": 3.10,
            "20": 3.10,
            "25": 3.10,
            "30": 3.10
          },
            "80.01-95.00": {
            "10": 3.10,
            "15": 3.10,
            "20": 3.10,
            "25": 3.10,
            "30": 3.10
          },
          "95.01-100": {
            "10": 3.10,
            "15": 3.10,
            "20": 3.10,
            "25": 3.10,
            "30": 3.10
          }
        },
      
        "tipiDurata": [10, 15, 20, 25, 30],
      
        "scontisticheGenerali": {
          "esistono": false,
          "listaSconti": []
        },
      
        "proMutuo": [
          {
            "titolo": "Accessibilità per i giovani",
            "descrizione": "Il prodotto è dedicato a giovani under 36, favorendo l'accesso alla prima casa anche senza anticipo iniziale."
          },
          {
            "titolo": "Istruttoria gratuita",
            "descrizione": "Non sono previste spese di istruttoria, riducendo i costi iniziali."
          },
          {
            "titolo": "Copertura 100% con garanzia Consap",
            "descrizione": "Consente il finanziamento dell'intero valore dell'immobile grazie alla garanzia pubblica."
          }
        ],
      
        "controMutuo": [
          {
            "titolo": "Obbligo ISEE sotto soglia",
            "descrizione": "È necessario avere un ISEE inferiore a 40.000 € per accedere all'offerta."
          },
          {
            "titolo": "Tasso fisso non beneficia di ribassi futuri",
            "descrizione": "Una volta fissato, il tasso rimane invariato, anche se i tassi di mercato dovessero scendere."
          },
          {
            "titolo": "Perizia a carico del cliente",
            "descrizione": "Il costo della perizia, seppur indicativo, non è coperto dalla banca."
          }
        ],
      
        "praticaScore": {
          "pro": [
            "Accesso a giovani con basso capitale iniziale",
            "Copertura al 100% tramite fondo pubblico",
            "Durate fino a 30 anni"
          ],
          "contro": [
            "Vincolo su ISEE per ottenere condizioni agevolate",
            "Non adatto a chi cerca flessibilità sui tassi",
            "Costi extra di perizia e gestione rata"
          ]
        }
      }
      

]