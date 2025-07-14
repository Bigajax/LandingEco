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
    icon: <Headphones size={22} strokeWidth={1.2} />,
    title: 'Autoescuta Radical',
    description: 'Aprenda a se ouvir com honestidade. Use sua escrita para reconhecer emoções e pensamentos sem julgamentos.'
  },
  {
    icon: <Sparkles size={22} strokeWidth={1.2} />,
    title: 'Clareza Intencional',
    description: 'Transforme pensamentos confusos em clareza. Organize o que sente e tome decisões com mais consciência.'
  },
  {
    icon: <Flame size={22} strokeWidth={1.2} />,
    title: 'Ritual de Consciência',
    description: 'Escrever vira um momento de presença. Desacelere, conecte-se consigo mesmo e dê sentido ao que vive.'
  },
  {
    icon: <Waves size={22} strokeWidth={1.2} />,
    title: 'Navegação Emocional',
    description: 'Aprenda a lidar com medos e alegrias com mais consciência. Descubra as causas e transforme sua relação com o que sente.'
  },
  {
    icon: <Layers size={22} strokeWidth={1.2} />,
    title: 'Fundamentos & Inspirações',
    description: 'Nossas reflexões são inspiradas em filosofias e abordagens psicológicas que apoiam sua jornada de autoconhecimento e clareza.',
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
    <section id="beneficios" className="py-24 px-4 md:px-8 bg-[#F8F6FA]">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-[2.5rem] md:text-5xl font-light text-[#1D3557] mb-5 tracking-tight leading-tight">
          Convites para se aprofundar
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
          Descubra reflexões guiadas para transformar confusão em clareza. Organize pensamentos e tome decisões mais conscientes.
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="
              rounded-[2rem]
              border border-white/40
              bg-gradient-to-br from-white/60 to-white/30
              backdrop-blur-lg
              shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)]
              transition-all duration-300
              hover:shadow-[0_14px_40px_-12px_rgba(0,0,0,0.12)]
            "
          >
            <button
              onClick={() => toggleIndex(index)}
              className="
                flex items-center justify-between w-full
                px-6 md:px-8 py-5
                text-left
                focus:outline-none
              "
            >
              <div className="flex items-center space-x-4">
                <div
                  className="
                    flex items-center justify-center
                    w-11 h-11 md:w-12 md:h-12
                    rounded-full
                    bg-white/50
                    backdrop-blur
                    border border-white/30
                    shadow-inner
                    text-[#1D3557]
                  "
                >
                  {benefit.icon}
                </div>
                <span className="text-lg md:text-xl text-[#1D3557] font-medium">
                  {benefit.title}
                </span>
              </div>
              <ChevronDown
                size={22}
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
              <div className="border-t border-gray-100/50 px-6 md:px-8 py-5 text-gray-600 text-sm md:text-base leading-relaxed space-y-4">
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
                          bg-white/50
                          backdrop-blur-md
                          border border-white/30
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
