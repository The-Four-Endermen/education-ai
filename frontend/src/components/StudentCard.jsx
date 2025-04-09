import React from 'react';
import PropTypes from 'prop-types';
import { UserRound } from 'lucide-react'

const StudentCard = ({ student }) => {
  const { name, grade, subject, progress, lastActivity, avatar } = student;
  
  // Determine progress color
  const getProgressColor = (value) => {
    if (value >= 80) return 'bg-green-500';
    if (value >= 65) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="p-4 border-b border-gray-200 hover:bg-gray-50">
      <div className="flex items-center">
        <div className="mr-3">
          <UserRound size={30}/>
        </div>
        <div className="flex-grow">
          <h3 className="font-medium text-gray-800">{name}</h3>
          <div className="flex text-xs text-gray-500">
            <span>{grade}</span>
            <span className="mx-2">•</span>
            <span>{subject}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center mb-1">
            <div className="w-16 h-2 bg-gray-200 rounded-full mr-2 overflow-hidden">
              <div 
                className={`h-full rounded-full ${getProgressColor(progress)}`} 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="text-xs font-medium text-gray-600">{progress}%</span>
          </div>
          <div className="text-xs text-gray-500">{lastActivity}</div>
        </div>
      </div>
    </div>
  );
};

StudentCard.propTypes = {
  student: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    grade: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
    lastActivity: PropTypes.string.isRequired,
    avatar: PropTypes.string
  }).isRequired
};

export default StudentCard;
