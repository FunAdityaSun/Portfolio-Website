import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Navbar({ onLogoClick }) {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="w-full px-10 py-3 flex items-center justify-between">
        <a 
          href="#home" 
          className="text-xl font-bold text-white" onClick={onLogoClick}>Aditya Sinha</a>
        <div className="flex flex-row space-x-4">
          <a 
            href="mailto:adityasinha2d@gmail.com" 
            className="flex items-center justify-center hover:text-slate-400 transition-colors duration-300 text-white">
              <FaEnvelope className="text-2xl"/> </a>
          <a 
            href="https://www.linkedin.com/in/aditya-sinha-7a3398255" 
            target="_blank" rel="noopener noreferrer" 
            className="flex items-center justify-center hover:text-slate-400 transition-colors duration-300 text-white">
              <FaLinkedin className="text-2xl"/> </a>
        </div>
      </div>
    </nav>
  )
}