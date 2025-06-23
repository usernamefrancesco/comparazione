"use client";
import React, { useState, useEffect, useCallback } from "react";

interface PopupState {
  isOpen: boolean;
  info: PopupInfo | null;
  position: { x: number; y: number } | null;
}

interface PopupInfo {
  title: string;
  content: string;
}

export const useScoreInfo = () => {
  const [popupStateScore, setPopupState] = useState<PopupState>({
    isOpen: false,
    info: null,
    position: null,
  });

  const [isMobileScore, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile(); // chiamata iniziale
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setPopupState({
        isOpen: false,
        info: null,
        position: null,
      });
    };

    window.addEventListener("scroll", handleScroll, true); // true = capture phase (meglio)

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, []);

  // Configurazione delle informazioni
  const infoConfig: PopupInfo[] = [
    {
      title: "Buona anzianità lavorativa",
      content: "Hai un lavoro che svolgi da diversi anni, e questo per le banche è un segnale positivo.|Dimostra stabilità e continuità nel reddito, due elementi importanti quando si valuta se concedere un mutuo.|Più a lungo hai lo stesso lavoro o lavori nello stesso settore, più la banca si fida che riuscirai a pagare le rate senza problemi.|Quindi, la tua esperienza lavorativa gioca a tuo favore nella valutazione della pratica.",
    },
    {
        title: "Percentuale bassa di mutuo",
        content: 'Stai chiedendo alla banca una somma che, rispetto al valore della casa, è piuttosto contenuta.|Questo vuol dire che tu metti una parte importante dei soldi di tasca tua e chiedi alla banca solo una parte del totale.|Per la banca è un segnale positivo, perché riduce il rischio di perdita nel caso qualcosa andasse storto.|Una percentuale bassa di mutuo aumenta quindi le possibilità che la tua richiesta venga approvata più facilmente.'
    },
    {
        title: 'Percentuale alta di mutuo',
        content: 
        "Stai chiedendo alla banca una somma che copre quasi tutto il valore della casa, o comunque una parte molto grande.|Questo per la banca rappresenta un rischio maggiore, perché in caso di problemi avrebbe meno garanzie di recuperare l’intero importo prestato.|Una percentuale alta di mutuo può rendere più difficile ottenere l’approvazione della pratica o portare a condizioni meno vantaggiose, come tassi più alti o maggiori garanzie richieste.|È quindi importante sapere che, più soldi chiedi rispetto al valore dell’immobile, più la tua richiesta verrà valutata con attenzione."
    },
    {
        title: 'Poca anzianità lavorativa',
        content: 
        "Hai iniziato a lavorare da poco o hai cambiato da poco lavoro, quindi non hai ancora una lunga storia lavorativa alle spalle.|Per le banche questo può rappresentare un'incertezza, perché non è ancora dimostrata la stabilità del tuo reddito nel tempo.|Anche se il tuo contratto è regolare, la mancanza di continuità rende la valutazione della tua affidabilità economica leggermente più cauta.|In questi casi, la banca potrebbe richiedere garanzie aggiuntive o analizzare più nel dettaglio la tua situazione."
    },
    {
        title: 'Contratto a tempo determinato con poca anzianità',
        content: 
        "Hai un contratto di lavoro che ha una scadenza e sei stato assunto da poco tempo, quindi non hai ancora una lunga esperienza lavorativa con l’attuale datore di lavoro.|Per le banche questa situazione può rappresentare un rischio più elevato, perché non c’è la certezza che il tuo reddito sia stabile e continuativo nel tempo.|Questo non vuol dire che la richiesta verrà respinta, ma che verrà valutata con maggiore attenzione e potrebbero essere richieste garanzie aggiuntive o la presenza di un co-intestatario con situazione lavorativa più solida."
    },
    {
        content: "L’importo della rata del mutuo, una volta considerate anche eventuali altre spese mensili come prestiti o finanziamenti, rappresenta una piccola parte del tuo reddito complessivo.|In particolare, se questa percentuale è inferiore al 30%, la banca considera la tua situazione finanziaria molto equilibrata.|Questo è un segnale molto positivo perché indica che, anche dopo aver pagato la rata, ti resta abbastanza reddito per gestire serenamente tutte le altre spese quotidiane.|Avere un buon rapporto tra rata e reddito aumenta le possibilità che la tua richiesta venga accettata e ti permette di accedere a condizioni potenzialmente migliori.",
        title: 'Rapporto rata/reddito ottimo'
    },
    {
        content: "La rata del mutuo che stai richiedendo, una volta considerati anche altri impegni mensili come finanziamenti o prestiti, pesa in modo significativo sul tuo reddito complessivo.|Se questa percentuale supera il 40-50%, per la banca diventa una situazione critica, perché indica che una parte molto ampia delle tue entrate verrebbe utilizzata solo per il mutuo.|Questo rende la tua situazione finanziaria più fragile e potenzialmente instabile, perché ti resterebbe poco margine per affrontare imprevisti o spese quotidiane.|Per questo motivo, le banche tendono a considerare questo tipo di rapporto come ad alto rischio e la richiesta potrebbe essere valutata con maggior severità o necessitare di correttivi come garanzie aggiuntive.",
        title: 'Rapporto rata/reddito troppo alto'
    }, 
    {
        content: "Hai un’età anagrafica bassa, il che può essere positivo in quanto hai davanti a te molti anni per rimborsare il mutuo, ma allo stesso tempo può rappresentare per la banca un elemento di incertezza.|Questo perché, soprattutto se sei all’inizio del tuo percorso lavorativo, potresti non avere ancora una stabilità economica consolidata.|In questi casi la banca tende a valutare con maggiore attenzione il tipo di contratto di lavoro, l’anzianità lavorativa e la presenza di eventuali garanti o co-intestatari con una situazione più solida.",
        title: 'Età molto giovane'
    },
    {
        title: 'Età elevata',
        content: 
        "Hai un’età anagrafica considerata alta rispetto alla durata del mutuo richiesto, e questo può rappresentare un limite nella concessione del finanziamento.|Le banche, infatti, valutano se il piano di rimborso possa essere completato entro un’età compatibile con la pensione o con la capacità futura di sostenere la rata.|Per questo motivo, in presenza di un’età elevata, potrebbe essere richiesto un accorciamento della durata del mutuo, la presenza di un co-intestatario più giovane oppure l’obbligo di sottoscrivere una polizza vita per tutelare l’importo erogato."
    }, 
    {
        content: "Hai diverse persone a carico nel tuo nucleo familiare, come figli o altri familiari senza reddito, e questo incide negativamente sulla valutazione della pratica di mutuo.|Le banche considerano il numero di persone a carico perché rappresenta un impegno economico fisso mensile che riduce la quota del reddito disponibile per il pagamento della rata.|Più persone a carico ci sono, maggiore è il peso sul bilancio familiare e, quindi, maggiore il rischio percepito dall’istituto di credito.",
        title: 'Molte persone a carico'
    },
    {
        content: "Il tuo reddito risulta inferiore alla soglia di sussistenza, cioè al minimo necessario per garantire le spese fondamentali della vita quotidiana come cibo, casa e vestiti.|La banca valuta questa soglia per capire se hai abbastanza risorse economiche per sostenere le spese del mutuo senza compromettere il tuo benessere essenziale.|Per un calcolo più preciso della soglia di sussistenza puoi consultare i dati ufficiali sul sito ISTAT all’indirizzo istat.it/dati/calcolatori/soglia-di-poverta/ dove trovi informazioni aggiornate e dettagliate.",
        title: 'Reddito sotto soglia sussistenza'
    }, 
    {
        title: 'Finanziamenti troppo elevati rispetto allo stipendio',
        content: 
        "Hai già altri finanziamenti in corso che, sommati al tuo stipendio, risultano troppo alti per la banca.|Questo significa che una parte consistente del tuo reddito mensile è già impegnata per pagare altri debiti, riducendo la capacità di sostenere nuove rate di mutuo.|Per la banca questo rappresenta un rischio perché potrebbe essere più difficile per te far fronte a tutte le spese mensili senza problemi."
    },
    {
        title: 'Mutuo con garanzia CONSAP',
        content: "Mutuo con garanzia CONSAP significa che il mutuo è coperto da una garanzia statale fornita da CONSAP, un ente che aiuta chi ha difficoltà a ottenere un finanziamento.|Questa garanzia rende più facile ottenere il mutuo anche se si hanno situazioni finanziarie non perfette, perché riduce il rischio per la banca.|In pratica, è un’opportunità positiva che aumenta le possibilità di ottenere il mutuo a condizioni più favorevoli."
    }, 
    {
        title: 'Mutuo per classi energetiche efficienti',
        content: "Mutuo per classi energetiche efficienti significa che il finanziamento è destinato all’acquisto o alla ristrutturazione di immobili con alta efficienza energetica.|Le banche incentivano queste case green perché consumano meno energia, riducono l’impatto ambientale e rappresentano un investimento più sicuro e moderno.|Per questo motivo spesso offrono condizioni migliori o tassi più vantaggiosi per chi sceglie immobili con classificazioni energetiche elevate."
    }
  ];

  const showPopupScore = useCallback(
    (field: string, event: React.MouseEvent) => {
      const info = infoConfig.find((x) => x.title === field);
      if (info) {
        const rect = event.currentTarget.getBoundingClientRect();
        setPopupState({
          isOpen: true,
          info,
          position: {
            x: rect.left + rect.width / 2,
            y: rect.top,
          },
        });
      }
    },
    []
  );

  const hidePopupScore = useCallback(() => {
    setPopupState({
      isOpen: false,
      info: null,
      position: null,
    });
  }, []);

  return {
    popupStateScore,
    showPopupScore,
    hidePopupScore,
    isMobileScore,
  };
};

