import { mediaScore } from "@/action/mutui.action";
import { Mutuo, ScoreGenerale } from "@/lib/interface";
import React from "react";

export default function MediaScore({
  scoreMedio,
}: {
  scoreMedio: ScoreGenerale | null;
}) {
  if (!scoreMedio) {
    return (
      <div className="p-8 text-center">
        <div className="text-gray-400 text-sm">
          Nessun parametro disponibile
        </div>
      </div>
    );
  }

  function handleK(importo: number) {
    return Math.round(importo / 1000) + "K";
  }

  const scorePratica = scoreMedio.scoreMedio;
  let sostenibilitaRata = "Buono";
  let scoreColor = "text-yellow-600";
  let scoreBg = "bg-yellow-50";

  if (scorePratica > 90) {
    sostenibilitaRata = "Ottima";
    scoreColor = "text-green-600";
    scoreBg = "bg-green-50";
  } else if (scorePratica > 75) {
    sostenibilitaRata = "Buona";
    scoreColor = "text-blue-600";
    scoreBg = "bg-blue-50";
  } else if (scorePratica > 60) {
    sostenibilitaRata = "Discreta";
    scoreColor = "text-yellow-600";
    scoreBg = "bg-yellow-50";
  } else {
    sostenibilitaRata = "Debole";
    scoreColor = "text-red-600";
    scoreBg = "bg-red-50";
  }

  const isOverLimit = scoreMedio.importoMax < scoreMedio.importoRichiesto;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 py-4  w-full">
      {/* Header con score */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-sm font-medium text-gray-900 mb-1">
            Valutazione Creditizia
          </h2>
          <p className="text-xs text-gray-500">
            Analisi della sostenibilità del mutuo
          </p>
        </div>
        <div className={`px-3 py-1 rounded-full text-sm font-medium ${scoreBg} ${scoreColor}`}>
          {sostenibilitaRata}
        </div>
      </div>

      {/* Importi */}
      <div className="grid grid-cols-2 gap-3 pt-2">
        <div className="space-y-1">
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            Consigliato
          </div>
          <div className="text-lg font-semibold text-gray-900">
            €{handleK(scoreMedio.importoCons)}
          </div>
        </div>
        
        <div className="space-y-1">
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            Massimo
          </div>
          <div className="text-lg font-semibold text-gray-900">
            €{handleK(scoreMedio.importoMax)}
          </div>
        </div>
      </div>

      {/* Alert se supera il limite */}
      {isOverLimit && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <div className="text-sm font-medium text-red-800">
                Importo richiesto superiore al massimo
              </div>
              <div className="text-sm text-red-700 mt-1">
                Hai richiesto €{handleK(scoreMedio.importoRichiesto)}, che supera il massimo consigliato di €{handleK(scoreMedio.importoMax)}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Progress bar del score */}
      <div className="space-y-2 pt-0.5 ">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">Score di sostenibilità</span>
          <span className={`text-sm font-semibold ${scoreColor}`}>{scorePratica}/100</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-300 ${
              scorePratica > 90 ? 'bg-green-500' :
              scorePratica > 75 ? 'bg-blue-500' :
              scorePratica > 60 ? 'bg-yellow-500' : 'bg-red-500'
            }`}
            style={{ width: `${Math.min(scorePratica, 100)}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}