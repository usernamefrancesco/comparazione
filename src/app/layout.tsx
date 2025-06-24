import Script from "next/script";
import "./globals.css";
import { MutuoProvider } from "@/Context/MutuoContext";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <head />
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17262271115"></script>



      <body>
        {/* Plausible */}
        <Script
          defer
          data-domain="ipoteko.it"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />

        <MutuoProvider>
          <main>{children}</main>
          <SpeedInsights />
        </MutuoProvider>
      </body>
    </html>
  );
}
