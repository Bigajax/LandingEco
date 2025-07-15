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
    <section className="relative min-h-[90vh] bg-[#F8F6FA] flex items-center justify-center px-6 overflow-hidden">
      
      {/* Soft background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[40vw] h-[40vw] rounded-full bg-[#E0BBE4] opacity-10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full bg-[#957DAD] opacity-10 blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-14 md:gap-20">
        
        {/* Animated Orb */}
        <div className={`flex-shrink-0 transition-all duration-1000 ${animateOrb ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
          <div className="relative w-48 h-48 sm:w-56 sm:h-56">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: `radial-gradient(circle at 30% 30%, white 0%, ${orbBaseColor}10 30%, ${orbBaseColor}20 60%, ${orbBaseColor}30 100%)`,
                boxShadow: `
                  0 12px 40px rgba(31, 38, 135, 0.12),
                  inset 0 -12px 24px ${orbBaseColor}20,
                  inset 0 12px 24px rgba(255, 255, 255, 0.6)
                `,
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="max-w-2xl text-center md:text-left">
          <p className="text-sm md:text-base text-[#7A9EBF] uppercase tracking-wider font-light mb-4">
            Seu espelho emocional
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 leading-snug font-light text-[#2E4A65]">
            Encontre <span className="font-semibold text-[#275C7A]">clareza emocional</span> com Eco
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed max-w-xl mx-auto md:mx-0 font-light">
            Um espelho que devolve reflexões cuidadosas sobre o que você sente – registre memórias, identifique padrões e evolua com segurança.
          </p>

          {/* Call to Action */}
          <div className="flex flex-col items-center md:items-start">
            <p className="text-sm text-[#7A9EBF] mb-2 font-light">Beta com vagas limitadas</p>
            <a
              href={experienceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                inline-block px-8 py-3.5 rounded-2xl
                bg-white/40 backdrop-blur-lg border border-white/30
                text-[#1D3557] font-medium text-lg
                transition-all duration-500
                shadow-[inset_0_2px_6px_rgba(255,255,255,0.3),_0_10px_20px_-6px_rgba(0,0,0,0.08)]
                hover:bg-white/20
                hover:backdrop-blur-xl
                hover:border-white/40
                hover:shadow-[inset_0_2px_4px_rgba(255,255,255,0.25),_0_16px_32px_-8px_rgba(0,0,0,0.12)]
                hover:scale-[1.04]
                active:scale-[0.98]
                focus:outline-none focus:ring-2 focus:ring-[#7A9EBF]/40
                relative overflow-hidden
                before:absolute before:inset-0 before:rounded-2xl
                before:bg-gradient-to-br before:from-white/20 before:to-[#7A9EBF]/10
                before:opacity-0 hover:before:opacity-100
                before:transition-opacity before:duration-500
              `}
            >
              <span className="relative z-10">Começar sua reflexão</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
