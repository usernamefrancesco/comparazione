"use client";
import { FormDataMutuo, mediaScore, sortLista } from "@/action/mutui.action";
import { Mutuo, ScoreGenerale } from "@/lib/interface";
import MediaScore from "./MediaScore";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

import { useRouter } from "next/navigation"; // CAMBIATO: usa next/navigation per App Router
import { useMutuo } from "@/Context/MutuoContext"; // CAMBIATO: path corretto
import FiltroOrdinamento, { OrdinamentoTipo } from "./FiltroOrdinamento";

const inter = Inter({
  subsets: ["latin"],
});

export function ListaMutuiAv({ risultati }: { risultati: Mutuo[] | null }) {
  const { setSelezionato, scoreMedio, ordinamento } = useMutuo();
  const [listaOrdinata, setListaOrdinata] = useState<Mutuo[] | null>(null);
  const [filtro, setFiltro] = useState("rata");
  const router = useRouter();

  useEffect(() => {
    async function handleMediaSort() {
      if (!risultati) {
        console.warn("errore handleMediaSort lista av");
        return;
      }
      const nuovaLista = await sortLista(risultati, filtro); // ok usare server action

      if (!nuovaLista) {
        console.warn("Mutui lista av non va");
      } else {
      }
      setListaOrdinata(nuovaLista!);
    }
    handleMediaSort();
  }, [risultati, filtro]);

  function handleFiltro(nomeFiltro: OrdinamentoTipo) {
    setFiltro(nomeFiltro);
  }

  const handleLink = (mutuo: Mutuo) => {
    setSelezionato(mutuo);
    // CAMBIATO: usa una route dinamica che corrisponde alla tua struttura [mutuo]
    // Puoi usare l'ID del mutuo o un slug generato
    router.push(`/avanzata/${mutuo.id}`);
  };

  // Helper function per formattare il tasso
  const formatTasso = (tasso: number | string): string => {
    if (typeof tasso === "number") {
      return tasso < 1
        ? `${(tasso * 100).toFixed(2).replace('.', ',')}%`
        : `${tasso.toFixed(2).replace('.', ',')}%`;
    }
    return typeof tasso === "string" ? `${tasso}%` : `${tasso}%`;
  };

  // Helper function per formattare la rata
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

  function colorsMutuo(mutuo: Mutuo) {
    const classiAlte = mutuo.soloClassiAB
      ? "border-l-4 border-l-green-500 border-r border-t border-b border-gray-200"
      : "";
    const mutuoUnder =
      mutuo.eta.maxUnder36 && !mutuo.soloClassiAB
        ? "border-l-4 border-l-purple-500 border-r border-t border-b border-gray-200"
        : "";

    if (classiAlte) return classiAlte;
    if (mutuoUnder) return mutuoUnder;
  }


  return (
    <div className="space-y-3 pt-3">
      <div className=" rounded-xl  mb-6 space-y-4">
        {/* Header section */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">
            Risultati Mutui
          </h2>
          <span className="text-sm text-gray-500">
            {listaOrdinata.length > 1
              ? `${listaOrdinata.length} mutui trovati`
              : `${listaOrdinata.length} mutuo trovato`}
          </span>
        </div>

        {/* Controls in horizontal layout */}
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 lg:w-1/2">
            <FiltroOrdinamento handleFiltro={handleFiltro} />
          </div>
          <div className="lg:h-full  lg:w-1/2">
            <MediaScore scoreMedio={scoreMedio} />
          </div>
        </div>
      </div>
      {listaOrdinata.map((mutuo, index) => {
          const esistonoTag = mutuo.soloClassiAB || mutuo.consap || mutuo.eta?.maxUnder36 ? true : false
        const scoreColors = getScoreColor(mutuo.score);
        const speseMensiliTot =
          mutuo.incassoRata.importo +
          mutuo.costoGestionePratica.importo +
          (mutuo.altriTipiSpese.annuali ? 0 : mutuo.altriTipiSpese.importo) +
          (mutuo.assicurazioniObbligatorie.assicurazioneVitaMensile
            ? mutuo.assicurazioniObbligatorie.costoStimatoVita
            : 0);
        return (
          <div
            key={`${mutuo.banca}-${mutuo.nomeProdotto}-${index}`}
            className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border ${colorsMutuo(
              mutuo
            )} ${inter.className} relative overflow-hidden`}
          >
            {/* Header compatto */}
            <div className={`flex p-4  lg:px-4 lg:pt-2 ${esistonoTag ? 'pb-3': 'pb-2'}`}>
              <div className={`flex flex-col flex-1  lg:gap-0 ${esistonoTag ? 'gap-2': 'gap-0'}`}>
                {/* Logo e info banca */}
                <div className="flex justify-between items-start lg:items-center gap-4">
                  {/* Sezione sinistra: Logo e info */}
                  <div className="flex flex-col lg:flex-row lg:items-center gap-2 min-w-0 flex-1">
                    {/* Logo e score mobile */}
                    <div className=" flex items-center  lg:flex-col lg:gap-0 justify-between pt-1">
                      <div className="flex-shrink-0 ">
                        <Image
                          src={mutuo.immagineBanca}
                          height={40}
                          width={120}
                          alt={`Logo ${mutuo.banca}`}
                          className="object-contain"
                        />
                      </div>

                      {/* Score mobile - visibile solo su mobile */}
                      <div
                        className={`${scoreColors.bg} ${scoreColors.border} absolute right-2 top-1 border-2 rounded-lg px-3 py-1.5 text-center flex-shrink-0 lg:hidden`}
                      >
                        <div className="text-xs font-medium text-gray-600">
                          Score
                        </div>
                        <div
                          className={`text-sm font-bold ${scoreColors.text} leading-tight`}
                        >
                          {mutuo.score}
                          <span className="text-xs text-gray-500 font-normal">
                            /100
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Info prodotto */}
                    <div className="min-w-0 flex-1 pt-3 lg:pt-0">
                      <h3 className="font-semibold text-sm text-gray-900 leading-tight whitespace-normal break-words uppercase">
                        {mutuo.nomeProdotto}
                      </h3>
                      <p className="text-xs text-gray-500 mt-0.5 truncate">
                        {mutuo.banca}
                      </p>
                    </div>
                  </div>

                  {/* Score desktop - visibile solo su desktop */}
                  <div
                    className={`${scoreColors.bg} ${scoreColors.border} border-2 rounded-lg px-4 py-2 text-center min-w-[80px] hidden lg:block flex-shrink-0`}
                  >
                    <div className="text-xs font-medium text-gray-600 mb-1">
                      Score
                    </div>
                    <div className={`text-2xl font-bold ${scoreColors.text}`}>
                      {mutuo.score}
                    </div>
                    <div className="text-xs text-gray-500">/100</div>
                  </div>
                </div>

                {/* Badges compatti */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  {mutuo.soloClassiAB && (
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-medium">
                      🌱 Green
                    </span>
                  )}
                  {mutuo.eta?.maxUnder36 && (
                    <span className="bg-purple-100 text-purple-700 text-xs px-2 py-0.5 rounded-full font-medium">
                      👥 Under 36
                    </span>
                  )}
                  {mutuo.consap && (
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full font-medium">
                      🏛️ Consap
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Metriche principali - layout orizzontale compatto */}
            <div className="px-4 pb-3">
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-blue-50 p-2.5 rounded-md text-center">
                  {ordinamento == "rata totale" ? (
                    <>
                      <p className="text-xs font-medium text-gray-600 mb-0.5">
                        Rata totale
                      </p>
                      <p className="text-lg font-bold text-blue-600 leading-tight">
                        {formatRata(mutuo.rataTotale)}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-xs font-medium text-gray-600 mb-0.5">
                        Rata
                      </p>
                      <p className="text-lg font-bold text-blue-600 leading-tight">
                        {formatRata(mutuo.rataMensile)}
                      </p>
                    </>
                  )}
                </div>

                <div className="bg-green-50 p-2.5 rounded-md text-center">
                  <p className="text-xs font-medium text-gray-600 mb-0.5">
                    Tasso fisso
                  </p>
                  <p className="text-lg font-bold text-green-600 leading-tight">
                    {formatTasso(mutuo.tassoScelto)}
                  </p>
                </div>

                {mutuo.taeg && (
                  <div className="bg-orange-50 p-2.5 rounded-md text-center">
                    <p className="text-xs font-medium text-gray-600 mb-0.5">
                      TAEG
                    </p>
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
                  {ordinamento == "rata totale" ? (
                    <>
                      <span className="text-gray-600">Rata mensile:</span>
                      <span className="font-medium">
                        {formatRata(mutuo.rataMensile)}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-gray-600">Rata totale:</span>
                      <span className="font-medium">
                        {formatRata(mutuo.rataTotale)}
                      </span>
                    </>
                  )}
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Importo:</span>
                  <span className="font-medium">
                    {formImporto(mutuo.importoMutuo)}
                  </span>
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
                    <span className="font-medium">
                      {mutuo.eta.minima || "N/A"} - {mutuo.eta.massima} anni
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Costi accessori - sezione collassabile visivamente */}
            {(mutuo.spesePerizia ||
              mutuo.speseIstruttoria ||
              mutuo.impostaSostitutiva) && (
              <div className="px-4  text-sm pt-1">
                {/* Costi una tantum */}
                {(mutuo.spesePerizia ||
                  mutuo.speseIstruttoria ||
                  mutuo.impostaSostitutiva) && (
                  <div className="mb-3">
                    <h4 className="font-semibold text-gray-800  flex justify-between">
                      <span>Costi iniziali:</span>
                      <span className="text-blue-600">
                        +
                        {formatRata(
                          mutuo.totaliCostiExtra -
                            mutuo.assicurazioniObbligatorie.costoStimatoCasa
                        )}
                      </span>
                    </h4>
                    <div className="bg-white rounded-lg pl-2 pt-2 space-y-1 text-xs">
                      {mutuo.spesePerizia && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Spese perizia:</span>
                          <span className="font-semibold">
                            {mutuo.spesePerizia.importo === 0 ? (
                              <span className="text-green-600">Gratis</span>
                            ) : (
                              formatRata(mutuo.spesePerizia.importo)
                            )}
                          </span>
                        </div>
                      )}
                      {mutuo.speseIstruttoria && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">
                            Spese istruttoria:
                          </span>
                          <span
                            className={
                              mutuo.speseIstruttoria.importo === 0
                                ? "text-green-600 font-semibold"
                                : "font-semibold"
                            }
                          >
                            {mutuo.speseIstruttoria.importo === 0
                              ? "Gratis"
                              : formatRata(mutuo.speseIstruttoria.importo)}
                          </span>
                        </div>
                      )}
                      {mutuo.impostaSostitutiva && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">
                            Imposta sostitutiva:
                          </span>
                          <span className="font-semibold">
                            {formatRata(mutuo.impostaSostitutiva.importo)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Costi mensili */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800  flex justify-between">
                    <span>Costi mensili aggiuntivi</span>
                    <span className="text-blue-600">
                      +{formatRata(speseMensiliTot)}/mese
                    </span>
                  </h4>
                  <div className="bg-white rounded-lg pl-2 pt-2 space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Incasso rata:</span>
                      <span className="font-semibold">
                        {formatRata(mutuo.incassoRata.importo)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Gestione pratica:</span>
                      <span className="font-semibold">
                        {mutuo.costoGestionePratica.esiste
                          ? formatRata(mutuo.costoGestionePratica.importo)
                          : "Azzerato"}
                      </span>
                    </div>
                    {mutuo.assicurazioniObbligatorie.assicurazioneVita && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          Assicurazione vita:
                        </span>
                        <span className="font-semibold">
                          {mutuo.assicurazioniObbligatorie
                            .assicurazioneVitaMensile
                            ? formatRata(
                                mutuo.assicurazioniObbligatorie.costoStimatoVita
                              )
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
                <button
                  onClick={() => handleLink(mutuo)}
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors focus:border-b-[1px] border-blue-600"
                >
                  Dettagli →
                </button>
              </div> 
            </div>
          </div>
        );
      })}
    </div>
  );
}
