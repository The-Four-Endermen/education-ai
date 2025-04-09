import React, { useState } from 'react';
import PropTypes from 'prop-types';

const RecommendationBox = ({ recommendation }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isImplemented, setIsImplemented] = useState(false);

  const { title, description, type, priority } = recommendation;

  // Determine badge color based on type
  const getBadgeColor = (type) => {
    switch (type) {
      case 'individual':
        return 'bg-purple-100 text-purple-800';
      case 'group':
        return 'bg-blue-100 text-blue-800';
      case 'class':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Determine priority indicator color
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500';
      case 'medium':
        return 'bg-yellow-500';
      case 'low':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className={`bg-white border rounded-lg overflow-hidden transition-all duration-200 ${isImplemented ? 'opacity-60' : ''} ${isExpanded ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="p-4">
        <div className="flex items-start">
          <div className={`w-3 h-3 rounded-full mt-1.5 mr-3 ${getPriorityColor(priority)}`}></div>
          <div className="flex-grow">
            <div className="flex justify-between items-start">
              <h3 className="font-medium text-gray-800 mb-1">{title}</h3>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${getBadgeColor(type)}`}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-3">{description}</p>
            
            {isExpanded && (
              <div className="mt-3 pt-3 border-t border-gray-100">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Implementation Steps:</h4>
                <ol className="text-sm text-gray-600 list-decimal pl-5 mb-3 space-y-1">
                  <li>Schedule time with the student(s) identified</li>
                  <li>Share the specific content/materials recommended</li>
                  <li>Monitor progress over the next two weeks</li>
                  <li>Reassess to measure improvement</li>
                </ol>
                
                <h4 className="text-sm font-medium text-gray-700 mb-2">Resources:</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  <a href="#" className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 px-2 py-1 rounded flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                    </svg>
                    Worksheet
                  </a>
                  <a href="#" className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 px-2 py-1 rounded flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                    </svg>
                    Tutorial Video
                  </a>
                  <a href="#" className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 px-2 py-1 rounded flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    Lesson Plan
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex justify-between mt-2">
          <button 
            onClick={() => setIsExpanded(!isExpanded)} 
            className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center"
          >
            {isExpanded ? (
              <>
                <span>Show Less</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                </svg>
              </>
            ) : (
              <>
                <span>Show More</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </>
            )}
          </button>
          
          <div className="flex space-x-2">
            <button 
              onClick={() => setIsImplemented(!isImplemented)}
              className={`text-sm font-medium px-3 py-1 rounded-md ${isImplemented ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              {isImplemented ? 'Implemented' : 'Implement'}
            </button>
            <button className="text-sm font-medium px-3 py-1 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200">
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

RecommendationBox.propTypes = {
  recommendation: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['individual', 'group', 'class']).isRequired,
    priority: PropTypes.oneOf(['high', 'medium', 'low']).isRequired
  }).isRequired
};

export default RecommendationBox;
