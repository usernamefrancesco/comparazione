export default function InputGpt() {
    return (
      <div className="max-w-xl mx-auto mt-16 p-6 border border-gray-200 rounded-2xl bg-white shadow-sm">
        <form className="space-y-6">
  
          {/* Sezione: Motivo del mutuo */}
          <div>
            <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 mb-1">
              Per cosa vuoi richiedere un mutuo?
            </label>
            <select
              id="purpose"
              name="purpose"
              className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
            >
              <option>Acquisto</option>
              <option>Ristrutturazione</option>
              <option>Costruzione</option>
              <option>
              </option>
            </select>
          </div>
  
          {/* Valore immobile */}
          <div>
            <label htmlFor="propertyValue" className="block text-sm font-medium text-gray-700 mb-1">
              Valore immobile
            </label>
            <input
              id="propertyValue"
              name="propertyValue"
              type="text"
              placeholder="es. 231.000 €"
              className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>
  
          {/* Importo mutuo */}
          <div>
            <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700 mb-1">
              Importo mutuo
            </label>
            <input
              id="loanAmount"
              name="loanAmount"
              type="text"
              placeholder="es. 135.000 €"
              className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>
  
          {/* Durata mutuo */}
          <div>
            <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
              Durata mutuo in anni
            </label>
            <input
              id="duration"
              name="duration"
              type="text"
              placeholder="es. 20"
              className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>
  
          {/* Hai meno di 36 anni? */}
          <div className="flex items-center gap-3">
            <input
              id="under36"
              name="under36"
              type="checkbox"
              className="h-4 w-4 text-gray-800 border-gray-300 rounded"
            />
            <label htmlFor="under36" className="text-sm text-gray-700">
              Ho meno di 36 anni
            </label>
          </div>
  
          {/* Bottone */}
          <div>
            <button
              type="submit"
              className="w-full bg-gray-900 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-gray-800 transition"
            >
              Calcola rata
            </button>
          </div>
  
        </form>
      </div>
    );
  }
  