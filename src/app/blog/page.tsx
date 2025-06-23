import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function page() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
        <Link
          href={"/"}
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 text-sm mb-6 transition-colors duration-200 hover:bg-white/50   rounded-lg"
        >
          <ArrowLeft className="w-4 h-4" />
          Torna alla home
        </Link>
      <div className="mb-6">
        <h1 className="text-4xl font-semibold">Indice</h1>
      </div>


      {/* 01 blog */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col gap-3">
          <Link href="/blog/01" className=" text-xl font-semibold">
            Perché Affidarsi a un Broker del Credito è Spesso una Scelta
            Sbagliata
          </Link>
          <p className="text-sm text-gray-600">6 minuti di lettura • Lunedì 23, 2025</p>
          <p>Se stai cercando un mutuo per acquistare casa, probabilmente ti sei
          imbattuto in un mediatore creditizio o broker del credito.</p>
        </div>
        <Image
          alt="Immagine"
          width={130}
          height={130}
          className="rounded w-auto h-auto hidden lg:block"
          src={
            "https://images.pexels.com/photos/5697256/pexels-photo-5697256.jpeg"
          }
        />
      </div>
    </div>
  );
}
