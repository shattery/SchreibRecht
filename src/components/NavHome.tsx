'use client'
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
              <span className='text-primary dark:text-primarydark name'><span className='hidden sm:inline'>SchreibRecht</span><svg className='inline-block size-9' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 375 512"><path fill="currentColor" d="M39.755 140.93C33.007 72.327 59.163 31.293 96 12.874c18.067-9.033 47.043-16.543 94.747-10.953c84.912 9.95 165.708 124.871 183.6 291.841c-45.32 10.125-55.001 54.48-85.857 116.191c-31.352 62.706-80.593 97.942-116.634 101.75c-40.087 4.663-100.954-46.217-120.926-108.986c-9.093-28.58-.047-64.214 9.033-82.463c30.91 9.034 69.428 7.806 93.68-12.165c8.559-80.839-11.413-159.3-113.888-167.16m134.056-69.588c-14.273 0-25.844 11.722-25.844 26.183s11.57 26.184 25.844 26.184s25.845-11.723 25.845-26.184s-11.571-26.183-25.845-26.183m0 8.473c-9.874 0-17.879 7.93-17.879 17.71s8.005 17.71 17.88 17.71s17.879-7.929 17.879-17.71s-8.005-17.71-17.88-17.71"/><path fill="currentColor" d="M36.114 149.04C6.004 160.415-10.724 256.1 7.677 317.658c.332.813.954 1.48 1.672 1.004c30.11-19.07 26.682-98.779 98.361-88.993c-16.477 33.373-33.913 56.515-65.156 65.992c-3.307.94-2.056 4.406-1.37 5.313c16.115 21.307 82.899 23.625 106.004 1.964c3.648-74.407-10.354-149.951-111.074-153.898"/></svg></span>
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
            <a href="/test" className="block rounded-lg text-xl group font-semibold text-secondary hover:text-primary transition dark:text-dark dark:hover:text-primarydark">
              Test
            </a>
            <div className="bg-primary h-[1px] w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>
          </div>
        </PopoverGroup>

        {/* Buttons for Register, Login, and Theme toggle */}
        <div className="mr-3 hidden lg:flex lg:flex-1 lg:justify-end ">
          <a href="#" className="p-1 border border-secondary bg-secondary dark:bg-dark dark:border-dark dark:text-light ml-12 text-sm font-semibold text-black hover:bg-primary dark:hover:bg-primarydark hover:border-primary dark:hover:border-primarydark rounded-md hover:scale-105 transition">
            Regestriren 
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-2">
          <a href="#" className="text-sm font-semibold text-secondary dark:text-dark hover:text-primary dark:hover:text-primarydark rounded-md p-1 border border-dark/0 hover:border-primary dark:hover:border-primarydark hover:scale-105 transition">
            Anmelden
          </a>
        </div>

        {/* Light/Dark mode switch and Hamburger icon positioned together on smaller screens */}
        <div className="flex items-center space-x-0 lg:space-x-3">
          {/* Burger Icon */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-dark hover:text-primary dark:hover:text-primarydark p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
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
              <a href="/" className="block rounded-lg text-xl group font-semibold text-secondary hover:text-primary transition dark:text-dark dark:hover:text-primarydark">
                Home
                <div className="bg-primary h-[1px] w-0 group-hover:w-16 transition-all duration-500 ease-in-out"></div>
              </a>
            </div>
            <div className="group">
              <a href="/about" className="block rounded-lg text-xl group font-semibold text-secondary hover:text-primary transition dark:text-dark dark:hover:text-primarydark">
                About
                <div className="bg-primary h-[1px] w-0 group-hover:w-16 transition-all duration-500 ease-in-out"></div>
              </a>
            </div>
            <div className="group">
              <a href="/test" className="block rounded-lg text-xl group font-semibold text-secondary hover:text-primary transition dark:text-dark dark:hover:text-primarydark">
                Test
                <div className="bg-primary h-[1px] w-0 group-hover:w-16 transition-all duration-500 ease-in-out"></div>
              </a>
            </div>
          </PopoverGroup>

          {/* Register & Login buttons in mobile */}
          <hr className='mt-4'></hr>
          <div className="flex flex-tow items-center mt-4">
            <a href="#" className="p-2 border border-secondary bg-secondary dark:bg-dark dark:border-dark dark:text-light text-sm font-semibold text-black hover:bg-primary dark:hover:bg-primarydark hover:border-primary dark:hover:border-primarydark rounded-md hover:scale-105 transition">
              Regestriren 
            </a>
            <a href="#" className="text-sm ml-3 font-semibold text-secondary dark:text-dark hover:text-primary dark:hover:text-primarydark rounded-md p-1 border border-dark/0 hover:border-primary dark:hover:border-primarydark hover:scale-105 transition">
              Anmelden
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
