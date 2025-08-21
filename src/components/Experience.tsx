import React from "react";
import { experiences } from "../data/portfolioData";
import { Briefcase } from "lucide-react";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Expérience Professionnelle
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Mon parcours professionnel
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className={`relative pl-8 sm:pl-40 py-6 group ${
                index !== experiences.length - 1
                  ? "border-l-2 border-blue-200 dark:border-blue-800 ml-6 sm:ml-0"
                  : "ml-6 sm:ml-0"
              }`}
            >
              {/* Timeline marker */}
              <div className="font-medium absolute -left-6 sm:left-32 flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-400 dark:group-hover:text-gray-900 transition-colors duration-300 border-4 border-white dark:border-gray-900">
                <Briefcase size={20} />
              </div>

              {/* Experience date - Desktop */}
              <div className="hidden sm:block absolute left-0 w-32 text-right pr-8 top-6">
                <span className="font-semibold text-sm text-blue-600 dark:text-blue-400 block mb-1">
                  {experience.period}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 block">
                  {experience.location}
                </span>
              </div>

              {/* Card content */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                {/* Mobile date display */}
                <span className="sm:hidden text-sm text-blue-600 dark:text-blue-400 font-semibold mb-1 block">
                  {experience.period}
                </span>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {experience.role}
                </h3>

                <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-4">
                  {experience.company}
                </p>

                <ul className="ml-6 space-y-2">
                  {experience.description.map((item, i) => (
                    <li
                      key={i}
                      className="text-gray-600 dark:text-gray-300 relative before:absolute before:w-1.5 before:h-1.5 before:rounded-full before:bg-blue-500 before:left-[-20px] before:top-[10px]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Resume button */}
        <div className="text-center mt-12">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium"
          >
            Voir le CV Complet
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
