import { Phone, ShieldCheck, CalendarCheck, Bell, Sparkle, Moon } from '@phosphor-icons/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const STEPS = [
  {
    label: "STEP 1 — INCOMING",
    description: "Water heater emergency",
    badge: "CAPTURED",
    icon: "Phone",
    bgColor: "bg-amber-900/20",
    hoverBg: "hover:bg-amber-900/30",
    borderColor: "border-amber-500/20",
    hoverBorder: "hover:border-amber-400/30",
    iconBg: "bg-amber-900/50",
    iconColor: "text-amber-400",
    badgeBg: "bg-amber-500/20",
    badgeText: "text-amber-300",
    badgeBorder: "border-amber-400/30"
  },
  {
    label: "STEP 2 — QUALIFIED",
    description: "Same-day confirmed",
    badge: "QUALIFIED",
    icon: "ShieldCheck",
    bgColor: "bg-indigo-900/20",
    hoverBg: "hover:bg-indigo-900/30",
    borderColor: "border-indigo-500/20",
    hoverBorder: "hover:border-indigo-400/30",
    iconBg: "bg-indigo-900/50",
    iconColor: "text-indigo-400",
    badgeBg: "bg-indigo-500/20",
    badgeText: "text-indigo-300",
    badgeBorder: "border-indigo-400/30"
  },
  {
    label: "STEP 3 — BOOKED",
    description: "Thu @ 2PM • $380 approved",
    badge: "BOOKED",
    icon: "CalendarCheck",
    bgColor: "bg-emerald-900/20",
    hoverBg: "hover:bg-emerald-900/30",
    borderColor: "border-emerald-500/20",
    hoverBorder: "hover:border-emerald-400/30",
    iconBg: "bg-emerald-900/50",
    iconColor: "text-emerald-400",
    badgeBg: "bg-emerald-500/20",
    badgeText: "text-emerald-300",
    badgeBorder: "border-emerald-400/30"
  },
  {
    label: "STEP 4 — NOTIFIED",
    description: "You receive a new job alert",
    badge: "NOTIFIED",
    icon: "Bell",
    bgColor: "bg-purple-900/20",
    hoverBg: "hover:bg-purple-900/30",
    borderColor: "border-purple-500/20",
    hoverBorder: "hover:border-purple-400/30",
    iconBg: "bg-purple-900/50",
    iconColor: "text-purple-400",
    badgeBg: "bg-purple-500/20",
    badgeText: "text-purple-300",
    badgeBorder: "border-purple-400/30"
  }
];

const CALENDAR_DAYS = [
  { day: "M", jobs: "3 Jobs", status: "filled" },
  { day: "T", jobs: "3 Jobs", status: "filled" },
  { day: "W", jobs: "3 Jobs", status: "filled" },
  { day: "T", jobs: "2 Jobs", status: "filled" },
  { day: "F", jobs: "2 Jobs", status: "filled" },
  { day: "Open", jobs: "", status: "empty" },
  { day: "S", jobs: "2 Jobs", status: "filled" }
];

const METRICS = [
  { value: "14", label: "New Jobs" },
  { value: "92%", label: "Engaged" },
  { value: "$450", label: "Avg Value" },
  { value: "24/7", label: "Coverage" }
];

const BENEFITS = [
  {
    icon: "Sparkle",
    text: "AI Learns Your Business",
    iconColor: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-400/30"
  },
  {
    icon: "CalendarCheck",
    text: "New Leads on Your Calendar",
    iconColor: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-400/30"
  },
  {
    icon: "Moon",
    text: "Books While You Sleep",
    iconColor: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-400/30"
  }
];

// Icon maps defined outside component to prevent re-renders
const STEP_ICON_MAP = {
  Phone,
  ShieldCheck,
  CalendarCheck,
  Bell
} as const;

const BENEFIT_ICON_MAP = {
  Sparkle,
  CalendarCheck,
  Moon
} as const;

