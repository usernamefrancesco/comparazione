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
  Banknote, // Added for costs
  TrendingUp, // Added for rates
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { trovaMutuo } from "@/action/mutui2.action";

interface PageProps {
  params: {
    mutuo: string;
  };
}

export default function Base({ params }: PageProps) {
  const { selezionato, setSelezionato } = useMutuo();
  const router = useRouter();

  useEffect(() => {
    if (!selezionato) {
      async function defaultMutuo() {
        const result = await trovaMutuo(params.mutuo);
        setSelezionato(result!);
      }
      defaultMutuo();
    }
  }, [selezionato, router, params.mutuo]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(amount);
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
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-500 text-sm">Caricamento mutuo...</p>
        </div>
      </div>
    );
  }

  const ScoreBadge = ({ score }: { score: number }) => {
    const getScoreStyle = (score: number) => {
      if (score >= 8) return "bg-green-100 text-green-800 border-green-200";
      if (score >= 6) return "bg-yellow-100 text-yellow-800 border-yellow-200";
      return "bg-red-100 text-red-800 border-red-200";
    };

    return (
      <div
        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border ${getScoreStyle(
          score
        )}`}
      >
        <Star className="w-3 h-3 fill-current" />
        {score}/10
      </div>
    );
  };

  const Badge = ({
    children,
    variant = "default",
  }: {
    children: React.ReactNode;
    variant?: "default" | "green" | "blue" | "purple";
  }) => {
    const variants = {
      default: "bg-gray-200 text-gray-700",
      green: "bg-teal-100 text-teal-800",
      blue: "bg-sky-100 text-sky-800",
      purple: "bg-indigo-100 text-indigo-800",
    };

    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]}`}
      >
        {children}
      </span>
    );
  };

  const Card = ({
    title,
    icon: Icon,
    children,
  }: {
    title: string;
    icon: React.ElementType;
    children: React.ReactNode;
  }) => (
    <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
      <div className="flex items-center gap-3 text-gray-700 mb-5">
        <Icon className="w-5 h-5 text-gray-500" />
        <h3 className="text-base font-semibold">{title}</h3>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );

  const DetailItem = ({
    label,
    value,
    highlight = false,
  }: {
    label: string;
    value: React.ReactNode;
    highlight?: boolean;
  }) => (
    <div>
      <div
        className={`text-xl font-semibold ${
          highlight ? "text-blue-600" : "text-gray-900"
        }`}
      >
        {value}
      </div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
  );

  const CostItem = ({
    label,
    value,
  }: {
    label: string;
    value: React.ReactNode;
  }) => (
    <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
      <span className="text-sm text-gray-700">{label}</span>
      <span className="font-medium text-gray-800">{value}</span>
    </div>
  );

  const RequirementItem = ({
    title,
    icon: Icon,
    children,
  }: {
    title: string;
    icon: React.ElementType;
    children: React.ReactNode;
  }) => (
    <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-4 h-4 text-gray-500" />
        <span className="text-sm font-medium text-gray-700">{title}</span>
      </div>
      <div className="text-sm text-gray-600 space-y-1">{children}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="max-w-3xl mx-auto py-10 px-6">
        {/* Header Section */}
        <div className="mb-8">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Torna ai risultati
          </button>

          <div className="flex items-start justify-between gap-4 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden border border-gray-200 p-2">
                <Image
                  src={selezionato.immagineBanca}
                  height={50}
                  width={150}
                  alt={`Logo ${selezionato.banca}`}
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-1 leading-tight">
                  {selezionato.nomeProdotto}
                </h1>
                <p className="text-gray-600 text-sm">{selezionato.banca}</p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-3">
              {selezionato.score !== undefined && (
                <ScoreBadge score={selezionato.score} />
              )}
              <div className="flex flex-wrap gap-2 justify-end">
                {selezionato.soloClassiAB && (
                  <Badge variant="green">Green</Badge>
                )}
                {selezionato.consap && <Badge variant="blue">Consap</Badge>}
                {selezionato.eta?.maxUnder36 && (
                  <Badge variant="purple">Under 36</Badge>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card title="Finanziamento" icon={Euro}>
            <DetailItem
              label="Importo mutuo"
              value={formatCurrency(selezionato.importoMutuo)}
            />
            <DetailItem
              label="Durata"
              value={`${selezionato.durataAnni} anni`}
            />
            {selezionato.ltvMutuo && (
              <DetailItem label="LTV" value={`${selezionato.ltvMutuo}%`} />
            )}
          </Card>

          <Card title="Tassi" icon={TrendingUp}>
            <DetailItem
              label="Tasso fisso"
              value={formatTasso(selezionato.tassoFisso)}
            />
            {selezionato.taeg && (
              <DetailItem label="TAEG" value={formatTasso(selezionato.taeg)} />
            )}
            <DetailItem
              label="Tipo tasso"
              value={selezionato.tipiTasso || "Fisso"}
            />
          </Card>

          <Card title="Pagamenti" icon={Calendar}>
            <DetailItem
              label="Rata mensile"
              value={formatCurrency(selezionato.rataMensile)}
              highlight
            />
            <DetailItem
              label="Rata totale"
              value={formatCurrency(
                selezionato.rataMensile +
                  (selezionato.incassoRata?.importo || 0)
              )}
            />
            {selezionato.totaleDaRimborsare && (
              <DetailItem
                label="Totale da rimborsare"
                value={formatCurrency(selezionato.totaleDaRimborsare)}
              />
            )}
          </Card>
        </div>

        

        {/* Accessory Costs */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm mb-8">
          <div className="flex items-center gap-3 text-gray-700 mb-5">
            <Banknote className="w-5 h-5 text-gray-500" />
            <h2 className="text-base font-semibold">Costi accessori</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
            <CostItem
              label="Spese perizia"
              value={
                selezionato.spesePerizia?.importo > 0
                  ? formatCurrency(selezionato.spesePerizia.importo)
                  : "Gratuita"
              }
            />
            <CostItem
              label="Spese istruttoria"
              value={
                selezionato.speseIstruttoria?.importo > 0
                  ? formatCurrency(selezionato.speseIstruttoria.importo)
                  : "Azzerata"
              }
            />
            <CostItem
              label="Imposta sostitutiva"
              value={
                selezionato.impostaSostitutiva?.promozione
                  ? "Promozionale"
                  : formatCurrency(selezionato.impostaSostitutiva?.importo || 0)
              }
            />
            <CostItem
              label="Incasso rata"
              value={
                selezionato.incassoRata?.esiste
                  ? formatCurrency(selezionato.incassoRata.importo)
                  : "Gratuito"
              }
            />
            
            <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
              <span className="text-sm text-gray-700">Stima assicurazione</span>
              <div className="flex gap-2 items-center">
                <span className="font-medium text-gray-800">
                  {formatCurrency(selezionato.assicurazioniObbligatorie.costoStimatoCasa)}
                </span>
                <span className="text-xs">{`(${formatCurrency(selezionato.assicurazioniObbligatorie.costoStimatoCasa/12)}/mese)`}</span>
            </div>

              </div>
          </div>

          {selezionato.totaliCostiExtra && (
            <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
              <span className="font-semibold text-gray-900">
                Totale costi accessori
              </span>
              <span className="font-bold text-lg text-gray-900">
                {formatCurrency(selezionato.totaliCostiExtra)}
              </span>
            </div>
          )}
        </div>

        {/* Requirements */}
        <div className="mb-8">
          <div className="flex items-center gap-3 text-gray-700 mb-5">
            <Info className="w-5 h-5 text-gray-500" />
            <h2 className="text-base font-semibold">Requisiti e condizioni</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {selezionato.eta && (
              <RequirementItem title="Età" icon={Calendar}>
                <p>
                  Da{" "}
                  <span className="font-medium">
                    {selezionato.eta.minima || 18} anni
                  </span>
                </p>
                <p>
                  Fino a{" "}
                  <span className="font-medium">
                    {selezionato.eta.massima} anni
                  </span>
                </p>
                {selezionato.eta.maxUnder36 && (
                  <p className="text-blue-600 mt-2 font-medium text-xs">
                    Vantaggi under 36
                  </p>
                )}
              </RequirementItem>
            )}

            <RequirementItem title="Immobile" icon={Home}>
              {selezionato.soloClassiAB ? (
                <>
                  <p className="text-teal-700 font-medium">Solo classi A e B</p>
                  <p className="text-xs text-gray-500">
                    Sconti per alta efficienza
                  </p>
                </>
              ) : (
                <p className="text-green-700 font-medium">
                  Tutte le classi energetiche
                </p>
              )}
            </RequirementItem>

            {selezionato.assicurazioniObbligatorie && (
              <RequirementItem title="Assicurazioni" icon={Shield}>
                <div className="flex items-center gap-2">
                  {selezionato.assicurazioniObbligatorie.assicurazioneCasa ? (
                    <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-3 h-3 text-red-500 flex-shrink-0" />
                  )}
                  <div>
                    <span className="font-medium">Incendio e scoppio: </span>
                    <span className="text-xs text-gray-500">
                      {selezionato.assicurazioniObbligatorie.assicurazioneCasa
                        ? "Obbligatoria"
                        : "Non obbligatoria"}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {selezionato.assicurazioniObbligatorie.assicurazioneVita ? (
                    <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-3 h-3 text-red-500 flex-shrink-0" />
                  )}
                  <div>
                    <span className="font-medium">Vita: </span>
                    <span className="text-xs text-gray-500">
                      {selezionato.assicurazioniObbligatorie.assicurazioneVita
                        ? "Non facoltativa"
                        : "Facoltativa"}
                    </span>
                  </div>
                </div>
              </RequirementItem>
            )}
          </div>
        </div>

        {/* Pros and Cons */}
        {((selezionato.proMutuo && selezionato.proMutuo.length > 0) ||
          (selezionato.controMutuo && selezionato.controMutuo.length > 0)) && (
          <div className="mb-8">
            <div className="flex items-center gap-3 text-gray-700 mb-5">
              <AlertCircle className="w-5 h-5 text-gray-500" />
              <h2 className="text-base font-semibold">
                Vantaggi e limitazioni
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selezionato.proMutuo && selezionato.proMutuo.length > 0 && (
                <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <h3 className="font-semibold text-gray-800">Vantaggi</h3>
                  </div>
                  <ul className="space-y-3 text-sm text-gray-700 list-inside">
                    {selezionato.proMutuo.map((pro, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2 flex-shrink-0">
                          •
                        </span>
                        <span>{pro.descrizione}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selezionato.controMutuo &&
                selezionato.controMutuo.length > 0 && (
                  <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <XCircle className="w-4 h-4 text-red-600" />
                      <h3 className="font-semibold text-gray-800">
                        Limitazioni
                      </h3>
                    </div>
                    <ul className="space-y-3 text-sm text-gray-700 list-inside">
                      {selezionato.controMutuo.map((contro, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-red-500 mr-2 flex-shrink-0">
                            •
                          </span>
                          <span>{contro.descrizione}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>
          </div>
        )}

        {/* score pratica di mutuo */}
        <div>
          <div>
            <h1>Score</h1>
            <p>{selezionato.score}</p>
          </div>

       
        {((selezionato.praticaScore.pro && selezionato.praticaScore.pro.length > 0) ||
          (selezionato.praticaScore.contro && selezionato.praticaScore.contro.length > 0)) && (
          <div className="mb-8">
            <div className="flex items-center gap-3 text-gray-700 mb-5">
              <h2 className="text-base font-semibold">
                Score pratica
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selezionato.praticaScore.pro && selezionato.praticaScore.pro.length > 0 && (
                <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <h3 className="font-semibold text-gray-800">Elementi positivi:</h3>
                  </div>
                  <ul className="space-y-3 text-sm text-gray-700 list-inside">
                    {selezionato.praticaScore.pro.map((pro, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2 flex-shrink-0">
                          •
                        </span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selezionato.praticaScore.contro &&
                selezionato.praticaScore.contro.length > 0 && (
                  <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <XCircle className="w-4 h-4 text-red-600" />
                      <h3 className="font-semibold text-gray-800">
                        Elementi negativi o limitanti
                      </h3>
                    </div>
                    <ul className="space-y-3 text-sm text-gray-700 list-inside">
                      {selezionato.praticaScore.contro.map((contro, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-red-500 mr-2 flex-shrink-0">
                            •
                          </span>
                          <span>{contro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>
          </div>
        )}
         </div>

        {/* Important Information Note */}
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-5 mb-8">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-base font-semibold text-blue-900 mb-2">
                Informazioni importanti
              </div>
              <p className="text-sm text-blue-800 leading-relaxed mb-2">
                I dati mostrati sono indicativi e possono variare in base alla
                valutazione del profilo creditizio. Il TAEG include tutti i
                costi obbligatori. Per informazioni complete consulta il foglio
                informativo.
              </p>
              <p className="text-sm text-blue-800 font-medium">
                Assicurazioni:{" "}
                <span className="font-normal">
                  Non sei obbligato a sottoscrivere le polizze con la banca che
                  eroga il mutuo.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center pt-6">
          <Button className="bg-gray-900 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold text-base shadow-lg transition-colors duration-200">
            Richiedi Preventivo
          </Button>
          <p className="text-sm text-gray-500 mt-4">
            Contatta {selezionato.banca} per maggiori informazioni
          </p>
        </div>
      </div>
    </div>
  );
}
