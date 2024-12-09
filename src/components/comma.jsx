import { useState } from "react";

function CommaTest({ sentences = [], aufgabe, hinweis, onScoreChange }) {
  const [userInputs, setUserInputs] = useState(sentences.map(() => []));
  const [scores, setScores] = useState(sentences.map(() => null)); // Speichert Ergebnis für jeden Satz
  const [currentPage, setCurrentPage] = useState(0);
  const [showAufgabe, setShowAufgabe] = useState(false);
  const [showHinweis, setShowHinweis] = useState(false);

  const sentencesPerPage = 2; // Anzahl der Sätze pro Seite
  const maxPage = Math.ceil(sentences.length / sentencesPerPage);

  const toggleComma = (sentenceIndex, positionIndex) => {
    const updatedInputs = userInputs.map((input, index) =>
      index === sentenceIndex
        ? input.includes(positionIndex)
          ? input.filter((pos) => pos !== positionIndex)
          : [...input, positionIndex]
        : input
    );
    setUserInputs(updatedInputs);
  };

  const handleSubmitPage = (e) => {
    e.preventDefault();

    const currentStartIndex = currentPage * sentencesPerPage;
    const currentEndIndex = currentStartIndex + sentencesPerPage;

    const updatedScores = [...scores];

    for (let i = currentStartIndex; i < currentEndIndex && i < sentences.length; i++) {
      const correctIndexes = sentences[i].correctIndexes.sort((a, b) => a - b);
      const userIndexes = userInputs[i].sort((a, b) => a - b);
      updatedScores[i] =
        JSON.stringify(correctIndexes) === JSON.stringify(userIndexes);
    }

    setScores(updatedScores);

    // Gesamtscore an Elternkomponente melden
    const totalScore = updatedScores.filter((score) => score === true).length;
    if (onScoreChange) {
      onScoreChange(totalScore, sentences.length);
    }
  };

  const renderSentenceWithCommas = (sentence, commaIndexes) => {
    return sentence.words
      .map((word, index) =>
        commaIndexes.includes(index) ? `${word},` : word
      )
      .join(" ");
  };

  const currentSentences = sentences.slice(
    currentPage * sentencesPerPage,
    (currentPage + 1) * sentencesPerPage
  );

  return (
    <div className="max-w-2xl mx-auto p-6 bg-light dark:bg-dark shadow-md rounded-lg mt-9">
      <h1 className="text-2xl font-bold text-center mb-4 dark:text-light text-dark" >Comma Übung</h1>
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
      <form onSubmit={handleSubmitPage} className="space-y-6">
        {currentSentences.map((sentence, sentenceIndex) => {
          const globalIndex = currentPage * sentencesPerPage + sentenceIndex;

          return (
            <div key={globalIndex} className="flex flex-col">
              <div className="flex flex-wrap items-center">
                {sentence.words.map((word, wordIndex) => (
                  <div key={wordIndex} className="flex items-center">
                    <span className="text-dark dark:text-light mx-1">{word}</span>
                    {wordIndex < sentence.words.length - 1 && (
                      <span
                        onClick={() =>
                          scores[globalIndex] === null &&
                          toggleComma(globalIndex, wordIndex)
                        }
                        className={`cursor-pointer w-6 text-center mx-1 ${
                          userInputs[globalIndex].includes(wordIndex)
                            ? "text-primary font-bold"
                            : "text-gray-400"
                        }`}
                      >
                        {userInputs[globalIndex].includes(wordIndex) ? "," : "•"}
                      </span>
                    )}
                  </div>
                ))}
              </div>
              {scores[globalIndex] !== null && (
                <p
                  className={`mt-2 font-bold ${
                    scores[globalIndex] ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {scores[globalIndex]
                    ? "Richtig!"
                    : `Falsch! Korrekt: ${renderSentenceWithCommas(
                        sentence,
                        sentence.correctIndexes
                      )}`}
                </p>
              )}
            </div>
          );
        })}
        <div className="flex justify-between mt-4">
          <button
            type="button"
            disabled={currentPage === 0}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="px-4 py-2 bg-secondary text-light rounded-md disabled:opacity-50"
          >
            Zurück
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-primary text-light rounded-md"
          >
            Überprüfen
          </button>
          <button
            type="button"
            disabled={currentPage === maxPage - 1}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="px-4 py-2 bg-secondary text-light rounded-md disabled:opacity-50"
          >
            Weiter
          </button>
        </div>
      </form>
    </div>
  );
}

export default CommaTest;
