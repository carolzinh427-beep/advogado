import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      question: 'Quais áreas do Direito o escritório atende?',
      answer: 'O escritório atua precipuamente nas áreas de Direito Trabalhista, Direito Previdenciário, Direito Cível e Direito Consumerista.'
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
    <section id="faq" className="py-12 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] border-t border-b border-slate-300 relative">
      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 sm:space-y-4">
          <span className="text-[10px] sm:text-[11px] font-cinzel font-semibold tracking-[0.25em] uppercase text-[#C8B195]">
            Dúvidas Frequentes
          </span>
          <h2 className="text-2xl sm:text-4xl font-cinzel font-semibold text-[#3F5060]">
            Perguntas Frequentes
          </h2>
          <div className="w-12 sm:w-16 h-[1.5px] bg-[#C8B195] mx-auto"></div>
        </div>

        {/* Accordion List - Square Cards with Gold Border */}
        <div className="space-y-3 sm:space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={item.question}
                className="border-2 border-slate-200 hover:border-[#C8B195] transition-all bg-white rounded-xl shadow-xs overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-base font-cinzel font-semibold text-[#3F5060]">
                    {item.question}
                  </span>
                  <div className="ml-3 p-1.5 bg-[#FAF8F5] rounded-lg text-[#3F5060] border border-[#C8B195]/40 shrink-0">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-[#C8B195]" />
                    ) : (
                      <Plus className="w-4 h-4 text-[#3F5060]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-2 text-xs sm:text-sm text-[#4A5866] leading-relaxed font-light border-t border-slate-200 bg-[#FAF8F5]/60">
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




