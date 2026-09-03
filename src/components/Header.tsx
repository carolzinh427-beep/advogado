import { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { MessageSquare, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'O Escritório', href: '#escritorio' },
    { name: 'Áreas de Atuação', href: '#areas' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      if (href === '#inicio') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        return;
      }
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#FAF8F5]/95 backdrop-blur-md ${
        isScrolled ? 'border-b border-slate-300/60 shadow-sm py-2.5 sm:py-3' : 'border-b border-slate-200/40 py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} className="focus:outline-none rounded-xl">
            <Logo variant="dark" size="md" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7" aria-label="Navegação Principal">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs uppercase tracking-widest text-[#3F5060] hover:text-[#C8B195] font-semibold transition-all relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C8B195] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button - Desktop */}
          <div className="hidden lg:flex items-center">
            <a
              href="https://wa.me/5511919580341"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#2E3A46] bg-[#C8B195] hover:bg-[#B89F82] border border-[#C8B195] rounded-xl transition-all shadow-xs group"
              id="header-whatsapp-btn"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#2E3A46] group-hover:scale-110 transition-transform" />
              <span>Falar pelo WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#3F5060] hover:text-[#C8B195] focus:outline-none rounded-xl"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-300 bg-[#FAF8F5] px-4 pt-4 pb-6 space-y-4 rounded-b-2xl shadow-xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-semibold uppercase tracking-wider text-[#3F5060] py-2 border-b border-slate-200"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href="https://wa.me/5511919580341"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#2E3A46] bg-[#C8B195] hover:bg-[#B89F82] border border-[#C8B195] rounded-xl shadow-md"
            >
              <MessageSquare className="w-4 h-4 text-[#2E3A46]" />
              <span>Falar pelo WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};





