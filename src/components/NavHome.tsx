import { useEffect, useState } from 'react'
import '../css/global.css'
import {
  Popover,
  PopoverGroup,
} from '@headlessui/react'
import { ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon, SquaresPlusIcon, ArrowPathIcon } from '@heroicons/react/24/outline'

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]

export default function Example() {
  const [theme, setTheme] = useState('light');
  const [isOpen, setIsOpen] = useState(false);  // State to handle burger menu

  // Set theme on initial load based on localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  // Handle theme toggle
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  // Toggle burger menu visibility
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-dark/80 dark:bg-light/80 backdrop-blur-lg fixed top-0 left-0 w-full z-10">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-2 px-2">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">SpellSkill</span>
            <span className="font-bold text-3xl">
              <span className='text-primary dark:text-primarydark name'>SchreibRecht</span>
            </span>
          </a>
        </div>

        {/* Desktop menu */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-8">
          <div className="group">
            <a href="/" className="block rounded-lg text-xl group font-semibold text-secondary  hover:text-primary transition dark:text-dark dark:hover:text-primarydark">
              Home
            </a>
            <div className="bg-primary h-[1px] w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>
          </div>
          <div className="group">
            <a href="/about" className="block rounded-lg text-xl group font-semibold text-secondary hover:text-primary transition dark:text-dark dark:hover:text-primarydark">
              About
            </a>
            <div className="bg-primary h-[1px] w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>
          </div>
          <div className="group">
            <a href="/lern_aufgaben" className="block rounded-lg text-xl group font-semibold text-secondary hover:text-primary transition dark:text-dark dark:hover:text-primarydark">
              Übungen
            </a>
            <div className="bg-primary h-[1px] w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>
          </div>
        </PopoverGroup>

        {/* Buttons for Register, Login, and Theme toggle */}
        {/* Light/Dark mode switch and Hamburger icon positioned together on smaller screens */}
        <div className="flex items-center space-x-4">
          {/* Burger Icon */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-secondary hover:text-primary dark:hover:text-primarydark p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Theme switch */}
          <div
            id="colorSwitch"
            className="hover:cursor-pointer bg-dark dark:bg-light rounded-full p-2"
            onClick={toggleTheme}
          >
            {theme === 'dark' ? (
              <img src="./icons/sunny-twotone-loop.svg" alt="Sun Icon" className="h-5 w-5" />
            ) : (
              <img src="./icons/moon-rising-filled-loop.svg" alt="Moon Icon" className="h-5 w-5" />
            )}
          </div>
        </div>
      </nav>

      {/* Mobile menu (shown when isOpen is true) */}
      {isOpen && (
        <div className="lg:hidden p-4 bg-dark/80 dark:bg-light/80 backdrop-blur-lg">
          <PopoverGroup>
            <div className="group">
              <a href="/" className="block rounded-lg text-3xl group font-semibold text-secondary hover:text-primary transition dark:text-dark dark:hover:text-primarydark">
                Home
                <div className="bg-primary h-[1px] w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>
              </a>
            </div>
            <div className="group">
              <a href="/about" className="block rounded-lg text-3xl group font-semibold text-secondary hover:text-primary transition dark:text-dark dark:hover:text-primarydark">
                About
                <div className="bg-primary h-[1px] w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>
              </a>
            </div>
            <div className="group">
              <a href="../pages/lern_aufgaben.astro" className="block rounded-lg text-3xl group font-semibold text-secondary hover:text-primary transition dark:text-dark dark:hover:text-primarydark">
              Übungen
                <div className="bg-primary h-[1px] w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>
              </a>
            </div>
          </PopoverGroup>

          {/* Register & Login buttons in mobile */}
        </div>
      )}
    </header>
  );
}
