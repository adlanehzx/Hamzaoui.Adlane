import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => (
  <section
    id="contact"
    className="min-h-screen py-20 bg-gradient-to-br from-green-400 to-blue-500 text-white"
  >
    <div className="container mx-auto px-6">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contactez-moi
      </motion.h2>
      <motion.div
        className="max-w-3xl mx-auto bg-white text-gray-800 p-8 rounded-lg shadow-lg "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-center mb-8 text-lg">
          Mon Profil vous interesse ? N'hésitez pas à me contacter !
        </p>
        <div className="text-center mb-8">
          <a
            href="mailto:contact.adlanehz@gmail.com"
            className="text-2xl text-blue-600 hover:text-blue-800 transition-colors"
          >
            contact.adlanehz@gmail.com
          </a>
        </div>
        {/* Liens sociaux */}
        <div className="flex justify-center space-x-6 mt-8">
          <motion.a
            href="https://github.com/adlanehzx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-600 hover:text-blue-600 transition-colors"
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/adlane-hamzaoui/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-600 hover:text-blue-400 transition-colors"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="mailto:contact.adlanehz@gmail.com"
            className="text-3xl text-gray-600 hover:text-pink-600 transition-colors"
            whileHover={{ scale: 1.2 }}
          >
            <FaEnvelope />
          </motion.a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Contact;
