import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, CheckCircle, Phone, Clock, WarningCircle, TrendDown, UserCheck, Plus, X, Star } from '@phosphor-icons/react';
import { PrimaryCTA } from '@/components/ui/PrimaryCTA';
import { FAQItem } from '@/components/ui/FAQItem';

export function CallFlowAuditPage() {
  // Enable smooth scroll for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    phone: '',
    industry: '',
    context: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setIsFormOpen(false);
      setTimeout(() => {
        setFormData({
          businessName: '',
          email: '',
          phone: '',
          industry: '',
          context: ''
        });
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      id: 'secret-shopper',
      question: "What's included in the \"secret shopper\" test call?",
      answer: "We call your business as a prospective customer and document the entire experience—from how quickly you answer to how the conversation flows. You'll get a recording (if legal in your state) or detailed notes."
    },
    {
      id: 'identify-missed',
      question: "How do you identify missed calls?",
      answer: "We review your call logs (if you provide access) or use call tracking data to see when calls went unanswered, how long callers waited, and whether voicemails were left."
    },
    {
      id: 'need-winstreams',
      question: "Do I need to use WinStreams to fix the issues you find?",
      answer: "No. The audit gives you a clear action plan that works with any phone system, CRM, or receptionist (human or AI). If you want us to fix it, WinStreams AI can handle the implementation."
    },
    {
      id: 'how-long',
      question: "How long does the audit take?",
      answer: "We complete most audits within 48 hours. You'll get a detailed report with prioritized fixes and revenue impact estimates."
    },
    {
      id: 'no-major-issues',
      question: "What if I don't have any major issues?",
      answer: "Even well-run businesses usually have 2-3 hidden gaps (voicemail settings, follow-up timing, script clarity). The audit either confirms you're doing great or reveals quick wins worth thousands in recovered revenue."
    }
  ];

  return (
    <div className="font-sans text-slate-900">
      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-b from-[#0F172A] to-[#020617] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 pb-12 md:pb-24">

          {/* Main 2-column hero grid */}
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 lg:items-center">
            
            {/* LEFT COLUMN - Frosted Card */}
            <div className="backdrop-blur-xl bg-slate-900/35 border border-slate-700/60 rounded-3xl p-8 md:p-10 shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: '100ms' }}>
              {/* Micro-label with pulse */}
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-magenta/10 border border-brand-magenta/20 px-4 py-1.5 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-magenta opacity-75 transform-gpu"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-magenta"></span>
                </span>
                <span className="text-xs font-semibold text-brand-magenta uppercase tracking-wide">
                  Call Flow & Lead Capture Audit
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white text-balance mb-6">
                Find & Fix Hidden{' '}
                <span className="text-brand-magenta">Lead Leaks</span>
              </h1>
              
              <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
                Get a complete diagnostic of your call handling, lead capture, and follow-up gaps. We'll show you exactly where leads are slipping away—and how to fix it.
              </p>
              
              {/* CTA + Tagline */}
              <div className="space-y-4 mt-2">
                <PrimaryCTA to="/book" icon={ArrowRight} className="focus:ring-offset-slate-950" data-track="cta:call-flow-audit:hero">
                  Audit My Lead Flow
                </PrimaryCTA>
                <p className="text-sm text-slate-400 italic text-center lg:text-left">
                  Identify where qualified leads are slipping away.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: Snapshot Card + Contact */}
            <div className="w-full max-w-md lg:max-w-xl mx-auto lg:mx-0 space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: '300ms' }}>
              
              {/* Snapshot Card */}
              <div className="bg-[#0a1628] border border-slate-800/60 rounded-2xl p-6 md:p-8 shadow-2xl shadow-black/50">
                <h3 className="text-base md:text-lg font-semibold text-slate-100 mb-6 text-center">
                  Call Flow & Lead Capture Snapshot
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Missed Calls Flagged - Teal */}
                  <div className="rounded-xl bg-teal-900/30 border border-teal-500/40 p-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Phone weight="duotone" className="h-5 w-5 text-teal-400 flex-shrink-0" aria-hidden="true" />
                      <p className="text-sm font-medium text-slate-400">Missed Calls Flagged</p>
                    </div>
                    <p className="text-4xl sm:text-5xl font-bold text-teal-400 mb-1">7</p>
                    <p className="text-sm text-slate-500 leading-snug hidden md:block">
                      Last 30 days
                    </p>
                    <p className="text-[11px] text-slate-400 mt-2 pt-2 border-t border-slate-700/50 hidden md:block">
                      ↳ Each missed call costs: $200-500 avg
                    </p>
                  </div>

                  {/* Avg Response Time - Magenta */}
                  <div className="rounded-xl bg-pink-900/30 border border-brand-magenta/40 p-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Clock weight="duotone" className="h-5 w-5 text-brand-magenta flex-shrink-0" aria-hidden="true" />
                      <p className="text-sm font-medium text-slate-400">Avg Response Time</p>
                    </div>
                    <p className="text-4xl sm:text-5xl font-bold text-brand-magenta mb-1">22 min</p>
                    <p className="text-sm text-slate-500 leading-snug hidden md:block">
                      Industry avg: 5 min
                    </p>
                  </div>

                  {/* Script Break Points - Emerald */}
                  <div className="rounded-xl bg-emerald-900/30 border border-emerald-500/40 p-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <WarningCircle weight="duotone" className="h-5 w-5 text-emerald-400 flex-shrink-0" aria-hidden="true" />
                      <p className="text-sm font-medium text-slate-400">Script Break Points</p>
                    </div>
                    <p className="text-4xl sm:text-5xl font-bold text-emerald-400 mb-1">3</p>
                    <p className="text-sm text-slate-500 leading-snug hidden md:block">
                      Friction spots found
                    </p>
                  </div>

                  {/* Lead Capture Gaps - Orange */}
                  <div className="rounded-xl bg-orange-900/30 border border-orange-500/40 p-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <TrendDown weight="duotone" className="h-5 w-5 text-orange-400 flex-shrink-0" aria-hidden="true" />
                      <p className="text-sm font-medium text-slate-400">Lead Capture Gaps</p>
                    </div>
                    <p className="text-4xl sm:text-5xl font-bold text-orange-400 mb-1">2</p>
                    <p className="text-sm text-slate-500 leading-snug hidden md:block">
                      Quick wins identified
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-sm text-slate-500 text-center">
                  Example of the insights included in your audit.
                </p>
              </div>

              {/* Contact Strip - Below Snapshot */}
              <p className="text-sm md:text-base text-slate-300 text-center">
                Prefer to talk first? Call/Text{" "}
                <a href="tel:+19549451525" className="text-white font-semibold hover:text-brand-magentaLight transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded">(954) 945-1525</a>
                {" "}or email{" "}
                <a href="mailto:leads@winstreams.com" className="text-brand-magenta hover:text-brand-magentaLight font-semibold underline underline-offset-4 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded">leads@winstreams.com</a>.
              </p>
            </div>
          </div>

          {/* MICRO-BULLETS - Subtle supporting details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 pt-12 border-t border-slate-800">
            {[
              { icon: Phone, text: "Secret shopper test calls" },
              { icon: Clock, text: "Missed-call & voicemail review" },
              { icon: CheckCircle, text: "Clear call-handling action plan" }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <item.icon 
                  className="w-5 h-5 text-brand-magenta mt-0.5 flex-shrink-0" 
                  weight="duotone" 
                />
                <span className="text-sm text-slate-400 leading-relaxed">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. WHAT YOU'LL WALK AWAY WITH + PRICING SECTION (LIGHT MODE) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section heading */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
              What You'll Walk Away With
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              A complete diagnostic showing exactly where leads slip through the cracks—with a clear action plan to fix it.
            </p>
          </div>

          {/* 2-column grid - Pricing first on mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* Pricing Card - appears first on mobile, second on desktop */}
            <div className="flex order-first lg:order-last">
              <div className="relative bg-gradient-to-br from-white to-pink-50/30 border-2 border-brand-magenta rounded-3xl shadow-[0_0_30px_rgba(209,12,139,0.15)] p-6 md:p-10 flex flex-col w-full">
                
                {/* Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-brand-gradient text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full shadow-md">
                    CALL FLOW AUDIT
                  </span>
                </div>

                {/* Trust badge with stars */}
                <div className="flex items-center justify-center gap-3 mt-6 mb-4">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-amber-400" weight="fill" />)}
                  </div>
                  <span className="text-xs text-slate-600 font-medium">
                    Trusted by busy local operators <span className="italic">(5-star rated)</span>
                  </span>
                </div>

                {/* Price + subtext */}
                <div className="mb-6 text-center">
                  <div className="text-6xl md:text-7xl font-bold text-brand-navy mb-2">
                    $149
                  </div>
                  <div className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-slate-500">
                    ONE-TIME AUDIT • DELIVERED WITHIN 48 HOURS
                  </div>
                </div>

                {/* Why Clients Love This Box */}
                <div className="bg-pink-50 border-2 border-brand-magenta rounded-2xl p-6 flex-1">
                  <div className="text-brand-magenta font-semibold mb-3 text-base md:text-lg">Why clients love this audit</div>
                  <ul className="space-y-2 text-slate-800 text-sm md:text-base leading-relaxed">
                    <li>• See exactly where you're losing leads</li>
                    <li>• Concrete fixes (not vague advice)</li>
                    <li>• Mystery shop reveals real customer experience</li>
                    <li>• Spot hidden revenue leaks fast</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Checklist Card - appears second on mobile, first on desktop */}
            <div className="flex order-last lg:order-first">
              <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6 md:p-10 flex flex-col w-full">
                <h3 className="text-brand-navy font-bold mb-6 text-xl md:text-2xl">
                  What's Included in Your Call Flow Audit:
                </h3>

                <div className="space-y-4">
                  {[
                    "Secret shopper test calls (we call as a customer)",
                    "Missed-call & voicemail review",
                    "Lead capture form analysis",
                    "Follow-up sequence gap identification",
                    "Script friction points highlighted",
                    "Clear call-handling action plan"
                  ].map(item => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle weight="bold" className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-800 text-base md:text-lg leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Disclaimer Bubble - Outside pricing card */}
          <div className="bg-slate-50 text-slate-700 text-xs md:text-sm leading-relaxed rounded-xl p-4 md:p-5 border border-slate-200 max-w-xl mx-auto mt-6">
            This audit works for any business that takes calls or captures leads online. Whether you fix things yourself or use WinStreams, you'll know exactly what to improve.
          </div>
        </div>
      </section>

      {/* 3. HOW YOUR CLIENTS WILL FEEL */}
      <section className="py-16 md:py-24 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section heading */}
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How Your Clients Will Feel
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Three emotional shifts you'll experience when you finally see where leads are slipping away.
            </p>
          </div>

          {/* 3-column card grid with pastel backgrounds */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            
            {/* Card 1: Stop Losing Calls - Light Blue/Slate */}
            <div className="relative flex flex-col rounded-3xl bg-slate-50 border-2 border-slate-200 p-8 md:p-10 group hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-2 hover:border-blue-300 transition-all duration-300 overflow-hidden" style={{ animation: 'fade-in 0.6s ease-out 0ms both' }}>
              <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 border-2 border-blue-200 mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300">
                <Phone weight="duotone" className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="relative z-10 text-xl md:text-2xl font-bold text-brand-navy mb-4">Stop Losing Calls to Voicemail</h4>
              <p className="relative z-10 text-base text-slate-600 leading-relaxed">
                We identify exactly when and why calls go unanswered. Most businesses lose 15–25% of leads simply because they can't get to the phone fast enough during busy hours.
              </p>
            </div>

            {/* Card 2: Capture More Leads - Light Pink */}
            <div className="relative flex flex-col rounded-3xl bg-pink-50 border-2 border-pink-200 p-8 md:p-10 group hover:shadow-xl hover:shadow-pink-500/20 hover:-translate-y-2 hover:border-pink-300 transition-all duration-300 overflow-hidden" style={{ animation: 'fade-in 0.6s ease-out 100ms both' }}>
              <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl bg-pink-100 border-2 border-pink-200 mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-pink-500/30 transition-all duration-300">
                <UserCheck weight="duotone" className="w-8 h-8 text-pink-600" />
              </div>
              <h4 className="relative z-10 text-xl md:text-2xl font-bold text-brand-navy mb-4">Capture More Qualified Leads</h4>
              <p className="relative z-10 text-base text-slate-600 leading-relaxed">
                We review your forms, scripts, and follow-up sequences to find where prospects drop off. Small fixes like better form labels or faster replies often recover 10–20% more leads.
              </p>
            </div>

            {/* Card 3: Know What to Fix - Light Mint/Teal */}
            <div className="relative flex flex-col rounded-3xl bg-teal-50 border-2 border-teal-200 p-8 md:p-10 group hover:shadow-xl hover:shadow-teal-500/20 hover:-translate-y-2 hover:border-teal-300 transition-all duration-300 overflow-hidden" style={{ animation: 'fade-in 0.6s ease-out 200ms both' }}>
              <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl bg-teal-100 border-2 border-teal-200 mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-teal-500/30 transition-all duration-300">
                <CheckCircle weight="duotone" className="w-8 h-8 text-teal-600" />
              </div>
              <h4 className="relative z-10 text-xl md:text-2xl font-bold text-brand-navy mb-4">Know Exactly What to Fix</h4>
              <p className="relative z-10 text-base text-slate-600 leading-relaxed">
                You get a prioritized action plan—not vague suggestions. We rank issues by revenue impact so you know which fixes will move the needle most.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. OPTIONAL ADD-ONS SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section heading */}
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy">
              Optional Add-Ons
            </h2>
          </div>

          {/* 2-column add-on cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            
            {/* Add-On 1: Full Call Script Rewrite */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 relative hover:shadow-md hover:-translate-y-1 hover:border-brand-magenta/30 transition-all duration-300">
              <div className="absolute top-4 right-4">
                <span className="bg-blue-100 text-blue-700 text-xs md:text-sm font-semibold px-3 py-1 rounded-full">
                  +$99
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-brand-navy mb-3 pr-16">
                Full Call Script Rewrite
              </h3>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-4">
                After the audit, we rewrite your call scripts to remove friction points and improve conversion rates.
              </p>
              <button className="inline-flex items-center gap-1.5 text-brand-magenta font-medium text-sm hover:underline min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta focus-visible:ring-offset-2 rounded">
                <Plus weight="bold" className="w-4 h-4" />
                Add to rewrite
              </button>
            </div>

            {/* Add-On 2: Monthly Call Flow Review */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 relative hover:shadow-md hover:-translate-y-1 hover:border-brand-magenta/30 transition-all duration-300">
              <div className="absolute top-4 right-4">
                <span className="bg-blue-100 text-blue-700 text-xs md:text-sm font-semibold px-3 py-1 rounded-full">
                  +$79/month
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-brand-navy mb-3 pr-16">
                Monthly Call Flow Review
              </h3>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-4">
                Ongoing monitoring of missed calls, response times, and lead capture rates with monthly optimization recommendations.
              </p>
              <button className="inline-flex items-center gap-1.5 text-brand-magenta font-medium text-sm hover:underline min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta focus-visible:ring-offset-2 rounded">
                <Plus weight="bold" className="w-4 h-4" />
                Add to rewrite
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section heading */}
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy">
              Common Questions
            </h2>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={faq.id}>
                <FAQItem
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFaqIndex === index}
                  onToggle={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  index={index}
                  id={faq.id}
                />
                {/* Gradient divider (except after last item) */}
                {index < faqs.length - 1 && (
                  <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mt-4" />
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#0F172A] to-[#020617]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Find Your Lead Leaks?
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get a complete diagnostic and action plan to capture more leads.
          </p>
          <PrimaryCTA onClick={() => setIsFormOpen(true)} icon={ArrowRight} className="px-10 py-5 text-lg" data-track="cta:call-flow-audit:bottom">
            Audit My Lead Flow
          </PrimaryCTA>
        </div>
      </section>

      {/* Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5 text-slate-500" />
            </button>
            
            <h3 className="text-2xl font-bold text-brand-navy mb-2">
              Request Your Call Flow Audit
            </h3>
            <p className="text-slate-600 mb-6">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
            
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Business Name</label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-magenta focus:border-transparent outline-none transition-all"
                  placeholder="Your Business Name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-magenta focus:border-transparent outline-none transition-all"
                  placeholder="you@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-magenta focus:border-transparent outline-none transition-all"
                  placeholder="(555) 123-4567"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Industry</label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-magenta focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select your industry</option>
                  <option value="hvac">HVAC</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="electrical">Electrical</option>
                  <option value="roofing">Roofing</option>
                  <option value="landscaping">Landscaping</option>
                  <option value="cleaning">Cleaning Services</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Current Phone System (Optional)</label>
                <input
                  type="text"
                  name="context"
                  value={formData.context}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-magenta focus:border-transparent outline-none transition-all"
                  placeholder="e.g., RingCentral, Google Voice, Cell Phone"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-magenta hover:bg-brand-magentaDark text-white font-bold py-4 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Success Toast */}
      {submitSuccess && (
        <div className="fixed bottom-8 right-8 z-50 bg-emerald-500 text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 animate-in slide-in-from-bottom-4 duration-300">
          <CheckCircle className="w-5 h-5" />
          <span className="font-medium">Request submitted successfully!</span>
        </div>
      )}
    </div>
  );
}

export default CallFlowAuditPage;
