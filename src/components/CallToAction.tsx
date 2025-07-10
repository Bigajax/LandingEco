import React from 'react';

const CallToAction: React.FC = () => {
  const loginRegisterUrl = "https://eco666.vercel.app";

  return (
    <section className="py-20 px-6 bg-[#F8F6FA] text-center relative overflow-hidden">
      
      {/* Bolhas de fundo sutis */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-[#E0BBE4] blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full bg-[#957DAD] blur-3xl opacity-40"></div>
      </div>

      <div className="container mx-auto max-w-3xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-light text-[#1D3557] mb-5">
          Comece sua jornada de <span className="font-normal whitespace-nowrap">autoconhecimento</span>
        </h2>

        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Participe da versão beta e experimente um jeito único de explorar suas emoções, construindo mais consciência e equilíbrio no dia a dia.
        </p>

        <a
          href={loginRegisterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 rounded-2xl bg-white text-[#1D3557] font-medium text-lg transition-all duration-300
                     shadow hover:shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#7A9EBF]/50 mb-6"
        >
          Quero participar
        </a>

        <div className="text-green-600 mt-6 text-sm font-medium">
          Inscrições limitadas para a fase beta
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
