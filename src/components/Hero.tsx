import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [animateOrb, setAnimateOrb] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateOrb(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const orbBaseColor = '#7A9EBF';
  const experienceUrl = "https://eco666.vercel.app";

  return (
    <section className="relative min-h-screen bg-[#F8F6FA] flex flex-col items-center justify-center text-center px-6 pt-20 pb-20 overflow-hidden">
      
      {/* Background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] md:w-[20vw] md:h-[20vw] rounded-full bg-[#E0BBE4] opacity-20 blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-[45vw] h-[45vw] md:w-[25vw] md:h-[25vw] rounded-full bg-[#957DAD] opacity-20 blur-[120px] animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10 flex flex-col items-center justify-center">
        
        {/* Floating Glass Bubble */}
        <div className={`relative mb-16 transition-all duration-1000 ${animateOrb ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
          <div className="glass-bubble-container relative w-48 h-48 sm:w-64 sm:h-64 floating">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: `radial-gradient(circle at 30% 30%, white 0%, ${orbBaseColor}10 30%, ${orbBaseColor}20 60%, ${orbBaseColor}30 100%)`,
                boxShadow: `0 8px 32px 0 rgba(31, 38, 135, 0.2),
                            inset 0 -10px 20px 0 ${orbBaseColor}30,
                            inset 0 10px 20px 0 rgba(255, 255, 255, 0.7)`,
                backdropFilter: 'blur(4px)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
              }}
            />
            <div
              className="absolute bottom-0 left-1/2 w-3/4 h-4 rounded-full transform -translate-x-1/2 translate-y-10 opacity-40"
              style={{
                background: `radial-gradient(ellipse at center, ${orbBaseColor}80 0%, transparent 70%)`,
                filter: 'blur(4px)',
              }}
            />
            <div
              className="absolute inset-0 rounded-full"
              style={{
                border: `1px solid ${orbBaseColor}30`,
                animation: 'pulse 2s infinite',
              }}
            />
          </div>
        </div>

        {/* NOVO TÍTULO */}
        <h1 className="text-4xl md:text-6xl font-light text-gray-800 mb-8 transition-all duration-1000 delay-300">
          Um lugar para colocar suas emoções em palavras
        </h1>

        {/* SUBTÍTULO mais profundo */}
        <p className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-6 text-gray-700">
          Receba um reflexo cuidadoso para se conhecer melhor.
        </p>

        {/* Frase de Versão Beta */}
        <div className="text-green-600 inline-flex items-center font-medium mb-6 transition-all duration-1000 delay-500">
          <span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-2"></span>
          Seja um dos primeiros a experimentar e opinar
        </div>

        {/* Descrição Principal */}
        <p className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-6 transition-all duration-1000 delay-700">
          Um diário interativo com IA que transforma desabafos em reflexões. Um convite a se ouvir com atenção — e se entender melhor.
        </p>

        {/* Ícone Seta */}
        <div className="mb-4">
          <svg className="w-6 h-6 text-black mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>

        {/* Botão */}
        <a
          href={experienceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 rounded-xl bg-white text-gray-800 font-medium text-lg transition-all hover:scale-105 duration-300
            shadow-sm hover:shadow-md shadow-gray-300/50 hover:shadow-gray-400/50"
        >
          Quero experimentar
        </a>
      </div>
    </section>
  );
};

export default Hero;
