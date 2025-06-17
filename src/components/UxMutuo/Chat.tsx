"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMutuo } from "@/Context/MutuoContext";
import {
  ArrowLeft,
  Euro,
  Calendar,
  Percent,
  Home,
  Shield,
  CheckCircle,
  XCircle,
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

export default function Chat() {
  const { selezionato, setSelezionato } = useMutuo();
  const router = useRouter();

  useEffect(() => {
    if (!selezionato) {
      async function defaultMutuo() {
        const result = await trovaMutuo("1");
        setSelezionato(result!);
      }
      defaultMutuo();
    }
  }, [selezionato, router]);

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
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-gray-500">Caricamento...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <div className="max-w-3xl mx-auto py-8 px-4">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={() => router.back()}
            className="flex items-center text-gray-600 hover:text-gray-900 text-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Torna indietro
          </button>
        </div>
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center overflow-hidden">
            <Image
              src={selezionato.immagineBanca}
              height={32}
              width={96}
              alt={`Logo ${selezionato.banca}`}
              className="object-contain"
            />
          </div>
          <div className="ml-4">
            <h1 className="text-2xl font-medium">{selezionato.nomeProdotto}</h1>
            <p className="text-sm text-gray-500">{selezionato.banca}</p>
          </div>
        </div>

        {/* Main Info Section */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Dettagli principali</h2>
          <div className="space-y-6">
            <div className="flex justify-between">
              <div className="flex items-center">
                <Euro className="w-5 h-5 mr-2 text-gray-600" />
                <span className="text-sm font-medium">Importo mutuo</span>
              </div>
              <div className="text-sm">{formatCurrency(selezionato.importoMutuo)}</div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-gray-600" />
                <span className="text-sm font-medium">Durata</span>
              </div>
              <div className="text-sm">{selezionato.durataAnni} anni</div>
            </div>
            {selezionato.ltvMutuo && (
              <div className="flex justify-between">
                <div className="flex items-center">
                  <Home className="w-5 h-5 mr-2 text-gray-600" />
                  <span className="text-sm font-medium">LTV</span>
                </div>
                <div className="text-sm">{selezionato.ltvMutuo}%</div>
              </div>
            )}
            <div className="flex justify-between">
              <div className="flex items-center">
                <Percent className="w-5 h-5 mr-2 text-gray-600" />
                <span className="text-sm font-medium">Tasso fisso</span>
              </div>
              <div className="text-sm">{formatTasso(selezionato.tassoFisso)}</div>
            </div>
            {selezionato.taeg && (
              <div className="flex justify-between">
                <div className="flex items-center">
                  <Percent className="w-5 h-5 mr-2 text-gray-600" />
                  <span className="text-sm font-medium">TAEG</span>
                </div>
                <div className="text-sm">{formatTasso(selezionato.taeg)}</div>
              </div>
            )}
            <div className="flex justify-between">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-gray-600" />
                <span className="text-sm font-medium">Rata mensile</span>
              </div>
              <div className="text-sm">{formatCurrency(selezionato.rataMensile)}</div>
            </div>
          </div>
        </section>

        {/* Costi Accessori */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Costi accessori</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Spese perizia</span>
              <span className="text-sm">
                {selezionato.spesePerizia?.importo > 0
                  ? formatCurrency(selezionato.spesePerizia.importo)
                  : "Gratuita"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Spese istruttoria</span>
              <span className="text-sm">
                {selezionato.speseIstruttoria?.importo > 0
                  ? formatCurrency(selezionato.speseIstruttoria.importo)
                  : "Azzerata"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Imposta sostitutiva</span>
              <span className="text-sm">
                {selezionato.impostaSostitutiva?.promozione
                  ? "Promozionale"
                  : formatCurrency(selezionato.impostaSostitutiva?.importo || 0)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Incasso rata</span>
              <span className="text-sm">
                {selezionato.incassoRata?.esiste
                  ? formatCurrency(selezionato.incassoRata.importo)
                  : "Gratuito"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Assicurazioni/anno</span>
              <span className="text-sm">
                {formatCurrency(selezionato.assicurazioniObbligatorie?.costoStimato || 0)}
              </span>
            </div>
            {selezionato.totaliCostiExtra && (
              <div className="flex justify-between border-t pt-2">
                <span className="text-sm font-medium">Totale costi extra</span>
                <span className="text-sm font-medium">
                  {formatCurrency(selezionato.totaliCostiExtra)}
                </span>
              </div>
            )}
          </div>
        </section>

        {/* Requisiti */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Requisiti e condizioni</h2>
          <div className="space-y-6">
            {selezionato.eta && (
              <div className="flex justify-between">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-gray-600" />
                  <span className="text-sm font-medium">Età</span>
                </div>
                <div className="text-sm">
                  {selezionato.eta.minima} – {selezionato.eta.massima} anni
                  {selezionato.eta.maxUnder36 && <span className="ml-2 text-xs text-blue-600">Under 36</span>}
                </div>
              </div>
            )}
            <div className="flex justify-between">
              <div className="flex items-center">
                <Home className="w-5 h-5 mr-2 text-gray-600" />
                <span className="text-sm font-medium">Classe energetica</span>
              </div>
              <div className="text-sm">
                {selezionato.soloClassiAB ? "Solo A e B" : "Tutte le classi"}
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-gray-600" />
                <span className="text-sm font-medium">Assicurazioni</span>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex items-center">
                  {selezionato.assicurazioniObbligatorie.assicurazioneCasa ? (
                    <CheckCircle className="w-4 h-4 text-green-600 mr-1" />
                  ) : (
                    <XCircle className="w-4 h-4 text-gray-400 mr-1" />
                  )}
                  Casa obbligatoria
                </div>
                <div className="flex items-center">
                  {selezionato.assicurazioniObbligatorie.assicurazioneVita ? (
                    <CheckCircle className="w-4 h-4 text-green-600 mr-1" />
                  ) : (
                    <XCircle className="w-4 h-4 text-gray-400 mr-1" />
                  )}
                  Vita facoltativa
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pro e Contro */}
        {(selezionato.proMutuo?.length || selezionato.controMutuo?.length) && (
          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Punti di forza e limitazioni</h2>
            <div className="space-y-6">
              {selezionato.proMutuo && (
                <div>
                  <h3 className="text-sm font-medium mb-2 flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" /> Vantaggi
                  </h3>
                  <ul className="list-disc list-inside text-sm space-y-2 text-gray-700">
                    {selezionato.proMutuo.map((pro, index) => (
                      <li key={index}>{pro.descrizione}</li>
                    ))}
                  </ul>
                </div>
              )}
              {selezionato.controMutuo && (
                <div>
                  <h3 className="text-sm font-medium mb-2 flex items-center">
                    <XCircle className="w-4 h-4 text-red-600 mr-2" /> Limitazioni
                  </h3>
                  <ul className="list-disc list-inside text-sm space-y-2 text-gray-700">
                    {selezionato.controMutuo.map((contro, index) => (
                      <li key={index}>{contro.descrizione}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Informazioni importanti */}
        <section className="mb-8">
          <div className="flex bg-gray-50 p-4 rounded">
            <Info className="w-5 h-5 text-gray-600 mr-3" />
            <p className="text-sm text-gray-700">
              I dati sono indicativi e possono variare in base al profilo. Il TAEG include tutti i costi obbligatori. Per dettagli, consulta il foglio informativo.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Button className="px-6 py-2 rounded bg-gray-900 text-white hover:bg-gray-800">
            Richiedi preventivo
          </Button>
          <p className="text-xs text-gray-500 mt-2">Contatta {selezionato.banca} per maggiori dettagli</p>
        </div>
      </div>
    </div>
  );
}
