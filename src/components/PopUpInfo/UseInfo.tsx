import { useState, useCallback, useEffect } from "react";

interface PopupInfo {
  title: string;
  content: string;
}

interface PopupState {
  isOpen: boolean;
  info: PopupInfo | null;
  position: { x: number; y: number } | null;
}



export const useInfoPopup = () => {
  const [popupState, setPopupState] = useState<PopupState>({
    isOpen: false,
    info: null,
    position: null,
  });

  const [isMobile, setIsMobile] = useState(false);

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
  const infoConfig: Record<string, PopupInfo> = {
    tasso: {
      title: "Tasso Fisso",
      content:
        "Il tasso fisso è un tipo di interesse che non cambia mai per tutta la durata del mutuo. | Questo significa che, una volta stabilita la rata mensile all’inizio, quella resterà sempre uguale fino all’ultima rata. | Non importa se i tassi di mercato salgono o scendono: la rata rimane quella. | È una scelta adatta a chi vuole certezze e non vuole sorprese nel tempo.",
    },
    taeg: {
      title: "TAEG",
      content:
        "Il TAEG è un numero che ti dice quanto ti costa veramente un mutuo o un prestito, non solo gli interessi.| Dentro questo numero ci sono tutti i costi: gli interessi, le spese di apertura, le commissioni e altri costi obbligatori.| Così puoi confrontare facilmente offerte diverse e capire qual è quella che ti costa meno davvero.|Più il TAEG è basso, meno spendi in totale per il prestito.|Quindi, quando scegli un mutuo, non guardare solo il tasso d’interesse, ma il TAEG, perché ti dice tutta la verità su quanto pagherai.|",
    },
    rata: {
      title: "Rata Mensile",
      content: "La rata è la somma che devi pagare ogni mese per il mutuo.|Questa cifra si calcola solo sul TAN, cioè il tasso di interesse base del prestito, senza considerare altri costi obbligatori come le spese di incasso rata o le polizze assicurative che spesso servono per avere uno sconto.|Quindi, la rata ti mostra solo quanto paghi per il debito e gli interessi, ma non ti dice tutto quello che devi effettivamente spendere.|Per vedere tutti i costi mensili insieme, devi usare il filtro 'Rata totale', che include anche queste spese extra.",
    },
    rataTotale: {
      title: "Rata Totale",
      content: "La rata totale è la somma che devi pagare ogni mese per il mutuo, ma a differenza della sola rata, qui sono inclusi tutti i costi mensili obbligatori.|Questo significa che dentro la rata totale ci sono non solo gli interessi calcolati sul TAN, ma anche tutte le spese extra come l’incasso della rata, le spese di gestione e le polizze assicurative obbligatorie.|In pratica, la rata totale ti mostra quanto devi pagare davvero ogni mese, senza sorprese o costi nascosti.|Usare la rata totale ti permette di avere una panoramica chiara e precisa di quanto ti costerà davvero il mutuo mese dopo mese.",
    },
    spesePerizia: {
      title: "Spese Perizia",
      content:
        "Le spese perizia sono i costi per far valutare da un esperto il valore dell’immobile che vuoi comprare con il mutuo.|Questa valutazione serve alla banca per capire se il prezzo che chiedi è giusto e per decidere quanto può prestarti.|La perizia può essere richiesta prima o al momento dell’erogazione del mutuo, a seconda della banca.|È una spesa obbligatoria, anche se in alcuni casi può essere coperta gratuitamente dalla banca, perché aiuta a proteggere sia te che la banca, ma il costo può variare a seconda dell’immobile e del professionista incaricato.|In sostanza, è il prezzo per avere una valutazione professionale della casa che vuoi acquistare.",
    },
    speseIstruttoria: {
      title: "Spese Istruttoria",
      content: "Le spese di istruttoria sono i costi obbligatori che la banca applica per avviare e valutare la pratica del mutuo.|Questi costi coprono il lavoro necessario per analizzare la tua richiesta e controllare i documenti.|Di solito, le spese di istruttoria vengono trattenute al momento dell’erogazione del mutuo, cioè vengono scalate dalla somma che ricevi.|In alcuni casi, però, alcune banche offrono promozioni che permettono di non pagare queste spese.|È importante sapere che, anche se può sembrare un costo extra, l’istruttoria è fondamentale per far partire la procedura.",
    },
    impostaSostitutiva: {
      title: "Imposta Sostitutiva",
      content:
       "L’imposta sostitutiva è una tassa che si paga quando si richiede un mutuo.|È calcolata come una percentuale sull’importo del prestito: è lo 0,25% per la prima casa e il 2% per la seconda casa, con un importo minimo di 250 euro.|Questa tassa è obbligatoria e viene pagata di solito al momento dell’erogazione del mutuo.|L’imposta sostitutiva aiuta a finanziare i costi dello Stato legati alle operazioni finanziarie.|Anche se può sembrare un costo in più, è una spesa standard e prevista per legge quando si accende un mutuo.",
    },
    incassoRata: {
      title: "Incasso Rata",
      content: 
      "L’incasso rata è la spesa che la banca applica per gestire il pagamento mensile del mutuo.|Ogni volta che paghi la rata, la banca deve occuparsi di ricevere e registrare il tuo pagamento, e questa attività ha un costo.|Anche se spesso è una cifra piccola, è un costo aggiuntivo che va considerato insieme agli interessi e alle altre spese.|Capire l’incasso rata ti aiuta a sapere quanto spenderai realmente ogni mese per il mutuo.",
    },
    gestionePratica: {
      title: "Gestione Pratica",
      content:
      "La gestione pratica è la spesa che la banca richiede per amministrare e seguire il mutuo nel tempo.|Serve a coprire i costi di controllo, aggiornamento e gestione dei documenti e delle comunicazioni durante tutta la durata del mutuo.|Questa spesa si paga ogni mese insieme alla rata e può variare a seconda della banca.|Anche se può sembrare un costo in più, è importante perché permette alla banca di mantenere tutto in ordine e garantire il corretto funzionamento del mutuo.|Conoscere la gestione pratica ti aiuta a capire quanto ti costerà davvero mantenere il mutuo nel tempo.",
    },
    assicurazioneVita: {
      title: "Assicurazione Vita",
      content:
        "Se è presente, significa che per avere uno sconto sul tasso del mutuo devi fare una polizza vita legata all’importo del mutuo, con pagamenti rateizzati.|Questa polizza solitamente fa aumentare la rata complessiva, spesso molto più di una polizza vita normale che potresti trovare a un costo minore altrove.|La particolarità è che, essendo parte della promozione della banca, questa polizza va fatta obbligatoriamente con la banca erogatrice.|Quindi, anche se può sembrare conveniente per lo sconto sul tasso, è importante valutare bene se conviene rispetto a una polizza vita tradizionale fatta con altri canali.",
    },
    costiMisti:{
      title: 'Costi iniziali e Spese mensili aggiuntive',
      content: 
      "Per costi iniziali e costi mensili aggiuntivi si intendono tutte le spese necessarie per ottenere e mantenere il mutuo, come l’istruttoria, la perizia, l’imposta sostitutiva e le spese mensili come l'incasso rata e gestione pratica, che se non previste saranno gratuite.|Le polizze assicurative, come incendio e scoppio, non sono incluse qui e vengono spiegate separatamente nelle pagine dedicate a ciascuna offerta.|Ogni voce di costo, dall’istruttoria alle spese mensili, sarà dettagliata nelle pagine specifiche dei mutui, con spiegazioni chiare e risposte alle domande più frequenti indicate dal simbolo '?'."    },
    costiIniziali: {
      title: 'Costi Iniziali',
      content: 
      "I costi iniziali sono le spese che devi pagare all'inizio quando richiedi un mutuo.|Questi includono voci come l’istruttoria, che è il costo per valutare la tua richiesta, e la perizia, che serve a stimare il valore dell’immobile.|Alcuni di questi costi si pagano al momento dell’erogazione del mutuo, mentre altri, come la perizia, potrebbero essere richiesti prima.|Ogni banca ha regole diverse su quando e come questi costi vanno pagati, quindi è importante leggere bene le condizioni.|In sostanza, sono le spese che devi sostenere per far partire il mutuo."
    }  ,
    interessiTotali: {
      title: 'Interessi sul mutuo',
      content:
      'Gli interessi sul mutuo sono il costo che paghi alla banca per aver preso in prestito i soldi.|Ogni mese, insieme alla parte del capitale che restituisci, paghi anche una percentuale extra chiamata interesse.|Questa percentuale è calcolata sul denaro che ancora devi restituire e può variare a seconda del tipo di mutuo e del tasso applicato.|In pratica, gli interessi sono il ‘prezzo’ per usare il denaro della banca e fanno aumentare il totale che alla fine dovrai pagare.|Capire gli interessi è importante per sapere quanto ti costerà davvero il mutuo nel tempo.'
    },
    assicurazioneIncendio: {
      title: 'Assicurazione Incendio e scoppio',
      content: 
      "Quando si richiede un mutuo, questa polizza diventa obbligatoria per legge per tutelare la banca e il cliente.|L’assicurazione incendio e scoppio è una polizza che protegge la casa da danni causati da incendi o esplosioni.|La cifra indicata è solo una stima basata sui prezzi medi del mercato assicurativo e può variare.|Questa assicurazione non è obbligatorio farla con la banca, anzi spesso conviene stipularla con compagnie esterne perché si possono trovare costi più bassi.|È importante sapere che questa polizza serve a tutelarti in caso di eventi gravi che potrebbero danneggiare la casa e ti permette di evitare spese molto alte.|Quindi, scegliere bene dove farla può farti risparmiare senza rinunciare alla sicurezza."
    },
    altriCosti:{
      title: 'Altri costi',
      content:
      'Gli altri costi sono spese annuali aggiuntive legate al mutuo, come ad esempio la certificazione degli interessi passivi in forma cartacea.|Queste spese possono includere anche altri tipi di costi che la banca applica durante l’anno per servizi particolari.|Anche se spesso sono cifre contenute, è importante considerarle per avere un quadro completo di quanto ti costa il mutuo.|Conoscere questi costi ti aiuta a evitare sorprese e a capire meglio tutte le spese legate al tuo mutuo.'
    },
    valutazioneCreditizia:{
      title: 'Valutazione creditizia',
      content: 
      "La valutazione creditizia è una stima che ti aiuta a capire quanto è probabile che la tua richiesta di mutuo venga accettata.|Si basa sui dati che hai inserito, come reddito, tipo di contratto, familiari a carico e altre informazioni utili, e restituisce uno score da 1 a 100.|Non è una risposta definitiva ma un’indicazione realistica che ti permette di avere subito un’idea sulla fattibilità della tua pratica.|Più alto è lo score, maggiori sono le possibilità che il mutuo venga approvato.|È uno strumento pensato per orientarti in modo semplice e veloce, prima ancora di inviare una richiesta ufficiale."
    },
    analisiOfferta: {
      title: "Analisi dell'offerta",
      content:
      "L’analisi dell’offerta è una valutazione chiara e semplice dei pro e dei contro di ogni singolo mutuo.|Ti aiuta a capire velocemente quali sono i punti di forza, come tassi vantaggiosi o promozioni, e gli eventuali aspetti meno convenienti, come costi nascosti o vincoli particolari.|È pensata per darti una panoramica utile e imparziale, così puoi confrontare le offerte non solo sui numeri, ma anche sulla qualità e sulle condizioni.|In questo modo puoi scegliere con più consapevolezza l’opzione davvero adatta alle tue esigenze."
    }
  };

  

  const showPopup = useCallback((field: string, event: React.MouseEvent) => {
    const info = infoConfig[field];
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
  }, []);

  const hidePopup = useCallback(() => {
    setPopupState({
      isOpen: false,
      info: null,
      position: null,
    });
  }, []);

  return {
    popupState,
    showPopup,
    hidePopup,
    isMobile,
  };
};

