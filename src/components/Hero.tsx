import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Phone, CalendarCheck, Moon, Bell, Sparkle, ShieldCheck } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

// Type-safe notification color (no type casting needed)
type NotifColor = "amber" | "blue" | "emerald" | "purple";

// Use Phosphor's Icon type directly
type IconComponent = Icon;

interface Notification {
  id: string;
  icon: IconComponent;
  title: string;
  badge: string;
  step: string;
  color: NotifColor;
}

interface Benefit {
  id: string;
  icon: IconComponent;
  title: string;
  subtitle: string;
}

const Hero = () => {
  const navigate = useNavigate();

  // NOTIFICATIONS DATA
  const notifications: Notification[] = [
    {
      id: "incoming",
      icon: Phone,
      title: "Water heater emergency",
      badge: "Captured",
      step: "STEP 1 — INCOMING",
      color: "amber",
    },
    {
      id: "qualified",
      icon: ShieldCheck,
      title: "Same-day confirmed",
      badge: "Qualified",
      step: "STEP 2 — QUALIFIED",
      color: "blue",
    },
    {
      id: "booked",
      icon: CalendarCheck,
      title: "Thu @ 2PM • $380 approved",
      badge: "Booked",
      step: "STEP 3 — BOOKED",
      color: "emerald",
    },
    {
      id: "notified",
      icon: Bell,
      title: "You receive a new job alert",
      badge: "Notified",
      step: "STEP 4 — NOTIFIED",
      color: "purple",
    },
  ];

  // WEEKLY JOBS DATA
  const weeklyJobs = [
    { id: "mon", day: "M", jobs: 3 },
    { id: "tue", day: "T", jobs: 2 },
    { id: "wed", day: "W", jobs: 3 },
    { id: "thu", day: "Th", jobs: 2 },
    { id: "fri", day: "F", jobs: 2 },
    { id: "sat", day: "S", jobs: 0, isOpen: true },
    { id: "sun", day: "S", jobs: 2 },
  ];

  // BENEFITS DATA - EXACT icon colors from Services Hero
  const benefits: Benefit[] = [
    { 
      id: "time", 
      icon: Phone, 
      title: "Take Back Your Time —",
      subtitle: "One Call at a Time"
    },
    { 
      id: "focus", 
      icon: Bell, 
      title: "Stay Focused Without",
      subtitle: "Constant Interruptions"
    },
    { 
      id: "noise", 
      icon: Sparkle, 
      title: "Let AI Handle the Noise So",
      subtitle: "You Don't Have To"
    },
  ];

  const totalJobs = weeklyJobs.reduce((sum, day) => sum + day.jobs, 0);

  // COLOR MAP
  const colorMap = {
    amber: {
      text: "text-amber-400",
      bg: "bg-amber-900/40",
      border: "border-amber-500/20",
      badge: "bg-amber-500/20",
    },
    blue: {
      text: "text-blue-400",
      bg: "bg-blue-900/40",
      border: "border-blue-500/20",
      badge: "bg-blue-500/20",
    },
    emerald: {
      text: "text-emerald-400",
      bg: "bg-emerald-900/40",
      border: "border-emerald-500/20",
      badge: "bg-emerald-500/20",
    },
    purple: {
      text: "text-purple-400",
      bg: "bg-purple-900/40",
      border: "border-purple-500/20",
      badge: "bg-purple-500/20",
    },
  } as const satisfies Record<NotifColor, {
    text: string;
    bg: string;
    border: string;
    badge: string;
  }>;

  const scrollToHowItWorks = () => {
    const element = document.getElementById("how-it-works");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCTAClick = () => {
    navigate("/book");
  };

  return (
    <section className="relative bg-slate-950 overflow-hidden py-16 sm:py-20 md:min-h-[85vh] md:flex md:items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-center">
          
          {/* LEFT COLUMN */}
          <div className="w-full max-w-none md:max-w-2xl mx-auto lg:mx-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent p-4 sm:p-5 md:bg-slate-900/40 md:backdrop-blur-sm md:border md:border-white/10 md:p-8 lg:p-10 md:shadow-xl text-center">
            
            {/* HEADLINE - Slightly smaller than Services (2.5rem vs 2.75rem) */}
            <h1 className="mx-auto max-w-[18ch] sm:max-w-none text-[2.5rem] sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-5">
              <span className="text-white">Turn Missed Calls Into </span>
              <span className="text-brand-magenta">Booked&nbsp;Jobs</span>
            </h1>

            {/* SUBHEAD - Match Services Hero size (text-base on mobile) */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300/90 mb-8 leading-relaxed max-w-[46ch] md:max-w-2xl mx-auto">
              Your AI Receptionist talks to clients, qualifies them, and books appointments straight into your calendar 24/7 — even when you're busy or out living your life.
            </p>

            {/* CTAs - EXACT Services Hero sizing */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <button
                type="button"
                onClick={handleCTAClick}
                aria-label="Book a strategy call"
                className="w-full sm:w-auto group inline-flex h-12 md:h-14 items-center justify-center gap-2 rounded-full border-2 border-transparent bg-brand-magenta px-6 md:px-8 text-base md:text-lg font-semibold text-white leading-none whitespace-nowrap transition-all duration-300 active:scale-95 shadow-lg shadow-brand-magenta/20 md:hover:scale-105 md:hover:shadow-xl md:hover:shadow-brand-magenta/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <span className="leading-none whitespace-nowrap">Book Strategy Call</span>
                <ArrowRight className="w-5 h-5 md:group-hover:translate-x-1 transition-transform" aria-hidden />
              </button>

              <button
                type="button"
                onClick={scrollToHowItWorks}
                aria-label="See how our AI receptionist works"
                className="w-full sm:w-auto inline-flex h-12 md:h-14 items-center justify-center gap-2 rounded-full border-2 border-brand-navy/50 bg-white/5 px-6 md:px-8 text-base md:text-lg font-medium text-white leading-none whitespace-nowrap transition-all duration-300 md:hover:bg-brand-navy md:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <span className="leading-none whitespace-nowrap">See How It Works</span>
                <ChevronDown className="w-5 h-5" aria-hidden />
              </button>
            </div>

            {/* TAGLINE - EXACT Services Hero style */}
            <p className="text-sm md:text-base text-slate-300 font-medium mb-8 italic">
              Busy Does Not Mean Missed. Just WinStreams.
            </p>

            {/* BENEFITS - EXACT Services Hero colors (magenta icons) */}
            <div className="mx-auto max-w-md space-y-3">
              {benefits.map((benefit) => {
                const BenefitIcon = benefit.icon;
                return (
                  <div key={benefit.id} className="flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 p-4 text-left">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-magenta/10 flex items-center justify-center">
                      <BenefitIcon size={24} weight="duotone" className="text-brand-magenta" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-white leading-tight">
                        {benefit.title}
                      </div>
                      <div className="text-sm text-slate-400 leading-tight mt-0.5">
                        {benefit.subtitle}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN - FIXED OVERFLOW */}
          <div className="w-full max-w-lg mx-auto lg:mx-0 rounded-3xl bg-slate-900/60 border border-white/10 p-4 sm:p-6 md:p-8 lg:p-10 lg:min-h-[620px] flex flex-col justify-between backdrop-blur">
            <div className="space-y-6 lg:space-y-8 flex-1 flex flex-col justify-between">
              
              {/* NOTIFICATIONS STACK */}
              <div className="space-y-3">
                {notifications.map((notif) => {
                  const colors = colorMap[notif.color];
                  const NotifIcon = notif.icon;
                  return (
                    <div
                      key={notif.id}
                      className={`flex items-start gap-2 rounded-2xl p-2.5 border ${colors.bg} ${colors.border}`}
                    >
                      <div className={`flex-shrink-0 w-8 h-8 rounded-lg ${colors.bg} flex items-center justify-center`}>
                        <NotifIcon size={16} weight="duotone" className={colors.text} aria-hidden />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={`text-[10px] font-semibold uppercase tracking-wide mb-0.5 ${colors.text}`}>
                          {notif.step}
                        </div>
                        <div className="text-xs text-white font-medium truncate">{notif.title}</div>
                      </div>
                      <div className={`flex-shrink-0 px-1.5 py-0.5 rounded-md text-[9px] font-bold uppercase ${colors.badge} ${colors.text}`}>
                        {notif.badge}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* WEEKLY STATS */}
              <div className="bg-slate-800/30 rounded-xl p-3">
                <div className="text-xs font-semibold text-slate-200 uppercase tracking-wide mb-2">
                  NEW JOBS BOOKED BY YOUR AI
                </div>
                <div className="grid grid-cols-7 gap-1.5 text-center text-[10px]">
                  {weeklyJobs.map((item) => (
                    <div
                      key={item.id}
                      className={`flex flex-col gap-0.5 items-center justify-center rounded-lg px-1 py-2 ${
                        item.isOpen
                          ? "border border-dashed border-slate-600 text-slate-500"
                          : item.jobs >= 3
                          ? "bg-emerald-500/20 text-emerald-300"
                          : "bg-emerald-500/10 text-emerald-200"
                      }`}
                    >
                      <span className="text-xs font-semibold">{item.day}</span>
                      <span className="text-[9px] font-medium whitespace-nowrap">
                        {item.isOpen ? "Open" : `${item.jobs} Jobs`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* METRICS ROW */}
              <div className="mt-4 pt-4 border-t border-slate-700">
                <div className="grid grid-cols-4 gap-2">
                  <div className="flex flex-col items-center justify-start">
                    <div className="text-lg md:text-xl font-semibold text-amber-300/80 mb-1">{totalJobs}</div>
                    <div className="text-[10px] text-slate-300 font-medium text-center leading-tight">New Jobs</div>
                  </div>

                  <div className="flex flex-col items-center justify-start border-l-2 border-slate-700 pl-2">
                    <div className="text-lg md:text-xl font-semibold text-blue-300 mb-1">92%</div>
                    <div className="text-[10px] text-slate-300 font-medium text-center leading-tight">Engaged</div>
                  </div>

                  <div className="flex flex-col items-center justify-start border-l-2 border-slate-700 pl-2">
                    <div className="text-lg md:text-xl font-semibold text-emerald-300 mb-1">$450</div>
                    <div className="text-[10px] text-slate-300 font-medium text-center leading-tight">Avg Value</div>
                  </div>

                  <div className="flex flex-col items-center justify-start border-l-2 border-slate-700 pl-2">
                    <div className="text-lg md:text-xl font-semibold text-violet-300 mb-1">24/7</div>
                    <div className="text-[10px] text-slate-300 font-medium text-center leading-tight">Coverage</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;