import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

export default function Philosophy() {
  return (
    <PageWrapper>
      <section className="w-full overflow-x-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-32 space-y-24">

          {/* Axiom Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-10 text-gray-900 dark:text-white">
              The IC Frontier Axiom
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl">
              Financial markets are fundamentally a sequential decision-making
              game, played under conditions of partial information. Most
              participants attempt to forecast outcomes using narratives,
              sentiment, and expectation. Our edge comes from observing where
              the market must act — independent of consensus or belief.
            </p>
          </motion.div>

          {/* Core Philosophy */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Markets are not linear systems. They are complex, adaptive
              environments shaped by liquidity, incentives, and constraint.
              Price does not move because participants are correct; it moves
              because participants are compelled to act.
            </p>

            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              We do not trade predictions or opinions. We study the mechanics
              of resolution — the structural conditions under which imbalance
              must be resolved — and we engage only when those conditions
              present asymmetric clarity.
            </p>
          </motion.section>

          {/* Principles */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
              Core Principles
            </h2>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-medium mb-3 text-gray-900 dark:text-white">
                  Probabilistic Decision-Making
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Every position is an expression of probability, not belief.
                  We respond to observable structure rather than speculative
                  expectation, ensuring that decisions remain grounded in
                  measurable conditions.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-medium mb-3 text-gray-900 dark:text-white">
                  Intellectual Plasticity
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Hypotheses are held conditionally. As price and liquidity
                  evolve, exposure is continuously recalibrated. No view is
                  defended beyond its structural validity.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-medium mb-3 text-gray-900 dark:text-white">
                  Structural Focus
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  We trade the mechanics of market resolution — not narratives,
                  themes, or sentiment. Structure dictates behavior, and
                  behavior dictates outcome.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Closing Line */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="pt-12 border-t border-gray-200 dark:border-slate-700"
          >
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl">
              This axiom governs how we interpret markets, allocate risk, and
              execute decisions — across regimes, instruments, and conditions.
            </p>
          </motion.section>

        </div>
      </section>
    </PageWrapper>
  );
}
