import React from 'react';
import { Zap, Settings } from 'lucide-react';
import { useMutuo } from '@/Context/MutuoContext';
import Image from 'next/image';

export default function ToggleTipoCons({ value = false }) {
  const {tipoConsulenza, setTipoConsulenza} = useMutuo()
  
  function handleTipologia2(e: React.MouseEvent | React.KeyboardEvent) {
    e.preventDefault();
    e.stopPropagation();
    
    // Scrolla in alto prima del cambio di stato
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // oppure 'instant' per uno scroll immediato
    });
    
    // Piccolo delay per permettere allo scroll di iniziare
    setTimeout(() => {
      setTipoConsulenza(!tipoConsulenza);
    }, 50);
  }

  return (
    <div className="flex flex-col items-center pt-8 mb-4">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-40 h-20 rounded-2xl mb-6">
          <Image
            src={"/omino4.png"}
            height={400}
            width={400}
            alt="immagine omino"
          />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          Strumento informativo gratuito{" "}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Scopri e confronta diverse opzioni di mutuo disponibili online, in
          modo indipendente e trasparente.
        </p>
      </div>

      {/* Titolo e descrizione */}
      <div className="text-center mb-3 mt-4">
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Scegli il tipo di analisi
        </h3>
        <p className="text-sm text-gray-600">
          {tipoConsulenza 
            ? "Analisi approfondita con più parametri personalizzati" 
            : "Calcolo veloce con i parametri essenziali"
          }
        </p>
      </div>

      {/* Toggle Container */}
      <div className="relative">
        <div
          role="switch"
          tabIndex={0}
          aria-checked={tipoConsulenza}
          onClick={handleTipologia2}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleTipologia2(e);
            }
          }}
          className="relative inline-flex items-center h-12 w-80 rounded-2xl bg-gray-100 hover:bg-gray-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer select-none"
        >
          
          {/* Sfondo animato */}
          <div 
            className={`absolute inset-1 w-[calc(50%-0.25rem)] h-10 bg-white rounded-xl shadow-sm transform transition-all duration-300 ease-out ${
              tipoConsulenza ? 'translate-x-full' : 'translate-x-0'
            }`}
          />

          {/* Contenuto Standard */}
          <div className={`relative w-1/2 flex items-center justify-center space-x-2 transition-all duration-300 pointer-events-none ${
            !tipoConsulenza ? 'text-gray-900' : 'text-gray-500'
          }`}>
            <Zap className={`w-4 h-4 transition-all duration-300 ${
              !tipoConsulenza ? 'text-blue-600' : 'text-gray-400'
            }`} />
            <span className="text-sm font-medium">Standard</span>
          </div>

          {/* Contenuto Avanzata */}
          <div className={`relative w-1/2 flex items-center justify-center space-x-2 transition-all duration-300 pointer-events-none ${
            tipoConsulenza ? 'text-gray-900' : 'text-gray-500'
          }`}>
            <Settings className={`w-4 h-4 transition-all duration-300 ${
              tipoConsulenza ? 'text-blue-600' : 'text-gray-400'
            }`} />
            <span className="text-sm font-medium">Avanzata</span>
          </div>
        </div>
      </div>
    </div>
  );
}