import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Check, ChevronDown, ArrowRight, CheckCircle2, Zap, Users,
  PhoneIncoming, FileText, Link as LinkIcon, RefreshCcw, GitBranch, BarChart3 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const PRICING_TIERS = [
  {
    id: "starter" as const,
    name: "Starter",
    price: 299,
    subtitle: "For solo operators & low call volume businesses.",
    features: [
      "AI answers & texts every caller",
      "100 included calls/mo",
      "Instant missed-call text follow-up",
      "Voicemail-to-text",
      "Lead capture & qualification"
    ],
    cta: "Get Started",
    subtext: "Done-for-you onboarding. Go live in 3–5 days."
  },
  {
    id: "growth" as const,
    name: "Growth",
    price: 499,
    subtitle: "For teams ready to scale.",
    badge: "Most Popular",
    features: [
      { text: "Everything in Starter", bold: true },
      { text: "1,000 included calls/mo", bold: false },
      { text: "Website chat widget", bold: false },
      { text: "Calendar syncing & appointment booking", bold: false },
      { text: "Priority support", bold: false },
      { text: "Custom AI call scripts", bold: false }
    ],
    cta: "Start Growth",
    subtext: "Done-for-you onboarding. Go live in 3–5 days."
  },
  {
    id: "scale" as const,
    name: "Scale",
    price: 999,
    subtitle: "For multi-location or high call volume operations.",
    features: [
      "Unlimited calls",
      "Dedicated lead specialist",
      "Custom workflows",
      "CRM & integration support",
      "VIP priority routing"
    ],
    cta: "Get Started",
    subtext: "Talk to our team and design a workflow that goes live in 3–5 days."
  }
];

const SERVICES = [
  {
    icon: PhoneIncoming,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    badge: "Popular",
    badgeStyle: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    title: "Call Flow & Lead Capture Audit",
    description: "Find hidden revenue leaks in your lead handling.",
    price: "$399",
    priceSuffix: "one-time",
    bullets: [
      "Secret shopper test calls to your business",
      "Voicemail + missed-call handling review",
      "Lead capture mapping (calls, SMS, forms, DMs)",
      "Action plan with top 3 revenue-impact fixes"
    ]
  },
  {
    icon: FileText,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    badge: "Most Popular",
    badgeStyle: "bg-[#D10C8B] text-white",
    title: "Custom AI Call Script Buildout",
    description: "Tailor your AI receptionist to your exact offers.",
    price: "$549",
    priceSuffix: "one-time",
    bullets: [
      "Deep-dive intake on services and offers",
      "Draft + refine AI call flows for FAQs, pricing, booking",
      "Qualification questions tailored to your services",
      "Final script pack ready for WinStreams"
    ],
    featured: true
  },
  {
    icon: LinkIcon,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    title: "CRM & Integration Setup",
    description: "Connect WinStreams to your booking and CRM tools.",
    price: "$499",
    priceSuffix: "one-time",
    bullets: [
      "Connect to your CRM/booking platforms",
      "Map fields for leads, jobs, tags, stages",
      "Test full call → CRM flow",
      "Simple SOP for your team"
    ]
  },
  {
    icon: RefreshCcw,
    iconBg: "bg-pink-50",
    iconColor: "text-pink-600",
    badge: "New",
    badgeStyle: "bg-blue-50 text-blue-700 border border-blue-200",
    title: "Lead Recovery Campaign",
    description: "Win back old leads with targeted SMS campaigns.",
    price: "$599",
    priceSuffix: "one-time",
    bullets: [
      "Import missed/old leads",
      "Win-back SMS templates + configuration",
      "Light segmentation (hot/warm/cold)",
      "Summary report of opportunities"
    ]
  },
  {
    icon: GitBranch,
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    title: "Advanced Workflows & Routing",
    description: "Smart routing for complex operations.",
    price: "From $699",
    priceSuffix: "",
    bullets: [
      "Multi-location / multi-service call flows",
      "Smart routing rules + after-hours handling",
      "Escalation logic for urgent calls",
      "Custom workflow documentation"
    ]
  },
  {
    icon: BarChart3,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    title: "Analytics & Optimization Pack",
    description: "Ongoing performance tuning and reporting.",
    price: "$249",
    priceSuffix: "/mo",
    bullets: [
      "Regular performance review",
      "Call outcome breakdown + trends",
      "Script tuning recommendations",
      "Simple scorecards for your team"
    ]
  }
];

