import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, CheckCircle, Star, TrendUp, ChatCircle, Clock, ShieldCheck, Plus, X } from '@phosphor-icons/react';
import { PrimaryCTA } from '@/components/ui/PrimaryCTA';
import { FAQItem } from '@/components/ui/FAQItem';

const ReviewBoosterPage = () => {
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
      id: 'how-automated-request-works',
      question: "How does the automated review request work?",
      answer: "After a job is completed in your system, WinStreams automatically sends a personalized text asking for feedback. If the customer is happy, they get a direct link to leave a review. If unhappy, they're routed to a private feedback form so you can resolve issues before they post publicly."
    },
    {
      id: 'which-platforms',
      question: "Which review platforms does this work with?",
      answer: "Google Business Profile, Facebook, Yelp, and most major platforms. We generate platform-specific links and instructions so customers can leave reviews wherever matters most for your business."
    },
    {
      id: 'customize-messages',
      question: "Can I customize the review request messages?",
      answer: "Yes. During setup, we help you create review request templates that match your brand voice. You can adjust timing, wording, and follow-up sequences anytime."
    },
    {
      id: 'existing-system',
      question: "What if I already have a review system?",
      answer: "The Review Booster integrates with most CRMs and booking systems. If you're already requesting reviews manually, this automates the process and adds the happy/unhappy split logic to protect your rating."
    },
    {
      id: 'how-quickly-results',
      question: "How quickly will I see more reviews?",
      answer: "Most clients see 2-3x more reviews within the first 30 days. Response rates improve because requests are automated, timely, and make it easy for customers to leave feedback."
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
                  AI Review Booster System
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white text-balance mb-6">
                Turn Happy Clients into{' '}
                <span className="text-brand-magenta">Visible 5-Star Proof</span>
              </h1>
              
              <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
                Most service businesses do great work—but only a small fraction of happy customers ever leave a review. We set up an AI-powered review flow that texts customers at the perfect moment and catches unhappy clients privately before they hurt your reputation.
              </p>
              
              {/* CTA + Tagline */}
              <div className="space-y-4 mt-2">
                <PrimaryCTA to="/book" icon={ArrowRight} className="focus:ring-offset-slate-950" data-track="cta:review-booster:hero">
                  Get More 5-Star Reviews
                </PrimaryCTA>
                <p className="text-sm text-slate-400 italic text-center lg:text-left">
                  Turn happy customers into visible 5-star proof.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: Snapshot Card + Contact */}
            <div className="w-full max-w-md lg:max-w-xl mx-auto lg:mx-0 space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: '300ms' }}>
              
              {/* Snapshot Card */}
              <div className="bg-[#0a1628] border border-slate-800/60 rounded-2xl p-6 md:p-8 shadow-2xl shadow-black/50">
                <h3 className="text-base md:text-lg font-semibold text-slate-100 mb-6 text-center">
                  Review & Reputation Snapshot
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Review Count - Teal (positive) */}
                  <div className="rounded-xl bg-teal-900/30 border border-teal-500/40 p-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Star weight="duotone" className="h-5 w-5 text-teal-400 flex-shrink-0" aria-hidden="true" />
                      <p className="text-sm font-medium text-slate-400">Review Count (last 90 days)</p>
                    </div>
                    <p className="text-4xl sm:text-5xl font-bold text-teal-400 mb-1">23</p>
                    <p className="text-sm text-slate-500 leading-snug hidden md:block">
                      Total reviews received
                    </p>
                    <p className="text-[11px] text-slate-400 mt-2 pt-2 border-t border-slate-700/50 hidden md:block">
                      ↳ Industry average: 8 reviews/quarter
                    </p>
                  </div>

                  {/* Average Rating - Magenta */}
                  <div className="rounded-xl bg-pink-900/30 border border-brand-magenta/40 p-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <TrendUp weight="duotone" className="h-5 w-5 text-brand-magenta flex-shrink-0" aria-hidden="true" />
                      <p className="text-sm font-medium text-slate-400">Average Rating</p>
                    </div>
                    <p className="text-4xl sm:text-5xl font-bold text-brand-magenta mb-1">4.1★</p>
                    <p className="text-sm text-slate-500 leading-snug hidden md:block">
                      Current rating across platforms
                    </p>
                  </div>

                  {/* Sentiment Score - Emerald */}
                  <div className="rounded-xl bg-emerald-900/30 border border-emerald-500/40 p-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <ChatCircle weight="duotone" className="h-5 w-5 text-emerald-400 flex-shrink-0" aria-hidden="true" />
                      <p className="text-sm font-medium text-slate-400">Sentiment Score</p>
                    </div>
                    <p className="text-4xl sm:text-5xl font-bold text-emerald-400 mb-1">78%</p>
                    <p className="text-sm text-slate-500 leading-snug hidden md:block">
                      Positive sentiment mentions
                    </p>
                  </div>

                  {/* Pending Review Requests - Orange */}
                  <div className="rounded-xl bg-orange-900/30 border border-orange-500/40 p-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Clock weight="duotone" className="h-5 w-5 text-orange-400 flex-shrink-0" aria-hidden="true" />
                      <p className="text-sm font-medium text-slate-400">Pending Review Requests</p>
                    </div>
                    <p className="text-4xl sm:text-5xl font-bold text-orange-400 mb-1">12</p>
                    <p className="text-sm text-slate-500 leading-snug hidden md:block">
                      Awaiting customer response
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
              { icon: Clock, text: "Take Back Your Time — One Call at a Time" },
              { icon: ShieldCheck, text: "Stay Focused Without Constant Interruptions" },
              { icon: TrendUp, text: "Let AI Handle the Noise So You Don't Have To" }
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
              Turn happy customers into visible social proof that builds trust with every prospect who finds you online.
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
                    REVIEW BOOSTER PLAN
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
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl md:text-6xl font-bold text-brand-navy">$79</span>
                    <span className="text-lg font-semibold text-brand-navy ml-1">/month</span>
                  </div>
                  <div className="text-sm text-slate-600 uppercase tracking-wide font-medium mt-3">
                    PER LOCATION • CANCEL ANYTIME
                  </div>
                </div>

                {/* Why Clients Love This Box */}
                <div className="bg-pink-50 border-2 border-brand-magenta rounded-2xl p-6 flex-1">
                  <div className="text-brand-magenta font-semibold mb-3 text-base md:text-lg">Effectively Free with WinStreams</div>
                  <ul className="space-y-2 text-slate-800 text-sm md:text-base leading-relaxed">
                    <li>• More 5-star reviews without manual follow-up</li>
                    <li>• Unhappy customers fixed privately before public damage</li>
                    <li>• Fresh reviews build credibility and trust with new prospects</li>
                    <li>• If you start a full WinStreams plan within 30 days, your first month is credited toward your subscription</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Checklist Card - appears second on mobile, first on desktop */}
            <div className="flex order-last lg:order-first">
              <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6 md:p-10 flex flex-col w-full">
                <h3 className="text-brand-navy font-bold mb-6 text-xl md:text-2xl">
                  What's Included in Your Review Booster System:
                </h3>

                <div className="space-y-4">
                  {[
                    "Automated review request flows that send texts after jobs are completed",
                    "Smart timing rules to increase response rates",
                    "Split \"happy vs unhappy\" logic to protect your rating",
                    "Platform-specific links and scripts for Google, Facebook, etc.",
                    "Monthly performance summaries (reviews gained, response rates, insights)"
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
            The Review Booster works perfectly as a standalone system. Whether you upgrade to WinStreams or not, you keep every review it generates.
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
              Three emotional shifts your visitors experience when your messaging becomes clear and high-converting.
            </p>
          </div>

          {/* 3-column card grid with pastel backgrounds */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            
            {/* Card 1: More 5-Star Reviews - Light Blue/Slate */}
            <div className="relative flex flex-col rounded-3xl bg-slate-50 border-2 border-slate-200 p-8 md:p-10 group hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-2 hover:border-blue-300 transition-all duration-300 overflow-hidden" style={{ animation: 'fade-in 0.6s ease-out 0ms both' }}>
              <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 border-2 border-blue-200 mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300">
                <Star weight="duotone" className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="relative z-10 text-xl md:text-2xl font-bold text-brand-navy mb-4">More 5-Star Reviews on Autopilot</h4>
              <p className="relative z-10 text-base text-slate-600 leading-relaxed">
                Your satisfied customers actually leave reviews instead of just saying 'thanks.' Automated requests at the perfect moment mean more visible proof without manual follow-up.
              </p>
            </div>

            {/* Card 2: Unhappy Clients Handled - Light Pink */}
            <div className="relative flex flex-col rounded-3xl bg-pink-50 border-2 border-pink-200 p-8 md:p-10 group hover:shadow-xl hover:shadow-pink-500/20 hover:-translate-y-2 hover:border-pink-300 transition-all duration-300 overflow-hidden" style={{ animation: 'fade-in 0.6s ease-out 100ms both' }}>
              <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl bg-pink-100 border-2 border-pink-200 mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-pink-500/30 transition-all duration-300">
                <ShieldCheck weight="duotone" className="w-8 h-8 text-pink-600" />
              </div>
              <h4 className="relative z-10 text-xl md:text-2xl font-bold text-brand-navy mb-4">Unhappy Clients Handled Privately</h4>
              <p className="relative z-10 text-base text-slate-600 leading-relaxed">
                The AI detects negative sentiment and routes those customers to a private resolution flow—protecting your public rating while giving you a chance to fix issues before they escalate.
              </p>
            </div>

            {/* Card 3: Higher Trust - Light Mint/Teal */}
            <div className="relative flex flex-col rounded-3xl bg-teal-50 border-2 border-teal-200 p-8 md:p-10 group hover:shadow-xl hover:shadow-teal-500/20 hover:-translate-y-2 hover:border-teal-300 transition-all duration-300 overflow-hidden" style={{ animation: 'fade-in 0.6s ease-out 200ms both' }}>
              <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl bg-teal-100 border-2 border-teal-200 mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-teal-500/30 transition-all duration-300">
                <TrendUp weight="duotone" className="w-8 h-8 text-teal-600" />
              </div>
              <h4 className="relative z-10 text-xl md:text-2xl font-bold text-brand-navy mb-4">Higher Trust & More Conversions</h4>
              <p className="relative z-10 text-base text-slate-600 leading-relaxed">
                A steady stream of fresh 5-star reviews builds credibility with new prospects. They see real customer experiences and choose you over competitors with stale or missing reviews.
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
            
            {/* Add-On 1: Additional Location */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 relative hover:shadow-md hover:-translate-y-1 hover:border-brand-magenta/30 transition-all duration-300">
              <div className="absolute top-4 right-4">
                <span className="bg-blue-100 text-blue-700 text-xs md:text-sm font-semibold px-3 py-1 rounded-full">
                  +$79
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-brand-navy mb-3 pr-16">
                Additional Location
              </h3>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-4">
                Add review automation for another business location or brand. Each location gets its own customized review flow and tracking.
              </p>
              <button className="inline-flex items-center gap-1.5 text-brand-magenta font-medium text-sm hover:underline min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta focus-visible:ring-offset-2 rounded">
                <Plus weight="bold" className="w-4 h-4" />
                Add to rewrite
              </button>
            </div>

            {/* Add-On 2: Review Response Service */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 relative hover:shadow-md hover:-translate-y-1 hover:border-brand-magenta/30 transition-all duration-300">
              <div className="absolute top-4 right-4">
                <span className="bg-blue-100 text-blue-700 text-xs md:text-sm font-semibold px-3 py-1 rounded-full">
                  +$49
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-brand-navy mb-3 pr-16">
                Review Response Service
              </h3>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-4">
                We write and post professional responses to all your reviews (positive and negative) to show prospects you care about customer feedback.
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
            Ready to Boost Your Reviews?
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get more 5-star social proof on autopilot while protecting your reputation.
          </p>
          <PrimaryCTA onClick={() => setIsFormOpen(true)} icon={ArrowRight} className="px-10 py-5 text-lg" data-track="cta:review-booster:bottom">
            Get More 5-Star Reviews
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
              Request Your Review Booster Setup
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
                <label className="block text-sm font-medium text-slate-700 mb-1">Current Review Platform (Optional)</label>
                <input
                  type="text"
                  name="context"
                  value={formData.context}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-magenta focus:border-transparent outline-none transition-all"
                  placeholder="Google, Yelp, Facebook, etc."
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
};

export default ReviewBoosterPage;
