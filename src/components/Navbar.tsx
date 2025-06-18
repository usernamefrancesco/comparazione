import React from "react";
import { Outfit } from "next/font/google";
import Link from "next/link";

const outfit = Outfit({
  subsets: ["latin"],
});
export default function Navbar() {
  return (
    <div className={`${outfit.className} p-2`}>
      <div className="flex justify-between items-end">
        <h1 className={` text-2xl font-semibold`}>Ipoteko</h1>

        <div className="pr-4 flex gap-4">
          

          <Link href={"/calcolatore"}>
            <p>Calcolatore</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
