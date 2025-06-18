// src/app/layout.tsx  (App Router)
import "./globals.css";
import { MutuoProvider } from "@/Context/MutuoContext";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>
        <MutuoProvider>
          {children}
          <SpeedInsights />
        </MutuoProvider>
      </body>

    </html>
  );
}
