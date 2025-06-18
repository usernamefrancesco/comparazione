"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  Check,
  Calculator,
  Home,
  User,
  Briefcase,
  CreditCard,
  
} from "lucide-react";
import { getFasciaEta, provincieItaliane } from "@/lib/utils";
import { sogliePoverta2023 } from "@/lib/utils";
import {
  typeConsulenzaAvanzata,
  Mutuo
} from "@/lib/interface";
import { useMutuo } from "@/Context/MutuoContext";
import { consulenzaAvanzata } from "@/action/Claude.action";
import { ListaMutuiAv } from "./ListaMutuiAv";
import Disclamair from "./Disclamair";
import { Inter } from "next/font/google";
// Dati iniziali di default
const datiIniziali: typeConsulenzaAvanzata = {
  valoreImmobile: "€ 100.000",
  importoMutuo: "€ 80.000",
  durataMutuo: "30",
  tipoTasso: "Fisso",
  provinciaImmobile: "Milano (MI)",
  reddito: "€ 2.000",
  isee: 'Non lo so',
  eta: "25",
  classeEnergetica: "Non lo so",
  familiariCarico: false,
  numeroPersoneACarico: "0",
  personeCarico: [],
  totaleSussistenza: 1200,
  sposato: true,
  tipoContratto: "Tempo indeterminato",
  dataAssunzione: "05/2020",
  finanziamentiBool: false,
  finanziamentiTot: "€ 0",
  scadenzaFinanziamenti: "10/2025",
  regione: "Lombardia",
  score: 0,
};

const inter = Inter({
  subsets: ["latin"],
});

