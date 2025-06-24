import { MutuoProvider } from "@/Context/MutuoContext";
import Script from "next/script";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17262271115"
          strategy="afterInteractive"
          async
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17262271115');
          `}
        </Script>
      </head>
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
        </MutuoProvider>
      </body>
    </html>
  );
}
