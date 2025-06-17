import { Mutuo } from "@/lib/interface";

const profilo = {
    nome: 'BBVA',
    img: 'https://img.gruppomol.it/mutuionline/loghi_high_density/362.svg'
}
export const bbva80giu: Mutuo[] =[
    {
        "id": "BBVA80-1",
        "banca": profilo.nome,
        "immagineBanca": profilo.img,
        "nomeProdotto": "Mutuo BBVA Tasso Fisso",
      
        "importoMutuo": 180000,
        "durataAnni": 25,
        "rataMensile": 825.00,
        "rataTotale": 247500.00,
        "tassoScelto": 2.85,
        "taeg": 2.95,
        "tipiTasso": "Fisso",
        "dataScadenzaOfferta": "2025-06-30",
      
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
          "condizioni": "A carico della banca se l'immobile è in classe A o B e viene presentata APE valida.",
          "maxImporto": 200
        },
      
        "speseIstruttoria": {
          "percentualeSuImporto": true,
          "percentualeApplicata": 0.0015,
          ltvImporto: false,
      importoLtv: [],
          "importo": 270,
          "promozione": "Importo massimo fissato a 350€",
          "attiva": true,
          "importoMax": 350,
          "importoMin": 0
        },
      
        "impostaSostitutiva": {
          "promozione": true,
          "importo": 450.00
        },
      
        "incassoRata": {
          "esiste": false,
          "importo": 0.00
        },
      
        "costoGestionePratica": {
          "esiste": false,
          "importo": 0
        },
      
        "altriTipiSpese": {
          "annuali": false,
          "importo": 0
        },
      
        "totaleDaRimborsare": 247500.00,
        "totaliCostiExtra": 920.00,
      
        "assicurazioniObbligatorie": {
          "assicurazioneCasa": true,
          "assicurazioneVita": false,
          "assicurazioneCasaMensile": false,
          "assicurazioneVitaMensile": false,
          "percentualePremioVita": 0,
          "costoStimatoCasa": 450.00,
          "costoStimatoVita": 0
        },
      
        "ltvMutuo": 80.00,
      
        "eta": {
          "minima": 18,
          "massima": 65,
          "maxUnder36": false
        },
      
        "score": 8.4,
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
              "causaleSconti": "Classe A o B con presentazione APE",
              "percentualeSconto": 100
            }
          ]
        },
      
        "proMutuo": [
          {
            "titolo": "Sconto sul TAN per gestione digitale",
            "descrizione": "Sconto di 0,05% sul TAN se il cliente completa tutte le fasi online entro 7 giorni."
          },
          {
            "titolo": "Ulteriore sconto sul tasso con conto BBVA",
            "descrizione": "Riduzione dello 0,10% sul tasso se accreditati almeno 800€ sul conto BBVA nei 2 mesi precedenti alla rata."
          },
          {
            "titolo": "Spese azzerate per perizia in classe A o B",
            "descrizione": "Per gli immobili ad alta efficienza energetica, la banca si fa carico dei costi di perizia."
          }
        ],
      
        "controMutuo": [
          {
            "titolo": "Finanziamento limitato all'80% del valore immobile",
            "descrizione": "Il mutuo non copre più dell'80% del minor valore tra perizia e prezzo di acquisto, limitando la leva."
          },
          {
            "titolo": "Assicurazione incendio obbligatoria vincolata",
            "descrizione": "Sebbene si possa scegliere l’assicurazione sul mercato, l’assicurazione è comunque obbligatoria per l’erogazione."
          },
          {
            "titolo": "Tasso fisso non competitivo per durata breve",
            "descrizione": "Il tasso su 10 anni non beneficia di una differenziazione netta rispetto alle durate lunghe, riducendo la convenienza."
          }
        ],
      
        "praticaScore": {
          "pro": [
            "Semplicità gestione tramite piattaforma digitale",
            "Sconti automatici su TAN con conto BBVA",
            "Spese trasparenti e senza sorprese"
          ],
          "contro": [
            "Non adatto a chi cerca LTV superiore all'80%",
            "Vincoli per accedere a sconti TAN e perizia",
            "Assicurazione obbligatoria con requisiti specifici"
          ]
        }
      }
      
]