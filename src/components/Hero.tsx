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

  // Weekly jobs (Right Column)
  const weeklyJobs = [
    { id: "mon", day: "M", jobs: 3 },
    { id: "tue", day: "T", jobs: 2 },
    { id: "wed", day: "W", jobs: 3 },
    { id: "thu", day: "Th", jobs: 2 },
    { id: "fri", day: "F", jobs: 2 },
    { id: "sat", day: "S", jobs: 0, isOpen: true },
    { id: "sun", day: "S", jobs: 2 },
  ];

  // Benefits pills (Left Column)
  const benefits: Benefit[] = [
    { id: "learn", icon: Sparkle, label: "AI Learns Your Business" },
    { id: "calendar", icon: CalendarCheck, label: "New Leads on Your Calendar" },
    { id: "sleep", icon: Moon, label: "Books While You Sleep" },
  ];

  const totalJobs = weeklyJobs.reduce((sum, day) => sum + day.jobs, 0);

  // Notification color map
  const colorMap: Record<NotifColor, { text: string; bg: string; border: string; badge: string }> = {
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

  const handleCTAClick = () => {
    navigate("/book");
  };

  return (
    <section className="relative bg-slate-950 overflow-hidden py-16 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN - Hero Card */}
          <div className="w-full lg:max-w-none">
            <div className="bg-slate-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl text-center">
              {/* HEADLINE */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
                <span className="text-white">Turn Missed Calls Into </span>
                <span className="text-brand-magenta">Booked Jobs</span>
              </h1>

              {/* SUBHEAD */}
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-3xl mx-auto">
                Your AI Receptionist talks to clients, qualifies them, and books
                appointments straight into your calendar 24/7 — even when you're
                busy or out living your life.
              </p>

              {/* CTAs - Narrower on mobile */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch mb-8 max-w-lg sm:max-w-none mx-auto">
                {/* Primary CTA */}
                <button
                  type="button"
                  onClick={handleCTAClick}
                  aria-label="Book a strategy call"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-magenta px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-lg shadow-brand-magenta/20 hover:scale-105 hover:shadow-xl hover:shadow-brand-magenta/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-magenta focus:ring-offset-2 focus:ring-offset-slate-950 active:scale-95 whitespace-nowrap"
                >
                  Book Strategy Call
                  <ArrowRight
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </button>

                {/* Secondary CTA */}
                <button
                  type="button"
                  onClick={scrollToHowItWorks}
                  aria-label="See how our AI receptionist works"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand-navy bg-white text-brand-navy px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-medium hover:bg-brand-navy hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-slate-950 whitespace-nowrap"
                >
                  How It Works
                  <ChevronDown className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>

              {/* Tagline */}
              <p className="text-slate-400 italic text-base mb-8">
                Busy Does Not Mean Missed. Just WinStreams.
              </p>

              {/* Benefits Pills - 2 on top row, 1 on bottom */}
              <div className="flex flex-col items-center gap-3">
                {/* Top row - 2 pills */}
                <div className="flex flex-wrap justify-center gap-3">
                  <div className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2.5 border border-white/10">
                    <div className="w-8 h-8 rounded-full bg-brand-magenta/20 flex items-center justify-center flex-shrink-0">
                      <Sparkle size={18} weight="duotone" className="text-brand-magenta" />
                    </div>
                    <span className="text-sm text-slate-300 font-medium whitespace-nowrap">AI Learns Your Business</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2.5 border border-white/10">
                    <div className="w-8 h-8 rounded-full bg-brand-magenta/20 flex items-center justify-center flex-shrink-0">
                      <Moon size={18} weight="duotone" className="text-brand-magenta" />
                    </div>
                    <span className="text-sm text-slate-300 font-medium whitespace-nowrap">Books While You Sleep</span>
                  </div>
                </div>
                {/* Bottom row - 1 pill */}
                <div className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2.5 border border-white/10">
                  <div className="w-8 h-8 rounded-full bg-brand-magenta/20 flex items-center justify-center flex-shrink-0">
                    <CalendarCheck size={18} weight="duotone" className="text-brand-magenta" />
                  </div>
                  <span className="text-sm text-slate-300 font-medium whitespace-nowrap">New Leads on Your Calendar</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Dashboard */}
          <div className="w-full lg:max-w-none rounded-3xl bg-slate-900/60 border border-white/10 p-6 sm:p-8 lg:p-10 min-h-[580px] lg:min-h-[620px] flex flex-col justify-between backdrop-blur md:shadow-2xl">
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

                <div className="grid grid-cols-7 gap-1.5 sm:gap-2 text-center text-[11px]">
                  {weeklyJobs.map((item) => (
                    <div
                      key={item.id}
                      className={`flex flex-col gap-1 items-center justify-center rounded-lg px-1 sm:px-2 py-3 ${
                        item.isOpen
                          ? "border border-dashed border-slate-600 text-slate-500"
                          : item.jobs >= 3
                          ? "bg-emerald-500/20 text-emerald-300"
                          : "bg-emerald-500/10 text-emerald-200"
                      }`}
                    >
                      <span className="text-[13px] font-semibold">{item.day}</span>
                      <span className="text-xs font-medium whitespace-nowrap">
                        {item.isOpen ? "Open" : item.jobs}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics row */}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;