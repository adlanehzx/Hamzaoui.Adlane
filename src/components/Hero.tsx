import React, { useEffect, useState } from "react";
import { ArrowDown, Download } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center bg-gray-50 dark:bg-gray-900 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10%] opacity-30 dark:opacity-20">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/3 left-1/2 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            } delay-300`}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm font-medium mb-4">
              {personalInfo.title}
            </span>
          </div>

          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-6 transition-all duration-1000 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            } delay-500`}
          >
            Salut, je suis{" "}
            <span className="text-blue-600 dark:text-blue-400">
              {personalInfo.name}
            </span>
            <br />
            <span className="inline-block mt-2">Développeur Full Stack</span>
          </h1>

          <p
            className={`text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-12 transition-all duration-1000 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            } delay-700`}
          >
            {personalInfo.about}
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            } delay-900`}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              Me Contacter
            </a>
            <a
              href={personalInfo.resumeUrl}
              className="inline-flex items-center justify-center px-6 py-3 rounded-md border-2 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium text-lg focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              Télécharger CV <Download size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          Défiler vers le bas
        </span>
        <div className="animate-bounce">
          <ArrowDown size={20} className="text-gray-500 dark:text-gray-400" />
        </div>
      </div>

      {/* Custom cursor effect */}
      <div className="hidden lg:block">
        <div
          id="cursor-dot"
          className="fixed w-4 h-4 rounded-full bg-blue-600 pointer-events-none z-50 transition-transform duration-100 ease-out transform -translate-x-1/2 -translate-y-1/2 opacity-0"
        ></div>
      </div>
    </section>
  );
};

export default Hero;
