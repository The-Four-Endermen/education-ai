import React from 'react';
import PropTypes from 'prop-types';

const HeroSection = ({ title, subtitle, imageSrc }) => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/signup" className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition duration-150">
                Get Started Free
              </a>
              <a href="/learn-more" className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-50 transition duration-150">
                Learn More
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src={imageSrc || "/api/placeholder/600/400"} 
              alt="Platform Preview" 
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imageSrc: PropTypes.string
};

export default HeroSection;
