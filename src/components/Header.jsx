import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#EFF6FF] sticky top-0 z-50 border-b border-gray-100"
    >
      <div className="container mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-[#1E3A8A]">Muhiris</span>
          <span className="text-xl font-bold text-[#0D99FF]">Doctor</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-[#1E3A8A] font-medium hover:text-[#0D99FF] transition-colors"
          >
            Home
          </Link>
          <Link
            to="/specialties"
            className="text-[#1E3A8A] font-medium hover:text-[#0D99FF] transition-colors"
          >
            Specialties
          </Link>
          <Link
            to="/doctors"
            className="text-[#1E3A8A] font-medium hover:text-[#0D99FF] transition-colors"
          >
            Doctors
          </Link>
          <Link
            to="/opd"
            className="text-[#1E3A8A] font-medium hover:text-[#0D99FF] transition-colors"
          >
            OPD
          </Link>
          <Link
            to="/find-doctor"
            className="text-[#1E3A8A] font-medium hover:text-[#0D99FF] transition-colors"
          >
            Find Doctor
          </Link>
          <Link
            to="/login"
            className="text-[#1E3A8A] font-medium hover:text-[#0D99FF] transition-colors"
          >
            Login
          </Link>
          <Button className="bg-[#0D99FF] hover:bg-[#0D85FF]">Book Now</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#1E3A8A]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-gray-100"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              to="/"
              className="text-[#1E3A8A] font-medium hover:text-[#0D99FF] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/specialties"
              className="text-[#1E3A8A] font-medium hover:text-[#0D99FF] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Specialties
            </Link>
            <Link
              to="/doctors"
              className="text-[#1E3A8A] font-medium hover:text-[#0D99FF] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Doctors
            </Link>
            <Link
              to="/opd"
              className="text-[#1E3A8A] font-medium hover:text-[#0D99FF] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              OPD
            </Link>
            <Link
              to="find-doctor"
              className="text-[#1E3A8A] font-medium hover:text-[#0D99FF] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Find Doctor
            </Link>
            <Link
              to="/login"
              className="text-[#1E3A8A] font-medium hover:text-[#0D99FF] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
            <Button
              className="bg-[#0D99FF] hover:bg-[#0D85FF] w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