const FAQS = [
  {
    question: "What happens if I go over my call limit?",
    answer: "We'll notify you before you hit your limit. You can upgrade your plan anytime, or we'll charge just $1.50 per additional call—no surprises."
  },
  {
    question: "Does this replace my receptionist or answering service?",
    answer: "No—WinStreams is insurance, not a replacement. It only steps in for missed calls when you or your team can't pick up. It works alongside your existing receptionist, answering service, or office manager so fewer opportunities slip through the cracks.",
    badge: "Most Asked"
  },
  {
    question: "Do I need a new phone number?",
    answer: "No. We integrate with your existing phone system. You keep your current number and all your existing setup."
  },
  {
    question: "What integrations do you support?",
    answer: "We integrate with popular scheduling tools (Calendly, Acuity, Google Calendar), CRMs (HubSpot, Salesforce), and communication platforms (Slack, Zapier). Need something specific? Our team can set up custom workflows."
  },
  {
    question: "How does the 30-day guarantee work?",
    answer: "Try WinStreams risk-free for 30 days. If you're not satisfied, we'll refund your first month—no questions asked."
  },
  {
    question: "What is the $300 setup fee?",
    answer: "The $300 setup fee covers custom configuration, AI training, and integration with your systems. Stay with us for 3+ months and we credit it back to you on your 4th month bill."
  },
  {
    question: "How long does setup take?",
    answer: "Most customers go live in 3–5 days. Our team handles the entire setup—you just answer a few questions about your business."
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Yes. Many customers start on Starter and upgrade to Growth once they see results. You can change plans anytime with no penalties."
  }
];

