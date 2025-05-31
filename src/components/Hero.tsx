
import React from 'react';
import TypewriterEffect from './TypewriterEffect';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 pt-20 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                We Deliver
                <br />
                <TypewriterEffect />
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Junooby brings cutting-edge technology solutions to Sub-Saharan Africa. 
                From web development to CCTV systems, we're your complete tech partner.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/services"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
              >
                Explore Services
              </Link>
              <Link 
                to="/products"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 text-center"
              >
                View Products
              </Link>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-2xl">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl mb-4"></div>
                  <h3 className="font-semibold text-gray-900">Web Solutions</h3>
                  <p className="text-sm text-gray-600 mt-2">Modern websites & apps</p>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-6 rounded-2xl">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl mb-4"></div>
                  <h3 className="font-semibold text-gray-900">Digital Marketing</h3>
                  <p className="text-sm text-gray-600 mt-2">SEO & social media</p>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-2xl">
                  <div className="w-12 h-12 bg-green-600 rounded-xl mb-4"></div>
                  <h3 className="font-semibold text-gray-900">CCTV Systems</h3>
                  <p className="text-sm text-gray-600 mt-2">Security solutions</p>
                </div>
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-6 rounded-2xl">
                  <div className="w-12 h-12 bg-orange-600 rounded-xl mb-4"></div>
                  <h3 className="font-semibold text-gray-900">Tech Gadgets</h3>
                  <p className="text-sm text-gray-600 mt-2">PCs & routers</p>
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
