import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="bg-[#334453] text-white pt-16 pb-12 border-t border-slate-400/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-400/30">
          
          {/* Col 1: Brand */}
          <div className="md:col-span-2 space-y-4">
            <Logo variant="light" size="md" />
            <p className="text-xs text-slate-100 font-light max-w-md leading-relaxed pt-2">
              Compromisso com uma advocacia ética, estratégica e personalizada. Atuação focada no atendimento rigoroso e de excelência.
            </p>
            <div className="pt-2 text-xs text-[#C5A880] font-cinzel font-semibold tracking-wide">
              Lucas Manoel Alves Garcia — Advogado
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-cinzel font-semibold uppercase tracking-widest text-[#C5A880]">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-slate-200 font-light">
              <li>
                <a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#escritorio" onClick={(e) => handleNavClick(e, '#escritorio')} className="hover:text-white transition-colors">
                  O Escritório
                </a>
              </li>
              <li>
                <a href="#areas" onClick={(e) => handleNavClick(e, '#areas')} className="hover:text-white transition-colors">
                  Áreas de Atuação
                </a>
              </li>
              <li>
                <a href="#como-funciona" onClick={(e) => handleNavClick(e, '#como-funciona')} className="hover:text-white transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleNavClick(e, '#faq')} className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contato" onClick={(e) => handleNavClick(e, '#contato')} className="hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-cinzel font-semibold uppercase tracking-widest text-[#C5A880]">
              Contato
            </h4>
            <div className="space-y-2 text-xs text-slate-200 font-light">
              <p>(11) 91958-0341</p>
              <p className="break-all">lucasmanoel.ag@adv.oabsp.org.br</p>
              <p className="text-[11px] leading-relaxed pt-1">
                Av. Pres. Humberto de Alencar Castelo Branco, 3297 - Vila Leonor<br />
                Guarulhos - SP, 07024-170
              </p>
            </div>
          </div>

        </div>

        {/* Mandatory Institutional Disclaimer - rounded-xl */}
        <div className="bg-[#293745] p-4 sm:p-6 border border-slate-400/40 rounded-xl text-center max-w-4xl mx-auto shadow-inner">
          <p className="text-[11px] text-slate-200 leading-relaxed font-light italic">
            “As informações apresentadas neste site possuem caráter institucional e informativo e não substituem uma consulta jurídica individualizada.”
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-300 font-light">
          <p>© {currentYear} LM Advocacia e Consultoria Jurídica. Todos os direitos reservados.</p>
          <p className="tracking-widest font-cinzel font-medium">Lucas Manoel Alves Garcia</p>
        </div>

      </div>
    </footer>
  );
};


