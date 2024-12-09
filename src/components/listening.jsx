import { useState, useRef } from "react";

function Listening({ words = [], aufgabe, hinweis, onScoreChange, audioSrc = [] }) {
  const [userInputs, setUserInputs] = useState(Array(words.length).fill(""));
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showAufgabe, setShowAufgabe] = useState(false);
  const [showHinweis, setShowHinweis] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // Verfolgt das aktuelle Wort
  const [allAnswered, setAllAnswered] = useState(false);
  const audioRef = useRef(null); // Ref für das Audio-Element

  const handleInputChange = (index, value) => {
    const newInputs = [...userInputs];
    newInputs[index] = value;
    setUserInputs(newInputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    const correctAnswers = userInputs.filter(
      (input, index) => input.toLowerCase() === words[index].toLowerCase()
    ).length;
    setScore(correctAnswers);

    if (onScoreChange) {
      onScoreChange(correctAnswers, words.length);
    }

    if (currentIndex === words.length - 1) {
      setAllAnswered(true);
    }
  };

  const handleNextWord = () => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsSubmitted(false);

      // Lade und spiele das nächste Audio ab
      if (audioRef.current) {
        audioRef.current.load();
        audioRef.current.play();
      }
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6  shadow-md rounded-lg mt-9 bg-light border border-dark dark:border-light dark:bg-dark">
      <h1 className="text-2xl font-bold text-center mb-4 dark:text-light text-dark ">Hörübung</h1>
      <div className="mb-4">
        <button
          className="w-full py-2 px-4 bg-primary text-light dark:text-dark dark:bg-primarydark font-bold rounded-md hover:bg-primarydark dark:hover:bg-primary focus:outline-none transition duration-400"
          onClick={() => setShowAufgabe((prev) => !prev)}
        >
          {showAufgabe ? "Aufgabe verbergen" : "Aufgabe anzeigen"}
        </button>
        {showAufgabe && (
          <div className="mt-2 p-4 border text-dark dark:text-light rounded-md bg-light dark:bg-dark">
            <span dangerouslySetInnerHTML={{ __html: aufgabe }} />
          </div>
        )}
      </div>
      <div className="mb-4">
        <button
          className="w-full py-2 px-4 bg-secondary text-light dark:text-dark font-bold rounded-md hover:bg-primary dark:hover:bg-primarydark focus:outline-none transition duration-400"
          onClick={() => setShowHinweis((prev) => !prev)}
        >
          {showHinweis ? "Hinweis verbergen" : "Hinweis anzeigen"}
        </button>
        {showHinweis && (
          <div className="mt-2 p-4 border rounded-md bg-light dark:bg-dark text-dark dark:text-light">
            <span dangerouslySetInnerHTML={{ __html: hinweis }} />
          </div>
        )}
      </div>

      {/* Audio-Element */}
      <audio ref={audioRef} controls className="w-full mb-4 bg-primary rounded-lg">
        <source src={audioSrc[currentIndex]} type="audio/mpeg" />
        Dein Browser unterstützt kein Audio-Element.
      </audio>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {words.map((word, index) => (
            <input
              key={index}
              type="text"
              value={userInputs[index]}
              placeholder={`Wort ${index + 1}`}
              onChange={(e) => handleInputChange(index, e.target.value)}
              disabled={isSubmitted || allAnswered}
              className="p-2 border rounded-md focus:outline-none focus:ring-2 text-dark dark:placeholder:text-dark dark:bg-gray-300 focus:ring-primary dark:focus:ring-primarydark"
            />
          ))}
        </div>
        <button
          type="submit"
          disabled={isSubmitted || allAnswered}
          className={`w-full py-2 px-4 rounded-md text-light font-bold ${
            isSubmitted ? "bg-secondary cursor-not-allowed" : "bg-primary hover:bg-primarydark"
          }`}
        >
          Überprüfen
        </button>
      </form>

      {isSubmitted && !allAnswered && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-center mb-4 dark:text-light text-dark">Ergebnisse</h2>
          <div className="space-y-2">
            {words.map((word, index) => (
              <p key={index} className="text-lg dark:text-light">
                Wort {index + 1}:{" "}
                <span
                  className={`font-bold ml-2 ${
                    userInputs[index].toLowerCase() === word.toLowerCase()
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {userInputs[index] || "Nicht ausgefüllt"}
                </span>
                {userInputs[index].toLowerCase() !== word.toLowerCase() && (
                  <span className="ml-2 text-green-700 dark:text-green-400">
                    (Korrekt: {word})
                  </span>
                )}
              </p>
            ))}
          </div>
          <p className="text-center text-lg font-bold mt-4 dark:text-light text-dark">
            Punkte: {score} / {words.length}
          </p>
          {currentIndex < words.length - 1 && (
            <button
              onClick={handleNextWord}
              className="mt-4 w-full py-2 px-4 rounded-md bg-primary hover:bg-primarydark text-light font-bold"
            >
              Nächstes Wort anzeigen
            </button>
          )}
        </div>
      )}

      {allAnswered && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-center mb-4 dark:text-light">
            Endgültige Ergebnisse
          </h2>
          <p className="text-center text-lg font-bold dark:text-light">
            Deine Gesamtpunktzahl: {score} / {words.length}
          </p>
        </div>
      )}
    </div>
  );
}

export default Listening;
