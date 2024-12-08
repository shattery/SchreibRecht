import React, { useState, useEffect } from 'react';
import { sentenceQuizExercises } from '../data/exercises'; // Import der Übung
import SentenceQuiz from '../components/SentenceQuiz';

// Alle Übungen definieren
const allExercises = {
  sentenceQuiz: sentenceQuizExercises, // Übung aus der Import-Datei
};

// Lokale Funktionen zum Abrufen und Setzen von localStorage
const getLocalStorageItem = (key, defaultValue) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : defaultValue;
  }
  return defaultValue;
};

const setLocalStorageItem = (key, value) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

function App() {
  const [currentCategory, setCurrentCategory] = useState('sentenceQuiz');
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [completedExercises, setCompletedExercises] = useState(() =>
    getLocalStorageItem('completedExercises', {})
  );
  const [scores, setScores] = useState(() => getLocalStorageItem('scores', {}));
  const [lastScore, setLastScore] = useState(null);

  // Holen der Übungen aus der entsprechenden Kategorie
  const currentCategoryExercises = allExercises[currentCategory] || [];
  const totalExercises = currentCategoryExercises.length; // Anzahl der Übungen, die es in dieser Kategorie gibt

  // Fortschritt berechnen
  const progress = totalExercises > 0
    ? ((completedExercises[currentCategory]?.length || 0) / totalExercises) * 100
    : 0;

  useEffect(() => {
    // Speichern von abgeschlossenen Übungen und Punktzahlen im LocalStorage
    setLocalStorageItem('completedExercises', completedExercises);
    setLocalStorageItem('scores', scores);
  }, [completedExercises, scores]);

  const currentExercise = currentCategoryExercises[currentExerciseIndex];

  // Übung abschließen
  const handleScoreUpdate = (score) => {
    const category = currentCategory;

    setCompletedExercises((prev) => ({
      ...prev,
      [category]: [...(prev[category] || []), currentExerciseIndex],
    }));

    setScores((prev) => ({
      ...prev,
      [category]: {
        ...(prev[category] || {}),
        [currentExerciseIndex]: score,
      },
    }));

    setLastScore(score);
    setCurrentExerciseIndex((prevIndex) => Math.min(prevIndex + 1, totalExercises - 1)); // Verhindert das Überschreiten der Gesamtanzahl
  };

  // Überprüfen, ob alle Übungen abgeschlossen sind
  const allCompleted =
    completedExercises[currentCategory]?.length === totalExercises;

  const resetExercises = () => {
    setCompletedExercises({});
    setScores({});
    setCurrentExerciseIndex(0);
    setLastScore(null);
  };

  // Funktion für den "Zurück"-Button
  const handleBackButtonClick = () => {
    window.location.href = "/lern_aufgaben"; // Ändere die URL zu der gewünschten Seite
  };

  return (
    <div className="App bg-dark text-light min-h-screen">
      <div className="p-4">
        <h1 className="text-center text-2xl font-bold mb-6">Übungsplattform</h1>

        {/* Fortschrittsbalken */}
        <div className="mb-4">
          <div className="bg-gray-600 rounded-full h-4">
            <div
              className="bg-primary h-4 rounded-full"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
          <p className="text-center mt-2">
            Fortschritt: {Math.round(Math.min(progress, 100))}%
          </p>
        </div>

        {allCompleted ? (
          <div className="text-center mt-8">
            <h2 className="text-xl font-bold">Glückwunsch!</h2>
            <p>Du hast alle Übungen abgeschlossen.</p>
            <p>
              Gesamtpunktzahl:{" "}
              {Object.values(scores[currentCategory] || {}).reduce(
                (sum, s) => sum + s,
                0
              )}
            </p>
            <button
              onClick={resetExercises}
              className="bg-primary text-light py-2 px-4 mt-4 rounded-lg"
            >
              Übungen zurücksetzen
            </button>
          </div>
        ) : (
          currentExercise && (
            <SentenceQuiz
              quizzes={currentExercise.quizzes}
              onFinish={handleScoreUpdate}
            />
          )
        )}
        
        {/* Footer mit verbleibenden Übungen */}
        <footer className="p-4 bg-gray-800 text-center">
          <p className="text-sm text-gray-400">
            Noch {totalExercises - (completedExercises[currentCategory]?.length || 0)}{" "}
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
    </div>
  );
}

export default App;
