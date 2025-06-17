"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMutuo } from "@/Context/MutuoContext";
import {
  CheckCircle,
  XCircle,
  AlertTriangle,
  Info,
  Percent,
  Calendar,
  Euro,
  Building,
  Shield,
  ArrowLeft,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { trovaMutuo } from "@/action/mutui2.action";

interface PageProps {
  params: {
    mutuo: string;
  };
}

export default function MutuoSingolo({ params }: PageProps) {
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

  console.log("avanzata cons", selezionato);

  const numberStandard = (number: string) => {
    number
      .split("")
      .filter((x) => x != " " && x != "€" && x != ".")
      .join("");
    return Number(number);
  };

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

  const ScoreIndicator = ({ score }) => {
    const getScoreColor = (score) => {
      if (score >= 8) return "bg-green-100 text-green-800 border-green-200";
      if (score >= 6) return "bg-yellow-100 text-yellow-800 border-yellow-200";
      return "bg-red-100 text-red-800 border-red-200";
    };

    return (
      <div
        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getScoreColor(
          score
        )}`}
      >
        <span className="mr-1">⭐</span>
        {score}/10
      </div>
    );
  };

  const InfoCard = ({ title, children, icon: Icon, variant = "default" }) => {
    const variants = {
      default: "bg-white border-gray-200",
      warning: "bg-amber-50 border-amber-200",
      success: "bg-green-50 border-green-200",
      info: "bg-blue-50 border-blue-200",
    };

    return (
      <div className={`p-6 rounded-lg border ${variants[variant]} shadow-sm`}>
        <div className="flex items-center gap-3 mb-4">
          {Icon && <Icon className="h-5 w-5 text-gray-600" />}
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
        {children}
      </div>
    );
  };

  const KeyValuePair = ({ label, value, highlight = false }) => (
    <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
      <span className="text-gray-600 text-sm">{label}</span>
      <span
        className={`font-medium ${
          highlight ? "text-blue-600 text-lg" : "text-gray-900"
        }`}
      >
        {value}
      </span>
    </div>
  );

  if (!selezionato) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Caricamento...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        {/* Navigazione */}
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="mb-4 hover:bg-gray-100"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Torna ai risultati
        </Button>

        {/* Header */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <Image
                src={selezionato.immagineBanca}
                height={60}
                width={180}
                alt={`Logo ${selezionato.banca}`}
                className="object-contain rounded"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {selezionato.nomeProdotto}
                </h1>
                <p className="text-gray-600">{selezionato.banca}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {selezionato.score && (
                <ScoreIndicator score={selezionato.score} />
              )}
              <div className="flex gap-2">
                {selezionato.soloClassiAB && (
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                    Green
                  </Badge>
                )}
                {selezionato.consap && (
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                    Consap
                  </Badge>
                )}
                {selezionato.eta?.maxUnder36 && (
                  <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
                    Under 36
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Informazioni Principali */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoCard title="Dettagli Finanziamento" icon={Euro} variant="info">
            <div className="space-y-1">
              <KeyValuePair
                label="Importo mutuo"
                value={formatCurrency(selezionato.importoMutuo)}
                highlight
              />
              <KeyValuePair
                label="Durata"
                value={`${selezionato.durataAnni} anni`}
              />
              <KeyValuePair
                label="Rata mensile"
                value={formatCurrency(selezionato.rataMensile)}
                highlight
              />
              {selezionato.ltvMutuo && (
                <KeyValuePair label="LTV" value={`${selezionato.ltvMutuo}%`} />
              )}
              {selezionato.totaleDaRimborsare && (
                <KeyValuePair
                  label="Totale da rimborsare"
                  value={formatCurrency(selezionato.totaleDaRimborsare)}
                />
              )}
            </div>
          </InfoCard>

          <InfoCard title="Tassi e Condizioni" icon={Percent}>
            <div className="space-y-1">
              <KeyValuePair
                label="Tasso fisso"
                value={formatTasso(selezionato.tassoFisso)}
                highlight
              />
              {selezionato.taeg && (
                <KeyValuePair
                  label="TAEG"
                  value={formatTasso(selezionato.taeg)}
                  highlight
                />
              )}
              {selezionato.tipiTasso && (
                <KeyValuePair
                  label="Tipo tasso"
                  value={selezionato.tipiTasso}
                />
              )}
              <KeyValuePair label="IRS" value={selezionato.irs ? "Sì" : "No"} />
              <KeyValuePair
                label="Consap"
                value={selezionato.consap ? "✓ Disponibile" : "Non disponibile"}
              />
            </div>
          </InfoCard>
        </div>

        {/* Costi Dettagliati */}
        <InfoCard
          title="Costi Accessori"
          icon={AlertTriangle}
          variant="warning"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <KeyValuePair
                label="Spese perizia"
                value={
                  selezionato.spesePerizia?.importo > 0
                    ? formatCurrency(selezionato.spesePerizia.importo)
                    : "Gratuita"
                }
              />
              <KeyValuePair
                label="Spese istruttoria"
                value={
                  selezionato.speseIstruttoria?.importo > 0
                    ? formatCurrency(selezionato.speseIstruttoria.importo)
                    : "Azzerata"
                }
              />
              <KeyValuePair
                label="Imposta sostitutiva"
                value={
                  selezionato.impostaSostitutiva?.promozione
                    ? "Promozionale"
                    : formatCurrency(
                        selezionato.impostaSostitutiva?.importo || 0
                      )
                }
              />
            </div>
            <div className="space-y-1">
              <KeyValuePair
                label="Incasso rata"
                value={
                  selezionato.incassoRata?.esiste
                    ? formatCurrency(selezionato.incassoRata.importo)
                    : "Gratuito"
                }
              />
              <KeyValuePair
                label="Assicurazioni obbligatorie"
                value={formatCurrency(
                  selezionato.assicurazioniObbligatorie?.costoStimato || 0
                )}
              />
            </div>
          </div>
        </InfoCard>

        {/* ripielogo costi */}
        <div>
          <div>
            <h1>Rata totale mensile</h1>
            <p>{selezionato.rataMensile + selezionato.incassoRata.importo}</p>
          </div>
          <div>
            <h1>Totale interessi + costi accessori</h1>
            <p>{formatCurrency(selezionato.totaleDaRimborsare)}</p>
          </div>
          <div>
            <h1>totale costi accessori</h1>
            <p>{formatCurrency(selezionato.totaliCostiExtra)}</p>
          </div>
        </div>

        {/* Pro e Contro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {selezionato.proMutuo && selezionato.proMutuo.length > 0 && (
            <InfoCard title="Vantaggi" icon={CheckCircle} variant="success">
              <ul className="space-y-3">
                {selezionato.proMutuo.map((pro, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      {pro.descrizione}
                    </span>
                  </li>
                ))}
              </ul>
            </InfoCard>
          )}

          {selezionato.controMutuo && selezionato.controMutuo.length > 0 && (
            <InfoCard title="Svantaggi e Limitazioni" icon={XCircle}>
              <ul className="space-y-3">
                {selezionato.controMutuo.map((contro, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      {contro.descrizione}
                    </span>
                  </li>
                ))}
              </ul>
            </InfoCard>
          )}
        </div>

        {/* Requisiti e Condizioni Speciali */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {selezionato.eta && (
            <InfoCard title="Requisiti Età" icon={Calendar}>
              <div className="space-y-1">
                <KeyValuePair
                  label="Età minima"
                  value={`${selezionato.eta.minima || 18} anni`}
                />
                <KeyValuePair
                  label="Età massima"
                  value={`${selezionato.eta.massima} anni`}
                />
                {selezionato.eta.maxUnder36 && (
                  <div className="mt-2 text-xs text-blue-600 bg-blue-50 p-2 rounded">
                    Condizioni speciali per under 36
                  </div>
                )}
              </div>
            </InfoCard>
          )}

          <InfoCard title="Classi Energetiche" icon={Building}>
            {selezionato.soloClassiAB ? (
              <div className="text-sm">
                <div className="text-amber-600 mb-2">⚠️ Solo classi A e B</div>
                <div className="text-xs text-gray-600">
                  Sconti disponibili per classi energetiche elevate
                </div>
              </div>
            ) : (
              <div className="text-green-600 text-sm">
                ✓ Tutte le classi energetiche
              </div>
            )}
          </InfoCard>

          {selezionato.assicurazioniObbligatorie && (
            <InfoCard title="Assicurazioni" icon={Shield}>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  {selezionato.assicurazioniObbligatorie.assicurazioneCasa ? (
                    <CheckCircle className="h-4 w-4 text-orange-500" />
                  ) : (
                    <XCircle className="h-4 w-4 text-gray-400" />
                  )}
                  <div>
                    <span>Assicurazione casa</span>
                    <p className="text-xs text-gray-700">Obbligatoria per legge</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {selezionato.assicurazioniObbligatorie.assicurazioneVita ? (
                    <CheckCircle className="h-4 w-4 text-orange-500" />
                  ) : (
                    <XCircle className="h-4 w-4 text-gray-400" />
                  )}
                  <div>
                  <span>Assicurazione vita</span>
                  <p className="text-xs text-gray-700">Facoltativa</p>
                  </div>
                </div>
                <div className="text-xs text-gray-600 mt-2">
                  Costo stimato:{" "}
                  {formatCurrency(
                    selezionato.assicurazioniObbligatorie.costoStimato
                  )}
                  /anno
                </div>
                <div>
                    <h1>Attenzione!</h1> 
                    <p>Le polizze assicurative non siete obbligati a farle con la banca che eroga il mutuo
                    </p>
                </div>
              </div>
            </InfoCard>
          )}
        </div>

        {/* Vantaggi Evidenziati */}
        {(selezionato.speseIstruttoria?.importo === 0 ||
          selezionato.spesePerizia?.importo === 0) && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-green-800 flex items-center gap-2">
              <CheckCircle className="h-6 w-6" />
              Vantaggi di questo mutuo
            </h2>
            <div className="space-y-2">
              {selezionato.speseIstruttoria?.importo === 0 && (
                <div className="flex items-center gap-2 text-green-700">
                  <CheckCircle className="w-5 h-5" />
                  <span>Spese di istruttoria gratuite</span>
                </div>
              )}
              {selezionato.spesePerizia?.importo === 0 && (
                <div className="flex items-center gap-2 text-green-700">
                  <CheckCircle className="w-5 h-5" />
                  <span>Perizia gratuita</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Note e Disclaimer */}
        <div className="bg-gray-100 border border-gray-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-gray-700">
              <p className="font-medium mb-1">Informazioni importanti</p>
              <p>
                I dati mostrati sono indicativi e possono variare in base alla
                valutazione del profilo creditizio. Il TAEG include tutti i
                costi obbligatori. Per informazioni complete consulta il foglio
                informativo e le condizioni contrattuali.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
          >
            Richiedi Preventivo
          </Button>
          <p className="text-sm text-gray-500 mt-2">
            Contatta la banca per maggiori informazioni su questo prodotto
          </p>
        </div>
      </div>
    </div>
  );
}
