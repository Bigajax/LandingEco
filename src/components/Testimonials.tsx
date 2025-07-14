import React from 'react'; // Apenas React é necessário

const Testimonials: React.FC = () => {
  // Defina a URL para onde o botão de feedback deve direcionar
  const feedbackUrl = "https://feedback-eco.vercel.app"; // <<-- LINK ATUALIZADO AQUI

  return (
    <section id="feedback" className="py-24 px-6 bg-white text-center">
      <div className="container mx-auto max-w-2xl">

        {/* TÍTULO ATUALIZADO */}
        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
          Sua opinião importa!
        </h2>

        {/* SUBTÍTULO ATUALIZADO */}
        <p className="text-lg md:text-xl font-light text-gray-700 mb-6">
          Queremos evoluir junto com você.
          <br />
          Clique no botão abaixo e deixe sua avaliação sincera.
        </p>

        {/* SETA ACIMA DO BOTÃO */}
        <div className="mb-4">
          <svg className="w-6 h-6 text-black mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>

        {/* BOTÃO DE FEEDBACK */}
        <a
          href={feedbackUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 rounded-xl bg-white text-gray-800 font-medium text-lg transition-all hover:scale-105 duration-300
                     shadow-sm hover:shadow-md shadow-gray-300/50 hover:shadow-gray-400/50"
        >
          Deixar meu feedback
        </a>

      </div>
    </section>
  );
};

export default Testimonials;
