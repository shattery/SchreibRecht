import { useState } from 'react';

function Listening({ audioSrc, words = [], aufgabe, hinweis }) {
  const [userInputs, setUserInputs] = useState(Array(words.length).fill(''));
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showAufgabe, setShowAufgabe] = useState(false);
  const [showHinweis, setShowHinweis] = useState(false);

  const handleInputChange = (index, value) => {
    const newInputs = [...userInputs];
    newInputs[index] = value;
    setUserInputs(newInputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    const correctAnswers = userInputs.filter((input, index) =>
      input.toLowerCase() === words[index].toLowerCase()
    ).length;
    setScore(correctAnswers);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-light dark:bg-dark shadow-md rounded-lg mt-9">
      <h1 className="text-2xl font-bold text-center mb-4 dark:text-light">Hörübung</h1>
      <div className="mb-4">
        <button
          className="w-full py-2 px-4 bg-primary text-light dark:text-dark dark:bg-primarydark font-bold rounded-md hover:bg-primarydark dark:hover:bg-primary focus:outline-none transition duration-400"
          onClick={() => setShowAufgabe((prev) => !prev)}
        >
          {showAufgabe ? 'Aufgabe verbergen' : 'Aufgabe anzeigen'}
        </button>
        {showAufgabe && (
          <div className="mt-2 p-4 border text-dark dark:text-light rounded-md bg-light dark:bg-dark">
            <span dangerouslySetInnerHTML={{ __html: aufgabe }} />
          </div>
        )}
      </div>
      <div className="mb-4">
        <button
          className="w-full py-2 px-4 bg-secondary text-light  dark:text-dark  font-bold rounded-md hover:bg-primary dark:hover:bg-primarydark focus:outline-none transition duration-400 "
          onClick={() => setShowHinweis((prev) => !prev)}
        >
          {showHinweis ? 'Hinweis verbergen' : 'Hinweis anzeigen'}
        </button>
        {showHinweis && (
          <div className="mt-2 p-4 border rounded-md bg-light dark:bg-dark text-dark dark:text-light">
            <span dangerouslySetInnerHTML={{ __html: hinweis }} />
          </div>
        )}
      </div>
      <audio controls className="w-full mb-4 bg-primary rounded-lg">
        <source src={audioSrc} type="audio/mpeg" />
        Dein Browser unterstützt kein Audio-Element.
      </audio>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {words.map((word, index) => (
            <input
              key={index}
              type="text"
              value={userInputs[index]}
              placeholder={ `Wort ${index + 1}`}
              onChange={(e) => handleInputChange(index, e.target.value)}
              disabled={isSubmitted}
              className="p-2 border rounded-md focus:outline-none focus:ring-2 dark:placeholder:text-primarydark dark:bg-secondary  focus:ring-primary dark:focus:ring-primarydark"
            />
          ))}
        </div>
        <button
          type="submit"
          disabled={isSubmitted}
          className={`w-full py-2 px-4 rounded-md text-light  font-bold ${isSubmitted ? 'bg-secondary cursor-not-allowed' : 'bg-primary hover:bg-primarydark'}`}
        >
          Überprüfen
        </button>
      </form>
      {isSubmitted && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-center mb-4 dark:text-light">Ergebnisse</h2>
          <div className="space-y-2">
            {words.map((word, index) => (
              <p key={index} className="text-lg dark:text-light">
                Wort {index + 1}: 
                <span
                  className={`font-bold ml-2   ${userInputs[index].toLowerCase() === word.toLowerCase() ? 'text-green-600' : 'text-red-600'}`}
                >
                  {userInputs[index] || 'Nicht ausgefüllt'}
                </span>
                {userInputs[index].toLowerCase() !== word.toLowerCase() && (
                  <span className="ml-2 text-green-700 dark:text-green-400  ">(Korrekt: {word})</span>
                )}
              </p>
            ))}
          </div>
          <p className="text-center text-lg font-bold mt-4 dark:text-light">
            Punkte: {score} / {words.length}
          </p>
        </div>
      )}
    </div>
  );
}

export default Listening;