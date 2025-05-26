import React from 'react'; // Apenas React é necessário, sem useState e useEffect para esta versão

const Testimonials: React.FC = () => {
  // Defina a URL para onde o botão de feedback deve direcionar
  const feedbackUrl = "https://feedback-eco.vercel.app"; // <<-- LINK ATUALIZADO AQUI

  return (
    <section id="feedback" className="py-24 px-6 bg-white text-center"> {/* Adicionei o id="feedback" aqui para a navegação do Header */}
      <div className="container mx-auto max-w-2xl">

        {/* CONTEÚDO DE FEEDBACK */}
        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
          Queremos ouvir você!
        </h2>
        <p className="text-lg md:text-xl font-light text-gray-700 mb-6"> {/* Espaçamento ajustado */}
          Ajude a tornar a ECO ainda melhor.
          <br />
          Clique no botão abaixo e deixe sua avaliação sincera.
        </p>

        {/* SETA ACIMA DO BOTÃO */}
        <div className="mb-4"> {/* Margem inferior para espaçar a seta do botão */}
          <svg className="w-6 h-6 text-black mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>

        {/* BOTÃO "Deixar meu feedback" com o estilo Apple-like - AGORA COMO UM LINK */}
        <a
          href={feedbackUrl}
          target="_blank" // Abre o link em uma nova aba
          rel="noopener noreferrer" // Recomendado por segurança para target="_blank"
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