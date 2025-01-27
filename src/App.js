import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Intro from "./components/Intro";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  const [inView, setInView] = useState(null);

  const handleScroll = () => {
    const sections = [
      "intro",
      "A-propos",
      "Competences",
      "Technologies",
      "Spiral",
      "Projets",
      "contact",
    ];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        // Adjusted visibility logic: the section is considered visible when it's closer to the center of the screen.
        if (
          rect.top <= window.innerHeight * 0.75 &&
          rect.bottom >= window.innerHeight * 0.25
        ) {
          setInView(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="portfolio">
      <Header />

      <motion.section
        id="intro"
        initial={{ opacity: 0, y: 50 }}
        animate={inView === "intro" ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <Intro />
      </motion.section>

      <motion.section
        id="A-propos"
        initial={{ opacity: 0, y: 50 }}
        animate={inView === "A-propos" ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <About />
      </motion.section>

      <motion.section
        id="Competences"
        initial={{ opacity: 0, y: 50 }}
        animate={inView === "Competences" ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <Services />
      </motion.section>

      <motion.section
        id="Technologies"
        initial={{ opacity: 0, y: 50 }}
        animate={inView === "Technologies" ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <Skills />
      </motion.section>

      <motion.section
        id="Projets"
        initial={{ opacity: 0, y: 50 }}
        animate={inView === "Projets" ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <Works />
      </motion.section>

      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        animate={inView === "contact" ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <Contact />
      </motion.section>

      <Footer />
    </div>
  );
};

export default App;
