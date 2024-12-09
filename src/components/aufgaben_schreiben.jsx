import { useState, useEffect } from "react";
import CommaTest from "./comma";
import Listening from "./listening";

// Importiere Übungen aus der externen Datei
import { commaTestExercises, listeningExercises } from "../data/exercises";

const allExercises = {
  commaTest: commaTestExercises,
  listening: listeningExercises,
};

// Hilfsfunktionen für localStorage
const getLocalStorageItem = (key, defaultValue) => {
  if (typeof window !== "undefined" && window.localStorage) {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : defaultValue;
    } catch (error) {
      console.error("Fehler beim Abrufen des localStorage-Items", error);
      return defaultValue;
    }
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
  const [lastScore, setLastScore] = useState(null);

  useEffect(() => {
    setLocalStorageItem("completedExercises", completedExercises);
    setLocalStorageItem("scores", scores);
  }, [completedExercises, scores]);

  // Hole die aktuelle Übung basierend auf der Kategorie und dem Index
  const currentExercise =
    allExercises[currentCategory]?.[currentExerciseIndex];

  const getTotalScore = () => {
    return Object.values(scores).reduce((total, categoryScores) => {
      return (
        total +
        Object.values(categoryScores).reduce((sum, score) => sum + score, 0)
      );
    }, 0);
  };

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

    setLastScore(score);

    // Wenn der Benutzer auf "Weiter" klickt, den Index erhöhen und das Audio sowie die Wörter aktualisieren
    setCurrentExerciseIndex((prevIndex) => prevIndex + 1);
  };

  const progress =
    ((completedExercises[currentCategory]?.length || 0) /
      allExercises[currentCategory]?.length) *
    100;

  const allCompleted =
    completedExercises[currentCategory]?.length ===
    allExercises[currentCategory]?.length;

  const resetExercises = () => {
    setCompletedExercises({});
    setScores({});
    setCurrentExerciseIndex(0);
    setLastScore(null);
    setLocalStorageItem("completedExercises", {});
    setLocalStorageItem("scores", {});
  };

  const handleBackButtonClick = () => {
    window.location.href = "/lern_aufgaben";
  };

  return (
    <div className="App  text-light bg-light dark:bg-dark min-h-screen">
      
      <div className="p-4">
        <nav className="flex justify-center space-x-8 mb-4 mt-12">
          {Object.keys(allExercises).map((category) => (
            <button
              key={category}
              onClick={() => {
                setCurrentCategory(category);
                setCurrentExerciseIndex(0);  // Setzt den Index zurück, wenn die Kategorie gewechselt wird
                setLastScore(null);
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

        <div className="mb-4">
          <div className="bg-gray-600 rounded-full h-4">
            <div
              className="bg-primary h-4 rounded-full"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
          <p className="text-center mt-2 dark:text-light text-dark">
            Fortschritt: {Math.round(Math.min(progress, 100))}%
          </p>
          {lastScore !== null && (
            <div className="text-center text-green-400 font-bold mt-2">
              Zuletzt erzielte Punkte: {lastScore}
            </div>
          )}
        </div>
       

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
            {currentCategory === "commaTest" && currentExercise && (
              <CommaTest
                sentences={currentExercise.sentences}
                aufgabe={currentExercise.aufgabe}
                hinweis={currentExercise.hinweis}
                onScoreChange={handleScoreUpdate}
              />
            

            )}
            {currentCategory === "listening" && currentExercise && (
              <Listening
                audioSrc={[
                  "/audios/Benjamin _ck.mp3",
                  "/audios/Benjamin_gross und klein .mp3",
                  "/audios/Benjamin_ss.mp3",
                  "/audios/Benjamin_lich ig.mp3",
                  "/audios/Benjaminzusamengesetzte wörter.mp3",
                  "/audios/Benjamin_infinitv.mp3",
                  "/audios/Benjamin_present.mp3",
                  "/audios/bejamin_heit_keit.mp3",
                ]}  // Das Audio der Übung wird hier gesetzt
                words={currentExercise.words}         // Die Wörter der Übung werden hier gesetzt
                aufgabe={currentExercise.aufgabe}
                hinweis={currentExercise.hinweis}
                onScoreChange={handleScoreUpdate}
              />
            )}
          </>
        )}
      </div>

      <footer className="p-4 bg-gray-800 text-center mt-14 relative">
          
          <p className="text-sm text-gray-400">
            Noch {allExercises[currentCategory]?.length - (completedExercises[currentCategory]?.length || 0)}{" "}
            Übungen übrig
          </p>
           {/* Back Button */}
        <div className=" bottom-4 left-4">
          <button
            onClick={handleBackButtonClick}
            className="bg-secondary text-dark py-2 px-6 font-bold rounded-full mt-5 shadow-lg transition duration-300 hover:bg-primary hover:text-light"
          >
            Zurück
          </button>
        </div>
        </footer>
    </div>
  );
}

export default App;
