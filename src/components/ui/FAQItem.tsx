import { CaretDown } from '@phosphor-icons/react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
  id?: string;
}

export function FAQItem({ question, answer, isOpen, onToggle, index, id }: FAQItemProps) {
  // Create stable ID using index + slug for uniqueness
  const baseId = id || question.toLowerCase().replace(/[^a-z0-9]/g, '-');
  const questionId = `${index}-${baseId}`;
  
  return (
    <div id={questionId} className="scroll-mt-20">
      <div className={`border rounded-2xl overflow-hidden bg-white transition-all duration-300 ${
        isOpen ? 'border-brand-magenta/50' : 'border-slate-200 hover:border-brand-magenta/30'
      }`}>
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${questionId}`}
          className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta focus-visible:ring-offset-2 rounded-t-2xl"
        >
          <span className={`text-lg font-semibold transition-colors duration-200 ${
            isOpen ? 'text-brand-magenta' : 'text-brand-navy'
          }`}>
            {question}
          </span>
          <CaretDown
            className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
              isOpen ? 'rotate-180 text-brand-magenta' : 'text-slate-400'
            }`}
            weight="bold"
          />
        </button>

        <div 
          id={`faq-answer-${questionId}`}
          role="region"
          aria-labelledby={`faq-question-${questionId}`}
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 md:px-8 pb-6 md:pb-8">
            <p className="text-base text-slate-600 leading-relaxed">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
