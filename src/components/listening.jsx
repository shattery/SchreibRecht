'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Listening({ audioSrc, words = [], aufgabe, hinweis }) {
  const [userInputs, setUserInputs] = useState(Array(words.length).fill(''))
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const [showAufgabe, setShowAufgabe] = useState(false)
  const [showHinweis, setShowHinweis] = useState(false)
  const [open, setOpen] = useState(false)

  const handleInputChange = (index, value) => {
    const newInputs = [...userInputs]
    newInputs[index] = value
    setUserInputs(newInputs)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    const correctAnswers = userInputs.filter((input, index) =>
      input.toLowerCase() === words[index].toLowerCase()
    ).length
    setScore(correctAnswers)
  }

  return (
    <div>
      <div onClick={() => setOpen(true)} className="cursor-pointer flex justify-center">
        <span className="bg-secondary text-white dark:text-black dark:bg-light py-4 px-20 rounded-full text-xl font-bold transition-all">3</span>
      </div>

      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
        <DialogBackdrop className="fixed inset-0 bg-gray-500/75 md:block transition-all" />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center">
            <DialogPanel className="flex flex-col h-full w-full items-center justify-center align-bottom transform text-left text-base my-8 max-w-2xl lg:max-w-2xl transition-all">
              <div className="md:rounded-md relative flex w-full items-center overflow-hidden bg-white dark:bg-dark px-4 pb-8 pt-14 shadow-2xl sm:px-6 lg:p-8 transition-all">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 lg:right-8 transition-all"
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>

                <div className="w-full transition-all">
                  <h2 className="text-2xl font-bold dark:text-white text-gray-900 text-center mb-5">Hör Übung</h2>

                  <div className="mb-4">
                    <button
                      className="w-full py-2 px-4 bg-primary text-light dark:text-dark dark:bg-primarydark font-bold rounded-md hover:bg-primarydark dark:hover:bg-primary focus:outline-none transition duration-400"
                      onClick={() => setShowAufgabe((prev) => !prev)}
                    >
                      {showAufgabe ? 'Aufgabe verbergen' : 'Aufgabe anzeigen'}
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
                      {showHinweis ? 'Hinweis verbergen' : 'Hinweis anzeigen'}
                    </button>
                    {showHinweis && (
                      <div className="mt-2 p-4 border rounded-md bg-light dark:bg-dark text-dark dark:text-light">
                        <span dangerouslySetInnerHTML={{ __html: hinweis }} />
                      </div>
                    )}
                  </div>

                  <audio controls className="w-full mb-4">
                    <source src={audioSrc} type="audio/mpeg" />
                    Dein Browser unterstützt kein Audio-Element.
                  </audio>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {words.map((word, index) => (
                        <input
                          key={index}
                          type="text"
                          value={userInputs[index]}
                          placeholder={`Wort ${index + 1}`}
                          onChange={(e) => handleInputChange(index, e.target.value)}
                          disabled={isSubmitted}
                          className="p-2 border rounded-md focus:outline-none focus:ring-2 dark:placeholder:text-primarydark dark:bg-secondary focus:ring-primary dark:focus:ring-primarydark"
                        />
                      ))}
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitted}
                      className={`w-full py-2 px-4 rounded-md text-light font-bold ${isSubmitted ? 'bg-secondary cursor-not-allowed' : 'bg-primary hover:bg-primarydark'}`}
                    >
                      Überprüfen
                    </button>
                  </form>

                  {isSubmitted && (
                    
                    <div className="mt-6 text-center">
                      <h2 className="text-xl font-semibold text-center mb-4 dark:text-light">Ergebnisse</h2>
                      <div className="space-y-2">
                        {words.map((word, index) => (
                          <p key={index} className=" text-lg dark:text-light">
                            Wort {index + 1}:
                            <span
                              className={` font-bold ml-2 ${userInputs[index].toLowerCase() === word.toLowerCase() ? 'text-green-600' : 'text-red-600'}`}
                            >
                              {userInputs[index] || 'Nicht ausgefüllt'}
                            </span>
                            {userInputs[index].toLowerCase() !== word.toLowerCase() && (
                              <span className="ml-2 text-green-700 dark:text-green-400">(Korrekt: {word})</span>
                            )}
                          </p>
                        ))}
                      </div>
                      <p className="text-center text-lg font-bold mt-4 dark:text-light">
                        Punkte: {score} / {words.length}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  )
}
