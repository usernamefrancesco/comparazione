"use client";
import React, { useState } from "react";

export default function CalcolaRata() {
  const [calcolatore, setCalcolatore] = useState({
    importo: "€ 100.000",
    durataMutuo: "30",
    tasso: "% 2.50",
    rata: 395.12,
  });
  const [esempioCalc, setEsempioCalc] = useState({
    10: 942.8,
    15: 666.79,
    20: 529.9,
    25: 448.62,
    30: 395.12,
  });
  function calculateRataMutuo(
    importoMutuo: number,
    tasso: number,
    durataMutuo: number
  ): number {
    const r = tasso / 100;
    const n = durataMutuo * 12;

    if (r === 0) {
      return importoMutuo / n;
    }

    const rata =
      importoMutuo * (((r / 12) * (1 + r / 12) ** n) / ((1 + r / 12) ** n - 1));
    return Number(rata.toFixed(2));
  }

  function parseNumericValue(value: string): number {
    const cleaned = value.replace(/[^\d]/g, "");
    const result = Number(cleaned);
    if (isNaN(result) || result < 0) {
      throw new Error(`Valore numerico non valido: ${value}`);
    }
    return result;
  }

  const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const raw = value.replace(/[^\d]/g, "");
    const formatted = raw ? "€ " + parseInt(raw).toLocaleString("it-IT") : "";
    setCalcolatore((prev) => ({ ...prev, [name]: formatted }));
  };

  const handleChangeTasso = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    // Rimuove il simbolo % se presente all'inizio per lavorare solo sui numeri
    const withoutPercent = value.startsWith("%") ? value.slice(1) : value;

    // Rimuove tutto tranne numeri e punti
    const numbersAndDots = withoutPercent.replace(/[^0-9.]/g, "");

    // Gestisce al massimo un punto decimale
    const parts = numbersAndDots.split(".");
    let cleanValue = parts[0]; // Parte intera

    // Se ci sono punti, mantiene solo il primo
    if (parts.length > 1) {
      cleanValue += "." + parts.slice(1).join(""); // Ricongiunge tutto dopo il primo punto
    }

    // Aggiunge sempre il simbolo % all'inizio
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

  const importoNumero = parseNumericValue(calcolatore.importo);
  const tassoNumero = Number(
    calcolatore.tasso
      .split("")
      .filter((x) => x !== "%" && x !== " ")
      .join("")
  );
  const durataNumero = parseNumericValue(calcolatore.durataMutuo);

  const rata10 = calculateRataMutuo(importoNumero, tassoNumero, 10);
  const rata15 = calculateRataMutuo(importoNumero, tassoNumero, 15);
  const rata20 = calculateRataMutuo(importoNumero, tassoNumero, 20);
  const rata25 = calculateRataMutuo(importoNumero, tassoNumero, 25);
  const rata30 = calculateRataMutuo(importoNumero, tassoNumero, 30);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = calculateRataMutuo(importoNumero, tassoNumero, durataNumero);
    setCalcolatore((prev) => ({ ...prev, rata: result }));
    setEsempioCalc({
      10: rata10,
      15: rata15,
      20: rata20,
      25: rata25,
      30: rata30,
    });
  }
  return (
    <div className="flex items-center justify-center px-5 mb-5">
  <div className="w-full max-w-5xl bg-white">
    {/* Header */}
    <div className="mb-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        💰 Calcolatore Mutuo
      </h1>
      <p className="text-gray-600">
        Calcola la tua rata mensile in modo semplice e veloce
      </p>
    </div>

    <form onSubmit={handleSubmit} className="space-y-3">
      {/* Importo del mutuo */}
      <div className="group">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
          <span className="text-lg">🏠</span>
          Importo del mutuo
        </label>
        <div className="relative">
          <input
            type="text"
            name="importo"
            onChange={handleChangeNumber}
            value={calcolatore.importo}
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
      <div className="group mb-4">
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
          Calcola rata mensile
        </span>
      </button>
    </form>

    {/* Risultato */}
    {calcolatore.rata && (
      <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">✅</span>
          <h2 className="text-lg font-semibold text-green-800">
            Rata calcolata
          </h2>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-green-900">
            € {calcolatore.rata}
          </span>
          <span className="text-green-700 font-medium">al mese</span>
        </div>
      </div>
    )}

    {/* Sezione Confronto Rate per Durata */}
    <div className="mt-8   rounded-xl">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">📈</span>
        <h2 className="text-xl font-semibold text-gray-800">
          Confronto rate per durata
        </h2>
      </div>
      
      <p className="text-sm text-gray-600 mb-6">
        Vedi come cambia la rata mensile in base alla durata del mutuo
      </p>

      <div className="space-y-4">
        {/* 10 anni */}
        <div className="bg-white p-4 rounded-lg border border-gray-100 hover:shadow-md transition-all duration-200">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-900">10 anni</span>
              <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">
                Rata più alta
              </span>
            </div>
            <span className="text-lg font-bold text-gray-900">
              € {esempioCalc[10]?.toLocaleString('it-IT')}
            </span>
          </div>
          <div className="relative">
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-red-400 to-red-500 rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: `${(esempioCalc[10] / Math.max(...Object.values(esempioCalc))) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>

        {/* 15 anni */}
        <div className="bg-white p-4 rounded-lg border border-gray-100 hover:shadow-md transition-all duration-200">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-900">15 anni</span>
            </div>
            <span className="text-lg font-bold text-gray-900">
              € {esempioCalc[15]?.toLocaleString('it-IT')}
            </span>
          </div>
          <div className="relative">
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full transition-all duration-1000 ease-out delay-100"
                style={{
                  width: `${(esempioCalc[15] / Math.max(...Object.values(esempioCalc))) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>

        {/* 20 anni */}
        <div className="bg-white p-4 rounded-lg border border-gray-100 hover:shadow-md transition-all duration-200">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-900">20 anni</span>
            </div>
            <span className="text-lg font-bold text-gray-900">
              € {esempioCalc[20]?.toLocaleString('it-IT')}
            </span>
          </div>
          <div className="relative">
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-1000 ease-out delay-200"
                style={{
                  width: `${(esempioCalc[20] / Math.max(...Object.values(esempioCalc))) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>

        {/* 25 anni */}
        <div className="bg-white p-4 rounded-lg border border-gray-100 hover:shadow-md transition-all duration-200">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-900">25 anni</span>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                Equilibrato
              </span>
            </div>
            <span className="text-lg font-bold text-gray-900">
              € {esempioCalc[25]?.toLocaleString('it-IT')}
            </span>
          </div>
          <div className="relative">
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full transition-all duration-1000 ease-out delay-300"
                style={{
                  width: `${(esempioCalc[25] / Math.max(...Object.values(esempioCalc))) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>

        {/* 30 anni */}
        <div className="bg-white p-4 rounded-lg border border-gray-100 hover:shadow-md transition-all duration-200">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-900">30 anni</span>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                Rata più bassa
              </span>
            </div>
            <span className="text-lg font-bold text-gray-900">
              € {esempioCalc[30]?.toLocaleString('it-IT')}
            </span>
          </div>
          <div className="relative">
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full transition-all duration-1000 ease-out delay-400"
                style={{
                  width: `${(esempioCalc[30] / Math.max(...Object.values(esempioCalc))) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Nota informativa */}
      <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
        <p className="text-sm text-blue-800">
          💡 <strong>Ricorda:</strong> Una durata più lunga significa rate più basse ma maggiori interessi totali da pagare nel tempo.
        </p>
      </div>
    </div>
  </div>
</div>
  );
}
