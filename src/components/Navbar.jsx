import { use, useState, useEffect } from 'react';
import { FaLinkedin, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa';

export default function Navbar({ onLogoClick }) {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="fixed top-0 w-full bg-almond-cream-400 dark:bg-jet-black-900 backdrop-blur-md z-50">
      <div className="w-full px-10 py-3 flex items-center justify-between">
        <a 
          href="#home" 
          className="text-xl font-bold text-black-900 dark:text-khaki-beige-500" onClick={onLogoClick}>Aditya Sinha</a>
        <div className="flex flex-row space-x-4">
          <a 
            href="mailto:adityasinha2d@gmail.com" 
            className="flex items-center justify-center hover:text-khaki-beige-300 transition-colors duration-300 text-black-900 dark:text-khaki-beige-500">
              <FaEnvelope className="text-2xl"/> </a>
          <a 
            href="https://www.linkedin.com/in/aditya-sinha-7a3398255" 
            target="_blank" rel="noopener noreferrer" 
            className="flex items-center justify-center hover:text-khaki-beige-300 transition-colors duration-300 text-black-900 dark:text-khaki-beige-500">
              <FaLinkedin className="text-2xl"/> </a>
          <button
            onClick={toggleDarkMode}
            className="flex items-center justify-center hover:text-khaki-beige-300 transition-colors duration-300 text-black-900 dark:text-khaki-beige-500"
          >
            {isDarkMode ? <FaSun className="text-2xl" /> : <FaMoon className="text-2xl" />}
          </button>
        </div>
      </div>
    </nav>
  )
}