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

  const navItems = [
    { name: 'Como funciona', href: '#como-funciona' },
    { name: 'Recursos', href: '#recursos' },
    { name: 'Privacidade', href: '#privacidade' },
    { name: 'Feedback', href: '#feedback' },
  ];

  // URL para o botão de login/cadastro
  const loginRegisterUrl = "https://eco666.vercel.app";

  // Função para scroll suave
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

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
          <span className={`text-2xl font-light transition-colors duration-300 ${
            isScrolled ? 'text-[#1D3557]' : 'text-gray-800'
          }`}>
            ECO
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                if (item.href.startsWith('#')) {
                  handleSmoothScroll(e, item.href.substring(1));
                }
              }}
              className={`font-light text-sm hover:opacity-75 transition-opacity ${
                isScrolled ? 'text-[#1D3557]' : 'text-gray-700'
              }`}
            >
              {item.name}
            </a>
          ))}
          <a
            href={loginRegisterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-xl bg-white text-gray-800 font-medium text-sm transition-transform hover:scale-105
              shadow-sm hover:shadow-md shadow-gray-300/50 hover:shadow-gray-400/50"
          >
            Entrar / Cadastrar
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen
            ? <X className={isScrolled ? 'text-[#1D3557]' : 'text-gray-700'} />
            : <Menu className={isScrolled ? 'text-[#1D3557]' : 'text-gray-700'} />
          }
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-20 px-6 flex flex-col md:hidden">
          <nav className="flex flex-col space-y-6 py-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith('#')) {
                    handleSmoothScroll(e, item.href.substring(1));
                  }
                }}
                className="text-[#1D3557] text-xl font-light"
              >
                {item.name}
              </a>
            ))}
          </nav>
          <a
            href={loginRegisterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto mb-10 py-4 rounded-xl bg-white text-gray-800 font-medium transition-all hover:scale-105 duration-300
              shadow-sm hover:shadow-md shadow-gray-300/50 hover:shadow-gray-400/50"
            onClick={() => setIsMenuOpen(false)}
          >
            Entrar / Cadastrar
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
