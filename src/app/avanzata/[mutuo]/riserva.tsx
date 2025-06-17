"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMutuo } from "@/Context/MutuoContext";
import { ReactElement } from "react";
import {
  CheckCircle,
  XCircle,
  ArrowLeft,
  Star,
  Euro,
  Calendar,
  Percent,
  Home,
  Shield,
  AlertCircle,
  Info,
  Banknote,
  TrendingUp,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { trovaMutuo } from "@/action/mutui2.action";
import { use } from "react";
import Disclaimer from "@/components/Disclamair";

interface PageProps {
  params: Promise<{
    mutuoId: string;
  }>;
}

export default function Gemini2({ params }: PageProps) {
  const { mutuoId } = use(params);
  const { selezionato, setSelezionato } = useMutuo();
  const router = useRouter();

  useEffect(() => {
    // Chiave per il sessionStorage basata sull'ID del mutuo
    const storageKey = `mutuo_${mutuoId}`;

    if (!selezionato) {
      // Prima prova a recuperare i dati dal sessionStorage
      try {
        const storedData = sessionStorage.getItem(storageKey);
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          setSelezionato(parsedData);
          return; // Non fare la chiamata API se i dati sono già salvati
        }
      } catch (error) {
        console.error("Errore nel recupero dei dati salvati:", error);
      }

      // Se non ci sono dati salvati, carica i dati di default
      async function defaultMutuo() {
        try {
          const result = await trovaMutuo(mutuoId);
          if (result) {
            setSelezionato(result);
            // Salva i dati nel sessionStorage per il prossimo refresh
            sessionStorage.setItem(storageKey, JSON.stringify(result));
          }
        } catch (error) {
          console.error("Errore nel caricamento del mutuo:", error);
        }
      }
      defaultMutuo();
    } else {
      // Se i dati sono già presenti nel context, salvali nel sessionStorage
      try {
        sessionStorage.setItem(storageKey, JSON.stringify(selezionato));
      } catch (error) {
        console.error("Errore nel salvataggio dei dati:", error);
      }
    }
  }, [selezionato, mutuoId, setSelezionato]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  

  const formatCurrencyEuroPrefix = (amount: number) => {
    const formatter = new Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
    const parts = formatter.formatToParts(amount);

    // Estrai le parti relative al numero (integer, group, decimal, fraction)
    const numberParts = parts
      .filter((p) => p.type !== "currency" && p.type !== "literal")
      .map((p) => p.value)
      .join("");

    // Prendi il simbolo della valuta
    const currencyPart = parts.find((p) => p.type === "currency")?.value ?? "€";

    // Ricostruisci: simbolo + spazio + numero
    return `${currencyPart} ${numberParts}`;
  };

  const formatTasso = (tasso: number | string) => {
    if (typeof tasso === "number") {
      return tasso < 1
        ? `${(tasso * 100).toFixed(2)}%`
        : `${tasso.toFixed(2)}%`;
    }
    return `${tasso}%`;
  };

  if (!selezionato) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-500 text-sm">Caricamento mutuo...</p>
        </div>
      </div>
    );
  }
  const speseMensiliTot =
          selezionato.incassoRata.importo +
          selezionato.costoGestionePratica.importo +
          (selezionato.altriTipiSpese.annuali ? 0 : selezionato.altriTipiSpese.importo) +
          (selezionato.assicurazioniObbligatorie.assicurazioneVitaMensile
            ? selezionato.assicurazioniObbligatorie.costoStimatoVita
            : 0);

  // Score Badge Component
  const ScoreBadge = ({ score }: { score: number }) => {
    const getScoreColor = (score: number) => {
      if (score >= 8) return "text-green-600 bg-green-50";
      if (score >= 6) return "text-yellow-600 bg-yellow-50";
      return "text-red-600 bg-red-50";
    };

    return (
      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-sm font-medium ${getScoreColor(score)}`}>
        <Star className="w-3 h-3 fill-current" />
        {score}/100
      </span>
    );
  };

  // Tag Component
  const Tag = ({ children, emoji }: { children: React.ReactNode; emoji?: string }) => (
    <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
      {emoji && <span>{emoji}</span>}
      {children}
    </span>
  );

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="max-w-4xl mx-auto py-8 px-6 lg:px-8">
        
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 text-sm mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Torna ai risultati
        </button>

        {/* Header */}
        <div className="mb-16">
          <div className="flex flex-col items-start gap-6 mb-6">
            <div className="w- h-16  rounded-lg flex items-center justify-center p-2 flex-shrink-0">
              <Image
                src={selezionato.immagineBanca}
                height={100}
                width={200}
                alt={`Logo ${selezionato.banca}`}
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                {selezionato.nomeProdotto}
              </h1>
              <p className="text-sm text-gray-600 mb-4">{selezionato.banca}</p>
              <div className="flex items-end gap-2 flex-shrink-0 pb-1">
                  {selezionato.soloClassiAB && (
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-medium">
                      🌱 Green
                    </span>
                  )}
                  {selezionato.consap && (
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full font-medium">
                      🏛️ Consap
                    </span>
                  )}
                  {selezionato.eta?.maxUnder36 && (
                    <span className="bg-purple-100 text-purple-700 text-xs px-2 py-0.5 rounded-full font-medium">
                      👥 Under 36
                    </span>
                  )}
                </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          
          {/* Informazioni principali */}
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Euro className="w-5 h-5 text-gray-400" />
              Dettagli del finanziamento
            </h2>
            
            <div className="flex justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {formatCurrency(selezionato.importoMutuo)}
                </div>
                <div className="text-sm text-gray-500">Importo mutuo</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {selezionato.durataAnni} anni
                </div>
                <div className="text-sm text-gray-500">Durata</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  {formatTasso(selezionato.tassoScelto)}
                </div>
                <div className="text-sm text-gray-500">Tasso fisso</div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-base">
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Rata mensile</span>
                <span className="font-semibold text-gray-900">{formatCurrency(selezionato.rataMensile)}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600 font-semibold">Rata totale</span>
                <span className="font-semibold text-gray-900">{formatCurrency(selezionato.rataTotale)}</span>
              </div>
              {selezionato.taeg && (
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">TAEG</span>
                  <span className="font-semibold text-gray-900">{formatTasso(selezionato.taeg)}</span>
                </div>
              )}
              {selezionato.ltvMutuo && (
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">LTV</span>
                  <span className="font-semibold text-gray-900">{selezionato.ltvMutuo}%</span>
                </div>
              )}
              {selezionato.totaleDaRimborsare && (
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Totale interessi</span>
                  <span className="font-semibold text-gray-900">{formatCurrency(selezionato.totaleDaRimborsare)}</span>
                </div>
              )}
            </div>
          </section>

          {/* Costi */}
          <div className="px-4  text-sm pt-3">
                {/* Costi una tantum */}
                {(selezionato.spesePerizia ||
                  selezionato.speseIstruttoria ||
                  selezionato.impostaSostitutiva) && (
                  <div className="mb-3">
                    <h4 className="font-semibold text-gray-800  flex justify-between">
                      <span>Costi iniziali:</span>
                      <span className="text-blue-600">
                        +
                        {formatCurrency(
                          selezionato.totaliCostiExtra)}
                      </span>
                    </h4>
                    <div className="bg-white rounded-lg pl-2 pt-2 space-y-1 text-xs">
                      {selezionato.spesePerizia && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Spese perizia:</span>
                          <span className="font-semibold">
                            {selezionato.spesePerizia.importo === 0 ? (
                              <span className="text-green-600">Gratis</span>
                            ) : (
                              formatCurrency(selezionato.spesePerizia.importo)
                            )}
                          </span>
                        </div>
                      )}
                      {selezionato.speseIstruttoria && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">
                            Spese istruttoria:
                          </span>
                          <span
                            className={
                              selezionato.speseIstruttoria.importo === 0
                                ? "text-green-600 font-semibold"
                                : "font-semibold"
                            }
                          >
                            {selezionato.speseIstruttoria.importo === 0
                              ? "Gratis"
                              : formatCurrency(selezionato.speseIstruttoria.importo)}
                          </span>
                        </div>
                      )}
                      {selezionato.impostaSostitutiva && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">
                            Imposta sostitutiva:
                          </span>
                          <span className="font-semibold">
                            {formatCurrency(selezionato.impostaSostitutiva.importo)}
                          </span>
                        </div>
                      )}

{selezionato.impostaSostitutiva && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">
                            Assicurazione incendio e scoppio:
                          </span>
                          <span className="font-semibold">
                            {formatCurrency(Math.round(selezionato.assicurazioniObbligatorie.costoStimatoCasa/10)*10)}
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
                      +{formatCurrency(speseMensiliTot)}/mese
                    </span>
                  </h4>
                  <div className="bg-white rounded-lg pl-2 pt-2 space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Incasso rata:</span>
                      <span className="font-semibold">
                        {formatCurrency(selezionato.incassoRata.importo)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Gestione pratica:</span>
                      <span className="font-semibold">
                        {selezionato.costoGestionePratica.esiste
                          ? formatCurrency(selezionato.costoGestionePratica.importo)
                          : "Azzerato"}
                      </span>
                    </div>
                    {selezionato.assicurazioniObbligatorie.assicurazioneVita && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          Assicurazione vita:
                        </span>
                        <span className="font-semibold">
                          {selezionato.assicurazioniObbligatorie
                            .assicurazioneVitaMensile
                            ? formatCurrency(
                                selezionato.assicurazioniObbligatorie.costoStimatoVita
                              )
                            : `${selezionato.assicurazioniObbligatorie.costoStimatoVita}`}
                        </span>
                      </div>
                    )}
                    {selezionato.altriTipiSpese.importo !== 0 && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Altri costi:</span>
                        <span className="font-semibold">
                          {formatCurrency(selezionato.altriTipiSpese.importo)}
                          {selezionato.altriTipiSpese.annuali ? "/anno" : "/mese"}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

          {/* Requisiti */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Info className="w-6 h-6 text-gray-400" />
              Requisiti e condizioni
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {selezionato.eta && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <h3 className="font-semibold text-gray-900">Età</h3>
                  </div>
                  <div className="text-gray-600 space-y-1">
                    <div>Da {selezionato.eta.minima || 18} anni</div>
                    <div>Fino a {selezionato.eta.massima} anni</div>
                    {selezionato.eta.maxUnder36 && (
                      <Tag emoji="👥">Vantaggi Under 36</Tag>
                    )}
                  </div>
                </div>
              )}

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Home className="w-5 h-5 text-gray-400" />
                  <h3 className="font-semibold text-gray-900">Immobile</h3>
                </div>
                <div className="text-gray-600">
                  {selezionato.soloClassiAB ? (
                    <div>
                      <div className="font-medium text-emerald-700 mb-1">Solo classi A e B</div>
                      <div className="text-sm text-gray-500">Sconti per alta efficienza energetica</div>
                    </div>
                  ) : (
                    <div className="font-medium text-green-700">Tutte le classi energetiche</div>
                  )}
                </div>
              </div>

              {selezionato.assicurazioniObbligatorie && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="w-5 h-5 text-gray-400" />
                    <h3 className="font-semibold text-gray-900">Assicurazioni</h3>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      {selezionato.assicurazioniObbligatorie.assicurazioneCasa ? (
                        <CheckCircle className="w-4 h-4 text-red-500" />
                      ) : (
                        <XCircle className="w-4 h-4 text-green-500" />
                      )}
                      <span>
                        Incendio e scoppio: {selezionato.assicurazioniObbligatorie.assicurazioneCasa ? "Obbligatoria" : "Non obbligatoria"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {selezionato.assicurazioniObbligatorie.assicurazioneVita ? (
                        <CheckCircle className="w-4 h-4 text-red-500" />
                      ) : (
                        <XCircle className="w-4 h-4 text-green-500" />
                      )}
                      <span>
                        Vita: {selezionato.assicurazioniObbligatorie.assicurazioneVita ? "Obbligatoria" : "Facoltativa"}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Note sulle assicurazioni */}
            {selezionato.assicurazioniObbligatorie?.assicurazioneVita && (
              <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-400 text-sm text-amber-800">
                <p className="font-medium mb-1">⚠️ Assicurazione vita obbligatoria</p>
                <p>L'assicurazione sulla vita è obbligatoria per accedere a questo mutuo. Il costo riportato è indicativo.</p>
              </div>
            )}
          </section>

          {/* Vantaggi e Limitazioni */}
          {((selezionato.proMutuo && selezionato.proMutuo.length > 0) ||
            (selezionato.controMutuo && selezionato.controMutuo.length > 0)) && (
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-gray-400" />
                Vantaggi e limitazioni
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {selezionato.proMutuo && selezionato.proMutuo.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Vantaggi
                    </h3>
                    <ul className="space-y-3">
                      {selezionato.proMutuo.map((pro, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{pro.descrizione}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selezionato.controMutuo && selezionato.controMutuo.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-600" />
                      Limitazioni
                    </h3>
                    <ul className="space-y-3">
                      {selezionato.controMutuo.map((contro, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{contro.descrizione}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Score Pratica */}
          {(selezionato.praticaScore?.pro?.length > 0 || selezionato.praticaScore?.contro?.length > 0) && (
            <section>
              <div className="flex items-center gap-2 pb-6">
              <h2 className="text-2xl font-bold text-gray-900  flex items-center gap-3">
                <Star className="w-6 h-6 text-gray-400" />
                Valutazione della pratica
              </h2>
              {ScoreBadge({score: selezionato.score})}

              </div>
              
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {selezionato.praticaScore.pro && selezionato.praticaScore.pro.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Elementi positivi
                    </h3>
                    <ul className="space-y-3">
                      {selezionato.praticaScore.pro.map((pro, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selezionato.praticaScore.contro && selezionato.praticaScore.contro.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-600" />
                      Elementi da considerare
                    </h3>
                    <ul className="space-y-3">
                      {selezionato.praticaScore.contro.map((contro, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{contro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Disclaimer */}
          <Disclaimer />

     
        </div>
      </div>
    </div>
  );
}