interface InfoButtonProps {
  field: string;
  className?: string;
  onShow: (field: string, event: React.MouseEvent) => void;
}

export const ScoreButton: React.FC<InfoButtonProps> = ({
  field,
  className = "",
  onShow,
}) => {
  return (
    <button
      className={`text-blue-500 text-xs flex items-center justify-center w-4 h-4 bg-blue-100  hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-full  ml-1.5 ${className}`}
      onClick={(e) => onShow(field, e)}
    >
      ?
    </button>
  );
};

interface InfoPopupProps {
  isOpen: boolean;
  isMobileScore: boolean;
  info: PopupInfo | null;
  position: { x: number; y: number } | null;
  onClose: () => void;
}

export const ScoreInfoPop: React.FC<InfoPopupProps> = ({
  isOpen,
  info,
  position,
  isMobileScore,
  onClose,
}) => {
  if (!isOpen || !info || !position) return null;
  if (isMobileScore) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center h-screen  bg-gray-900/50"
        onClick={onClose}
      >
        <div className="bg-white rounded-lg p-4 w-11/12 max-w-md mb-25">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-base font-semibold text-gray-800">
              {info.title}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-800 text-xl"
            >
              ×
            </button>
          </div>
          <div className="flex flex-col gap-2">
            {info.content.split("|").map((x, index) => {
              if (index === info.content.split("|").length - 1) {
                return (
                  
                    <p
                      className="text-xs text-gray-600 leading-relaxed"
                      key={index}
                    >
                      {x}
                    </p>
                  
                );
              }
              return (
                
                  <p
                    className="text-xs text-gray-600 leading-relaxed"
                    key={index}
                  >
                    {x}
                  </p>
          
              );
            })}{" "}
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 z-40" onClick={onClose} />

      {/* Popup */}
      <div
        className="fixed z-50 w-80 p-3 bg-white border border-gray-300 rounded-lg shadow-lg"
        style={{
          left: position.x - 170, // Centra il popup (width/2)
          top: position.y - 10,
          transform: "translateY(-100%)",
        }}
      >
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-semibold text-sm text-gray-900">{info.title}</h4>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-lg leading-none"
          >
            ×
          </button>
        </div>

        <div className="flex flex-col gap-2">
          {info.content.split("|").map((x, index) => {
            if (index === info.content.split("|").length - 1) {
              return (
                <>
                  <p
                    className="text-xs text-gray-600 leading-relaxed"
                    key={index}
                  >
                    {x}
                  </p>
                </>
              );
            }
            return (
              <>
                <p
                  className="text-xs text-gray-600 leading-relaxed"
                  key={index}
                >
                  {x}
                </p>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
