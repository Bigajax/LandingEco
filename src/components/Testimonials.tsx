import React from 'react';
const Testimonials: React.FC = () => {
  const feedbackUrl = "https://feedback-eco.vercel.app";

  return (
    <section id="feedback" className="py-24 px-6 bg-[#F8F6FA] text-center">
      <div className="max-w-2xl mx-auto">

        {/* Título com destaque sutil */}
        <h2 className="text-[2.4rem] md:text-5xl font-light text-[#1D3557] mb-4 leading-tight">
          Queremos <span className="text-[#275C7A] font-medium">ouvir você</span>
        </h2>

        {/* Subtítulo minimalista */}
        <p className="text-base md:text-lg text-gray-600 font-light mb-8 leading-relaxed">
          Ajude a Eco a evoluir. Compartilhe sua experiência com segurança e honestidade.
        </p>

        {/* Seta suave */}
        <div className="mb-6 opacity-80">
          <svg className="w-6 h-6 text-[#275C7A] mx-auto animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        {/* Botão glass */}
        <a
          href={feedbackUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            px-8 py-3
            rounded-xl
            bg-white/30
            backdrop-blur-lg
            border border-white/20
            text-[#1D3557] font-medium text-lg
            shadow-[0_2px_6px_-2px_rgba(0,0,0,0.05)]
            hover:shadow-[0_4px_12px_-3px_rgba(0,0,0,0.08)]
            transition-all duration-300
            hover:scale-[1.03]
          "
        >
          Enviar Feedback
        </a>
      </div>
    </section>
  );
};

export default Testimonials;
