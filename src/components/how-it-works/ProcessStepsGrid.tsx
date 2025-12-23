import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { PhoneMockup } from './mockups/PhoneMockup';
import { ChatMockup } from './mockups/ChatMockup';
import { CalendarMockup } from './mockups/CalendarMockup';
import { NotificationMockup } from './mockups/NotificationMockup';

const steps = [
  {
    number: 1,
    badge: 'STEP 1',
    title: 'Call Answered Instantly',
    description: "Your phone rings. AI picks up immediately with your business name. Customer gets a live response—not voicemail.",
    outcomeBadge: '5-second response',
    MockupComponent: PhoneMockup,
    cardBg: 'bg-rose-50',
    cardBorder: 'border-rose-100',
    pillBg: 'bg-rose-100',
    pillText: 'text-rose-700',
    pillBorder: 'border-rose-200'
  },
  {
    number: 2,
    badge: 'STEP 2',
    title: 'Real Jobs Qualified in 30 Seconds',
    description: "AI asks: What's the issue? Where are you? When do you need help? Spam filtered automatically. Real customers move forward.",
    outcomeBadge: 'Spam blocked automatically',
    MockupComponent: ChatMockup,
    cardBg: 'bg-teal-50',
    cardBorder: 'border-teal-100',
    pillBg: 'bg-teal-100',
    pillText: 'text-teal-700',
    pillBorder: 'border-teal-200'
  },
  {
    number: 3,
    badge: 'STEP 3',
    title: 'Job Booked & Confirmed',
    description: "AI checks your calendar, books the first available slot, and sends confirmation. You get notified with full job details.",
    outcomeBadge: 'Calendar synced',
    MockupComponent: CalendarMockup,
    cardBg: 'bg-fuchsia-50',
    cardBorder: 'border-fuchsia-100',
    pillBg: 'bg-fuchsia-100',
    pillText: 'text-fuchsia-700',
    pillBorder: 'border-fuchsia-200'
  },
  {
    number: 4,
    badge: 'STEP 4',
    title: 'Job Appears in Your CRM',
    description: "Customer phone, service type, appointment time, and location sync automatically. No manual entry. No data loss.",
    outcomeBadge: 'Real-time CRM sync',
    MockupComponent: NotificationMockup,
    cardBg: 'bg-indigo-50',
    cardBorder: 'border-indigo-100',
    pillBg: 'bg-indigo-100',
    pillText: 'text-indigo-700',
    pillBorder: 'border-indigo-200'
  }
];

// Sample calendar data for the week view
const weekDays = [
  { day: 'Mon', jobs: 2, revenue: 850 },
  { day: 'Tue', jobs: 3, revenue: 1200 },
  { day: 'Wed', jobs: 2, revenue: 780 },
  { day: 'Thu', jobs: 4, revenue: 1650 },
  { day: 'Fri', jobs: 3, revenue: 1100 },
  { day: 'Sat', jobs: 0, revenue: 0 },
  { day: 'Sun', jobs: 0, revenue: 0 },
];

const totalJobs = weekDays.reduce((sum, d) => sum + d.jobs, 0);
const totalRevenue = weekDays.reduce((sum, d) => sum + d.revenue, 0);

export function ProcessStepsGrid() {
  return (
    <>
      {/* 4-Step Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-navy mb-4">
              See Exactly How WinStreams Handles a Missed Call
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Every missed call runs through the same four-step flow: captured in seconds, qualified by AI, booked on your calendar, and synced to your CRM.
            </p>
          </div>

          {/* 4-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group flex flex-col h-full rounded-3xl ${step.cardBg} border ${step.cardBorder} p-5 md:p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-magenta focus:ring-offset-2`}
              >
                {/* 1. Step Pill */}
                <div className="mb-4">
                  <span className={`inline-flex items-center gap-1.5 rounded-full ${step.pillBg} ${step.pillText} border ${step.pillBorder} px-3 py-1 text-xs font-bold uppercase tracking-wide`}>
                    STEP {step.number}
                  </span>
                </div>

                {/* 2. Visual Container - Premium Framed Effect */}
                <div className="mb-5 h-56 md:h-64 rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm p-3 flex items-center justify-center">
                  <div className="w-[280px] mx-auto md:w-full h-full flex items-center justify-center drop-shadow-sm">
                    <step.MockupComponent />
                  </div>
                </div>

                {/* 3. Content Block - Flexible Growth */}
                <div className="flex-grow mb-5">
                  <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* 4. Status Badge - Bottom Anchored */}
                <div className="mt-auto pt-4 border-t border-slate-200/60">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 px-3 py-1.5 text-xs font-medium">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    {step.outcomeBadge}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Hero Metrics Section */}
      <section className="py-12 md:py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              New Jobs Booked by Your AI
            </h3>
          </motion.div>

          {/* Weekly Calendar Card (floating white) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl border border-slate-200 shadow-xl p-5 md:p-6 mb-10 max-w-4xl mx-auto"
          >
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-brand-magenta" />
                <span className="text-base font-semibold text-slate-900">This Week</span>
              </div>
              <span className="text-sm text-slate-500">Nov 25 - Dec 1</span>
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-2 md:gap-3">
              {weekDays.map((dayData, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col items-center justify-center rounded-2xl p-3 transition-colors duration-200 ${
                    dayData.jobs > 0 
                      ? 'bg-emerald-50 border border-emerald-100 hover:bg-emerald-100' 
                      : 'bg-slate-50 border border-slate-100 opacity-40'
                  }`}
                >
                  <span className={`text-xs font-medium uppercase tracking-wide mb-0.5 ${
                    dayData.jobs > 0 ? 'text-emerald-700' : 'text-slate-500'
                  }`}>{dayData.day}</span>
                  {dayData.jobs > 0 ? (
                    <>
                      <span className="text-xl md:text-2xl font-bold text-emerald-600">{dayData.jobs}</span>
                      <span className="text-xs text-emerald-600">jobs</span>
                    </>
                  ) : (
                    <span className="text-xl md:text-2xl font-bold text-slate-400">—</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Metric Cards (3-column pastel) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto"
          >
            {/* Jobs Booked Card */}
            <div className="flex flex-col items-center text-center rounded-3xl bg-rose-50 border border-rose-100 shadow-lg p-5 md:p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-brand-navy mb-1.5">
                {totalJobs}
              </div>
              <div className="text-sm text-slate-600 font-medium">
                Jobs Booked
              </div>
            </div>

            {/* Conversion Rate Card */}
            <div className="flex flex-col items-center text-center rounded-3xl bg-indigo-50 border border-indigo-100 shadow-lg p-5 md:p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-brand-navy mb-1.5">
                94%
              </div>
              <div className="text-sm text-slate-600 font-medium">
                Conversion
              </div>
            </div>

            {/* Revenue Card */}
            <div className="flex flex-col items-center text-center rounded-3xl bg-emerald-50 border border-emerald-100 shadow-lg p-5 md:p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-brand-navy mb-1.5">
                ${(totalRevenue / 1000).toFixed(1)}K
              </div>
              <div className="text-sm text-slate-600 font-medium">
                Revenue
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
