import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HIWHeroProps {
  onBookingClick: () => void;
}

export function HIWHero({ onBookingClick }: HIWHeroProps) {
  return (
    <section className="relative bg-gradient-to-b from-white to-blue-50/50 py-24 md:py-32 overflow-hidden">
      {/* Radial Spotlight Background */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full 
          bg-[radial-gradient(ellipse_at_top,rgba(186,6,142,0.03),transparent_70%)] 
          pointer-events-none z-0" 
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-navy-900 mb-6 leading-tight">
            From Missed Call to Booked Appointment{' '}
            <span className="text-magenta-600">in Under 60 Seconds</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            No voicemail. No callbacks. No lost revenue.
          </p>

          <p className="text-lg font-semibold text-navy-900 max-w-3xl mx-auto mb-12">
            Four systems work together to turn every missed call into a confirmed appointment—automatically.
          </p>

          {/* CTA Button */}
          <button
            onClick={onBookingClick}
            className="inline-flex items-center gap-2 bg-magenta-600 text-white 
              px-8 py-4 rounded-xl font-semibold text-lg
              hover:bg-magenta-700 transition-all duration-300 
              hover:shadow-lg hover:scale-105"
          >
            See It In Action
            <ArrowRight size={20} />
          </button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 
            mt-20 pt-12 border-t border-gray-200"
        >
          <div className="text-center">
            <p className="text-4xl font-bold text-magenta-600 mb-2">500+</p>
            <p className="text-sm text-gray-600">Service Businesses</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-magenta-600 mb-2">95%</p>
            <p className="text-sm text-gray-600">Call Capture Rate</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-magenta-600 mb-2">47s</p>
            <p className="text-sm text-gray-600">Avg. Response Time</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
