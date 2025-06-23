'use client'
import React, { useState, useEffect } from 'react';
import { ChevronRight,ArrowLeft, CheckCircle, Circle, User, Search, FileText, Home, Building, BarChart3, Mail, FileSignature, Calculator } from 'lucide-react';
import Link from 'next/link';
const MutuoTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set());
  const [isAnimating, setIsAnimating] = useState(false);

  const steps = [
    {
      id: 1,
      title: "Valutazione personale",
      icon: User,
      emoji: "🧠",
      duration: "1-2 settimane",
      description: "Analisi della tua situazione finanziaria e creditizia",
      details: [
        "Analisi del reddito, delle spese, e della capacità di rimborso",
        "Verifica se si ha un contratto a tempo indeterminato o altra garanzia solida",
        "Controllo CRIF / segnalazioni / affidabilità creditizia"
      ],
      color: "bg-blue-500",
      lightColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      id: 2,
      title: "Ricerca e confronto offerte",
      icon: Search,
      emoji: "🔍",
      duration: "1 settimana",
      description: "Confronto delle migliori offerte sul mercato",
      details: [
        "Contatto diretto con banche, uso di comparatori online",
        "Scelta tra tasso fisso, variabile, misto, ecc.",
        "Simulazione di rata e durata (es. 20-30 anni)"
      ],
      color: "bg-green-500",
      lightColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      id: 3,
      title: "Raccolta documenti personali",
      icon: FileText,
      emoji: "📑",
      duration: "3-5 giorni",
      description: "Preparazione di tutta la documentazione personale",
      details: [
        "Documento d'identità, codice fiscale",
        "CUD / buste paga / contratto di lavoro",
        "Modello 730 o Unico",
        "Estratto conto bancario",
        "Eventuali altri prestiti in corso"
      ],
      color: "bg-purple-500",
      lightColor: "bg-purple-50",
      textColor: "text-purple-600"
    },
    {
      id: 4,
      title: "Raccolta documenti dell'immobile",
      icon: Home,
      emoji: "🏠",
      duration: "1 settimana",
      description: "Documentazione tecnica e legale dell'immobile",
      details: [
        "Proposta d'acquisto o preliminare",
        "Visura catastale, planimetria, atto di provenienza",
        "Certificato di agibilità, APE (Attestato di Prestazione Energetica)"
      ],
      color: "bg-orange-500",
      lightColor: "bg-orange-50",
      textColor: "text-orange-600"
    },
    {
      id: 5,
      title: "Richiesta ufficiale del mutuo",
      icon: Building,
      emoji: "🏦",
      duration: "3-5 giorni",
      description: "Presentazione della domanda alla banca",
      details: [
        "Compilazione del modulo di richiesta",
        "Invio documentazione",
        "Prima valutazione preliminare della banca"
      ],
      color: "bg-indigo-500",
      lightColor: "bg-indigo-50",
      textColor: "text-indigo-600"
    },
    {
      id: 6,
      title: "Istruttoria creditizia e tecnica",
      icon: BarChart3,
      emoji: "📊",
      duration: "2-4 settimane",
      description: "Valutazione completa di cliente e immobile",
      details: [
        "La banca controlla la tua solvibilità",
        "Invia un perito per valutare l'immobile",
        "Controlla ipoteche, abusi edilizi, coerenza catastale"
      ],
      color: "bg-red-500",
      lightColor: "bg-red-50",
      textColor: "text-red-600"
    },
    {
      id: 7,
      title: "Delibera del mutuo",
      icon: Mail,
      emoji: "📩",
      duration: "1 settimana",
      description: "Comunicazione dell'esito e condizioni finali",
      details: [
        "Se tutto è ok, arriva l'ok della banca",
        "Ricevi un prospetto informativo: tasso, rata, durata, costi accessori",
        "Validità temporanea: spesso dura 30-90 giorni"
      ],
      color: "bg-teal-500",
      lightColor: "bg-teal-50",
      textColor: "text-teal-600"
    },
    {
      id: 8,
      title: "Stipula contratto e atto notarile",
      icon: FileSignature,
      emoji: "📜",
      duration: "1 giorno",
      description: "Finalizzazione dell'acquisto e del mutuo",
      details: [
        "Fissi la data con notaio e banca",
        "Il notaio redige due atti: atto di compravendita e atto di mutuo",
        "La banca eroga il mutuo contestualmente al rogito",
        "Viene iscritta l'ipoteca"
      ],
      color: "bg-pink-500",
      lightColor: "bg-pink-50",
      textColor: "text-pink-600"
    },
    {
      id: 9,
      title: "Inizio piano di ammortamento",
      icon: Calculator,
      emoji: "💶",
      duration: "Vita del mutuo",
      description: "Avvio dei pagamenti mensili",
      details: [
        "Paghi la prima rata dopo 30/60 giorni (dipende dalla banca)",
        "Ricevi il piano con dettaglio quote capitale/interessi"
      ],
      color: "bg-emerald-500",
      lightColor: "bg-emerald-50",
      textColor: "text-emerald-600"
    }
  ];

  const handleStepClick = (index: any) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveStep(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const toggleStepCompletion = (index: any, e: any) => {
    e.stopPropagation();
    const newCompleted = new Set(completedSteps);
    if (newCompleted.has(index)) {
      newCompleted.delete(index);
    } else {
      newCompleted.add(index);
    }
    setCompletedSteps(newCompleted);
  };

  const progressPercentage = (completedSteps.size / steps.length) * 100;

  return (
    <div className="min-h-screen py-4 px-4 sm:py-8">
        <Link
        href={'/'}
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 text-sm mb-6 transition-colors duration-200 hover:bg-white/50   rounded-lg"
        >
          <ArrowLeft className="w-4 h-4" />
          Torna alla home
        </Link>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
            🧭 Procedimento Mutuo
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6">
            Guida interattiva passo dopo passo
          </p>
          
          {/* Progress Bar */}
          <div className="max-w-md mx-auto">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progresso</span>
              <span>{Math.round(progressPercentage)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              {completedSteps.size} di {steps.length} passi completati
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 sm:gap-8">
          {/* Timeline Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 lg:sticky lg:top-8">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Timeline
              </h3>
              
              <div className="space-y-2">
                {steps.map((step, index) => {
                  const IconComponent = step.icon;
                  const isActive = activeStep === index;
                  const isCompleted = completedSteps.has(index);
                  
                  return (
                    <div
                      key={step.id}
                      className={`
                        relative cursor-pointer transition-all duration-200 rounded-xl p-3
                        ${isActive ? `${step.lightColor} ${step.textColor} scale-105` : 'hover:bg-gray-50'}
                        ${isCompleted ? 'bg-green-50 text-green-700' : ''}
                      `}
                      onClick={() => handleStepClick(index)}
                    >
                      <div className="flex items-center space-x-3">
                        <div 
                          className={`
                            w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm flex-shrink-0
                            ${isCompleted ? 'bg-green-500' : step.color}
                            transition-all duration-200
                          `}
                        >
                          {isCompleted ? (
                            <CheckCircle className="w-4 h-4" />
                          ) : (
                            <span className="text-xs font-medium">{step.id}</span>
                          )}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className={`font-medium text-sm truncate ${isActive ? step.textColor : 'text-gray-900'}`}>
                              {step.title}
                            </p>
                            <button
                              onClick={(e) => toggleStepCompletion(index, e)}
                              className="ml-2 text-gray-400 hover:text-green-500 transition-colors flex-shrink-0"
                            >
                              {completedSteps.has(index) ? (
                                <CheckCircle className="w-4 h-4 text-green-500" />
                              ) : (
                                <Circle className="w-4 h-4" />
                              )}
                            </button>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">{step.duration}</p>
                        </div>
                      </div>
                      
                      {isActive && (
                        <div className="absolute -right-4 lg:-right-6 top-1/2 transform -translate-y-1/2">
                          <ChevronRight className={`w-4 h-4 ${step.textColor}`} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Detail Panel */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className={`
              bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-8 min-h-96
              transition-all duration-300 ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}
            `}>
              {steps[activeStep] && (
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                    <div className={`
                      w-16 h-16 rounded-2xl ${steps[activeStep].color} flex items-center justify-center text-white text-2xl
                      shadow-lg transform transition-transform hover:scale-110 flex-shrink-0
                    `}>
                      {steps[activeStep].emoji}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                        {steps[activeStep].title}
                      </h2>
                      <p className="text-gray-600 mt-1">
                        {steps[activeStep].description}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center mt-2 space-y-2 sm:space-y-0 sm:space-x-4">
                        <span className={`
                          px-3 py-1 rounded-full text-xs font-medium ${steps[activeStep].lightColor} ${steps[activeStep].textColor} w-fit
                        `}>
                          Durata: {steps[activeStep].duration}
                        </span>
                        <span className={`
                          px-3 py-1 rounded-full text-xs font-medium w-fit
                          ${completedSteps.has(activeStep) ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}
                        `}>
                          {completedSteps.has(activeStep) ? 'Completato' : 'Da completare'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                      Dettagli del processo
                    </h3>
                    
                    <div className="grid gap-3">
                      {steps[activeStep].details.map((detail, index) => (
                        <div 
                          key={index} 
                          className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                        >
                          <div className={`
                            w-6 h-6 rounded-full ${steps[activeStep].color} text-white text-xs flex items-center justify-center font-medium mt-0.5 flex-shrink-0
                          `}>
                            {index + 1}
                          </div>
                          <p className="text-gray-700 leading-relaxed flex-1 text-sm sm:text-base">
                            {detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-100 gap-2">
  <button 
    onClick={() => activeStep > 0 && handleStepClick(activeStep - 1)} 
    disabled={activeStep === 0} 
    className={`
      flex items-center justify-center space-x-1 px-3 py-2 rounded-xl transition-all text-sm
      ${activeStep === 0 
        ? 'text-gray-400 cursor-not-allowed' 
        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
      }
    `}
  >
    <ChevronRight className="w-4 h-4 rotate-180" />
    <span className="hidden xs:inline">Precedente</span>
    <span className="xs:hidden">Prec</span>
  </button>

  <button 
    onClick={() => toggleStepCompletion(activeStep, { stopPropagation: () => {} })} 
    className={`
      px-4 py-2 rounded-xl font-medium transition-all text-sm flex-shrink-0
      ${completedSteps.has(activeStep) 
        ? 'bg-green-500 text-white hover:bg-green-600' 
        : `${steps[activeStep].color} text-white hover:opacity-90`
      }
    `}
  >
    <span className="hidden sm:inline">
      {completedSteps.has(activeStep) ? 'Completato ✓' : 'Segna come completato'}
    </span>
    <span className="sm:hidden">
      {completedSteps.has(activeStep) ? '✓' : 'Fatto'}
    </span>
  </button>

  <button 
    onClick={() => activeStep < steps.length - 1 && handleStepClick(activeStep + 1)} 
    disabled={activeStep === steps.length - 1} 
    className={`
      flex items-center justify-center space-x-1 px-3 py-2 rounded-xl transition-all text-sm
      ${activeStep === steps.length - 1 
        ? 'text-gray-400 cursor-not-allowed' 
        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
      }
    `}
  >
    <span className="hidden xs:inline">Successivo</span>
    <span className="xs:hidden">Succ</span>
    <ChevronRight className="w-4 h-4" />
  </button>
</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Summary Card */}
        {completedSteps.size === steps.length && (
          <div className="mt-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-6 sm:p-8 text-white text-center">
            <div className="text-4xl mb-4">🎉</div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Congratulazioni!</h3>
            <p className="text-green-100">
              Hai completato tutti i passi del procedimento mutuo. Ora sei pronto per la tua nuova casa!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MutuoTimeline;