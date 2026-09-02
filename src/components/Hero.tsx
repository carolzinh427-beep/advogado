import { MessageSquare, ShieldCheck, Scale, Users, Briefcase, Shield, Building2, ShoppingBag } from 'lucide-react';
import { Logo } from './Logo';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-28 pb-0 bg-[#FAF8F5] text-[#2E3A46] overflow-hidden border-b border-slate-300">
      
      {/* Top Main Hero Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Brand, Monogram, Title, Tagline */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Big Centered Monogram & Brand Representation */}
            <div className="flex flex-col items-center lg:items-start space-y-4">
              <Logo size="lg" variant="dark" />
              
              {/* Slogan with Gold Accents - Exactly as image: ── SOLUÇÕES JURÍDICAS, RESULTADOS REAIS. ── */}
              <div className="flex items-center gap-3 pt-4 max-w-md w-full justify-center lg:justify-start">
                <span className="h-[1.5px] w-12 bg-[#C8B195]"></span>
                <p className="text-xs sm:text-sm font-cinzel font-bold text-[#3F5060] tracking-[0.15em] uppercase">
                  SOLUÇÕES JURÍDICAS, RESULTADOS REAIS.
                </p>
                <span className="h-[1.5px] w-12 bg-[#C8B195]"></span>
              </div>
            </div>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-base text-[#4A5866] leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
              Atuação jurídica dedicada à análise individualizada de cada caso, oferecendo rigor técnico, transparência e soluções estratégicas com atendimento humanizado.
            </p>

            {/* Call to Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="https://wa.me/5511919580341"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-white bg-[#3F5060] hover:bg-[#2E3A46] border border-[#3F5060] rounded-xl transition-all shadow-md group"
                id="hero-whatsapp-btn"
              >
                <MessageSquare className="w-4 h-4 text-[#C8B195] group-hover:scale-110 transition-transform" />
                <span>Falar pelo WhatsApp</span>
              </a>

              <a
                href="#areas"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#areas')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#3F5060] bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-all shadow-xs"
              >
                <span>Conheça nossa atuação</span>
              </a>
            </div>

          </div>

          {/* Right Column: Dark Slate Feature Badge (Matching right block from banner) */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#3F5060] text-white p-8 sm:p-10 rounded-3xl border-2 border-[#C8B195] shadow-2xl space-y-6 relative overflow-hidden">
              
              {/* Background Glow Ornament */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-[#C8B195]/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="border-b border-slate-500/40 pb-4">
                <span className="text-[10px] font-cinzel tracking-[0.25em] uppercase text-[#C8B195] font-semibold">
                  Compromisso Profissional
                </span>
                <h3 className="text-xl font-cinzel font-semibold text-white mt-1">
                  Pilares de Atuação
                </h3>
              </div>

              {/* 3 Pillars matching image badge */}
              <div className="space-y-5">
                
                {/* Pillar 1 */}
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-[#2E3A46] border border-[#C8B195]/60 rounded-full text-[#C8B195] shrink-0">
                    <Scale className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-cinzel font-bold text-white uppercase tracking-wider">
                      ÉTICA E TRANSPARÊNCIA
                    </h4>
                    <p className="text-[11px] text-slate-200 font-light mt-0.5">
                      Respeito às regras morais e clareza em todas as fases da condução jurídica.
                    </p>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-[#2E3A46] border border-[#C8B195]/60 rounded-full text-[#C8B195] shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-cinzel font-bold text-white uppercase tracking-wider">
                      COMPROMISSO E DEDICAÇÃO
                    </h4>
                    <p className="text-[11px] text-slate-200 font-light mt-0.5">
                      Análise criteriosa e defesa técnica proativa dos direitos de nossos clientes.
                    </p>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-[#2E3A46] border border-[#C8B195]/60 rounded-full text-[#C8B195] shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-cinzel font-bold text-white uppercase tracking-wider">
                      ATENDIMENTO PERSONALIZADO
                    </h4>
                    <p className="text-[11px] text-slate-200 font-light mt-0.5">
                      Proximidade e contato direto com o advogado responsável pelo seu caso.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Horizontal Practice Area Bar (Matching bottom strip from banner image) */}
      <div className="bg-[#3F5060] border-t-2 border-[#C8B195] text-white py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* 4 Practice Areas Items */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 w-full lg:w-auto">
            
            <div className="flex items-center gap-2.5">
              <Users className="w-4 h-4 text-[#C8B195] shrink-0" />
              <span className="text-[11px] sm:text-xs font-cinzel font-semibold tracking-wider uppercase text-white">
                DIREITO TRABALHISTA
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <Shield className="w-4 h-4 text-[#C8B195] shrink-0" />
              <span className="text-[11px] sm:text-xs font-cinzel font-semibold tracking-wider uppercase text-white">
                DIREITO PREVIDENCIÁRIO
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <Building2 className="w-4 h-4 text-[#C8B195] shrink-0" />
              <span className="text-[11px] sm:text-xs font-cinzel font-semibold tracking-wider uppercase text-white">
                DIREITO CÍVEL
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-4 h-4 text-[#C8B195] shrink-0" />
              <span className="text-[11px] sm:text-xs font-cinzel font-semibold tracking-wider uppercase text-white">
                DIREITO CONSUMERISTA
              </span>
            </div>

          </div>

          {/* Right Statement */}
          <div className="hidden lg:block text-right border-l border-slate-500/50 pl-6">
            <p className="text-xs font-cinzel italic text-slate-100 font-light max-w-xs">
              “Atuação estratégica para proteger seus direitos e impulsionar seus objetivos.”
            </p>
          </div>

        </div>
      </div>

    </section>
  );
};




