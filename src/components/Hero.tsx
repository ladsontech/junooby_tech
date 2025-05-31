
import React from 'react';
import TypewriterEffect from './TypewriterEffect';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 pt-20 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 animate-fade-in order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                We Deliver
                <br />
                <TypewriterEffect />
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-lg">
                Junooby brings cutting-edge technology solutions to Sub-Saharan Africa. 
                From web development to CCTV systems, we're your complete tech partner.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/services"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
              >
                Explore Services
              </Link>
              <Link 
                to="/products"
                className="border-2 border-blue-600 text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 text-center"
              >
                View Products
              </Link>
            </div>
          </div>
          
          <div className="relative animate-scale-in order-1 lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative">
              <img 
                src="/images/hero_section.jpg" 
                alt="Technology Solutions" 
                className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-3xl shadow-2xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-2xl" style={{display: 'none'}}>
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 md:p-6 rounded-2xl">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-600 rounded-xl mb-2 md:mb-4"></div>
                    <h3 className="font-semibold text-gray-900 text-sm md:text-base">Web Solutions</h3>
                    <p className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2">Modern websites & apps</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-4 md:p-6 rounded-2xl">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-purple-600 rounded-xl mb-2 md:mb-4"></div>
                    <h3 className="font-semibold text-gray-900 text-sm md:text-base">Digital Marketing</h3>
                    <p className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2">SEO & social media</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-100 to-green-200 p-4 md:p-6 rounded-2xl">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-green-600 rounded-xl mb-2 md:mb-4"></div>
                    <h3 className="font-semibold text-gray-900 text-sm md:text-base">CCTV Systems</h3>
                    <p className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2">Security solutions</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-4 md:p-6 rounded-2xl">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-orange-600 rounded-xl mb-2 md:mb-4"></div>
                    <h3 className="font-semibold text-gray-900 text-sm md:text-base">Tech Gadgets</h3>
                    <p className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2">PCs & routers</p>
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
