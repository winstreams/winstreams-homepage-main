import { motion } from "framer-motion";
import { Phone, Target, Clock, Shield } from "lucide-react";

const benefits = [
  { icon: Phone, label: "MISS FEWER CALLS" },
  { icon: Target, label: "BOOK MORE JOBS" },
  { icon: Clock, label: "OWN YOUR TIME" },
  { icon: Shield, label: "PROTECT YOUR FOCUS" },
];

const OurMission = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0A1628] mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-2xl mx-auto">
            Help local business owners reclaim their time, stop revenue leaks, and build a company that can grow without consuming their entire life.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-xs uppercase tracking-wider text-gray-500 mb-8"
        >
          HOW WE HELP OWNERS
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 p-6 rounded-2xl border-2 border-gray-100 bg-white shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-pink-50">
                  <Icon className="h-7 w-7 text-pink-500" />
                </div>
                <p className="text-sm font-bold text-[#0A1628] tracking-wide">
                  {benefit.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurMission;
