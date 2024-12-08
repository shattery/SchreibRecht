'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function QuizComponent({ product, quizQuestions, correctAnswers }) {
  const [open, setOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [clickedFertig, setClickedFertig] = useState(false)
  const [clickedJa, setClickedJa] = useState(false)

  const [quizVisible, setQuizVisible] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState(new Array(quizQuestions.length).fill(undefined))
  const [quizResults, setQuizResults] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  // On component mount, load saved state from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedIsVisible = JSON.parse(localStorage.getItem('isVisible'))
      const storedIsConfirmed = JSON.parse(localStorage.getItem('isConfirmed'))
      const storedClickedFertig = JSON.parse(localStorage.getItem('clickedFertig'))
      const storedClickedJa = JSON.parse(localStorage.getItem('clickedJa'))
      const storedQuizVisible = JSON.parse(localStorage.getItem('quizVisible'))
      const storedQuizAnswers = JSON.parse(localStorage.getItem('quizAnswers'))
      const storedQuizResults = JSON.parse(localStorage.getItem('quizResults'))
      const storedSubmitted = JSON.parse(localStorage.getItem('submitted'))

      if (storedIsVisible !== null) setIsVisible(storedIsVisible)
      if (storedIsConfirmed !== null) setIsConfirmed(storedIsConfirmed)
      if (storedClickedFertig !== null) setClickedFertig(storedClickedFertig)
      if (storedClickedJa !== null) setClickedJa(storedClickedJa)
      if (storedQuizVisible !== null) setQuizVisible(storedQuizVisible)
      if (storedQuizAnswers !== null) setQuizAnswers(storedQuizAnswers)
      if (storedQuizResults !== null) setQuizResults(storedQuizResults)
      if (storedSubmitted !== null) setSubmitted(storedSubmitted)
    }
  }, [])

  // Save the state to localStorage whenever a relevant state changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('isVisible', JSON.stringify(isVisible))
      localStorage.setItem('isConfirmed', JSON.stringify(isConfirmed))
      localStorage.setItem('clickedFertig', JSON.stringify(clickedFertig))
      localStorage.setItem('clickedJa', JSON.stringify(clickedJa))
      localStorage.setItem('quizVisible', JSON.stringify(quizVisible))
      localStorage.setItem('quizAnswers', JSON.stringify(quizAnswers))
      localStorage.setItem('quizResults', JSON.stringify(quizResults))
      localStorage.setItem('submitted', JSON.stringify(submitted))
    }
  }, [isVisible, isConfirmed, clickedFertig, clickedJa, quizVisible, quizAnswers, quizResults, submitted])

  const handleClickFertig = () => {
    if (!clickedFertig) {
      setIsVisible(true)
      setClickedFertig(true)
    }
  }

  const handleClickJa = () => {
    if (!clickedJa) {
      setIsConfirmed(true)
      setClickedJa(true)
      setQuizVisible(true)
    }
  }

  const handleAnswer = (questionIndex, optionIndex) => {
    if (submitted) return
    const newAnswers = [...quizAnswers]
    newAnswers[questionIndex] = optionIndex
    setQuizAnswers(newAnswers)
  }

  const handleSubmitQuiz = () => {
    const unansweredQuestions = quizAnswers.filter(answer => answer === undefined)

    if (unansweredQuestions.length > 0) {
      setErrorMessage('Bitte wähle in jeder Frage eine Antwort aus.')
    } else {
      setErrorMessage('')
      setSubmitted(true)
      const results = quizAnswers.map((answer, index) => {
        return answer === correctAnswers[index]
      })
      setQuizResults(results)
    }
  }

  return (
    <div>
      <div onClick={() => setOpen(true)} className="cursor-pointer flex justify-center">
        <span className="bg-secondary text-white dark:text-black dark:bg-light py-4 px-20 rounded-full text-xl font-bold transition-all">1</span>
      </div>

      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop className=" fixed inset-0 hidden bg-gray-500/75 md:block transition-all" />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto transition-all">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center">
            <DialogPanel className="flex flex-col w-full transform text-left text-base md:my-8 md:max-w-2xl lg:max-w-4xl transition-all">
              <div className="md:rounded-md relative flex w-full h-screen md:h-auto items-center overflow-hidden bg-white dark:bg-dark pb-8 pt-14 shadow-2xl px-6 p-8 transition-all">
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 lg:right-8 transition-all"
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>

                <div className="w-full transition-all">
                  <div className="sm:col-span-1 lg:col-span-7 transition-all">
                    <h2 className="text-2xl font-bold dark:text-white text-gray-900 transition-all">{product.name}</h2>
                    <hr className="mb-4 mt-4 transition-all" />
                    <div className={classNames(
                        'mt-4',
                        quizVisible ? 'line-through text-gray-500' : 'text-gray-900 dark:text-gray-200',
                        'transition-all'
                      )}
                    >
                      {product.price}
                    </div>

                    {/* Buttons für Sicherstellen */}
                    <div className={classNames('transition-all', quizVisible ? "hidden mt-0" : "opacity-1 mt-10" )}>
                      <span
                        id="fertig"
                        onClick={handleClickFertig}
                        className={classNames(
                          'py-4 px-10 rounded-md text-sm font-bold cursor-pointer transition-all',
                          clickedFertig
                            ? 'bg-gray-500 text-black hover:cursor-not-allowed'
                            : 'bg-primarydark text-white hover:scale-105 hover:bg-primary transition-all'
                        )}
                      >
                        Fertig Gelesen
                      </span>
                    </div>

                    {isVisible && (
                      <div className={classNames("bg-dark dark:bg-light p-3 rounded-md text-primary dark:text-primarydark font-bold name transition-all", quizVisible ? "hidden mt-0" : "opacity-1 mt-7")}>
                        <span className='name transition-all'> Sicher?</span>
                        <div className={classNames(quizVisible ? "hidden" : "viseble")}>
                          <span
                            onClick={handleClickJa}
                            className={classNames(
                              'py-2 px-10 rounded-md text-sm font-bold cursor-pointer transition-all',
                              clickedJa
                                ? 'bg-gray-500 text-black hover:cursor-not-allowed'
                                : 'bg-primarydark text-white hover:scale-105 hover:bg-primary transition-all'
                            )}
                          >
                            Ja!
                          </span>
                        </div>
                      </div>
                    )}

                    <hr className='mt-7 transition-all'></hr>
                    {/* Quiz */}
                    {quizVisible && (
                      <div className="mt-4 transition-all dark:text-white">
                        <div className="text-lg font-bold transition-all">Quiz:</div>
                        {quizQuestions.map((question, questionIndex) => (
                          <div key={questionIndex} className="mt-4 transition-all">
                            <p className="transition-all">{question.question}</p>
                            <div>
                              {question.options.map((option, optionIndex) => {
                                const isSelected = quizAnswers[questionIndex] === optionIndex
                                const isCorrect = correctAnswers[questionIndex] === optionIndex
                                const isIncorrect =
                                  submitted &&
                                  isSelected &&
                                  !isCorrect

                                return (
                                  <button
                                    key={optionIndex}
                                    onClick={() => handleAnswer(questionIndex, optionIndex)}
                                    className={classNames(
                                      'py-2 px-4 mt-2 rounded-md mr-3 border border-gray-300 transition-all',
                                      isSelected && !submitted && 'bg-primary text-white font-bold border border-primary',
                                      submitted && isCorrect && 'font-bold bg-green-500/50 text-green-600 border-green-500 dark:bg-green-700/50 dark:text-green-500 border dark:border-green-600',
                                      isIncorrect && 'font-bold bg-red-500/50 text-red-600 border-red-500 dark:bg-red-700/50 dark:text-red-500 border dark:border-red-600',
                                      submitted &&
                                        !isSelected &&
                                        isCorrect &&
                                        'bg-green-500',
                                      !submitted && 'border border-gray-300 transition-all'
                                    )}
                                    disabled={submitted} // Antwort-Button deaktivieren, wenn das Quiz abgesendet wurde
                                  >
                                    {option}
                                  </button>
                                )
                              })}
                            </div>
                          </div>
                        ))}
                        {/* Fehlernachricht */}
                        <hr className='mt-3'></hr>
                {/* Absenden des Quiz */}
                <div className="mt-3">
                  <button
                    onClick={handleSubmitQuiz}
                    disabled={submitted} // Deaktiviert den Button nach Absenden des Quiz
                    className={classNames(
                      'font-bold py-2 px-4 border border-primary text-primary hover:bg-primary hover:text-white rounded-md transition-all',
                      submitted && 'opacity-50 cursor-not-allowed'
                    )}
                  >
                    Bestätigen
                  </button>
                  <button
                    onClick={() => setOpen(false)}
                    className={classNames(
                      'font-base ml-1 py-2 px-4 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-md transition-all',
                    )}
                  >
                    Schlißen
                  </button>
                  {errorMessage && (
                  <div className="text-red-800 text-sm mt-4"><span className="font-bold bg-red-700/50 text-red-500 border-l-4 border-red-500 p-1 rounded-r-md">{errorMessage}</span></div>
                )}
                </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  )
}
