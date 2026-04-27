// src/components/Navbar.jsx
export default function Navbar({ onLogoClick }) {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="w-full px-10 py-3 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-white" onClick={onLogoClick}>Aditya Sinha</a>
        <div className="space-x-4">
          <a href="mailto:adityasinha2d@gmail.com" className="hover:text-slate-400 transition-colors duration-300 text-white">Email</a>
          <a href="https://www.linkedin.com/in/aditya-sinha-7a3398255" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 transition-colors duration-300 text-white">Linkedin</a>
        </div>
      </div>
    </nav>
  )
}