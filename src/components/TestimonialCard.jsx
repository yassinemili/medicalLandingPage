import { motion } from "framer-motion";

export default function TestimonialCard({ quote, name, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-6 rounded-lg shadow-sm"
    >
      <div className="mb-4 text-[#0D99FF]">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.4 16.2H6.8c-.4 0-.7-.3-.7-.7V10.9c0-2.3 1.9-4.2 4.2-4.2h.7c.4 0 .7.3.7.7v4.6c0 .4-.3.7-.7.7H9.6v2.1h1.8c.4 0 .7.3.7.7s-.3.7-.7.7Zm6 0h-4.6c-.4 0-.7-.3-.7-.7V10.9c0-2.3 1.9-4.2 4.2-4.2h.7c.4 0 .7.3.7.7v4.6c0 .4-.3.7-.7.7h-1.4v2.1h1.8c.4 0 .7.3.7.7s-.3.7-.7.7Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <p className="text-gray-600 mb-4">{quote}</p>
      <div className="flex items-center">
        <span className="font-medium text-[#1E3A8A]">{name}</span>
      </div>
    </motion.div>
  );
}
