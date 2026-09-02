import { MessageSquare, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Av. Pres. Humberto de Alencar Castelo Branco, 3297, Vila Leonor, Guarulhos - SP, 07024-170'
  )}`;

  return (
    <section id="contato" className="py-12 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#3F5060] text-white border-t border-b border-slate-400/30 relative">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4">
          <span className="text-[10px] sm:text-[11px] font-cinzel font-semibold tracking-[0.25em] uppercase text-[#C8B195]">
            Atendimento Institucional
          </span>
          <h2 className="text-2xl sm:text-4xl font-cinzel font-semibold text-white leading-snug">
            Entre em contato com a LM Advocacia e Consultoria Jurídica.
          </h2>
          <p className="text-xs sm:text-sm text-slate-100 font-light max-w-xl mx-auto">
            Estamos à disposição para avaliar suas demandas com responsabilidade e sigilo profissional.
          </p>
          <div className="w-12 sm:w-16 h-[1.5px] bg-[#C8B195] mx-auto"></div>
        </div>

        {/* Main Content Box - Square Card with Gold Border */}
        <div className="max-w-4xl mx-auto bg-[#2E3A46]/95 backdrop-blur-xs border-2 border-[#C8B195]/50 rounded-xl sm:rounded-2xl p-6 sm:p-10 shadow-xl grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
          
          {/* Left Column: Contact Cards */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-lg sm:text-xl font-cinzel font-semibold text-white">
                Lucas Manoel Alves Garcia
              </h3>
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#C8B195] font-semibold mt-0.5">
                LM Advocacia e Consultoria Jurídica
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {/* Phone / WhatsApp */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-[#3F5060] border border-[#C8B195]/60 rounded-lg text-[#C8B195] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-300 font-medium">
                    Telefone & WhatsApp
                  </span>
                  <a 
                    href="https://wa.me/5511919580341" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-semibold text-white hover:text-[#C8B195] transition-colors"
                  >
                    (11) 91958-0341
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-[#3F5060] border border-[#C8B195]/60 rounded-lg text-[#C8B195] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-300 font-medium">
                    E-mail Institucional
                  </span>
                  <a 
                    href="mailto:lucasmanoel.ag@adv.oabsp.org.br" 
                    className="text-xs sm:text-sm font-medium text-slate-100 hover:text-[#C8B195] transition-colors break-all"
                  >
                    lucasmanoel.ag@adv.oabsp.org.br
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-[#3F5060] border border-[#C8B195]/60 rounded-lg text-[#C8B195] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-300 font-medium">
                    Endereço
                  </span>
                  <address className="not-italic text-xs text-slate-100 leading-relaxed font-light mt-0.5">
                    Av. Pres. Humberto de Alencar Castelo Branco, 3297<br />
                    Vila Leonor, Guarulhos - SP<br />
                    07024-170, Brasil
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Buttons & Direct Actions */}
          <div className="bg-[#3F5060] p-5 sm:p-7 border border-[#C8B195]/40 rounded-xl flex flex-col justify-between space-y-4 sm:space-y-6 shadow-inner">
            <div className="space-y-3">
              <h4 className="text-sm sm:text-base font-cinzel font-semibold text-white">
                Atendimento Personalizado
              </h4>
              <p className="text-xs text-slate-100 leading-relaxed font-light">
                Agende um horário ou envie a sua dúvida diretamente para a equipe jurídica através do WhatsApp ou e-mail.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-3 border-t border-slate-400/40">
              <a
                href="https://wa.me/5511919580341"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#2E3A46] hover:bg-[#202932] border border-[#C8B195]/60 rounded-lg transition-all shadow-md group"
                id="contact-whatsapp-btn"
              >
                <MessageSquare className="w-4 h-4 text-[#C8B195] group-hover:scale-110 transition-transform" />
                <span>Falar pelo WhatsApp</span>
              </a>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-100 bg-[#3A4A58] hover:bg-[#2E3A46] border border-slate-400/50 rounded-lg transition-all"
                id="contact-maps-btn"
              >
                <MapPin className="w-3.5 h-3.5 text-[#C8B195]" />
                <span>Ver localização</span>
                <ExternalLink className="w-3 h-3 text-slate-300 ml-1" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};





