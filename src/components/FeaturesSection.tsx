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
    title: "Uma IA com alma",
    description: "ECO não responde como uma máquina. Ela escuta como uma presença amiga. Ela devolve reflexões que ressoam com sua essência.",
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
    <section className="py-24 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
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