// src/app/layout.tsx  (App Router)
import "./globals.css";
import { MutuoProvider } from "@/Context/MutuoContext";
import ScrollRestorationComp from "@/components/ScrollRestoration";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>
        <MutuoProvider>
          {children}
          
        </MutuoProvider>
      </body>

    </html>
  );
}
