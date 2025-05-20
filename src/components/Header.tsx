import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <h1 className="text-2xl font-bold mr-2">Gugi Gerar</h1>
          <span className="bg-teal-600 text-white text-xs px-2 py-1 rounded-full">Backend Developer</span>
        </div>
        <nav>
          <ul className="flex flex-wrap justify-center space-x-1 md:space-x-4">
            <li><a href="#home" className="px-3 py-2 hover:text-amber-400 transition-colors">Home</a></li>
            <li><a href="#about" className="px-3 py-2 hover:text-amber-400 transition-colors">About</a></li>
            <li><a href="#skills" className="px-3 py-2 hover:text-amber-400 transition-colors">Skills</a></li>
            <li><a href="#experience" className="px-3 py-2 hover:text-amber-400 transition-colors">Experience</a></li>
            <li><a href="#projects" className="px-3 py-2 hover:text-amber-400 transition-colors">Projects</a></li>
            <li><a href="#education" className="px-3 py-2 hover:text-amber-400 transition-colors">Education</a></li>
            <li><a href="#contact" className="px-3 py-2 hover:text-amber-400 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
