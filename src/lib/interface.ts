interface ProMutuo {
  titolo: string;
  descrizione: string;


}


export interface Mutuo {
  id: string;
  banca: string;
  immagineBanca: string;
  nomeProdotto: string;

  importoMutuo: number;
  durataAnni: number;
  rataMensile: number;
  rataTotale: number,
  tassoScelto: number;
  taeg: number;
  tipiTasso: string;
  dataScadenzaOfferta: string | null,

  importoInfo: {
    importoMax: number,
    importoMin: number
  }

  soloClassiAB: boolean;
  soloClassiLista: (string | null)[];

  consap: boolean;
  irs: boolean;
  isee: boolean,

  spesePerizia: {
    importo: number;
    condizioni: string;
    maxImporto: number;
  };

  speseIstruttoria: {
    percentualeSuImporto: boolean, 
    percentualeApplicata: number,
    importo: number;
    promozione: string;
    attiva: boolean;
    importoMax: number,
    importoMin: number,
    ltvImporto: boolean,
    importoLtv: {ltv: number, importo: number, percentualeApplicata: number , importoMax: number, importoMin: number}[]

  };

  impostaSostitutiva: {
    promozione: boolean;
    importo: number;
  };

  incassoRata: {
    esiste: boolean;
    importo: number;
  };

  costoGestionePratica: {
    esiste: boolean,
    importo: number
  }

  altriTipiSpese: {
    annuali: boolean,
    importo: number,
  }


  totaleDaRimborsare: number;
  totaliCostiExtra: number;

  assicurazioniObbligatorie: {
    assicurazioneCasa: boolean;
    assicurazioneVita: boolean;
    assicurazioneCasaMensile: boolean;
    assicurazioneVitaMensile: boolean
    percentualePremioVita: number;
    costoStimatoCasa: number;
    costoStimatoVita: number
  };

  ltvMutuo: number;

  eta: {
    minima: number;
    massima: number;
    maxUnder36: boolean;
  };

  score: number;
  rrrMax: number;

  tassiPerLTV: {
    "00.00-80.00"?: {
      [anni: number]: number;
    };
    "80.01-95.00"?: {
      [anni: number]: number;
    };
    "95.01-100"?: {
      [anni: number]: number;
    };
    "00.00-50.00"?: {
      [anni: number]: number;
    },
    "50.01-70.00"?: {
      [anni: number]: number;
    };
    "70.01-80.00"?: {
      [anni: number]: number;
    };
    "00.00-70.00"?: {
      [anni: number]: number;
    };
    "00.00-60.00"?: {
      [anni: number]: number;
    };
    "60.01-80.00"?: {
      [anni: number]: number;
    };
    "60.01-70.00"?: {
      [anni: number]: number;
    };
    "50.01-60.00"?: {
      [anni: number]: number;
    };
    
  };

  tipiDurata: number[];


  scontisticheGenerali: {
    esistono: boolean,
    listaSconti: {
      causaleSconti: string,
      percentualeSconto: number,
    }[]
    
  }

  proMutuo: Array<{
    titolo: string;
    descrizione: string;
  }>;

  controMutuo: Array<{
    titolo: string;
    descrizione: string;
  }>;

  praticaScore: {
    pro: string[];
    contro: string[];
  };
}


export interface FormDataBasic {
  valoreImmobile: string;
  importoMutuo: string;
  durataMutuo: string;
  tipoTasso: string;
  reddito: string;
  eta: boolean;
  classeEnergetica: string;
  isee: 'Non lo so' | 'No' | 'Si',
}

export interface typeAbbandonata {
  valoreImmobile: string;
  importoMutuo: string;
  durataMutuo: string;
  tipoTasso: string;
  reddito: string;
  eta: string;
  classeEnergetica: string;

  familiariCarico: boolean;
  numeroPersoneACarico: string;
  etaPersoneACarico: string[];
  totaleSussistenza: number;
  sposato: boolean;
  tipoContratto: string;
  dataAssunzione: string;
  finanziamentiBool: boolean;
  finanziamentiTot: string;
  scadenzaFinanziamenti: string;
  regione: string;
  score: number;
}

export interface typeConsulenzaAvanzata {
  valoreImmobile: string;
  importoMutuo: string;
  durataMutuo: string;
  tipoTasso: string;
  reddito: string;
  eta: string;
  classeEnergetica: string;

  isee: 'Non lo so' | 'No' | 'Si',
  familiariCarico: boolean;
  numeroPersoneACarico: string;
  personeCarico: {
    eta: number,
    portatoreReddito: boolean
  }[],
  totaleSussistenza: number;
  sposato: boolean;
  tipoContratto: string;
  dataAssunzione: string;
  finanziamentiBool: boolean;
  finanziamentiTot: string;
  scadenzaFinanziamenti: string;
  regione: string;
  score: number;
}


export interface ScoreGenerale{
  scoreMedio: number,
  importoMax: number,
  importoCons: number ,
  importoRichiesto: number
  rataMax:number ,
  rataCons: number
}
