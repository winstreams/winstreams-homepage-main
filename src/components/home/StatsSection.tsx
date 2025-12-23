import { motion } from "framer-motion";

const STATS = [
  { value: "40%", label: "More Booked Jobs", subtext: "in the first 30 days", bg: "bg-blue-50 border border-blue-200" },
  { value: "70%", label: "Missed Calls Converted", subtext: "into conversations", bg: "bg-primary/10 border border-primary/20" },
  { value: "$12K+", label: "Monthly Revenue", subtext: "recovered for the average client", bg: "bg-blue-50 border border-blue-200" },
  { value: "24/7", label: "Lead Coverage", subtext: "even when you're off the clock", bg: "bg-muted border border-border" },
];

export function StatsSection() {
  return (
    <section id="results" className="py-20 bg-muted px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {STATS.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className={`${stat.bg} rounded-2xl p-6`}>
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="font-heading text-foreground font-bold">{stat.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.subtext}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
