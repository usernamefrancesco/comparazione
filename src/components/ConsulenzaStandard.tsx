'use client'
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown,Euro, Search, Home, Calculator, MapPin, Banknote, Calendar, Zap } from "lucide-react";
import { provincieItaliane } from "@/lib/utils";
import { FormDataBasic, Mutuo } from "@/lib/interface";
import { CardListaAlternativa } from "./CardListaAlternativa";
import { useMutuo } from "@/Context/MutuoContext";
import { consulenzaStandard } from "@/action/mutui2.action";
import Disclamair from "./Disclamair";
import Image from "next/image";
import { sortLista } from "@/action/mutui.action";


export default function ConsulenzaStandard() {
  const {consNormale, setConsNormale, risultatiNormali, setRisultatiNormali, ordinamentoNormale} = useMutuo()


  const [activeDropdown, setActiveDropdown] = useState(null);
  const inputRef = useRef(null);

  const anniMutuo = `${consNormale.durataMutuo} anni`;

  
  const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const raw = value.replace(/[^\d]/g, "");
    const formatted = raw ? "€ " + parseInt(raw).toLocaleString("it-IT") : "";
    setConsNormale((prev: FormDataBasic) => ({ ...prev, [name]: formatted }));
  };

  const handleChangeDurata = (e: any) => {
    const raw = e.target.value.replace(/\D/g, "");
    const formatted = raw ? `${raw}` : "";
    setConsNormale((prev: FormDataBasic) => ({ ...prev, durataMutuo: formatted }));
  };

  const toggleDropdown = (name: any) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const selectOption = (field: string, value: string) => {
    setConsNormale((prev: FormDataBasic) => ({ ...prev, [field]: value }));
    setActiveDropdown(null);
  };
  const durataMutuo = ['30', '25', '20', '15', '10']
  const tipoTassoOptions = ["Fisso", "Variabile", "Misto", "Tutte le tipologie"];
  const classeEnergeticaOptions = ['Si', 'No', "Non lo so"];

  const iseeOptions = ['Si', 'No', "Non lo so"]


  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const result = await consulenzaStandard(consNormale);
      if (!result || result.length === 0) {
        setRisultatiNormali([]);
        return;
      }
      
      const resultFinale = await sortLista(result, ordinamentoNormale);
      if (!resultFinale) {
        setRisultatiNormali([]);
        return;
      }
      
      setRisultatiNormali(resultFinale);
    } catch (error) {
      console.error('Errore nel caricamento dei risultati:', error);
      setRisultatiNormali([]);
    }
  }

  useEffect(() => {
    async function handleLista() {
      try {
        const result = await consulenzaStandard(consNormale);
        if (!result || result.length === 0) {
          setRisultatiNormali([]);
          return;
        }
        
        const resultFinale = await sortLista(result, ordinamentoNormale);
        if (!resultFinale) {
          setRisultatiNormali([]);
          return;
        }
        
        setRisultatiNormali(resultFinale);
      } catch (error) {
        console.error('Errore nel caricamento dei risultati:', error);
        setRisultatiNormali([]);
      }
    }
    
    handleLista();
  }, [ ordinamentoNormale]);





 
  return (
    <div className="max-w-5xl mx-auto w-full  bg-white">
      <div className=" ">
        {/* Header */}
        

        {/* Form */}
        <form className="bg-white rounded-3xl  " onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Valore Immobile */}
            <div className="group relative">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Home className="w-4 h-4 text-green-600" />
                </div>
                <label className="text-sm font-medium text-gray-700">
                  Valore immobile
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="valoreImmobile"
                  value={consNormale.valoreImmobile}
                  onChange={handleChangeNumber}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-lg font-medium text-gray-900 focus:bg-white focus:border-blue-300 focus:ring-4 focus:ring-blue-50 transition-all duration-200 outline-none"
                  placeholder="€ 0"
                />
              </div>
            </div>

            {/* Importo Mutuo */}
            <div className="group relative">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Calculator className="w-4 h-4 text-blue-600" />
                </div>
                <label className="text-sm font-medium text-gray-700">
                  Importo mutuo
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="importoMutuo"
                  value={consNormale.importoMutuo}
                  onChange={handleChangeNumber}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-lg font-medium text-gray-900 focus:bg-white focus:border-blue-300 focus:ring-4 focus:ring-blue-50 transition-all duration-200 outline-none"
                  placeholder="€ 0"
                />
              </div>
            </div>

            {/* Durata Mutuo */}
          
            <div className="group relative">
            <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-purple-600" />
                </div>
                <label className="text-sm font-medium text-gray-700">
                  Durata del mutuo
                </label>
              </div>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => toggleDropdown('durataMutuo')}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-lg font-medium text-gray-900 focus:bg-white focus:border-blue-300 focus:ring-4 focus:ring-blue-50 transition-all duration-200 outline-none flex items-center justify-between"
                >
                  <span>{consNormale.durataMutuo} anni</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${activeDropdown === 'durataMutuo' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'durataMutuo' && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden">
                    {durataMutuo.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => selectOption('durataMutuo', option)}
                        className="w-full px-4 py-3 text-left hover:bg-gray-50 text-gray-900 transition-colors duration-150"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Tipo Tasso */}
            <div className="group relative">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-orange-600" />
                </div>
                <label className="text-sm font-medium text-gray-700">
                  Tipo di tasso
                </label>
              </div>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => toggleDropdown('tipoTasso')}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-lg font-medium text-gray-900 focus:bg-white focus:border-blue-300 focus:ring-4 focus:ring-blue-50 transition-all duration-200 outline-none flex items-center justify-between"
                >
                  <span>{consNormale.tipoTasso}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${activeDropdown === 'tipoTasso' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'tipoTasso' && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden">
                    {tipoTassoOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => selectOption('tipoTasso', option)}
                        className="w-full px-4 py-3 text-left hover:bg-gray-50 text-gray-900 transition-colors duration-150"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Provincia */}
            <div className="group relative">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-red-600" />
                </div>
                <label className="text-sm font-medium text-gray-700">
                  Provincia dell'immobile
                </label>
              </div>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => toggleDropdown('provincia')}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-lg font-medium text-gray-900 focus:bg-white focus:border-blue-300 focus:ring-4 focus:ring-blue-50 transition-all duration-200 outline-none flex items-center justify-between"
                >
                  <span>{consNormale.provinciaImmobile}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${activeDropdown === 'provincia' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'provincia' && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto">
                    {provincieItaliane.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => selectOption('provinciaImmobile', option)}
                        className="w-full px-4 py-3 text-left hover:bg-gray-50 text-gray-900 transition-colors duration-150"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Reddito */}
            <div className="group relative">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Banknote className="w-4 h-4 text-yellow-600" />
                </div>
                <label className="text-sm font-medium text-gray-700">
                  Reddito mensile
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="reddito"
                  value={consNormale.reddito}
                  onChange={handleChangeNumber}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-lg font-medium text-gray-900 focus:bg-white focus:border-blue-300 focus:ring-4 focus:ring-blue-50 transition-all duration-200 outline-none"
                  placeholder="€ 0"
                />
              </div>
            </div>

            {/* Età */}
            <div className="group relative">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-indigo-600" />
                </div>
                <label className="text-sm font-medium text-gray-700">
                  Ho meno di 36 anni
                </label>
              </div>
              <div className="relative pt-3">
                <button
                  type="button"
                  onClick={() => setConsNormale((prev: FormDataBasic) => ({ ...prev, eta: !prev.eta }))}
                  className={` relative inline-flex h-7 w-13 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-blue-100 ${
                    consNormale.eta ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-lg transition-transform duration-200 ${
                      consNormale.eta ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* ISEE  */}
            <div className="group relative">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-fuchsia-100 rounded-lg flex items-center justify-center">
                  <Euro className="w-4 h-4 text-fuchsia-600" />
                </div>
                <label className="text-sm font-medium text-gray-700">
                 Isee maggiore di € 40.000
                </label>
              </div>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => toggleDropdown('isee')}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-lg font-medium text-gray-900 focus:bg-white focus:border-blue-300 focus:ring-4 focus:ring-blue-50 transition-all duration-200 outline-none flex items-center justify-between"
                >
                  <span>{consNormale.isee}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${activeDropdown === 'isee' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'isee' && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden">
                    {iseeOptions.map((option) =>{ 
                      console.log('optionIsee ', option)
                      return(
                      <button
                        key={option}
                        type="button"
                        onClick={() => selectOption('isee', option)}
                        className="w-full px-4 py-3 text-left hover:bg-gray-50 text-gray-900 transition-colors duration-150"
                      >
                        {option}
                      </button>
                    )})}
                  </div>
                )}
              </div>
            </div>


            {/* Classe Energetica */}
            <div className="group relative">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-emerald-600" />
                </div>
                <label className="text-sm font-medium text-gray-700">
                  Classe energetica A, B o C 
                </label>
              </div>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => toggleDropdown('classeEnergetica')}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-lg font-medium text-gray-900 focus:bg-white focus:border-blue-300 focus:ring-4 focus:ring-blue-50 transition-all duration-200 outline-none flex items-center justify-between"
                >
                  <span>{consNormale.classeEnergetica}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${activeDropdown === 'classeEnergetica' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'classeEnergetica' && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden">
                    {classeEnergeticaOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => selectOption('classeEnergetica', option)}
                        className="w-full px-4 py-3 text-left hover:bg-gray-50 text-gray-900 transition-colors duration-150"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center gap-2"
            >
              <div className="flex items-center justify-center space-x-3">
                <Search className="w-5 h-5" />
                <span className="text-lg">Cerca il mutuo</span>
              </div>
            </button>
          </div>
        </form>
        <div className="flex justify-center pt-2 text-gray-500">
          <p className="text-xs max-w-11/12 text-center">I dati inseriti non verranno salvati e saranno utilizzati solo per il calcolo in tempo reale. La ricerca è anonima e non comporta alcuna segnalazione a CRIF o altri sistemi di informazioni creditizie.</p>
        </div>

        
      </div>
      <CardListaAlternativa risultati={risultatiNormali!}/>
      <Disclamair />
    </div>
  );
}