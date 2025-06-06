
import React from 'react';
import TypewriterEffect from './TypewriterEffect';
import { Link } from 'react-router-dom';

const Hero = () => {
  const handleGetQuote = () => {
    const phoneNumber = '+256789572007';
    const message = 'Hello! I would like to get a quote for your services.';
    const url = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="min-h-screen bg-slate-50 pt-20 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-20 py-0">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 animate-fade-in order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Uganda's Leading
                <br />
                <div className="h-12 sm:h-14 lg:h-16 xl:h-20 flex items-center">
                  <TypewriterEffect />
                </div>
                <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-blue-600">Company</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl leading-relaxed">
                Professional web development, mobile apps, CCTV installation, solar systems, and digital marketing services in 
                <strong className="text-blue-600"> Kampala, Uganda</strong>. Transform your business with cutting-edge technology solutions.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-2xl shadow-lg border border-gray-200">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">Why Choose Junooby?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-sm md:text-base">5+ Years Experience</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-sm md:text-base">100+ Projects Completed</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-sm md:text-base">24/7 Support</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-sm md:text-base">Affordable Pricing</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/services" 
                className="bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 text-center"
              >
                Explore Our Services
              </Link>
              <button 
                onClick={handleGetQuote} 
                className="border-2 border-blue-600 text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 text-center"
              >
                Get Free Quote
              </button>
            </div>
          </div>
          
          <div className="relative animate-scale-in order-1 lg:order-2">
            <div className="absolute inset-0 bg-blue-400 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative">
              <div className="aspect-square w-full max-w-md mx-auto relative overflow-hidden rounded-3xl shadow-2xl">
                <div className="absolute inset-0 bg-white/30 pointer-events-none z-10"></div>
                <img 
                  src="/images/hero_section.jpg" 
                  alt="Professional Web Development and Tech Solutions in Uganda - Junooby Digital Craft" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'block';
                  }} 
                  className="w-full h-full object-cover" 
                />
                <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-2xl" style={{display: 'none'}}>
                  <div className="grid grid-cols-2 gap-4 md:gap-6">
                    <div className="bg-blue-100 p-4 md:p-6 rounded-2xl">
                      <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-600 rounded-xl mb-2 md:mb-4"></div>
                      <h3 className="font-semibold text-gray-900 text-sm md:text-base">Web Development</h3>
                      <p className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2">Custom websites & e-commerce</p>
                    </div>
                    <div className="bg-purple-100 p-4 md:p-6 rounded-2xl">
                      <div className="w-8 h-8 md:w-12 md:h-12 bg-purple-600 rounded-xl mb-2 md:mb-4"></div>
                      <h3 className="font-semibold text-gray-900 text-sm md:text-base">Mobile Apps</h3>
                      <p className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2">iOS & Android development</p>
                    </div>
                    <div className="bg-green-100 p-4 md:p-6 rounded-2xl">
                      <div className="w-8 h-8 md:w-12 md:h-12 bg-green-600 rounded-xl mb-2 md:mb-4"></div>
                      <h3 className="font-semibold text-gray-900 text-sm md:text-base">CCTV Systems</h3>
                      <p className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2">Security camera installation</p>
                    </div>
                    <div className="bg-orange-100 p-4 md:p-6 rounded-2xl">
                      <div className="w-8 h-8 md:w-12 md:h-12 bg-orange-600 rounded-xl mb-2 md:mb-4"></div>
                      <h3 className="font-semibold text-gray-900 text-sm md:text-base">Solar Systems</h3>
                      <p className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2">Renewable energy solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
