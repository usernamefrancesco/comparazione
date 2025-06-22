// src/app/layout.tsx  (App Router)
import "./globals.css";
import { MutuoProvider } from "@/Context/MutuoContext";
import { SpeedInsights } from "@vercel/speed-insights/next"

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
          {children}
          <SpeedInsights />
        </MutuoProvider>
      </body>

    </html>
  );
}
