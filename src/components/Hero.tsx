import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <div className="w-32 h-32 rounded-full bg-gray-300 mb-6 border-4 border-teal-500 overflow-hidden">
          {/* Placeholder for profile image */}
          <div className="w-full h-full flex items-center justify-center text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Gugi Gerar</h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-6">Backend Developer</h2>
        <p className="text-lg max-w-2xl mb-8">
          Experienced Golang developer with over 3 years specializing in microservice architecture. 
          Passionate about building scalable, performant, and secure applications.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="#contact" 
            className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded-full transition-colors shadow-lg"
          >
            Contact Me
          </a>
          <a 
            href="#" 
            className="bg-transparent hover:bg-white/10 text-white font-bold py-2 px-6 rounded-full border-2 border-white transition-colors"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
