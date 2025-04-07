import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.328.996.002 1.069c0 .505.006 1.09.018 1.15.129.646.646 1.131 1.288 1.131h.003c.643 0 1.259-.485 1.389-1.131.013-.059.018-.641.018-1.15v-.961l1.821-.779a1 1 0 00.554-.914V4.347a1 1 0 00-.129-.503l.01.004z"></path>
              <path d="M1.75 8.98l3.5 1.5v4.5a1 1 0 001 1h9.5a1 1 0 001-1v-4.5l3.5-1.5V15a2 2 0 01-2 2H3.75a2 2 0 01-2-2V8.98z"></path>
            </svg>
            <span className="ml-2 text-xl font-bold text-gray-800">EduPlatform</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/about" className="text-gray-600 hover:text-blue-600 transition duration-150">
              About
            </Link>
            <Link to="/features" className="text-gray-600 hover:text-blue-600 transition duration-150">
              Features
            </Link>
            <Link to="/pricing" className="text-gray-600 hover:text-blue-600 transition duration-150">
              Pricing
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition duration-150">
              Contact
            </Link>
            <Link to="/login" className="text-gray-600 hover:text-blue-600 transition duration-150">
              Log In
            </Link>
            <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-150">
              Sign Up
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 pb-6 space-y-4">
            <Link to="/about" className="block text-gray-600 hover:text-blue-600 transition duration-150">
              About
            </Link>
            <Link to="/features" className="block text-gray-600 hover:text-blue-600 transition duration-150">
              Features
            </Link>
            <Link to="/pricing" className="block text-gray-600 hover:text-blue-600 transition duration-150">
              Pricing
            </Link>
            <Link to="/contact" className="block text-gray-600 hover:text-blue-600 transition duration-150">
              Contact
            </Link>
            <Link to="/login" className="block text-gray-600 hover:text-blue-600 transition duration-150">
              Log In
            </Link>
            <Link to="/signup" className="block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-150 w-full text-center">
              Sign Up
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
