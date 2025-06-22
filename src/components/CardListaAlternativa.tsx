"use client";
import { Mutuo } from "@/lib/interface";
import React, { useEffect, useState, useReducer } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation"; // CAMBIATO: App Router
import { useMutuo } from "@/Context/MutuoContext";
import FiltroNormale from "./FiltroNormale";
import { InfoPopup, useInfoPopup, InfoButton } from "./PopUpInfo/UseInfo";
import { consulenzaStandard } from "@/action/mutui2.action";
const inter = Inter({
  subsets: ["latin"],
});

export function CardListaAlternativa({
  risultati,
}: {
  risultati: Mutuo[] | null;
}) {
  const { setSelezionato, risultatiNormali, ordinamentoNormale } = useMutuo();
  const { popupState, showPopup, hidePopup, isMobile } = useInfoPopup();

  const router = useRouter();

  const [ordinamento, setOrdinamento] = useState("rata");

  function handleFiltro(stringa: string) {
    setOrdinamento(stringa);
  }

  // fine sessione useffect

  const handleLink = (mutuo: Mutuo) => {
    setSelezionato(mutuo);
    // CAMBIATO: usa una route dinamica che corrisponde alla tua struttura [mutuo]
    // Puoi usare l'ID del mutuo o un slug generato
    router.push(`/${mutuo.id}`);
  };

  // Helper function per formattare il tasso
  const formatTasso = (tasso: number | string): string => {
    if (typeof tasso === "number") {
      return tasso < 1
        ? `${(tasso * 100).toFixed(2).replace(".", ",")}%`
        : `${tasso.toFixed(2).replace(".", ",")}%`;
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

  if (!risultatiNormali || risultatiNormali.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">
          Nessun mutuo trovato con i criteri selezionati
        </p>
      </div>
    );
  }

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
      <InfoPopup
        isMobile={isMobile}
        isOpen={popupState.isOpen}
        info={popupState.info}
        position={popupState.position}
        onClose={hidePopup}
      />
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Risultati Mutui</h2>
        <span className="text-sm text-gray-500">
          {risultatiNormali.length > 1
            ? `${risultatiNormali.length} mutui trovati`
            : `${risultatiNormali.length} mutuo trovato`}
        </span>
      </div>
      <div className="bg-white rounded-lg  border-gray-200 flex flex-col gap-3">
        {/* Header */}
        <FiltroNormale handleFiltro={handleFiltro} />

        {risultatiNormali.map((mutuo, index) => {
          const esistonoTag =
            mutuo.soloClassiAB || mutuo.consap || mutuo.eta?.maxUnder36
              ? true
              : false;

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
              <div className={`flex p-4 ${esistonoTag ? "pb-3" : "pb-2"}`}>
                <div
                  className={`flex flex-col flex-1   lg:gap-0 ${
                    esistonoTag ? "gap-2" : "gap-"
                  }`}
                >
                  {/* Logo e info banca */}
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

                  {/* Badges compatti */}
                  <div className="flex items-end gap-2 flex-shrink-0">
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
                    {ordinamentoNormale == "rata totale" ? (
                      <>
                        <p className="text-xs flex items-center justify-center  font-medium text-gray-600 mb-0.5">
                          Rata totale
                        </p>
                        <p className="text-lg font-bold text-blue-600 leading-tight">
                          {formatRata(mutuo.rataTotale)}
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="text-xs flex items-center justify-center  font-medium text-gray-600 mb-0.5">
                          Rata
                          <InfoButton field="rata" onShow={showPopup} />
                        </p>
                        <p className="text-lg font-bold text-blue-600 leading-tight">
                          {formatRata(mutuo.rataMensile)}
                        </p>
                      </>
                    )}
                  </div>

                  <div className="bg-green-50 p-2.5 rounded-md text-center">
                    <p className=" flex justify-center items-center text-xs font-medium text-gray-600 mb-0.5">
                      <span className="hidden sm:inline">Tasso fisso</span>
                      <span className="sm:hidden flex items-center justify-center ">
                        Tasso
                      </span>
                      <InfoButton field="tasso" onShow={showPopup} />
                    </p>
                    <p className="text-lg font-bold text-green-600 leading-tight">
                      {formatTasso(mutuo.tassoScelto)}
                    </p>
                  </div>

                  {mutuo.taeg && (
                    <div className="bg-orange-50 p-2.5 rounded-md text-center">
                      <p className="text-xs flex items-center justify-center font-medium text-gray-600 mb-0.5">
                        TAEG
                        <InfoButton field="taeg" onShow={showPopup} />
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
                    {ordinamentoNormale == "rata totale" ? (
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
                      <span className="font-medium">
                        {mutuo.durataAnni} anni
                      </span>
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
                        <div className="flex items-center">
                          <span>Costi iniziali </span>

                          <InfoButton field="costiMisti" onShow={showPopup} />
                        </div>
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
                            <span className="text-gray-600">
                              Spese perizia:
                            </span>
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
                                  mutuo.assicurazioniObbligatorie
                                    .costoStimatoVita
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
                    className="text-blue-600 hover:text-blue-700 font-medium transition-colors  focus:border-b-[1px] border-blue-600"
                  >
                    Dettagli →
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
