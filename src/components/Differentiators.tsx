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
    <section className="py-12 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] border-b border-slate-300 relative">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-[10px] sm:text-[11px] font-cinzel font-semibold tracking-[0.25em] uppercase text-[#C8B195]">
            Diferenciais de Atuação
          </span>
          <h2 className="text-2xl sm:text-4xl font-cinzel font-semibold text-[#3F5060]">
            Por que escolher a LM Advocacia?
          </h2>
          <div className="w-12 sm:w-16 h-[1.5px] bg-[#C8B195] mx-auto"></div>
        </div>

        {/* 4 Cards Grid - Square Cards with Gold Border */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {differentiators.map((diff) => {
            const IconComponent = diff.icon;
            return (
              <div 
                key={diff.title}
                className="bg-white p-5 sm:p-6 border-2 border-slate-200 hover:border-[#C8B195] rounded-xl transition-all flex flex-col justify-between shadow-xs group"
              >
                <div className="space-y-3.5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FAF8F5] border border-[#C8B195]/40 rounded-lg flex items-center justify-center text-[#3F5060] group-hover:bg-[#3F5060] group-hover:text-white transition-colors">
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-cinzel font-semibold text-[#3F5060] group-hover:text-[#C8B195] transition-colors">
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

