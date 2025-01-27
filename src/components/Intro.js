import { motion } from "framer-motion";
import React from "react";

const Intro = () => (
  <section
    id="intro"
    className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white text-center"
  >
    <motion.div
      className="px-4 sm:px-8 md:px-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-xl sm:text-2xl mb-4">
        Salut, moi c'est{" "}
        <motion.span
          initial={{ color: "#fff" }}
          animate={{ color: ["#ff0080", "#00ff80", "#0080ff", "#ff0080"] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <h1 className="text-2xl sm:text-4xl mb-4 name-spacing font-bold">
            Hamzaoui Adlane
          </h1>
        </motion.span>
      </h3>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
        Développeur Fullstack Passionné
      </h1>

      {/* Container pour les boutons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
        {/* Bouton 1 */}
        <motion.a
          href="#A-propos"
          className="bg-yellow-400 hover:bg-yellow-300 text-gray-800 font-bold py-3 px-6 rounded-full text-sm transition-colors shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Découvrez mon univers
        </motion.a>

        {/* Bouton 2 */}
        <motion.a
          href="/CV_Adlane_Hamzaoui.pdf"
          target="_blank"
          className="bg-yellow-400 hover:bg-yellow-300 text-gray-800 font-bold py-3 px-4 md:px-6 rounded-full text-xs sm:text-sm md:text-base lg:text-lg transition-colors shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Téléchargez Mon CV
        </motion.a>
      </div>
    </motion.div>
  </section>
);

export default Intro;
