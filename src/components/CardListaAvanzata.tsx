"use client";
import { FormDataMutuo, mediaScore, sortLista } from "@/action/mutui.action";
import { Mutuo, ScoreGenerale } from "@/lib/interface";
import MediaScore from "./MediaScore";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

import { useRouter } from "next/navigation";
import { useMutuo } from "@/Context/MutuoContext";
import FiltroOrdinamento, { OrdinamentoTipo } from "./FiltroOrdinamento";

const inter = Inter({
  subsets: ["latin"],
});

export function CardListaAvanzata({ risultati }: { risultati: Mutuo[] | null }) {
  const { setSelezionato, scoreMedio } = useMutuo();
  const [listaOrdinata, setListaOrdinata] = useState<Mutuo[] | null>(null);
  const [filtro, setFiltro] = useState("rata");
  const [expandedDetails, setExpandedDetails] = useState<Set<string>>(new Set());
  const router = useRouter();

  useEffect(() => {
    async function handleMediaSort() {
      if (!risultati) return;
      const nuovaLista = await sortLista(risultati, filtro);
      setListaOrdinata(nuovaLista);
    }
    handleMediaSort();
  }, [risultati, filtro]);

  function handleFiltro(nomeFiltro: OrdinamentoTipo) {
    setFiltro(nomeFiltro);
  }

  const handleLink = (mutuo: Mutuo) => {
    setSelezionato(mutuo);
    router.push(`/avanzata/${mutuo.id}`);
  };

  const toggleDetails = (mutuoId: string) => {
    const newExpanded = new Set(expandedDetails);
    if (newExpanded.has(mutuoId)) {
      newExpanded.delete(mutuoId);
    } else {
      newExpanded.add(mutuoId);
    }
    setExpandedDetails(newExpanded);
  };

  // Helper functions
  const formatTasso = (tasso: number | string): string => {
    if (typeof tasso === "number") {
      return tasso < 1
        ? `${(tasso * 100).toFixed(2)}%`
        : `${tasso.toFixed(2)}%`;
    }
    return typeof tasso === "string" ? `${tasso}%` : `${tasso}%`;
  };

  const formatRata = (rata: number): string => {
    return new Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(rata);
  };

  const formImporto = (rata: number): string => {
    return new Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
    }).format(rata);
  };

  if (!listaOrdinata || listaOrdinata.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">
          Nessun mutuo trovato con i criteri selezionati
        </p>
      </div>
    );
  }

  const getScoreColor = (score: number) => {
    if (score >= 80)
      return {
        bg: "bg-green-50",
        text: "text-green-700",
        border: "border-green-200",
      };
    if (score >= 60)
      return {
        bg: "bg-yellow-50",
        text: "text-yellow-700",
        border: "border-yellow-200",
      };
    return { bg: "bg-red-50", text: "text-red-700", border: "border-red-200" };
  };

  return (
    <div className="space-y-4">
      <div className="lg:flex justify-between items-center pt-3">
        <FiltroOrdinamento handleFiltro={handleFiltro} />
        <MediaScore scoreMedio={scoreMedio} />
      </div>

      {listaOrdinata.map((mutuo, index) => {
        const scoreColors = getScoreColor(mutuo.score);
        const mutuoKey = `${mutuo.banca}-${mutuo.nomeProdotto}-${index}`;
        const isExpanded = expandedDetails.has(mutuoKey);
        const speseMensiliTot = mutuo.incassoRata.importo + mutuo.costoGestionePratica.importo + 
          (mutuo.altriTipiSpese.annuali ? 0 : mutuo.altriTipiSpese.importo) + 
          (mutuo.assicurazioniObbligatorie.assicurazioneVitaMensile ? mutuo.assicurazioniObbligatorie.costoStimatoVita : 0);

        return (
          <div
            key={mutuoKey}
            className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border ${
              mutuo.soloClassiAB
                ? "border-l-4 border-l-green-500 border-r border-t border-b border-gray-200"
                : "border-gray-200"
            } ${inter.className} relative overflow-hidden`}
          >
            {/* Header principale */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                {/* Info banca */}
                <div className="flex items-center gap-4 min-w-0 flex-1">
                  <div className="flex-shrink-0">
                    <Image
                      src={mutuo.immagineBanca}
                      height={45}
                      width={140}
                      alt={`Logo ${mutuo.banca}`}
                      className="object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-xl text-gray-900 leading-tight mb-1">
                      {mutuo.nomeProdotto}
                    </h3>
                    <p className="text-sm text-gray-600 font-medium">
                      {mutuo.banca}
                    </p>
                  </div>
                </div>

                {/* Score principale */}
                <div
                  className={`${scoreColors.bg} ${scoreColors.border} border-2 rounded-xl px-6 py-4 text-center min-w-[100px] shadow-sm`}
                >
                  <div className="text-xs font-semibold text-gray-600 mb-1">
                    SCORE
                  </div>
                  <div className={`text-3xl font-bold ${scoreColors.text}`}>
                    {mutuo.score}
                  </div>
                  <div className="text-xs text-gray-500">/100</div>
                </div>
              </div>

              {/* Badge informativi */}
              <div className="flex flex-wrap gap-2 mb-6">
                {mutuo.soloClassiAB && (
                  <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full font-semibold border border-green-200">
                    🌱 Mutuo Green
                  </span>
                )}
                {mutuo.consap && (
                  <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-semibold border border-blue-200">
                    🏛️ Fondo Consap
                  </span>
                )}
                {mutuo.eta?.maxUnder36 && (
                  <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full font-semibold border border-purple-200">
                    👥 Under 36
                  </span>
                )}
              </div>

              {/* Informazioni principali - Layout a griglia */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
                  <p className="text-sm font-semibold text-blue-700 mb-1">
                    Rata Mensile
                  </p>
                  <p className="text-2xl font-bold text-blue-800">
                    {formatRata(mutuo.rataMensile)}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
                  <p className="text-sm font-semibold text-green-700 mb-1">
                    Tasso Fisso
                  </p>
                  <p className="text-2xl font-bold text-green-800">
                    {formatTasso(mutuo.tassoScelto)}
                  </p>
                </div>

                {mutuo.taeg && (
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200">
                    <p className="text-sm font-semibold text-orange-700 mb-1">
                      TAEG
                    </p>
                    <p className="text-2xl font-bold text-orange-800">
                      {formatTasso(mutuo.taeg)}
                    </p>
                  </div>
                )}
              </div>

              {/* Informazioni di base */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-600 font-medium">Importo:</span>
                  <p className="font-bold text-gray-900">
                    {formImporto(mutuo.importoMutuo)}
                  </p>
                </div>
                {mutuo.durataAnni && (
                  <div>
                    <span className="text-gray-600 font-medium">Durata:</span>
                    <p className="font-bold text-gray-900">{mutuo.durataAnni} anni</p>
                  </div>
                )}
                {mutuo.eta && (
                  <div>
                    <span className="text-gray-600 font-medium">Età:</span>
                    <p className="font-bold text-gray-900">
                      {mutuo.eta.minima || "N/A"} - {mutuo.eta.massima} anni
                    </p>
                  </div>
                )}
                <div>
                  <span className="text-gray-600 font-medium">Rata totale:</span>
                  <p className="font-bold text-gray-900">
                    {formatRata(mutuo.rataTotale)}
                  </p>
                </div>
              </div>
            </div>

            {/* Sezione espandibile per i dettagli */}
            <div className="border-t border-gray-100 bg-gray-50">
              <button
                onClick={() => toggleDetails(mutuoKey)}
                className="w-full px-6 py-4 text-left hover:bg-gray-100 transition-colors flex justify-between items-center"
              >
                <span className="font-semibold text-gray-700">
                  Dettagli costi e spese
                </span>
                <span className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>

              {isExpanded && (
                <div className="px-6 pb-6">
                  {/* Costi una tantum */}
                  {(mutuo.spesePerizia || mutuo.speseIstruttoria || mutuo.impostaSostitutiva) && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-3">
                        Costi iniziali (una tantum)
                      </h4>
                      <div className="bg-white rounded-lg p-4 space-y-2 text-sm">
                        {mutuo.spesePerizia && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Spese perizia:</span>
                            <span className="font-semibold">
                              {mutuo.spesePerizia.importo === 0 ? 
                                <span className="text-green-600">Gratis</span> : 
                                formatRata(mutuo.spesePerizia.importo)
                              }
                            </span>
                          </div>
                        )}
                        {mutuo.speseIstruttoria && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Spese istruttoria:</span>
                            <span className={mutuo.speseIstruttoria.importo === 0 ? "text-green-600 font-semibold" : "font-semibold"}>
                              {mutuo.speseIstruttoria.importo === 0 ? "Gratis" : formatRata(mutuo.speseIstruttoria.importo)}
                            </span>
                          </div>
                        )}
                        {mutuo.impostaSostitutiva && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Imposta sostitutiva:</span>
                            <span className="font-semibold">{formatRata(mutuo.impostaSostitutiva.importo)}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Costi mensili */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3 flex justify-between">
                      <span>Costi mensili aggiuntivi</span>
                      <span className="text-blue-600">+{formatRata(speseMensiliTot)}/mese</span>
                    </h4>
                    <div className="bg-white rounded-lg p-4 space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Incasso rata:</span>
                        <span className="font-semibold">{formatRata(mutuo.incassoRata.importo)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Gestione pratica:</span>
                        <span className="font-semibold">
                          {mutuo.costoGestionePratica.esiste ? formatRata(mutuo.costoGestionePratica.importo) : "Azzerato"}
                        </span>
                      </div>
                      {mutuo.assicurazioniObbligatorie.assicurazioneVita && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Assicurazione vita:</span>
                          <span className="font-semibold">
                            {mutuo.assicurazioniObbligatorie.assicurazioneVitaMensile
                              ? formatRata(mutuo.assicurazioniObbligatorie.costoStimatoVita)
                              : `${mutuo.assicurazioniObbligatorie.costoStimatoVita}`}
                          </span>
                        </div>
                      )}
                      {mutuo.altriTipiSpese.importo !== 0 && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Altri costi:</span>
                          <span className="font-semibold">
                            {formatRata(mutuo.altriTipiSpese.importo)}
                            {mutuo.altriTipiSpese.annuali ? "/anno" : "/mese"}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-white border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm">
                  {mutuo.speseIstruttoria?.importo === 0 && (
                    <span className="text-green-600 flex items-center gap-2 font-medium">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Istruttoria gratuita
                    </span>
                  )}
                  {mutuo.spesePerizia?.importo === 0 && (
                    <span className="text-green-600 flex items-center gap-2 font-medium">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Perizia gratuita
                    </span>
                  )}
                </div>
                <button
                  onClick={() => handleLink(mutuo)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                >
                  Vedi dettagli →
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}