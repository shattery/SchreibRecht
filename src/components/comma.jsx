import { useState } from "react";

function CommaTest({ sentences = [], aufgabe, hinweis }) {
  const [userInputs, setUserInputs] = useState(
    sentences.map(() => [])
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showAufgabe, setShowAufgabe] = useState(false);
  const [showHinweis, setShowHinweis] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    let totalScore = 0;

    sentences.forEach((sentence, index) => {
      const correctIndexes = sentence.correctIndexes.sort((a, b) => a - b);
      const userIndexes = userInputs[index].sort((a, b) => a - b);
      if (JSON.stringify(correctIndexes) === JSON.stringify(userIndexes)) {
        totalScore++;
      }
    });

    setScore(totalScore);
  };

  const renderSentenceWithCommas = (sentence, commaIndexes) => {
    return sentence.words
      .map((word, index) =>
        commaIndexes.includes(index) ? `${word},` : word
      )
      .join(" ");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-light dark:bg-dark shadow-md rounded-lg mt-9">
      <h1 className="text-2xl font-bold text-center mb-4 dark:text-light">Komma-Test</h1>
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
      <form onSubmit={handleSubmit} className="space-y-6">
        {sentences.map((sentence, sentenceIndex) => (
          <div key={sentenceIndex} className="flex flex-wrap items-center">
            {sentence.words.map((word, wordIndex) => (
              <div key={wordIndex} className="flex items-center">
                <span className="text-dark dark:text-light mx-1">{word}</span>
                {wordIndex < sentence.words.length - 1 && (
                  <span
                    onClick={() =>
                      !isSubmitted && toggleComma(sentenceIndex, wordIndex)
                    }
                    className={`cursor-pointer w-6 text-center mx-1 ${
                      userInputs[sentenceIndex].includes(wordIndex)
                        ? "text-primary font-bold"
                        : "text-gray-400"
                    }`}
                  >
                    {userInputs[sentenceIndex].includes(wordIndex) ? "," : "•"}
                  </span>
                )}
              </div>
            ))}
          </div>
        ))}
        <button
          type="submit"
          disabled={isSubmitted}
          className={`w-full py-2 px-4 rounded-md text-light font-bold ${
            isSubmitted
              ? "bg-secondary cursor-not-allowed"
              : "bg-primary hover:bg-primarydark"
          }`}
        >
          Überprüfen
        </button>
      </form>
      {isSubmitted && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-center mb-4 dark:text-light">
            Ergebnisse
          </h2>
          <div className="space-y-4">
            {sentences.map((sentence, index) => (
              <p key={index} className="text-lg dark:text-light">
                Satz {index + 1}:{" "}
                <span
                  className={`font-bold ml-2 ${
                    JSON.stringify(sentence.correctIndexes.sort((a, b) => a - b)) ===
                    JSON.stringify(userInputs[index].sort((a, b) => a - b))
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {renderSentenceWithCommas(
                    sentence,
                    userInputs[index]
                  ) || "Nicht ausgefüllt"}
                </span>
                {JSON.stringify(sentence.correctIndexes.sort((a, b) => a - b)) !==
                  JSON.stringify(userInputs[index].sort((a, b) => a - b)) && (
                  <span className="ml-2 text-green-500">
                    (Korrekt: {renderSentenceWithCommas(sentence, sentence.correctIndexes)})
                  </span>
                )}
              </p>
            ))}
          </div>
          <p className="text-center text-lg font-bold mt-4 dark:text-light">
            Punkte: {score} / {sentences.length}
          </p>
        </div>
      )}
    </div>
  );
}

export default CommaTest;