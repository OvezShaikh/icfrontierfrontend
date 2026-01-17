import { motion } from "framer-motion";
import {
  MdApartment,
  MdPsychology,
  MdBalance,
  MdSecurity,
  MdAutorenew,
  MdTrendingUp
} from "react-icons/md";
import PageWrapper from "../components/PageWrapper";
import { Link } from "react-router-dom";
import { images } from "../constants/images";

export default function Home() {
  return (
    <PageWrapper>
      <section className="w-full overflow-x-hidden bg-gray-50 dark:bg-slate-900 transition-colors duration-500">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-32 space-y-24 lg:space-y-32" >

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative overflow-hidden text-center lg:text-left rounded-lg bg-white"
            style={{
              backgroundImage: `url(${images.homeBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            {/* Theme-aware overlay */}
            <div
              className="
      absolute inset-0
      bg-white/95 dark:bg-slate-900/75
      backdrop-blur-[1px]
      transition-colors duration-500
    "
            />

            {/* Content */}
            <div className="relative z-10 px-6 py-10 sm:px-8 sm:py-12 md:px-10 md:py-14 lg:p-16">

              {/* Heading */}
              <h1 className="
    text-3xl sm:text-4xl md:text-5xl lg:text-6xl
    font-bold tracking-tight leading-tight
    mb-8 md:mb-10
    text-gray-900 dark:text-white
    max-w-5xl mx-auto lg:mx-0
  ">
                Markets are high-entropy systems;
                <br className="hidden md:block" />
                <span className="block mt-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  opportunity emerges where structure meets necessity.
                </span>
              </h1>

              {/* Body */}
              <p className="
    text-base sm:text-lg md:text-xl
    leading-relaxed md:leading-loose
    max-w-3xl md:max-w-4xl
    mx-auto lg:mx-0
    text-gray-700 dark:text-gray-300
    mb-8 md:mb-10
  ">
                Financial markets are not linear or predictable. They are complex, adaptive environments in which the vast majority of participants attempt to forecast the future based on incomplete information.
                <br className="hidden sm:block" /><br className="hidden sm:block" />
                At <span className="font-semibold text-gray-900 dark:text-white">IC Frontier Capital</span>, we do not chase narratives; we focus on the structural mechanics of the present.
                <br className="hidden sm:block" /><br className="hidden sm:block" />
                Our mission is to identify the precise moments where the market is compelled to resolve an imbalance and to act with conviction when these moments arise.
              </p>

              {/* Quote */}
              <p className="
    text-sm sm:text-base md:text-lg
    italic font-medium
    text-gray-600 dark:text-gray-400
    max-w-3xl
    mx-auto lg:mx-0
    mb-10 md:mb-14
  ">
                Trading is not about prediction; it is about understanding the structural imperatives that guide price.
              </p>

              {/* CTA */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex justify-center lg:justify-start"
              >
                <Link
                  to="/services"
                  className="
        bg-gradient-to-r from-blue-600 to-indigo-600
        text-white
        px-8 sm:px-10 md:px-12
        py-4 md:py-5
        rounded-2xl
        font-semibold
        text-base sm:text-lg md:text-xl
        shadow-xl hover:shadow-2xl
        transition-all duration-300
        inline-flex items-center gap-3
      "
                >
                  <MdTrendingUp className="w-5 h-5 md:w-6 md:h-6" />
                  Explore Our Approach
                </Link>
              </motion.div>

            </div>
          </motion.div>



          {/* Philosophy Section */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div className="space-y-8 text-gray-800 dark:text-gray-200">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text">
                The IC Frontier Axiom
              </h2>
              <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <p className="text-xl lg:text-2xl leading-relaxed">
                    Financial markets are fundamentally a sequential decision-making game, played under conditions of partial information. Most participants attempt to forecast outcomes, relying on narratives and sentiment.
                  </p>
                  <p className="text-xl lg:text-2xl leading-relaxed">
                    Our edge comes from observing where the market must act, independent of consensus or expectation.
                  </p>
                  <p className="text-xl lg:text-2xl leading-relaxed">
                    This philosophy guides every aspect of our strategy, from identifying regimes to sizing positions and executing trades.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <div className="w-full max-w-md mx-auto lg:ml-auto p-8 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-3xl backdrop-blur-xl border border-blue-200/30 shadow-2xl">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                        <MdApartment className="w-12 h-12 mx-auto text-blue-400 mb-2" />
                        <p className="text-white font-medium">Market Structure</p>
                      </div>
                      <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                        <MdPsychology className="w-12 h-12 mx-auto text-indigo-400 mb-2" />
                        <p className="text-white font-medium">Behavioral Dynamics</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.section>

          {/* Principles Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text">
              Core Principles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  title: "Probabilistic Decision-Making",
                  text: "Every position is a response to structural probabilities, not to speculation or narrative conviction.",
                  icon: MdApartment,
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Intellectual Plasticity",
                  text: "Hypotheses are continuously revised as price, liquidity, and regime conditions evolve.",
                  icon: MdPsychology,
                  color: "from-purple-500 to-pink-500"
                },
                {
                  title: "Structural Focus",
                  text: "We trade the mechanics of resolution — not the stories surrounding them.",
                  icon: MdBalance,
                  color: "from-indigo-500 to-blue-500"
                },
                {
                  title: "Risk Architecture",
                  text: "Risk is embedded at inception through mathematically defined invalidation points and controlled exposure.",
                  icon: MdSecurity,
                  color: "from-emerald-500 to-teal-500"
                },
                {
                  title: "Adaptive Learning",
                  text: "Execution feedback and research form a closed loop, ensuring continuous structural improvement.",
                  icon: MdAutorenew,
                  color: "from-orange-500 to-red-500"
                },
                {
                  title: "Capital Preservation",
                  text: "Survival is prioritized through asymmetric payoff construction and ergodic risk constraints.",
                  icon: MdTrendingUp,
                  color: "from-amber-500 to-yellow-500"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative rounded-3xl p-8 lg:p-10 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-gray-200/50 dark:border-slate-700/50 shadow-xl hover:shadow-3xl hover:bg-white dark:hover:bg-slate-700/90 transition-all duration-500 cursor-pointer overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${item.color} bg-opacity-10 backdrop-blur-sm mb-6 w-fit mx-auto group-hover:scale-110 transition-all duration-300`}>
                    <item.icon className="w-12 h-12 lg:w-14 lg:h-14 text-white opacity-90" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base lg:text-lg">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Stats Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="bg-gradient-to-r from-blue-600/5 via-indigo-600/5 to-purple-600/5 backdrop-blur-xl rounded-3xl p-12 lg:p-20 border border-blue-200/30"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
              How We Understand the Market
            </h3>
            <h3 className="text-xl lg:text-xl font-semibold text-center mb-12 text-gray-600 dark:text-gray-200">
              We do not categorize markets by asset class. We categorize by regimes of liquidity — the fundamental states in which price behavior emerges.

            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 text-center">
              {[
                { num: "Equilibrium — Mean Reversion", label: "Price oscillates within consensus bounds as information is largely digested. Action is selective, disciplined, and microstructure-driven.", icon: MdBalance },
                { num: "Expansion — Discovery", label: "New information disrupts consensus, driving price discovery and directional exploration beyond prior structure.", icon: MdTrendingUp },
                { num: "Dislocation — Forced Action", label: "Structural stress compels deterministic participant behavior, creating high-conviction opportunities under elevated volatility.", icon: MdSecurity }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
                  className="group p-6 lg:p-8 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl border border-gray-200/30 hover:bg-white dark:hover:bg-slate-700/70 transition-all duration-400 hover:-translate-y-2"
                >
                  <stat.icon className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-4 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl lg:text-4xl font-black mb-2 bg-gradient-to-r from-gray-900 to-blue-900 dark:from-white dark:to-blue-200 bg-clip-text text-transparent">
                    {stat.num}
                  </div>
                  <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-slate-900 via-gray-900 to-black text-white rounded-3xl p-12 lg:p-20 xl:p-28 shadow-2xl border border-white/10 backdrop-blur-xl">
              <MdTrendingUp className="w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-8 text-blue-400 opacity-80" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 leading-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text">
                Contact IC Frontier Capital
              </h2>
              <p className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed">
                For professional inquiries, research discussion, or strategic dialogue, please reach out directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-12 lg:px-16 py-6 rounded-2xl font-bold text-lg lg:text-xl shadow-2xl hover:shadow-3xl transition-all duration-400 flex items-center gap-3"
                >
                  <MdBalance className="w-8 h-8" />
                  Send a Message
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white/20 backdrop-blur-md text-black hover:text-white px-12 lg:px-16 py-6 rounded-2xl font-bold text-lg lg:text-xl hover:bg-slate-100/10 hover:border-white/30 transition-all duration-400 flex items-center gap-3"
                >
                  <MdPsychology className="w-8 h-8" />
                  Professional Contact
                </motion.button>
              </div>
            </div>
          </motion.section>

        </div>
      </section>
    </PageWrapper>
  );
}
