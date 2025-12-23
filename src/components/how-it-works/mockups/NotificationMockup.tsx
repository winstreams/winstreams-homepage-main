import React from 'react';
import { motion } from 'framer-motion';
import { Bell, User, Wrench, Calendar, Check } from 'lucide-react';

const statusChecks = [
  { label: 'Added to Calendar', delay: 0.3 },
  { label: 'Synced to CRM', delay: 0.5 },
  { label: 'Customer notified', delay: 0.7 }
];

export function NotificationMockup() {
  return (
    <div 
      className="w-full max-w-[280px] mx-auto flex items-center justify-center"
      aria-label="Notification card showing new appointment details for John Smith AC repair with calendar and CRM sync confirmation"
    >
      {/* Notification Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full bg-card rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.12)] p-5"
      >
        {/* Header */}
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 bg-magenta-50 rounded-full flex items-center justify-center flex-shrink-0">
            <Bell className="w-5 h-5 text-primary" aria-hidden="true" />
          </div>
          <div>
            <p className="text-base font-bold text-navy-900">New Appointment Booked</p>
            <p className="text-xs text-gray-500">2 minutes ago</p>
          </div>
        </div>

        {/* Customer Section */}
        <div className="mb-4 pb-4 border-b border-border">
          <div className="flex items-start gap-3">
            <User className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
            <div>
              <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">Customer</p>
              <p className="text-sm font-bold text-navy-900">John Smith</p>
              <p className="text-sm text-gray-500">(555) 123-4567</p>
            </div>
          </div>
        </div>

        {/* Service Section */}
        <div className="mb-4 pb-4 border-b border-border">
          <div className="flex items-start gap-3">
            <Wrench className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
            <div>
              <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">Service</p>
              <p className="text-sm font-bold text-navy-900">AC Repair</p>
              <p className="text-xs text-gray-500">Issue: Not cooling</p>
            </div>
          </div>
        </div>

        {/* Appointment Section */}
        <div className="mb-4">
          <div className="flex items-start gap-3">
            <Calendar className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
            <div>
              <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">Appointment</p>
              <p className="text-sm font-bold text-navy-900">Thu, Nov 30 @ 10:30 AM</p>
              <p className="text-xs text-gray-500">123 Main St, Miami FL</p>
            </div>
          </div>
        </div>

        {/* Status Checklist */}
        <div className="pt-4 border-t border-border flex flex-col gap-2">
          {statusChecks.map((check, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: check.delay }}
              className="flex items-center gap-2"
            >
              <Check className="w-3 h-3 text-green-500 flex-shrink-0" aria-hidden="true" />
              <span className="text-xs text-green-500">{check.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
