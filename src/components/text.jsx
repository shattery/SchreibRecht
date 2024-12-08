'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const initialText = "Der Himmel war klar, und die Sterne funkelten wie Diamanten.";
const markedWords = ["Himmel", "klar", "Sterne", "Diamanten"];

export default function ScrambleGame() {
  const [phase, setPhase] = useState("reading"); // "reading" or "scramble"
  const [userOrder, setUserOrder] = useState([]);  // Holds the current order of words
  const [feedback, setFeedback] = useState("");  // For feedback after checking answer
  const [draggingIndex, setDraggingIndex] = useState(null); // Index for the dragged word
  const [hoveredIndex, setHoveredIndex] = useState(null); // Index for the hovered word
  const [open, setOpen] = useState(false);  // Controls dialog visibility
  const [isChecked, setIsChecked] = useState(false);  // State to track if the answer has been checked
  const [correctCount, setCorrectCount] = useState(0); // Counter for correct answers

  // Shuffle array helper function
  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  // Start scramble phase by shuffling words
  const startScramble = () => {
    const shuffled = shuffleArray([...markedWords]);
    setUserOrder(shuffled);
    setPhase("scramble");
    setIsChecked(false);  // Reset check state when starting the scramble
    setCorrectCount(0);   // Reset correct count
  };

  // Handle drag over event to allow dropping
  const handleDragOver = (e, index) => {
    e.preventDefault();
    setHoveredIndex(index); // Set the hovered index
  };

  // Handle the drop event and rearrange the order
  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    if (draggingIndex !== dropIndex) {
      const newOrder = [...userOrder];
      const [draggedItem] = newOrder.splice(draggingIndex, 1); // Remove dragged item
      newOrder.splice(dropIndex, 0, draggedItem); // Insert at the new position
      setUserOrder(newOrder);
    }
    setDraggingIndex(null); // Reset dragging index after drop
    setHoveredIndex(null); // Reset hovered index
  };

  // Handle drag start event
  const handleDragStart = (index) => {
    setDraggingIndex(index); // Set the index of the currently dragged item
  };

  // Check the user's answer
  const checkOrder = () => {
    const correctAnswers = userOrder.reduce((count, word, index) => {
      return count + (word === markedWords[index] ? 1 : 0);
    }, 0);

    setIsChecked(true);
    setCorrectCount(correctAnswers); // Update the correct count
    setFeedback(correctAnswers === markedWords.length ? "Alles korrekt! 🎉" : "Nicht alle Wörter sind korrekt.");
  };

  // Load state from localStorage on component mount


  // Save state to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem('phase', phase);
      localStorage.setItem('userOrder', JSON.stringify(userOrder));
      localStorage.setItem('isChecked', JSON.stringify(isChecked));
      localStorage.setItem('correctCount', correctCount);
    }
  }, [phase, userOrder, isChecked, correctCount]);

  return (
    <div>
      {/* Button to open the dialog */}
      <div onClick={() => setOpen(true)} className="cursor-pointer flex justify-center">
        <span className="bg-secondary text-white dark:text-black dark:bg-light py-4 px-20 rounded-full text-xl font-bold transition-all">2</span>
      </div>

      {/* Dialog for the game */}
      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
        <DialogBackdrop className="fixed inset-0 bg-gray-500/75 block transition-all" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto transition-all">
          <div className="flex h-screen items-stretch justify-center text-center md:items-center">
            <DialogPanel className="flex flex-col h-full w-full items-center justify-center align-bottom transform text-left text-base my-8 max-w-2xl lg:max-w-2xl transition-all">
              <div className="md:rounded-md relative flex w-full h-screen md:h-auto items-center overflow-hidden bg-white dark:bg-dark pb-8 pt-14 shadow-2xl px-6 p-8 transition-all">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 lg:right-8 transition-all"
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>

                <div className="w-full">
                  {phase === "reading" && (
                    <>
                      <span className='text-3xl'>Lese dir den Text gut durch</span>
                      <span className='text-sm block'>Und merke ihn dir gut</span>
                      <hr className='mb-2 mt-1'></hr>
                      <div>
                        <p className="text-lg dark:text-white">{initialText}</p>
                        <button
                          onClick={startScramble}
                          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
                        >
                          Fertig gelesen
                        </button>
                      </div>
                    </>
                  )}

                  {phase === "scramble" && (
                    <div>
                      <p className="text-lg mb-4 dark:text-white">Ordne die Begriffe in die richtige Reihenfolge:</p>
                      <div>
                        {userOrder.map((word, index) => (
                          <div
                            key={index}
                            draggable={!isChecked}
                            onDragStart={() => handleDragStart(index)}
                            onDrop={(e) => handleDrop(e, index)}
                            onDragOver={(e) => handleDragOver(e, index)}
                            onDragLeave={() => setHoveredIndex(null)} // Reset on leave
                            className={`drag-item p-2 border rounded-md mt-2 text-primary cursor-move transition-all ${
                              isChecked
                                ? word === markedWords[index]
                                  ? 'bg-green-500 text-white'
                                  : 'bg-red-500 text-white'
                                : 'border-primary'
                            } ${hoveredIndex === index ? 'scale-105 shadow-lg' : ''}`}
                          >
                            {word}
                          </div>
                        ))}
                      </div>
                      <hr className='mt-4 mb-4'></hr>
                      <button
                        onClick={checkOrder}
                        disabled={isChecked} // Disable button when checked
                        className={
                          `font-bold py-2 px-4 border border-primary text-primary hover:bg-primary hover:text-white rounded-md transition-all ${isChecked ? 'opacity-50 cursor-not-allowed' : ""}`
                        }
                      >
                        Antwort prüfen
                      </button>
                      <button
                        onClick={() => setOpen(false)}
                        className={'font-base ml-1 py-2 px-4 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-md transition-all'}
                      >
                        Schlißen
                      </button>
                      { feedback &&
                        <div className="text-lg mt-3 dark:text-primary">
                          <span className="font-bold dark:text-white">Richtig platziert:</span> {correctCount} / {markedWords.length}
                        </div>
                      }
                    </div>
                  )}
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
