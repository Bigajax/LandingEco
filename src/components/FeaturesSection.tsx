import React from 'react';
import { Shield, Heart, Brain } from 'lucide-react';

const features = [
  {
    title: "Espaço Seguro",
    description:
      "Um ambiente protegido para você se expressar com liberdade, sem medo ou julgamento.",
    icon: Shield,
  },
  {
    title: "Escuta Presente",
    description:
      "Atenção verdadeira e devolutiva cuidadosa para apoiar quem você é, sem pressa ou ruído.",
    icon: Heart,
  },
  {
    title: "Perspectiva Emocional",
    description:
      "Enxergar além do óbvio, reconhecendo nuances para transformar confusão em clareza.",
    icon: Brain,
  }
];
const FeaturesSection: React.FC = () => {
  return (
    <section id="principios" className="py-20 md:py-24 px-6 bg-[#F8F6FA]">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-[2.4rem] md:text-5xl font-light text-[#1D3557] mb-4 leading-tight">
          Nossos <span className="text-[#275C7A] font-medium">Princípios</span>
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
          Segurança, presença e profundidade para oferecer um espaço confiável onde você possa se ouvir com clareza.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="
              flex flex-col items-center text-center space-y-4
              px-5 py-6
              rounded-xl
              border border-white/30
              bg-gradient-to-br from-white/40 to-white/20
              backdrop-blur-lg
              shadow-[0_2px_6px_-2px_rgba(0,0,0,0.05)]
              hover:shadow-[0_4px_12px_-3px_rgba(0,0,0,0.06)]
              transition-all duration-300
            "
          >
            <div className="
              rounded-full
              p-3 md:p-3.5
              bg-white/50
              backdrop-blur
              border border-white/20
              shadow-inner
              flex items-center justify-center
              text-[#1D3557]
            ">
              <feature.icon size={22} strokeWidth={1.2} aria-label={feature.title} />
            </div>
            <h3 className="text-base md:text-lg text-[#1D3557] font-semibold">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light max-w-xs">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
