import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '500+', label: 'Service Businesses' },
  { value: '95%', label: 'Call Capture Rate' },
  { value: '47s', label: 'Avg. Response Time' }
];

export function StatisticsBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-12 md:mt-16 mx-4 md:mx-6"
    >
      <dl 
        role="region" 
        aria-label="Performance statistics"
        className="max-w-[1200px] mx-auto bg-muted rounded-xl px-4 md:px-6 py-8 md:py-12"
      >
        <div className="grid grid-cols-3 gap-3 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center px-2 md:px-4 ${
                index < stats.length - 1 ? 'border-r border-border sm:border-r' : ''
              }`}
            >
              <dt className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary leading-none mb-2">
                {stat.value}
              </dt>
              <dd className="text-xs sm:text-sm md:text-lg text-gray-500 leading-snug">
                {stat.label}
              </dd>
            </div>
          ))}
        </div>
      </dl>
    </motion.div>
  );
}
