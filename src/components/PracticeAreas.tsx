import { Briefcase, ShieldCheck, Scale, ShoppingBag, ArrowRight } from 'lucide-react';

export const PracticeAreas: React.FC = () => {
  const practiceAreas = [
    {
      id: 'trabalhista',
      title: 'DIREITO TRABALHISTA',
      icon: Briefcase,
      description: 'Orientação e atuação em questões relacionadas às relações de trabalho, direitos e obrigações decorrentes da relação entre empregados e empregadores.'
    },
    {
      id: 'previdenciario',
      title: 'DIREITO PREVIDENCIÁRIO',
      icon: ShieldCheck,
      description: 'Orientação jurídica relacionada a benefícios previdenciários e questões envolvendo a Previdência Social.'
    },
    {
      id: 'civil',
      title: 'DIREITO CIVIL',
      icon: Scale,
      description: 'Atuação em questões jurídicas relacionadas às relações civis, contratos, obrigações, responsabilidade civil e demais demandas da área.'
    },
    {
      id: 'consumerista',
      title: 'DIREITO CONSUMERISTA',
      icon: ShoppingBag,
      description: 'Atuação em questões envolvendo relações de consumo, direitos do consumidor e conflitos entre consumidores e fornecedores.'
    }
  ];

  return (
    <section id="areas" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#3D5061] text-white border-t border-b border-slate-400/30 relative">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-[11px] font-cinzel font-medium tracking-[0.25em] uppercase text-[#C5A880]">
            Especialidades Jurídicas
          </span>
          <h2 className="text-3xl sm:text-4xl font-cinzel font-semibold text-white tracking-wide">
            Áreas de Atuação
          </h2>
          <p className="text-sm text-slate-100 font-light max-w-xl mx-auto">
            Atendimento estratégico e individualizado voltado para a análise rigorosa de cada caso.
          </p>
          <div className="w-16 h-[1px] bg-[#C5A880] mx-auto"></div>
        </div>

        {/* Practice Cards Grid - rounded-2xl */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {practiceAreas.map((area) => {
            const IconComponent = area.icon;
            return (
              <div 
                key={area.id}
                className="bg-[#485C6E]/90 backdrop-blur-xs p-8 border border-slate-300/30 rounded-2xl hover:border-[#C5A880] transition-all flex flex-col justify-between group shadow-lg"
              >
                <div className="space-y-6">
                  {/* Top Header inside Card */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-[#334453] border border-slate-400/40 rounded-xl text-[#C5A880] group-hover:bg-slate-700 group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <span className="w-8 h-[2px] bg-[#C5A880]/70 rounded-full"></span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-cinzel font-semibold text-white tracking-wider">
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-100 leading-relaxed font-light">
                    “{area.description}”
                  </p>
                </div>

                {/* Footer Action inside Card - Gray Button rounded-xl */}
                <div className="pt-8 mt-6 border-t border-slate-400/30 flex items-center justify-between">
                  <a
                    href="https://wa.me/5511919580341"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-slate-700 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-all border border-slate-500 shadow-xs"
                  >
                    <span>Consultar sobre {area.title.split(' ')[1].toLowerCase()}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};



