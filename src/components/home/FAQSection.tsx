import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQS = [
  {
    id: 'replacement-fear',
    question: "Does WinStreams replace my receptionist?",
    answer: "No—WinStreams is an enhancement, not a replacement. It steps in only for missed calls when you're busy. If you already use Ruby Receptionists, AnswerConnect, or have an office manager, WinStreams supports your current setup by catching the calls that slip through. We work alongside your existing system, not instead of it."
  },
  {
    id: 'setup-time',
    question: "How long does setup take?",
    answer: "Most businesses are live within 2-4 days. We help you build your call script, connect your calendar, and test everything before you go live."
  },
  {
    id: 'booking-accuracy',
    question: "What if it books the wrong appointment?",
    answer: "The AI confirms every detail with callers before booking—service type, preferred time, and contact info. You also get instant notifications for each booking so you can review in real-time. If something looks off, you can adjust it immediately from your dashboard or phone."
  },
  {
    id: 'cost-spike',
    question: "What does it cost if my calls spike?",
    answer: "Plans include a set number of calls per month. If you go over, we bill per additional call at a fair rate. You can also upgrade or downgrade plans anytime with no penalties."
  },
  {
    id: 'cancel-anytime',
    question: "Can I cancel anytime?",
    answer: "Yes. No long-term contracts. Cancel anytime with 30 days notice."
  },
  {
    id: 'calendar-integration',
    question: "Does it integrate with my calendar?",
    answer: "Yes. We integrate with Google Calendar, Outlook, Apple Calendar, and most major scheduling tools. Your availability syncs automatically, so the AI only books when you're actually free."
  }
];

// Simple analytics helper - replace with your analytics provider
const trackFAQClick = (questionId: string, questionText: string) => {
  // Track FAQ question clicks for data validation
  if (typeof window !== 'undefined' && (window as any).analytics) {
    (window as any).analytics.track('faq_question_clicked', {
      question_id: questionId,
      question_text: questionText
    });
  }
  // Console log for development
  console.log('FAQ clicked:', { question_id: questionId, question_text: questionText });
};

{/* 
  FAQ REORDERING DATA VALIDATION:
  Current order is assumed based on psychology, not actual support data.
  Week 1: Track which questions get clicked
  Week 2: Analyze click patterns
  Week 3: Reorder based on actual data if conflicts with assumptions
*/}

export function FAQSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 mb-4">
            What Operators Ask Before Getting Started
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about getting started
          </p>
        </motion.div>

        {/* Micro-CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 p-5 bg-gradient-to-r from-blue-50 to-magenta-50 border border-magenta-100 rounded-xl"
        >
          <p className="text-sm text-navy-900 mb-3">
            <span className="font-semibold text-base">Can't find what you need?</span>
            <br />
            <span className="text-gray-600">Our team responds within 2 hours.</span>
          </p>
          <a
            href="/contact"
            className="text-magenta-600 font-semibold text-sm hover:text-magenta-700 transition-colors flex items-center gap-2"
          >
            Start Conversation
            <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* FAQ Accordion with Analytics Tracking */}
        <Accordion
          defaultValue="item-0"
          type="single"
          collapsible
          className="space-y-4"
          onValueChange={(value) => {
            if (value) {
              const index = parseInt(value.replace('item-', ''));
              const faq = FAQS[index];
              if (faq) {
                trackFAQClick(faq.id, faq.question);
              }
            }
          }}
        >
          {FAQS.map((faq, index) => (
            <AccordionItem
              key={faq.id}
              value={`item-${index}`}
              className="border border-gray-200 rounded-xl px-6 bg-white hover:border-magenta-200 transition-colors data-[state=open]:border-2 data-[state=open]:border-brand-magenta"
            >
              <AccordionTrigger className="text-left text-lg font-bold text-navy-900 hover:text-magenta-600 py-5 hover:no-underline data-[state=open]:text-brand-magenta">
                <span className="pr-4">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-600 leading-relaxed pb-6 pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}