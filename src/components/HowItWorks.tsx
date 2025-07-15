import React, { useState } from 'react';
import { MessageCircle, Brain, RefreshCw, BookOpen } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Compartilhe",
    description: "Escreva o que sente com honestidade.",
    icon: MessageCircle
  },
  {
    id: 2,
    title: "Reflexão guiada",
    description: "Receba um olhar cuidadoso de volta.",
    icon: Brain
  },
  {
    id: 3,
    title: "Clareza emocional",
    description: "Ganhe reflexos para enxergar com mais nitidez.",
    icon: RefreshCw
  },
  {
    id: 4,
    title: "Memórias conscientes",
    description: "Guarde aprendizados para evoluir com segurança.",
    icon: BookOpen
  }
];

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section id="como-funciona" className="py-20 sm:py-24 px-4 bg-[#F8F6FA]">
      <div className="max-w-5xl mx-auto flex flex-col items-center">

        {/* TÍTULO */}
        <h2 className="text-[2rem] sm:text-4xl md:text-5xl text-center font-light text-[#2E4A65] mb-4 leading-snug">
          Como a <span className="font-semibold text-[#275C7A]">Eco</span> funciona?
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center max-w-2xl mb-14 font-light leading-relaxed">
          Um caminho gentil em 4 passos para você se ouvir com mais presença.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full items-start">

          {/* LISTA DE ETAPAS */}
          <div className="space-y-4 sm:space-y-5">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`
                  w-full flex items-center sm:items-start sm:flex-row flex-col
                  px-4 sm:px-5 py-3 sm:py-4 rounded-3xl transition-all
                  backdrop-blur-lg border border-white/20 shadow-md
                  ${activeStep === step.id
                    ? 'bg-white/80 shadow-xl border-[#E8E3F5]'
                    : 'bg-white/30 hover:bg-white/50'}
                `}
              >
                <div className={`
                  flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14
                  rounded-full mb-2 sm:mb-0 sm:mr-4 shadow-inner
                  ${activeStep === step.id
                    ? 'bg-[#7A9EBF]'
                    : 'bg-white/20'}
                `}>
                  <step.icon
                    size={22}
                    strokeWidth={1.4}
                    className={activeStep === step.id ? 'text-white' : 'text-[#1D3557]/80'}
                  />
                </div>
                <div className="flex flex-col text-center sm:text-left">
                  <h3 className="text-base sm:text-lg text-[#1D3557] font-medium">{step.title}</h3>
                  <p className="text-gray-600 text-sm font-light">{step.description}</p>
                </div>
              </button>
            ))}
          </div>

          {/* ÁREA DEMO */}
          <div className="relative bg-white/40 backdrop-blur-xl rounded-3xl border border-white/20 shadow-lg p-6 sm:p-8 h-[380px] sm:h-[420px] w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#7A9EBF]/10 to-[#F7CAC9]/10 pointer-events-none"></div>
            <div className="relative h-full flex flex-col">

              {activeStep === 1 && (
                <div className="flex flex-col h-full">
                  <div className="text-sm text-gray-400 mb-2">Sua expressão</div>
                  <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-4 shadow border border-white/20 mb-auto">
                    <p className="text-gray-800 font-light italic">
                      Hoje me sinto confuso, tentando ouvir o que está aqui dentro.
                    </p>
                  </div>
                  <div className="mt-4 flex items-center h-11 rounded-2xl px-4 text-gray-400 bg-white/40 backdrop-blur-lg border border-white/20 shadow-inner">
                    Escreva aqui...
                  </div>
                </div>
              )}

              {activeStep === 2 && (
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full relative overflow-hidden border border-white/30 backdrop-blur-lg shadow-xl bg-white/20">
                    <div className="absolute inset-0"
                      style={{
                        background: 'radial-gradient(circle at 30% 30%, white 0%, #7A9EBF10 40%, #7A9EBF20 70%, #7A9EBF30 100%)',
                        backdropFilter: 'blur(10px)'
                      }}
                    />
                    <div className="absolute inset-0 border border-white/30 rounded-full animate-pulse"></div>
                  </div>
                  <p className="text-center text-gray-600 mt-6 text-sm">Analisando com atenção e empatia...</p>
                </div>
              )}

              {activeStep === 3 && (
                <div className="flex flex-col h-full">
                  <div className="text-sm text-gray-400 mb-2">Seu reflexo</div>
                  <div className="bg-gradient-to-br from-[#7A9EBF]/10 to-[#F7CAC9]/10 rounded-2xl p-4 border border-white/40 shadow-sm">
                    <p className="text-gray-800 font-light italic">
                      "Sinto que você busca clareza para entender melhor seus próprios movimentos internos."
                    </p>
                  </div>
                </div>
              )}

              {activeStep === 4 && (
                <div className="flex flex-col h-full">
                  <div className="text-sm text-gray-400 mb-2">Suas memórias</div>
                  <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-4 shadow border border-white/20 h-full overflow-y-auto">
                    <div className="border-b border-white/20 pb-3 mb-3">
                      <div className="text-xs text-gray-400">14 de julho</div>
                      <p className="text-gray-800 text-sm">Hoje me senti mais presente e calmo.</p>
                    </div>
                    <div className="border-b border-white/20 pb-3 mb-3">
                      <div className="text-xs text-gray-400">12 de julho</div>
                      <p className="text-gray-800 text-sm">Notei que estou reconhecendo melhor o que sinto.</p>
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
