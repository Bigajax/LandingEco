import React, { useState } from 'react';
import { Headphones, Sparkles, Flame, Waves, Layers, ChevronDown } from 'lucide-react';

type Benefit = {
  icon: React.ReactNode;
  title: string;
  description: string;
  inspirations?: string[];
};

const benefits: Benefit[] = [
  {
    icon: <Headphones size={20} strokeWidth={1.2} />,
    title: 'Autoescuta Cuidadosa',
    description: 'Aprenda a se ouvir com gentileza. Use sua escrita para reconhecer emoções e pensamentos com clareza e sem julgamentos.'
  },
  {
    icon: <Sparkles size={20} strokeWidth={1.2} />,
    title: 'Clareza Emocional',
    description: 'Transforme pensamentos confusos em direção. Organize o que sente para tomar decisões com mais segurança e consciência.'
  },
  {
    icon: <Flame size={20} strokeWidth={1.2} />,
    title: 'Ritual de Presença',
    description: 'Escrever se torna um momento de pausa e conexão. Cultive atenção plena para dar sentido ao que vive.'
  },
  {
    icon: <Waves size={20} strokeWidth={1.2} />,
    title: 'Navegação Emocional',
    description: 'Explore suas emoções com profundidade. Encontre causas, entenda padrões e transforme sua relação com o que sente.'
  },
  {
    icon: <Layers size={20} strokeWidth={1.2} />,
    title: 'Fundamentos & Inspirações',
    description: 'Reflexões baseadas em filosofias e psicologia para apoiar sua jornada de autoconhecimento.',
    inspirations: [
      'Marco Aurélio (Estoicismo)',
      'Eckhart Tolle (O Poder do Agora)',
      'Daniel Kahneman (Heurísticas)',
      'Gestalt',
      'Brené Brown (Vulnerabilidade)'
    ]
  }
];
const BenefitsAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="beneficios" className="py-20 px-4 md:px-8 bg-[#F8F6FA]">
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h2 className="text-[2.2rem] md:text-5xl font-light text-[#1D3557] mb-4 tracking-tight leading-tight">
          Por que escolher a <span className="text-[#275C7A] font-semibold">Eco</span>
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
          Cultive <span className="text-[#275C7A] font-medium">clareza emocional</span> com cuidado e presença.
          Um espaço para se ouvir, refletir e transformar o que sente com segurança.
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="
              rounded-xl
              border border-white/30
              bg-gradient-to-br from-white/40 to-white/20
              backdrop-blur-lg
              shadow-[0_2px_6px_-2px_rgba(0,0,0,0.05)]
              transition-all duration-300
              hover:shadow-[0_4px_10px_-3px_rgba(0,0,0,0.06)]
            "
          >
            <button
              onClick={() => toggleIndex(index)}
              className="
                flex items-center justify-between w-full
                px-4 md:px-6 py-3 md:py-4
                text-left
                focus:outline-none
              "
            >
              <div className="flex items-center space-x-3 md:space-x-4">
                <div
                  className="
                    flex items-center justify-center
                    w-9 h-9 md:w-10 md:h-10
                    rounded-lg
                    bg-white/40
                    backdrop-blur
                    border border-white/20
                    shadow-inner
                    text-[#1D3557]
                  "
                >
                  {benefit.icon}
                </div>
                <span className="text-base md:text-lg text-[#1D3557] font-medium">
                  {benefit.title}
                </span>
              </div>
              <ChevronDown
                size={20}
                strokeWidth={1.5}
                className={`text-[#7A9EBF] transition-transform duration-300 ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                activeIndex === index ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="border-t border-gray-100/40 px-4 md:px-6 py-4 text-gray-600 text-sm md:text-base leading-relaxed space-y-4">
                <p>{benefit.description}</p>
                {benefit.inspirations && (
                  <div className="flex flex-wrap gap-2">
                    {benefit.inspirations.map((source, i) => (
                      <span
                        key={i}
                        className="
                          inline-flex items-center
                          px-3 py-1.5
                          rounded-full
                          bg-white/40
                          backdrop-blur
                          border border-white/20
                          text-sm text-[#1D3557]/80
                          shadow-sm
                        "
                      >
                        {source}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsAccordion;
