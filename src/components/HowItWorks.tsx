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
    <section id="como-funciona" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#3D5061] text-white border-t border-b border-slate-400/30 relative">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-[11px] font-cinzel font-medium tracking-[0.25em] uppercase text-[#C5A880]">
            Método de Atendimento
          </span>
          <h2 className="text-3xl sm:text-4xl font-cinzel font-semibold text-white tracking-wide">
            Como Funciona o Atendimento
          </h2>
          <p className="text-sm text-slate-100 font-light max-w-xl mx-auto">
            Um processo transparente e estruturado para garantir a melhor condução do seu caso.
          </p>
          <div className="w-16 h-[1px] bg-[#C5A880] mx-auto"></div>
        </div>

        {/* 4 Process Steps - rounded-2xl */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={item.step}
                className="bg-[#485C6E]/90 backdrop-blur-xs p-6 border border-slate-300/30 rounded-2xl flex flex-col justify-between relative group hover:border-[#C5A880] transition-all shadow-lg"
              >
                <div className="space-y-4">
                  {/* Top Bar with Number Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#C5A880] bg-[#334453] px-3 py-1 rounded-full border border-slate-400/40">
                      ETAPA {item.step}
                    </span>
                    <div className="p-2.5 bg-[#334453] border border-slate-400/40 rounded-xl text-[#C5A880]">
                      <IconComponent className="w-4 h-4 stroke-[1.5]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-cinzel font-semibold text-white tracking-wide">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-100 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="w-8 h-[2px] bg-[#C5A880]/70 rounded-full mt-6"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};


