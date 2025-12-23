import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneIncoming, Headset, ArrowDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ROTATING_WORDS = [
  'Call',
  'Qualified Lead',
  'Booking',
  'New Customer'
];

const CONVERSATION = [
  {
    sender: "customer",
    text: "Hi, what do you charge for AC repair? When's your next opening?",
    className: "bg-accent/20 p-3 rounded-2xl rounded-tr-none shadow-sm max-w-[85%] ml-auto text-sm text-foreground"
  },
  {
    sender: "ai",
    text: "Diagnostic visit is $89, repairs quoted after. We have tomorrow at 10am or Thursday at 2pm.",
    className: "bg-card p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] text-sm text-foreground border border-border"
  },
  {
    sender: "customer",
    text: "Tomorrow at 10am works.",
    className: "bg-accent/20 p-3 rounded-2xl rounded-tr-none shadow-sm max-w-[85%] ml-auto text-sm text-foreground"
  },
  {
    sender: "ai",
    text: "Perfect! You're booked for 10am tomorrow with Mike. I've texted you the confirmation.",
    className: "bg-card p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] text-sm text-foreground border border-border"
  },
  {
    sender: "confirmation",
    text: "✓ Appointment confirmed for Saturday 10am",
    className: "bg-green-50 p-3 rounded-2xl text-sm text-green-800 border-l-4 border-green-500 font-medium"
  }
];

interface HeroProps {
  onBookingClick: () => void;
}

export function Hero({ onBookingClick }: HeroProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
    if (typeof window === 'undefined') return; // SSR Safety
    
    const intervalDuration = window.innerWidth < 768 ? 4000 : 3000;
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, intervalDuration);
    
    return () => clearInterval(interval);
  }, []);

  const scrollToHowItWorks = () => {
    setIsScrolling(true);
    const el = document.getElementById('how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => setIsScrolling(false), 1000);
    }
  };

  return (
    <section className="relative py-8 sm:py-12 md:py-20 bg-gradient-to-b from-background to-blue-50 overflow-hidden">
      
      {/* Subtle Depth Spotlight (Width 60%, Opacity 0.07) */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-[radial-gradient(ellipse_at_top_right,rgba(8,30,131,0.07),transparent_70%)] pointer-events-none" />

      {/* Content Container (Z-Index 10 ensures text sits above glow) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Copy + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="mb-4 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-foreground">
              Built for busy local operators
            </div>

            {/* Animated Headline - Single H1 with GPU acceleration */}
            <h1 
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight will-change-contents transform-gpu"
              aria-label="Never Miss Another Call, Qualified Lead, Booking, or New Customer Again"
            >
              Never Miss Another{' '}
              {isHydrated ? (
                <span className="text-primary inline-block min-w-[200px]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={ROTATING_WORDS[wordIndex]}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="inline-block"
                    >
                      {ROTATING_WORDS[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              ) : (
                <span className="text-primary">Call</span>
              )}
              {' '}Again
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-lg leading-relaxed">
              Even when you're on a job, with a customer, or closed for the day.
            </p>

            {/* Body Copy */}
            <p className="text-base text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Your AI receptionist intercepts missed calls, texts back instantly, qualifies the lead, and books the job.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Button
                onClick={onBookingClick}
                variant="hero"
                size="lg"
                className="w-full sm:w-auto font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all"
              >
                Book Strategy Call
              </Button>
              <Button
                onClick={scrollToHowItWorks}
                variant="heroOutline"
                size="lg"
                className="w-full sm:w-auto font-semibold active:scale-95 transition-all group"
              >
                See How It Works
                <motion.span
                  animate={isScrolling ? { y: [0, 4, 0] } : {}}
                  transition={{ duration: 0.6, repeat: isScrolling ? Infinity : 0 }}
                  className="ml-2"
                >
                  <ArrowDown className="w-4 h-4" aria-hidden="true" />
                </motion.span>
              </Button>
            </div>

            {/* Tagline - BELOW CTAs */}
            <p className="text-base text-primary italic mb-4 max-w-lg">
              Don't turn busy into missed — let us help you Winstreams.
            </p>
          </motion.div>

          {/* Right: Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-[85vw] sm:w-[320px] h-[500px] sm:h-[560px] bg-secondary rounded-[40px] p-3 shadow-2xl">
              <div className="bg-muted rounded-[32px] h-full flex flex-col overflow-hidden">
                {/* Phone Header */}
                <div className="bg-secondary text-secondary-foreground px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Headset className="w-5 h-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-wide">YOUR RECEPTIONIST</p>
                      <p className="text-[10px] text-muted-foreground">Working for Your Business</p>
                    </div>
                  </div>
                  <PhoneIncoming className="w-5 h-5 text-green-400" aria-hidden="true" />
                </div>

                {/* Conversation Messages */}
                <div className="flex-1 p-4 space-y-3 overflow-y-auto no-scrollbar">
                  {CONVERSATION.map((message, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.2 }}
                    >
                      <div className={message.className}>
                        {message.text}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Status Footer */}
                <div className="px-4 py-3 bg-green-50 border-t border-green-100 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-green-700">RECEPTIONIST ACTIVE</span>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
