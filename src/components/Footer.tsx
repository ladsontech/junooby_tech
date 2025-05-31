
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"></div>
              <span className="text-2xl font-bold">Junooby</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Bringing cutting-edge technology solutions to Sub-Saharan Africa. Your trusted tech partner.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SEO</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Digital Marketing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Gaming PCs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Routers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CCTV Cameras</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tech Gadgets</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📧 info@junooby.com</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>📍 Sub-Saharan Africa</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Junooby. All rights reserved. Made with ❤️ in Sub-Saharan Africa.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
