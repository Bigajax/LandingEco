import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#7A9EBF] to-[#F7CAC9] mr-3 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#7A9EBF] to-[#F7CAC9]"></div>
            </div>
          </div>
          <span className={`text-2xl font-light transition-colors duration-300 ${
            isScrolled ? 'text-[#1D3557]' : 'text-white'
          }`}>
            ECO
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Como funciona', 'Privacidade', 'Sobre', 'Contato'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className={`font-light text-sm hover:opacity-75 transition-opacity ${
                isScrolled ? 'text-[#1D3557]' : 'text-white'
              }`}
            >
              {item}
            </a>
          ))}
          <button className="px-5 py-2 rounded-full bg-gradient-to-r from-[#7A9EBF] to-[#F7CAC9] text-white font-medium text-sm transition-transform hover:scale-105">
            Entrar / Cadastrar
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen 
            ? <X className={isScrolled ? 'text-[#1D3557]' : 'text-white'} /> 
            : <Menu className={isScrolled ? 'text-[#1D3557]' : 'text-white'} />
          }
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-20 px-6 flex flex-col md:hidden">
          <nav className="flex flex-col space-y-6 py-8">
            {['Como funciona', 'Privacidade', 'Sobre', 'Contato'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-[#1D3557] text-xl font-light"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
          <button 
            className="mt-auto mb-10 py-4 rounded-full bg-gradient-to-r from-[#7A9EBF] to-[#F7CAC9] text-white font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Entrar / Cadastrar
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;