"use client";
import { OrdinamentoTipo } from '@/components/FiltroOrdinamento';
import { Mutuo, ScoreGenerale, FormDataBasic, typeConsulenzaAvanzata } from '@/lib/interface';
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Tipo per i dati del mutuo (adatta questo al tuo tipo effettivo)

export type OrdinamentoNormale = 'rata' | 'rata totale' | 'taeg'
// Tipo per i filtri applicati
interface FiltriRicerca {
  importoMutuo?: number;
  durataAnni?: number;
  // ... altri filtri che hai nella tua ricerca
}

interface MutuoContextType {
  // Mutuo selezionato per il dettaglio
  selezionato: Mutuo | null;
  setSelezionato: (mutuo: Mutuo | null) => void;
  
  // Risultati della ricerca
  risultatiRicerca: Mutuo[];
  setRisultatiRicerca: (risultati: Mutuo[]) => void;

  // Funzione per pulire tutto il context
  resetContext: () => void;

  formData:  typeConsulenzaAvanzata|  null;
  setFormData: (data:  any) => void;

  tipoConsulenza: boolean;
  setTipoConsulenza: (tipo: boolean)=> void;

  scoreMedio: ScoreGenerale | null,
  setScoreMedio: (scoreMedio: ScoreGenerale)=> void

  risultatiNormali: Mutuo[] | null | never[],
  setRisultatiNormali: (risultatiNormali: Mutuo[]) => void

  consNormale: FormDataBasic,
  setConsNormale: (cons: any) => void ,

  ordinamento: OrdinamentoTipo ,
  setOrdinamento: (ordinamento: OrdinamentoTipo) => void 

  ordinamentoNormale: OrdinamentoNormale;
  setOrdinamentoNormale: (ordinamento : OrdinamentoNormale) => void 

  scrollPositionNormale: Record<string, number>,
  setScrollPositionNormale: (pos: Record<string, number>) => void;

}

export const MutuoContext = createContext<MutuoContextType | undefined>(undefined);

export function MutuoProvider({ children }: { children: ReactNode }) {
  const [selezionato, setSelezionato] = useState<Mutuo | null>(null);
  const [risultatiRicerca, setRisultatiRicerca] = useState<Mutuo[]>([]);
  const [formData, setFormData] = useState<typeConsulenzaAvanzata| null>(null);
  const [tipoConsulenza, setTipoConsulenza] = useState<boolean>(false)
  const [scoreMedio, setScoreMedio] = useState<ScoreGenerale| null>(null)
  const [risultatiNormali, setRisultatiNormali] = useState<Mutuo[] | null>(null)
  const [ordinamento , setOrdinamento] = useState<OrdinamentoTipo>('rata')
  const [ordinamentoNormale , setOrdinamentoNormale] = useState<OrdinamentoNormale>('rata')
  const [scrollPositionNormale, setScrollPositionNormale] = useState<Record<string, number>>({});
  const [consNormale, setConsNormale ]= useState<FormDataBasic>({
    valoreImmobile: "€ 100.000",
    importoMutuo: "€ 70.000",
    durataMutuo: "30",
    tipoTasso: "Fisso",
    reddito: "€ 2.000",
    eta: true,
    classeEnergetica: "Non lo so",
    isee: 'Non lo so'
  })


  const resetContext = () => {
    setSelezionato(null);
    setRisultatiRicerca([]);
  };

  return (
    <MutuoContext.Provider
      value={{
        selezionato,
        setSelezionato,
        risultatiRicerca,
        setRisultatiRicerca,
        risultatiNormali,
        setRisultatiNormali,
        resetContext,
        formData,
        setFormData,
        tipoConsulenza,
        setTipoConsulenza,
        scoreMedio,
        setScoreMedio,
        consNormale,
        setConsNormale,
        ordinamento,
        setOrdinamento,
        ordinamentoNormale,
        setOrdinamentoNormale,
        scrollPositionNormale,
        setScrollPositionNormale
      }}
    >
      {children}
    </MutuoContext.Provider>
  );
}

export function useMutuo() {
  const context = useContext(MutuoContext);
  if (context === undefined) {
    throw new Error('useMutuo must be used within a MutuoProvider');
  }
  return context;
}