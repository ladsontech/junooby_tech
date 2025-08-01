
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg fixed w-full z-50 transition-all duration-300 md:block hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/images/junooby_logo.png" alt="Junooby Logo" className="w-12 h-12 object-contain" onError={e => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'block';
              }} />
              <div className="w-12 h-12 bg-orange-600 rounded-lg" style={{
                display: 'none'
              }}></div>
              <span className="font-bold text-orange-700 text-4xl">Junooby</span>
            </Link>
            
            <div className="flex items-center space-x-8">
              <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/') ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'}`}>
                Home
              </Link>
              <Link to="/web" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/web') ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'}`}>
                Web
              </Link>
              <Link to="/ecommerce" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/ecommerce') ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'}`}>
                Ecommerce
              </Link>
              <Link to="/apps" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/apps') ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'}`}>
                Apps
              </Link>
              <Link to="/contact" className="bg-orange-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-700 transition-all duration-300 hover:scale-105">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Top Bar */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg fixed w-full z-50 transition-all duration-300 md:hidden block">
        <div className="px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/images/junooby_logo.png" alt="Junooby Logo" className="w-12 h-12 object-contain" onError={e => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'block';
              }} />
              <div className="w-12 h-12 bg-orange-600 rounded-lg" style={{
                display: 'none'
              }}></div>
              <span className="font-extrabold text-4xl text-orange-600">Junooby</span>
            </Link>
            
            <div className="flex items-center space-x-2">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-gray-50 transition-colors">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-lg border-t">
            <div className="py-4 space-y-2">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className={`block px-4 py-3 text-sm font-medium transition-colors ${isActive('/') ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'}`}>
                Home
              </Link>
              <Link to="/web" onClick={() => setIsMenuOpen(false)} className={`block px-4 py-3 text-sm font-medium transition-colors ${isActive('/web') ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'}`}>
                Web
              </Link>
              <Link to="/ecommerce" onClick={() => setIsMenuOpen(false)} className={`block px-4 py-3 text-sm font-medium transition-colors ${isActive('/ecommerce') ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'}`}>
                Ecommerce
              </Link>
              <Link to="/apps" onClick={() => setIsMenuOpen(false)} className={`block px-4 py-3 text-sm font-medium transition-colors ${isActive('/apps') ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'}`}>
                Apps
              </Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block mx-4 my-2 bg-orange-600 text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-orange-700">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
