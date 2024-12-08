import { useState, useEffect } from "react";
import CommaTest from "./comma";
import Listening from "./listening";

// Importiere Übungen aus der externen Datei
import {
  commaTestExercises,
  listeningExercises,
} from "../data/exercises";

const allExercises = {
  commaTest: commaTestExercises,
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
  const [lastScore, setLastScore] = useState(null); // Hinzugefügt für den letzten Score

  useEffect(() => {
    setLocalStorageItem("completedExercises", completedExercises);
    setLocalStorageItem("scores", scores);
  }, [completedExercises, scores]);

  const currentExercise =
    allExercises[currentCategory]?.[currentExerciseIndex];

  // Berechne die Gesamtpunktzahl
  const getTotalScore = () => {
    return Object.values(scores).reduce((total, categoryScores) => {
      return (
        total +
        Object.values(categoryScores).reduce((sum, score) => sum + score, 0)
      );
    }, 0);
  };

  // Aktualisiert den Fortschritt
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

    setLastScore(score); // Setzt den letzten Score
    setCurrentExerciseIndex(currentExerciseIndex + 1);
  };

  const progress =
    ((completedExercises[currentCategory]?.length || 0) /
      allExercises[currentCategory]?.length) *
    100;

  // Stoppen, wenn alle Übungen abgeschlossen sind
  const allCompleted =
    completedExercises[currentCategory]?.length ===
    allExercises[currentCategory]?.length;

  // Reset-Funktion
  const resetExercises = () => {
    setCompletedExercises({});
    setScores({});
    setCurrentExerciseIndex(0);
    setLastScore(null);
  };

  // Funktion für den "Back" Button
  const handleBackButtonClick = () => {
    window.location.href = "/lern_aufgaben"; // Ersetze die URL durch die gewünschte Seite
  };
  

  return (
    <div className="App bg-dark text-light min-h-screen">
      {/* Navigation */}
      <div className="p-4">
        <nav className="flex justify-center space-x-8 mb-4 mt-12">
          {Object.keys(allExercises).map((category) => (
            <button
              key={category}
              onClick={() => {
                setCurrentCategory(category);
                setCurrentExerciseIndex(0);
                setLastScore(null); // Zurücksetzen des letzten Scores bei Kategorieänderung
              }}
              className={`py-2 px-6 font-bold rounded-lg text-lg transition duration-300 ${
                currentCategory === category
                  ? "bg-primary text-light"
                  : "bg-secondary text-dark hover:bg-primary hover:text-light"
              }`}
            >
              {category === "commaTest" ? "Comma Übungen" : "Hörverständnis"}
            </button>
          ))}
        </nav>

        {/* Fortschritt */}
        <div className="mb-4">
          <div className="bg-gray-600 rounded-full h-4">
            <div
              className="bg-primary h-4 rounded-full"
              style={{ width: `${Math.min(progress, 100)}%` }} // Verhindert, dass der Fortschritt über 100% hinausgeht
            ></div>
          </div>
          <p className="text-center mt-2">
            Fortschritt: {Math.round(Math.min(progress, 100))}%
          </p>
          {lastScore !== null && (
            <div className="text-center text-green-400 font-bold mt-2">
              Zuletzt erzielte Punkte: {lastScore}
            </div>
          )}
        </div>

        {/* Übung oder Abschlussnachricht */}
        {allCompleted ? (
          <div className="text-center mt-8">
            <h1 className="text-xl font-bold">Alle Übungen abgeschlossen!</h1>
            <p className="text-lg">Herzlichen Glückwunsch, du hast alle Übungen abgeschlossen!</p>
            <p className="text-lg font-bold">Gesamtpunktzahl: {getTotalScore()}</p>
            <button
              onClick={resetExercises}
              className="bg-primary text-light py-2 px-4 mt-4 font-bold"
            >
              Übungen zurücksetzen
            </button>
          </div>
        ) : (
          <>
            {/* Anzeige der aktuellen Übung */}
            {currentCategory === "commaTest" && currentExercise && (
              <CommaTest
                sentences={currentExercise.sentences}
                aufgabe={currentExercise.aufgabe}
                hinweis={currentExercise.hinweis}
                onScoreChange={(score) => handleScoreUpdate(score)}
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
          </>
        )}
      </div>

      {/* Footer mit verbleibenden Übungen */}
      <footer className="p-4 bg-gray-800 text-center">
        <p className="text-sm text-gray-400">
          Noch {allExercises[currentCategory]?.length - (completedExercises[currentCategory]?.length || 0)}{" "}
          Übungen übrig
        </p>
      </footer>

      {/* Back Button */}
      <div className="fixed bottom-4 left-4">
        <button
          onClick={handleBackButtonClick}
          className="bg-secondary text-dark py-2 px-6 font-bold rounded-full shadow-lg transition duration-300 hover:bg-primary hover:text-light"
        >
          Zurück
        </button>
      </div>
    </div>
  );
}

export default App;
