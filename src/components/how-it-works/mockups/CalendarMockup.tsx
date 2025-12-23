import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Check } from 'lucide-react';

export function CalendarMockup() {
  return (
    <div 
      className="w-full max-w-[280px] mx-auto bg-card border border-border rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
      aria-label="Calendar showing available time slots with John Smith's AC repair appointment booked at 10:30 AM"
    >
      {/* Calendar Header */}
      <div className="bg-muted border-b border-border px-4 py-3 flex items-center gap-2">
        <Calendar className="w-4 h-4 text-navy-900" aria-hidden="true" />
        <span className="text-sm font-bold text-navy-900">Your Calendar</span>
        <span className="text-xs text-gray-500 ml-auto">Thursday, Nov 30</span>
      </div>

      {/* Time Slots */}
      <div className="p-4 flex flex-col gap-4">
        {/* Slot 1 - Available */}
        <div className="h-14 bg-card border border-border rounded-lg px-4 flex items-center justify-between">
          <span className="text-base text-navy-900">9:00 AM</span>
          <span className="text-sm text-gray-400">Available</span>
        </div>

        {/* Slot 2 - BOOKED (Highlighted) */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1.02, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-magenta-50 border-2 border-primary rounded-lg px-4 py-3 shadow-[0_0_0_4px_rgba(186,6,142,0.1)]"
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-lg font-bold text-primary flex items-center gap-1">
              <Check className="w-4 h-4" aria-hidden="true" />
              10:30 AM
            </span>
            <span className="text-[10px] uppercase font-bold bg-primary text-primary-foreground px-2 py-0.5 rounded">
              BOOKED
            </span>
          </div>
          <p className="text-sm font-bold text-navy-900">John Smith</p>
          <p className="text-xs text-gray-500">AC Repair - Not cooling</p>
          <p className="text-xs text-gray-500">(555) 123-4567</p>
        </motion.div>

        {/* Slot 3 - Available */}
        <div className="h-14 bg-card border border-border rounded-lg px-4 flex items-center justify-between">
          <span className="text-base text-navy-900">2:00 PM</span>
          <span className="text-sm text-gray-400">Available</span>
        </div>
      </div>

      {/* Confirmation Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mx-4 mb-4"
      >
        <div className="bg-green-500 text-white text-xs font-semibold px-3 py-1.5 rounded-md text-center">
          Confirmation sent to customer ✓
        </div>
      </motion.div>
    </div>
  );
}
