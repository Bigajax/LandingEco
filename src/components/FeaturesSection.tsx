import React from 'react';
import { Shield, Heart, Brain } from 'lucide-react';

const features = [
  {
    title: "Privacidade e confiança",
    description: "ECO foi feita para ser segura, privada e íntima. Nada do que você compartilha será usado fora da sua bolha.",
    icon: Shield,
    color: "from-[#7A9EBF] to-[#7A9EBF]/70"
  },
  {
    title: "Escuta sensível",
    description: "ECO escuta com atenção e oferece reflexões que respeitam e acolhem sua singularidade.",
    icon: Heart,
    color: "from-[#F7CAC9] to-[#F7CAC9]/70"
  },
  {
    title: "Inteligência Emocional",
    description: "Desenvolvida para compreender nuances emocionais e oferecer perspectivas que ampliam sua autoconsciência.",
    icon: Brain,
    color: "from-[#7A9EBF] to-[#F7CAC9]"
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="privacidade" className="py-24 px-6 bg-[#F8F6FA]">
      <div className="container mx-auto max-w-6xl">
        {/* Título e Subtítulo com quebra de linha */}
        <h2 className="text-4xl md:text-5xl font-light text-[#1D3557] text-center mb-4">
          O que nos guia
        </h2>
        <p className="text-lg md:text-xl font-light text-gray-700 text-center mb-16 max-w-3xl mx-auto">
          Comprometidos com a sua segurança, acolhimento e desenvolvimento emocional.
          <br /> {/* Adicionei a quebra de linha aqui */}
          Aqui, cada interação é protegida, ouvida com sensibilidade e transformada em reflexões que ampliam sua autoconsciência.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6`}>
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl text-[#1D3557] font-medium mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
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