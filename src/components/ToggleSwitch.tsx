export function ToggleSwitch({ value, onChange }: { value: boolean; onChange: (val: boolean) => void }) {
    return (
      <button
        type="button"
        role="switch"
        aria-checked={value}
        onClick={() => onChange(!value)}
        className={`relative inline-flex items-center h-7 w-16 rounded-full transition-colors duration-300 mt-1
          ${value ? 'bg-black' : 'bg-gray-300'}`}
        style={{ border: 'none', outline: 'none' }}
      >
        {/* Il cerchio */}
        <span
          className={`inline-block w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out z-10
            ${value ? 'translate-x-10' : 'translate-x-1'}`}
        />
        {/* Scritte */}
        <span
          className={`absolute right-2 text-xs font-semibold select-none pointer-events-none
            ${value ? 'text-black' : 'text-black'}`}
        >
          NO
        </span>
        <span
          className={`absolute left-2.5 text-xs font-semibold select-none pointer-events-none 
            ${value ? 'text-white' : 'text-white'}`}
        >
          SI
        </span>
      </button>
    );
  }
  