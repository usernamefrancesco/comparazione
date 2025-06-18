import Navbar from "@/components/Navbar";
import InputMutui from "@/components/InputMutui";
import { Metadata } from "next";

 
export const metadata: Metadata = {
  title: 'Comparatore Mutui',
  description: 'Trova facilmente il mutuo giusto per te.',
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
