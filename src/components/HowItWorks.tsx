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

  return (
    <section id="como-funciona" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-light text-[#1D3557] text-center mb-16">
          Como funciona?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step) => (
              <div 
                key={step.id}
                className={`flex items-start cursor-pointer transition-all duration-300 ${
                  activeStep === step.id 
                    ? 'transform scale-105'
                    : 'opacity-70 hover:opacity-100'
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
          
          {/* Interactive Demo */}
          <div className="relative bg-gray-50 rounded-2xl p-8 h-96 overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-[#7A9EBF]/10 to-[#F7CAC9]/10"></div>
            
            {/* Different content based on active step */}
            <div className="relative h-full flex flex-col">
              {activeStep === 1 && (
                <div className="h-full flex flex-col">
                  <div className="text-sm text-gray-400 mb-2">Sua expressão</div>
                  <div className="bg-white rounded-lg p-4 shadow-sm mb-auto">
                    <p className="text-gray-700 font-light">Hoje eu me senti perdido, como se estivesse caminhando em círculos...</p>
                  </div>
                  <div className="h-12 bg-white rounded-lg mt-4 shadow-sm flex items-center px-4 text-gray-400">
                    Escreva aqui...
                  </div>
                </div>
              )}
              
              {activeStep === 2 && (
                <div className="h-full flex flex-col items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-[#7A9EBF] to-[#F7CAC9]/70 shadow-lg flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-white/30 backdrop-blur-sm animate-pulse"></div>
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
        
        <div className="text-center mt-16 italic text-gray-500">
          "Como água, espelhando a lua.."
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;