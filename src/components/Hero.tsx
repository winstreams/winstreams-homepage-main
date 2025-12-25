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

  const weeklyJobs = [
    { id: "mon", day: "M", jobs: 3 },
    { id: "tue", day: "T", jobs: 2 },
    { id: "wed", day: "W", jobs: 3 },
    { id: "thu", day: "Th", jobs: 2 },
    { id: "fri", day: "F", jobs: 2 },
    { id: "sat", day: "S", jobs: 0, isOpen: true },
    { id: "sun", day: "S", jobs: 2 },
  ];

  const benefits: Benefit[] = [
    { id: "learn", icon: Sparkle, label: "AI Learns Your Business" },
    { id: "calendar", icon: CalendarCheck, label: "New Leads on Your Calendar" },
    { id: "sleep", icon: Moon, label: "Books While You Sleep" },
  ];

  const totalJobs = weeklyJobs.reduce((sum, d) => sum + d.jobs, 0);

  const colorMap: Record<
    NotifColor,
    { text: string; bg: string; border: string; badge: string }
  > = {
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
  };

  const scrollToHowItWorks = () => {
    const el = document.getElementById("how-it-works");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleCTAClick = () => navigate("/book");

  return (
    <section className="relative bg-slate-950 overflow-hidden py-14 sm:py-16 lg:py-24 overflow-x-clip">
      {/* Mobile width safety: px-4 + overflow-x-clip prevents any stray overflow */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Make both columns match height on desktop */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center lg:items-stretch">
          {/* LEFT COLUMN */}
          <div className="w-full h-full">
            <div className="h-full rounded-2xl bg-slate-900/40 backdrop-blur-sm border border-white/10 shadow-xl text-center p-5 sm:p-8 lg:p-10 flex flex-col">
              {/* HEADLINE */}
              <h1 className="mx-auto max-w-[18ch] sm:max-w-none text-[2rem] sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.15] tracking-tight mb-5">
                <span className="text-white">Turn Missed Calls Into </span>
                <span className="text-brand-magenta">Booked Jobs</span>
              </h1>

              {/* SUBHEAD */}
              <p className="text-[15px] sm:text-base lg:text-xl text-slate-300/90 leading-[1.65] md:leading-relaxed mb-7 max-w-[46ch] sm:max-w-2xl mx-auto">
                Your AI Receptionist talks to clients, qualifies them, and books
                appointments straight into your calendar 24/7 — even when you're
                busy or out living your life.
              </p>

              {/* CTAs (mobile width tightened to match Services “feel”) */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:w-full sm:max-w-xl sm:mx-auto">
                <button
                  type="button"
                  onClick={handleCTAClick}
                  aria-label="Book a strategy call"
                  className="w-full max-w-[360px] sm:max-w-none sm:flex-1 sm:min-w-0 group inline-flex items-center justify-center gap-2 rounded-full bg-brand-magenta px-7 py-3.5 md:px-8 md:py-4 text-base md:text-lg font-semibold text-white shadow-lg shadow-brand-magenta/20 transition-all duration-300 active:scale-95 md:hover:scale-105 md:hover:shadow-xl md:hover:shadow-brand-magenta/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  Book Strategy Call
                  <ArrowRight
                    className="w-5 h-5 md:group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </button>

                <button
                  type="button"
                  onClick={scrollToHowItWorks}
                  aria-label="See how our AI receptionist works"
                  className="w-full max-w-[360px] sm:max-w-none sm:flex-1 sm:min-w-0 inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand-navy bg-white text-brand-navy px-7 py-3.5 md:px-8 md:py-4 text-base md:text-lg font-semibold transition-all duration-300 active:scale-95 md:hover:bg-brand-navyLight md:hover:text-white md:hover:border-brand-navyLight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  How It Works
                  <ChevronDown className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>

              <p className="text-sm md:text-base text-slate-300 italic mb-6">
                Busy Does Not Mean Missed. Just WinStreams.
              </p>

              {/* BENEFIT PILLS (Services-style: centered label, correct sizing, no nowrap overflow) */}
              <div className="mt-auto">
                <div className="mx-auto w-full max-w-[420px] sm:max-w-none flex flex-col sm:flex-row sm:flex-wrap justify-center items-stretch gap-3">
                  {benefits.map((b) => {
                    const BenefitIcon = b.icon;
                    return (
                      <div
                        key={b.id}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-white/5 border border-white/10 px-5 py-3"
                      >
                        <span className="flex-shrink-0 w-9 h-9 rounded-full bg-brand-magenta/15 flex items-center justify-center">
                          <BenefitIcon
                            size={18}
                            weight="duotone"
                            className="text-brand-magenta"
                            aria-hidden="true"
                          />
                        </span>
                        <span className="text-[13px] sm:text-sm text-slate-200 font-medium leading-snug text-center">
                          {b.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-full h-full rounded-3xl bg-slate-900/60 border border-white/10 p-5 sm:p-8 lg:p-10 flex flex-col justify-between backdrop-blur md:shadow-2xl">
            <div className="space-y-6 lg:space-y-8 flex-1 flex flex-col justify-between">
              {/* NOTIFICATIONS STACK (badge vertically centered + crisper icons) */}
              <div className="space-y-4">
                {notifications.map((n) => {
                  const colors = colorMap[n.color];
                  const NotifIcon = n.icon;

                  return (
                    <div
                      key={n.id}
                      className={`flex items-center gap-3 rounded-2xl p-3 border ${colors.bg} ${colors.border}`}
                    >
                      <div
                        className={`flex-shrink-0 w-9 h-9 rounded-lg ${colors.bg} flex items-center justify-center`}
                      >
                        {/* Crisper than duotone at 18px */}
                        <NotifIcon
                          size={20}
                          weight="regular"
                          className={colors.text}
                          aria-hidden="true"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div
                          className={`text-[11px] font-semibold uppercase tracking-wide mb-0.5 ${colors.text}`}
                        >
                          {n.step}
                        </div>
                        <div className="text-sm text-white font-medium truncate">
                          {n.title}
                        </div>
                      </div>

                      {/* Badge centered vertically */}
                      <div
                        className={`self-center flex-shrink-0 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase ${colors.badge} ${colors.text}`}
                      >
                        {n.badge}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* WEEKLY STATS */}
              <div className="bg-slate-800/30 rounded-xl p-4 sm:p-5">
                <div className="text-base font-semibold text-slate-200 uppercase tracking-wide mb-4">
                  NEW JOBS BOOKED BY YOUR AI
                </div>

                <div className="grid grid-cols-7 gap-2 sm:gap-2.5 text-center">
                  {weeklyJobs.map((item) => (
                    <div
                      key={item.id}
                      className={`flex flex-col gap-1.5 items-center justify-center rounded-lg px-1.5 sm:px-2.5 py-3.5 sm:py-4 ${
                        item.isOpen
                          ? "border border-dashed border-slate-600 text-slate-500"
                          : item.jobs >= 3
                          ? "bg-emerald-500/20 text-emerald-300"
                          : "bg-emerald-500/10 text-emerald-200"
                      }`}
                    >
                      <span className="text-sm sm:text-[15px] font-semibold">
                        {item.day}
                      </span>
                      <span className="text-xs sm:text-[13px] font-medium">
                        {item.isOpen ? "Open" : item.jobs}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* METRICS (tighten “14” spacing without crushing dividers) */}
              <div className="mt-6 pt-6 border-t border-slate-700">
                <div className="grid grid-cols-4 gap-2">
                  <div className="flex flex-col items-center justify-start">
                    <div className="text-xl md:text-2xl lg:text-3xl font-semibold text-amber-300/80 mb-2">
                      {totalJobs}
                    </div>
                    <div className="text-xs text-slate-300 font-medium whitespace-nowrap">
                      New Jobs
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-start border-l-2 border-slate-700 pl-2">
                    <div className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-300 mb-2">
                      92%
                    </div>
                    <div className="text-xs text-slate-300 font-medium whitespace-nowrap">
                      Engaged
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-start border-l-2 border-slate-700 pl-2">
                    <div className="text-xl md:text-2xl lg:text-3xl font-semibold text-emerald-300 mb-2">
                      $450
                    </div>
                    <div className="text-xs text-slate-300 font-medium whitespace-nowrap">
                      Avg Value
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-start border-l-2 border-slate-700 pl-2">
                    <div className="text-xl md:text-2xl lg:text-3xl font-semibold text-violet-300 mb-2">
                      24/7
                    </div>
                    <div className="text-xs text-slate-300 font-medium whitespace-nowrap">
                      Coverage
                    </div>
                  </div>
                </div>
              </div>
              {/* end metrics */}
            </div>
          </div>
          {/* end right */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
