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
    <section id="escritorio" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-100 border-t border-b border-slate-300 relative">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-[11px] font-cinzel font-medium tracking-[0.25em] uppercase text-[#C5A880]">
            O Escritório
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif-heading font-normal text-[#2D3A45] leading-snug">
            “Uma advocacia pautada por ética, estratégia e proximidade.”
          </h2>
          <div className="w-16 h-[1px] bg-[#C5A880] mx-auto"></div>
        </div>

        {/* Institutional Profile - rounded-2xl */}
        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 border border-slate-300 rounded-2xl relative shadow-md overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#3D5061]"></div>
          
          <div className="space-y-6">
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-cinzel font-semibold text-[#2D3A45]">
                Lucas Manoel Alves Garcia
              </h3>
              <p className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold">
                LM Advocacia e Consultoria Jurídica
              </p>
            </div>

            <p className="text-base text-[#475569] leading-relaxed font-light">
              A LM Advocacia e Consultoria Jurídica atua de forma estratégica e personalizada, buscando compreender cada situação em sua individualidade para oferecer orientação jurídica responsável e adequada às necessidades de cada cliente.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#64748B] font-medium border-t border-slate-200">
              <span className="px-3.5 py-1.5 bg-slate-100 rounded-full border border-slate-200 text-[#3D5061] font-semibold">Inscrição OAB/SP</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]"></span>
              <span className="px-3.5 py-1.5 bg-slate-100 rounded-full border border-slate-200 text-[#3D5061] font-semibold">Atendimento Nacional & Internacional</span>
            </div>
          </div>
        </div>

        {/* 4 Pillars - rounded-xl */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div 
              key={pillar.title}
              className="p-6 bg-white border border-slate-300 hover:border-[#3D5061] rounded-xl transition-all flex flex-col justify-between shadow-xs group"
            >
              <div className="space-y-3">
                <span className="text-xs font-mono text-[#C5A880] font-bold">
                  0{index + 1}
                </span>
                <h4 className="text-lg font-cinzel font-semibold text-[#2D3A45] tracking-wide">
                  {pillar.title}
                </h4>
                <p className="text-xs text-[#64748B] leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
              <div className="w-8 h-[2px] bg-slate-200 rounded-full mt-6 group-hover:bg-[#C5A880] transition-colors"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};



