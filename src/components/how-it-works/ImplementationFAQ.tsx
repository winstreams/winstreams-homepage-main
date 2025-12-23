import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Does this replace my receptionist or answering service?',
    answer: 'No—WinStreams is insurance, not a replacement. It only steps in for missed calls when you\'re busy. If you already use Ruby Receptionists, AnswerConnect, or have an office manager, WinStreams enhances your existing system by catching the calls that slip through. We work alongside your current setup, not instead of it.'
  },
  {
    question: 'Do I need a new phone number?',
    answer: 'No. You keep your existing business number. We set up call forwarding so missed calls trigger the WinStreams system. Your customers never see a different number.'
  },
  {
    question: 'What integrations do you support?',
    answer: 'We integrate with major calendar systems (Google Calendar, Outlook, Apple Calendar), CRMs (Jobber, ServiceTitan, Housecall Pro), and can send notifications via SMS, email, or Slack.'
  },
  {
    question: 'What if the AI doesn\'t know something?',
    answer: 'The AI is trained on your specific business, but if it encounters something unexpected, it gracefully collects the customer\'s info and flags it for you to follow up. You maintain full control.'
  },
  {
    question: 'How much does it cost?',
    answer: 'Pricing is based on call volume and features. Most service businesses pay between $200-500/month. Book a call to get a custom quote based on your needs.'
  },
  {
    question: 'Can I try it before committing?',
    answer: 'Yes. We offer a 14-day trial period where you can test the system with real calls. No credit card required to start.'
  }
];

export function ImplementationFAQ() {
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
            Common Questions
          </h2>
          <p className="text-xl text-gray-600">
            Local Operators Typically Want to Know:
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
          <button
            type="button"
            className="text-magenta-600 font-semibold text-sm hover:text-magenta-700 transition-colors flex items-center gap-2"
          >
            Start Conversation
            <ArrowRight size={16} />
          </button>
        </motion.div>

        {/* Accordion */}
        <Accordion
          defaultValue="item-0"
          type="single"
          collapsible
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-gray-200 rounded-xl px-6 bg-white hover:border-magenta-200 transition-colors"
            >
              <AccordionTrigger className="text-left text-lg font-bold text-navy-900 hover:text-magenta-600 py-5 hover:no-underline">
                <span className="pr-4">
                  {faq.question}
                  {index === 0 && (
                    <span className="ml-3 px-2 py-1 bg-magenta-50 text-magenta-600 text-xs font-bold rounded">
                      Most Asked
                    </span>
                  )}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5 pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
