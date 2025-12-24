import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Phone, CalendarCheck, Moon, Bell, Sparkle, ShieldCheck, ClockCounterClockwise, BellRinging, Waveform } from "@phosphor-icons/react";
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
  text: string;
}

const Hero = () => {
  const navigate = useNavigate();

  // NOTIFICATIONS DATA
  // Uses stable IDs and typed colors for React reconciliation safety
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
  // Fixed Thursday label from "T" to "Th" for clarity
  const weeklyJobs = [
    { id: "mon", day: "M", jobs: 3 },
    { id: "tue", day: "T", jobs: 2 },
    { id: "wed", day: "W", jobs: 3 },
    { id: "thu", day: "Th", jobs: 2 },
    { id: "fri", day: "F", jobs: 2 },
    { id: "sat", day: "S", jobs: 0, isOpen: true },
    { id: "sun", day: "S", jobs: 2 },
  ];

  // BENEFITS PILLS DATA
  // Stable IDs for copy-change resilience
  const benefits: Benefit[] = [
    { id: "time", icon: ClockCounterClockwise, text: "Take Back Your Time — One Call at a Time" },
    { id: "focus", icon: BellRinging, text: "Stay Focused Without Constant Interruptions" },
    { id: "noise", icon: Waveform, text: "Let AI Handle the Noise So You Don't Have To" },
  ];

  const totalJobs = weeklyJobs.reduce((sum, day) => sum + day.jobs, 0);

  // COLOR MAP
  // Type-safe object-based lookups with satisfies for extra safety
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
    <section className="relative bg-slate-950 overflow-hidden py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-center">
          
          {/* LEFT COLUMN */}
          <div className="w-full max-w-4xl mx-auto lg:mx-0">
            {/* Frosted Glass Panel */}
            <div className="bg-slate-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl text-center">
              
              {/* HEADLINE */}
              {/* text-4xl sm:text-5xl md:text-6xl matches Services Hero */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
                <span className="text-white">Turn Missed Calls Into </span>
                {/* &nbsp; prevents "Booked" and "Jobs" from splitting */}
                <span className="text-brand-magenta">Booked&nbsp;Jobs</span>
              </h1>

              {/* SUBHEAD */}
              {/* text-lg md:text-xl matches Services Hero */}
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-3xl mx-auto">
                Your AI Receptionist talks to clients, qualifies them, and books appointments straight into your calendar 24/7 — even when you're busy or out living your life.
              </p>

              {/* CTAs */}
              {/* px-8 py-4 text-lg matches Services Hero */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <button
                  type="button"
                  onClick={handleCTAClick}
                  aria-label="Book a strategy call"
                  className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 rounded-full bg-brand-magenta px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-brand-magenta/20 hover:scale-105 hover:shadow-xl hover:shadow-brand-magenta/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-magenta focus:ring-offset-2 focus:ring-offset-slate-950 active:scale-95"
                >
                  Book Strategy Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden />
                </button>

                <button
                  type="button"
                  onClick={scrollToHowItWorks}
                  aria-label="See how our AI receptionist works"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand-navy text-white px-8 py-4 text-lg font-medium hover:bg-brand-navy hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  See How It Works
                  <ChevronDown className="w-5 h-5" aria-hidden />
                </button>
              </div>

              {/* TAGLINE */}
              {/* text-slate-400 italic matches Services Hero */}
              <p className="text-slate-400 italic text-base mb-8">
                Busy Does Not Mean Missed. Just WinStreams.
              </p>

              {/* BENEFITS - Services Hero style (horizontal pills) */}
              {/* bg-slate-800/50 with bg-brand-magenta/20 icon circles */}
              <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
                {benefits.map((benefit) => {
                  const BenefitIcon = benefit.icon;
                  return (
                    <div key={benefit.id} className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                      <div className="w-8 h-8 rounded-full bg-brand-magenta/20 flex items-center justify-center flex-shrink-0">
                        <BenefitIcon size={18} weight="duotone" className="text-brand-magenta" />
                      </div>
                      <span className="text-sm text-slate-300 font-medium">{benefit.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - DASHBOARD VISUAL */}
          <div className="w-full max-w-lg mx-auto lg:mx-0 rounded-3xl bg-slate-900/60 border border-white/10 p-4 sm:p-6 md:p-8 lg:p-10 lg:min-h-[620px] flex flex-col justify-between backdrop-blur">
            <div className="space-y-6 lg:space-y-8 flex-1 flex flex-col justify-between">
              
              {/* NOTIFICATIONS STACK */}
              <div className="space-y-3">
                {notifications.map((notif) => {
                  // Type-safe color lookup (no casting needed)
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
                      {/* Adjusted font size to accommodate "Th" label */}
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