interface InfoButtonProps {
  field: string;
  className?: string;
  onShow: (field: string, event: React.MouseEvent) => void;
}

export const InfoButton: React.FC<InfoButtonProps> = ({
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

// Componente Popup
interface InfoPopupProps {
  isOpen: boolean;
  isMobile: boolean;
  info: PopupInfo | null;
  position: { x: number; y: number } | null;
  onClose: () => void;
}

export const InfoPopup: React.FC<InfoPopupProps> = ({
  isOpen,
  info,
  position,
  isMobile,
  onClose,
}) => {
  if (!isOpen || !info || !position) return null;
  if (isMobile) {
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

          {info.content.split('|').map((x, index)=> {
          
          if(index === (info.content.split('|').length -1 )){
            return (
              <>
            <p className="text-xs text-gray-600 leading-relaxed" key={index}>
              {x}
            </p>
            </>
            )
          }
          return (
            <>
            <p className="text-xs text-gray-600 leading-relaxed" key={index}>
              {x}
            </p>
            </>
          )
        })}        </div>
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

        {info.content.split('|').map((x, index)=> {
          
          if(index === (info.content.split('|').length -1 )){
            return (
              
            <p className="text-xs text-gray-600 leading-relaxed" key={index}>
              {x}
            </p>
            
            )
          }
          return (
            
            <p className="text-xs text-gray-600 leading-relaxed" key={index}>
              {x}
            </p>
            
          )
        })}
        </div>
        </div>
    </>
  );
};
