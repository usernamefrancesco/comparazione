import React from "react";
import Link from "next/link";
export default function Disclaimer() {
  return (
    <div className="border border-blue-300 bg-blue-50 p-3 rounded-2xl mt-6 text-sm">
      <p>
      Questo sito non offre consulenze, non effettua intermediazione e non opera come mediatore creditizio ai sensi dell’art. 128-sexies del D.Lgs. n. 385/1993, né rientra tra le esenzioni previste dall’art. 12 del D.Lgs. 141/2010. È un progetto informativo open-source basato su dati pubblici. Nessuna garanzia è fornita sull’accuratezza dei contenuti.
      </p>
      <Link
        href={"/disclaimer"}
        className="border-b-2 border-blue-300 font-bold pt-2"
      >
        Leggi i dettagli
      </Link>
    </div>
  );
}
