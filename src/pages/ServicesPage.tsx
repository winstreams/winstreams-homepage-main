import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight as LucideArrowRight, PhoneIncoming, MessageSquare, Star as LucideStar, TrendingUp } from "lucide-react";
import {
  Funnel,
  BellRinging,
  Waveform,
  Phone,
  CalendarCheck,
  BellRinging as BellRing,
  ClockCounterClockwise,
} from "@phosphor-icons/react";
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// ==================== COMPONENT ====================

// ==================== DATA ARRAYS ====================

// ==================== FAQ DATA ====================

const faqItems = [
  {
    question: "Can I keep my current phone number?",
    answer:
      "Yes. We use call forwarding so your existing number stays the same. Setup takes a few minutes and you can switch back anytime.",
  },
  {
    question: "Does it sound robotic?",
    answer:
      "No. We use a natural sounding voice and match your brand tone: professional, friendly, or casual. Most callers assume they're talking to a receptionist.",
  },
  {
    question: "How does your AI receptionist actually work?",
    answer:
      "When someone calls, our AI answers immediately, qualifies the lead based on your rules, and either books them into your calendar or transfers the call. You get a text summary of every conversation.",
  },
  {
    question: "What types of businesses is this best for?",
    answer:
      "Service businesses that book by phone: home services, med spas, salons, dental, contractors, cleaners, and property managers.",
  },
  {
    question: "What happens if the AI gets stuck?",
    answer:
      "If it hits something unexpected, it follows your escalation rules: transfer to you, take a detailed message, or schedule a callback.",
  },
  {
    question: "Is there a contract?",
    answer:
      "No long-term contract. We work month-to-month with a simple cancellation window. Most clients stay because they're booking more jobs.",
  },
];

// ==================== COMPONENT ====================

