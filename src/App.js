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
  FaArrowUp,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
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
import "./index.css";
import { Buffer } from "buffer";
import process from "process";

window.Buffer = Buffer;
window.process = process;
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
          href="https://drive.google.com/file/d/1yfrBHLxgtr0B4NJauYEwnoUCPVrmOGJE/view?usp=sharing"
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

const About = () => (
  <section id="A-propos" className="min-h-screen py-20 bg-gray-100">
    <div className="container mx-auto px-6">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center text-gray-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        À Propos
      </motion.h2>
      <motion.div
        className="max-w-3xl mx-auto text-lg text-gray-700 bg-white p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="mb-4">
          Je suis un développeur web passionné, spécialisé dans les technologies
          modernes comme React, Node.js et NestJS. Actuellement en troisième
          année en bachelier en ingénierie du Web à L'Esgi, j'ai eu
          l'opportunité d'explorer différents aspects du développement logiciel,
          allant du front-end à l'architecture back-end.
        </p>
        <p>
          Mon parcours académique m'a permis de renforcer mes compétences en
          programmation, tout en me familiarisant avec les fondamentaux de
          l'ingénierie logicielle, l'algorithmique, et la gestion de projets
          informatiques. Parallèlement, mes projets personnels et professionnels
          m'ont permis de perfectionner mes connaissances en JavaScript,
          TypeScript et de collaborer sur des projets complexes utilisant des
          frameworks modernes.
        </p>
        <p>
          En plus de mon expertise technique, j'ai récemment entrepris de mettre
          en œuvre des solutions d'intégration continue, de déploiement, et
          d'optimisation de la performance, afin de m'assurer que les
          applications que je développe soient non seulement fonctionnelles,
          mais également évolutives et maintenables à long terme.
        </p>
        <p>
          Je suis animé par un esprit d'innovation et une soif d'apprendre,
          toujours prêt à relever de nouveaux défis. Mon approche est centrée
          sur l'expérience utilisateur, en veillant à ce que chaque projet soit
          une expérience fluide, esthétique, et adaptée aux besoins des
          utilisateurs finaux.
        </p>
        <p>
          En tant qu'étudiant et développeur fullstack, mon objectif est de
          continuer à progresser dans le domaine du développement web tout en
          contribuant activement à la création de produits numériques de
          qualité. Que ce soit pour concevoir des interfaces dynamiques ou bâtir
          des API robustes, je m'efforce de repousser les limites de ce qui est
          possible sur le web.
        </p>
      </motion.div>
    </div>
  </section>
);

const Services = () => (
  <section
    id="Competences"
    className="min-h-screen py-20 bg-gradient-to-br from-blue-500 to-purple-600 text-white"
  >
    <div className="container mx-auto px-6">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Mes Compétences
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Développement Web",
            desc: "Création de sites web interactifs et responsifs",
          },
          {
            title: "API & Backend",
            desc: "Conception d'API robustes et scalables",
          },
          {
            title: "UI/UX Design",
            desc: "Interfaces utilisateur intuitives et esthétiques",
          },
          { title: "Optimisation", desc: "Amélioration des performances web" },
          {
            title: "Gestion de Projets",
            desc: "Planification et exécution de projets agiles",
          },
          {
            title: "Conception de base de données",
            desc: "Conception et création de bases de données relationnelles",
          },
          {
            title: "Travail d'équipe",
            desc: "Collaboration efficace au sein d'équipes interdisciplinaires",
          },
          {
            title: "SEO",
            desc: "Optimisation pour les moteurs de recherche pour augmenter la visibilité en ligne",
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            className="bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

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

const personalProjects = [
  {
    title: "Portfolio",
    desc: "Site web personnel (Portfolio)",
    technologies: ["React", "Tailwind CSS"],
    features: ["Decouvrez mon univers"],
  },
  {
    title: "JoJo EnergyDrink",
    desc: "Site web de Jojo EnergyDrink",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node JS",
      "Express JS",
    ],
    features: ["Interactive UI", "SEO Optimized"],
  },
  {
    title: "Leynaï",
    desc: "Plateform d'evenmentiel (INCOMPLET)",
    technologies: [
      "Mern Stack",
      "TypeScript",
      "Tailwind CSS",
      "insomnia",
      "jwt",
    ],
    features: ["Event Management", "User Authentication"],
  },
];

