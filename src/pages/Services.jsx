import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";
import {
  MdTrendingUp,
  MdAccountBalance,
  MdSecurity,
  MdBarChart
} from "react-icons/md";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      icon: MdTrendingUp,
      title: "Investment Banking",
      description: "Strategic advisory for mergers, acquisitions, capital raising, and complex financial transactions.",
      features: ["M&A Advisory", "IPO Support", "Debt Financing"]
    },
    {
      icon: MdAccountBalance,
      title: "Private Equity",
      description: "Direct investments in high-growth companies with active management and value creation strategies.",
      features: ["Growth Capital", "Buyouts", "Distressed Assets"]
    },
    {
      icon: MdSecurity,
      title: "Wealth Management",
      description: "Personalized portfolio management with risk-adjusted strategies for HNIs and institutions.",
      features: ["Portfolio Optimization", "Tax Planning", "Estate Planning"]
    },
    {
      icon: MdBarChart,
      title: "Financial Advisory",
      description: "Comprehensive advisory services for corporate finance, restructuring, and strategic planning.",
      features: ["Valuation", "Capital Structure", "Risk Management"]
    }
  ];

  return (
    <PageWrapper>
      <section className="w-full py-20">
        <div className="max-w-[1440px] mx-auto px-16 max-lg:px-8 max-sm:px-4 ">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20 max-w-4xl mx-auto"
          >
            <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-emerald-400 dark:via-teal-400 dark:to-blue-400 bg-clip-text text-transparent mb-6 inline-block">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Precision financial solutions for ambitious enterprises and discerning investors
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl p-8 lg:p-10 rounded-3xl border border-gray-200/50 dark:border-slate-700/50 shadow-xl hover:shadow-2xl hover:bg-white dark:hover:bg-slate-700/90 transition-all duration-500 cursor-pointer"
                >
                  {/* Icon */}
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-all duration-300 mx-auto">
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-center">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-center">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="h-12 flex items-center justify-center">
                    <Link to="/contact" className="w-full">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 border border-blue-500/30 h-full flex items-center justify-center"
                      >
                        Learn More
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
