import React from "react";
import { motion } from "framer-motion";

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
  <section id="Projets" className="min-h-screen py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      <motion.h2
        className="text-4xl font-extrabold mb-12 text-center text-gray-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Mes Réalisations
      </motion.h2>

      {[
        { title: "Projets Personnels", projects: personalProjects },
        {
          title: "Expérience Professionnelle",
          projects: professionalExperience,
        },
        { title: "Projets Académiques", projects: academicProjects },
      ].map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-16">
          <h3 className="text-3xl font-semibold mb-8 text-gray-700">
            {section.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {section.projects.map((project, projectIndex) => (
              <motion.div
                key={projectIndex}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: projectIndex * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.desc}</p>
                <div className="mb-4">
                  <p className="text-gray-800 font-medium mb-2">
                    Technologies:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-gray-800 font-medium mb-2">
                    Fonctionnalités:
                  </p>
                  <ul className="list-disc pl-4 space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-gray-600">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);
export default Works;
