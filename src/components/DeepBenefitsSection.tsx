import React, { useState } from 'react';
import { Headphones, Sparkles, Flame, Waves, Layers, ChevronDown } from 'lucide-react';

type Benefit = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    icon: <Headphones size={22} strokeWidth={1.2} />,
    title: 'Autoescuta Radical',
    description: 'Aprenda a se escutar com honestidade. Use sua escrita para reconhecer emoções e pensamentos sem julgamentos.'
  },
  {
    icon: <Sparkles size={22} strokeWidth={1.2} />,
    title: 'Clareza Intencional',
    description: 'Organize pensamentos confusos e transforme em clareza para tomar decisões mais conscientes.'
  },
  {
    icon: <Flame size={22} strokeWidth={1.2} />,
    title: 'Ritual de Consciência',
    description: 'Transforme o escrever em um ritual de presença. Desacelere, conecte-se consigo e encontre sentido no que vive.'
  },
  {
    icon: <Waves size={22} strokeWidth={1.2} />,
    title: 'Navegação Emocional',
    description: 'Aprenda a navegar suas emoções. Encare medos e alegrias com consciência para compreender suas causas.'
  },
  {
    icon: <Layers size={22} strokeWidth={1.2} />,
    title: 'Construção de Sentido',
    description: 'Use a escrita para dar significado ao que sente. Reflita sobre padrões e transforme confusão em clareza e propósito.'
  }
];

const BenefitsAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="beneficios" className="py-16 md:py-20 px-4 md:px-6 bg-[#F8F6FA]">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-light text-[#1D3557] mb-3">
          Convites para aprofundar sua jornada
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
          Explore reflexões guiadas para transformar confusão em clareza. Organize pensamentos, compreenda emoções e tome decisões mais conscientes.
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className={`
              rounded-3xl
              border border-gray-200/60
              bg-white/60
              backdrop-blur-xl
              shadow-[0_6px_20px_-8px_rgba(0,0,0,0.08)]
              hover:shadow-[0_10px_25px_-8px_rgba(0,0,0,0.15)]
              transition-all duration-300
            `}
          >
            <button
              onClick={() => toggleIndex(index)}
              className="
                flex items-center justify-between w-full
                px-4 md:px-6 py-5
                text-left
                focus:outline-none
                transition
              "
            >
              <div className="flex items-center space-x-4">
                <div className="
                  flex items-center justify-center
                  w-10 h-10 md:w-12 md:h-12
                  rounded-full
                  bg-gradient-to-br from-white/70 to-gray-100/50
                  backdrop-blur
                  border border-gray-300/50
                  shadow-inner
                  hover:shadow
                  transition-all duration-300
                  text-[#1D3557]
                ">
                  {benefit.icon}
                </div>
                <span className="text-base md:text-lg text-[#1D3557] font-normal">
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
                activeIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="border-t border-gray-100 px-4 md:px-6 py-4 text-gray-600 text-sm md:text-base leading-relaxed">
                {benefit.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsAccordion;
