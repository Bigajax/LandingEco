import React from 'react';
import { Shield, Heart, Brain } from 'lucide-react';

const features = [
  {
    title: "Espaço Seguro",
    description:
      "Um ambiente protegido para você expressar sentimentos e pensamentos sem medo ou julgamento.",
    icon: Shield,
  },
  {
    title: "Escuta Presente",
    description:
      "Ler com atenção verdadeira, refletir com cuidado e devolver uma resposta que respeita quem você é.",
    icon: Heart,
  },
  {
    title: "Perspectiva Emocional",
    description:
      "Ajudar você a enxergar além do óbvio, reconhecendo nuances para transformar confusão em clareza.",
    icon: Brain,
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="privacidade" className="py-16 md:py-20 px-6 bg-[#F8F6FA]">
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-light text-[#1D3557] mb-3">
          Nossos princípios
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
          Segurança, presença e profundidade para criar um espaço protegido onde você possa se escutar com clareza.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-5 px-4 md:px-6 py-6 rounded-2xl bg-white/50 backdrop-blur-md border border-gray-100 hover:shadow-sm transition-all duration-300"
          >
            <div className="rounded-full p-3 md:p-4 bg-gradient-to-br from-[#EDF3F8] to-[#F8F8FA] flex items-center justify-center">
              <feature.icon size={28} strokeWidth={1.25} className="text-[#1D3557]" aria-label={feature.title} />
            </div>
            <h3 className="text-lg md:text-xl text-[#1D3557] font-semibold">
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
