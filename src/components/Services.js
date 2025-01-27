import { motion } from "framer-motion";
import React from "react";

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

export default Services;
