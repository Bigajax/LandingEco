import React, { useState } from 'react';
import { MessageCircle, Brain, RefreshCw, BookOpen } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Compartilhe seus sentimentos",
    description: "Confie suas palavras à Eco para entender melhor o que está acontecendo com você.",
    icon: MessageCircle
  },
  {
    id: 2,
    title: "A Eco compreende você",
    description: "Analisa seu tom emocional e identifica padrões importantes para ajudar você a refletir.",
    icon: Brain
  },
  {
    id: 3,
    title: "Receba reflexos claros",
    description: "Encontre respostas que te ajudam a enxergar com mais clareza e tomar decisões mais conscientes.",
    icon: RefreshCw
  },
  {
    id: 4,
    title: "Construa sua história emocional",
    description: "Guarde momentos importantes para reconhecer como você evolui ao longo do tempo.",
    icon: BookOpen
  }
];

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section id="como-funciona" className="py-24 px-6 bg-[#F8F6FA]">
      <div className="max-w-6xl mx-auto">

        {/* TÍTULO */}
        <h2 className="text-4xl md:text-5xl font-light text-[#1D3557] text-center mb-6">
          Como funciona?
        </h2>
        <p className="text-lg md:text-xl font-light text-gray-600 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
          Veja como a Eco te guia em 4 passos para escrever com mais clareza e consciência.<br />
          Organize seus sentimentos, reflita e acompanhe sua evolução emocional com cuidado.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LISTA DE ETAPAS */}
          <div className="space-y-6">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`
                  flex items-start w-full text-left px-4 py-3 rounded-2xl transition-all
                  backdrop-blur-lg border border-white/20 shadow
                  ${activeStep === step.id
                    ? 'bg-white/80 border border-[#E8E3F5] shadow-lg'
                    : 'bg-white/30 hover:bg-white/50'}
                `}
              >
                <div
                  className={`
                    flex items-center justify-center w-12 h-12 rounded-full border border-white/30 shadow-sm mr-4
                    ${activeStep === step.id
                      ? 'bg-[#7A9EBF]'
                      : 'bg-white/20'}
                  `}
                >
                  <step.icon
                    size={22}
                    strokeWidth={1.5}
                    className={activeStep === step.id ? 'text-white' : 'text-[#1D3557]/80'}
                  />
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    <span className="text-[#1D3557] font-medium mr-2">{step.id}.</span>
                    <h3 className="text-lg md:text-xl text-[#1D3557] font-medium">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 font-light">{step.description}</p>
                </div>
              </button>
            ))}
          </div>

          {/* ÁREA DEMO */}
          <div className="relative bg-white/50 backdrop-blur-lg rounded-2xl border border-white/20 shadow p-8 h-96 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#7A9EBF]/10 to-[#F7CAC9]/10 pointer-events-none"></div>
            <div className="relative h-full flex flex-col">

              {activeStep === 1 && (
                <div className="flex flex-col h-full">
                  <div className="text-sm text-gray-400 mb-2">Sua expressão</div>
                  <div className="bg-white/60 backdrop-blur rounded-lg p-4 shadow border border-gray-100 mb-auto">
                    <p className="text-gray-800 font-light">
                      Hoje eu me senti perdido, como se estivesse caminhando em círculos...
                    </p>
                  </div>
                  <div className="h-12 bg-white/60 backdrop-blur rounded-lg mt-4 shadow border border-gray-100 flex items-center px-4 text-gray-400">
                    Escreva aqui...
                  </div>
                </div>
              )}

              {activeStep === 2 && (
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="w-32 h-32 rounded-full relative overflow-hidden border border-white/30 backdrop-blur-lg shadow-lg bg-white/20">
                    <div className="absolute inset-0"
                      style={{
                        background: 'radial-gradient(circle at 30% 30%, white 0%, #7A9EBF10 40%, #7A9EBF20 70%, #7A9EBF30 100%)',
                        backdropFilter: 'blur(6px)'
                      }}
                    />
                    <div className="absolute inset-0 border border-white/30 rounded-full animate-pulse"></div>
                  </div>
                  <p className="text-center text-gray-600 mt-6">Analisando suas palavras com cuidado...</p>
                </div>
              )}

              {activeStep === 3 && (
                <div className="flex flex-col h-full">
                  <div className="text-sm text-gray-400 mb-2">Seu eco</div>
                  <div className="bg-gradient-to-br from-[#7A9EBF]/10 to-[#F7CAC9]/10 rounded-lg p-4 border border-white/50 shadow-sm">
                    <p className="text-gray-800 font-light italic">
                      "Parece que você está se sentindo sem direção e preso em ciclos. Talvez esteja buscando clareza para seguir em frente."
                    </p>
                  </div>
                </div>
              )}

              {activeStep === 4 && (
                <div className="flex flex-col h-full">
                  <div className="text-sm text-gray-400 mb-2">Memória Inteligente</div>
                  <div className="bg-white/60 backdrop-blur rounded-lg p-4 shadow border border-gray-100 h-full overflow-y-auto">
                    <div className="border-b border-gray-100 pb-3 mb-3">
                      <div className="text-xs text-gray-400">12 de junho</div>
                      <p className="text-gray-800 text-sm">Hoje eu me senti perdido...</p>
                      <p className="text-gray-600 text-xs italic mt-2">"Sinto que você está em busca de direção..."</p>
                    </div>
                    <div className="border-b border-gray-100 pb-3 mb-3">
                      <div className="text-xs text-gray-400">10 de junho</div>
                      <p className="text-gray-800 text-sm">Acordei com uma sensação de paz...</p>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
