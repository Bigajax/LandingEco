import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [animateOrb, setAnimateOrb] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateOrb(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const orbBaseColor = '#7A9EBF'; // Exemplo: azul acinzentado claro
  const experienceUrl = "https://eco666.vercel.app"; // URL para o botão "Entrar na experiência"

  return (
    <section className="relative min-h-screen bg-[#F8F6FA] flex flex-col items-center justify-center text-center px-6 pt-20 pb-20 overflow-hidden">
      {/* Enhanced 3D background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] md:w-[20vw] md:h-[20vw] rounded-full bg-[#E0BBE4] opacity-20 blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-[45vw] h-[45vw] md:w-[25vw] md:h-[25vw] rounded-full bg-[#957DAD] opacity-20 blur-[120px] animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10 flex flex-col items-center justify-center">
        {/* NOVA BOLHA (Mantida limpa, sem as manchas/reflexos extras) */}
        <div className={`relative mb-16 transition-all duration-1000 ${
            animateOrb ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
        }`}>
            <div className="glass-bubble-container relative w-48 h-48 sm:w-64 sm:h-64 floating">
                {/* Main glass bubble */}
                <div
                    className="absolute inset-0 rounded-full"
                    style={{
                        background: `radial-gradient(circle at 30% 30%, white 0%, ${orbBaseColor}10 30%, ${orbBaseColor}20 60%, ${orbBaseColor}30 100%)`,
                        boxShadow: `0 8px 32px 0 rgba(31, 38, 135, 0.2),
                                     inset 0 -10px 20px 0 ${orbBaseColor}30,
                                     inset 0 10px 20px 0 rgba(255, 255, 255, 0.7)`,
                        backdropFilter: 'blur(4px)',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                        transform: 'scale(1)',
                        transition: 'transform 0.3s ease-out',
                    }}
                />

                {/* Bottom shadow */}
                <div
                    className="absolute bottom-0 left-1/2 w-3/4 h-4 rounded-full transform -translate-x-1/2 translate-y-10 opacity-40"
                    style={{
                        background: `radial-gradient(ellipse at center, ${orbBaseColor}80 0%, transparent 70%)`,
                        filter: 'blur(4px)',
                    }}
                />

                {/* Pulse animation */}
                <div
                    className="absolute inset-0 rounded-full"
                    style={{
                        border: `1px solid ${orbBaseColor}30`,
                        animation: 'pulse 2s infinite',
                    }}
                />
            </div>
        </div>
        {/* FIM DA NOVA BOLHA */}

        {/* TÍTULO PRINCIPAL */}
        <h1 className="text-4xl md:text-6xl font-light text-gray-800 mb-8 transition-all duration-1000 delay-300">
          Converse com seu<br />
          <span className="font-normal">Eu interior</span>
        </h1>

        {/* NOVA FRASE ABAIXO DO TÍTULO */}
        <p className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-6 text-gray-700">
            Um espaço criado com carinho para quem quer se escutar e se conhecer.
        </p>

        {/* FRASE DE VERSÃO BETA */}
        <div className="text-green-600 inline-flex items-center font-medium mb-6 transition-all duration-1000 delay-500">
          <span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-2"></span>
          Versão beta — exclusiva para meus amigos mais próximos
        </div>

        {/* DESCRIÇÃO PRINCIPAL (AGORA AS DUAS PARTES JUNTAS NO MESMO PARÁGRAFO) */}
        <p className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-6 transition-all duration-1000 delay-700">
          ECO é uma inteligência artificial que entende a essência emocional das suas palavras. Ela não julga, apenas acolhe.
        </p>

        {/* SETA ACIMA DO BOTÃO (COR: PRETO) */}
        <div className="mb-4">
          <svg className="w-6 h-6 text-black mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>


        {/* BOTÃO "Entrar na experiência" - ESTILO APPLE-LIKE - AGORA COMO UM LINK */}
        <a
          href={experienceUrl} // Usa a URL definida
          target="_blank" // Abre em uma nova aba
          rel="noopener noreferrer" // Recomendado por segurança
          className="inline-block px-8 py-4 rounded-xl bg-white text-gray-800 font-medium text-lg transition-all hover:scale-105 duration-300
            shadow-sm hover:shadow-md shadow-gray-300/50 hover:shadow-gray-400/50"
        >
          Entrar na experiência
        </a>
      </div>
    </section>
  );
};

export default Hero;