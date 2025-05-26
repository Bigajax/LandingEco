import React from 'react';

const CallToAction: React.FC = () => {
  const loginRegisterUrl = "https://eco666.vercel.app"; // URL para o botão de login/cadastro

  return (
    <section className="py-24 px-6 bg-[#F8F6FA] text-center relative overflow-hidden"> {/* Fundo alterado para a cor da tela inicial */}
      {/* Background effects - Ajustados para a nova cor de fundo */}
      <div className="absolute inset-0 opacity-20">
        {/* As "bolhas" de fundo podem precisar de ajustes de cor para ficarem sutis no fundo claro */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-[#E0BBE4] blur-3xl opacity-50"></div> {/* Cor ajustada */}
        <div className="absolute bottom-1/3 right-1/3 w-60 h-60 rounded-full bg-[#957DAD] blur-3xl opacity-50"></div> {/* Cor ajustada */}
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6"> {/* Cor do texto ajustada para escuro */}
          Comece sua jornada de <span className="font-normal">autoconhecimento</span>
        </h2>

        <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto mb-12"> {/* Cor do texto ajustada para escuro */}
          Junte-se à nossa versão beta e seja um dos primeiros a experimentar
          essa nova forma de conectar-se com suas emoções.
        </p>

        {/* Botão "Entrar / Cadastrar" com o estilo Apple-like - AGORA COMO UM LINK */}
        <a
          href={loginRegisterUrl} // Direciona para o link
          target="_blank" // Abre em uma nova aba
          rel="noopener noreferrer" // Recomendado por segurança
          className="inline-block px-8 py-4 rounded-xl bg-white text-gray-800 font-medium text-lg transition-all hover:scale-105 duration-300
                     shadow-sm hover:shadow-md shadow-gray-300/50 hover:shadow-gray-400/50 mb-6" // Estilo Apple-like aplicado e mb-6 para espaçamento
        >
          Entrar / Cadastrar
        </a>

        {/* Texto "Vagas limitadas para a fase beta" com cor verde */}
        <div className="text-green-600 mt-8 text-sm font-medium"> {/* Alterado para text-green-600 e adicionei font-medium */}
          Vagas limitadas para a fase beta
        </div>
      </div>
    </section>
  );
};

export default CallToAction;