import { useState } from 'react';

function Popup({ children, title, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ease-in-out">
      <div className="bg-light dark:bg-dark p-8 rounded-lg shadow-lg w-full max-w-2xl transform transition-transform duration-300 ease-in-out scale-90 hover:scale-100">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold text-primary dark:text-light">{title}</h2>
          <button
            className="text-gray-500 dark:text-gray-300 text-2xl"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        {/* Container für den Inhalt mit Scroll-Funktion */}
        <div className="max-h-96 overflow-y-auto space-y-6">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Popup;
