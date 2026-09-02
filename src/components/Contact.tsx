import { MessageSquare, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Av. Pres. Humberto de Alencar Castelo Branco, 3297, Vila Leonor, Guarulhos - SP, 07024-170'
  )}`;

  return (
    <section id="contato" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#3D5061] text-white border-t border-b border-slate-400/30 relative">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-[11px] font-cinzel font-medium tracking-[0.25em] uppercase text-[#C5A880]">
            Atendimento Institucional
          </span>
          <h2 className="text-3xl sm:text-4xl font-cinzel font-semibold text-white leading-snug">
            Entre em contato com a LM Advocacia e Consultoria Jurídica.
          </h2>
          <p className="text-sm text-slate-100 font-light max-w-xl mx-auto">
            Estamos à disposição para avaliar suas demandas com responsabilidade e sigilo profissional.
          </p>
          <div className="w-16 h-[1px] bg-[#C5A880] mx-auto"></div>
        </div>

        {/* Main Content Box - rounded-2xl */}
        <div className="max-w-4xl mx-auto bg-[#485C6E]/90 backdrop-blur-xs border border-slate-300/30 rounded-2xl p-8 sm:p-12 shadow-xl grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Left Column: Contact Cards */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-cinzel font-semibold text-white">
                Lucas Manoel Alves Garcia
              </h3>
              <p className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold mt-1">
                LM Advocacia e Consultoria Jurídica
              </p>
            </div>

            <div className="space-y-6">
              {/* Phone / WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#334453] border border-slate-400/40 rounded-xl text-[#C5A880]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-slate-200 font-medium">
                    Telefone & WhatsApp
                  </span>
                  <a 
                    href="https://wa.me/5511919580341" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white hover:text-[#C5A880] transition-colors"
                  >
                    (11) 91958-0341
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#334453] border border-slate-400/40 rounded-xl text-[#C5A880]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-slate-200 font-medium">
                    E-mail Institucional
                  </span>
                  <a 
                    href="mailto:lucasmanoel.ag@adv.oabsp.org.br" 
                    className="text-sm font-medium text-slate-100 hover:text-[#C5A880] transition-colors break-all"
                  >
                    lucasmanoel.ag@adv.oabsp.org.br
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#334453] border border-slate-400/40 rounded-xl text-[#C5A880]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-slate-200 font-medium">
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

          {/* Right Column: Interactive Buttons & Direct Actions (rounded-xl) */}
          <div className="bg-[#334453] p-6 sm:p-8 border border-slate-400/40 rounded-xl flex flex-col justify-between space-y-6 shadow-inner">
            <div className="space-y-4">
              <h4 className="text-base font-cinzel font-semibold text-white">
                Atendimento Personalizado
              </h4>
              <p className="text-xs text-slate-100 leading-relaxed font-light">
                Agende um horário ou envie a sua dúvida diretamente para a equipe jurídica através do WhatsApp ou e-mail.
              </p>
            </div>

            {/* Action Buttons - Gray buttons rounded-xl */}
            <div className="space-y-3 pt-4 border-t border-slate-400/40">
              <a
                href="https://wa.me/5511919580341"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-white bg-slate-700 hover:bg-slate-800 border border-slate-500 rounded-xl transition-all shadow-md group"
                id="contact-whatsapp-btn"
              >
                <MessageSquare className="w-4 h-4 text-[#C5A880] group-hover:scale-110 transition-transform" />
                <span>Falar pelo WhatsApp</span>
              </a>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-slate-100 bg-slate-800/60 hover:bg-slate-800 border border-slate-500/60 rounded-xl transition-all"
                id="contact-maps-btn"
              >
                <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
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



