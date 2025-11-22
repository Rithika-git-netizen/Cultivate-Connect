import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  // Logic: If the link is active, make it an Orange Button.
  const getLinkClass = (path) => {
    return location.pathname === path 
      ? "bg-amber-500 text-white px-5 py-2 rounded-lg shadow-md transition-all duration-300 font-bold transform scale-105" // Active: Orange & Popped
      : "text-gray-600 hover:text-green-600 px-5 py-2 font-medium transition-all duration-300"; // Inactive
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50 top-0">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <div className="text-3xl text-green-500">
            <i className="fa-solid fa-seedling"></i>
          </div>
          <div className="text-2xl font-bold tracking-tight">
            <span className="text-green-700">Cultivate</span> 
            <span className="text-amber-600">Connect</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className={getLinkClass('/')}>Home</Link>
          <Link to="/advisor" className={getLinkClass('/advisor')}>Crop Advisor</Link>
          <Link to="/about" className={getLinkClass('/about')}>About Us</Link>
          <Link to="/contact" className={getLinkClass('/contact')}>Contact</Link>
          
          {/* Login Button - Always Green */}
          <Link to="/login" className="ml-4 bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300 font-bold">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

// 👇 THIS IS THE LINE THAT WAS MISSING!
export default Navbar;