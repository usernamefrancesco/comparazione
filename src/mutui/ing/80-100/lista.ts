import { Mutuo } from "@/lib/interface";

const profilo ={
    nome: 'ING Bank',
    img: 'https://img.gruppomol.it/mutuionline/loghi_high_density/6.svg'
}

export const ing80su: Mutuo[] = [
    {
        "id": "mutuo-001",
        "banca": profilo.nome,
        "immagineBanca": profilo.img,
        "nomeProdotto": "Mutuo Arancio Acquisto",
      
        "importoMutuo": 180000,
        "durataAnni": 20,
        "rataMensile": 920,
        "rataTotale": 220800,
        "tassoScelto": 2.25,
        "taeg": 2.45,
        "tipiTasso": "Fisso",
        "dataScadenzaOfferta": "2025-08-06",
      
        "importoInfo": {
          "importoMax": 2000000,
          "importoMin": 50000
        },
      
        "soloClassiAB": false,
        "soloClassiLista": ["A", "B", "C"],
      
        "consap": false,
        "irs": true,
        "isee": false,
      
        "spesePerizia": {
          "importo": 300,
          "condizioni": "Esente per immobili in classe energetica B, A o superiore",
          "maxImporto": 300
        },
      
        "speseIstruttoria": {
          "percentualeSuImporto": false,
          ltvImporto: false,
      importoLtv: [],
          "percentualeApplicata": 0,
          "importo": 950,
          "promozione": "",
          "attiva": true,
          "importoMax": 950,
          "importoMin": 950
        },
      
        "impostaSostitutiva": {
          "promozione": true,
          "importo": 0.25
        },
      
        "incassoRata": {
          "esiste": true,
          "importo": 1.5
        },
      
        "costoGestionePratica": {
          "esiste": false,
          "importo": 0
        },
      
        "altriTipiSpese": {
          "annuali": true,
          "importo": 39
        },
      
        "totaleDaRimborsare": 220800,
        "totaliCostiExtra": 1320,
      
        "assicurazioniObbligatorie": {
          "assicurazioneCasa": true,
          "assicurazioneVita": false,
          "assicurazioneCasaMensile": false,
          "assicurazioneVitaMensile": false,
          "percentualePremioVita": 0,
          "costoStimatoCasa": 300,
          "costoStimatoVita": 0
        },
      
        "ltvMutuo": 95,
      
        "eta": {
          "minima": 18,
          "massima": 70,
          "maxUnder36": false
        },
      
        "score": 78,
        "rrrMax": 35,
      
        "tassiPerLTV": {
          "00.00-80.00": {
            "10": 1.35,
            "15": 1.45,
            "20": 1.55,
            "25": 1.45,
            "30": 1.55
          },
          "80.01-95.00": {
            "10": 2.05,
            "15": 2.15,
            "20": 2.25,
            "25": 2.15,
            "30": 2.25
          }
        },
      
        "tipiDurata": [10, 15, 20, 25, 30],
      
        "scontisticheGenerali": {
          "esistono": true,
          "listaSconti": [
            {
              "causaleSconti": "Classe B o superiore",
              "percentualeSconto": 0.20
            },
            
          ]
        },
      
        "proMutuo": [
          {
            "titolo": "Tasso fisso per tutta la durata",
            "descrizione": "La rata non cambia per tutta la durata del mutuo, garantendo stabilità finanziaria."
          },
          {
            "titolo": "Finanziabilità fino al 95%",
            "descrizione": "Elevata percentuale di finanziamento per l'acquisto della prima casa, favorendo l'accesso al credito."
          }
        ],
      
        "controMutuo": [
          {
            "titolo": "Spread più alto per LTV elevato",
            "descrizione": "Il tasso di interesse aumenta sensibilmente oltre l'80% di finanziamento, rendendo più costoso il mutuo."
          },
          {
            "titolo": "Spese fisse per perizia e istruttoria",
            "descrizione": "Sono previsti costi fissi anche in caso di importi bassi, che impattano sui mutui di piccola entità."
          }
        ],
      
        "praticaScore": {
          "pro": [
            "Offerta chiara e trasparente",
            "Riduzione tasso per immobili energetici efficienti",
            "Assenza di penali per estinzione anticipata"
          ],
          "contro": [
            "Richiesta di ipoteca di primo grado al 200% dell'importo",
            "Costi fissi sulle spese istruttoria e perizia",
            "Obbligo assicurazione incendio"
          ]
        }
      }
      
]