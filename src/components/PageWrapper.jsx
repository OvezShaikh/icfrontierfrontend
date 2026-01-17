import { motion } from "framer-motion";

export default function PageWrapper({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="w-full min-h-screen bg-white text-gray-900 dark:bg-slate-900 dark:text-gray-100 transition-colors duration-500"
    >
      {children}
    </motion.main>
  );
}
