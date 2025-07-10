import React, { useState } from 'react';
import { MessageCircle, Brain, RefreshCw, BookOpen } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Você se expressa",
    description: "escreva ou fale livremente",
    icon: MessageCircle,
    color: "bg-[#7A9EBF]"
  },
  {
    id: 2,
    title: "A bolha escuta",
    description: "a IA capta a sua emoção",
    icon: Brain,
    color: "bg-[#7A9EBF]/80"
  },
  {
    id: 3,
    title: "Receba um eco",
    description: "um espelho emocional em forma de texto",
    icon: RefreshCw,
    color: "bg-[#F7CAC9]"
  },
  {
    id: 4,
    title: "Reflita e registre",
    description: "transforme em um diário emocional, se quiser",
    icon: BookOpen,
    color: "bg-[#F7CAC9]/80"
  }
];

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const orbBaseColor = '#7A9EBF';

  return (
    <section id="como-funciona" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">

        {/* TÍTULO PRINCIPAL */}
        <h2 className="text-4xl md:text-5xl font-light text-[#1D3557] text-center mb-6">
          Como funciona?
        </h2>
        <p className="text-lg md:text-xl font-light text-gray-700 text-center max-w-3xl mx-auto mb-16">
          Aqui, suas emoções são acolhidas com escuta e cuidado. Expresse-se livremente e receba um reflexo emocional para ajudar na sua própria compreensão e registro.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* STEPS */}
          <div className="space-y-8">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`flex items-start cursor-pointer transition-all duration-300 ${
                  activeStep === step.id ? 'transform scale-105' : 'opacity-70 hover:opacity-100'
                }`}
                onClick={() => setActiveStep(step.id)}
              >
                <div className={`flex-shrink-0 w-12 h-12 rounded-full ${step.color} text-white flex items-center justify-center mr-5 transition-transform duration-300 ${
                  activeStep === step.id ? 'rotate-0' : '-rotate-12'
                }`}>
                  <step.icon size={22} />
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    <span className="text-[#1D3557] font-medium mr-2">
                      {step.id}.
                    </span>
                    <h3 className="text-xl text-[#1D3557] font-medium">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 font-light">
                    — {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* DEMO INTERATIVO */}
          <div className="relative bg-gray-50 rounded-2xl p-8 h-96 overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-[#7A9EBF]/10 to-[#F7CAC9]/10"></div>
            <div className="relative h-full flex flex-col">
              {activeStep === 1 && (
                <div className="h-full flex flex-col">
                  <div className="text-sm text-gray-400 mb-2">Sua expressão</div>
                  <div className="bg-white rounded-lg p-4 shadow-sm mb-auto">
                    <p className="text-gray-700 font-light">
                      Hoje eu me senti perdido, como se estivesse caminhando em círculos...
                    </p>
                  </div>
                  <div className="h-12 bg-white rounded-lg mt-4 shadow-sm flex items-center px-4 text-gray-400">
                    Escreva aqui...
                  </div>
                </div>
              )}
              {activeStep === 2 && (
                <div className="h-full flex flex-col items-center justify-center">
                  <div className="glass-bubble-container relative w-32 h-32 floating">
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `radial-gradient(circle at 30% 30%, white 0%, ${orbBaseColor}10 30%, ${orbBaseColor}20 60%, ${orbBaseColor}30 100%)`,
                        boxShadow: `0 8px 32px 0 rgba(31, 38, 135, 0.2),
                                    inset 0 -10px 20px 0 ${orbBaseColor}30,
                                    inset 0 10px 20px 0 rgba(255, 255, 255, 0.7)`,
                        backdropFilter: 'blur(4px)',
                        border: '1px solid rgba(255, 255, 255, 0.18)'
                      }}
                    />
                    <div
                      className="absolute bottom-0 left-1/2 w-3/4 h-4 rounded-full transform -translate-x-1/2 translate-y-10 opacity-40"
                      style={{
                        background: `radial-gradient(ellipse at center, ${orbBaseColor}80 0%, transparent 70%)`,
                        filter: 'blur(4px)',
                      }}
                    />
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        border: `1px solid ${orbBaseColor}30`,
                        animation: 'pulse 2s infinite'
                      }}
                    />
                  </div>
                  <p className="text-center text-gray-600 mt-6">Analisando sentimentos...</p>
                </div>
              )}
              {activeStep === 3 && (
                <div className="h-full flex flex-col">
                  <div className="text-sm text-gray-400 mb-2">Seu eco</div>
                  <div className="bg-gradient-to-br from-[#7A9EBF]/10 to-[#F7CAC9]/10 rounded-lg p-4 border border-white/50 shadow-sm">
                    <p className="text-gray-700 font-light italic">
                      "Sinto que você está em busca de direção. Como água em um lago, às vezes giramos em círculos antes de encontrar nosso curso. Este momento de confusão pode ser o prelúdio de uma nova clareza."
                    </p>
                  </div>
                </div>
              )}
              {activeStep === 4 && (
                <div className="h-full flex flex-col">
                  <div className="text-sm text-gray-400 mb-2">Seu diário</div>
                  <div className="bg-white rounded-lg p-4 shadow-sm h-full overflow-y-auto">
                    <div className="border-b border-gray-100 pb-3 mb-3">
                      <div className="text-xs text-gray-400">12 de junho</div>
                      <p className="text-gray-700 text-sm">Hoje eu me senti perdido...</p>
                      <p className="text-gray-500 text-xs italic mt-2">"Sinto que você está em busca de direção..."</p>
                    </div>
                    <div className="border-b border-gray-100 pb-3 mb-3">
                      <div className="text-xs text-gray-400">10 de junho</div>
                      <p className="text-gray-700 text-sm">Acordei com uma sensação de paz...</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* EVIDÊNCIA CIENTÍFICA EMBAIXO */}
        <div className="mt-16 max-w-2xl mx-auto border border-gray-100 rounded-xl bg-white shadow-sm px-6 py-8 text-center">
          <h3 className="text-lg md:text-xl font-medium text-[#1D3557] mb-3">
            Evidência científica
          </h3>
          <p className="text-gray-600 mb-4 text-sm md:text-base">
            Escrever sobre emoções ajuda a reduzir estresse e organizar pensamentos. Estudos demonstram benefícios claros para clareza emocional.
          </p>
          <div className="flex items-center justify-center mt-4 space-x-2 text-sm text-gray-500">
            <span className="text-xl">🎓</span>
            <span className="text-[0.9rem]">
              Pesquisa de James W. Pennebaker
              <span className="block text-[0.85rem] mt-0.5 italic text-[#7A9EBF]/80">
                University of Texas
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
