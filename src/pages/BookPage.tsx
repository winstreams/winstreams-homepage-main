import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ_ITEMS = [
  {
    q: "Do I have to buy after the call?",
    a: "No. If we're a good fit, we'll tell you. If not, you'll still get actionable advice."
  },
  {
    q: "What if I'm not ready yet?",
    a: "Perfect. That's exactly what the call helps clarify."
  },
  {
    q: "Can I reschedule?",
    a: "Yes—anytime inside the calendar."
  }
];

const WHAT_HELPS_ITEMS = [
  {
    num: "01",
    title: "Understand How the AI Works",
    text: "See a live demo of how AI handles real calls, books appointments, and integrates with your existing systems—no technical jargon."
  },
  {
    num: "02",
    title: "Learn More About Your Business Needs",
    text: "We'll discuss your current call volume, pain points, and where you're losing the most revenue from missed opportunities."
  },
  {
    num: "03",
    title: "What We Need From You to Set It Up Effectively",
    text: "We'll map out the simple information needed (business hours, services offered, booking preferences) so setup is fast and tailored to you."
  }
];

export function BookPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Book a Free Strategy Call | WinStreams";
    
    return () => {
      document.title = "WinStreams";
    };
  }, []);

  const handleScrollToScheduler = (e: React.MouseEvent) => {
    e.preventDefault();
    const scheduler = document.getElementById("scheduler");
    if (scheduler) {
      scheduler.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => scheduler.focus(), 500);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background pb-24 lg:pb-0">
      <Navbar />
      
      <main className="flex-1">
        {/* HERO SECTION — Condensed for mobile, calendar visible above fold */}
        <section className="py-8 md:py-16 lg:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-6 text-center">
            {/* Benefit Badge - Compact */}
            <div className="mb-4 flex justify-center">
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2">
                <svg className="w-4 h-4 text-emerald-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium text-emerald-700">Free call • No commitment</span>
              </div>
            </div>

            {/* Condensed Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-navy mb-4">
              Never Miss Another Job Again
            </h1>

            {/* Subheadline - Hidden on mobile for space */}
            <p className="hidden sm:block text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
              See exactly how AI can handle your calls, book appointments automatically, and give you back 10+ hours every week—without replacing your team.
            </p>

            {/* Mobile-only compact subhead */}
            <p className="sm:hidden text-base text-muted-foreground mb-4">
              Book a free 15-minute strategy call
            </p>
          </div>
        </section>

        {/* SPLIT-VIEW CONTAINER — flex flex-col on mobile, lg:grid on desktop */}
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 pb-16">
          
          {/* RIGHT COLUMN: TidyCal */}
          {/* MOBILE: order-1 (appears FIRST after hero) */}
          {/* DESKTOP: lg:order-2 (appears on RIGHT side) + sticky */}
          <div className="order-1 lg:order-2 px-0 lg:px-0 mb-12 lg:mb-0">
            <div 
              id="scheduler"
              className="lg:sticky lg:top-28 scroll-mt-20"
              tabIndex={-1}
            >
              <div className="bg-card border border-border rounded-2xl shadow-xl p-3 sm:p-6">
                {/* Condensed Header - Mobile optimized */}
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-magenta/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-brand-magenta" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-brand-navy">
                        Pick Your Time
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        Free 15-minute call
                      </p>
                    </div>
                  </div>
                </div>

                {/* TidyCal iframe - Reduced height on mobile */}
                <div className="overflow-hidden rounded-lg">
                  <iframe
                    src="https://tidycal.com/winstreams/15-mins-quick-chat?primary_color=%23D10C8B"
                    width="100%"
                    height={600}
                    frameBorder={0}
                    className="min-h-[500px] sm:min-h-[600px]"
                    allow="payment"
                    title="WinStreams Calendar Booking"
                  />
                </div>

                {/* Fallback text */}
                <p className="mt-3 text-sm text-muted-foreground text-center">
                  Calendar not loading?{" "}
                  <Link to="/contact" className="text-primary hover:underline">
                    Contact us directly
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* LEFT COLUMN: Copy/Context */}
          {/* MOBILE: order-2 (appears AFTER TidyCal) */}
          {/* DESKTOP: lg:order-1 (appears on LEFT side) */}
          <div className="order-2 lg:order-1 px-0 lg:px-0 space-y-12">
            
            {/* 48-Hour ROI Pill */}
            <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-blue-50 border border-primary/20 p-6 shadow-sm">
              <p className="text-base sm:text-lg text-navy-900 font-medium text-center">
                🚀 Most clients see their first booked appointment within{" "}
                <span className="text-primary font-bold">48 hours</span> of going live
              </p>
            </div>

            {/* What the Call Helps You With */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-navy-900 mb-3">
                What the Call Helps You With
              </h2>
              <p className="text-muted-foreground mb-8">
                This isn't a sales pitch. It's a practical session to understand your business and show you exactly what's possible.
              </p>

              {/* Cards */}
              <div className="space-y-4">
                {WHAT_HELPS_ITEMS.map((item, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/30 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-bold text-primary">{item.num}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-navy-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Promise paragraph */}
              <div className="mt-8 bg-muted rounded-xl p-6 border border-border">
                <p className="text-muted-foreground italic">
                  By the end of the call, you'll have a clear assessment of your biggest bottleneck, a prioritized automation roadmap, and realistic next steps—with zero pressure and no pushy sales.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* END SPLIT-VIEW CONTAINER */}

        {/* BELOW SPLIT VIEW — FULL WIDTH, SINGLE COLUMN */}
        <div className="max-w-4xl mx-auto px-6 pb-16">
          
          {/* FAQ Section */}
          <section className="border-t border-border pt-16 pb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy-900 mb-3">
              Questions About Your Call
            </h2>
            <p className="text-muted-foreground mb-8">
              Everything you need to know about your free strategy call
            </p>

            <div className="space-y-4">
              {FAQ_ITEMS.map((item, index) => (
                <div
                  key={index}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-muted/50 transition-colors"
                    aria-expanded={openFaq === index}
                  >
                    <span className="font-medium text-navy-900">{item.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4">
                          <p className="text-base text-muted-foreground">{item.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </section>

          {/* Can't Find What You Need? Contact Card — Subtle Design */}
          <section className="pt-4 pb-8">
            <div className="rounded-lg bg-muted border border-border p-6">
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div 
                  className="flex-shrink-0 text-2xl" 
                  role="img" 
                  aria-label="Question mark"
                >
                  ❓
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-navy-900 mb-1">
                    Can't find what you need?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Our team responds within 2 hours. Let's talk about your specific situation.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Start Conversation →
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Sticky Mobile CTA - Jump to Calendar */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 shadow-lg z-50 lg:hidden pb-[calc(env(safe-area-inset-bottom,0px)+16px)]">
        <button 
          onClick={handleScrollToScheduler}
          className="w-full py-4 px-6 text-lg font-semibold rounded-full bg-brand-magenta text-white shadow-lg transition-all hover:scale-105 active:scale-95"
        >
          Book Strategy Call
        </button>
      </div>

      <Footer />
    </div>
  );
}