export function HowItWorks() {
  const scrollToSection = () => {
    const element = document.getElementById('how-it-works-detail');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="how-it-works" className="bg-slate-950 py-16 lg:py-24 px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
        
        {/* LEFT COLUMN - Hero Content */}
        <div className="space-y-8 max-w-2xl">
          {/* Headline */}
          <h2 
            className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="text-white">Stop Losing Jobs to </span>
            <span className="text-[#C084FC]">Missed Calls</span>
          </h2>

          {/* Subheadline */}
          <p 
            className="text-lg lg:text-xl text-slate-300 leading-relaxed max-w-xl animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Your AI Receptionist talks to clients, qualifies them, and books appointments straight into your calendar 24/7.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            {/* PRIMARY CTA */}
            <Link 
              to="/book"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#EC4899] hover:bg-[#DB2777] text-white font-semibold px-8 py-4 text-base lg:text-lg transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 active:scale-95 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-slate-950 shadow-[0_10px_25px_rgba(236,72,153,0.25)] hover:shadow-[0_20px_40px_rgba(236,72,153,0.4)]"
            >
              Get More Leads
              <ArrowRight className="w-5 h-5" />
            </Link>

            {/* SECONDARY CTA */}
            <button 
              onClick={scrollToSection}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-transparent border-2 border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-semibold px-8 py-4 text-base lg:text-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-pink-500/40 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              See How It Works
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>

          {/* Tagline */}
          <p 
            className="text-sm md:text-base text-slate-400 text-center lg:text-left font-medium italic mt-4 leading-relaxed max-w-lg mx-auto lg:mx-0 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            Busy Does Not Mean Missed. Just WinStreams.
          </p>

          {/* Benefits */}
          <div 
            className="flex flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 pt-4 max-w-2xl flex-wrap animate-fade-in-up"
            style={{ animationDelay: '0.5s' }}
          >
            {BENEFITS.map((benefit, index) => {
              const BenefitIcon = BENEFIT_ICON_MAP[benefit.icon];
              
              return (
                <div key={index} className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl ${benefit.bgColor} backdrop-blur-sm border ${benefit.borderColor} flex items-center justify-center`}>
                    <BenefitIcon 
                      size={24} 
                      weight="duotone" 
                      className={benefit.iconColor}
                    />
                  </div>
                  <span className="text-sm font-medium text-slate-300">
                    {benefit.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN - Mockup */}
        <div 
          className="relative max-w-xl lg:max-w-2xl mx-auto w-full overflow-hidden animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          <div className="bg-slate-900/40 border border-slate-700/50 rounded-3xl backdrop-blur-md p-6 lg:p-10 space-y-6 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)]">
            
            {/* Steps */}
            <div className="space-y-3.5">
              {STEPS.map((step, index) => {
                const StepIcon = STEP_ICON_MAP[step.icon];
                
                return (
                  <div
                    key={index}
                    className={`
                      rounded-2xl p-4 lg:p-5 border-2 
                      ${step.bgColor} ${step.hoverBg}
                      ${step.borderColor} ${step.hoverBorder}
                      flex items-start gap-4 transition-all duration-300
                      hover:shadow-lg
                      animate-slide-in-right
                    `}
                    style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                  >
                    {/* Icon */}
                    <div className={`w-10 h-10 rounded-lg ${step.iconBg} flex items-center justify-center flex-shrink-0`}>
                      <StepIcon 
                        size={20} 
                        weight="duotone" 
                        className={step.iconColor}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-1.5">
                        {step.label}
                      </p>
                      <p className="text-sm lg:text-base font-medium text-white leading-snug">
                        {step.description}
                      </p>
                    </div>

                    {/* Badge */}
                    <span className={`
                      px-3 py-1 text-xs font-bold uppercase tracking-wide rounded-full 
                      border flex-shrink-0
                      ${step.badgeBg} ${step.badgeText} ${step.badgeBorder}
                    `}>
                      {step.badge}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Section Divider */}
            <div className="pt-8 border-t border-slate-700/50 mt-8">
              <div className="inline-flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#22D3EE] to-[#0EA5E9]"></div>
                <h3 className="text-base font-bold uppercase tracking-wider text-white">
                  NEW JOBS BOOKED BY YOUR AI
                </h3>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="mt-6">
              <div className="grid grid-cols-7 gap-1.5 sm:gap-2 lg:gap-3">
                {CALENDAR_DAYS.map((day, index) => (
                  <div
                    key={index}
                    className={`
                      flex flex-col items-center justify-center p-3 lg:p-3.5 rounded-lg 
                      transition-all duration-200
                      ${day.status === 'empty' 
                        ? 'bg-slate-800/10 border border-dashed border-slate-600/40 opacity-60' 
                        : 'bg-slate-800/40 border border-slate-700/30 hover:scale-105 hover:border-slate-600/50'
                      }
                    `}
                  >
                    <span className="text-base lg:text-lg font-bold text-slate-300">
                      {day.day}
                    </span>
                    {day.jobs && (
                      <span className="text-sm lg:text-base font-semibold text-[#22D3EE] mt-1">
                        {day.jobs}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics Bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-8 pt-6 border-t border-slate-700/30">
              {METRICS.map((metric, index) => (
                <div key={index} className="flex flex-col items-center justify-center">
                  <span className="text-4xl lg:text-5xl font-bold font-mono text-[#60A5FA]">
                    {metric.value}
                  </span>
                  <span className="text-xs lg:text-sm font-medium text-slate-400 uppercase tracking-wide mt-1.5">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
