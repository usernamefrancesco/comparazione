"use client";
import React, {useEffect, use}from "react";
import { InfoPopup, useInfoPopup, InfoButton } from "@/components/PopUpInfo/UseInfo";
import { ScoreButton, ScoreInfoPop, useScoreInfo } from "@/components/PopUpInfo/ScoreInfo";
import Disclaimer from "@/components/Disclamair";
import { trovaMutuo } from "@/action/mutui2.action";
import { getTassoIrs } from "@/lib/utils";
import {
  ArrowLeft,
  Star,
  Euro,
  ChartPie,
  Percent,
  Home,
  Shield,
  AlertCircle,
  Banknote,
  Sparkles,
  Calculator,
  Award,
  Clock,
  Building2,
  Users,
  PiggyBank,
  FileText,
  XCircle,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import { useMutuo } from "@/Context/MutuoContext";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface PageProps {
  params: Promise<{
    mutuoId: string;
  }>;
}

const MutuoRedesignPart1 = ({ params }: PageProps) =>  {
  const { mutuoId } = use(params);
  // Dati di esempio (simili a quelli del tuo componente)
  const { selezionato , setSelezionato} = useMutuo();
  const router = useRouter();
  const { popupState, showPopup, hidePopup , isMobile} = useInfoPopup();
  const { popupStateScore, showPopupScore, hidePopupScore , isMobileScore} = useScoreInfo();


  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(amount);
  };
  const formatLTV = (range: string) => {
    const primoNum = range.slice(0,2)
    const secondoNum = range.slice(6,9).replace('.', '')
   
    return `${primoNum}-${secondoNum}`
  };
  function formatNumeroDex(numb: number) {
    if(numb> 1){
      return numb.toFixed(0).replace('.', ',')
    }else{

      return numb.toFixed(2).replace('.', ',');
    }
  }

  const formatData = (data: string | Date) => {
    const d = new Date(data);
    return `${d.getDate().toString().padStart(2, "0")}/${(d.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${d.getFullYear()}`;
  };

  const formatTasso = (tasso: number) => {
    return tasso < 1 ? `${(tasso * 100).toFixed(2).replace('.', ',')}%` : `${tasso.toFixed(2).replace('.', ',')}%`;
  };

  function calcolaMutuo(
    rata: number,
    tassoNumero: number,
    durataMutuo: number
  ) {
    const n = durataMutuo * 12;
    const i = tassoNumero / 12 / 100;
    const pow = Math.pow(1 + i, n);

    if(!selezionato)return;
    const capitale = selezionato.importoMutuo;
    const montante = rata * n;
    const interessi = montante - capitale;

    return { capitale, montante, interessi };
  }

  

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
  const calcolatore = calcolaMutuo(
    selezionato.rataMensile,
    selezionato.tassoScelto,
    selezionato.durataAnni
  );
  if(!calcolatore)return;
  const speseMensiliTot =
    selezionato.incassoRata.importo +
    selezionato.costoGestionePratica.importo +
    (selezionato.altriTipiSpese.annuali
      ? 0
      : selezionato.altriTipiSpese.importo) +
    (selezionato.assicurazioniObbligatorie.assicurazioneVitaMensile
      ? selezionato.assicurazioniObbligatorie.costoStimatoVita
      : 0);

  const ScoreBadge = ({ score }: { score: number }) => {
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
      return {
        bg: "bg-red-50",
        text: "text-red-700",
        border: "border-red-200",
      };
    };
    const scoreColors = getScoreColor(selezionato.score);

    return (
      <div
        className={`inline-flex items-center gap-2 px-2 py-1 rounded-full border-2 ${scoreColors.bg} ${scoreColors.text} ${scoreColors.border} font-bold`}
      >
        <Star className="w-4 h-4 fill-current" />
        <span className="text-sm">{score}/100</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen ">
      <InfoPopup
      isMobile={isMobile}
        isOpen={popupState.isOpen}
        info={popupState.info}
        position={popupState.position}
        onClose={hidePopup}
      />
      <ScoreInfoPop
      isMobileScore={isMobileScore}
        isOpen={popupStateScore.isOpen}
        info={popupStateScore.info}
        position={popupStateScore.position}
        onClose={hidePopupScore}
      />
      <div className="max-w-5xl mx-auto py-8 px-5">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 text-sm mb-6 transition-colors duration-200 hover:bg-white/50  rounded-lg"
        >
          <ArrowLeft className="w-4 h-4" />
          Torna ai risultati
        </button>

        {/* Main Card Container */}
        <div className="  overflow-hidden">
          {/* Header Section */}
          <div className="bg-white rounded-3xl  pb-2 pt-0">
            <div className="flex flex-col lg:flex-row items-start gap-4 ">
              <div className="flex-shrink-0">
                <div className="w-70 h-16 rounded-xl flex items-center pp-3">
                  <Image
                    src={selezionato.immagineBanca}
                    height={100}
                    width={200}
                    alt={`Logo ${selezionato.banca}`}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
                      {selezionato.nomeProdotto}
                    </h1>
                    <p className="text-gray-600 mb-4">{selezionato.banca}</p>
                  </div>

                  {/* Scadenza offerta spostata qui e migliorata */}
                </div>
              </div>
            </div>

            <div className="flex items-end gap-2 flex-shrink-0 pb-1 flex-wrap">
              {selezionato.soloClassiAB && (
                <span className="bg-green-100 text-green-700 text-xs px-3 py-2 rounded-full font-medium">
                  🌱 Green
                </span>
              )}
              {selezionato.consap && (
                <span className="bg-blue-100 text-blue-700 text-xs px-3 py-2 rounded-full font-medium">
                  🏛️ Consap
                </span>
              )}
              {selezionato.eta?.maxUnder36 && (
                <span className="bg-purple-100 text-purple-700 text-xs px-3 py-2 rounded-full font-medium">
                  👥 Under 36
                </span>
              )}
              {selezionato.tipiTasso == "Fisso" ? (
                <span className="bg-orange-100 text-orange-700 text-xs px-3 py-2 rounded-full font-medium">
                  📌 Tasso Fisso
                </span>
              ) : (
                <span className="bg-red-100 text-red-700 text-xs px-3 py-2 rounded-full font-medium">
                  📈 Tasso Variabile
                </span>
              )}
            </div>
            {selezionato.dataScadenzaOfferta && (
              <div className="flex-shrink-0 pt-2">
                <div className=" rounded-xl  py-3">
                  <div className="flex items-center gap-2">
                    <span className="text-red-500 text-lg">⏰</span>
                    <div className="flex items-center gap-2">
                      <p className="text-xs text-red-600 font-medium uppercase tracking-wide">
                        Scadenza Offerta
                      </p>
                      <p className="text-sm font-bold text-red-700">
                        {formatData(selezionato.dataScadenzaOfferta)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Key Metrics Section */}
          <div className=" ">
            <div className="text-center mb-4 ">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">
                Ecco la tua offerta
              </h2>
            </div>

            {/* Main Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Importo Mutuo */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 bg-blue-200/50 rounded-lg">
                    <Euro className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="text-xs text-blue-600 font-medium uppercase tracking-wide">
                    Importo
                  </div>
                </div>
                <div className="text-2xl font-bold text-blue-800 mb-1">
                  {formatCurrency(selezionato.importoMutuo)}
                </div>
                <div className="text-sm text-blue-600">Capitale richiesto</div>
              </div>

              {/* Durata */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 bg-green-200/50 rounded-lg">
                    <Clock className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="text-xs text-green-600 font-medium uppercase tracking-wide">
                    Durata
                  </div>
                </div>
                <div className="text-2xl font-bold text-green-800 mb-1">
                  {selezionato.durataAnni} anni
                </div>
                <div className="text-sm text-green-600">Tempo di rimborso</div>
              </div>

              {/* Tasso */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 bg-purple-200/50 rounded-lg">
                    <Percent className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="text-xs text-purple-600 font-medium uppercase tracking-wide">
                    Tasso
                  </div>
                </div>
                <div className="text-2xl font-bold text-purple-800 mb-1">
                  {formatTasso(selezionato.tassoScelto)}
                </div>
                <div className="text-sm text-purple-600">Tasso fisso</div>
              </div>

              {/* Rata Mensile */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 bg-orange-200/50 rounded-lg">
                    <Calculator className="w-5 h-5 text-orange-600" />
                  </div>
                  <div className="text-xs text-orange-600 font-medium uppercase tracking-wide">
                    Rata
                  </div>
                </div>
                <div className="text-2xl font-bold text-orange-800 mb-1">
                  {formatCurrency(selezionato.rataMensile)}
                </div>
                <div className="text-sm text-orange-600">Al mese</div>
              </div>
            </div>

            {/* Financial Summary */}
            <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200/50">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  Riepilogo finanziario
                </h3>
                <p className="text-slate-600">
                  Il quadro completo del tuo mutuo
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Rata Totale */}
                <div className="text-center">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/50">
                    <div className="text-3xl font-bold text-slate-800 mb-2">
                      {formatCurrency(selezionato.rataTotale)}
                    </div>
                    <div className="text-sm text-slate-600 mb-1 flex justify-center items-center">
                      Rata totale mensile
                      <InfoButton field="rataTotale" onShow={showPopup} />

                    </div>
                    <div className="text-xs text-slate-500">
                      Include le spese aggiuntive
                    </div>
                  </div>
                </div>

                {/* Costi Iniziali */}
                <div className="text-center">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/50">
                    <div className="text-3xl font-bold text-slate-800 mb-2">
                      {formatCurrency(selezionato.totaliCostiExtra)}
                    </div>
                    <div className="text-sm text-slate-600 mb-1 flex justify-center items-center">
                      Costi iniziali
                      <InfoButton field="costiIniziali" onShow={showPopup} />

                    </div>
                    <div className="text-xs text-slate-500">
                      Da pagare all'inizio
                    </div>
                  </div>
                </div>

                {/* TAEG */}
                <div className="text-center">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/50">
                    <div className="text-3xl font-bold text-slate-800 mb-2">
                      {formatTasso(selezionato.taeg)}
                    </div>
                    <div className="text-sm text-slate-600 mb-1 flex justify-center items-center">TAEG
                    <InfoButton field="taeg" onShow={showPopup} />

                    </div>                    <div className="text-xs text-slate-500">
                      Tasso annuo effettivo globale
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200/50 mt-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2 flex items-center justify-center gap-3">
                    <span>🏗️</span>
                    Struttura del mutuo
                  </h3>
                  <p className="text-slate-600">
                    La composizione del tuo finanziamento
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {/* Capitale richiesto */}
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 shadow-sm border border-blue-200/50">
                      <div className="text-xs text-blue-600 font-medium uppercase tracking-wide mb-2">
                        Capitale richiesto
                      </div>
                      <div className="text-2xl font-bold text-blue-800 mb-1">
                        {formatCurrency(selezionato.importoMutuo)}
                      </div>
                      <div className="text-sm text-blue-600">
                        Importo finanziato
                      </div>
                    </div>
                  </div>

                  {/* Interessi totali */}
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 shadow-sm border border-orange-200/50">
                    <div className="text-xs text-orange-600 font-medium uppercase tracking-wide mb-2 flex justify-center items-center">
                        Interessi totali
                        <InfoButton field="interessiTotali" onShow={showPopup} />

                      </div>
                      <div className="text-2xl font-bold text-orange-800 mb-1">
                        {formatCurrency(calcolatore.interessi)}
                      </div>
                      <div className="text-sm text-orange-600">
                        Costo del denaro
                      </div>
                    </div>
                  </div>

                  {/* Montante */}
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 shadow-sm border border-purple-200/50">
                      <div className="text-xs text-purple-600 font-medium uppercase tracking-wide mb-2">
                        Montante
                      </div>
                      <div className="text-2xl font-bold text-purple-800 mb-1">
                        {formatCurrency(calcolatore.montante)}
                      </div>
                      <div className="text-sm text-purple-600">
                        Totale da restituire
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ripartizione del pagamento */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200/50">
                  <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <span>📊</span>
                    Ripartizione del pagamento
                  </h4>

                  <div className="relative">
                    {/* Barra di ripartizione */}
                    <div className="h-8 bg-gray-200 rounded-full overflow-hidden flex mb-4">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white text-sm font-medium transition-all duration-500"
                        style={{
                          width: `${
                            (calcolatore.capitale / calcolatore.montante) * 100
                          }%`,
                        }}
                      >
                        {Math.round(
                          (calcolatore.capitale / calcolatore.montante) * 100
                        )}%
                      </div>
                      <div
                        className="bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center text-white text-sm font-medium transition-all duration-500"
                        style={{
                          width: `${
                            (calcolatore.interessi / calcolatore.montante) * 100
                          }%`,
                        }}
                      >
                        {Math.round(
                          (calcolatore.interessi / calcolatore.montante) * 100
                        )}%
                      </div>
                    </div>

                    {/* Legenda migliorata */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200/50">
                        <div className="lg:w-3 lg:h-3 w-2 h-2  bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                        <div>
                          <span className="text-sm font-medium text-gray-900">Capitale</span>
                          <div className="text-xs text-gray-600">
                            {formatCurrency(calcolatore.capitale)}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200/50">
                        <div className="lg:w-3 lg:h-3 w-2 h-2  bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
                        <div>
                          <span className="text-sm font-medium text-gray-900">Interessi</span>
                          <div className="text-xs text-gray-600">
                            {formatCurrency(calcolatore.interessi)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



          </div>
        </div>
        <div className="space-y-8 ">
          {/* Costs Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Initial Costs */}
            <div className="bg-white  px- pt-15 lg:flex lg:flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <PiggyBank className="w-6 h-6 text-orange-600" />
                Costi iniziali
              </h3>

              <div className="space-y-4 lg:flex-grow">
                {selezionato.spesePerizia && (
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-700 font-medium flex justify-center items-center">
                      Spese perizia
                      <InfoButton field="spesePerizia" onShow={showPopup} />

                    </span>
                    <span
                      className={`font-bold ${
                        selezionato.spesePerizia.importo === 0
                          ? "text-green-600"
                          : "text-gray-900"
                      }`}
                    >
                      {selezionato.spesePerizia.importo === 0
                        ? "Gratis"
                        : formatCurrency(selezionato.spesePerizia.importo)}
                    </span>
                  </div>
                )}
                {selezionato.speseIstruttoria && (
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-700 font-medium flex justify-center items-center">
                      Spese istruttoria
                      <InfoButton field="speseIstruttoria" onShow={showPopup} />

                    </span>
                    <span
                      className={`font-bold ${
                        selezionato.speseIstruttoria.importo === 0
                          ? "text-green-600"
                          : "text-gray-900"
                      }`}
                    >
                      {selezionato.speseIstruttoria.importo === 0
                        ? "Gratis"
                        : formatCurrency(selezionato.speseIstruttoria.importo)}
                    </span>
                  </div>
                )}
                {selezionato.impostaSostitutiva && (
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-700 font-medium flex justify-center items-center">
                      Imposta sostitutiva
                      <InfoButton field="impostaSostitutiva" onShow={showPopup} />

                    </span>
                    <span className="font-bold text-gray-900">
                      {formatCurrency(selezionato.impostaSostitutiva.importo)}
                    </span>
                  </div>
                )}
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <span className="text-gray-700 font-medium flex justify-center items-center">
                    Assicurazione incendio
                    <InfoButton field="assicurazioneIncendio" onShow={showPopup} />

                  </span>
                  <span className="font-bold text-gray-900">
                    {formatCurrency(
                      selezionato.assicurazioniObbligatorie.costoStimatoCasa
                    )}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t-2 border-gray-200">
                <div className="flex justify-between items-center px-4">
                  <span className="text-lg font-bold text-blue-600">
                    Totale
                  </span>
                  <span className="text-xl font-black text-blue-600">
                    {selezionato.totaliCostiExtra === 0
                      ? "Nessun costo iniziale"
                      : formatCurrency(selezionato.totaliCostiExtra)}
                  </span>
                </div>
              </div>
            </div>

            {/* Monthly Costs */}
            <div className="bg-white rounded-3xl  pt-8 lg:flex lg:flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Banknote className="w-6 h-6 text-blue-600" />
                Costi mensili aggiuntivi
              </h3>

              <div className="space-y-4 lg:flex-grow">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <span className="text-gray-700 font-medium flex justify-center items-center">
                    Incasso rata
                    <InfoButton field="incassoRata" onShow={showPopup} />

                  </span>
                  <span className="font-bold text-gray-900">
                    {formatCurrency(selezionato.incassoRata.importo)}
                  </span>
                </div>

                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <span className="text-gray-700 font-medium flex justify-center items-center">
                    Gestione pratica
                    <InfoButton field="gestionePratica" onShow={showPopup} />

                  </span>
                  <span
                    className={`font-bold ${
                      !selezionato.costoGestionePratica.esiste
                        ? "text-green-600"
                        : "text-gray-900"
                    }`}
                  >
                    {selezionato.costoGestionePratica.esiste
                      ? formatCurrency(selezionato.costoGestionePratica.importo)
                      : "Azzerato"}
                  </span>
                </div>

                {selezionato.assicurazioniObbligatorie.assicurazioneVita && (
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-700 font-medium flex items-center justify-center">
                      Assicurazione vita
                      <InfoButton field="assicurazioneVita" onShow={showPopup} />

                    </span>
                    <span className="font-bold text-gray-900">
                      {selezionato.assicurazioniObbligatorie
                        .assicurazioneVitaMensile
                        ? formatCurrency(
                            selezionato.assicurazioniObbligatorie
                              .costoStimatoVita
                          )
                        : `${selezionato.assicurazioniObbligatorie.costoStimatoVita}%`}
                    </span>
                  </div>
                )}

                {selezionato.altriTipiSpese.importo !== 0 && (
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-700 font-medium flex justify-center items-center">
                      Altri costi
                      <InfoButton field="assicurazioneVita" onShow={showPopup} />

                    </span>
                    <span className="font-bold text-gray-900">
                      {formatCurrency(selezionato.altriTipiSpese.importo)}
                      {selezionato.altriTipiSpese.annuali ? "/anno" : "/mese"}
                    </span>
                  </div>
                )}
              </div>

              {/* Divisore e Totale */}
              <div className="mt-6 pt-4 border-t-2 border-gray-200">
                <div className="flex justify-between items-center px-4">
                  <span className="text-lg font-bold text-blue-600">
                    Totale
                  </span>
                  <span className="text-xl font-black text-blue-600">
                    {speseMensiliTot === 0
                      ? "Nessun costo mensile"
                      : `${formatCurrency(speseMensiliTot)}/mese`}{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Requirements Section */}
          <div className="bg-white rounded-3xl  pt-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <FileText className="w-6 h-6 text-purple-600" />
              Requisiti e condizioni
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {selezionato.eta && (
                <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-gray-900">Età richiedente</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="text-gray-700">
                      Da <strong>{selezionato.eta.minima || 18} anni</strong>
                    </div>
                    <div className="text-gray-700">
                      Fino a <strong>{selezionato.eta.massima} anni</strong>
                    </div>
                    {selezionato.eta.maxUnder36 && (
                      <div className="mt-3">
                        <span className="bg-purple-100 text-purple-700 text-xs px-3 py-2  rounded-full font-medium">
                          🎯 Vantaggi Under 36
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Building2 className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="font-bold text-gray-900">Immobile</h3>
                </div>
                <div>
                  {selezionato.soloClassiAB ? (
                    <div>
                      <div className="font-bold text-emerald-700 mb-2">
                        {Array.isArray(selezionato.soloClassiLista) &&
                        selezionato.soloClassiLista.length > 2 ? (
                          <p>Solo classi A, B o C</p>
                        ) : (
                          <p>Solo classi A e B</p>
                        )}
                      </div>
                      <div className="text-sm text-gray-600">
                        Sconti per alta efficienza energetica
                      </div>
                    </div>
                  ) : (
                    <div className="font-bold text-green-700">
                      Tutte le classi energetiche
                    </div>
                  )}
                </div>
              </div>

              {selezionato.assicurazioniObbligatorie && (
                <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Shield className="w-5 h-5 text-orange-600" />
                    </div>
                    <h3 className="font-bold text-gray-900">Assicurazioni</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />

                      <span className="text-sm text-gray-700">
                        <strong>Incendio:</strong> Obbligatoria
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      {selezionato.assicurazioniObbligatorie
                        .assicurazioneVita ? (
                        <CheckCircle className="w-4 h-4  text-green-500" />
                      ) : (
                        <XCircle className="w-4 h-4  text-red-500" />
                      )}
                      <span className="text-sm text-gray-700">
                        <strong>Vita:</strong>{" "}
                        {selezionato.assicurazioniObbligatorie.assicurazioneVita
                          ? "Obbligatoria"
                          : "Facoltativa"}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Insurance Warning */}
            {selezionato.assicurazioniObbligatorie?.assicurazioneVita && (
              <div className="mt-8 p-6 bg-amber-50 border-l-4 border-amber-400 rounded-r-xl">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-amber-800 mb-1">
                      Assicurazione vita obbligatoria
                    </p>
                    <p className="text-amber-700 text-sm">
                      L'assicurazione sulla vita è obbligatoria per accedere a
                      questo mutuo. Il costo riportato è indicativo.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="max-w-4xl mx-auto pt-10">
              {/* Header minimalista */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-5 h-5 rounded flex items-center justify-center">
                    <ChartPie className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 flex justify-center items-center">
                    Analisi dell'offerta


                    <InfoButton field="analisiOfferta" onShow={showPopup} />
                  </h2>
                </div>
              </div>

              {((selezionato.proMutuo && selezionato.proMutuo.length > 0) ||
                (selezionato.controMutuo &&
                  selezionato.controMutuo.length > 0)) && (
                <div className="space-y-8 ">
                  {/* Sezione Vantaggi */}
                  {selezionato.proMutuo && selezionato.proMutuo.length > 0 && (
                    <div className="group">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-6 h-6 bg-emerald-50 rounded-md flex items-center justify-center border border-emerald-100">
                          <Award className="w-4 h-4 text-emerald-600" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900">
                          Vantaggi
                        </h3>
                      </div>

                      <div className="space-y-2 pl-4">
                        {selezionato.proMutuo.map((pro, index) => (
                          <div
                            key={index}
                            className="group/item flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-150"
                          >
                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text- text-gray-700 leading-relaxed">
                              {pro.descrizione}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Sezione Limitazioni */}
                  {selezionato.controMutuo &&
                    selezionato.controMutuo.length > 0 && (
                      <div className="group">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-6 h-6 bg-amber-50 rounded-md flex items-center justify-center border border-amber-100">
                            <AlertCircle className="w-4 h-4 text-amber-600" />
                          </div>
                          <h3 className="text-lg font-medium text-gray-900">
                            Limitazioni
                          </h3>
                        </div>

                        <div className="space-y-2 pl-4">
                          {selezionato.controMutuo.map((contro, index) => (
                            <div
                              key={index}
                              className="group/item flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-150"
                            >
                              <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text text-gray-700 leading-relaxed">
                                {contro.descrizione}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                </div>
              )}
            </div>


              {/* score pratica */}
            <div className="pt-10">
              <div
                className={`flex items-center gap-3 `}
              >
                <h2 className="text-xl font-semibold text-gray-800 flex items-center justify-center gap-3">
                  <Sparkles className="w-6 h-6 text-blue-500" />
                  <div className="flex justify-center items-center gap-1">

                  Valutazione pratica

                  <InfoButton field="valutazioneCreditizia" onShow={showPopup} />
                  </div>
                </h2>
                <ScoreBadge score={selezionato.score} />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                {selezionato.praticaScore?.pro?.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-base font-medium text-gray-700 mb-3 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Punti di forza
                    </h3>
                    <div className="space-y-2 ">
                      {selezionato.praticaScore.pro.map((pro, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-md border-l-2 border-green-400 transition-colors duration-150"
                        >
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700 text-sm leading-relaxed flex items-center">
                            {pro}
                            <ScoreButton field={pro} onShow={showPopupScore} />


                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selezionato.praticaScore?.contro?.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-base font-medium text-gray-700 mb-3 flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-orange-500" />
                      Punti di attenzione
                    </h3>
                    <div className="space-y-2">
                      {selezionato.praticaScore.contro.map((contro, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-md border-l-2 border-orange-400 transition-colors duration-150"
                        >
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700 text-sm leading-relaxed">
                            {contro}
                            <ScoreButton field={contro} onShow={showPopupScore} />

                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Additional Information */}
            {selezionato.scontisticheGenerali.esistono && (
              <div className="bg-white rounded-3xl pt-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Home className="w-6 h-6 text-green-600" />
                  Sconti per condizioni specifiche
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                  {selezionato.scontisticheGenerali.listaSconti.map(
                    (item, index) => (
                      <div
                        key={index}
                        className="p-6 bg-green-50 rounded-2xl border border-green-100"
                      >
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-700 mb-2">
                            -{formatNumeroDex(item.percentualeSconto)}%
                          </div>
                          <div className="text-sm font-medium text-gray-700">
                            {item.causaleSconti}
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {/* Rate Table by Duration */}
            {selezionato.tassiPerLTV &&
              Object.keys(selezionato.tassiPerLTV).length > 0 && (
                <div className="bg-white rounded-3xl  pt-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Calculator className="w-6 h-6 text-blue-600" />
                    Tassi per LTV e durata
                  </h2>

                  <div className="space-y-6 ">
                    {Object.entries(selezionato.tassiPerLTV).map(
                      ([ltvRange, tassi]) => (
                        <div
                          key={ltvRange}
                          className="border border-gray-200 rounded-2xl overflow-hidden"
                        >
                          <div className="bg-gray-50 p-4 border-b border-gray-200">
                            <h3 className="font-bold text-gray-900">
                              LTV: {formatLTV(ltvRange)}%
                            </h3>
                          </div>
                          <div className="p-4">
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                              {Object.entries(tassi).map(([anni, tasso]) => (
                                <div
                                  key={anni}
                                  className="text-center p-3 bg-blue-50 rounded-xl border border-blue-100"
                                >
                                  <div className="text-sm text-gray-600 mb-1">
                                    {anni} anni
                                  </div>
                                  <div className="font-bold text-blue-700">
                                    {selezionato.irs
                                      ? getTassoIrs(tasso, anni)
                                      : formatTasso(tasso)}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}

            {/* Call to Action */}

            {/* Disclaimer */}
            <div className="mt-8">
              <Disclaimer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MutuoRedesignPart1;
