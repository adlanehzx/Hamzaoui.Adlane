import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaCss3,
  FaHtml5,
  FaJsSquare,
  FaGitAlt,
  FaDocker,
  FaBootstrap,
  FaSass,
  FaPhp,
  FaLinux,
  FaSlack,
  FaExchangeAlt,
  FaDatabase,
} from "react-icons/fa";
import {
  SiMysql,
  SiNestjs,
  SiTailwindcss,
  SiPostgresql,
  SiPython,
  SiTypescript,
  SiFigma,
  SiPostman,
  SiGatsby,
  SiInsomnia,
} from "react-icons/si";
const technologiesInner = [
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "CSS3", icon: <FaCss3 className="text-blue-500" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "NestJS", icon: <SiNestjs className="text-red-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-blue-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
  { name: "SCSS", icon: <FaSass className="text-pink-500" /> },
  { name: "PHP", icon: <FaPhp className="text-indigo-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
];

const technologiesOuter = [
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Python", icon: <SiPython className="text-yellow-400" /> },
  { name: "Linux", icon: <FaLinux className="text-green-500" /> },
  { name: "Slack", icon: <FaSlack className="text-purple-500" /> },
  { name: "REST API", icon: <FaExchangeAlt className="text-gray-500" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
  { name: "MongoDB", icon: <FaDatabase className="text-green-600" /> },
  { name: "Insomnia", icon: <SiInsomnia className="text-orange-400" /> },
  { name: "Postman", icon: <SiPostman className="text-red-500" /> },
  { name: "Gatsby", icon: <SiGatsby className="text-purple-500" /> },
];

const Skills = () => {
  const [innerRadius, setInnerRadius] = useState(window.innerWidth * 0.1); // Rayon initial basé sur la largeur de l'écran
  const [outerRadius, setOuterRadius] = useState(window.innerWidth * 0.15);

  // Fonction de mise à jour du rayon à chaque redimensionnement
  useEffect(() => {
    const handleResize = () => {
      setInnerRadius(window.innerWidth * 0.1); // 10% de la largeur de la fenêtre
      setOuterRadius(window.innerWidth * 0.15); // 15% de la largeur de la fenêtre
    };

    window.addEventListener("resize", handleResize); // Écouteur d'événements de redimensionnement
    return () => window.removeEventListener("resize", handleResize); // Nettoyage de l'écouteur
  }, []);

  return (
    <section
      id="Technologies"
      className="h-screen bg-gray-900 text-white py-20 flex items-center justify-center"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Technologies</h2>

        <div className="relative flex items-center justify-center w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] mx-auto">
          {/* Premier cercle (intérieur) */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
            {technologiesInner.map((tech, index) => {
              const angle = index * (360 / technologiesInner.length);
              const x = innerRadius * Math.cos((angle * Math.PI) / 180);
              const y = innerRadius * Math.sin((angle * Math.PI) / 180);

              return (
                <motion.div
                  key={tech.name}
                  className="absolute cursor-pointer"
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                  whileHover={{
                    scale: 1.5,
                    zIndex: 10,
                    transform: `translate(${x}px, ${y}px) scale(1.5)`, // Conserve la position d'origine
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  title={tech.name}
                >
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                    {tech.icon}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Deuxième cercle (extérieur) */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {technologiesOuter.map((tech, index) => {
              const angle = index * (360 / technologiesOuter.length);
              const x = outerRadius * Math.cos((angle * Math.PI) / 180);
              const y = outerRadius * Math.sin((angle * Math.PI) / 180);

              return (
                <motion.div
                  key={tech.name}
                  className="absolute cursor-pointer"
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                  whileHover={{
                    scale: 1.5,
                    zIndex: 10,
                    transform: `translate(${x}px, ${y}px) scale(1.5)`, // Conserve la position d'origine
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  title={tech.name}
                >
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                    {tech.icon}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
