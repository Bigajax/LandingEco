import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

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
      
      {/* Soft Background Blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[40vw] h-[40vw] rounded-full bg-[#E0BBE4] opacity-10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full bg-[#957DAD] opacity-10 blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl flex flex-col md:flex-row items-center md:items-center gap-12 md:gap-20">
        
        {/* Animated Orb */}
        <div className={`flex-shrink-0 transition-all duration-1000 ${animateOrb ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
          <div className="relative w-48 h-48 sm:w-56 sm:h-56">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: `radial-gradient(circle at 30% 30%, white 0%, ${orbBaseColor}10 30%, ${orbBaseColor}20 60%, ${orbBaseColor}30 100%)`,
                boxShadow: `0 8px 32px 0 rgba(31, 38, 135, 0.12),
                            inset 0 -10px 20px 0 ${orbBaseColor}20,
                            inset 0 10px 20px 0 rgba(255, 255, 255, 0.6)`,
                backdropFilter: 'blur(6px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="max-w-2xl text-center md:text-left">
          
          {/* Micro-headline */}
          <p className="text-sm md:text-base text-[#7A9EBF] uppercase tracking-wider mb-6">
            Seu diário inteligente
          </p>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#1D3557] mb-6 leading-snug">
            Transforme emoções em <span className="font-medium">autoconhecimento</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-gray-700 mb-10 leading-relaxed opacity-90 max-w-xl mx-auto md:mx-0">
            A Eco acolhe suas emoções mais marcantes e devolve reflexões sensíveis. Encontre clareza para crescer com mais profundidade.
          </p>

          {/* Call to Action */}
          <div className="flex flex-col items-center md:items-start">
            <p className="text-sm text-[#7A9EBF] mb-2">Comece sua jornada hoje</p>
            <a
              href={experienceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-2xl bg-white/60 backdrop-blur-lg border border-white/30 text-[#1D3557] font-medium text-lg transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-[1.05] hover:bg-white/70"
            >
              <span>Começar agora</span>
              <ArrowRight size={20} className="stroke-1.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
