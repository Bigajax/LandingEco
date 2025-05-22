import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-[#1D3557] to-[#2A4365] text-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-[#F7CAC9] blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-60 h-60 rounded-full bg-[#7A9EBF] blur-3xl"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
          Comece sua jornada de <span className="font-normal">autoconhecimento</span>
        </h2>
        
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12">
          Junte-se à nossa versão beta e seja um dos primeiros a experimentar
          essa nova forma de conectar-se com suas emoções.
        </p>
        
        <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#7A9EBF] to-[#F7CAC9] text-white font-medium text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#7A9EBF]/20 duration-300">
          Entrar / Cadastrar
        </button>
        
        <div className="text-white/50 mt-8 text-sm">
          Vagas limitadas para a fase beta
        </div>
      </div>
    </section>
  );
};

export default CallToAction;