import React from "react";
import { motion } from "framer-motion";

const Header = ({ activeSection }) => (
  <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white z-50 shadow-lg">
    <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between">
      <ul className="flex flex-wrap justify-center space-x-6">
        {[
          "intro",
          "A-propos",
          "Competences",
          "Technologies",
          "Projets",
          "contact",
        ].map((section) => (
          <motion.li
            key={section}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href={`#${section}`}
              className={`text-sm sm:text-lg font-semibold hover:text-yellow-300 transition-colors ${
                activeSection === section ? "text-yellow-300" : ""
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </motion.li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
