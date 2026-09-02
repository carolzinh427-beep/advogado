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
      title: 'DIREITO CÍVEL',
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
    <section id="areas" className="py-12 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#3F5060] text-white border-t border-b border-slate-400/30 relative">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-16">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4">
          <span className="text-[10px] sm:text-[11px] font-cinzel font-semibold tracking-[0.25em] uppercase text-[#C8B195]">
            Especialidades Jurídicas
          </span>
          <h2 className="text-2xl sm:text-4xl font-cinzel font-semibold text-white tracking-wide">
            Áreas de Atuação
          </h2>
          <p className="text-xs sm:text-sm text-slate-100 font-light max-w-xl mx-auto">
            Atendimento estratégico e individualizado voltado para a análise rigorosa de cada caso.
          </p>
          <div className="w-12 sm:w-16 h-[1.5px] bg-[#C8B195] mx-auto"></div>
        </div>

        {/* Practice Cards Grid - Square Cards with Gold Stroke */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {practiceAreas.map((area) => {
            const IconComponent = area.icon;
            return (
              <div 
                key={area.id}
                className="bg-[#2E3A46]/95 backdrop-blur-xs p-6 sm:p-8 border-2 border-[#C8B195]/40 rounded-xl sm:rounded-2xl hover:border-[#C8B195] transition-all flex flex-col justify-between group shadow-lg"
              >
                <div className="space-y-4 sm:space-y-6">
                  {/* Top Header inside Card */}
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 sm:p-3 bg-[#3F5060] border border-[#C8B195]/60 rounded-lg text-[#C8B195] group-hover:bg-[#C8B195] group-hover:text-[#2E3A46] transition-colors">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.5]" />
                    </div>
                    <span className="w-8 h-[2px] bg-[#C8B195] rounded-full"></span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-cinzel font-semibold text-white tracking-wider">
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
                    “{area.description}”
                  </p>
                </div>

                {/* Footer Action inside Card */}
                <div className="pt-6 mt-4 sm:mt-6 border-t border-slate-500/40 flex items-center justify-between">
                  <a
                    href="https://wa.me/5511919580341"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#C8B195] hover:bg-[#B89F82] text-[#2E3A46] rounded-lg text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all border border-[#C8B195] shadow-xs group"
                  >
                    <span>Consultar sobre {area.title.split(' ')[1].toLowerCase()}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#2E3A46] group-hover:translate-x-1 transition-transform" />
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





