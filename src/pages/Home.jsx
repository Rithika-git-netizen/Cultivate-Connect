import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto px-6 py-12 text-center">
      <div className="mt-10">
        {/* Badge */}
        <div>
          <span className="bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase">
            <i className="fa-solid fa-wheat-awn mr-1"></i> Agriculture Meets Technology
          </span>
        </div>
        
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mt-6 mb-4 leading-tight">
          Empowering Indian<br/>Farmers with <span className="text-green-600">Smart</span><br/>
          <span className="text-amber-600">Agriculture</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Harness the wisdom of tradition and the power of technology to maximize your harvest.
        </p>
        
        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <Link to="/advisor" className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-green-700 transition shadow-lg">
            Get Crop Recommendations
          </Link>
          <Link to="/about" className="border-2 border-gray-300 text-gray-600 px-8 py-4 rounded-lg text-lg font-bold hover:border-green-600 hover:text-green-600 transition">
            Learn More
          </Link>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <FeatureCard icon="fa-seedling" bgColor="bg-green-100" textColor="text-green-600" title="Smart Recommendations" desc="AI-powered crop suggestions" />
        <FeatureCard icon="fa-leaf" bgColor="bg-orange-100" textColor="text-orange-600" title="Traditional Wisdom" desc="Combining ancestral farming knowledge" />
        <FeatureCard icon="fa-arrow-trend-up" bgColor="bg-amber-100" textColor="text-amber-600" title="Increase Yield" desc="Optimize your farming decisions" />
        <FeatureCard icon="fa-users" bgColor="bg-green-100" textColor="text-green-600" title="Community Driven" desc="Join thousands of farmers" />
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, bgColor, textColor, title, desc }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center items-center">
    <div className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center ${textColor} text-3xl mb-6`}>
      <i className={`fa-solid ${icon}`}></i>
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-500 text-sm">{desc}</p>
  </div>
);

export default Home;