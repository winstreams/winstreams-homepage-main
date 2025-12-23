import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function CalloutBox() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      role="region"
      aria-label="Call to action"
      className="max-w-[600px] w-[90%] md:w-full mx-auto mt-8 md:mt-12 px-6 md:px-10 py-6 md:py-8 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl shadow-xl text-center"
    >
      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-snug">
        Stop Losing Jobs<br className="md:hidden" /> to Missed Calls
      </h3>
      <p className="text-sm text-slate-400 mb-4">
        See how it works for your business
      </p>
      <button
        onClick={() => navigate('/book')}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient text-white px-6 py-3 text-sm font-semibold shadow-lg hover:scale-105 transition-all duration-300 active:scale-95 mb-3"
      >
        Book Strategy Call
        <ArrowRight size={16} />
      </button>
      <p className="text-base font-semibold text-white/90">
        Busy Does Not Mean Missed. Just Winstreams.
      </p>
    </motion.div>
  );
}