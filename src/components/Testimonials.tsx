import React, { useState, useEffect } from 'react';
import { testimonials } from '../data/portfolioData';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay]);
  
  const goToPrev = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const goToNext = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const goToSlide = (index: number) => {
    setAutoplay(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Testimonials
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            What people say about working with me
          </p>
        </div>
        
        {/* Testimonial slider */}
        <div className="relative max-w-5xl mx-auto">
          {/* Testimonial */}
          <div 
            className="bg-gray-50 dark:bg-gray-700 p-8 md:p-12 rounded-2xl shadow-md relative transition-all duration-300"
          >
            <div className="absolute top-6 left-6 text-blue-600 dark:text-blue-400">
              <Quote size={36} />
            </div>
            
            <div className="relative z-10">
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 mt-8 ml-6">
                {testimonials[currentIndex].text}
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].name}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation arrows */}
          <button 
            onClick={goToPrev}
            className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-center focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-center focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Dots navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? 'bg-blue-600 dark:bg-blue-400'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;