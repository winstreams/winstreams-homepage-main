import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0A1628] mb-6">
            Your business deserves a voice that never sleeps.
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            Start in 3–5 days. No setup fees. No long-term contracts.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-600 to-pink-500 text-white rounded-full px-10 py-4 font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              View Pricing & Plans
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/book"
              className="text-gray-600 hover:text-pink-600 font-medium transition-colors"
            >
              or Schedule a Quick Call
            </Link>
          </div>

          <p className="text-sm text-gray-500">
            Most customers are live within a week.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
