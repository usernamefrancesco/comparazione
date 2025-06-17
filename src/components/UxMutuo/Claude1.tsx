"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMutuo } from "@/Context/MutuoContext";
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
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { trovaMutuo } from "@/action/mutui2.action";

interface PageProps {
  params: {
    mutuo: string;
  };
}

export default function MutuoSingolo() {
  const { selezionato, setSelezionato } = useMutuo();
  const router = useRouter();

  useEffect(() => {
    if (!selezionato) {
      async function defaultMutuo() {
        const result = await trovaMutuo('1');
        setSelezionato(result!);
      }
      defaultMutuo();
    }
  }, [selezionato, router]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const formatTasso = (tasso) => {
    if (typeof tasso === "number") {
      return tasso < 1
        ? `${(tasso * 100).toFixed(2)}%`
        : `${tasso.toFixed(2)}%`;
    }
    return typeof tasso === "string" ? `${tasso}%` : `${tasso}%`;
  };

  if (!selezionato) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-500 text-sm">Caricamento...</p>
        </div>
      </div>
    );
  }

  const ScoreBadge = ({ score }) => {
    const getScoreStyle = (score) => {
      if (score >= 8) return "bg-green-50 text-green-700 border-green-200";
      if (score >= 6) return "bg-yellow-50 text-yellow-700 border-yellow-200";
      return "bg-red-50 text-red-700 border-red-200";
    };

    return (
      <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium border ${getScoreStyle(score)}`}>
        <Star className="w-3 h-3" />
        {score}/10
      </div>
    );
  };

  const Badge = ({ children, variant = "default" }) => {
    const variants = {
      default: "bg-gray-100 text-gray-700",
      green: "bg-green-100 text-green-700",
      blue: "bg-blue-100 text-blue-700",
      purple: "bg-purple-100 text-purple-700",
    };

    return (
      <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${variants[variant]}`}>
        {children}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header minimalista */}
        <div className="border-b border-gray-100 px-6 py-4">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Torna ai risultati
          </button>

          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
                <Image
                  src={selezionato.immagineBanca}
                  height={40}
                  width={120}
                  alt={`Logo ${selezionato.banca}`}
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-gray-900 mb-1">
                  {selezionato.nomeProdotto}
                </h1>
                <p className="text-gray-500">{selezionato.banca}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              {selezionato.score && <ScoreBadge score={selezionato.score} />}
              <div className="flex gap-2">
                {selezionato.soloClassiAB && <Badge variant="green">Green</Badge>}
                {selezionato.consap && <Badge variant="blue">Consap</Badge>}
                {selezionato.eta?.maxUnder36 && <Badge variant="purple">Under 36</Badge>}
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 py-8 space-y-12">
          {/* Informazioni principali - Layout a griglia pulito */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Dettagli del mutuo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Importo */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600 mb-3">
                  <Euro className="w-5 h-5" />
                  <span className="text-sm font-medium">Finanziamento</span>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-2xl font-semibold text-gray-900">
                      {formatCurrency(selezionato.importoMutuo)}
                    </div>
                    <div className="text-xs text-gray-500">Importo mutuo</div>
                  </div>
                  <div>
                    <div className="text-lg font-medium text-gray-900">
                      {selezionato.durataAnni} anni
                    </div>
                    <div className="text-xs text-gray-500">Durata</div>
                  </div>
                  {selezionato.ltvMutuo && (
                    <div>
                      <div className="text-lg font-medium text-gray-900">
                        {selezionato.ltvMutuo}%
                      </div>
                      <div className="text-xs text-gray-500">LTV</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Tassi */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600 mb-3">
                  <Percent className="w-5 h-5" />
                  <span className="text-sm font-medium">Tassi</span>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-2xl font-semibold text-gray-900">
                      {formatTasso(selezionato.tassoFisso)}
                    </div>
                    <div className="text-xs text-gray-500">Tasso fisso</div>
                  </div>
                  {selezionato.taeg && (
                    <div>
                      <div className="text-lg font-medium text-gray-900">
                        {formatTasso(selezionato.taeg)}
                      </div>
                      <div className="text-xs text-gray-500">TAEG</div>
                    </div>
                  )}
                  <div>
                    <div className="text-lg font-medium text-gray-900">
                      {selezionato.tipiTasso || "Fisso"}
                    </div>
                    <div className="text-xs text-gray-500">Tipo tasso</div>
                  </div>
                </div>
              </div>

              {/* Rata */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600 mb-3">
                  <Calendar className="w-5 h-5" />
                  <span className="text-sm font-medium">Pagamenti</span>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-2xl font-semibold text-blue-600">
                      {formatCurrency(selezionato.rataMensile)}
                    </div>
                    <div className="text-xs text-gray-500">Rata mensile</div>
                  </div>
                  <div>
                    <div className="text-lg font-medium text-gray-900">
                      {formatCurrency(selezionato.rataMensile + (selezionato.incassoRata?.importo || 0))}
                    </div>
                    <div className="text-xs text-gray-500">Rata totale</div>
                  </div>
                  {selezionato.totaleDaRimborsare && (
                    <div>
                      <div className="text-lg font-medium text-gray-900">
                        {formatCurrency(selezionato.totaleDaRimborsare)}
                      </div>
                      <div className="text-xs text-gray-500">Totale da rimborsare</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Costi - Sezione semplificata */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Costi accessori</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Spese perizia</span>
                    <span className="font-medium">
                      {selezionato.spesePerizia?.importo > 0
                        ? formatCurrency(selezionato.spesePerizia.importo)
                        : "Gratuita"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Spese istruttoria</span>
                    <span className="font-medium">
                      {selezionato.speseIstruttoria?.importo > 0
                        ? formatCurrency(selezionato.speseIstruttoria.importo)
                        : "Azzerata"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Imposta sostitutiva</span>
                    <span className="font-medium">
                      {selezionato.impostaSostitutiva?.promozione
                        ? "Promozionale"
                        : formatCurrency(selezionato.impostaSostitutiva?.importo || 0)}
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Incasso rata</span>
                    <span className="font-medium">
                      {selezionato.incassoRata?.esiste
                        ? formatCurrency(selezionato.incassoRata.importo)
                        : "Gratuito"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Assicurazioni</span>
                    <span className="font-medium">
                      {formatCurrency(selezionato.assicurazioniObbligatorie?.costoStimato || 0)}/anno
                    </span>
                  </div>
                </div>
              </div>
              
              {selezionato.totaliCostiExtra && (
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">Totale costi accessori</span>
                    <span className="font-semibold text-lg">{formatCurrency(selezionato.totaliCostiExtra)}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Requisiti - Layout orizzontale */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Requisiti e condizioni</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Età */}
              {selezionato.eta && (
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">Età</span>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm">
                      <span className="text-gray-600">Da </span>
                      <span className="font-medium">{selezionato.eta.minima || 18} anni</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-600">Fino a </span>
                      <span className="font-medium">{selezionato.eta.massima} anni</span>
                    </div>
                    {selezionato.eta.maxUnder36 && (
                      <div className="text-xs text-blue-600 mt-2">Vantaggi under 36</div>
                    )}
                  </div>
                </div>
              )}

              {/* Efficienza energetica */}
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Home className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">Immobile</span>
                </div>
                {selezionato.soloClassiAB ? (
                  <div className="space-y-1">
                    <div className="text-sm text-amber-600">Solo classi A e B</div>
                    <div className="text-xs text-gray-500">Sconti per alta efficienza</div>
                  </div>
                ) : (
                  <div className="text-sm text-green-600">Tutte le classi energetiche</div>
                )}
              </div>

              {/* Assicurazioni */}
              {selezionato.assicurazioniObbligatorie && (
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">Assicurazioni</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      {selezionato.assicurazioniObbligatorie.assicurazioneCasa ? (
                        <CheckCircle className="w-3 h-3 text-orange-500 mt-0.5" />
                      ) : (
                        <XCircle className="w-3 h-3 text-gray-400 mt-0.5" />
                      )}
                      <div>
                        <div className="text-xs font-medium">Casa</div>
                        <div className="text-xs text-gray-500">Obbligatoria</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      {selezionato.assicurazioniObbligatorie.assicurazioneVita ? (
                        <CheckCircle className="w-3 h-3 text-orange-500 mt-0.5" />
                      ) : (
                        <XCircle className="w-3 h-3 text-gray-400 mt-0.5" />
                      )}
                      <div>
                        <div className="text-xs font-medium">Vita</div>
                        <div className="text-xs text-gray-500">Facoltativa</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Pro e Contro - Layout semplificato */}
          {((selezionato.proMutuo && selezionato.proMutuo.length > 0) || 
            (selezionato.controMutuo && selezionato.controMutuo.length > 0)) && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Vantaggi e limitazioni</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {selezionato.proMutuo && selezionato.proMutuo.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <h3 className="font-medium text-gray-900">Vantaggi</h3>
                    </div>
                    <div className="space-y-3">
                      {selezionato.proMutuo.map((pro, index) => (
                        <div key={index} className="text-sm text-gray-700 leading-relaxed">
                          {pro.descrizione}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selezionato.controMutuo && selezionato.controMutuo.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <XCircle className="w-5 h-5 text-red-500" />
                      <h3 className="font-medium text-gray-900">Limitazioni</h3>
                    </div>
                    <div className="space-y-3">
                      {selezionato.controMutuo.map((contro, index) => (
                        <div key={index} className="text-sm text-gray-700 leading-relaxed">
                          {contro.descrizione}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Note importanti */}
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-sm font-medium text-blue-900 mb-1">Informazioni importanti</div>
                <div className="text-sm text-blue-800 leading-relaxed">
                  I dati mostrati sono indicativi e possono variare in base alla valutazione del profilo creditizio. 
                  Il TAEG include tutti i costi obbligatori. Per informazioni complete consulta il foglio informativo.
                </div>
                <div className="text-sm text-blue-800 mt-2">
                  <strong>Assicurazioni:</strong> Non sei obbligato a sottoscrivere le polizze con la banca che eroga il mutuo.
                </div>
              </div>
            </div>
          </div>

          {/* CTA finale */}
          <div className="text-center pt-6 border-t border-gray-100">
            <Button 
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium"
            >
              Richiedi Preventivo
            </Button>
            <p className="text-sm text-gray-500 mt-3">
              Contatta {selezionato.banca} per maggiori informazioni
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}