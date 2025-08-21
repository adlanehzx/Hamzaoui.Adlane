import React, { useState } from 'react';
import { skills } from '../data/portfolioData';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // Filter skills based on category
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Technologies and tools I work with
          </p>
        </div>
        
        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2 rounded-md text-sm font-medium transition-colors ${
              activeCategory === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            All
          </button>
          
          <button
            onClick={() => setActiveCategory('frontend')}
            className={`px-5 py-2 rounded-md text-sm font-medium transition-colors ${
              activeCategory === 'frontend'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Frontend
          </button>
          
          <button
            onClick={() => setActiveCategory('backend')}
            className={`px-5 py-2 rounded-md text-sm font-medium transition-colors ${
              activeCategory === 'backend'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Backend
          </button>
          
          <button
            onClick={() => setActiveCategory('tools')}
            className={`px-5 py-2 rounded-md text-sm font-medium transition-colors ${
              activeCategory === 'tools'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Tools
          </button>
          
          <button
            onClick={() => setActiveCategory('soft')}
            className={`px-5 py-2 rounded-md text-sm font-medium transition-colors ${
              activeCategory === 'soft'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Soft Skills
          </button>
        </div>
        
        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name + index}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
                <span 
                  className={`text-sm font-medium px-2 py-1 rounded-md ${
                    getSkillLevelColor(skill.level)
                  }`}
                >
                  {getSkillLevelText(skill.level)}
                </span>
              </div>
              
              {/* Skill bar */}
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                <div 
                  className={`h-2.5 rounded-full ${getSkillBarColor(skill.level)}`} 
                  style={{ width: `${skill.level * 20}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper functions for skill levels
const getSkillLevelText = (level: number): string => {
  switch (level) {
    case 1: return 'Beginner';
    case 2: return 'Basic';
    case 3: return 'Intermediate';
    case 4: return 'Advanced';
    case 5: return 'Expert';
    default: return 'N/A';
  }
};

const getSkillLevelColor = (level: number): string => {
  switch (level) {
    case 1: return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300';
    case 2: return 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300';
    case 3: return 'bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-300';
    case 4: return 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300';
    case 5: return 'bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-300';
    default: return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300';
  }
};

const getSkillBarColor = (level: number): string => {
  switch (level) {
    case 1: return 'bg-gray-500';
    case 2: return 'bg-blue-500';
    case 3: return 'bg-teal-500';
    case 4: return 'bg-purple-500';
    case 5: return 'bg-amber-500';
    default: return 'bg-gray-500';
  }
};

export default Skills;