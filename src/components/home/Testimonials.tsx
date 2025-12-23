import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const TESTIMONIALS = [
  {
    quote: "We were losing 3-4 reservations every night to voicemail. Winstreams recovered $12,000 in bookings in the first month. Our phone actually works FOR us now, not against us.",
    name: "Sarah M.",
    role: "Restaurant Owner",
    initials: "SM",
    // TODO: Replace with client-approved authentic operator photo. NO AI-GENERATED FACES.
    img: null,
  },
  {
    quote: "Before Winstreams, evening calls went to voicemail and clients booked elsewhere. Now we capture every inquiry instantly—even when we're with customers. We recovered $7,800 in just 30 days.",
    name: "Mike T.",
    role: "Salon Owner",
    initials: "MT",
    // TODO: Replace with client-approved authentic operator photo. NO AI-GENERATED FACES.
    img: null,
  },
  {
    quote: "Emergency calls after 5pm used to go to voicemail, and by morning they'd hired someone else. Now Winstreams patches urgent calls straight through. I have my evenings back AND we don't lose revenue.",
    name: "Lisa C.",
    role: "HVAC Business",
    initials: "LC",
    // TODO: Replace with client-approved authentic operator photo. NO AI-GENERATED FACES.
    img: null,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center font-heading text-h2 text-foreground font-bold mb-4">
          Real Operators. Real Results.
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          See what business owners are saying about Winstreams.
        </p>
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg hover:border-primary transition-all h-full border-border">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary">⭐</span>
                  ))}
                </div>
                <p className="text-foreground italic text-sm mb-4 leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  {t.img ? (
                    <img
                      src={t.img}
                      alt={t.name}
                      loading="lazy"
                      className="w-20 h-20 rounded-full object-cover border-2 border-slate-100"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-slate-200 border-2 border-slate-100 flex items-center justify-center">
                      <span className="text-2xl font-semibold text-slate-600">{t.initials}</span>
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-foreground text-xs">{t.name}</p>
                    <p className="text-muted-foreground text-xs">{t.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 pb-2">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="snap-center min-w-[85%] shrink-0">
              <Card className="p-6 h-full shadow-sm">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-sm">⭐</span>
                  ))}
                </div>
                <p className="text-foreground italic text-sm mb-4 leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  {t.img ? (
                    <img
                      src={t.img}
                      alt={t.name}
                      loading="lazy"
                      className="w-20 h-20 rounded-full object-cover border-2 border-slate-100"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-slate-200 border-2 border-slate-100 flex items-center justify-center">
                      <span className="text-2xl font-semibold text-slate-600">{t.initials}</span>
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-foreground text-xs">{t.name}</p>
                    <p className="text-muted-foreground text-xs">{t.role}</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
