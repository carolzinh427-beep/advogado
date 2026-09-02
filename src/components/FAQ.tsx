import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      question: 'Quais áreas do Direito o escritório atende?',
      answer: 'O escritório atua precipuamente nas áreas de Direito Trabalhista, Direito Previdenciário, Direito Civil e Direito Consumerista.'
    },
    {
      question: 'Como posso entrar em contato?',
      answer: 'Você pode entrar em contato diretamente pelo WhatsApp ou telefone no número (11) 91958-0341, ou enviando uma mensagem para o e-mail lucasmanoel.ag@adv.oabsp.org.br.'
    },
    {
      question: 'Como funciona o atendimento?',
      answer: 'O atendimento inicia-se com o primeiro contato do cliente para apresentação de sua demanda. Em seguida, as informações são minuciosamente analisadas para apresentação da orientação jurídica adequada e o posterior acompanhamento do caso.'
    },
    {
      question: 'O escritório realiza atendimento online?',
      answer: 'Sim. Além do atendimento presencial no escritório, oferecemos atendimento jurídico online com a mesma proximidade, responsabilidade e segurança jurídica.'
    },
    {
      question: 'Como chegar ao escritório?',
      answer: 'Nosso endereço é a Av. Pres. Humberto de Alencar Castelo Branco, 3297 - Vila Leonor, Guarulhos - SP, CEP 07024-170. Na seção de Contato você encontra o link para navegação direta pelo Google Maps.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-100 border-t border-b border-slate-300">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <span className="text-[11px] font-cinzel font-medium tracking-[0.25em] uppercase text-[#C5A880]">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-cinzel font-semibold text-[#2D3A45]">
            Perguntas Frequentes
          </h2>
          <div className="w-16 h-[1px] bg-[#C5A880] mx-auto"></div>
        </div>

        {/* Accordion List - rounded-xl */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={item.question}
                className="border border-slate-300 transition-all bg-white rounded-xl shadow-xs overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-cinzel font-semibold text-[#2D3A45]">
                    {item.question}
                  </span>
                  <div className="ml-4 p-1.5 bg-slate-100 rounded-lg text-[#2D3A45]">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-[#C5A880]" />
                    ) : (
                      <Plus className="w-4 h-4 text-[#2D3A45]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-[#475569] leading-relaxed font-light border-t border-slate-200 bg-slate-50/70">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};



