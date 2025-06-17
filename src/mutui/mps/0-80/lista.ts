import { Mutuo } from "@/lib/interface";

const profilo = {
    nome: 'Monte dei Paschi di Siena',
    img: 'https://img.gruppomol.it/mutuionline/loghi_high_density/5.svg'
}
export const mps80giu : Mutuo[] = [
    {
        "id": "MPS80-1",
        "banca": profilo.nome,
        "immagineBanca": profilo.img,
        "nomeProdotto": "Mutuo Prima Casa Giovani CONSAP Fisso",
      
        "importoMutuo": 180000,
        "durataAnni": 25,
        "rataMensile": 840,
        "rataTotale": 252000,
        "tassoScelto": 2.8,
        "taeg": 3.1,
        "tipiTasso": "Fisso",
        "dataScadenzaOfferta": null,
      
        "importoInfo": {
          "importoMax": 250000,
          "importoMin": 50000
        },
      
        "soloClassiAB": false,
        "soloClassiLista": [],
      
        "consap": true,
        "irs": true,
        "isee": true,
      
        "spesePerizia": {
          "importo": 300,
          "condizioni": "Valore indicativo di MutuiOnline. Il tecnico incaricato sarà scelto dalla banca, ma il costo è a carico del cliente.",
          "maxImporto": 300
        },
      
        "speseIstruttoria": {
          "percentualeSuImporto": true,
          ltvImporto: false,
      importoLtv: [],
          "percentualeApplicata": 0.005,
          "importo": 900,
          "promozione": "Spesa minima pari a 500 € anche se l’importo risultante dalla percentuale è inferiore.",
          "attiva": false,
          "importoMax": 0,
          "importoMin": 500
        },
      
        "impostaSostitutiva": {
          "promozione": true,
          "importo": 0
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
          "importo": 10
        },
      
        "totaleDaRimborsare": 252000,
        "totaliCostiExtra": 1210,
      
        "assicurazioniObbligatorie": {
          "assicurazioneCasa": true,
          "assicurazioneVita": false,
          "assicurazioneCasaMensile": false,
          "assicurazioneVitaMensile": false,
          "percentualePremioVita": 0,
          "costoStimatoCasa": 700,
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
            "10": 0.3,
            "15": 0.3,
            "20": 0.3,
            "25": 0.3,
            "30": 0.3
          }
        },
      
        "tipiDurata": [10, 15, 20, 25, 30],
      
        "scontisticheGenerali": {
          "esistono": false,
          "listaSconti": []
        },
      
        "proMutuo": [
          {
            "titolo": "Accesso prioritario per giovani e famiglie numerose",
            "descrizione": "Destinato a categorie agevolate con garanzia statale e condizioni dedicate."
          },
          {
            "titolo": "Esenzione dall'imposta sostitutiva",
            "descrizione": "Risparmio immediato sulle spese accessorie, se si rientra nei requisiti CONSAP."
          },
          {
            "titolo": "Tasso calmierato grazie a garanzia del Fondo",
            "descrizione": "Applicazione di spread ridotti per i beneficiari prioritari rispetto al TEGM."
          }
        ],
      
        "controMutuo": [
          {
            "titolo": "Spese di perizia interamente a carico del cliente",
            "descrizione": "Il costo della perizia non è scontato e può variare a seconda del tecnico incaricato."
          },
          {
            "titolo": "Obbligo di assicurazione incendio con banca",
            "descrizione": "Il premio è detratto dall’importo erogato, riducendo la liquidità disponibile al cliente."
          },
          {
            "titolo": "Accesso vincolato a ISEE e limiti di età",
            "descrizione": "Non accessibile a chi supera i limiti anagrafici o reddituali, nonostante buoni profili creditizi."
          }
        ],
      
        "praticaScore": {
          "pro": [
            "Esenzione imposta sostitutiva",
            "Condizioni calmierate con CONSAP",
            "Durate flessibili fino a 30 anni"
          ],
          "contro": [
            "Costi accessori non trascurabili",
            "Non disponibile per clienti over 36",
            "Assicurazione obbligatoria non negoziabile"
          ]
        }
      }
      
]