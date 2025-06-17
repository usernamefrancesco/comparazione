"use client";
import React, { useEffect, useState } from "react";
import ConsulenzaAvanzata from "./ConsulenzaAvanzata";
import ConsulenzaStandard from "./ConsulenzaStandard";
import ToggleTipoCons from "./ToggleTipoCons";
import { Geist } from "next/font/google";
import { useMutuo } from "@/Context/MutuoContext";
import Image from "next/image";

const geist = Geist({
  subsets: ["latin"],
});

export default function InputMutui() {
  const { tipoConsulenza } = useMutuo();

  return (
    <div className="   rounded-lg w-full max-w-11/12 flex flex-col mx-auto p-3 mt-4 gap-4">
      
      <ToggleTipoCons value={tipoConsulenza} />
      {tipoConsulenza ? <ConsulenzaAvanzata /> : <ConsulenzaStandard />}
    </div>
  );
}
