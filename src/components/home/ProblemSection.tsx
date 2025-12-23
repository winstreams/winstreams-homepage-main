import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { CurrencyDollar, Clock, Moon, Lightning } from '@phosphor-icons/react';

const PROBLEMS = [
  { icon: CurrencyDollar, title: "Missed Calls = Missed Money", description: "If you don't answer, they won't wait. They'll call the next plumber who picks up." },
  { icon: Clock, title: "The Lead Won't Wait on You", description: "By the time you call back, they've already booked with someone else." },
  { icon: Moon, title: "After-Hours = Lost Revenue", description: "Evenings, weekends, holidays—customers still call. Without coverage, they disappear." },
  { icon: Lightning, title: "Slammed During Rush Hours", description: "You're on a job or with a customer, and your phone becomes a distraction instead of income." }
];

export function ProblemSection() {
  return (
    <section className="py-20 px-4 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-h2 text-navy-900 mb-4">Your Phone Rings. Nobody Answers.</h2>
          <p className="text-lg text-magenta-700 font-semibold">Every missed call is a potential $200–$2,000 job you'll never see again.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROBLEMS.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Card className="p-6 h-full hover:border-blue-500 hover:shadow-xl transition-all duration-300 border-gray-100">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <p.icon size={32} weight="duotone" className="text-navy-900" />
                </div>
                <h3 className="font-heading font-bold text-navy-900 mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{p.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}