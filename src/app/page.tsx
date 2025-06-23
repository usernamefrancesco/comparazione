import InputMutui from "@/components/InputMutui";
import { Metadata } from "next";
import { Outfit } from "next/font/google";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import SideBarComponent from "@/components/SideBarComponent";
export const metadata: Metadata = {
  title:
    "Comparatore Mutui Online 2025: Trova il Mutuo Migliore e più Vantaggioso per la Tua Casa",
  description:
    "Confronta i migliori mutui online: scopri tassi, rate, costi e promozioni per trovare il mutuo più adatto alle tue esigenze in pochi click.",
  openGraph: {
    images: [
      {
        url: "/public/logo.png",
        width: 1200,
        height: 630,
        alt: "Comparatore Mutui Online",
      },
    ],
  },
};
const outfit = Outfit({
  subsets: ["latin"],
});
export default function Home() {
  return (
    <SidebarProvider>
      <SideBarComponent />
      <main className="w-full">
        <div className="flex justify-between items-center px-4 pt-4 ">
          <div className="flex items-center">
          <SidebarTrigger className=""/>
          <h1 className="">Menu</h1>
          </div>
          <h1 className={`text-[18px] font-bold ${outfit.className}`}>Ipoteko</h1>
        </div>
        
    
        <div>
          <InputMutui />
        </div>
      </main>
    </SidebarProvider>
  );
}
