// pages/contact.js (o app/contact/page.js se usi App Router)

export default function Contact() {
    return (
      <div className="min-h-screen bg-white px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto pt-24 ">
          <div className="mb-2 text-sm text-gray-500 font-medium tracking-wider">
            CONTATTI
          </div>
          
          <h1 className="text-4xl font-bold leading-tight text-gray-800 mb-4">
            Parliamo insieme 💬
          </h1>
          
          <p className="text-base text-gray-500 mb-12 leading-relaxed">
            Hai un progetto in mente? Una domanda? O semplicemente vuoi dire ciao? 
            Sono sempre felice di connettermi con nuove persone.
          </p>
        </div>
  
        {/* Contact Card */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 transition-all duration-150 hover:shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-6 h-6 mr-3 text-lg">
                ✉️
              </div>
              <h3 className="text-base font-semibold text-gray-800">
                Email
              </h3>
            </div>
            
            <a 
              href="mailto:ipoteko.it@gmail.com"
              className="text-base text-blue-600 font-medium hover:text-blue-700 transition-colors duration-150"
            >
              ipoteko.it@gmail.com
            </a>
            
            <p className="text-sm text-gray-500 mt-2 leading-snug">
              Di solito rispondo entro 24 ore
            </p>
          </div>
        </div>
  
        {/* Additional Info */}
        <div className="max-w-3xl mx-auto pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-gray-50 rounded-md border border-gray-100">
              <div className="text-base mb-2">⚡</div>
              <h4 className="text-sm font-semibold text-gray-800 mb-1">
                Risposta rapida
              </h4>
              <p className="text-xs text-gray-500 leading-snug">
                Cerco sempre di rispondere il prima possibile
              </p>
            </div>
            
            <div className="p-5 bg-gray-50 rounded-md border border-gray-100">
              <div className="text-base mb-2">🤝</div>
              <h4 className="text-sm font-semibold text-gray-800 mb-1">
                Collaborazioni
              </h4>
              <p className="text-xs text-gray-500 leading-snug">
                Aperto a nuovi progetti e opportunità
              </p>
            </div>
            
            <div className="p-5 bg-gray-50 rounded-md border border-gray-100">
              <div className="text-base mb-2">💡</div>
              <h4 className="text-sm font-semibold text-gray-800 mb-1">
                Consulenze
              </h4>
              <p className="text-xs text-gray-500 leading-snug">
                Disponibile per consulenze tecniche
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }