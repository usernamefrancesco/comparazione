import { Mutuo } from "@/lib/interface"

const profilo = {
    nome: 'Credit Agricole',
    img: 'https://upload.wikimedia.org/wikipedia/it/b/b7/Cr%C3%A9dit_Agricole_logo.svg'
}

export const mutui80giu: Mutuo[] = [

  {
    "id": "mutuo-ca-greenback",
    "banca": profilo.nome,
    "immagineBanca": profilo.img,
    "nomeProdotto": "Mutuo Crédit Agricole Greenback",
  
    "importoMutuo": 160000,
    "durataAnni": 30,
    "rataMensile": 650.74,
    "rataTotale": 650.74 * 12 * 30,
    "tassoScelto": 2.65,
    "taeg": 2.805,
    "tipiTasso": "Fisso",
    "dataScadenzaOfferta": "2025-12-31",
  
    "importoInfo": {
      "importoMax": 500000,
      "importoMin": 50000
    },
  
    "soloClassiAB": true,
    "soloClassiLista": ["A", "B"],
  
    "consap": false,
    "irs": false,
    "isee": false,
  
    "spesePerizia": {
      "importo": 0,
      "condizioni": "Azzerate in caso di stipula. Addebitate solo in caso di rinuncia o mancata perfezione del mutuo.",
      "maxImporto": 300
    },
  
    "speseIstruttoria": {
      "percentualeSuImporto": false,
      "percentualeApplicata": 0,
      "importo": 0,
      "promozione": "Istruttoria gratuita per immobili in classe A o B.",
      "attiva": true,
      "importoMax": 1000,
      "importoMin": 0,
      "ltvImporto": false,
      "importoLtv": []
    },
  
    "impostaSostitutiva": {
      "promozione": true,
      "importo": 0.0025
    },
  
    "incassoRata": {
      "esiste": true,
      "importo": 1.5
    },
  
    "costoGestionePratica": {
      "esiste": true,
      "importo": 4.5
    },
  
    "altriTipiSpese": {
      "annuali": true,
      "importo": 3.85
    },
  
    "totaleDaRimborsare": 235902.7,
    "totaliCostiExtra": (1.5 + 4.5) * 12 * 30 + 3.85 * 30,
  
    "assicurazioniObbligatorie": {
      "assicurazioneCasa": true,
      "assicurazioneVita": true,
      "assicurazioneCasaMensile": false,
      "assicurazioneVitaMensile": true,
      "percentualePremioVita": 0.002,
      "costoStimatoCasa": 24.56,
      "costoStimatoVita": 32 * 12
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
      "00.00-50.00": {
        "10": 2.68,
        "15": 2.75,
        "20": 2.65,
        "25": 2.65,
        "30": 2.65
      },
      "50.01-60.00": {
        "10": 2.68,
        "15": 2.75,
        "20": 2.65,
        "25": 2.65,
        "30": 2.65
      },
      "60.01-70.00": {
        "10": 2.68,
        "15": 2.75,
        "20": 2.65,
        "25": 2.65,
        "30": 2.65
      },
      "70.01-80.00": {
        "10": 2.68,
        "15": 2.77,
        "20": 2.65,
        "25": 2.65,
        "30": 2.65
      }
    },
  
    "tipiDurata": [10, 15, 20, 25, 30],
  
    "scontisticheGenerali": {
      "esistono": true,
      "listaSconti": [
        {
          "causaleSconti": "Sconto 0,50% sul tasso per sottoscrizione polizza CPI Vita CACI o equivalente",
          "percentualeSconto": 0.5
        },
        {
          "causaleSconti": "Sconto 0,10% sul tasso in caso di miglioramento di almeno 2 classi energetiche o riduzione del 30% IPE",
          "percentualeSconto": 0.1
        },
        {
          "causaleSconti": "Sconto sulla rata mensile (da 1€ a 37€) in caso di adesione a prodotti promozionali Crédit Agricole",
          "percentualeSconto": 0
        }
      ]
    },
  
    "proMutuo": [
      {
        "titolo": "Tasso Fisso Competitivo",
        "descrizione": "Tasso fisso a partire da 2,65% per LTV ≤80% e sottoscrizione CPI, tra i più bassi del mercato."
      },
      {
        "titolo": "Ampie Opzioni di Flessibilità",
        "descrizione": "Include numerose opzioni come sospensione rate, salto rata e modifica durata mutuo."
      },
      {
        "titolo": "Sconti Energetici e Promozionali",
        "descrizione": "Sconti sul tasso in caso di riqualificazione energetica e premi in caso di sottoscrizione prodotti bancari."
      }
    ],
  
    "controMutuo": [
      {
        "titolo": "Obbligo Indiretto di Assicurazione Vita",
        "descrizione": "La sottoscrizione della polizza CPI non è obbligatoria, ma senza di essa il tasso è sensibilmente più alto (+0,50%)."
      },
      {
        "titolo": "Limitazione per Classi Energetiche",
        "descrizione": "Riservato esclusivamente a immobili in classe A o B, escludendo buona parte del parco immobiliare esistente."
      },
      {
        "titolo": "Costi Nascosti su Servizi Accessori",
        "descrizione": "Spese periodiche e di rendicontazione cartacea possono sommarsi nel tempo, incidendo sul TAEG effettivo."
      }
    ],
  
    "praticaScore": {
      "pro": [
        "Flessibilità elevata nella gestione del mutuo",
        "Tasso competitivo in presenza di CPI",
        "Possibilità di convertire il tasso fino a 4 volte con l'Opzione Flexi"
      ],
      "contro": [
        "Dipendenza da assicurazione per ottenere tasso migliore",
        "Accessibile solo a immobili in classe A o B",
        "Costi accessori annuali che incidono sul TAEG finale"
      ]
    }
  }
  
      


      // 2bank
      
]