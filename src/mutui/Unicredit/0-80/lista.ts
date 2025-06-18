import { Mutuo } from "@/lib/interface";

const profilo = {
    nome: 'Unicredit',
    img: 'https://img.gruppomol.it/mutuionline/loghi_high_density/81.svg'
}
export const unicredit80giu: Mutuo[] = [
    {
        "id": "unicredit-tasso-fisso-001",
        "banca": profilo.nome,
        "immagineBanca": profilo.img,
        "nomeProdotto": "Mutuo UniCredit Tasso Fisso",
      
        "importoMutuo": 180000,
        "durataAnni": 25,
        "rataMensile": 860,
        "rataTotale": 258000,
        "tassoScelto": 0.4,
        "taeg": 2.70,
        "tipiTasso": "Fisso",
        "dataScadenzaOfferta": null,
      
        "importoInfo": {
          "importoMax": 400000,
          "importoMin": 30000
        },
      
        "soloClassiAB": false,
        "soloClassiLista": [],
      
        "consap": false,
        "irs": true,
        "isee": false,
      
        "spesePerizia": {
          "importo": 350,
          "condizioni": "Costo fisso indipendentemente dall’importo richiesto, salvo sconti promozionali.",
          "maxImporto": 350
        },
      
        "speseIstruttoria": {
          "percentualeSuImporto": false,
          ltvImporto: false,
      importoLtv: [],
          "percentualeApplicata": 0,
          "importo": 1000,
          "promozione": "Sconto attivo per richieste entro 30 giorni dal preventivo MutuiOnline",
          "attiva": true,
          "importoMax": 0,
          "importoMin": 0
        },
      
        "impostaSostitutiva": {
          "promozione": false,
          "importo": 450
        },
      
        "incassoRata": {
          "esiste": true,
          "importo": 3
        },
      
        "costoGestionePratica": {
          "esiste": false,
          "importo": 0
        },
      
        "altriTipiSpese": {
          "annuali": false,
          "importo": 0
        },
      
        "totaleDaRimborsare": 258000,
        "totaliCostiExtra": 1833,
      
        "assicurazioniObbligatorie": {
          "assicurazioneCasa": false,
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
          "massima": 70,
          "maxUnder36": false
        },
      
        "score": 78,
        "rrrMax": 40,
      
        "tassiPerLTV": {
          "00.00-50.00": {
            "10": 0.4,
            "15": 0.4,
            "20": 0.4,
            "25": 0.4,
            "30": 0.4
          },
          "50.01-70.00": {
            "10": 0.4,
            "15": 0.4,
            "20": 0.4,
            "25": 0.4,
            "30": 0.4
          },
          "70.01-80.00": {
            "10": 0.4,
            "15": 0.4,
            "20": 0.4,
            "25": 0.4,
            "30": 0.4
          }
        },
      
        "tipiDurata": [5, 10, 15, 20, 25, 30],
      
        "scontisticheGenerali": {
          "esistono": false,
          "listaSconti": []
        },
      
        "proMutuo": [
          {
            "titolo": "Ampia flessibilità post-erogazione",
            "descrizione": "Servizi come Taglia Rata, Riduci Rata e Sposta Rata offrono grande adattabilità alle esigenze future del mutuatario."
          },
          {
            "titolo": "Tasso trasparente legato all’IRS",
            "descrizione": "Il tasso è composto da IRS + spread noto, rendendo più chiara la struttura del tasso fisso applicato."
          }
        ],
      
        "controMutuo": [
          {
            "titolo": "Spese istruttoria elevate",
            "descrizione": "Costo fisso di 1.000€ non proporzionato all’importo richiesto, potenzialmente penalizzante per importi medio-bassi."
          },
          {
            "titolo": "Assenza di vantaggi green",
            "descrizione": "Non sono previsti sconti legati all’efficienza energetica dell’immobile, a differenza di altri prodotti sul mercato."
          }
        ],
      
        "praticaScore": {
          "pro": ["Servizi flessibili post-erogazione", "Struttura tasso chiara", "Assenza penale estinzione anticipata"],
          "contro": ["Spese iniziali elevate", "Nessun incentivo per immobili efficienti"]
        }
      }
      
]