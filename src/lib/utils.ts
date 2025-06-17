import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { irs } from "@/irs/irs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const provincieItaliane = [
  "Agrigento (AG)",
  "Alessandria (AL)",
  "Ancona (AN)",
  "Aosta (AO)",
  "Arezzo (AR)",
  "Ascoli Piceno (AP)",
  "Asti (AT)",
  "Avellino (AV)",
  "Bari (BA)",
  "Barletta-Andria-Trani (BT)",
  "Belluno (BL)",
  "Benevento (BN)",
  "Bergamo (BG)",
  "Biella (BI)",
  "Bologna (BO)",
  "Bolzano (BZ)",
  "Brescia (BS)",
  "Brindisi (BR)",
  "Cagliari (CA)",
  "Caltanissetta (CL)",
  "Campobasso (CB)",
  "Caserta (CE)",
  "Catania (CT)",
  "Catanzaro (CZ)",
  "Chieti (CH)",
  "Como (CO)",
  "Cosenza (CS)",
  "Cremona (CR)",
  "Crotone (KR)",
  "Cuneo (CN)",
  "Enna (EN)",
  "Fermo (FM)",
  "Ferrara (FE)",
  "Firenze (FI)",
  "Foggia (FG)",
  "Forlì-Cesena (FC)",
  "Frosinone (FR)",
  "Genova (GE)",
  "Gorizia (GO)",
  "Grosseto (GR)",
  "Imperia (IM)",
  "Isernia (IS)",
  "L'Aquila (AQ)",
  "La Spezia (SP)",
  "Latina (LT)",
  "Lecce (LE)",
  "Lecco (LC)",
  "Livorno (LI)",
  "Lodi (LO)",
  "Lucca (LU)",
  "Macerata (MC)",
  "Mantova (MN)",
  "Massa-Carrara (MS)",
  "Matera (MT)",
  "Messina (ME)",
  "Milano (MI)",
  "Modena (MO)",
  "Monza e della Brianza (MB)",
  "Napoli (NA)",
  "Novara (NO)",
  "Nuoro (NU)",
  "Oristano (OR)",
  "Padova (PD)",
  "Palermo (PA)",
  "Parma (PR)",
  "Pavia (PV)",
  "Perugia (PG)",
  "Pesaro e Urbino (PU)",
  "Pescara (PE)",
  "Piacenza (PC)",
  "Pisa (PI)",
  "Pistoia (PT)",
  "Pordenone (PN)",
  "Potenza (PZ)",
  "Prato (PO)",
  "Ragusa (RG)",
  "Ravenna (RA)",
  "Reggio Calabria (RC)",
  "Reggio Emilia (RE)",
  "Rieti (RI)",
  "Rimini (RN)",
  "Roma (RM)",
  "Rovigo (RO)",
  "Salerno (SA)",
  "Sassari (SS)",
  "Savona (SV)",
  "Siena (SI)",
  "Siracusa (SR)",
  "Sondrio (SO)",
  "Sud Sardegna (SU)",
  "Taranto (TA)",
  "Teramo (TE)",
  "Terni (TR)",
  "Torino (TO)",
  "Trapani (TP)",
  "Trento (TN)",
  "Treviso (TV)",
  "Trieste (TS)",
  "Udine (UD)",
  "Varese (VA)",
  "Venezia (VE)",
  "Verbano-Cusio-Ossola (VB)",
  "Vercelli (VC)",
  "Verona (VR)",
  "Vibo Valentia (VV)",
  "Vicenza (VI)",
  "Viterbo (VT)",
];

export const provincieItalianeLab = provincieItaliane.map((p) => ({
  label: p,
  value: p,
}));

