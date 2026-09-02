export const About: React.FC = () => {
  const pillars = [
    {
      title: 'Ética',
      description: 'Atuação pautada pelo respeito aos valores éticos, integridade profissional e absoluta transparência com o cliente.'
    },
    {
      title: 'Estratégia',
      description: 'Estudo criterioso de cada demanda jurídica para o delineamento das soluções técnicas mais adequadas.'
    },
    {
      title: 'Personalização',
      description: 'Análise individualizada de cada situação, compreendendo as particularidades e objetivos de cada cliente.'
    },
    {
      title: 'Responsabilidade',
      description: 'Compromisso com o rigor jurídico, pontualidade no acompanhamento e segurança no atendimento.'
    }
  ];

  return (
    <section id="escritorio" className="py-12 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] border-t border-b border-slate-300 relative">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4">
          <span className="text-[10px] sm:text-[11px] font-cinzel font-semibold tracking-[0.25em] uppercase text-[#C8B195]">
            O Escritório
          </span>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-cinzel font-semibold text-[#3F5060] leading-snug">
            “Uma advocacia pautada por ética, estratégia e proximidade.”
          </h2>
          <div className="w-12 sm:w-16 h-[1.5px] bg-[#C8B195] mx-auto"></div>
        </div>

        {/* Institutional Profile - Square Box with Gold Accent Line */}
        <div className="max-w-4xl mx-auto bg-white p-6 sm:p-10 border-2 border-[#C8B195]/40 rounded-xl sm:rounded-2xl relative shadow-md overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#3F5060]"></div>
          
          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-1">
              <h3 className="text-lg sm:text-2xl font-cinzel font-semibold text-[#3F5060]">
                Lucas Manoel Alves Garcia
              </h3>
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#C8B195] font-semibold">
                LM Advocacia e Consultoria Jurídica
              </p>
            </div>

            <p className="text-xs sm:text-base text-[#4A5866] leading-relaxed font-light">
              A LM Advocacia e Consultoria Jurídica atua de forma estratégica e personalizada, buscando compreender cada situação em sua individualidade para oferecer orientação jurídica responsável e adequada às necessidades de cada cliente.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4 text-[11px] sm:text-xs text-[#64748B] font-medium border-t border-slate-200">
              <span className="px-3 py-1 bg-[#FAF8F5] rounded-lg border border-[#C8B195]/40 text-[#3F5060] font-semibold">Inscrição OAB/SP</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8B195]"></span>
              <span className="px-3 py-1 bg-[#FAF8F5] rounded-lg border border-[#C8B195]/40 text-[#3F5060] font-semibold">Atendimento Nacional & Internacional</span>
            </div>
          </div>
        </div>

        {/* 4 Pillars - Square Cards with Gold Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((pillar, index) => (
            <div 
              key={pillar.title}
              className="p-5 sm:p-6 bg-white border-2 border-slate-200 hover:border-[#C8B195] rounded-xl transition-all flex flex-col justify-between shadow-xs group"
            >
              <div className="space-y-2.5">
                <span className="text-xs font-mono text-[#C8B195] font-bold">
                  0{index + 1}
                </span>
                <h4 className="text-base sm:text-lg font-cinzel font-semibold text-[#3F5060] tracking-wide">
                  {pillar.title}
                </h4>
                <p className="text-xs text-[#64748B] leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
              <div className="w-8 h-[2px] bg-slate-200 rounded-full mt-4 sm:mt-6 group-hover:bg-[#C8B195] transition-colors"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};





