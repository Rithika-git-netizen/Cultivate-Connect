import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      
      {/* Header Section - Delays: 0.1s, 0.2s */}
      <div className="text-center mb-16 pt-8"> 
        <div className="animate-fade-up opacity-0" style={{ animationDelay: '0.1s' }}>
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-base font-medium tracking-wide">About Us</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800 mt-8 mb-4 animate-fade-up opacity-0" style={{ animationDelay: '0.2s' }}>
          Bridging Tradition with <span className="text-amber-600">Innovation</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: '0.3s' }}>
          We are dedicated to empowering Indian farmers by combining centuries of agricultural wisdom with cutting-edge technology.
        </p>
      </div>

      {/* Values Grid - Delay 0.4s */}
      <div className="grid md:grid-cols-3 gap-8 mt-12 animate-fade-up opacity-0" style={{ animationDelay: '0.4s' }}>
        <ValueCard icon="fa-heart" color="green" title="Farmer First" desc="Every decision we make prioritizes the wellbeing and success of our farming community." />
        <ValueCard icon="fa-earth-americas" color="amber" title="Sustainability" desc="We promote farming practices that protect our environment for future generations." />
        <ValueCard icon="fa-lightbulb" color="orange" title="Innovation" desc="We continuously evolve our technology to serve farmers better and more effectively." />
      </div>

      {/* Story Section - Delay 0.5s */}
      <div className="mt-16 max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-lg border border-gray-200 animate-fade-up opacity-0" style={{ animationDelay: '0.5s' }}>
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-6 border-b pb-4">Our Story</h3>
        <div className="text-lg text-gray-700 space-y-4 leading-relaxed">
          <p>Cultivate Connect was born from a simple observation: Indian farmers possess generations of invaluable agricultural knowledge, yet they often lack access to modern tools that could amplify their expertise.</p>
          <p>Founded by a team of agricultural scientists and engineers, we set out to create a platform that respects traditional farming wisdom while leveraging advanced algorithms.</p>
        </div>
      </div>
    </div>
  );
};

const ValueCard = ({ icon, color, title, desc }) => (
  <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 text-center transform hover:scale-[1.03] transition-transform duration-300">
    <div className={`w-20 h-20 bg-${color}-50 rounded-full flex items-center justify-center text-${color}-600 text-3xl mx-auto mb-6 border-2 border-${color}-200/50`}>
      <i className={`fa-solid ${icon}`}></i>
    </div> 
    <h4 className="text-2xl font-bold text-gray-900 mb-4">{title}</h4>
    <p className="text-gray-600 text-base leading-relaxed">{desc}</p>
  </div>
);

export default About;