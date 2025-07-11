import React, { useEffect } from 'react'; 
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ExploreSection from './components/ExploreSection';
import DeepBenefitsSection from './components/DeepBenefitsSection';  // ✅ Importado ANTES
import FeaturesSection from './components/FeaturesSection';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = "ECO - Converse com seu Eu interior";

    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes orb-float {
        0%, 100% {
          transform: translateY(-10%) scale(0.95);
          opacity: 0.5;
        }
        50% {
          transform: translateY(10%) scale(1.05);
          opacity: 0.7;
        }
      }
      .animate-orb-float {
        animation: orb-float 8s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <HowItWorks />
      <ExploreSection />
      <DeepBenefitsSection />     {/* ✅ AGORA ANTES do FeaturesSection */}
      <FeaturesSection />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
