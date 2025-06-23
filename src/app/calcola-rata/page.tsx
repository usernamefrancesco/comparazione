import React from 'react'
import CalcolaRata from '@/components/CalcolaRata'
import { Metadata } from 'next';
export const metadata: Metadata = {
  title:
    "Calcola rata mutuo con interessi | Strumento online gratuito",
  description:
    "Calcola la rata mensile del mutuo con interessi in modo semplice e veloce. Strumento gratuito e preciso per il tuo finanziamento.",
  
};
export default function page() {
  return (
    <>
      <CalcolaRata />
    </>
  )
}
