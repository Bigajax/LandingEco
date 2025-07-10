import React from 'react';
import { Shield, Heart, Brain } from 'lucide-react';

const features = [
  {
    title: "Privacidade e confiança",
    description: "A ECO foi feita para ser segura, privada e íntima. Nada do que você compartilha será usado fora da sua bolha.",
    icon: Shield,
    color: "from-[#7A9EBF]/80 to-[#F7CAC9]/80"
  },
  {
    title: "Escuta sensível",
    description: "A ECO escuta com atenção e oferece reflexões que respeitam e acolhem sua singularidade.",
    icon: Heart,
    color: "from-[#7A9EBF]/80 to-[#F7CAC9]/80"
  },
  {
    title: "Inteligência Emocional",
    description: "Desenvolvida para compreender nuances emocionais e oferecer perspectivas que ampliam sua autoconsciência.",
    icon: Brain,
    color: "from-[#7A9EBF]/80 to-[#F7CAC9]/80"
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="privacidade" className="py-20 px-6 bg-[#F8F6FA]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-light text-[#1D3557] text-center mb-5">
          O que nos guia
        </h2>
        <p className="text-base md:text-lg text-gray-700 text-center mb-14 max-w-3xl mx-auto leading-relaxed">
          Comprometidos com a sua segurança, acolhimento e desenvolvimento emocional. Cada interação é protegida, ouvida com sensibilidade e transformada em reflexões que ampliam sua autoconsciência.
        </p>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow transition-shadow duration-300 hover:shadow-lg"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6`}
              >
                <feature.icon size={28} aria-label={feature.title} />
              </div>
              <h3 className="text-xl md:text-2xl text-[#1D3557] font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
