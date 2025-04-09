import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CTAButton = ({ text, link, primary = true, size = 'medium' }) => {
  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3 text-lg'
  };

  const styleClasses = primary
    ? 'bg-blue-600 hover:bg-blue-700 text-white'
    : 'bg-white hover:bg-gray-50 text-blue-600 border border-blue-600';

  const buttonClasses = `${styleClasses} ${sizeClasses[size]} rounded-md font-medium transition duration-150 inline-block text-center`;

  const isExternal = link.startsWith('http://') || link.startsWith('https://');

  if (isExternal) {
    return (
      <a href={link} className={buttonClasses} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    );
  }

  return (
    <Link to={link} className={buttonClasses}>
      {text}
    </Link>
  );
};

CTAButton.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

export default CTAButton;