export function PricingPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);
  const [selectedPlan, setSelectedPlan] = useState<null | 'starter' | 'growth' | 'scale'>(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* SECTION 1: RESULTS HERO WITH KPI CARDS */}
      <section className="bg-[#020617] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* FROSTED HERO CARD */}
          <div className="max-w-5xl mx-auto rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl shadow-black/20 px-8 sm:px-10 py-12 md:py-16 text-center">
            
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
              Operators who install our receptionist see <span className="text-[#D10C8B]">serious results</span>—fast.
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10">
              Stop losing jobs when you step away. WinStreams books real customers even when you can't get to the phone.
            </p>

            {/* KPI CARDS (Inside Hero) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              
              {/* KPI 1: ROI */}
              <div className="rounded-2xl bg-[#EEF2FF] border border-slate-200 shadow-sm p-5 md:p-6 text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#0A1B5F] tracking-tight mb-1">
                  7X
                </div>
                <p className="text-sm md:text-base font-semibold text-[#0A1B5F] mb-1">
                  Average ROI
                </p>
                <p className="text-xs md:text-sm text-slate-600 italic">
                  in the first 90 days
                </p>
              </div>

              {/* KPI 2: More Appointments */}
              <div className="rounded-2xl bg-[#FFE7F2] border border-slate-200 shadow-sm p-5 md:p-6 text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#0A1B5F] tracking-tight mb-1">
                  45%
                </div>
                <p className="text-sm md:text-base font-semibold text-[#0A1B5F] mb-1">
                  More booked appointments
                </p>
                <p className="text-xs md:text-sm text-slate-600 italic">
                  compared to voicemail alone
                </p>
              </div>

              {/* KPI 3: Engagement */}
              <div className="rounded-2xl bg-[#E6F7F0] border border-slate-200 shadow-sm p-5 md:p-6 text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#0A1B5F] tracking-tight mb-1">
                  95%
                </div>
                <p className="text-sm md:text-base font-semibold text-[#0A1B5F] mb-1">
                  Missed callers engaged
                </p>
                <p className="text-xs md:text-sm text-slate-600 italic">
                  within 60 seconds
                </p>
              </div>
              
            </div>
            
          </div>
        </div>
      </section>

      {/* SECTION 2: PRICING PLANS */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1B5F] mb-4">
              Transparent Pricing That Scales With Your Business
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              All plans include AI answering, instant SMS follow-up, and done-for-you onboarding.
            </p>
          </div>
          
          {/* Pricing Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PRICING_TIERS.map((tier, idx) => {
              const isSelected = selectedPlan === tier.id;
              return (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setSelectedPlan(tier.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedPlan(tier.id);
                    }
                  }}
                  className={`group flex flex-col rounded-3xl p-8 h-full relative cursor-pointer transition-all duration-200 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 ${
                    isSelected ? "border border-fuchsia-400" : "border border-slate-200"
                  }`}
                >
                  {/* Badge */}
                  {tier.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                      <span className="inline-flex items-center rounded-full bg-[#D10C8B] text-white text-xs font-semibold px-4 py-1 uppercase tracking-wide shadow-lg">
                        {tier.badge}
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-[#0A1B5F] mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {tier.subtitle}
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-[#0A1B5F]">${tier.price}</span>
                    <span className="text-lg text-slate-600">/mo</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {tier.features.map((feature, i) => {
                      const featureText = typeof feature === 'string' ? feature : feature.text;
                      const isBold = typeof feature === 'object' && feature.bold;
                      return (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" strokeWidth={2} />
                          <span className={`text-base text-slate-700 ${isBold ? 'font-semibold' : ''}`}>
                            {featureText}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                  
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate('/book');
                    }}
                    className={`w-full flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#D10C8B] focus:ring-offset-2 ${
                      isSelected
                        ? "bg-fuchsia-600 text-white border-fuchsia-600"
                        : "border-2 border-slate-300 bg-white text-slate-900 group-hover:bg-fuchsia-600 group-hover:border-fuchsia-600 group-hover:text-white"
                    }`}
                  >
                    {tier.cta}
                    {isSelected && <ArrowRight className="w-5 h-5" />}
                  </button>
                  
                  <p className="text-xs text-slate-500 text-center mt-4">
                    {tier.subtext}
                  </p>
                </motion.div>
              );
            })}
          </div>
          
          {/* Global Setup Fee Note */}
          <p className="mt-10 text-sm text-slate-600 text-center max-w-2xl mx-auto leading-relaxed">
            Simple monthly plans for busy local operators. No long-term contracts, and your
            <span className="font-semibold text-slate-900"> $300 setup fee is credited back</span> on month 4 when you stay 3+ months.
          </p>
          
        </div>
      </section>

      {/* SECTION 3: INCLUDED IN EVERY PLAN */}
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-8">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Included In Every Plan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            
            {/* Card 1 */}
            <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-300">
              <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto mb-3" strokeWidth={1.5} />
              <h3 className="text-base md:text-lg font-semibold text-[#0A1B5F] mb-2">
                More Booked Jobs
              </h3>
              <p className="text-sm text-slate-600">
                AI answers, qualifies, and books—straight to your calendar.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-300">
              <Zap className="w-8 h-8 text-[#D10C8B] mx-auto mb-3" strokeWidth={1.5} />
              <h3 className="text-base md:text-lg font-semibold text-[#0A1B5F] mb-2">
                Instant Engagement
              </h3>
              <p className="text-sm text-slate-600">
                Every missed call gets instant SMS follow-up so leads don't go cold.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-300">
              <Users className="w-8 h-8 text-cyan-500 mx-auto mb-3" strokeWidth={1.5} />
              <h3 className="text-base md:text-lg font-semibold text-[#0A1B5F] mb-2">
                Smart Qualification
              </h3>
              <p className="text-sm text-slate-600">
                AI filters tire-kickers so your team only talks to serious buyers.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* SECTION 4: MICRO-SERVICES & ADD-ONS */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D10C8B] mb-3">
              Fine-Tune Your Setup
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A1B5F] mb-4">
              One-Time Projects & Add-Ons
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Maximize your results with expert audits, custom scripts, and seamless integrations.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
            {SERVICES.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={idx}
                  className={`flex flex-col rounded-3xl border border-slate-200 shadow-sm p-8 h-full hover:shadow-lg hover:border-[#D10C8B]/40 hover:-translate-y-1 transition-all duration-300 ${
                    service.featured ? "bg-gradient-to-br from-white to-purple-50/20" : "bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center`}>
                      <IconComponent className={`w-7 h-7 ${service.iconColor}`} strokeWidth={1.5} />
                    </div>
                    {service.badge && (
                      <span className={`inline-flex items-center text-xs font-semibold uppercase tracking-wide px-2 py-1 rounded-full ${service.badgeStyle}`}>
                        {service.badge}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-[#0A1B5F] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-base text-slate-600 mb-4">
                    {service.description}
                  </p>
                  
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-3xl font-bold text-[#0A1B5F]">{service.price}</span>
                    {service.priceSuffix && (
                      <span className="text-base text-slate-600">{service.priceSuffix}</span>
                    )}
                  </div>
                  
                  <ul className="space-y-2 mb-6 flex-grow">
                    {service.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D10C8B] mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-slate-700 leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    type="button"
                    onClick={() => navigate('/book')}
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-300 bg-white px-8 py-4 text-base font-medium text-slate-900 hover:border-[#D10C8B] hover:text-[#D10C8B] hover:bg-pink-50 hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D10C8B] focus:ring-offset-2 w-full"
                  >
                    Add to Plan
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
          
          
        </div>
      </section>

      {/* SECTION 5: FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#0A1B5F] mb-4">
              Common Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing
            </p>
          </motion.div>

          {/* Micro-CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 p-5 bg-gradient-to-r from-blue-50 to-pink-50 border border-pink-100 rounded-xl"
          >
            <p className="text-sm text-[#0A1B5F] mb-3">
              <span className="font-semibold text-base">Have questions about pricing and packages?</span>
              <br />
              <span className="text-gray-600">Our team responds within 2 hours.</span>
            </p>
            <a
              href="/contact"
              className="text-[#D10C8B] font-semibold text-sm hover:text-[#BE185D] transition-colors flex items-center gap-2"
            >
              Start Conversation
              <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Accordion */}
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className={`border rounded-xl px-6 bg-white transition-colors ${
                  openIndex === idx 
                    ? 'border-2 border-[#D10C8B]' 
                    : 'border-gray-200 hover:border-pink-200'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full text-left text-lg font-bold text-[#0A1B5F] hover:text-[#D10C8B] py-5 flex items-center justify-between"
                  aria-expanded={openIndex === idx}
                >
                  <span className="pr-4 flex items-center gap-3">
                    {faq.question}
                    {faq.badge && (
                      <span className="px-2 py-1 bg-pink-50 text-[#D10C8B] text-xs font-bold rounded">
                        {faq.badge}
                      </span>
                    )}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="text-base text-gray-600 leading-relaxed pb-6 pt-2">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: FINAL CTA BAND */}
      <section className="py-16 md:py-24 bg-[#020617]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Start capturing 100% of your calls—automatically.
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Every missed call is a missed job. Let WinStreams handle the calls so you can focus on the work.
          </p>
          <button
            type="button"
            onClick={() => navigate('/book')}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D10C8B] to-[#BE185D] px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-[#D10C8B]/20 hover:scale-105 hover:shadow-xl hover:shadow-[#D10C8B]/30 active:scale-95 transition-all duration-300 min-h-[48px]"
          >
            Book Your Strategy Call
            <ArrowRight className="w-5 h-5" strokeWidth={2} />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
