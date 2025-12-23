import { motion } from "framer-motion";

const statements = [
  "We are not a tech startup trying to disrupt you.",
  "We are not a bloated enterprise software platform.",
  null, // Special case for the "time" highlight
  "We don't believe in replacing humans. We believe in protecting their focus.",
];

const WhatWereNot = () => {
  return (
    <section className="bg-[#0A1628] py-20 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <div className="space-y-8">
          {statements.map((statement, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
              className="text-2xl lg:text-3xl font-bold text-white leading-relaxed"
            >
              {statement === null ? (
                <>
                  We are not selling 'AI magic'—we are selling{" "}
                  <span className="text-pink-500">time</span>.
                </>
              ) : (
                statement
              )}
            </motion.p>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.75, ease: "easeOut" }}
          className="mt-12 text-xl text-gray-300 leading-relaxed"
        >
          We're here to give you back what matters most: your time.
        </motion.p>
      </div>
    </section>
  );
};

export default WhatWereNot;
