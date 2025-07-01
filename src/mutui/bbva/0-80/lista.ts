import { Mutuo } from "@/lib/interface";

const profilo = {
    nome: 'BBVA',
    img: 'https://img.gruppomol.it/mutuionline/loghi_high_density/362.svg'
}
export const bbva80giu: Mutuo[] =[
  {
    "id": "bbva-fisso-prima-seconda-casa",
    "banca": profilo.nome,
    "immagineBanca": profilo.img,
    "nomeProdotto": "Mutuo Tasso Fisso Prima e Seconda Casa BBVA",
  
    "importoMutuo": 200000,
    "durataAnni": 25,
    "rataMensile": 927.00,
    "rataTotale": 278100.00,
    "tassoScelto": 2.85,
    "taeg": 2.95,
    "tipiTasso": "Fisso",
    "dataScadenzaOfferta": null,
  
    "importoInfo": {
      "importoMax": 1000000,
      "importoMin": 50000
    },
  
    "soloClassiAB": false,
    "soloClassiLista": [],
  
    "consap": false,
    "irs": false,
    "isee": false,
  
    "spesePerizia": {
      "importo": 200,
      "condizioni": "Gratuita se l'immobile è in classe energetica A o B con APE conforme e valido",
      "maxImporto": 200
    },
  
    "speseIstruttoria": {
      "percentualeSuImporto": true,
      "percentualeApplicata": 0.0015,
      "importo": 300,
      "promozione": "Istruttoria agevolata con tetto massimo di 350€",
      "attiva": true,
      "importoMax": 350,
      "importoMin": 0,
      "ltvImporto": false,
      "importoLtv": []
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
      "annuali": false,
      "importo": 0
    },
  
    "totaleDaRimborsare": 278100.00,
    "totaliCostiExtra": 1000,
  
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
      "massima": 75,
      "maxUnder36": false
    },
  
    "score": 86,
    "rrrMax": 35,
  
    "tassiPerLTV": {
      "00.00-80.00": {
        "10": 2.65,
        "15": 2.75,
        "20": 2.75,
        "25": 2.85,
        "30": 2.85
      }
    },
  
    "tipiDurata": [10, 15, 20, 25, 30],
  
    "scontisticheGenerali": {
      "esistono": true,
      "listaSconti": [
        {
          "causaleSconti": "Sconto sul TAN di 0,05% per caricamento completo della documentazione entro 7 giorni lavorativi",
          "percentualeSconto": 0.05
        },
        {
          "causaleSconti": "Riduzione del tasso di 0,10% se rata domicilia e accrediti mensili ≥ 800€ su conto BBVA",
          "percentualeSconto": 0.10
        },
        {
          "causaleSconti": "Spese di perizia azzerate per immobili in classe energetica A o B con APE valido",
          "percentualeSconto": 100
        }
      ]
    },
  
    "proMutuo": [
      {
        "titolo": "Tasso fisso competitivo fino a 30 anni",
        "descrizione": "Il mutuo offre tassi molto competitivi con durata fino a 30 anni anche per LTV all’80%"
      },
      {
        "titolo": "Agevolazioni per immobili ad alta efficienza",
        "descrizione": "Sconto sulle spese di perizia per immobili in classe A o B, incentivando la sostenibilità"
      },
      {
        "titolo": "Premialità per clienti attivi su conto BBVA",
        "descrizione": "Riduzione del tasso di interesse mensile per chi accredita almeno 800€ e domicilia le rate"
      }
    ],
  
    "controMutuo": [
      {
        "titolo": "Non adatto per LTV superiori all’80%",
        "descrizione": "Il mutuo non copre oltre l’80% per prima casa e 70% per seconda casa"
      },
      {
        "titolo": "Assicurazione incendio obbligatoria",
        "descrizione": "Obbligo di sottoscrivere o dimostrare polizza idonea, con costi non trascurabili"
      },
      {
        "titolo": "Età massima limitante",
        "descrizione": "Il mutuo deve concludersi entro il 75º anno di età del richiedente"
      }
    ],
  
    "praticaScore": {
      "pro": [
        "Condizioni chiare e trasparenti su tassi e spese",
        "Possibilità di ottenere sconti concreti con comportamenti virtuosi",
        "Ampio importo massimo fino a 1.000.000€"
      ],
      "contro": [
        "L’istruttoria varia con l’importo e può raggiungere 350€",
        "Sconto su TAN legato a tempistiche stringenti e burocrazia digitale",
        "Riduzione tasso mensile soggetta a condizioni bancarie specifiche"
      ]
    }
  }
  
      
]