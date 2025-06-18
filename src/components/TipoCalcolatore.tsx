"use client";
import React from "react";
import { Euro, ArrowLeft, HandCoins } from "lucide-react";
import { useRouter } from "next/navigation";
export default function TipoCalcolatore({
  handleCalcolatore,
  tipoCalcolatore,
}: {
  handleCalcolatore: (e: any) => void;
  tipoCalcolatore: boolean;
}) {
  const router = useRouter();
  return (
    <div className="mx-auto max-w-5xl pt-6 mb-6">
      <button
        onClick={() => router.push('/')}
        className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 text-sm transition-colors duration-200 hover:bg-white/50 px-3 py-2 rounded-lg"
      >
        <ArrowLeft className="w-4 h-4" />
        Torna alla home
      </button>
      <div className="relative flex justify-center items-center pt-4 ">
        <div
          role="switch"
          tabIndex={0}
          aria-checked={tipoCalcolatore}
          onClick={handleCalcolatore}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleCalcolatore(e);
            }
          }}
          className="relative inline-flex items-center h-12 w-80 rounded-2xl bg-gray-100 hover:bg-gray-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer select-none"
        >
          {/* Sfondo animato */}
          <div
            className={`absolute inset-1 w-[calc(50%-0.25rem)] h-10 bg-white rounded-xl shadow-sm transform transition-all duration-300 ease-out ${
              tipoCalcolatore ? "translate-x-full" : "translate-x-0"
            }`}
          />

          {/* Contenuto Standard */}
          <div
            className={`relative w-1/2 flex items-center justify-center space-x-2 transition-all duration-300 pointer-events-none ${
              !tipoCalcolatore ? "text-gray-900" : "text-gray-500"
            }`}
          >
            <Euro
              className={`w-4 h-4 transition-all duration-300 ${
                !tipoCalcolatore ? "text-blue-600" : "text-gray-400"
              }`}
            />
            <span className="text-sm font-medium">Rata</span>
          </div>

          {/* Contenuto Avanzata */}
          <div
            className={`relative w-1/2 flex items-center justify-center space-x-2 transition-all duration-300 pointer-events-none ${
              tipoCalcolatore ? "text-gray-900" : "text-gray-500"
            }`}
          >
            <HandCoins
              className={`w-4 h-4 transition-all duration-300 ${
                tipoCalcolatore ? "text-blue-600" : "text-gray-400"
              }`}
            />
            <span className="text-sm font-medium">Importo</span>
          </div>
        </div>
      </div>
    </div>
  );
}
