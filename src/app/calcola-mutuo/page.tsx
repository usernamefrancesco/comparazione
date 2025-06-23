import React from 'react'
import CalcolaImporto from '@/components/CalcolaImporto'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    "Calcolatore Mutuo: Scopri l’Importo Totale del Mutuo Partendo dalla Rata Mensile",
  description:
    "Calcola l’importo del mutuo dalla rata mensile: tool gratuito e preciso per sapere quanto puoi chiedere in prestito.",
  
};
export default function page() {
  return (
    <>
      <CalcolaImporto />
    </>
  )
}
