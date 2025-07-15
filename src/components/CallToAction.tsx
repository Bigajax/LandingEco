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

      <div className="container mx-auto max-w-3xl relative z-10 flex flex-col items-center">

        {/* Decorative Orb */}
        <div className="relative w-32 h-32 mb-8">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 30%, white 0%, #7A9EBF10 30%, #7A9EBF20 60%, #7A9EBF30 100%)',
              boxShadow: `
                0 8px 32px 0 rgba(31, 38, 135, 0.12),
                inset 0 -10px 20px 0 #7A9EBF20,
                inset 0 10px 20px 0 rgba(255, 255, 255, 0.6)
              `,
              backdropFilter: 'blur(6px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          />
        </div>

        <h2 className="text-4xl md:text-5xl font-light text-[#1D3557] mb-4">
          Seu <span className="text-[#275C7A] font-medium">espelho emocional</span>
        </h2>

        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-6 leading-relaxed font-light">
          Reflexos sensíveis para quem busca clareza. Registre memórias marcantes e acompanhe sua evolução emocional.
        </p>

        <p className="text-[#275C7A] text-base md:text-lg font-light mb-6">
          Faça parte do começo.
        </p>

        <a
          href={loginRegisterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block px-8 py-4
            rounded-2xl
            bg-white/40
            backdrop-blur-lg
            border border-white/20
            text-[#1D3557] font-medium text-lg
            transition-all duration-300
            shadow-[0_2px_6px_-2px_rgba(0,0,0,0.05)]
            hover:shadow-[0_4px_12px_-3px_rgba(0,0,0,0.08)]
            hover:scale-[1.03]
            mb-4
          "
        >
          Quero experimentar a Eco
        </a>

        <div className="text-[#275C7A] mt-2 text-sm font-light">
          Exclusivo para quem quer viver o primeiro capítulo.
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
