import React from 'react';

function FinalResultPopup({ sentenceQuizScore, listeningScore, commaTestScore, totalScore, onClose }) {
  return (
    <div className="popup">
      <h2 className="text-xl">Gesamt-Auswertung</h2>
      <p>Satz-Quiz: {sentenceQuizScore} Punkte</p>
      <p>Hörübung: {listeningScore} Punkte</p>
      <p>Komma-Test: {commaTestScore} Punkte</p>
      <p className="font-bold">Gesamtpunktzahl: {totalScore} von 30</p>
      <button onClick={onClose} className="p-3 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600 mt-4">
        Test beenden
      </button>
    </div>
  );
}

export default FinalResultPopup;
