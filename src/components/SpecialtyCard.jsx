import React from "react";
import { motion } from "framer-motion";
import {
  SmileIcon as Tooth,
  Stethoscope,
  Brain,
  Heart,
  Pill,
  Users,
  FileText,
  Eye,
  AmbulanceIcon as FirstAid,
} from "lucide-react";
import PropTypes from "prop-types";

export default function SpecialtyCard({
  icon,
  title,
  description,
  featured = false,
  delay = 0,
}) {
  const getIcon = () => {
    switch (icon) {
      case "tooth":
        return <Tooth className="h-6 w-6" />;
      case "stethoscope":
        return <Stethoscope className="h-6 w-6" />;
      case "brain":
        return <Brain className="h-6 w-6" />;
      case "heart":
        return <Heart className="h-6 w-6" />;
      case "pill":
        return <Pill className="h-6 w-6" />;
      case "users":
        return <Users className="h-6 w-6" />;
      case "dna":
        return <FileText className="h-6 w-6" />;
      case "eye":
        return <Eye className="h-6 w-6" />;
      case "first-aid":
        return <FirstAid className="h-6 w-6" />;
      default:
        return <Stethoscope className="h-6 w-6" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`flex flex-col items-center text-center p-6 rounded-lg ${
        featured
          ? "bg-[#0D99FF] text-white"
          : "bg-white border border-gray-100 hover:border-[#0D99FF] hover:shadow-md"
      }`}
    >
      <div
        className={`p-4 rounded-full ${
          featured ? "bg-white text-[#0D99FF]" : "bg-[#EFF6FF] text-[#0D99FF]"
        }`}
      >
        {getIcon()}
      </div>
      <h3
        className={`text-lg font-semibold mt-4 ${
          featured ? "text-white" : "text-[#1E3A8A]"
        }`}
      >
        {title}
      </h3>
      <p
        className={`mt-2 text-sm ${
          featured ? "text-white/90" : "text-gray-600"
        }`}
      >
        {description}
      </p>
    </motion.div>
  );
}

SpecialtyCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  featured: PropTypes.bool,
  delay: PropTypes.number,
};
