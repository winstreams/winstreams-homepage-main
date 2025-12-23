import { motion } from "framer-motion";

const features = [
  {
    title: "Invisible Reliability",
    description:
      "Every call answered. You don't think about it—you just wake up to booked appointments.",
  },
  {
    title: "Radical Simplicity",
    description:
      "Setup takes 15 minutes. No coding, no dashboards. Just results.",
  },
  {
    title: "Amplifying Your Team",
    description:
      "We protect their focus. They spend time on jobs, not phones.",
  },
];

const stats = [
  "100% of calls answered.",
  "3–5 days to go live.",
  "No setup fees.",
];

const socialProof = [
  "Shaped with feedback from local owners who were tired of losing work to missed calls.",
  "Already in use with home services operators who want their phone handled without adding another hire.",
  "Early customers tell us the biggest shift isn't the tech—it's the peace of mind of knowing every call is answered.",
];

const BuiltByOperators = () => {
  return (
    <section className="bg-gradient-to-b from-[#0A1628] to-[#0D1B2E] pt-0 pb-20 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Part A: Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Built by operators.
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            WinStreams was built to lift the weight—not by replacing you, but by standing quietly beside you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="text-center"
            >
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Part B: Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-center"
            >
              <p className="text-lg font-semibold text-white">{stat}</p>
            </motion.div>
          ))}
        </div>

        {/* Part C: Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Built with real operators, not theory.
          </h3>

          <div className="space-y-6">
            {socialProof.map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                className="text-gray-400 leading-relaxed max-w-2xl mx-auto"
              >
                {line}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BuiltByOperators;
