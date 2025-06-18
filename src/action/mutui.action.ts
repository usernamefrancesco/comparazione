"use server";

import {  Mutuo } from "@/lib/interface";
export interface FormDataMutuo {
  valoreImmobile: string;
  importoMutuo: string;
  durataMutuo: string;
  tipoTasso: string;
  provinciaImmobile: object;
  reddito: string;
  eta: boolean;
  classeEnergetica: string;
}

// lista prdotti mutui => in base info cliente (CONSULENZA STANDARD)


// (CONSULENZA AVANZATA)



export async function mediaScore(listaMutui: Mutuo[]) {
  let totaleScore = 0;
  listaMutui.map((mutuo) => {
    totaleScore += mutuo.score;
  });

  return totaleScore / listaMutui.length;
}

export async function sortLista(listaMutui: Mutuo[], tipologia: string) {
  if(!listaMutui)return;
  const finale = [...listaMutui].sort((a, b) => {
    // Spread per creare una copia
    let num1 = a.rataMensile;
    let num2 = b.rataMensile;

    if (tipologia == "score") {
      num1 = a.score;
      num2 = b.score;

      console.log(num1, num2, "score");

      if (num1 > num2) {
        return -1;
      }
      if (num1 < num2) {
        return 1;
      }
      return 0;
    } else if (tipologia == "rata totale") {
      num1 = a.rataTotale;
      num2 = b.rataTotale;

      if (num1 < num2) {
        return -1;
      }
      if (num1 > num2) {
        return 1;
      }
      return 0;
    }  else if (tipologia == "taeg") {
      num1 = a.taeg;
      num2 = b.taeg;

      if (num1 < num2) {
        return -1;
      }
      if (num1 > num2) {
        return 1;
      }
      return 0
    } else {
      if (num1 < num2) {
        return -1;
      }
      if (num1 > num2) {
        return 1;
      }
      return 0;
    }
  });

  return finale;
}



