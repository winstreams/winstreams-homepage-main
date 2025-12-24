import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import {
  Phone,
  CalendarCheck,
  Moon,
  Bell,
  Sparkle,
  ShieldCheck,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

// Type-safe notification colors
type NotifColor = "amber" | "blue" | "emerald" | "purple";
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
  label: string;
}

const Hero = () => {
  const navigate = useNavigate();

  // Notifications (Right Column)
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

  // Weekly jobs (Right Column) — fixed Thursday label "Th"
  const weeklyJobs = [
    { id: "mon", day: "M", jobs: 3 },
    { id: "tue", day: "T", jobs: 2 },
    { id: "wed", day: "W", jobs: 3 },
    { id: "thu", day: "Th", jobs: 2 },
    { id: "fri", day: "F", jobs: 2 },
    { id: "sat", day: "S", jobs: 0, isOpen: true },
    { id: "sun", day: "S", jobs: 2 },
  ];

  // Benefits pills (Left Column) — Home hero content
  const benefits: Benefit[] = [
    { id: "learn", icon: Sparkle, label: "AI Learns Your Business" },
    { id: "calendar", icon: CalendarCheck, label: "New Leads on Your Calendar" },
    { id: "sleep", icon: Moon, label: "Books While You Sleep" },
  ];

  const totalJobs = weeklyJobs.reduce((sum, day) => sum + day.jobs, 0);

  // Notification color map
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
  } as const satisfies Record<
    NotifColor,
    { text: string; bg: string; border: string; badge: string }
  >;

  const scrollToHowItWorks = () => {
    const el = document.getElementById("how-it-works");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleCTAClick = () => {
    navigate("/book");
  };

  return (
    <section className="relative bg-slate-950 overflow-hidden py-12 sm:py-16 lg:py-24 md:min-h-[85vh] md:flex md:items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN */}
          <div className="w-full max-w-2xl lg:max-w-none mx-auto lg:mx-0">
            <div className="w-full lg:max-w-[640px] mx-auto lg:mx-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent p-4 sm:p-5 md:bg-slate-900/40 md:backdrop-blur-sm md:border md:border-white/10 md:p-8 lg:p-10 md:shadow-xl text-center">
              {/* Headline */}
              <h1 className="mx-auto max-w-[18ch] sm:max-w-none text-[2.125rem] sm:text-5xl lg:text-6xl font-bold leading-snug tracking-tight mb-5">
                <span className="text-white">Turn Missed Calls Into </span>
                <span className="text-brand-magenta">Booked&nbsp;Jobs</span>
              </h1>

              {/* Subhead */}
              <p className="text-[15px] sm:text-base lg:text-xl text-slate-300/90 mb-6 leading-[1.65] md:leading-relaxed max-w-[46ch] md:max-w-2xl mx-auto">
                Your AI Receptionist talks to clients, qualifies them, and books
                appointments straight into your calendar 24/7 — even when you're
                busy or out living your life.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row sm:items-stretch justify-center gap-4 mb-5 sm:w-full sm:max-w-xl sm:mx-auto">
                {/* Primary CTA */}
                <button
                  type="button"
                  onClick={handleCTAClick}
                  aria-label="Book a strategy call"
                  className="w-full sm:flex-1 sm:min-w-0 group inline-flex items-center justify-center gap-2 bg-brand-magenta text-white font-semibold px-6 py-3 md:px-8 md:py-4 text-base md:text-lg rounded-full leading-none whitespace-nowrap min-h-[52px] md:min-h-[56px] transition-all duration-300 active:scale-95 shadow-lg shadow-brand-magenta/20 md:hover:scale-105 md:hover:shadow-xl md:hover:shadow-brand-magenta/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  Book Strategy Call
                  <ArrowRight
                    className="w-5 h-5 md:group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </button>

                {/* Secondary CTA — SOLID NAVY + SAFE HOVER */}
                <button
                  type="button"
                  onClick={scrollToHowItWorks}
                  aria-label="See how our AI receptionist works"
                  className="w-full sm:flex-1 sm:min-w-0 inline-flex items-center justify-center gap-2 bg-brand-navy text-white border-2 border-brand-navy font-semibold px-6 py-3 md:px-8 md:py-4 text-base md:text-lg rounded-full leading-none whitespace-nowrap min-h-[52px] md:min-h-[56px] transition-all duration-300 active:scale-95 md:hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  See How It Works
                  <ChevronDown className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>

              <p className="text-sm md:text-base text-slate-300 italic mb-6">
                Busy Does Not Mean Missed. Just WinStreams.
              </p>

              {/* BENEFITS PILLS — Home hero style (no inner circle wrapper) */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3">
                {benefits.map((benefit) => {
                  const BenefitIcon = benefit.icon;
                  return (
                    <div
                      key={benefit.id}
                      className="flex items-center gap-3 rounded-full bg-white/5 border border-white/10 px-4 py-2.5 text-left"
                    >
                      <BenefitIcon
                        size={18}
                        weight="duotone"
                        className="text-brand-magenta flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-[13px] leading-snug text-slate-300">
                        {benefit.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-full max-w-xl lg:max-w-none mx-auto lg:mx-0 rounded-3xl bg-slate-900/60 border border-white/10 p-8 lg:p-10 min-h-[580px] lg:min-h-[620px] flex flex-col justify-between backdrop-blur md:shadow-2xl">
            <div className="space-y-6 lg:space-y-8 flex-1 flex flex-col justify-between">
              {/* Notification stack */}
              <div className="space-y-4">
                {notifications.map((notif) => {
                  const colors = colorMap[notif.color];
                  const NotifIcon = notif.icon;

                  return (
                    <div
                      key={notif.id}
                      className={`flex items-start gap-3 rounded-2xl p-3 border ${colors.bg} ${colors.border}`}
                    >
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-lg ${colors.bg} flex items-center justify-center`}
                      >
                        <NotifIcon
                          size={18}
                          weight="duotone"
                          className={colors.text}
                          aria-hidden="true"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div
                          className={`text-[11px] font-semibold uppercase tracking-wide mb-0.5 ${colors.text}`}
                        >
                          {notif.step}
                        </div>
                        <div className="text-sm text-white font-medium truncate">
                          {notif.title}
                        </div>
                      </div>

                      <div
                        className={`flex-shrink-0 px-2 py-1 rounded-md text-[10px] font-bold uppercase ${colors.badge} ${colors.text}`}
                      >
                        {notif.badge}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Weekly stats */}
              <div className="bg-slate-800/30 rounded-xl p-4">
                <div className="text-base font-semibold text-slate-200 uppercase tracking-wide mb-3">
                  NEW JOBS BOOKED BY YOUR AI
                </div>

                <div className="grid grid-cols-7 gap-2 text-center text-[11px]">
                  {weeklyJobs.map((item) => (
                    <div
                      key={item.id}
                      className={`flex flex-col gap-1 items-center justify-center rounded-lg px-2 py-3 ${
                        item.isOpen
                          ? "border border-dashed border-slate-600 text-slate-500"
                          : item.jobs >= 3
                          ? "bg-emerald-500/20 text-emerald-300"
                          : "bg-emerald-500/10 text-emerald-200"
                      }`}
                    >
                      <span className="text-[13px] font-semibold">{item.day}</span>
                      <span className="text-xs font-medium whitespace-nowrap">
                        {item.isOpen ? "Open" : `${item.jobs} Jobs`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics row */}
              <div className="mt-6 pt-6 border-t border-slate-700">
                <div className="grid grid-cols-4 gap-4">
                  <div className="flex flex-col items-center justify-start">
                    <div className="text-xl md:text-2xl lg:text-3xl font-semibold text-amber-300/80 mb-2">
                      {totalJobs}
                    </div>
                    <div className="text-xs text-slate-300 font-medium whitespace-nowrap">
                      New Jobs
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-start border-l-2 border-slate-700 pl-4">
                    <div className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-300 mb-2">
                      92%
                    </div>
                    <div className="text-xs text-slate-300 font-medium whitespace-nowrap">
                      Engaged
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-start border-l-2 border-slate-700 pl-4">
                    <div className="text-xl md:text-2xl lg:text-3xl font-semibold text-emerald-300 mb-2">
                      $450
                    </div>
                    <div className="text-xs text-slate-300 font-medium whitespace-nowrap">
                      Avg Value
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-start border-l-2 border-slate-700 pl-4">
                    <div className="text-xl md:text-2xl lg:text-3xl font-semibold text-violet-300 mb-2">
                      24/7
                    </div>
                    <div className="text-xs text-slate-300 font-medium whitespace-nowrap">
                      Coverage
                    </div>
                  </div>
                </div>
              </div>
              {/* /Metrics */}
            </div>
          </div>
          {/* /RIGHT COLUMN */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
