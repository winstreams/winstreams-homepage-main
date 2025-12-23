import { motion } from "framer-motion";

const AboutDeanCard = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-2xl border-2 border-gray-100 p-8 shadow-lg bg-white"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Avatar with initials fallback */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="flex-shrink-0"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center">
                <span className="text-2xl font-bold text-[#0A1628]">DL</span>
              </div>
            </motion.div>

            <div className="text-center md:text-left">
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                FOUNDER
              </p>
              <h3 className="text-2xl font-bold text-[#0A1628] mb-4">
                About Dean
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Dean has spent years in the trenches with local operators. He's watched them lose money to missed calls and eventually accept being tied to their phone. His mission is simple: give operators the infrastructure to run their business without being glued to it. To reclaim their time. To protect their focus. That's WinStreams.
              </p>
              <p className="text-sm font-medium text-gray-600">
                Dean Laster, Founder
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutDeanCard;
