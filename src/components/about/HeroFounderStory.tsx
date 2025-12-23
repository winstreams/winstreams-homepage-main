'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PhoneOff, MessageSquare, CheckCircle2 } from 'lucide-react';

// --- Sub-Component: Notification Card ---
interface NotificationCardProps {
  icon: React.ElementType;
  title: string;
  subtext: string;
  className?: string;
  iconBg: string;
  iconColor: string;
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  icon: Icon,
  title,
  subtext,
  className = '',
  iconBg,
  iconColor,
}) => {
  return (
    <div
      className={`
      bg-white/80 backdrop-blur-md 
      border border-white/40 shadow-xl 
      rounded-2xl p-4 
      flex items-center gap-4 
      transition-transform duration-500 ease-out
      ${className}
    `}
    >
      <div
        className={`
        flex items-center justify-center 
        w-10 h-10 rounded-full flex-shrink-0
        ${iconBg} ${iconColor}
      `}
      >
        <Icon className="w-5 h-5" />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-slate-900 truncate">
          {title}
        </p>
        <p className="text-xs text-slate-500 truncate mt-0.5">
          {subtext}
        </p>
      </div>
    </div>
  );
};

// --- Sub-Component: The Stack Visual (Right Column) ---
const NotificationStack: React.FC = () => {
  return (
    <motion.div
      className="relative w-full max-w-sm mx-auto lg:mx-0"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
    >
      {/* Card 1: Back (Missed Call) */}
      <div className="absolute top-0 left-0 w-full z-0 transform translate-y-8 translate-x-4 opacity-70">
        <NotificationCard
          icon={PhoneOff}
          title="Missed call from a new lead"
          subtext="No answer. Would normally be a lost opportunity."
          iconBg="bg-red-50"
          iconColor="text-red-600"
        />
      </div>

      {/* Card 2: Middle (AI Handling) */}
      <div className="absolute top-0 left-0 w-full z-10 transform translate-y-4 translate-x-2 opacity-85">
        <NotificationCard
          icon={MessageSquare}
          title="WinStreams AI picks up immediately"
          subtext="Greets them, captures details, and answers basic questions."
          iconBg="bg-sky-50"
          iconColor="text-sky-600"
        />
      </div>

      {/* Card 3: Front (Booked) - Relative so the stack defines height */}
      <div className="relative z-20 transform translate-y-0 translate-x-0 opacity-100">
        <NotificationCard
          icon={CheckCircle2}
          title="Job booked without you touching the phone"
          subtext="You see it later in your calendar, not in your missed calls."
          iconBg="bg-emerald-50"
          iconColor="text-emerald-600"
        />
      </div>
    </motion.div>
  );
};

// --- Main Component ---
const HeroFounderStory: React.FC = () => {
  const manifestoItems = [
    'Built from real frustration, not theory.',
    'Designed for operators who juggle everything — not just phone calls.',
    'Focused on giving operators back their time — not replacing them.',
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Text */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
              Built by operators who burned out — to help operators who
              shouldn't have to.
            </h1>

            <div className="mt-8 space-y-4">
              {manifestoItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <CheckCircle2 className="w-5 h-5 mt-1 text-slate-300 flex-shrink-0" />
                  <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Visual */}
          <div className="mt-10 lg:mt-0 flex justify-center lg:justify-end">
            <NotificationStack />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroFounderStory;
