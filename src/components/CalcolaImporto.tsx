"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";



export default function CalcolaImporto() {
  const [calcolatore, setCalcolatore] = useState({
    rata: "€ 250",
    tasso: "% 2,50",
    durataMutuo: "30",
    importo: {
      interessi: 26728.23,
      capitale: 63271.77,
      montante: 90000,
    },
  });
  const router = useRouter()
  const formatCurrency = (amount: number) => {
    const formattedNumber = new Intl.NumberFormat("it-IT", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);

    return `€ ${formattedNumber}`;
  };

  function parseNumericValue(value: string): number {
    const cleaned = value.replace(/[^\d]/g, "");
    const result = Number(cleaned);
    if (isNaN(result) || result < 0) {
      throw new Error(`Valore numerico non valido: ${value}`);
    }
    return result;
  }
  

  const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};


const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  const raw = value.replace(/[^\d]/g, "");
  const formatted = raw ? "€ " + formatNumber(parseInt(raw)) : "";
  setCalcolatore((prev) => ({ ...prev, [name]: formatted }));

}
  

  const handleChangeTasso = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const withoutPercent = value.startsWith("%") ? value.slice(1) : value;
    const numbersAndDots = withoutPercent.replace(/[^0-9,]/g, "");
    const parts = numbersAndDots.split(",");
    let cleanValue = parts[0];

    if (parts.length > 1) {
      cleanValue += "," + parts.slice(1).join("");
    }

    const finalValue = "% " + cleanValue;

    setCalcolatore((prev) => ({
      ...prev,
      tasso: finalValue,
    }));
  };

  const handleChangeDurata = (e: any) => {
    const raw = e.target.value.replace(/\D/g, "");
    const formatted = raw ? `${raw}` : "";
    setCalcolatore((prev) => ({ ...prev, durataMutuo: formatted }));
  };

  const rata = parseNumericValue(calcolatore.rata);
  const tassoNumero = Number(
    calcolatore.tasso
      .split("")
      .filter((x) => x !== "%" && x !== " ")
      .join("")
      .replace(",", ".")
  );
  const durataNumero = parseNumericValue(calcolatore.durataMutuo);

  function calcolaMutuo(
    rata: number,
    tassoNumero: number,
    durataMutuo: number
  ) {
    const n = durataMutuo * 12;
    const i = tassoNumero / 12 / 100;
    const pow = Math.pow(1 + i, n);

    const capitale = rata * ((pow - 1) / (i * pow));
    const montante = rata * n;
    const interessi = montante - capitale;

    return { capitale, montante, interessi };
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = calcolaMutuo(rata, tassoNumero, durataNumero);
    setCalcolatore((prev) => ({
      ...prev,
      importo: {
        interessi: result.interessi,
        capitale: result.capitale,
        montante: result.montante,
      },
    }));
  }
  return (
    <div className="flex items-center justify-center px-5 mb-6 mt-6">
      <div className="w-full max-w-5xl bg-white">
      <button
          onClick={() => router.push('/')}
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 text-sm mb-6 transition-colors duration-200 hover:bg-white/50   rounded-lg"
        >
          <ArrowLeft className="w-4 h-4" />
          Torna alla home
        </button>
        {/* Header */}
        <div className="mb-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            🏦 Calcola Importo Mutuo
          </h1>
          <p className="text-gray-600">
            Scopri quanto puoi permetterti di spendere
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Rata mensile */}
          <div className="group">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
              <span className="text-lg">💵</span>
              Rata mensile
            </label>
            <div className="relative">
              <input
                type="text"
                name="rata"
                onChange={handleChangeNumber}
                value={calcolatore.rata}
                placeholder="€ 0"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 outline-none"
              />
            </div>
          </div>

          {/* Durata */}
          <div className="group">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
              <span className="text-lg">📅</span>
              Durata in anni
            </label>
            <div className="relative">
              <input
                type="text"
                name="durataMutuo"
                onChange={handleChangeDurata}
                value={`${calcolatore.durataMutuo}`}
                placeholder="Es. 25"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 outline-none"
              />
            </div>
          </div>

          {/* Tasso */}
          <div className="group">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
              <span className="text-lg">📊</span>
              Tasso di interesse
            </label>
            <input
              type="text"
              name="tasso"
              onChange={handleChangeTasso}
              value={calcolatore.tasso}
              placeholder="%3.5"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 outline-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:ring-4 focus:ring-blue-500/20 focus:outline-none shadow-lg hover:shadow-xl"
          >
            <span className="flex items-center justify-center gap-2">
              <span>🧮</span>
              Calcola importo disponibile
            </span>
          </button>
        </form>

        {/* Risultati */}
        
          <div className="mt-8 space-y-4">
            {/* Importo Totale - Card Principale */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200/50 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🏠</span>
                <h2 className="text-lg font-semibold text-blue-800">
                  Importo massimo mutuo
                </h2>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-blue-900">
                  {formatCurrency(calcolatore.importo.capitale)}
                </span>
              </div>
              <p className="text-sm text-blue-600 mt-2">
                Questo è l'importo massimo che puoi richiedere con la rata
                mensile indicata
              </p>
            </div>

            {/* Griglia con dettagli */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Interessi Totali */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">📈</span>
                  <h3 className="font-semibold text-orange-800">
                    Interessi totali
                  </h3>
                </div>
                <div className="text-2xl font-bold text-orange-900 mb-1">
                  {formatCurrency(calcolatore.importo.interessi)}
                </div>
                <p className="text-xs text-orange-600">
                  Costo totale del credito
                </p>
              </div>

              {/* Importo Totale Pagato */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">💳</span>
                  <h3 className="font-semibold text-purple-800">
                    Totale pagato
                  </h3>
                </div>
                <div className="text-2xl font-bold text-purple-900 mb-1">
                  {formatCurrency(calcolatore.importo.montante)}
                </div>
                <p className="text-xs text-purple-600">Capitale + interessi</p>
              </div>
            </div>

            {/* Barra di ripartizione visuale */}
            <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span>📊</span>
                Ripartizione del pagamento
              </h3>

              <div className="relative">
                {/* Barra */}
                <div className="h-6 bg-gray-200 rounded-full overflow-hidden flex">
                  <div
                    className="bg-blue-500 flex items-center justify-center text-white text-xs font-medium"
                    style={{
                      width: `${
                        (calcolatore.importo.capitale /
                          calcolatore.importo.montante) *
                        100
                      }%`,
                    }}
                  >
                    {Math.round(
                      (calcolatore.importo.capitale /
                        calcolatore.importo.montante) *
                        100
                    )}
                    %
                  </div>
                  <div
                    className="bg-orange-500 flex items-center justify-center text-white text-xs font-medium"
                    style={{
                      width: `${
                        (calcolatore.importo.interessi /
                          calcolatore.importo.montante) *
                        100
                      }%`,
                    }}
                  >
                    {Math.round(
                      (calcolatore.importo.interessi /
                        calcolatore.importo.montante) *
                        100
                    )}
                    %
                  </div>
                </div>

                {/* Legenda */}
                <div className="flex justify-between mt-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Capitale</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700">Interessi</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Nota informativa */}
            <div className="p-4 bg-gray-50 border-l-4 border-gray-400 rounded-r-lg">
              <p className="text-sm text-gray-600">
                💡 <strong>Nota:</strong> Questi calcoli sono indicativi. I
                tassi reali e le condizioni possono variare in base alla banca e
                al tuo profilo creditizio.
              </p>
            </div>
          </div>
        
      </div>
    </div>
  );
}
