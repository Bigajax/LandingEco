import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "ECO me ajudou a processar emoções que eu nem sabia que estava reprimindo. É como ter um terapeuta sempre disponível.",
    author: "Marina S.",
    role: "Psicóloga",
  },
  {
    quote: "Diferente de qualquer assistente virtual que já usei. A ECO realmente parece entender o que estou sentindo.",
    author: "Carlos M.",
    role: "Engenheiro de Software",
  },
  {
    quote: "Meu diário emocional nunca foi tão profundo. A ECO me faz refletir de maneiras que eu jamais conseguiria sozinha.",
    author: "Juliana P.",
    role: "Artista Visual",
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="relative">
          <div className="absolute -left-4 -top-4 w-16 h-16 text-[#7A9EBF] opacity-30">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          
          <div className="relative z-10 overflow-hidden h-64">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`absolute inset-0 transition-opacity duration-1000 flex flex-col items-center justify-center text-center px-4 ${
                  index === activeIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <p className="text-xl md:text-2xl text-gray-700 font-light italic mb-8">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="text-[#1D3557] font-medium">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-[#7A9EBF] w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;