export const sogliePoverta2023 = {
  Abruzzo: {
    "0-4": 200,
    "5-10": 200,
    "11-17": 330,
    "18-29": 810.26,
    "30-59": 797.48,
    "60-74": 750.6,
    "75+": 717.38
  },
  Basilicata: {
    "0-4": 200,
    "5-10": 200,
    "11-17": 330,
    "18-29": 784.88,
    "30-59": 700.6,
    "60-74": 663.71,
    "75+": 608.93
  },
  Calabria: {
    "0-4": 200,
    "5-10": 200,
    "11-17": 330,
    "18-29": 805.87,
    "30-59": 728.22,
    "60-74": 685.56,
    "75+": 618.88
  },
  Campania: {
    "0-4": 200,
    "5-10": 200,
    "11-17": 330,
    "18-29": 797.10,
    "30-59": 729.08,
    "60-74": 653.4,
    "75+": 580.82
  },
  "Emilia-Romagna": {
    "0-4": 200,
    "5-10": 200,
    "11-17": 330,
    "18-29": 1010.28,
    "30-59": 1069.76,
    "60-74": 977.82,
    "75+": 973.54
  },
  "Friuli-Venezia Giulia": {
    "0-4": 200,
    "5-10": 200,
    "11-17": 330,
    "18-29": 810.26,
    "30-59": 950.1,
    "60-74": 901.57,
    "75+": 908.76
  },
  Lazio: {
    "0-4": 200,
    "5-10": 200,
    "11-17": 330,
    "18-29": 884.26,
    "30-59": 952.52,
    "60-74": 867.34,
    "75+": 833.77
  },
  Liguria: {
    "0-4": 200,
    "5-10": 200,
    "11-17": 330,
    "18-29": 953.26,
    "30-59": 970.82,
    "60-74": 955.05,
    "75+": 993.73
  },
  Lombardia: {
    "0-4": 200,
    "5-10": 200,
    "11-17": 330,
    "18-29": 1027.26,
    "30-59": 1078.02,
    "60-74": 978.52,
    "75+": 960.12
  },
  Marche: {
    "0-4": 200,
    "5-10": 200,
    "11-17": 330,
    "18-29": 912.26,
    "30-59": 894.78,
    "60-74": 843.49,
    "75+": 841.95
  },
  Molise: {
    "0-4": 200,
    "5-10": 200,
    "11-17": 330,
    "18-29": 700.26,
    "30-59": 716.32,
    "60-74": 700.76,
    "75+": 665.55
  },
  Piemonte: {
    "0-4": 200,
    "5-10": 200,
    "11-17": 330,
    "18-29": 884.26,
    "30-59": 900.78,
    "60-74": 862.43,
    "75+": 858.73
  },
  Puglia: {
    "0-4": 200,
    "5-10": 200,
    "11-17": 330,
    "18-29": 762.26,
    "30-59": 733.73,
    "60-74": 687.1,
    "75+": 644.33
  },
  Sardegna: {
    "0-4": 200,
    "5-10": 200,
    "11-17": 330,
    "18-29": 827.26,
    "30-59": 906.31,
    "60-74": 866.36,
    "75+": 809.63
  },
  Sicilia: {
    "0-4": 200,
    "5-10": 200,
    "11-17": 330,
    "18-29": 786.26,
    "30-59": 736.11,
    "60-74": 683.33,
    "75+": 624.89
  },
  Toscana: {
    "0-4": 200,
    "5-10": 200,
    "11-17": 330,
    "18-29": 956.26,
    "30-59": 1005.63,
    "60-74": 949.57,
    "75+": 958.67
  },
  "Trentino-Alto Adige": {
    "0-4": 200,
    "5-10": 200,
    "11-17": 330,
    "18-29": 1092.26,
    "30-59": 1006.25,
    "60-74": 900.38,
    "75+": 868.75
  },
  Umbria: {
    "0-4": 200,
    "5-10": 200,
    "11-17": 330,
    "18-29": 811.26,
    "30-59": 830.44,
    "60-74": 786.78,
    "75+": 794.96
  },
  "Valle d'Aosta": {
    "0-4": 200,
    "5-10": 200,
    "11-17": 330,
    "18-29": 810.26,
    "30-59": 990.53,
    "60-74": 930.01,
    "75+": 892.46
  },
  Veneto: {
    "0-4": 200,
    "5-10": 200,
    "11-17": 330,
    "18-29": 1023.26,
    "30-59": 1015.99,
    "60-74": 941.81,
    "75+": 917.5
  }
};


