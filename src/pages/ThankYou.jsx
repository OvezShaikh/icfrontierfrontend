import { motion } from "framer-motion";
import { MdCheckCircleOutline } from "react-icons/md";
import PageWrapper from "../components/PageWrapper";

export default function ThankYou() {
  return (
    <PageWrapper>
      <section className="w-full min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl text-center px-6"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="flex justify-center mb-8"
          >
            <div className="p-4 rounded-full bg-blue-100/70 dark:bg-blue-900/30 backdrop-blur-md">
              <MdCheckCircleOutline className="w-14 h-14 text-blue-600 dark:text-blue-400" />
            </div>
          </motion.div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white mb-6">
            Message Received
          </h1>

          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
            Thank you for reaching out. Your message has been received and will
            be reviewed thoughtfully.
          </p>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            We respond selectively and with intent. If your inquiry aligns,
            you’ll hear from us.
          </p>
        </motion.div>
      </section>
    </PageWrapper>
  );
}
