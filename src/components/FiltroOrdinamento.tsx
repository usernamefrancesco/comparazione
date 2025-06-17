"use client";

import { useMutuo } from "@/Context/MutuoContext";
import React, { useEffect } from "react";

export type OrdinamentoTipo = "rata totale" | "taeg" | "rata" | 'score';

export interface FiltroItem {
  value: OrdinamentoTipo;
  label: string;
  icon: string;
  description: string;
}

export interface FiltroOrdinamentoProps {
  handleFiltro: (nomeFiltro: OrdinamentoTipo) => void;
}

export default function FiltroOrdinamento({ handleFiltro }: FiltroOrdinamentoProps) {
  const { ordinamento, setOrdinamento , tipoConsulenza} = useMutuo();
  
  const filtri: FiltroItem[] = [
    {
      value: "rata totale", 
      label: "Rata totale", 
      icon: "💰",
      description: "Ordina per rata totale (rata + assicurazione)"
    },
    { 
      value: "taeg", 
      label: "TAEG", 
      icon: "📊",
      description: "Ordina per Tasso Annuo Effettivo Globale"
    },
    { 
      value: "rata", 
      label: "Rata", 
      icon: "🧾",
      description: "Ordina per rata mensile base"
    },
    { 
      value: "score", 
      label: "Score", 
      icon: "⭐",
      description: "Ordina per punteggio di convenienza"
    }
  ]

  const handleClick = (tipo: OrdinamentoTipo) => {
    if (ordinamento !== tipo) {
      setOrdinamento(tipo);
      handleFiltro(tipo);
    }
  };

  const filtroSelezionato = filtri.find(f => f.value === ordinamento);

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-900 mb-1">
          Ordina per
        </h3>
        <p className="text-xs text-gray-500">
          Scegli il criterio per ordinare i mutui
        </p>
      </div>

      {/* Filter Pills */}
      <div className="flex flex-wrap gap-2">
        {filtri.map((filtro) => {
          const isSelected = ordinamento === filtro.value;
          
          return (
            <button
              key={filtro.value}
              onClick={() => handleClick(filtro.value)}
              title={filtro.description}
              className={`
                inline-flex items-center px-3 py-2 rounded-md text-sm font-medium
                transition-all duration-200 ease-in-out
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1
                ${isSelected
                  ? 'bg-blue-100 text-blue-700 border border-blue-200 shadow-sm'
                  : 'bg-gray-50 text-gray-700 border border-transparent hover:bg-gray-100 hover:text-gray-900'
                }
              `}
              disabled={isSelected}
            >
              <span className="mr-2 text-xs" role="img" aria-label={`Icona ${filtro.label}`}>
                {filtro.icon}
              </span>
              {filtro.label}
              {isSelected && (
                <svg 
                  className="ml-2 h-3 w-3 text-blue-600" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                    clipRule="evenodd" 
                  />
                </svg>
              )}
            </button>
          );
        })}
      </div>

      {/* Selected indicator */}
      <div className="mt-3 pt-3 border-t border-gray-100">
        <div className="flex items-center text-xs text-gray-500">
          <svg 
            className="h-3 w-3 mr-1" 
            fill="currentColor" 
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path 
              fillRule="evenodd" 
              d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
              clipRule="evenodd" 
            />
          </svg>
          <span>
            Ordinamento attivo: <strong>{filtroSelezionato?.label || 'Nessuno'}</strong>
          </span>
        </div>
      </div>
    </div>
  );
}