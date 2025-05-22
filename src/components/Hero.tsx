import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [animateOrb, setAnimateOrb] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateOrb(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#1D3557] to-[#2A4365] flex items-center justify-center text-center px-6 pt-20 overflow-hidden">
      {/* Enhanced 3D background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] md:w-[20vw] md:h-[20vw] rounded-full bg-[#F7CAC9] opacity-20 blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-[45vw] h-[45vw] md:w-[25vw] md:h-[25vw] rounded-full bg-[#7A9EBF] opacity-20 blur-[120px] animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Enhanced 3D orb */}
        <div className={`relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-16 transition-all duration-1000 ${
          animateOrb ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
        }`}>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#7A9EBF]/30 to-transparent blur-xl animate-pulse"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#F7CAC9]/30 to-transparent blur-xl animate-pulse delay-700"></div>
          <div className="relative w-full h-full rounded-full bg-gradient-to-b from-[#7A9EBF] to-[#7A9EBF]/80 backdrop-blur-sm flex items-center justify-center overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg')] bg-cover opacity-10 mix-blend-overlay"></div>
            <div className="absolute w-3/4 h-3/4 rounded-full bg-gradient-to-br from-white/20 to-white/5 animate-orb-float"></div>
            <div className="absolute w-1/2 h-1/2 rounded-full bg-gradient-to-tl from-white/30 to-transparent animate-orb-float delay-500"></div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-light text-white mb-8 transition-all duration-1000 delay-300">
          Converse com seu<br /> 
          <span className="font-normal">Eu interior</span>
        </h1>
        
        <div className="text-green-300 inline-flex items-center font-medium mb-6 transition-all duration-1000 delay-500">
          <span className="inline-block w-2 h-2 rounded-full bg-green-300 mr-2"></span>
          Versão beta — exclusiva para pessoas especiais como você
        </div>
        
        <p className="text-white/80 text-xl md:text-2xl font-light max-w-2xl mx-auto mb-12 transition-all duration-1000 delay-700">
          ECO é uma inteligência artificial que entende a essência emocional das suas palavras. 
          Ela não julga, apenas acolhe.
        </p>
        
        <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#7A9EBF] to-[#F7CAC9] text-white font-medium text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#7A9EBF]/20 duration-300 delay-1000">
          Entrar na experiência
        </button>
      </div>
      
      {/* Subtle scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;