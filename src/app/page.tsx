import Navbar from "@/components/Navbar";
import InputMutui from "@/components/InputMutui";
import { Metadata } from "next";

 
export const metadata: Metadata = {
  title: 'Comparatore Mutui',
  description: 'Confronta i migliori mutui online: scopri tassi, rate, costi e promozioni per trovare il mutuo più adatto alle tue esigenze in pochi click.',
};


export default function Home() {
  return (
    <div className="">
      
      <Navbar />
      <div>
        <InputMutui />
      </div>
    </div>
  );
}
