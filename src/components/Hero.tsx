import { MessageSquare, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScrollToAreas = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#areas');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-[#3D5061] text-white overflow-hidden border-b border-slate-400/30">
      {/* Subtle Geometric Framing Lines */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-6 sm:px-16 opacity-15">
        <div className="w-[1px] h-3/4 bg-slate-200"></div>
        <div className="w-[1px] h-3/4 bg-slate-200"></div>
      </div>

      {/* Discrete Soft Corner Accents */}
      <div className="absolute top-36 left-8 sm:left-16 w-8 h-8 border-t-2 border-l-2 border-[#C5A880]/60 rounded-tl-lg pointer-events-none"></div>
      <div className="absolute top-36 right-8 sm:right-16 w-8 h-8 border-t-2 border-r-2 border-[#C5A880]/60 rounded-tr-lg pointer-events-none"></div>
      <div className="absolute bottom-16 left-8 sm:left-16 w-8 h-8 border-b-2 border-l-2 border-[#C5A880]/60 rounded-bl-lg pointer-events-none"></div>
      <div className="absolute bottom-16 right-8 sm:right-16 w-8 h-8 border-b-2 border-r-2 border-[#C5A880]/60 rounded-br-lg pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto text-center space-y-8 z-10">
        {/* Subtle Tag / Institutional Badge (rounded-full) */}
        <div className="inline-flex items-center gap-3 px-6 py-2 border border-slate-300/40 bg-slate-800/40 backdrop-blur-xs text-[11px] font-cinzel font-medium tracking-[0.25em] uppercase text-[#C5A880] rounded-full shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#C5A880]"></span>
          <span>Lucas Manoel Alves Garcia</span>
        </div>

        {/* Main Title - Cinzel Font */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-cinzel font-semibold text-white tracking-[0.08em] leading-[1.2]">
            LUCAS MANOEL ALVES GARCIA
          </h1>

          {/* Gold Decorative Line with Diamond Ornament (Matching Logo Image) */}
          <div className="flex items-center justify-center gap-3 py-2 max-w-lg mx-auto">
            <div className="h-[1px] flex-grow bg-[#C5A880]/70"></div>
            <div className="w-2 h-2 rotate-45 bg-[#C5A880]"></div>
            <div className="h-[1px] flex-grow bg-[#C5A880]/70"></div>
          </div>

          <h2 className="text-xs sm:text-sm font-medium uppercase tracking-[0.3em] text-slate-100 font-sans">
            Advocacia e Consultoria Jurídica
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl font-cinzel italic text-[#C5A880] tracking-wide pt-2">
            “Compromisso com uma advocacia ética, estratégica e personalizada.”
          </p>
        </div>

        {/* Complementary Description */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-100 leading-relaxed font-light">
          Atuação jurídica dedicada à análise individualizada de cada caso, com rigor técnico, responsabilidade e atendimento próximo.
        </p>

        {/* CTA Buttons - Gray buttons, rounded-xl */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/5511919580341"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white bg-slate-700 hover:bg-slate-800 border border-slate-500 rounded-xl transition-all shadow-md group"
            id="hero-whatsapp-btn"
          >
            <MessageSquare className="w-4 h-4 text-[#C5A880] group-hover:scale-110 transition-transform" />
            <span>Falar pelo WhatsApp</span>
          </a>

          <a
            href="#areas"
            onClick={handleScrollToAreas}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-slate-100 bg-slate-800/50 hover:bg-slate-800 border border-slate-400/50 rounded-xl transition-all"
          >
            <span>Conheça nossa atuação</span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-10 flex justify-center">
          <a
            href="#escritorio"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#escritorio')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-slate-200 hover:text-white transition-all flex flex-col items-center gap-1 group"
            aria-label="Rolar para baixo"
          >
            <span className="text-[10px] uppercase tracking-widest font-light">Saiba Mais</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#C5A880]" />
          </a>
        </div>
      </div>
    </section>
  );
};



