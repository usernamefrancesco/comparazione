
'use client'
import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
export default function DisclaimerPage() {
    const router = useRouter()
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800 space-y-8">
        <div>
        <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 text-sm mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Torna ai risultati
          </button>
        </div>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">📄 Disclaimer Legale</h1>
        <p className="text-sm text-gray-500">
          Ultimo aggiornamento: 11 giugno 2025
        </p>
      </div>

      <p>
        Questo sito è un progetto indipendente, gratuito e open-source, sviluppato con finalità esclusivamente informative e senza alcuno scopo commerciale o promozionale. Non rappresenta in alcun modo un servizio di consulenza finanziaria, patrimoniale o legale, né svolge attività di intermediazione creditizia.
      </p>

      <p>
        Gli autori del progetto non sono iscritti ad alcun albo professionale, incluso l’OAM (Organismo degli Agenti e dei Mediatori), e non operano come soggetti autorizzati o riconosciuti nel settore creditizio. Le informazioni mostrate, incluse simulazioni e comparazioni, si basano su dati pubblici (ad esempio MutuiOnline) e sono rielaborate con l’obiettivo di offrire una panoramica generale e trasparente.
      </p>

      <p>
        Non si garantisce che i dati siano sempre aggiornati, corretti o completi, e non è assicurata alcuna continuità di servizio. L’utente è responsabile delle proprie scelte e decisioni e deve verificare le informazioni presso fonti ufficiali o con professionisti abilitati.
      </p>

      <p>
        Questo sito non raccoglie né conserva dati personali, non richiede registrazione, né effettua attività di profilazione. Qualsiasi interazione avviene in modo anonimo e temporaneo.
      </p>

      <p>
        Il software è distribuito con licenza MIT e fornito “così com’è”, senza garanzie esplicite o implicite. Gli autori declinano ogni responsabilità per eventuali danni diretti o indiretti derivanti dall’uso delle informazioni o dei contenuti presenti sul sito.
      </p>

      <p className="text-sm text-gray-600">
        L’utilizzo di questo sito implica l’accettazione consapevole di quanto sopra indicato.
      </p>
    </div>
  );
}