export function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* SECTION 1: HERO - Dark with Frosted Panel */}
      <section className="relative bg-slate-950 overflow-hidden py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6">
          {/* Frosted Glass Panel */}
          <div className="bg-slate-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl text-center">
            {/* HEADLINE */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              <span className="text-white">Your AI Receptionist & Booking System, </span>
              <span className="text-brand-magenta">Done For You.</span>
            </h1>

            {/* SUBHEAD */}
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-3xl mx-auto">
              WinStreams answers every missed call, qualifies real jobs, and books them straight into your calendar—plus
              we help you boost your website, outreach, and operations for even more conversions.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              {/* Primary CTA */}
              <Link
                to="/book"
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 rounded-full bg-brand-magenta px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-brand-magenta/20 hover:scale-105 hover:shadow-xl hover:shadow-brand-magenta/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-magenta focus:ring-offset-2 focus:ring-offset-slate-950 active:scale-95"
              >
                Book Strategy Call
                <LucideArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Secondary CTA */}
              <button
                onClick={() => document.getElementById("core-offer")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand-navy text-white px-8 py-4 text-lg font-medium hover:bg-brand-navy hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                See How It Works
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>

            {/* Tagline */}
            <p className="text-slate-400 italic text-base mb-8">Busy Does Not Mean Missed. Just WinStreams.</p>

            {/* Trust Indicators - Badge Row */}
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
              <div className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                <div className="w-8 h-8 rounded-full bg-brand-magenta/20 flex items-center justify-center flex-shrink-0">
                  <ClockCounterClockwise size={18} weight="duotone" className="text-brand-magenta" />
                </div>
                <span className="text-sm text-slate-300 font-medium">Take Back Your Time — One Call at a Time</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                <div className="w-8 h-8 rounded-full bg-brand-magenta/20 flex items-center justify-center flex-shrink-0">
                  <BellRinging size={18} weight="duotone" className="text-brand-magenta" />
                </div>
                <span className="text-sm text-slate-300 font-medium">Stay Focused Without Constant Interruptions</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                <div className="w-8 h-8 rounded-full bg-brand-magenta/20 flex items-center justify-center flex-shrink-0">
                  <Waveform size={18} weight="duotone" className="text-brand-magenta" />
                </div>
                <span className="text-sm text-slate-300 font-medium">Let AI Handle the Noise So You Don't Have To</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* CENTERED HEADER */}
          <div className="text-center mb-16">
            {/* Pill */}
            <div className="inline-flex items-center rounded-full bg-emerald-50 border border-emerald-200 px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold tracking-wide text-emerald-700 uppercase">
                Core Infrastructure
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              Your AI Receptionist & Booking System
            </h2>

            {/* Subhead */}
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Watch how WinStreams captures leads, filters noise, and books jobs—then see the results operators get in their first month.
            </p>
          </div>

          {/* TWO-COLUMN GRID: Process Flow + Live Example */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
            {/* LEFT COLUMN: How System Works */}
            <div>
              <div className="text-center lg:text-left mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-2">
                  How We Handle Your Calls
                </h3>
                <p className="text-base md:text-lg text-slate-600">
                  Calm, professional responses for every caller—while you stay focused on the work in front of you.
                </p>
              </div>

              <div className="space-y-6">
                {/* STEP 1 - BLUE */}
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Phone size={20} weight="duotone" className="text-blue-600" />
                  </div>
                  <div className="rounded-2xl border border-blue-100 bg-blue-50/30 p-6">
                    <div className="text-xs font-semibold tracking-wide text-blue-600 uppercase mb-2">
                      Step 1
                    </div>
                    <h4 className="text-lg font-bold text-brand-navy mb-2">
                      Call Captured Instantly
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Your WinStreams line picks up in 1-2 rings while you stay focused on the job at hand.
                    </p>
                  </div>
                </div>

                {/* STEP 2 - EMERALD */}
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <Funnel size={20} weight="duotone" className="text-emerald-600" />
                  </div>
                  <div className="rounded-2xl border border-emerald-100 bg-emerald-50/30 p-6">
                    <div className="text-xs font-semibold tracking-wide text-emerald-600 uppercase mb-2">
                      Step 2
                    </div>
                    <h4 className="text-lg font-bold text-brand-navy mb-2">
                      Lead Qualified in Real-Time
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      AI asks the right questions to separate real jobs from spam, tire-kickers, and wrong numbers.
                    </p>
                  </div>
                </div>

                {/* STEP 3 - PURPLE */}
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                    <CalendarCheck size={20} weight="duotone" className="text-purple-600" />
                  </div>
                  <div className="rounded-2xl border border-purple-100 bg-purple-50/30 p-6">
                    <div className="text-xs font-semibold tracking-wide text-purple-600 uppercase mb-2">
                      Step 3
                    </div>
                    <h4 className="text-lg font-bold text-brand-navy mb-2">
                      Job Booked to Calendar
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Qualified leads pick their time, and WinStreams adds it to your calendar with all job details.
                    </p>
                  </div>
                </div>

                {/* STEP 4 - PINK */}
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center">
                    <BellRing size={20} weight="duotone" className="text-pink-600" />
                  </div>
                  <div className="rounded-2xl border border-pink-100 bg-pink-50/30 p-6">
                    <div className="text-xs font-semibold tracking-wide text-pink-600 uppercase mb-2">
                      Step 4
                    </div>
                    <h4 className="text-lg font-bold text-brand-navy mb-2">
                      You Get Instant Summary
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Receive a text with who called, what they need, and when you're scheduled—no voicemail to check.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Live Call Example */}
            <div>
              <div className="text-center lg:text-left mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-2">
                  Live Call Flow Example
                </h3>
                <p className="text-base md:text-lg text-slate-600">
                  From ring to booking in 4 minutes
                </p>
              </div>

              <div className="max-w-xl mx-auto lg:mx-0 space-y-4 mt-2">
                {/* CALL STEP 1 - BLUE */}
                <div className="rounded-2xl bg-white border-l-4 border-blue-500 shadow-sm p-5 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-sm text-slate-500">12:34 PM · Incoming Call</span>
                    <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-semibold uppercase">
                      Captured
                    </span>
                  </div>
                  <div className="font-semibold text-lg md:text-xl text-brand-navy mb-1">
                    "Water heater emergency"
                  </div>
                  <div className="text-sm text-slate-600 italic">
                    Call answered in 2 rings
                  </div>
                </div>

                {/* CALL STEP 2 - EMERALD */}
                <div className="rounded-2xl bg-white border-l-4 border-emerald-500 shadow-sm p-5 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-sm text-slate-500">12:35 PM · Qualifying</span>
                    <span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-xs font-semibold uppercase">
                      Qualified
                    </span>
                  </div>
                  <div className="font-semibold text-lg md:text-xl text-brand-navy mb-1">
                    "Same-day service needed"
                  </div>
                  <div className="text-sm text-slate-600 italic">
                    Job type confirmed, zip code verified
                  </div>
                </div>

                {/* CALL STEP 3 - PURPLE */}
                <div className="rounded-2xl bg-white border-l-4 border-purple-500 shadow-sm p-5 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-sm text-slate-500">12:37 PM · Booking</span>
                    <span className="inline-flex items-center rounded-full bg-purple-50 text-purple-700 px-3 py-1 text-xs font-semibold uppercase">
                      Booked
                    </span>
                  </div>
                  <div className="font-semibold text-lg md:text-xl text-brand-navy mb-1">
                    Thu, Dec 7 @ 2:00 PM
                  </div>
                  <div className="text-sm text-slate-600 italic">
                    $380 job approved
                  </div>
                </div>

                {/* CALL STEP 4 - PINK */}
                <div className="rounded-2xl bg-white border-l-4 border-pink-500 shadow-sm p-5 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-sm text-slate-500">12:38 PM · Notification</span>
                    <span className="inline-flex items-center rounded-full bg-pink-50 text-pink-700 px-3 py-1 text-xs font-semibold uppercase">
                      Sent
                    </span>
                  </div>
                  <div className="font-semibold text-lg md:text-xl text-brand-navy mb-1">
                    "New job: Water heater replacement"
                  </div>
                  <div className="text-sm text-slate-600 italic">
                    SMS + email summary delivered
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* METRICS ROW */}
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-brand-navy mb-10 text-center">
              Operators who switch see <span className="text-brand-magenta">serious results</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {/* METRIC 1 */}
              <div className="rounded-3xl bg-blue-50 border border-blue-100 px-6 py-10 text-center hover:shadow-md transition-shadow duration-200">
                <div className="text-4xl md:text-5xl font-bold text-brand-navy mb-2">
                  7× ROI
                </div>
                <div className="text-base text-slate-600">
                  Average return on investment
                </div>
              </div>

              {/* METRIC 2 */}
              <div className="rounded-3xl bg-pink-50 border border-pink-100 px-6 py-10 text-center hover:shadow-md transition-shadow duration-200">
                <div className="text-4xl md:text-5xl font-bold text-brand-navy mb-2">
                  20% More
                </div>
                <div className="text-base text-slate-600">
                  Booked appointments in first month
                </div>
              </div>

              {/* METRIC 3 */}
              <div className="rounded-3xl bg-emerald-50 border border-emerald-100 px-6 py-10 text-center hover:shadow-md transition-shadow duration-200">
                <div className="text-4xl md:text-5xl font-bold text-brand-navy mb-2">
                  90% Fewer
                </div>
                <div className="text-base text-slate-600">
                  Missed calls after installation
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: LEAD CAPTURE & AUTOMATION SERVICES - 2×2 PREMIUM GRID */}
      <section id="core-offer" className="py-20 md:py-28 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* SECTION HEADER */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-brand-navy mb-6 tracking-tight leading-tight">
              Lead Capture & Automation Services
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Four focused services that capture more leads, fix call handling, and automate follow-up—
              turning more of your inquiries into booked jobs.
            </p>
          </div>

          {/* 2×2 GRID LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">

            {/* SERVICE 1: Call Flow & Lead Capture Audit */}
            <div className="flex flex-col rounded-3xl bg-white border border-slate-200 shadow-sm p-6 sm:p-8 md:p-10 hover:-translate-y-1 hover:shadow-lg hover:border-brand-magenta/30 transition-all duration-300 group h-full">
              {/* Header: Icon + Title + Subhead */}
              <div className="flex items-start gap-5 mb-8">
                <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                  <PhoneIncoming className="w-7 h-7 text-blue-600" strokeWidth={2} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-2">
                    Call Flow & Lead Capture Audit
                  </h3>
                  <p className="text-base font-semibold text-slate-700">
                    Find where leads slip away.
                  </p>
                </div>
              </div>

              {/* Pricing + Bullets */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 border-b border-slate-100 pb-8">
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-brand-navy mb-2">$149</div>
                  <div className="text-sm text-slate-500">one-time audit</div>
                  <div className="text-xs text-slate-400 mt-1">Credited back if upgrading within 30 days</div>
                </div>
                <ul className="space-y-2.5 md:space-y-3 list-none">
                  <li className="flex items-start gap-2.5 text-sm md:text-base text-slate-600">
                    <span className="text-brand-magenta font-bold mt-1 text-lg leading-none">•</span>
                    <span>Secret shopper test calls to your business</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm md:text-base text-slate-600">
                    <span className="text-brand-magenta font-bold mt-1 text-lg leading-none">•</span>
                    <span>Missed-call & voicemail handling review</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm md:text-base text-slate-600">
                    <span className="text-brand-magenta font-bold mt-1 text-lg leading-none">•</span>
                    <span>Action plan with top 3 revenue-impact fixes</span>
                  </li>
                </ul>
              </div>

              {/* Body + CTA */}
              <p className="text-base text-slate-600 leading-relaxed mb-8 flex-grow">
                We analyze your calls, voicemail, and lead handling to uncover revenue leaks and show you the exact fixes.
              </p>
              <div className="mt-auto pt-6 border-t border-slate-100">
                <Link
                  to="/call-flow-audit"
                  className="group inline-flex items-center gap-2 text-base font-semibold text-brand-magenta hover:text-brand-magentaDark transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta/30 focus-visible:rounded"
                  aria-label="Learn more about Call Flow & Lead Capture Audit"
                >
                  Learn More
                  <LucideArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2} aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* SERVICE 2: AI Messaging Optimization */}
            <div className="flex flex-col rounded-3xl bg-white border border-slate-200 shadow-sm p-6 sm:p-8 md:p-10 hover:-translate-y-1 hover:shadow-lg hover:border-brand-magenta/30 transition-all duration-300 group h-full">
              <div className="flex items-start gap-5 mb-8">
                <div className="w-14 h-14 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-7 h-7 text-purple-600" strokeWidth={2} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-2">
                    AI Messaging Optimization
                  </h3>
                  <p className="text-base font-semibold text-slate-700">
                    Turn messages into bookings.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 border-b border-slate-100 pb-8">
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-brand-navy mb-2">$199</div>
                  <div className="text-sm text-slate-500">one-time setup</div>
                </div>
                <ul className="space-y-2.5 md:space-y-3 list-none">
                  <li className="flex items-start gap-2.5 text-sm md:text-base text-slate-600">
                    <span className="text-brand-magenta font-bold mt-1 text-lg leading-none">•</span>
                    <span>Rewrite of key SMS, email, and DM scripts</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm md:text-base text-slate-600">
                    <span className="text-brand-magenta font-bold mt-1 text-lg leading-none">•</span>
                    <span>AI-ready message variants for your receptionist</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm md:text-base text-slate-600">
                    <span className="text-brand-magenta font-bold mt-1 text-lg leading-none">•</span>
                    <span>No-show reduction and follow-up flows</span>
                  </li>
                </ul>
              </div>

              <p className="text-base text-slate-600 leading-relaxed mb-8 flex-grow">
                We rewrite your messaging so prospects respond faster, stop disappearing, and book more—optimized for human and AI delivery.
              </p>
              <div className="mt-auto pt-6 border-t border-slate-100">
                <Link
                  to="/services/ai-messaging-optimization"
                  className="group inline-flex items-center gap-2 text-base font-semibold text-brand-magenta hover:text-brand-magentaDark transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta/30 focus-visible:rounded"
                  aria-label="Learn more about AI Messaging Optimization"
                >
                  Learn More
                  <LucideArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2} aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* SERVICE 3: AI Review Booster System */}
            <div className="flex flex-col rounded-3xl bg-white border border-slate-200 shadow-sm p-6 sm:p-8 md:p-10 hover:-translate-y-1 hover:shadow-lg hover:border-brand-magenta/30 transition-all duration-300 group h-full">
              <div className="flex items-start gap-5 mb-8">
                <div className="w-14 h-14 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center flex-shrink-0">
                  <LucideStar className="w-7 h-7 text-pink-600" strokeWidth={2} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-2">
                    AI Review Booster System
                  </h3>
                  <p className="text-base font-semibold text-slate-700">
                    Collect more 5-star reviews, automatically.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 border-b border-slate-100 pb-8">
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-brand-navy mb-2">$79</div>
                  <div className="text-sm text-slate-500">per month</div>
                </div>
                <ul className="space-y-2.5 md:space-y-3 list-none">
                  <li className="flex items-start gap-2.5 text-sm md:text-base text-slate-600">
                    <span className="text-brand-magenta font-bold mt-1 text-lg leading-none">•</span>
                    <span>Automated review request flows</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm md:text-base text-slate-600">
                    <span className="text-brand-magenta font-bold mt-1 text-lg leading-none">•</span>
                    <span>Smart timing triggers & personalized follow-ups</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm md:text-base text-slate-600">
                    <span className="text-brand-magenta font-bold mt-1 text-lg leading-none">•</span>
                    <span>Negative review filtering with simple weekly insights</span>
                  </li>
                </ul>
              </div>

              <p className="text-base text-slate-600 leading-relaxed mb-8 flex-grow">
                Review requests go out at the perfect time, with unhappy customers routed privately before they hit your public profiles.
              </p>
              <div className="mt-auto pt-6 border-t border-slate-100">
                <Link
                  to="/services/review-booster"
                  className="group inline-flex items-center gap-2 text-base font-semibold text-brand-magenta hover:text-brand-magentaDark transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta/30 focus-visible:rounded"
                  aria-label="Learn more about AI Review Booster System"
                >
                  Learn More
                  <LucideArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2} aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* SERVICE 4: Website & Form Conversion Audit */}
            <div className="flex flex-col rounded-3xl bg-white border border-slate-200 shadow-sm p-6 sm:p-8 md:p-10 hover:-translate-y-1 hover:shadow-lg hover:border-brand-magenta/30 transition-all duration-300 group h-full">
              <div className="flex items-start gap-5 mb-8">
                <div className="w-14 h-14 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-7 h-7 text-emerald-600" strokeWidth={2} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-2">
                    Website & Form Conversion Audit
                  </h3>
                  <p className="text-base font-semibold text-slate-700">
                    Get more leads from existing traffic.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 border-b border-slate-100 pb-8">
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-brand-navy mb-2">$129</div>
                  <div className="text-sm text-slate-500">one-time audit</div>
                </div>
                <ul className="space-y-2.5 md:space-y-3 list-none">
                  <li className="flex items-start gap-2.5 text-sm md:text-base text-slate-600">
                    <span className="text-brand-magenta font-bold mt-1 text-lg leading-none">•</span>
                    <span>Homepage and key landing page audit</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm md:text-base text-slate-600">
                    <span className="text-brand-magenta font-bold mt-1 text-lg leading-none">•</span>
                    <span>Form UX and copy review</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm md:text-base text-slate-600">
                    <span className="text-brand-magenta font-bold mt-1 text-lg leading-none">•</span>
                    <span>Quick-win recommendations you can implement fast</span>
                  </li>
                </ul>
              </div>

              <p className="text-base text-slate-600 leading-relaxed mb-8 flex-grow">
                We review your pages and forms to remove friction, improve clarity, and increase conversions—without needing new ad spend.
              </p>
              <div className="mt-auto pt-6 border-t border-slate-100">
                <Link
                  to="/services/web-conversion-audit"
                  className="group inline-flex items-center gap-2 text-base font-semibold text-brand-magenta hover:text-brand-magentaDark transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta/30 focus-visible:rounded"
                  aria-label="Learn more about Website & Form Conversion Audit"
                >
                  Learn More
                  <LucideArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2} aria-hidden="true" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 mb-4">
              Common Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our services
            </p>
          </div>

          {/* Micro-CTA */}
          <div className="mb-8 p-5 bg-gradient-to-r from-blue-50 to-magenta-50 border border-magenta-100 rounded-xl">
            <p className="text-sm text-navy-900 mb-3">
              <span className="font-semibold text-base">Can't find what you need?</span>
              <br />
              <span className="text-gray-600">Our team responds within 2 hours.</span>
            </p>
            <Link
              to="/contact"
              className="text-magenta-600 font-semibold text-sm hover:text-magenta-700 transition-colors flex items-center gap-2"
            >
              Start Conversation
              <LucideArrowRight size={16} />
            </Link>
          </div>

          {/* Accordion */}
          <Accordion defaultValue="item-0" type="single" collapsible className="space-y-4">
            {faqItems.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="border border-gray-200 rounded-xl px-6 bg-white hover:border-magenta-200 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-bold text-navy-900 hover:text-magenta-600 py-5 hover:no-underline">
                  <span className="pr-4">
                    {faq.question}
                    {index === 0 && (
                      <span className="ml-3 px-2 py-1 bg-magenta-50 text-magenta-600 text-xs font-bold rounded">
                        Most Asked
                      </span>
                    )}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-600 leading-relaxed pb-6 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* SECTION 6: FINAL CTA */}
      <FinalCTA />

      <Footer />
    </div>
  );
}
