import { useState, useEffect } from "react";
import CommaTest from "../components/comma";
import SentenceQuiz from "../components/SentenceQuiz";
import Listening from "../components/listening";

// Importiere Übungen aus der externen Datei
import {
  commaTestExercises,
  sentenceQuizExercises,
  listeningExercises,
} from "../data/exercises";

const allExercises = {
  commaTest: commaTestExercises,
  sentenceQuiz: sentenceQuizExercises,
  listening: listeningExercises,
};

// Hilfsfunktionen für localStorage
const getLocalStorageItem = (key, defaultValue) => {
  if (typeof window !== "undefined" && window.localStorage) {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : defaultValue;
  }
  return defaultValue;
};

const setLocalStorageItem = (key, value) => {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

function App() {
  const [currentCategory, setCurrentCategory] = useState("commaTest");
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [completedExercises, setCompletedExercises] = useState(() =>
    getLocalStorageItem("completedExercises", {})
  );
  const [scores, setScores] = useState(() =>
    getLocalStorageItem("scores", {})
  );

  useEffect(() => {
    setLocalStorageItem("completedExercises", completedExercises);
    setLocalStorageItem("scores", scores);
  }, [completedExercises, scores]);

  const currentExercise =
    allExercises[currentCategory]?.[currentExerciseIndex];

  const handleScoreUpdate = (score) => {
    const category = currentCategory;
    const exerciseIndex = currentExerciseIndex;

    setCompletedExercises((prev) => ({
      ...prev,
      [category]: [...(prev[category] || []), exerciseIndex],
    }));

    setScores((prev) => ({
      ...prev,
      [category]: {
        ...(prev[category] || {}),
        [exerciseIndex]: score,
      },
    }));

    // Bewege zum nächsten Exercise
    setCurrentExerciseIndex(currentExerciseIndex + 1);
  };

  const progress =
    ((completedExercises[currentCategory]?.length || 0) /
      allExercises[currentCategory]?.length) *
    100;

  if (!currentExercise) {
    return (
      <div className="text-center mt-8">
        <h1 className="text-xl font-bold">Alle Übungen abgeschlossen!</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="bg-primary text-light p-4 text-center">
        <h1 className="text-3xl font-bold">Lernplattform</h1>
      </header>
      <div className="p-4">
        <nav className="flex space-x-4 mb-4">
          {Object.keys(allExercises).map((category) => (
            <button
              key={category}
              onClick={() => {
                setCurrentCategory(category);
                setCurrentExerciseIndex(0);
              }}
              className={`py-2 px-4 font-bold ${
                currentCategory === category
                  ? "bg-primary text-light"
                  : "bg-secondary text-dark"
              }`}
            >
              {category}
            </button>
          ))}
        </nav>
        <div className="mb-4">
          <div className="bg-gray-300 rounded-full h-4">
            <div
              className="bg-primary h-4 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-center mt-2">
            Fortschritt: {Math.round(progress)}%
          </p>
        </div>
        {currentCategory === "commaTest" && currentExercise && (
          <CommaTest
            sentences={currentExercise.sentences}
            aufgabe={currentExercise.aufgabe}
            hinweis={currentExercise.hinweis}
            onScoreChange={(score) => handleScoreUpdate(score)}
          />
        )}
        {currentCategory === "sentenceQuiz" && currentExercise && (
          <SentenceQuiz
            quizzes={currentExercise.quizzes}
            onFinish={(score) => handleScoreUpdate(score)}
          />
        )}
        {currentCategory === "listening" && currentExercise && (
          <Listening
            audioSrc={currentExercise.audioSrc}
            words={currentExercise.words}
            aufgabe={currentExercise.aufgabe}
            hinweis={currentExercise.hinweis}
            onScoreChange={(score) => handleScoreUpdate(score)}
          />
        )}
      </div>
      <footer className="p-4 bg-gray-200 text-center">
        <p>
          Fortschritt: {completedExercises[currentCategory]?.length || 0} von{" "}
          {allExercises[currentCategory]?.length}
        </p>
      </footer>
    </div>
  );
}

export default App;
