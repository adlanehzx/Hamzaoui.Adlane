import { motion } from "framer-motion";
import React from "react";

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
        className="max-w-4xl mx-auto text-lg text-gray-700 bg-white p-10 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="mb-6">
          Je suis un développeur web passionné, spécialisé dans les technologies
          modernes telles que **React**, **Node.js**, et **NestJS**.
          Actuellement en troisième année de bachelor en ingénierie du Web à l'
          <span className="font-bold">ESGI</span>, j'ai acquis une solide
          expertise en développement fullstack, me permettant de jongler
          aisément entre le front-end et le back-end.
        </p>
        <p className="mb-6">
          Mon parcours académique et mes expériences professionnelles m'ont
          permis de maîtriser des concepts clés comme l'intégration continue, le
          déploiement, et l'optimisation des performances , tout en m'initiant
          aux meilleures pratiques de gestion de projet et d'architecture
          logicielle.
        </p>
        <p className="mb-6">
          Je suis animé par une quête constante d'innovation et une soif
          d'apprentissage. Mon objectif ? Proposer des solutions numériques
          performantes, élégantes et centrées sur l'utilisateur. Qu'il s'agisse
          de concevoir des interfaces modernes ou de développer des APIs
          robustes, je m'engage à livrer des projets qui repoussent les limites
          du possible.
        </p>
        <p className="mb-6">
          En dehors du développement, je m'intéresse aux technologies
          émergentes, à l'UX/UI design et aux stratégies d'optimisation SEO pour
          maximiser l'impact des produits numériques.
        </p>

        <div className="mt-8 text-center">
          <a
            href="/CV_Adlane_Hamzaoui.pdf"
            download
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
          >
            Télécharger mon CV
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);
export default About;
