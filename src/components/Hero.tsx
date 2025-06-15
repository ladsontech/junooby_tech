
import React from 'react';
import TypewriterEffect from './TypewriterEffect';
import { Link } from 'react-router-dom';

// WhatsApp button native implementation
const WhatsappButton = ({ message }: { message: string }) => {
  const phoneNumber = '+256789572007';
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 border-2 border-green-600 text-green-700 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-green-600 hover:text-white transition-all duration-300 text-center"
    >
      <svg width="1.4em" height="1.4em" viewBox="0 0 32 32" fill="currentColor">
        <g>
          <path d="M16.003 4.002c6.62 0 12.001 5.376 12.001 11.998 0 2.124-.584 4.173-1.695 6.04l.952 3.513a1.196 1.196 0 0 1-1.495 1.495l-3.513-.951c-1.867 1.11-3.917 1.695-6.04 1.695-6.62.001-11.998-5.377-11.998-12.002 0-6.62 5.378-12.001 12.001-12.001zm0-2.002c-7.733 0-14.002 6.272-14.002 14.003s6.269 14.001 14.001 14.001c2.381 0 4.707-.601 6.778-1.742l3.338.904a3.196 3.196 0 0 0 3.992-3.991l-.905-3.338c1.142-2.071 1.742-4.398 1.742-6.778.003-7.732-6.267-14.003-13.999-14.003zm7.998 23.997a.998.998 0 1 1 0 1.997.998.998 0 0 1 0-1.997zm-9.001-16.998c-3.859 0-7.001 3.139-7.001 7.001 0 1.06.211 2.081.595 3.029l-1.196 4.354c-.063.228.045.475.256.565l7.896 3.422c.209.09.447.013.569-.19 1.006-1.734 1.851-3.541 2.529-5.418.073-.21-.018-.45-.185-.563a4.438 4.438 0 0 1-1.105-.938 4.47 4.47 0 0 1-1.001-1.723 4.518 4.518 0 0 1-.246-1.423c0-.547.098-1.081.284-1.561a5.736 5.736 0 0 1 1.561-2.283 5.514 5.514 0 0 1 2.28-1.564c.482-.187 1.016-.284 1.561-.284.482 0 .95.093 1.423.245.494.14.939.453 1.244.925s.42 1.064.333 1.62a8.433 8.433 0 0 1-1.566 3.305 8.23 8.23 0 0 1-1.785 1.816z" fill="currentColor"/>
        </g>
      </svg>
      Chat on WhatsApp
    </button>
  );
};

const Hero = () => {
  return (
    <>
      {/* Cleaner Hero Section */}
      <section className="min-h-[70vh] bg-slate-50 pt-24 pb-14 flex items-center">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center text-center space-y-7 animate-fade-in">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Grow Your Business <span className="block text-blue-600">with Junooby</span>
          </h1>
          <div className="h-10 flex justify-center items-center text-blue-700 font-semibold text-xl sm:text-2xl">
            <TypewriterEffect />
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Professional web, mobile, security, and marketing solutions in Kampala, Uganda.
            <br className="hidden sm:block" />
            Let's unleash your business potential with creative technology.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-2">
            <Link 
              to="/services" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-base md:text-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 text-center"
            >
              Explore Our Services
            </Link>
            <WhatsappButton message="Hello! I would like to get a quote for your services." />
          </div>
        </div>
      </section>

      {/* Moved Hero Image Section */}
      <section className="bg-white py-10 px-4 flex justify-center items-center">
        <div className="max-w-3xl w-full mx-auto">
          <div className="relative aspect-[16/9] rounded-3xl shadow-2xl overflow-hidden animate-scale-in">
            <img
              src="/images/hero_section.jpg"
              alt="Our Work in Action - Junooby Digital Craft"
              className="w-full h-full object-cover"
              onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            {/* fallback is gracefully omitted, as there's no alternate content here */}
          </div>
          <div className="mt-4 text-center text-gray-500 text-base">Our recent project in action</div>
        </div>
      </section>
    </>
  );
};

export default Hero;
