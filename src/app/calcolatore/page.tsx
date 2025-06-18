"use client";
import React, { useState } from "react";
import TipoCalcolatore from "@/components/TipoCalcolatore";
import CalcolaRata from "@/components/CalcolaRata";
import CalcolaImporto from "@/components/CalcolaImporto";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
export default function page() {
  

  const [tipoCalcolatore, setTipoCalcolatore] = useState<boolean>(false);
  const router = useRouter()

  function handleCalcolatore(e: any) {
    e.preventDefault();
    setTipoCalcolatore(!tipoCalcolatore);
  }

  
  
  return (
    <div className="">
      <div className="">
      
        <TipoCalcolatore
          handleCalcolatore={handleCalcolatore}
          tipoCalcolatore={tipoCalcolatore}
        />

        {tipoCalcolatore ? <CalcolaImporto />: <CalcolaRata/>}
        
      </div>
    </div>
  );
}
