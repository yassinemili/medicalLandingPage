import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F2851] text-white py-12 px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <span className="text-xl font-bold text-white">Muhiris</span>
              <span className="text-xl font-bold text-[#0D99FF]">Doctor</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Best healthcare service provider in the town. Book an appointment now!
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-gray-300 hover:text-white transition-colors">
                  Doctors
                </Link>
              </li>
              <li>
                <Link to="/specialties" className="text-gray-300 hover:text-white transition-colors">
                  Specialties
                </Link>
              </li>
              <li>
                <Link to="/opd" className="text-gray-300 hover:text-white transition-colors">
                  OPD
                </Link>
              </li>
              <li>
                <Link to="/consultation" className="text-gray-300 hover:text-white transition-colors">
                  Consultation
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-gray-300 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-300 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <span className="block">+123-456-7890</span>
                <span className="block">info@muhirisdoctor.com</span>
              </li>
              <li className="text-gray-300 mt-4">
                123 Medical Plaza,
                <br />
                Healthcare Avenue,
                <br />
                Wellness City, 12345
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-300 text-sm">
          Copyright © 2024 Muhiris Doctor. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