const regioniProvince = {
  Abruzzo: ["L'Aquila (AQ)", "Teramo (TE)", "Pescara (PE)", "Chieti (CH)"],
  Basilicata: ["Potenza (PZ)", "Matera (MT)"],
  Calabria: [
    "Catanzaro (CZ)",
    "Cosenza (CS)",
    "Crotone (KR)",
    "Reggio Calabria (RC)",
    "Vibo Valentia (VV)",
  ],
  Campania: [
    "Napoli (NA)",
    "Avellino (AV)",
    "Benevento (BN)",
    "Caserta (CE)",
    "Salerno (SA)",
  ],
  "Emilia-Romagna": [
    "Bologna (BO)",
    "Ferrara (FE)",
    "Forlì-Cesena (FC)",
    "Modena (MO)",
    "Parma (PR)",
    "Piacenza (PC)",
    "Ravenna (RA)",
    "Reggio Emilia (RE)",
    "Rimini (RN)",
  ],
  "Friuli-Venezia Giulia": [
    "Trieste (TS)",
    "Gorizia (GO)",
    "Pordenone (PN)",
    "Udine (UD)",
  ],
  Lazio: [
    "Roma (RM)",
    "Frosinone (FR)",
    "Latina (LT)",
    "Rieti (RI)",
    "Viterbo (VT)",
  ],
  Liguria: ["Genova (GE)", "Imperia (IM)", "La Spezia (SP)", "Savona (SV)"],
  Lombardia: [
    "Milano (MI)",
    "Bergamo (BG)",
    "Brescia (BS)",
    "Como (CO)",
    "Cremona (CR)",
    "Lecco (LC)",
    "Lodi (LO)",
    "Mantova (MN)",
    "Monza e Brianza (MB)",
    "Pavia (PV)",
    "Sondrio (SO)",
    "Varese (VA)",
  ],
  Marche: [
    "Ancona (AN)",
    "Ascoli Piceno (AP)",
    "Fermo (FM)",
    "Macerata (MC)",
    "Pesaro e Urbino (PU)",
  ],
  Molise: ["Campobasso (CB)", "Isernia (IS)"],
  Piemonte: [
    "Torino (TO)",
    "Alessandria (AL)",
    "Asti (AT)",
    "Biella (BI)",
    "Cuneo (CN)",
    "Novara (NO)",
    "Verbano-Cusio-Ossola (VB)",
    "Vercelli (VC)",
  ],
  Puglia: [
    "Bari (BA)",
    "Barletta-Andria-Trani (BT)",
    "Brindisi (BR)",
    "Foggia (FG)",
    "Lecce (LE)",
    "Taranto (TA)",
  ],
  Sardegna: [
    "Cagliari (CA)",
    "Nuoro (NU)",
    "Oristano (OR)",
    "Sassari (SS)",
    "Sud Sardegna (SU)",
  ],
  Sicilia: [
    "Palermo (PA)",
    "Agrigento (AG)",
    "Caltanissetta (CL)",
    "Catania (CT)",
    "Enna (EN)",
    "Messina (ME)",
    "Ragusa (RG)",
    "Siracusa (SR)",
    "Trapani (TP)",
  ],
  Toscana: [
    "Firenze (FI)",
    "Arezzo (AR)",
    "Grosseto (GR)",
    "Livorno (LI)",
    "Lucca (LU)",
    "Massa-Carrara (MS)",
    "Pisa (PI)",
    "Pistoia (PT)",
    "Prato (PO)",
    "Siena (SI)",
  ],
  "Trentino-Alto Adige": ["Trento (TN)", "Bolzano (BZ)"],
  Umbria: ["Perugia (PG)", "Terni (TR)"],
  "Valle d'Aosta": ["Aosta (AO)"],
  Veneto: [
    "Venezia (VE)",
    "Belluno (BL)",
    "Padova (PD)",
    "Rovigo (RO)",
    "Treviso (TV)",
    "Verona (VR)",
    "Vicenza (VI)",
  ],
};


export function getFasciaEta(eta: string | number) {
  const nuovaEta = Number(eta);
  if (nuovaEta >= 0 && nuovaEta <= 4) return "0-4";
  if (nuovaEta >= 5 && nuovaEta <= 10) return "5-10";
  if (nuovaEta >= 11 && nuovaEta <= 17) return "11-17";
  if (nuovaEta >= 18 && nuovaEta <= 29) return "18-29";
  if (nuovaEta >= 30 && nuovaEta <= 59) return "30-59";
  if (nuovaEta >= 60 && nuovaEta <= 74) return "60-74";
  if (nuovaEta >= 75) return "75+";
  return null; // Età non valida
}


export function getTassoIrs(spread: number, anno: string){
  const annoNum = Number(anno)
  return (irs[anno] + spread).toFixed(2)
}