const professionalExperience = [
  {
    title: "Stage Developpement Front End",
    desc: "Stage de développement Front End chez Keyu",
    technologies: ["React", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
    features: ["Interface interne", "Responsive Design", "SEO"],
  },
  {
    title: "Stage developpeur & testeur",
    desc: "Stage chez Ethos Développement de test automatisé",
    technologies: ["Maestro", "DETOX", "React Native", "CI/CD"],
    features: ["Front end ", "Automations Tests", "CI/CD"],
  },
];

const academicProjects = [
  {
    title: "Application de gestion de photos ",
    desc: "Application de gestion de photos pour roadtrips entre amis PHP8 MVC From Scratch",
    technologies: ["PHP 8", "MySQL", "Docker", "SCSS", "JavaScript"],
    features: [
      "Gestion des utilisateurs (inscription, connexion, mot de passe oublié)",
      "Téléchargement, affichage et suppression des photos",
      "Gestion des groupes avec droits utilisateurs",
      "Hébergement avec HTTPS et Docker Compose",
      "Framework CSS/JS mobile-first avec dark mode",
    ],
  },
  {
    title: "Projet Git",
    desc: "Projet collaboratif pour démontrer la maîtrise avancée de Git",
    technologies: ["Git", "GitHub Actions", "Linter", "Markdown"],
    features: [
      "15 issues, branches, et pull requests minimum",
      "Commits signés par tous les membres",
      "Templates pour issues et pull requests",
      "GitHub Project pour la gestion des tâches",
      "README, CONTRIBUTING, et Code of Conduct rédigés",
      "Git flow avec protection des branches",
      "Hooks pour vérifier le code via un linter",
      "CI avec GitHub Actions pour lancer le linter",
      "Push synchronisé sur deux remotes",
    ],
  },
  {
    title: "Csseducteur.me",
    desc: "Création et déploiement d'un site web avec optimisation SEO ",
    technologies: [
      "gatsby",
      "JavaScript",
      "SEO",
      "Git",
      "Goolgle search console",
      "github actions CI/CD",
    ],
    features: [
      "Création d'un site web et déploiement sur un nom de domaine",
      "Référencement sur Google via techniques SEO",
      "Stratégie SEO documentée dans un PDF",
      "Code source hébergé sur un dépôt Git public",
    ],
  },
  {
    title: "Docker Laravel Multi-Server Setup",
    desc: "Mise en place d'un environnement multi-serveurs avec Docker, Nginx, PHP et MySQL pour un projet Laravel",
    technologies: [
      "Docker",
      "Docker Compose",
      "PHP",
      "Nginx",
      "MySQL",
      "Laravel",
      "Composer",
      "Node.js",
    ],
    features: [
      "Lancement de deux serveurs Nginx et deux services PHP pour un même projet Laravel",
      "Automatisation des commandes Laravel via Dockerfile et Docker Compose",
      "Mise en place d'une base de données MySQL partagée entre les serveurs",
      "Personnalisation de l'affichage pour chaque serveur (Serveur 1 et Serveur 2)",
      "Connexion et inscription fonctionnelles sur les deux serveurs Nginx",
      "Déploiement sur un environnement Docker local",
    ],
  },
];

const Works = () => (
  <section id="Projets" className="min-h-screen py-20 bg-gray-100">
    <div className="container mx-auto px-6">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center text-gray-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Mes Réalisations
      </motion.h2>

      <div className="mb-12">
        <h3 className="text-3xl font-bold mb-6 text-gray-800">Projet perso</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personalProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-2">{project.desc}</p>
              <p className="text-gray-800 font-semibold">Technologies:</p>
              <ul className="list-disc list-inside mb-2">
                {project.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
              <p className="text-gray-800 font-semibold">Fonctionnalités:</p>
              <ul className="list-disc list-inside">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-3xl font-bold mb-6 text-gray-800">
          Expérience pro
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professionalExperience.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-2">{project.desc}</p>
              <p className="text-gray-800 font-semibold">Technologies:</p>
              <ul className="list-disc list-inside mb-2">
                {project.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
              <p className="text-gray-800 font-semibold">Fonctionnalités:</p>
              <ul className="list-disc list-inside">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-3xl font-bold mb-6 text-gray-800">
          Projet académique
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {academicProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-2">{project.desc}</p>
              <p className="text-gray-800 font-semibold">Technologies:</p>
              <ul className="list-disc list-inside mb-2">
                {project.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
              <p className="text-gray-800 font-semibold">Fonctionnalités:</p>
              <ul className="list-disc list-inside">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => {
  return (
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
};

const Footer = () => (
  <footer className="bg-gray-900 text-white py-8">
    <div className="container mx-auto px-6 text-center">
      <p> 2024 Hamzaoui Adlane. Tous droits réservés.</p>
    </div>
  </footer>
);

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
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
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 50 && rect.bottom >= 50;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="portfolio">
      <Header activeSection={activeSection} />
      <Intro />
      <About />
      <Services />
      <Skills />
      <Works />
      <Contact />
      <Footer />
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-yellow-400 text-gray-800 p-3 rounded-full shadow-lg hover:bg-yellow-300 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaArrowUp />
      </motion.button>
    </div>
  );
};

export default Portfolio;
