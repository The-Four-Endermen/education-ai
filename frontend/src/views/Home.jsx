import React from 'react';

import HeroSection from '../components/Hero';
import CTAButton from '../components/CTAButton';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroSection 
          title="Empowering Education Through Technology"
          subtitle="A personalized learning platform designed to help every student reach their full potential"
          imageSrc="/images/hero-image.jpg"
        />
        
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Supporting SDG 4: Quality Education</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/3 mb-6 md:mb-0">
                    <img 
                      src="/images/sdg4-icon.png" 
                      alt="SDG 4 Icon" 
                      className="w-48 h-48 mx-auto"
                    />
                  </div>
                  <div className="md:w-2/3 md:pl-8">
                    <p className="text-lg mb-4">
                      Our platform is aligned with the United Nations Sustainable Development Goal 4, 
                      which aims to ensure inclusive and equitable quality education and promote 
                      lifelong learning opportunities for all.
                    </p>
                    <p className="text-lg">
                      Through personalized assessments, AI-powered learning paths, and 
                      comprehensive teacher tools, we're making quality education more 
                      accessible and effective for students worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How Our Platform Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white rounded-lg shadow p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Assessments</h3>
                <p className="text-gray-600">
                  Students complete adaptive assessments that identify knowledge gaps and learning styles.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-white rounded-lg shadow p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
                <p className="text-gray-600">
                  Our AI analyzes performance to create personalized learning paths tailored to each student.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-white rounded-lg shadow p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Teacher Dashboard</h3>
                <p className="text-gray-600">
                  Comprehensive tools for educators to monitor progress and receive actionable recommendations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
    </div>
  );
};

export default HomePage;
