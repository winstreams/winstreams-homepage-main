import React from 'react';
import { motion } from 'framer-motion';
import { ChatText, CalendarCheck, ShieldCheck, PhoneCall } from '@phosphor-icons/react';

const leftBenefits = [
  {
    icon: ChatText,
    iconColor: 'text-blue-600',
    title: 'We respond in under 60 seconds',
    description: 'Every caller gets a real reply instantly—even when you\'re on a ladder, with a customer, or off the clock.'
  },
  {
    icon: CalendarCheck,
    iconColor: 'text-emerald-600',
    title: 'We book appointments on the spot',
    description: 'We confirm availability, send calendar links, and lock in the job before your competitors even pick up.'
  }
];

const rightBenefits = [
  {
    icon: ShieldCheck,
    iconColor: 'text-purple-600',
    title: 'We filter spam automatically',
    description: 'Robocalls and solicitors get screened out. You only hear from paying customers.'
  },
  {
    icon: PhoneCall,
    iconColor: 'text-amber-600',
    title: 'We route urgent calls to you',
    description: 'Emergency repairs or VIP clients? We patch them straight through to your cell—instantly.'
  }
];

const conversation = [
  { type: 'customer', text: 'Hi, what do you charge for AC repair, and when\'s your next opening?' },
  { type: 'ai', text: 'Our diagnostic visit is $89, and repairs are quoted after inspection. We have availability tomorrow at 10am or 2pm. Which works?' },
  { type: 'customer', text: 'How much would a new unit cost if mine is too old?' },
  { type: 'ai', text: 'New systems range from $3,500-$7,000 depending on size. We can give you an exact quote during the visit. Should I book you for 10am?' },
  { type: 'customer', text: 'Yes, 10am works.' },
  { type: 'ai', text: 'Perfect! You\'re booked for 10am tomorrow with Mike, our lead tech. I\'ve texted you the confirmation and pricing breakdown.' }
];

export function FeatureShowcase() {
  return (
    <section className="w-full py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold tracking-wider uppercase border border-emerald-100">
              Your Call Flow
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-navy text-center mb-6">
            How Our AI Receptionist Handles Your Calls
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed text-center max-w-2xl mx-auto mb-16">
            You stay focused on the job. We turn callers into <span className="text-brand-magenta font-semibold">booked appointments</span>.
          </p>
        </motion.div>

        {/* Grid container: stacked by default, 12-col grid at lg */}
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
          {/* 1) LEFT BENEFITS - Source order controls stacking */}
          <div className="space-y-12 lg:col-span-3">
            {leftBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-5"
                >
                  <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                    <Icon size={32} weight="duotone" className={benefit.iconColor} />
                  </div>
                  <div className="pt-1">
                    <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-base text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* 2) PHONE - Center column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:col-span-6"
          >
            <div className="relative flex justify-center w-full mx-auto">
              {/* Responsive width scaling */}
              <div className="w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[420px]">
                {/* OUTER BEZEL: Premium Navy (blue-leaning) */}
                <div className="w-full rounded-[3rem] bg-[#0F172A] p-3 shadow-2xl ring-1 ring-white/10">
                  {/* INNER SCREEN — min-height enforced */}
                  <div className="w-full rounded-[2.5rem] bg-slate-50 overflow-hidden border border-white/10 relative flex flex-col min-h-[500px] sm:min-h-[560px]">
                    {/* STATUS BAR / NOTCH SPACER */}
                    <div className="absolute top-0 left-0 right-0 h-7 bg-white/50 backdrop-blur-sm z-20 border-b border-slate-200/50 flex justify-center items-end pb-1">
                      <div className="w-16 h-3 bg-slate-200 rounded-b-lg"></div>
                    </div>

                    {/* CONTENT WRAPPER: spacing + responsive text scaling */}
                    <div className="pt-12 pb-8 px-4 text-sm sm:text-base leading-relaxed flex-1">
                      {/* 🚫 CRITICAL: KEEP THE EXISTING CHAT UI EXACTLY */}
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider text-center mb-3">
                        LIVE CONVERSATION
                      </div>
                      <div className="space-y-2 flex-1 overflow-hidden">
                        {conversation.map((msg, idx) => (
                          <div
                            key={idx}
                            className={`rounded-xl p-2.5 leading-relaxed ${
                              msg.type === 'customer'
                                ? 'bg-blue-100 text-slate-900 ml-auto max-w-[90%]'
                                : 'bg-slate-200 text-slate-900 max-w-[90%]'
                            }`}
                          >
                            {msg.text}
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-center gap-1.5 mt-3 bg-white px-3 py-1.5 rounded-full w-fit mx-auto">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-[10px] font-semibold text-green-600">ACTIVE 24/7</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3) RIGHT BENEFITS */}
          <div className="space-y-12 lg:col-span-3">
            {rightBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-5"
                >
                  <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                    <Icon size={32} weight="duotone" className={benefit.iconColor} />
                  </div>
                  <div className="pt-1">
                    <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-base text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}