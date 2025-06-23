// src/app/layout.tsx
import "./globals.css";
import { MutuoProvider } from "@/Context/MutuoContext";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <head>
        <script
          data-goatcounter="https://francescomutui.goatcounter.com/"
          async
          src="https://gc.zgo.at/count.js"
        ></script>
      </head>
      <body>
        <MutuoProvider>
            <main>
              {children}
            </main>
          <SpeedInsights />
        </MutuoProvider>
      </body>
    </html>
  );
}