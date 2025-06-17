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
  Banknote,
  TrendingUp,
  MessageSquare, // New icon for "Pro/Contro" section title
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { trovaMutuo } from "@/action/mutui2.action";

interface PageProps {
  params: {
    mutuo: string;
  };
}

export default function Gemini2({ params }: PageProps) {
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

  // --- Componenti riutilizzabili per stile Notion ---

  const ScoreBadge = ({ score }: { score: number }) => {
    const getScoreStyle = (score: number) => {
      if (score >= 8)
        return "bg-green-100 text-green-800 border-green-200 ring-green-500/20";
      if (score >= 6)
        return "bg-yellow-100 text-yellow-800 border-yellow-200 ring-yellow-500/20";
      return "bg-red-100 text-red-800 border-red-200 ring-red-500/20";
    };

    return (
      <div
        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border ring-1 ring-inset ${getScoreStyle(
          score
        )}`}
      >
        <Star className="w-3 h-3 fill-current" />
        {score}/100
      </div>
    );
  };

  const Tag = ({
    children,
    color = "gray",
  }: {
    children: React.ReactNode;
    color?: "gray" | "green" | "blue" | "purple" | "red" | "yellow";
  }) => {
    const colors = {
      gray: "px-3 py-1 bg-gray-100 text-gray-700 rounded-full",
      green: "px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full",
      blue: "px-3 py-1 bg-sky-100 text-sky-800 rounded-full",
      purple: "px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full",
      red: "px-3 py-1 bg-red-100 text-red-800 rounded-full",
      yellow: "px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full",
    };

    return (
      <span
        className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${colors[color]}`}
      >
        {children}
      </span>
    );
  };

  const SectionCard = ({
    title,
    icon: Icon,
    children,
    className = "",
  }: {
    title: string;
    icon: React.ElementType;
    children: React.ReactNode;
    className?: string;
  }) => (
    <div
      className={`bg-white rounded-lg p-6 border border-gray-200 shadow-sm ${className}`}
    >
      <div className="flex items-center gap-3 text-gray-700 mb-5">
        <Icon className="w-5 h-5 text-gray-500" />
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      {children}
    </div>
  );

  const DetailRow = ({
    label,
    value,
    highlight = false,
    icon: Icon,
  }: {
    label: string;
    value: React.ReactNode;
    highlight?: boolean;
    icon?: React.ElementType;
  }) => (
    <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
      <div className="flex items-center gap-2">
        {Icon && <Icon className="w-4 h-4 text-gray-400" />}
        <span className="text-sm text-gray-600">{label}</span>
      </div>
      <span
        className={`font-medium ${
          highlight ? "text-blue-600 text-base" : "text-gray-800"
        }`}
      >
        {value}
      </span>
    </div>
  );

  const ListItem = ({
    text,
    type,
  }: {
    text: string;
    type: "pro" | "contro";
  }) => (
    <li className="flex items-start gap-2">
      {type === "pro" ? (
        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
      ) : (
        <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
      )}
      <span className="text-sm text-gray-700">{text}</span>
    </li>
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto py-12 px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-10">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 text-sm mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Torna ai risultati
          </button>

          <div className="bg-white p-7 rounded-lg border border-gray-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden border border-gray-200 p-3 shadow-inner">
                <Image
                  src={selezionato.immagineBanca}
                  height={60}
                  width={180}
                  alt={`Logo ${selezionato.banca}`}
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-3xl font-extrabold text-gray-900 mb-1 leading-tight">
                  {selezionato.nomeProdotto}
                </h1>
                <p className="text-gray-600 text-md">{selezionato.banca}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selezionato.soloClassiAB && <Tag color="green">🌱 Green</Tag>}
                  {selezionato.consap && <Tag color="blue">🏛️ Consap</Tag>}
                  {selezionato.eta?.maxUnder36 && (
                    <Tag color="purple">👥 Under 36</Tag>
                  )}
                </div>
              </div>
            </div>

            {/* Ho rimosso lo score da qui perché si riferisce allo score della pratica */}
            {/* {selezionato.score !== undefined && (
              <div className="flex-shrink-0 md:self-start">
                <ScoreBadge score={selezionato.score} />
              </div>
            )} */}
          </div>
        </div>

        {/* Main Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <SectionCard title="Finanziamento" icon={Euro}>
            <DetailRow
              label="Importo mutuo"
              value={formatCurrency(selezionato.importoMutuo)}
            />
            <DetailRow
              label="Durata"
              value={`${selezionato.durataAnni} anni`}
            />
            {selezionato.ltvMutuo && (
              <DetailRow label="LTV" value={`${selezionato.ltvMutuo}%`} />
            )}
          </SectionCard>

          <SectionCard title="Tassi" icon={TrendingUp}>
            <DetailRow
              label="Tasso fisso"
              value={formatTasso(selezionato.tassoFisso)}
            />
            {selezionato.taeg && (
              <DetailRow label="TAEG" value={formatTasso(selezionato.taeg)} />
            )}
            <DetailRow
              label="Tipo tasso"
              value={selezionato.tipiTasso || "Fisso"}
            />
          </SectionCard>

          <SectionCard title="Pagamenti" icon={Calendar}>
            <DetailRow
              label="Rata mensile"
              value={formatCurrency(selezionato.rataMensile)}
              highlight
            />
            <DetailRow
              label="Rata totale"
              value={formatCurrency(
                selezionato.rataMensile +
                  (selezionato.incassoRata?.importo || 0)
              )}
            />
            {selezionato.totaleDaRimborsare && (
              <DetailRow
                label="Totale da rimborsare"
                value={formatCurrency(selezionato.totaleDaRimborsare)}
              />
            )}
          </SectionCard>
        </div>

        {/* Accessory Costs */}
        <SectionCard title="Costi accessori" icon={Banknote} className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
            <DetailRow
              label="Spese perizia"
              value={
                selezionato.spesePerizia?.importo > 0
                  ? formatCurrency(selezionato.spesePerizia.importo)
                  : "Gratuita"
              }
            />
            <DetailRow
              label="Spese istruttoria"
              value={
                selezionato.speseIstruttoria?.importo > 0
                  ? formatCurrency(selezionato.speseIstruttoria.importo)
                  : "Azzerata"
              }
            />
            <DetailRow
              label="Imposta sostitutiva"
              value={
                selezionato.impostaSostitutiva?.promozione
                  ? "Promozionale"
                  : formatCurrency(selezionato.impostaSostitutiva?.importo || 0)
              }
            />
            <DetailRow
              label="Incasso rata"
              value={
                selezionato.incassoRata?.esiste
                  ? formatCurrency(selezionato.incassoRata.importo)
                  : "Gratuito"
              }
            />
            <DetailRow
              label="Stima assicurazione"
              value={
                <span className="flex items-center gap-1">
                  {formatCurrency(
                    selezionato.assicurazioniObbligatorie.costoStimatoCasa
                  )}
                  <span className="text-xs text-gray-500">
                    ({formatCurrency(
                      selezionato.assicurazioniObbligatorie.costoStimatoCasa /
                        12
                    )}/mese)
                  </span>
                </span>
              }
            />
          </div>

          {selezionato.totaliCostiExtra && (
            <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
              <span className="font-semibold text-gray-900">
                Totale costi accessori
              </span>
              <span className="font-bold text-xl text-gray-900">
                {formatCurrency(selezionato.totaliCostiExtra)}
              </span>
            </div>
          )}
        </SectionCard>

        {/* Requirements */}
        <SectionCard title="Requisiti e condizioni" icon={Info} className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {selezionato.eta && (
              <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-700">
                    Età
                  </span>
                </div>
                <div className="text-sm text-gray-600 space-y-1">
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
                    <Tag color="purple">Vantaggi Under 36</Tag>
                  )}
                </div>
              </div>
            )}

            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <Home className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">
                  Immobile
                </span>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                {selezionato.soloClassiAB ? (
                  <>
                    <p className="font-medium text-emerald-700">
                      Solo classi A e B
                    </p>
                    <p className="text-xs text-gray-500">
                      Sconti per alta efficienza energetica
                    </p>
                  </>
                ) : (
                  <p className="font-medium text-green-700">
                    Tutte le classi energetiche
                  </p>
                )}
              </div>
            </div>

            {selezionato.assicurazioniObbligatorie && (
              <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-700">
                    Assicurazioni
                  </span>
                </div>
                <div className="text-sm text-gray-600 space-y-2">
                  <div className="flex items-center gap-2">
                    {selezionato.assicurazioniObbligatorie.assicurazioneCasa ? (
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                    )}
                    <div>
                      <span className="font-medium">Incendio e scoppio: </span>
                      <span className="text-xs text-gray-500">
                        {selezionato.assicurazioniObbligatorie
                          .assicurazioneCasa
                          ? "Obbligatoria"
                          : "Non obbligatoria"}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {selezionato.assicurazioniObbligatorie.assicurazioneVita ? (
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                    )}
                    <div>
                      <span className="font-medium">Vita: </span>
                      <span className="text-xs text-gray-500">
                        {selezionato.assicurazioniObbligatorie
                          .assicurazioneVita
                          ? "Non facoltativa"
                          : "Facoltativa"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </SectionCard>

        {/* Pros and Cons */}
        {((selezionato.proMutuo && selezionato.proMutuo.length > 0) ||
          (selezionato.controMutuo && selezionato.controMutuo.length > 0)) && (
          <SectionCard
            title="Vantaggi e limitazioni"
            icon={MessageSquare}
            className="mb-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selezionato.proMutuo && selezionato.proMutuo.length > 0 && (
                <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Vantaggi
                  </h3>
                  <ul className="space-y-2">
                    {selezionato.proMutuo.map((pro, index) => (
                      <ListItem key={index} text={pro.descrizione} type="pro" />
                    ))}
                  </ul>
                </div>
              )}

              {selezionato.controMutuo &&
                selezionato.controMutuo.length > 0 && (
                  <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                    <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-red-600" />
                      Limitazioni
                    </h3>
                    <ul className="space-y-2">
                      {selezionato.controMutuo.map((contro, index) => (
                        <ListItem
                          key={index}
                          text={contro.descrizione}
                          type="contro"
                        />
                      ))}
                    </ul>
                  </div>
                )}
            </div>
          </SectionCard>
        )}

        {/* Score Pratica */}
        {((selezionato.praticaScore?.pro &&
          selezionato.praticaScore.pro.length > 0) ||
          (selezionato.praticaScore?.contro &&
            selezionato.praticaScore.contro.length > 0) ||
          selezionato.score !== undefined) && ( // Aggiunta la condizione per mostrare lo score anche se non ci sono pro/contro
          <SectionCard
            title={
              <span className="flex items-center gap-2">
                Score pratica di mutuo
                {selezionato.score !== undefined && (
                  <ScoreBadge score={selezionato.score} />
                )}
              </span>
            }
            icon={Star}
            className="mb-10"
          >
            {/* Mostra il punteggio se presente */}
            

            {/* Mostra pro e contro solo se esistono */}
            {(selezionato.praticaScore.pro?.length > 0 || selezionato.praticaScore.contro?.length > 0) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                {selezionato.praticaScore.pro &&
                  selezionato.praticaScore.pro.length > 0 && (
                    <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                      <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        Elementi positivi
                      </h3>
                      <ul className="space-y-2">
                        {selezionato.praticaScore.pro.map((pro, index) => (
                          <ListItem key={index} text={pro} type="pro" />
                        ))}
                      </ul>
                    </div>
                  )}

                {selezionato.praticaScore.contro &&
                  selezionato.praticaScore.contro.length > 0 && (
                    <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                      <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-red-600" />
                        Elementi negativi o limitanti
                      </h3>
                      <ul className="space-y-2">
                        {selezionato.praticaScore.contro.map((contro, index) => (
                          <ListItem key={index} text={contro} type="contro" />
                        ))}
                      </ul>
                    </div>
                  )}
              </div>
            )}
          </SectionCard>
        )}

        {/* Important Information Note */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-10 text-blue-900 shadow-sm">
          <div className="flex items-start gap-4">
            <Info className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <div className="text-lg font-bold mb-2">
                Informazioni importanti
              </div>
              <p className="text-sm leading-relaxed mb-3">
                I dati mostrati sono indicativi e possono variare in base alla
                valutazione del profilo creditizio. Il **TAEG** include tutti i
                costi obbligatori. Per informazioni complete, consulta il foglio
                informativo.
              </p>
              <p className="text-sm font-semibold">
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
          <Button className="bg-gray-900 hover:bg-gray-700 text-white px-10 py-4 rounded-lg font-semibold  shadow-lg transition-colors duration-200 text-lg">
            Richiedi un Preventivo Personalizzato
          </Button>
          <p className="text-sm text-gray-500 mt-4">
            Contatta {selezionato.banca} per maggiori informazioni o per
            procedere con la richiesta.
          </p>
        </div>
      </div>
    </div>
  );
}