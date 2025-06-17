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

interface PageProps {
  params: Promise<{
    mutuoId: string;
  }>;
}

export default function Gemini2({ params }: PageProps) {
  const  mutuoId  = 'ISP-GREEN-2025'
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

    console.log("tasso", selezionato.tassoScelto);

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
    title: ReactElement | string;
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
                  {selezionato.soloClassiAB && (
                    <Tag color="green">🌱 Green</Tag>
                  )}
                  {selezionato.consap && <Tag color="blue">🏛️ Consap</Tag>}
                  {selezionato.eta?.maxUnder36 && (
                    <Tag color="purple">👥 Under 36</Tag>
                  )}
                </div>
              </div>
            </div>
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
              value={formatTasso(selezionato.tassoScelto)}
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
            />
            <DetailRow
              label="Rata totale"
              value={formatCurrency(
                selezionato.rataTotale
              )}
              highlight
            />
            {selezionato.totaleDaRimborsare && (
              <DetailRow
                label="Totale interessi"
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
                  ? `${formatCurrencyEuroPrefix(
                      selezionato.incassoRata.importo
                    )}/mese`
                  : "Gratuito"
              }
            />

            <DetailRow
              label="Gestione pratica"
              value={
                selezionato.costoGestionePratica?.esiste
                  ? `${formatCurrencyEuroPrefix(
                      selezionato.costoGestionePratica.importo
                    )}/mese`
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
                    (
                    {formatCurrencyEuroPrefix(
                      selezionato.assicurazioniObbligatorie.costoStimatoCasa /
                        12
                    )}
                    /mese)
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
        <SectionCard
          title="Requisiti e condizioni"
          icon={Info}
          className="mb-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {selezionato.eta && (
              <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-700">Età</span>
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
                        {selezionato.assicurazioniObbligatorie.assicurazioneCasa
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
                        {selezionato.assicurazioniObbligatorie.assicurazioneVita
                          ? "Non facoltativa"
                          : "Facoltativa"}
                      </span>
                    </div>
                  </div>
                </div>
                {selezionato.assicurazioniObbligatorie.assicurazioneVita && (
                  <div className="pt-2">
                    <p className="text-xs">L'assicurazione sulla vita è obbligatoria per l'accesso al mutuo indicato. Sebbene il tasso agevolato possa risultare vantaggioso, si consiglia di confrontare questa offerta con altre soluzioni che non prevedono tale vincolo. Il costo dell'assicurazione riportato è una stima indicativa.</p>
                  </div>
                )}
                <div className="text-xs pt-2">
                  <p>
                    <span className="font-semibold">Attenzione:</span> Si informa che il cliente non è obbligato a sottoscrivere le polizze assicurative — come la copertura incendio e scoppio o altre tipologie — presso la banca erogatrice del mutuo. L’istituto non può imporre la stipula delle assicurazioni con compagnie da esso selezionate, né vincolare l’erogazione all’acquisto di coperture aggiuntive.
                    Tuttavia, è importante notare che in alcune offerte promozionali, legate a condizioni agevolate sul tasso di interesse, alcune banche richiedono obbligatoriamente la sottoscrizione delle assicurazioni presso partner convenzionati o propri canali. In tal caso, l’obbligatorietà è una condizione per accedere allo sconto.
                  </p>
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
          selezionato.score !== undefined) && (
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
            {(selezionato.praticaScore.pro?.length > 0 ||
              selezionato.praticaScore.contro?.length > 0) && (
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
                        {selezionato.praticaScore.contro.map(
                          (contro, index) => (
                            <ListItem key={index} text={contro} type="contro" />
                          )
                        )}
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
              <p className="text-sm leading-relaxed ">
                I dati mostrati sono indicativi e possono variare in base alla
                valutazione del profilo creditizio. Il **TAEG** include tutti i
                costi obbligatori. Per informazioni complete, consulta il foglio
                informativo.
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
