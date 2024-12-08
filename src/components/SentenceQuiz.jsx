import React, { useState, useEffect } from 'react';

function SentenceQuiz({ quizzes, onFinish }) {
  const [userAnswers, setUserAnswers] = useState(Array(quizzes.length).fill(null));
  const [currentPage, setCurrentPage] = useState(0);
  const [scores, setScores] = useState(Array(quizzes.length).fill(false));
  const [showAufgabe, setShowAufgabe] = useState(false);
  const [showHinweis, setShowHinweis] = useState(false);

  const quizzesPerPage = 1;
  const maxPage = Math.ceil(quizzes.length / quizzesPerPage);

  const handleOptionClick = (quizIndex, option) => {
    const updatedAnswers = [...userAnswers];
    const updatedScores = [...scores];

    // Setze die Antwort und die Bewertung für diese Frage
    updatedAnswers[quizIndex] = option;
    updatedScores[quizIndex] = option === quizzes[quizIndex].correctAnswer;

    // Speichere die aktualisierten Werte
    setUserAnswers(updatedAnswers);
    setScores(updatedScores);

    // Sobald der Benutzer eine Antwort gewählt hat, rufe onFinish mit der aktuellen Gesamtpunktzahl auf
    const totalScore = updatedScores.filter((score) => score).length;
    onFinish(totalScore); // Übergabe des aktuellen Scores an die übergeordnete Komponente
  };

  const handleNextPage = () => {
    setShowAufgabe(false);
    setShowHinweis(false);
    setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    setShowAufgabe(false);
    setShowHinweis(false);
    setCurrentPage((prev) => prev - 1);
  };

  const currentQuizzes = quizzes.slice(
    currentPage * quizzesPerPage,
    (currentPage + 1) * quizzesPerPage
  );

  return (
    <div className="max-w-2xl mx-auto p-6 bg-light dark:bg-dark shadow-md rounded-lg mt-9">
      <h1 className="text-2xl font-bold text-center mb-4 dark:text-light">Satz-Quiz</h1>
      {currentQuizzes.map((quiz, index) => {
        const globalIndex = currentPage * quizzesPerPage + index;
        const isCorrect = scores[globalIndex];
        const userAnswer = userAnswers[globalIndex];

        return (
          <div key={globalIndex} className="mb-6">
            <div className="mb-4">
              <button
                className="w-full py-2 px-4 bg-primary text-light dark:text-dark dark:bg-primarydark font-bold rounded-md hover:bg-primarydark dark:hover:bg-primary focus:outline-none transition duration-400"
                onClick={() => setShowAufgabe((prev) => !prev)}
              >
                {showAufgabe ? 'Aufgabe verbergen' : 'Aufgabe anzeigen'}
              </button>
              {showAufgabe && (
                <div className="mt-2 p-4 border text-dark dark:text-light rounded-md bg-light dark:bg-dark">
                  <span dangerouslySetInnerHTML={{ __html: quiz.aufgabe }} />
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
                  <span dangerouslySetInnerHTML={{ __html: quiz.hinweis }} />
                </div>
              )}
            </div>
            <p className="text-lg dark:text-light text-dark mb-4">
              {quiz.sentence.split('___').map((part, idx) => (
                <span key={idx}>
                  {part}
                  {idx === 0 && <span className="font-bold text-primary"> ___ </span>}
                </span>
              ))}
            </p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {quiz.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(globalIndex, option)}
                  disabled={userAnswer !== null}
                  className={`py-2 px-4 rounded-md font-bold ${
                    userAnswer === option
                      ? option === quiz.correctAnswer
                        ? 'bg-green-500 text-light'
                        : 'bg-red-500 text-light'
                      : 'bg-secondary text-light hover:bg-primarydark'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            {userAnswer !== null && (
              <p
                className={`text-lg font-bold text-center ${
                  isCorrect ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {isCorrect ? 'Richtig!' : `Falsch! Die richtige Antwort ist: ${quiz.correctAnswer}`}
              </p>
            )}
          </div>
        );
      })}
      <div className="flex justify-between mt-4">
        <button
          type="button"
          disabled={currentPage === 0}
          onClick={handlePreviousPage}
          className="px-4 py-2 bg-secondary text-light rounded-md disabled:opacity-50"
        >
          Zurück
        </button>
        {currentPage < maxPage - 1 ? (
          <button
            type="button"
            onClick={handleNextPage}
            className="px-4 py-2 bg-primary text-light rounded-md"
          >
            Weiter
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              const totalScore = scores.filter((score) => score).length;
              onFinish(totalScore); // Ergebnis anzeigen, wenn das Quiz abgeschlossen ist
            }}
            className="px-4 py-2 bg-primary text-light rounded-md"
          >
            Ergebnisse anzeigen
          </button>
        )}
      </div>
    </div>
  );
}

export default SentenceQuiz;
