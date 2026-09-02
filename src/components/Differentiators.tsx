import { Award, UserCheck, Zap, Lock } from 'lucide-react';

export const Differentiators: React.FC = () => {
  const differentiators = [
    {
      icon: UserCheck,
      title: 'Atendimento Personalizado',
      description: 'Contato direto com o advogado responsável pelo caso, garantindo transparência e atenção dedicada.'
    },
    {
      icon: Award,
      title: 'Rigor Técnico',
      description: 'Análise aprofundada dos aspectos jurídicos e fáticos de cada demanda com precisão cirúrgica.'
    },
    {
      icon: Zap,
      title: 'Agilidade & Eficiência',
      description: 'Acompanhamento constante dos processos com foco em soluções célere e efetivas.'
    },
    {
      icon: Lock,
      title: 'Sigilo & Segurança',
      description: 'Absoluto respeito ao sigilo profissional e à proteção das informações do cliente.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100 border-b border-slate-300 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-[11px] font-cinzel font-medium tracking-[0.25em] uppercase text-[#C5A880]">
            Diferenciais de Atuação
          </span>
          <h2 className="text-3xl sm:text-4xl font-cinzel font-semibold text-[#2D3A45]">
            Por que escolher a LM Advocacia?
          </h2>
          <div className="w-16 h-[1px] bg-[#C5A880] mx-auto"></div>
        </div>

        {/* 4 Cards Grid - rounded-xl */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((diff) => {
            const IconComponent = diff.icon;
            return (
              <div 
                key={diff.title}
                className="bg-white p-6 border border-slate-300 rounded-xl hover:border-[#3D5061] transition-all flex flex-col justify-between shadow-xs group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-slate-100 border border-slate-200 rounded-xl flex items-center justify-center text-[#3D5061] group-hover:bg-[#3D5061] group-hover:text-white transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-cinzel font-semibold text-[#2D3A45] group-hover:text-[#3D5061] transition-colors">
                    {diff.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed font-light">
                    {diff.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
