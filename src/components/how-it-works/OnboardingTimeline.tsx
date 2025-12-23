import React from 'react';
import { Phone, BrainCircuit, Radio, TrendingUp, Check, Trophy, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function OnboardingTimeline() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
            Your First Week with WinStreams
          </h2>
          <p className="text-lg md:text-xl text-slate-600">
            From setup to revenue in just 7 days
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-3xl mx-auto">
          
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 top-20 bottom-32 w-0.5 bg-gradient-to-b from-slate-300 via-slate-300 to-slate-200 opacity-60 z-0" />

          {/* Timeline Nodes */}
          <div className="absolute left-6 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-brand-magenta/20 shadow-sm z-10" style={{ top: '28%' }} />
          <div className="absolute left-6 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-brand-magenta/20 shadow-sm z-10" style={{ top: '52%' }} />
          <div className="absolute left-6 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-brand-magenta/20 shadow-sm z-10" style={{ top: '76%' }} />

          {/* Day Cards */}
          <div className="space-y-12 md:space-y-16">

            {/* DAY 1 - Kickoff Call */}
            <div className="group flex flex-col rounded-3xl bg-white border border-slate-200 p-6 md:p-8 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-brand-magenta/30 transition-all duration-300 relative z-10">
              
              {/* Icon Badge - Blue */}
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-sm mb-4">
                <Phone className="w-7 h-7 text-blue-600" strokeWidth={2} />
              </div>

              {/* Day Label */}
              <span className="text-xs font-bold uppercase tracking-wide text-brand-magenta mb-3">Day 1</span>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3 leading-snug">
                Kickoff Call
              </h3>

              {/* Body Text */}
              <p className="text-base text-slate-600 leading-relaxed mb-6 flex-grow">
                We identify your bottlenecks and map the fastest path to converting callers into revenue.
              </p>

              {/* Outcome Row */}
              <div className="mt-6 space-y-3 border-t border-slate-100 pt-4">
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-sm text-emerald-700">Your custom flow is documented</span>
                </div>
              </div>

            </div>

            {/* DAY 3 - AI Training */}
            <div className="group flex flex-col rounded-3xl bg-white border border-slate-200 p-6 md:p-8 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-brand-magenta/30 transition-all duration-300 relative z-10">
              
              {/* Icon Badge - Purple */}
              <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center shadow-sm mb-4">
                <BrainCircuit className="w-7 h-7 text-purple-600" strokeWidth={2} />
              </div>

              {/* Day Label */}
              <span className="text-xs font-bold uppercase tracking-wide text-brand-magenta mb-3">Day 3</span>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3 leading-snug">
                Your AI Learns Your Business
              </h3>

              {/* Body Text */}
              <p className="text-base text-slate-600 leading-relaxed mb-6 flex-grow">
                The AI learns your voice, pricing, and service offerings.
              </p>

              {/* Outcome Row */}
              <div className="mt-6 space-y-3 border-t border-slate-100 pt-4">
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-sm text-emerald-700">AI trained on your services & pricing</span>
                </div>
              </div>

            </div>

            {/* DAY 5 - Go Live */}
            <div className="group flex flex-col rounded-3xl bg-white border border-slate-200 p-6 md:p-8 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-brand-magenta/30 transition-all duration-300 relative z-10">
              
              {/* Icon Badge - Emerald */}
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shadow-sm mb-4">
                <Radio className="w-7 h-7 text-emerald-600" strokeWidth={2} />
              </div>

              {/* Day Label with Live Indicator */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-wide text-brand-magenta">Day 5</span>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3 leading-snug">
                Your Line Goes Live
              </h3>

              {/* Body Text */}
              <p className="text-base text-slate-600 leading-relaxed mb-6 flex-grow">
                Your WinStreams line switches on. From here on, every caller gets answered—24/7.
              </p>

              {/* Outcome Row */}
              <div className="mt-6 space-y-3 border-t border-slate-100 pt-4">
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-sm text-emerald-700">Live and capturing calls 24/7</span>
                </div>
              </div>

            </div>

            {/* DAY 7 - Performance Dashboard Live */}
            <div className="group flex flex-col rounded-3xl bg-white border border-slate-200 p-6 md:p-8 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-brand-magenta/30 transition-all duration-300 relative z-10">
              
              {/* Icon Badge - Pink */}
              <div className="w-12 h-12 rounded-2xl bg-pink-50 border border-pink-100 flex items-center justify-center shadow-sm mb-4">
                <TrendingUp className="w-7 h-7 text-pink-600" strokeWidth={2} />
              </div>

              {/* Day Label */}
              <span className="text-xs font-bold uppercase tracking-wide text-brand-magenta mb-3">Day 7</span>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3 leading-snug">
                Your First Week Report
              </h3>

              {/* Body Text */}
              <p className="text-base text-slate-600 leading-relaxed mb-6 flex-grow">
                We walk through your first week of results: calls captured, booked jobs, response times, and revenue lift.
              </p>

              {/* Outcome Row */}
              <div className="mt-6 space-y-3 border-t border-slate-100 pt-4">
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-sm text-emerald-700">First-week dashboard is ready</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Achievement Banner */}
        <div className="mt-20 max-w-5xl mx-auto relative overflow-hidden rounded-3xl border border-brand-magenta/20 bg-gradient-to-br from-white via-pink-50/50 to-purple-50/30 shadow-xl shadow-brand-magenta/10 backdrop-blur-sm">
          
          <div className="p-8 md:p-10">
            
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              
              {/* Icon with Hover Animation */}
              <div className="flex-shrink-0 group">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-brand-magenta/15 to-purple-100 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <Trophy className="w-10 h-10 text-brand-magenta" strokeWidth={2} />
                </div>
              </div>

              {/* Copy */}
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-2 leading-tight">
                  Your AI Receptionist Is Live — Most Clients See Their First Booked Job Within <span className="text-brand-magenta">48 Hours</span> of Going Live
                </h3>
                <p className="text-base md:text-lg text-slate-600">
                  No more missed calls. No more dead voicemail boxes. Every lead gets captured, qualified, and scheduled—automatically.
                </p>
              </div>

              {/* CTA Button */}
              <div className="flex-shrink-0">
                <Link 
                  to="/book"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-brand-magenta bg-white px-6 py-3 text-sm font-semibold text-brand-magenta hover:bg-brand-magenta hover:text-white hover:shadow-lg transition-all duration-300 whitespace-nowrap"
                >
                  Book a Quick Demo
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
