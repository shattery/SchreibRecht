import { useState } from 'react';
import Popup from './popup';
import SentenceQuiz from './SentenceQuiz';
import Listening from './listening';
import CommaTest from './comma';
import FinalResultPopup from './FinalResultPopup'; // New component for final result

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [quizType, setQuizType] = useState(null);
  const [sentenceQuizScore, setSentenceQuizScore] = useState(0);
  const [listeningScore, setListeningScore] = useState(0);
  const [commaTestScore, setCommaTestScore] = useState(0);
  const [isTestFinished, setIsTestFinished] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const quizzes = [
    {
      sentence: "Ich gehe ___ der Schule.",
      options: ["zu", "in", "auf"],
      correctAnswer: "zu",
      aufgabe: "Setze das richtige Wort ein.",
      hinweis: "Denke an Richtung und Ziel.",
    },
    {
      sentence: "Ich esse ___ Apfel.",
      options: ["ein", "der", "einem"],
      correctAnswer: "ein",
      aufgabe: "Setze das richtige Wort ein.",
      hinweis: "Überlege, welcher Artikel zum Substantiv passt.",
    },
  ];

  const sentences = [
    {
      words: [
        "Lisa",
        "geht",
        "heute",
        "ins",
        "Kino",
        "sie",
        "hat",
        "sich",
        "sehr",
        "darauf",
        "gefreut",
      ],
      correctIndexes: [4],
    },
    {
      words: ["Wenn", "du", "willst", "kannst", "du", "mitkommen"],
      correctIndexes: [2],
    },
    {
      words: ["Ich", "kaufe", "Brot", "Milch", "und", "Käse"],
      correctIndexes: [2],
    },
  ];

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleOpenPopup = (type) => {
    setQuizType(type);
    setShowPopup(true);
    setIsTestFinished(false);
    setCurrentQuestionIndex(0);
  };

  const handleSentenceQuizAnswer = (answer) => {
    if (answer === quizzes[currentQuestionIndex].correctAnswer) {
      setSentenceQuizScore(sentenceQuizScore + 1);
    }

    if (currentQuestionIndex + 1 < quizzes.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsTestFinished(true);
    }
  };

  const handleFinalResult = () => {
    const totalScore = sentenceQuizScore + listeningScore + commaTestScore;
    return totalScore;
  };

  const handleListeningScore = (score) => {
    setListeningScore(score);
  };

  const handleCommaTestScore = (score) => {
    setCommaTestScore(score);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary p-6 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-light dark:text-dark mb-8">Lern-Übungen</h1>

        <button
          onClick={() => handleOpenPopup('quiz')}
          className="p-4 bg-primary text-white rounded-lg shadow-md hover:bg-primarydark focus:outline-none transform transition duration-300 hover:scale-105 mx-4 mb-4"
        >
          Satz-Quiz starten
        </button>
        <button
          onClick={() => handleOpenPopup('listening')}
          className="p-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 focus:outline-none transform transition duration-300 hover:scale-105 mx-4 mb-4"
        >
          Hörübung starten
        </button>
        <button
          onClick={() => handleOpenPopup('commaTest')}
          className="p-4 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none transform transition duration-300 hover:scale-105 mx-4 mb-4"
        >
          Komma-Test starten
        </button>
      </div>

      {showPopup && (
        <Popup
          title={quizType === 'quiz' ? 'Satz-Quiz' : quizType === 'listening' ? 'Hörübung' : 'Komma-Test'}
          onClose={handleClosePopup}
        >
          {quizType === 'quiz' && !isTestFinished && (
            <SentenceQuiz
              quizzes={quizzes}
              onFinish={(score) => {
                setSentenceQuizScore(score);
                setIsTestFinished(true);
              }}
            />
          )}

          {quizType === 'listening' && (
            <Listening
              audioSrc="./audios/ElevenLab_Benjamin.mp3"
              words={["Schokolade", "Känguru", "Quark", "Schildkröte"]}
              aufgabe="..."
              hinweis="..."
              onScore={handleListeningScore}
            />
          )}

          {quizType === 'commaTest' && (
            <CommaTest
              sentences={sentences}
              aufgabe="Setze die fehlenden Kommas in den angegebenen Sätzen."
              hinweis="Achte auf die Regeln der Kommasetzung bei Haupt- und Nebensätzen sowie Aufzählungen."
              onScore={handleCommaTestScore}
            />
          )}

          {/* Wenn alle Übungen abgeschlossen sind */}
          {isTestFinished && (
            <FinalResultPopup
              sentenceQuizScore={sentenceQuizScore}
              listeningScore={listeningScore}
              commaTestScore={commaTestScore}
              totalScore={handleFinalResult()}
              onClose={handleClosePopup}
            />
          )}
        </Popup>
      )}
    </div>
  );
}

export default App;
