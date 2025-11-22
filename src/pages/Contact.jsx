import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Header - Delays 0.1s, 0.2s */}
      <div className="text-center mb-12">
        <div className="animate-fade-up opacity-0" style={{ animationDelay: '0.1s' }}>
          <span className="bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase">Get In Touch</span>
        </div>
        <h2 className="text-5xl font-bold text-gray-900 mt-6 mb-4 animate-fade-up opacity-0" style={{ animationDelay: '0.2s' }}>
          We're Here to <span className="text-amber-600">Help</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg animate-fade-up opacity-0" style={{ animationDelay: '0.3s' }}>
          Have questions or feedback? Reach out to us and we'll respond as soon as possible.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        
        {/* Left Info Cards - Delay 0.4s */}
        <div className="space-y-6 lg:col-span-1 animate-fade-up opacity-0" style={{ animationDelay: '0.4s' }}>
          <ContactCard icon="fa-envelope" title="Email Us" content={<><p>abhintr13@gmail.com</p><p>rithikarekhadevi@gmail.com</p></>} />
          <ContactCard icon="fa-phone-volume" title="Call Us" content={<><p>+91 7013753816</p><p>+91 8951258016</p></>} />
          <ContactCard icon="fa-location-dot" title="Visit Us" content={<p>Agricultural Innovation Hub KSSEM College<br/>Bangalore, India</p>} />
        </div>

        {/* Right Form - Delay 0.5s */}
        <div className="lg:col-span-2 bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 animate-fade-up opacity-0" style={{ animationDelay: '0.5s' }}>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 pb-4 border-b border-gray-100">Send Us a Message</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Your name" className="w-full p-3 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none" />
              <input type="email" placeholder="your@email.com" className="w-full p-3 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="+91 XXXXX XXXXX" className="w-full p-3 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none" />
              <input type="text" placeholder="How can we help?" className="w-full p-3 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none" />
            </div>
            <textarea rows="6" placeholder="Message..." className="w-full p-3 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none resize-none"></textarea>
            <button className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-4 rounded-lg shadow-md text-lg">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const ContactCard = ({ icon, title, content }) => (
  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition">
    <div className="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 text-2xl mx-auto mb-4">
      <i className={`fa-solid ${icon}`}></i>
    </div>
    <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
    <div className="text-gray-600 text-sm leading-relaxed space-y-1">{content}</div>
  </div>
);

export default Contact;