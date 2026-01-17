import { motion } from "framer-motion";
import {
  MdAccountTree,
  MdPsychology,
  MdTrendingUp,
  MdInsights
} from "react-icons/md";
import PageWrapper from "../components/PageWrapper";

export default function Philosophy() {
  return (
    <PageWrapper>
      <section className="w-full overflow-x-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 py-32 space-y-28">

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-10 text-gray-900 dark:text-white">
              The IC Frontier Axiom
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Financial markets are not efficient forecasting machines, nor are
              they random systems. They are complex, adaptive structures governed
              by incentives, constraints, and information flow. Our philosophy
              rests on the premise that price behavior emerges from structure —
              not narrative.
            </p>
          </motion.div>

          {/* Core Axioms */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-10"
          >
            {[
              {
                title: "Adaptive Market Systems",
                text: "Markets evolve through participant behavior, capital constraints, and feedback loops rather than static rules.",
                icon: MdAccountTree,
                color: "from-blue-500 to-indigo-500"
              },
              {
                title: "Structure Over Narrative",
                text: "Liquidity, positioning, leverage, and incentives dominate outcomes far more reliably than stories or sentiment.",
                icon: MdInsights,
                color: "from-emerald-500 to-teal-500"
              },
              {
                title: "Probabilistic Reasoning",
                text: "Decision quality emerges from disciplined thinking under uncertainty, not from attempting to predict outcomes.",
                icon: MdPsychology,
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Principled Execution",
                text: "Sustainable performance is a function of process integrity, not isolated results.",
                icon: MdTrendingUp,
                color: "from-amber-500 to-orange-500"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative rounded-3xl p-8 lg:p-10 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-gray-200/50 dark:border-slate-700/50 shadow-xl"
              >
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.color} opacity-5`}
                />
                <div
                  className={`p-4 rounded-2xl bg-gradient-to-r ${item.color} bg-opacity-10 w-fit mb-6`}
                >
                  <item.icon className="w-10 h-10 text-white opacity-90" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.section>

          {/* Deeper Explanation */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl space-y-10"
          >
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              We do not attempt to forecast where markets should go. Instead, we
              focus on identifying when markets are structurally compelled to
              move. These moments arise when imbalances between positioning,
              liquidity, and risk tolerance make resolution unavoidable.
            </p>

            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Our role is not to impose opinion, but to interpret necessity. When
              incentives align and constraints tighten, participant behavior
              becomes increasingly deterministic. It is within these conditions
              that asymmetric opportunities emerge.
            </p>
          </motion.section>

          {/* Closing */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="pt-12 border-t border-gray-200 dark:border-slate-700 max-w-4xl"
          >
            <p className="text-xl italic text-gray-600 dark:text-gray-400">
              Trading is not about prediction; it is about understanding the
              structural imperatives that guide price.
            </p>
          </motion.section>

        </div>
      </section>
    </PageWrapper>
  );
}
