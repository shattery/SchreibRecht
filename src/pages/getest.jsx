import { useState } from 'react';
import Popup from '../components/popup';
import SentenceQuiz from '../components/SentenceQuiz';
import Listening from '../components/listening';
import CommaTest from '../components/comma';
import FinalResultPopup from '../components/FinalResultPopup'; // New component for final result

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
    <div className="min-h-screen p-6 flex items-center justify-center">
              <div class="absolute inset-0 -z-10 overflow-hidden">
            <svg class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-primary [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
              <defs>
                <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                  <path d="M100 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y="-1" class="overflow-visible fill-white dark:fill-dark">
                <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
              </svg>
              <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
            </svg>
          </div>
      <div className="text-center">
      <ul class="mx-auto mb-8 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8 md:gap-10 lg:mb-5">
          <li class="flex items-center bg-black p-1 rounded-md px-2">
            <svg class="inline-block text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M18.132 5.111a1.5 1.5 0 0 1 0 2.121l-4.95 4.95a1.5 1.5 0 0 1-2.122-2.121l4.95-4.95a1.5 1.5 0 0 1 2.121 0Zm5 0a1.5 1.5 0 0 1 0 2.121l-9.83 9.83a1.6 1.6 0 0 1-2.262 0l-4.172-4.173a1.5 1.5 0 1 1 2.121-2.121l3.182 3.182l8.84-8.839a1.5 1.5 0 0 1 2.12 0ZM1.867 10.768a1.5 1.5 0 0 1 2.121 0l4.243 4.243a1.5 1.5 0 1 1-2.121 2.12L1.868 12.89a1.5 1.5 0 0 1 0-2.121Z"/></g></svg>
            
            <p class="text-sm sm:text-base font-bold text-primary ml-1">Kostelos</p>
          </li>
          <li class="flex items-center bg-black p-1 rounded-md px-2">
            <svg class="inline-block text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M18.132 5.111a1.5 1.5 0 0 1 0 2.121l-4.95 4.95a1.5 1.5 0 0 1-2.122-2.121l4.95-4.95a1.5 1.5 0 0 1 2.121 0Zm5 0a1.5 1.5 0 0 1 0 2.121l-9.83 9.83a1.6 1.6 0 0 1-2.262 0l-4.172-4.173a1.5 1.5 0 1 1 2.121-2.121l3.182 3.182l8.84-8.839a1.5 1.5 0 0 1 2.12 0ZM1.867 10.768a1.5 1.5 0 0 1 2.121 0l4.243 4.243a1.5 1.5 0 1 1-2.121 2.12L1.868 12.89a1.5 1.5 0 0 1 0-2.121Z"/></g></svg>
            <p class="text-sm sm:text-base font-bold text-primary ml-2">Anonym</p>
          </li>
          <li class="flex items-center bg-black p-1 rounded-md px-2">
            <svg class="inline-block text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M18.132 5.111a1.5 1.5 0 0 1 0 2.121l-4.95 4.95a1.5 1.5 0 0 1-2.122-2.121l4.95-4.95a1.5 1.5 0 0 1 2.121 0Zm5 0a1.5 1.5 0 0 1 0 2.121l-9.83 9.83a1.6 1.6 0 0 1-2.262 0l-4.172-4.173a1.5 1.5 0 1 1 2.121-2.121l3.182 3.182l8.84-8.839a1.5 1.5 0 0 1 2.12 0ZM1.867 10.768a1.5 1.5 0 0 1 2.121 0l4.243 4.243a1.5 1.5 0 1 1-2.121 2.12L1.868 12.89a1.5 1.5 0 0 1 0-2.121Z"/></g></svg>
            <p class="text-sm sm:text-base font-bold text-primary ml-2">Einfach</p>
          </li>
        </ul>
        
        <h1 className="text-4xl font-extrabold text-dark dark:text-light mb-20">Mit welcher Übung möchtest du zu erst <span className='name text-primary'>Starten?</span></h1>
        <div className='bg-dark p-8 rounded-full dark:bg-light'>
          <button
            onClick={() => handleOpenPopup('quiz')}
            className="group min-w-60 font-bold p-4 bg-primary text-white rounded-lg shadow-md hover:bg-primarydark focus:outline-none transform transition duration-300 hover:scale-105 mx-4 "
          >
            Schreiben<svg className='inline-block group-hover:rotate-[-40deg] transition-all' xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="20" stroke-dashoffset="20" d="M3 12h17.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"/></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M21 12l-7 7M21 12l-7 -7"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="12;0"/></path></g></svg>
          </button>
          <a href='/test'>
          <button
            onClick={() => handleOpenPopup('commaTest')}
            className="group min-w-60 font-bold p-4 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none transform transition duration-300 hover:scale-105 mx-4 "
          >
            Lesen<svg className='inline-block group-hover:rotate-[-40deg] transition-all' xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="20" stroke-dashoffset="20" d="M3 12h17.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"/></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M21 12l-7 7M21 12l-7 -7"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="12;0"/></path></g></svg>
          </button>
          </a>
        </div>
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