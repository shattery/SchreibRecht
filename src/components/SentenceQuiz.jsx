import { useState } from 'react';

function SentenceQuiz({ quizzes, onFinish }) {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [showAufgabe, setShowAufgabe] = useState(false);
  const [showHinweis, setShowHinweis] = useState(false);

  const currentQuiz = quizzes[currentQuizIndex];

  // Funktion, wenn eine Option geklickt wird
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === currentQuiz.correctAnswer) {
      setFeedback('Richtig!');
      setScore(score + 1);
    } else {
      setFeedback('Falsch.');
    }
  };

  // Funktion, um zur nächsten Frage zu wechseln
  const handleNextQuiz = () => {
    if (currentQuizIndex + 1 < quizzes.length) {
      setCurrentQuizIndex(currentQuizIndex + 1);
      setSelectedOption(null);
      setFeedback('');
      setShowAufgabe(false);
      setShowHinweis(false);
    } else {
      // Wenn es keine weiteren Fragen gibt, Ergebnis anzeigen
      onFinish(score);
    }
  };

  // Überprüfen, ob es die letzte Frage ist
  const isLastQuiz = currentQuizIndex === quizzes.length - 1;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-light dark:bg-dark shadow-md rounded-lg mt-9">
      <h1 className="text-2xl font-bold text-center mb-4 dark:text-light">Satz-Quiz</h1>
      {currentQuiz ? (
        <>
          <div className="mb-4">
            <button
              className="w-full py-2 px-4 bg-primary text-light dark:text-dark dark:bg-primarydark font-bold rounded-md hover:bg-primarydark dark:hover:bg-primary focus:outline-none transition duration-400"
              onClick={() => setShowAufgabe((prev) => !prev)}
            >
              {showAufgabe ? 'Aufgabe verbergen' : 'Aufgabe anzeigen'}
            </button>
            {showAufgabe && (
              <div className="mt-2 p-4 border text-dark dark:text-light rounded-md bg-light dark:bg-dark">
                <span dangerouslySetInnerHTML={{ __html: currentQuiz.aufgabe }} />
              </div>
            )}
          </div>
          <div className="mb-4">
            <button
              className="w-full py-2 px-4 bg-secondary text-light dark:text-dark font-bold rounded-md hover:bg-primarydark dark:hover:bg-primary focus:outline-none transition duration-400"
              onClick={() => setShowHinweis((prev) => !prev)}
            >
              {showHinweis ? 'Hinweis verbergen' : 'Hinweis anzeigen'}
            </button>
            {showHinweis && (
              <div className="mt-2 p-4 border rounded-md bg-light dark:bg-dark text-dark dark:text-light">
                <span dangerouslySetInnerHTML={{ __html: currentQuiz.hinweis }} />
              </div>
            )}
          </div>
          <p className="text-lg dark:text-light mb-4">
            {currentQuiz.sentence.split('___').map((part, index) => (
              <span key={index}>
                {part}
                {index === 0 && <span className="font-bold text-primary"> ___ </span>}
              </span>
            ))}
          </p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {currentQuiz.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                disabled={feedback !== ''}
                className={`py-2 px-4 rounded-md font-bold ${
                  selectedOption === option
                    ? option === currentQuiz.correctAnswer
                      ? 'bg-green-500 text-light'
                      : 'bg-red-500 text-light'
                    : 'bg-secondary text-light hover:bg-primarydark'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          {feedback && (
            <p
              className={`text-lg font-bold text-center ${
                feedback === 'Richtig!' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {feedback}
            </p>
          )}
          {feedback && (
            <button
              onClick={handleNextQuiz}
              className="mt-4 py-2 px-4 w-full bg-primary text-light dark:bg-primarydark dark:text-dark font-bold rounded-md hover:bg-primarydark dark:hover:bg-primary focus:outline-none transition duration-400"
            >
              {isLastQuiz ? 'Ergebnisse anzeigen' : 'Weiter'}
            </button>
          )}
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold dark:text-light">Quiz beendet!</h2>
          <p className="text-lg dark:text-light">Du hast {score} von {quizzes.length} Punkten erzielt.</p>
        </div>
      )}
    </div>
  );
}

export default SentenceQuiz;