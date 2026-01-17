import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <PageWrapper>
      <h2 className="text-4xl font-bold mb-8">What Our Clients Say</h2>

      <motion.div
        whileHover={{ scale: 1.03 }}
        className="bg-white p-6 rounded-xl shadow-md max-w-xl"
      >
        <p className="text-gray-600 italic">
          “Amazing service! Everything was perfectly planned.”
        </p>
        <p className="mt-4 font-semibold">– Happy Traveler</p>
      </motion.div>
    </PageWrapper>
  );
}
