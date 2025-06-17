'use client'
import { Mutuo } from "@/lib/interface";
import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useMutuo } from '@/components/contexts';
import { useState } from "react";
import { consulenzaAvanzata } from "@/action/mutui.action";



const inter = Inter({
  subsets: ["latin"],
});

interface MutuoAvanzato extends Mutuo {
  score: number;
  ltvMutuo: number;
}

export function CardListaAvanzata2({ risultati }: { risultati: Mutuo[] | null }) {
  console.log("cardlist", risultati);

  // Helper function per formattare il tasso
  const formatTasso = (tasso: number | string): string => {
    if (typeof tasso === 'number') {
      return tasso < 1 ? `${(tasso * 100).toFixed(2)}%` : `${tasso.toFixed(2)}%`;
    }
    return typeof tasso === 'string' ? `${tasso}%` : `${tasso}%`;
  };

  // Helper function per formattare la rata
  const formatRata = (rata: number): string => {
    return new Intl.NumberFormat('it-IT', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(rata);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' };
    if (score >= 60) return { bg: 'bg-yellow-50', text: 'text-yellow-700', border: 'border-yellow-200' };
    return { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200' };
  };



  const formImporto = (rata: number): string => {
    return new Intl.NumberFormat('it-IT', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0
    }).format(rata);
  };

  if (!risultati || risultati.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Nessun mutuo trovato con i criteri selezionati</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {risultati.map((mutuo, index) => {
    const scoreColors = getScoreColor(mutuo.score)

      return (

        <div
          key={`${mutuo.banca}-${mutuo.nomeProdotto}-${index}`}
          className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border ${
            mutuo.soloClassiAB ? 'border-l-4 border-l-green-500 border-r border-t border-b border-gray-200' : 'border-gray-200'
          } ${inter.className}
          ${mutuo.eta.maxUnder36 && !mutuo.soloClassiAB ? 'border-l-4 border-l-purple-500 border-r border-t border-b border-gray-200': 'border-gray-200'} relative overflow-hidden`}
        >
          {/* Header compatto */}
          
            <div className="flex flex-col  justify-between gap-4 p-4 pb-3">
              {/* Logo e info banca */}
              <div className="flex  justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={mutuo.immagineBanca}
                      height={45}
                      width={140}
                      alt={`Logo ${mutuo.banca}`}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="font-semibold text-lg text-gray-900 leading-tight">
                      {mutuo.nomeProdotto}
                    </h2>
                    <p className="text-sm text-gray-600 mt-1">{mutuo.banca}</p>
                  </div>
                </div>
                
                {/* Score Badge */}
                <div className={`${scoreColors.bg} ${scoreColors.border} border-2 rounded-lg px-4 py-2 text-center min-w-[80px]`}>
                  <div className="text-xs font-medium text-gray-600 mb-1">Score</div>
                  <div className={`text-2xl font-bold ${scoreColors.text}`}>
                    {mutuo.score}
                  </div>
                  <div className="text-xs text-gray-500">/100</div>
                </div>
              </div>

              {/* Badges compatti */}
              <div className="flex flex-wrap gap-2 mt-4">
                {mutuo.soloClassiAB && (
                  <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium">
                    🌱 Green
                  </span>
                )}
                {mutuo.consap && (
                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">
                    🏛️ Consap
                  </span>
                )}
                {mutuo.eta?.maxUnder36 && (
                  <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full font-medium">
                    👥 Under 36
                  </span>
                )}
              </div>




             
          </div>

          {/* Metriche principali - layout orizzontale compatto */}
          <div className="px-4 pb-3">
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-blue-50 p-2.5 rounded-md text-center">
                <p className="text-xs font-medium text-gray-600 mb-0.5">Rata mensile</p>
                <p className="text-lg font-bold text-blue-600 leading-tight">
                  {formatRata(mutuo.rataMensile)}
                </p>
              </div>
              
              <div className="bg-green-50 p-2.5 rounded-md text-center">
                <p className="text-xs font-medium text-gray-600 mb-0.5">Tasso fisso</p>
                <p className="text-lg font-bold text-green-600 leading-tight">
                  {formatTasso(mutuo.tassoFisso)}
                </p>
              </div>

              {mutuo.taeg && (
                <div className="bg-orange-50 p-2.5 rounded-md text-center">
                  <p className="text-xs font-medium text-gray-600 mb-0.5">TAEG</p>
                  <p className="text-lg font-bold text-orange-600 leading-tight">
                    {formatTasso(mutuo.taeg)}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Dettagli in layout compatto */}
          <div className="px-4 pb-3">
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-600">Importo:</span>
                <span className="font-medium">{formImporto(mutuo.importoMutuo)}</span>
              </div>
              {mutuo.durataAnni && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Durata:</span>
                  <span className="font-medium">{mutuo.durataAnni} anni</span>
                </div>
              )}
              {mutuo.eta && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Età:</span>
                  <span className="font-medium">{mutuo.eta.minima || 'N/A'} - {mutuo.eta.massima} anni</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-gray-600">Costi extra:</span>
                <span className="font-medium">{formatRata(mutuo.totaliCostiExtra)}</span>
              </div>
            </div>
          </div>

          {/* Costi accessori - sezione collassabile visivamente */}
          {(mutuo.spesePerizia || mutuo.speseIstruttoria || mutuo.impostaSostitutiva) && (
            <div className="px-4 pb-3">
              <div className="bg-gray-50 rounded-md p-2.5">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-semibold text-gray-900">Dettaglio costi</h4>
                  <span className="text-xs font-bold text-gray-900">{formatRata(mutuo.totaliCostiExtra)}</span>
                </div>
                <div className="space-y-1 text-xs text-gray-600">
                  {mutuo.spesePerizia && (
                    <div className="flex justify-between">
                      <span>Perizia:</span>
                      <span>{formatRata(mutuo.spesePerizia.importo)}</span>
                    </div>
                  )}
                  {mutuo.speseIstruttoria && (
                    <div className="flex justify-between">
                      <span>Istruttoria:</span>
                      <span className={mutuo.speseIstruttoria.importo === 0 ? 'text-green-600 font-medium' : ''}>
                        {mutuo.speseIstruttoria.importo === 0 ? 'Gratis' : formatRata(mutuo.speseIstruttoria.importo)}
                      </span>
                    </div>
                  )}
                  {mutuo.impostaSostitutiva && (
                    <div className="flex justify-between">
                      <span>Imposta sostitutiva:</span>
                      <span>{formatRata(mutuo.impostaSostitutiva.importo) }</span>
                    </div>
                  )}
                  
                </div>
              </div>
            </div>
          )}

          {/* Footer con quick insights */}
          <div className="px-4 pb-3">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                {mutuo.speseIstruttoria?.importo === 0 && (
                  <span className="text-green-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    Zero istruttoria
                  </span>
                )}
                {mutuo.spesePerizia?.importo === 0 && (
                  <span className="text-green-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    Perizia gratuita
                  </span>
                )}
              </div>
              <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                Dettagli →
              </button>
            </div>
          </div>
        </div>
      )
})}
    </div>
  )}