export default function ConsulenzaAvanzata() {
  const {
    formData,
    setFormData,
    scoreMedio,
    setScoreMedio,
    setRisultatiRicerca,
    risultatiRicerca,
  } = useMutuo();

  const [isInitialized, setIsInitialized] = useState(false);

  const [dati, setDati] = useState<typeConsulenzaAvanzata>(datiIniziali);

  const [openDropdown, setOpenDropdown] = useState(null);



  // PRIMO USEEFFECT: Recupera i dati dal sessionStorage al mount
  useEffect(() => {
    const storageKey = `mutuo-1`;

    try {
      const storedData = sessionStorage.getItem(storageKey);
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setDati(parsedData);
        setFormData(parsedData);
      } else if (formData) {
        setDati(formData);
      }
    } catch (error) {
      console.error("Errore nel recupero dei dati salvati:", error);
      if (formData) {
        setDati(formData);
        setFormData(formData);
      }
    } finally {
      setIsInitialized(true);
    }
  }, []);

  // SECONDO USEEFFECT: Sincronizza con il context e salva in sessionStorage
  useEffect(() => {
    if (!isInitialized) return;

    const storageKey = `mutuo-1`;
    setFormData(dati);

    try {
      sessionStorage.setItem(storageKey, JSON.stringify(dati));
    } catch (error) {
      console.error("Errore nel salvataggio dei dati:", error);
    }
  }, [dati, setFormData, isInitialized]);

  useEffect(() => {
    let totale = 0;
    const fasciaRichiedente = getFasciaEta(dati.eta);
    if (fasciaRichiedente !== null) {
      totale += sogliePoverta2023[
        dati.regione as keyof typeof sogliePoverta2023
      ][fasciaRichiedente] || 0;    } else {
        console.warn('errore con la regione')
      // gestisci il caso “fascia mancante” (default, errore, 0…)
    }
    
    if (dati.familiariCarico && Array.isArray(dati.personeCarico) && dati.personeCarico.length > 0) {
      // ← CORRETTO
      dati.personeCarico.forEach((etaStr) => {
        if (!etaStr.portatoreReddito) {
          const fascia = getFasciaEta(etaStr.eta);
          if (fascia !== null) {
            totale += sogliePoverta2023[
              dati.regione as keyof typeof sogliePoverta2023
            ][fascia] || 0;    } else {
              console.warn('errore con la regione 2')
            // gestisci il caso “fascia mancante” (default, errore, 0…)
          }
        }
      });
    }
    setDati((prev) => ({ ...prev, totaleSussistenza: totale }));

    setFormData((prev: any) => ({
      ...prev,
      totaleSussistenza: totale,
    }));
  }, [dati.eta, dati.familiariCarico, dati.personeCarico]);
  useEffect(() => {
    if (!isInitialized) return;
  
    async function ListaMutuiFirsClick() {
      try {
        const result = await consulenzaAvanzata(dati);
  
        // Check if result is an array (empty results case)
        if (Array.isArray(result)) {
          setRisultatiRicerca([]);
          return;
        }
  
        // Check if result has the expected structure
        if (result && 'risultati' in result) {
          setRisultatiRicerca(result.risultati);
          setScoreMedio(result.scoreGenerale);
        } else {
          // Handle unexpected result structure
          setRisultatiRicerca([]);
        }
      } catch (error) {
        console.error('Error in ListaMutuiFirsClick:', error);
        setRisultatiRicerca([]);
      }
    }
  
    ListaMutuiFirsClick();
  }, [isInitialized]);
  
  // Alternative approach using type guards
  function hasRisultati(result: any): result is { risultati: any[]; scoreGenerale: any } {
    return result && typeof result === 'object' && 'risultati' in result;
  }
  
  // Using the type guard:
  useEffect(() => {
    if (!isInitialized) return;
  
    async function ListaMutuiFirsClick() {
      try {
        const result = await consulenzaAvanzata(dati);
  
        if (hasRisultati(result)) {
          setRisultatiRicerca(result.risultati);
          setScoreMedio(result.scoreGenerale);
        } else {
          setRisultatiRicerca([]);
        }
      } catch (error) {
        console.error('Error in ListaMutuiFirsClick:', error);
        setRisultatiRicerca([]);
      }
    }
  
    ListaMutuiFirsClick();
  }, [isInitialized]);

  if (!isInitialized) {
    return (
      <div className="max-w-5xl mx-auto p-8 bg-white">
        <div className="flex items-center justify-center h-64">
          <div className="text-gray-500">Caricamento...</div>
        </div>
      </div>
    );
  }



  const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const raw = value.replace(/[^\d]/g, "");
    const formatted = raw ? "€ " + parseInt(raw).toLocaleString("it-IT") : "";
    setDati((prev) => ({ ...prev, [name]: formatted }));
    setFormData((prev: any) => ({ ...prev, [name]: formatted }))
  };

  
  

  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const raw = e.target.value.replace(/\D/g, "");
    let formatted = raw;
    if (raw.length > 2) {
      formatted = `${raw.slice(0, 2)}/${raw.slice(2, 6)}`;
      if (Number(raw.slice(0, 2)) > 12 || Number(raw.slice(2, 6)) > 2025)
        console.warn("errore");
    }
    setDati((prev) => ({ ...prev, [name]: formatted }));
    setFormData((prev: any) => ({ ...prev, [name]: formatted }));

  };

  const clearNumber = (number: string) => {
    const raw = Number(number.replace(/[^\d]/g, ""));
    return raw;
  };

  const handleLtv = () => {
    const importoMutuo = clearNumber(dati.importoMutuo);
    const valoreImmobile = clearNumber(dati.valoreImmobile);

    return ((importoMutuo / valoreImmobile) * 100).toFixed(0);
  };

  const DropdownField = ({ label, value, options, onChange, name }: any) => (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpenDropdown(openDropdown === name ? null : name)}
        className="w-full h-10 px-3 py-2 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <span className="text-gray-900 text-sm">{value}</span>
        <ChevronDown
          className={`h-4 w-4 text-gray-400 transition-transform ${
            openDropdown === name ? "rotate-180" : ""
          }`}
        />
      </button>
      {openDropdown === name && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-48 overflow-y-auto">
          {options.map((option: any) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                onChange(option);
                setOpenDropdown(null);
              }}
              className="w-full px-3 py-2 text-left text-sm text-gray-900 hover:bg-gray-50 flex items-center justify-between"
            >
              {option}
              {value === option && <Check className="h-4 w-4 text-blue-600" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
  const handleFamiliariCaricoToggle = () => {
    setDati((prev) => ({
      ...prev,
      familiariCarico: !prev.familiariCarico,
      // Reset immediato quando si disattiva
      ...(prev.familiariCarico
        ? {
            numeroPersoneACarico: "0",
            personeCarico: [],
          }
        : {}),
    }));
    setFormData((prev: any) => ({
      ...prev,
      familiariCarico: !prev.familiariCarico,
      // Reset immediato quando si disattiva
      ...(prev.familiariCarico
        ? {
            numeroPersoneACarico: "0",
            personeCarico: [],
          }
        : {}),
    }));
  };

  const ToggleField = ({
    checked,
    onChange,
  }: {
    checked: boolean;
    onChange: () => void;
  }) => (
    <button
      type="button"
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors outline-none  ${
        checked ? "bg-blue-600" : "bg-gray-200"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-lg transition-transform ${
          checked ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );

  const handleNumeroPersoneACaricoChange = (value: string) => {
    const numeroPersone = parseInt(value) || 0;
    const nuovePersone: {
      eta: number;
      portatoreReddito: boolean;
    }[] = [];

    for (let i = 0; i < numeroPersone; i++) {
      if (i < dati.personeCarico.length) {
        nuovePersone.push(dati.personeCarico[i]);
      } else {
        nuovePersone.push({ eta: 0, portatoreReddito: false });
      }
    }

    setDati((prev) => ({
      ...prev,
      numeroPersoneACarico: value,
      personeCarico: nuovePersone,
    }));
    setFormData((prev: any) => ({
      ...prev,
      numeroPersoneACarico: value,
      personeCarico: nuovePersone,
    }));
  };

  const handleEtaPersonaChange = (index: number, eta: string) => {
    const etaNumber = parseInt(eta) || 0;
    const nuovePersone = [...dati.personeCarico];
    nuovePersone[index] = { ...nuovePersone[index], eta: etaNumber };

    setDati((prev) => ({
      ...prev,
      personeCarico: nuovePersone,
    }));
    setFormData((prev: any) => ({
      ...prev,
      personeCarico: nuovePersone,
    }));
  };

  const handlePortatoreRedditoChange = (index: number) => {
    const nuovePersone = [...dati.personeCarico];
    nuovePersone[index] = {
      ...nuovePersone[index],
      portatoreReddito: !nuovePersone[index].portatoreReddito,
    };

    setDati((prev) => ({
      ...prev,
      personeCarico: nuovePersone,
    }));
    setFormData((prev: any) => ({
      ...prev,
      personeCarico: nuovePersone,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await consulenzaAvanzata(dati);

      // Check if result is an array (empty results case)
      if (Array.isArray(result)) {
        setRisultatiRicerca([]);
        return;
      }

      // Check if result has the expected structure
      if (result && 'risultati' in result) {
        setRisultatiRicerca(result.risultati);
        setScoreMedio(result.scoreGenerale);
      } else {
        // Handle unexpected result structure
        setRisultatiRicerca([]);
      }

  };


  return (
    <div className="max-w-5xl mx-auto   w-full bg-white">
      
      {/* Header */}
      

      <div className="space-y-8">
        {/* Sezione Immobile */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <Home className="h-5 w-5 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-900">
              Dettagli Immobile
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Valore immobile
              </label>
              <input
                type="text"
                name="valoreImmobile"
                value={dati.valoreImmobile}
                onChange={handleChangeNumber}
                placeholder="€ 0"
                className="w-full h-10 px-3 py-2  border border-gray-200 rounded-xl text-sm  text-gray-900 focus:bg-white focus:border-blue-300 focus:ring-4 focus:ring-blue-50 transition-all duration-200 outline-none"
              />
            </div>

            <div className="space-y-2 ">
              <label className="text-sm font-medium text-gray-700 flex items-end gap-1">
                Importo mutuo
                <span className="text-[11px]">{`(${handleLtv()} %)`}</span>
              </label>

              <div className="relative w-full">
                <input
                  type="text"
                  name="importoMutuo"
                  value={dati.importoMutuo}
                  onChange={handleChangeNumber}
                  className="w-full h-10 px-3 py-2  border border-gray-200 rounded-xl text-sm  text-gray-900 focus:bg-white focus:border-blue-300 focus:ring-4 focus:ring-blue-50 transition-all duration-200 outline-none"
                />
              </div>
            </div>

            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Durata del mutuo
              </label>
              <DropdownField
                label="Durata del mutuo"
                value={`${dati.durataMutuo} anni`}
                options={["30", "25", "20", "15", '10']}
                onChange={(value: string) =>{
                  setDati((prev) => ({ ...prev, durataMutuo: value }))
                  setFormData((prev: any) => ({ ...prev, durataMutuo: value }))}

                }
                name="durataMutuo"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Tipo di tasso
              </label>
              <DropdownField
                label="Tipo di tasso"
                value={dati.tipoTasso}
                options={["Fisso", "Variabile", "Misto", "Tutte le tipologie"]}
                onChange={(value: string) =>{
                  setDati((prev) => ({ ...prev, tipoTasso: value }))
                  setFormData((prev: any) => ({ ...prev, tipoTasso: value }))}

                }
                name="tipoTasso"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Provincia dell'immobile
              </label>
              <DropdownField
                label="Provincia"
                value={dati.provinciaImmobile}
                options={provincieItaliane}
                onChange={(value: string) =>{
                  setDati((prev) => ({ ...prev, provinciaImmobile: value }))
                  setFormData((prev: any) => ({ ...prev, provinciaImmobile: value }))

                }
                }
                name="provinciaImmobile"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Classe energetica A, B o C?
              </label>
              <DropdownField
                label="Classe energetica"
                value={dati.classeEnergetica}
                options={["Si", "No", "Non lo so"]}
                onChange={(value: string) =>{
                  setDati((prev) => ({ ...prev, classeEnergetica: value }))
                  setFormData((prev: any) => ({ ...prev, classeEnergetica: value }))

                }
                  
                }
                name="classeEnergetica"
              />
            </div>
          </div>
        </div>

        {/* Sezione Profilo Personale - Base */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <User className="h-5 w-5 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-900">
              Profilo Personale
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Reddito netto mensile
              </label>
              <input
                type="text"
                name="reddito"
                value={dati.reddito}
                onChange={handleChangeNumber}
                className="w-full h-10 px-3 py-2  border border-gray-200 rounded-xl text-sm  text-gray-900 focus:bg-white focus:border-blue-300 focus:ring-4 focus:ring-blue-50 transition-all duration-200 outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Età</label>
              <input
                type="text"
                name="eta"
                value={dati.eta}
                onChange={(e) => {
                  setDati((prev) => ({ ...prev, eta: e.target.value }));
                  setFormData((prev: any) => ({ ...prev, eta: e.target.value }));

                }}
                className="w-full h-10 px-3 py-2  border border-gray-200 rounded-xl text-sm  text-gray-900 focus:bg-white focus:border-blue-300 focus:ring-4 focus:ring-blue-50 transition-all duration-200 outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Isee maggiore di € 40.000?
              </label>
              <DropdownField
                label="Isee"
                value={dati.isee}
                options={["Si", "No", "Non lo so"]}
                onChange={(value: 'Non lo so' | 'No' | 'Si') =>{
                  setDati((prev) => ({ ...prev, isee: value }))
                  setFormData((prev: any) => ({ ...prev, isee: value }))

                }
                  
                }
                name="isee"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Familiari a carico
              </label>
              <div className="flex items-center h-10">
                <ToggleField
                  checked={dati.familiariCarico}
                  onChange={handleFamiliariCaricoToggle}
                />
                <span className="ml-3 text-sm text-gray-600">
                  {dati.familiariCarico ? "Sì" : "No"}
                </span>
              </div>
            </div>

            
          </div>
        </div>

        {/* Sezione Familiari a Carico - Separata e a larghezza piena */}
        {dati.familiariCarico && (
          <div className="space-y-4 ">
            <div className="flex items-center gap-2 mb-4">
              <User className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">
                Dettagli Familiari a Carico
              </h3>
            </div>

            <div className="border-l-2 border-blue-100 px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-1">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Numero familiari a carico
                  </label>
                  <input
                    type="text"
                    name="numeroPersoneACarico"
                    value={dati.numeroPersoneACarico}
                    onChange={(e) =>
                      handleNumeroPersoneACaricoChange(
                        e.target.value.replace(/[^\d]/g, "")
                      )
                    }
                    className="w-full h-10 px-3 py-2  border border-gray-200 rounded-xl text-sm  text-gray-900 focus:bg-white focus:border-blue-300 focus:ring-4 focus:ring-blue-50 transition-all duration-200 outline-none"
                    placeholder="Es. 2"
                  />
                </div>
              </div>

              {Number(dati.numeroPersoneACarico) > 0 && (
                <div className="space-y-4">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Dettagli dei componenti
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {dati.personeCarico &&
                      dati.personeCarico.map((persona, index) => (
                        <div
                          key={index}
                          className="bg-white p-4 rounded-lg border border-blue-200 shadow-sm"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <label className="text-sm font-medium text-gray-700">
                              Familiare {index + 1}
                            </label>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="space-y-1">
                              <label className="text-xs text-gray-500">
                                Età
                              </label>
                              <input
                                type="text"
                                placeholder="Età"
                                value={persona.eta || ""}
                                onChange={(e) =>
                                  handleEtaPersonaChange(
                                    index,
                                    e.target.value.replace(/[^\d]/g, "")
                                  )
                                }
                                className="w-full h-10 px-3 py-2  border border-gray-200 rounded-xl text-sm  text-gray-900 focus:bg-white focus:border-blue-300 focus:ring-4 focus:ring-blue-50 transition-all duration-200 outline-none"
                              />
                            </div>

                            <div className="space-y-1">
                              <label className="text-xs text-gray-500">
                                Portatore di reddito
                              </label>
                              <div className="flex items-center h-9">
                                <ToggleField
                                  checked={persona.portatoreReddito}
                                  onChange={() =>
                                    handlePortatoreRedditoChange(index)
                                  }
                                />
                                <span className="ml-3 text-sm text-gray-600">
                                  {persona.portatoreReddito ? "Sì" : "No"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Sezione Lavoro */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="h-5 w-5 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-900">
              Situazione Lavorativa
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Posizione lavorativa
              </label>
              <select
                name="tipoContratto"
                value={dati.tipoContratto}
                onChange={(e) =>{

                  setDati((prev) => ({
                    ...prev,
                    tipoContratto: e.target.value,
                  }))
                  setFormData((prev: any) => ({
                    ...prev,
                    tipoContratto: e.target.value,
                  }))
                }
                }
                className="w-full h-10 px-3 py-2  border border-gray-200 rounded-xl text-sm  text-gray-900 focus:bg-white focus:border-blue-300 focus:ring-4 focus:ring-blue-50 transition-all duration-200 outline-none"
              >
                <option value="Tempo indeterminato">
                  Dipendente tempo indeterminato
                </option>
                <option value="Tempo determinato">
                  Dipendente tempo determinato
                </option>
                <option value="Autono P. IVA">Autonomo P. IVA</option>
                <option value="Pensionato">Pensionato</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Data di assunzione
              </label>
              <input
                type="text"
                name="dataAssunzione"
                value={dati.dataAssunzione}
                onChange={handleData}
                placeholder="MM/YYYY"
                className="w-full h-10 px-3 py-2  border border-gray-200 rounded-xl text-sm  text-gray-900 focus:bg-white focus:border-blue-300 focus:ring-4 focus:ring-blue-50 transition-all duration-200 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Sezione Finanziamenti */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <CreditCard className="h-5 w-5 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-900">
              Finanziamenti Esistenti
            </h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <ToggleField
                checked={dati.finanziamentiBool}
                onChange={() =>{
                  setDati((prev) => ({
                    ...prev,
                    finanziamentiBool: !prev.finanziamentiBool,
                  }))
                  setFormData((prev: any) => ({
                    ...prev,
                    finanziamentiBool: !prev.finanziamentiBool,
                  }))
                }
                }
              />
              <span className="text-sm font-medium text-gray-700">
                Ho finanziamenti in corso
              </span>
            </div>

            {dati.finanziamentiBool && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-8 border-l-2 border-blue-100">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Rata mensile totale
                  </label>
                  <input
                    type="text"
                    name="finanziamentiTot"
                    value={dati.finanziamentiTot}
                    onChange={handleChangeNumber}
                    className="w-full h-10 px-3 py-2 bg-white border border-gray-200 rounded-lg hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Scadenza finanziamenti
                  </label>
                  <input
                    type="text"
                    name="scadenzaFinanziamenti"
                    value={dati.scadenzaFinanziamenti}
                    onChange={handleData}
                    placeholder="MM/YYYY"
                    className="w-full h-10 px-3 py-2 bg-white border border-gray-200 rounded-lg hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt- flex flex-col gap-1">
          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full bg-orange-400 hover:bg-orange-500 text-white font-medium py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 flex items-center justify-center gap-2"
          >
            <Calculator className="h-5 w-5" />
            Cerca il mutuo
          </button>
          <div className="flex justify-center pt-2 text-gray-500">
          <p className="text-xs max-w-11/12 text-center">I dati inseriti non verranno salvati e saranno utilizzati solo per il calcolo in tempo reale. La ricerca è anonima e non comporta alcuna segnalazione a CRIF o altri sistemi di informazioni creditizie.</p>
        </div>
        </div>
        
      </div>
      <ListaMutuiAv risultati={risultatiRicerca} />
      <Disclamair />
    </div>
  );
}
