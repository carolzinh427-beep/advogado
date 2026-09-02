import { MessageSquare, FileSearch, Scale, CheckCircle2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Primeiro Contato',
      description: 'O cliente entra em contato para apresentar sua dúvida ou necessidade jurídica inicial via WhatsApp ou e-mail.',
      icon: MessageSquare
    },
    {
      step: '02',
      title: 'Análise da Demanda',
      description: 'Avaliação detalhada dos fatos, documentos e aspectos jurídicos envolvidos na situação apresentada.',
      icon: FileSearch
    },
    {
      step: '03',
      title: 'Orientação Estratégica',
      description: 'Apresentação das alternativas jurídicas cabíveis e definição do plano de ação mais adequado.',
      icon: Scale
    },
    {
      step: '04',
      title: 'Acompanhamento',
      description: 'Condução e monitoramento contínuo do caso com prestação periódica de informações ao cliente.',
      icon: CheckCircle2
    }
  ];

  return (
    <section id="como-funciona" className="py-12 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#3F5060] text-white border-t border-b border-slate-400/30 relative">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4">
          <span className="text-[10px] sm:text-[11px] font-cinzel font-semibold tracking-[0.25em] uppercase text-[#C8B195]">
            Método de Atendimento
          </span>
          <h2 className="text-2xl sm:text-4xl font-cinzel font-semibold text-white tracking-wide">
            Como Funciona o Atendimento
          </h2>
          <p className="text-xs sm:text-sm text-slate-100 font-light max-w-xl mx-auto">
            Um processo transparente e estruturado para garantir a melhor condução do seu caso.
          </p>
          <div className="w-12 sm:w-16 h-[1.5px] bg-[#C8B195] mx-auto"></div>
        </div>

        {/* 4 Process Steps - Square Cards with Gold Accents */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((item) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={item.step}
                className="bg-[#2E3A46]/95 backdrop-blur-xs p-5 sm:p-6 border-2 border-[#C8B195]/40 rounded-xl flex flex-col justify-between relative group hover:border-[#C8B195] transition-all shadow-lg"
              >
                <div className="space-y-3.5">
                  {/* Top Bar with Number Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-[#C8B195] bg-[#3F5060] px-2.5 py-0.5 rounded-md border border-[#C8B195]/50">
                      ETAPA {item.step}
                    </span>
                    <div className="p-2 bg-[#3F5060] border border-[#C8B195]/50 rounded-lg text-[#C8B195]">
                      <IconComponent className="w-4 h-4 stroke-[1.5]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-cinzel font-semibold text-white tracking-wide">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-200 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="w-8 h-[2px] bg-[#C8B195] rounded-full mt-4 sm:mt-6"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};




