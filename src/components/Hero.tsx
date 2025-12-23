import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Phone, CalendarCheck, Moon, Bell, Sparkle, ShieldCheck } from "@phosphor-icons/react";

const Hero = () => {
  const navigate = useNavigate();

  const notifications = [
    {
      icon: Phone,
      title: "Water heater emergency",
      badge: "Captured",
      step: "STEP 1 — INCOMING",
      color: "amber",
    },
    {
      icon: ShieldCheck,
      title: "Same-day confirmed",
      badge: "Qualified",
      step: "STEP 2 — QUALIFIED",
      color: "blue",
    },
    {
      icon: CalendarCheck,
      title: "Thu @ 2PM • $380 approved",
      badge: "Booked",
      step: "STEP 3 — BOOKED",
      color: "emerald",
    },
    {
      icon: Bell,
      title: "You receive a new job alert",
      badge: "Notified",
      step: "STEP 4 — NOTIFIED",
      color: "purple",
    },
  ];

  const weeklyJobs = [
    { day: "M", jobs: 3 },
    { day: "T", jobs: 2 },
    { day: "W", jobs: 3 },
    { day: "T", jobs: 2 },
    { day: "F", jobs: 2 },
    { day: "S", jobs: 0, isOpen: true },
    { day: "S", jobs: 2 },
  ];

  const totalJobs = weeklyJobs.reduce((sum, day) => sum + day.jobs, 0);

  const getColorClasses = (color: string) => {
    switch (color) {
      case "amber":
        return {
          text: "text-amber-400",
          bg: "bg-amber-900/40",
          border: "border-amber-500/20",
          badge: "bg-amber-500/20",
        };
      case "blue":
        return {
          text: "text-blue-400",
          bg: "bg-blue-900/40",
          border: "border-blue-500/20",
          badge: "bg-blue-500/20",
        };
      case "emerald":
        return {
          text: "text-emerald-400",
          bg: "bg-emerald-900/40",
          border: "border-emerald-500/20",
          badge: "bg-emerald-500/20",
        };
      case "purple":
        return {
          text: "text-purple-400",
          bg: "bg-purple-900/40",
          border: "border-purple-500/20",
          badge: "bg-purple-500/20",
        };
      default:
        return {
          text: "text-slate-400",
          bg: "bg-slate-500/10",
          border: "border-slate-500/20",
          badge: "bg-slate-500/20",
        };
    }
  };

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
    <section className="relative bg-slate-950 overflow-hidden min-h-[85vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-center">
          
          {/* LEFT COLUMN */}
          <div className="w-full max-w-none md:max-w-2xl mx-auto lg:mx-0 bg-slate-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              <span className="text-white">Turn Missed Calls Into </span>
              <span className="text-brand-magenta">Booked Jobs</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              Your AI Receptionist talks to clients, qualifies them, and books appointments straight into your calendar 24/7 — even when you're busy or out living your life.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
              <button
                type="button"
                onClick={handleCTAClick}
                aria-label="Book a strategy call"
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 bg-brand-magenta text-white font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-brand-magenta/20 hover:shadow-xl hover:shadow-brand-magenta/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Book Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={scrollToHowItWorks}
                aria-label="See how our AI receptionist works"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-brand-navy font-medium px-8 py-4 text-lg rounded-full border-2 border-brand-navy hover:bg-brand-navy hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                See How It Works
                <ChevronDown className="w-4 h-4 ml-1" aria-hidden="true" />
              </button>
            </div>

            <p className="text-sm md:text-base text-slate-300 italic mb-8">
              Busy Does Not Mean Missed. Just WinStreams.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <Sparkle size={20} weight="duotone" className="text-emerald-500" />
                </div>
                <span>AI Learns Your Business</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <CalendarCheck size={20} weight="duotone" className="text-emerald-500" />
                </div>
                <span>New Leads on Your Calendar</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <Moon size={20} weight="duotone" className="text-emerald-500" />
                </div>
                <span>Books While You Sleep</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-full max-w-lg mx-auto lg:mx-0 rounded-3xl bg-slate-900/60 border border-white/10 p-8 lg:p-10 min-h-[580px] lg:min-h-[620px] flex flex-col justify-between backdrop-blur">
            <div className="space-y-6 lg:space-y-8 flex-1 flex flex-col justify-between">
              
              <div className="space-y-4">
                {notifications.map((notif, idx) => {
                  const colors = getColorClasses(notif.color);
                  const NotifIcon = notif.icon;
                  return (
                    <div
                      key={idx}
                      className={`flex items-start gap-3 rounded-2xl p-3 border ${colors.bg} ${colors.border}`}
                    >
                      <div className={`flex-shrink-0 w-8 h-8 rounded-lg ${colors.bg} flex items-center justify-center`}>
                        <NotifIcon size={18} weight="duotone" className={colors.text} aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={`text-[11px] font-semibold uppercase tracking-wide mb-0.5 ${colors.text}`}>
                          {notif.step}
                        </div>
                        <div className="text-sm text-white font-medium truncate">{notif.title}</div>
                      </div>
                      <div className={`flex-shrink-0 px-2 py-1 rounded-md text-[10px] font-bold uppercase ${colors.badge} ${colors.text}`}>
                        {notif.badge}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-slate-800/30 rounded-xl p-4">
                <div className="text-base font-semibold text-slate-200 uppercase tracking-wide mb-3">
                  NEW JOBS BOOKED BY YOUR AI
                </div>
                <div className="grid grid-cols-7 gap-2 text-center text-[11px]">
                  {weeklyJobs.map((item, idx) => (
                    <div
                      key={idx}
                      className={`flex flex-col gap-1 items-center justify-center rounded-lg px-2 py-3 ${
                        item.isOpen
                          ? "border border-dashed border-slate-600 text-slate-500"
                          : item.jobs >= 3
                          ? "bg-emerald-500/20 text-emerald-300"
                          : "bg-emerald-500/10 text-emerald-200"
                      }`}
                    >
                      <span className="text-sm font-semibold">{item.day}</span>
                      <span className="text-xs font-medium whitespace-nowrap">
                        {item.isOpen ? "Open" : `${item.jobs} Jobs`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-700">
                <div className="grid grid-cols-4 gap-4">
                  <div className="flex flex-col items-center justify-start">
                    <div className="text-xl md:text-2xl font-semibold text-amber-300/80 mb-2">{totalJobs}</div>
                    <div className="text-xs text-slate-300 font-medium whitespace-nowrap">New Jobs</div>
                  </div>

                  <div className="flex flex-col items-center justify-start border-l-2 border-slate-700 pl-4">
                    <div className="text-xl md:text-2xl font-semibold text-blue-300 mb-2">92%</div>
                    <div className="text-xs text-slate-300 font-medium whitespace-nowrap">Engaged</div>
                  </div>

                  <div className="flex flex-col items-center justify-start border-l-2 border-slate-700 pl-4">
                    <div className="text-xl md:text-2xl font-semibold text-emerald-300 mb-2">$450</div>
                    <div className="text-xs text-slate-300 font-medium whitespace-nowrap">Avg Value</div>
                  </div>

                  <div className="flex flex-col items-center justify-start border-l-2 border-slate-700 pl-4">
                    <div className="text-xl md:text-2xl font-semibold text-violet-300 mb-2">24/7</div>
                    <div className="text-xs text-slate-300 font-medium whitespace-nowrap">Coverage</div>
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