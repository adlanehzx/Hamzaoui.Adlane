import React from "react";
import { socialLinks, personalInfo } from "../data/portfolioData";
import { Github, Linkedin, Mail, ArrowUp, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const renderSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "Github":
        return <Github size={20} />;
      case "Linkedin":
        return <Linkedin size={20} />;
      case "Mail":
        return <Mail size={20} />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About column */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Adlane<span className="text-blue-400">.dev</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Frontend developer specializing in building exceptional digital
              experiences. Currently focused on creating accessible,
              user-friendly web applications.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full text-gray-300 hover:text-white hover:bg-blue-600 transition-colors"
                  aria-label={link.platform}
                >
                  {renderSocialIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white hover:underline transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-300 hover:text-white hover:underline transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-300 hover:text-white hover:underline transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-gray-300 hover:text-white hover:underline transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white hover:underline transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-blue-400" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-300 hover:text-white hover:underline transition-colors"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-blue-400 mt-1" />
                <span className="text-gray-300">{personalInfo.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Adlane Hamzaoui. All rights
            reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
