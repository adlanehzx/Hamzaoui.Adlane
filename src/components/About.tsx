import React from "react";
import { personalInfo } from "../data/portfolioData";
import { Code, Globe, Server, Lightbulb } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            À Propos
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Apprenez à me connaître et découvrez mon travail
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {personalInfo.about}
            </p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Formation
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Master en Ingénierie du Web
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      ESGI Paris
                    </p>
                  </div>
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    2025 - 2027
                  </span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Bachelor en Ingénierie du Web
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      ESGI Paris
                    </p>
                  </div>
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    2024 - 2025
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                React / Node.js
              </div>
              <div className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium">
                MERN Stack
              </div>
              <div className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-3 py-1 rounded-full text-sm font-medium">
                React Native
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-400 dark:group-hover:text-gray-900 transition-colors">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Développement Web
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Applications web modernes avec React, Next.js et TypeScript pour
                des expériences utilisateur exceptionnelles.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white dark:group-hover:bg-purple-400 dark:group-hover:text-gray-900 transition-colors">
                <Server size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Développement Mobile
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Applications mobiles cross-platform avec React Native pour iOS
                et Android.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 rounded-lg bg-teal-100 dark:bg-teal-900 flex items-center justify-center mb-4 text-teal-600 dark:text-teal-400 group-hover:bg-teal-600 group-hover:text-white dark:group-hover:bg-teal-400 dark:group-hover:text-gray-900 transition-colors">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                API & Backend
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                APIs robustes avec Node.js/Express, Laravel et Django. Bases de
                données SQL et NoSQL.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 rounded-lg bg-amber-100 dark:bg-amber-900 flex items-center justify-center mb-4 text-amber-600 dark:text-amber-400 group-hover:bg-amber-600 group-hover:text-white dark:group-hover:bg-amber-400 dark:group-hover:text-gray-900 transition-colors">
                <Lightbulb size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                DevOps & Testing
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                CI/CD avec GitHub Actions, tests automatisés E2E avec Maestro et
                déploiement d'applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
