
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
      <nav className="bg-background/90 backdrop-blur-xl shadow-2xl border-b border-border/30 fixed w-full z-50 transition-all duration-500 md:block hidden space-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/images/junooby_logo.png" alt="Junooby Logo" className="w-12 h-12 object-contain" onError={e => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'block';
              }} />
              <div className="w-12 h-12 bg-primary rounded-lg animate-glow glow-blue" style={{
                display: 'none'
              }}></div>
              <span className="font-bold text-primary text-4xl text-glow">Junooby</span>
            </Link>
            
            <div className="flex items-center space-x-8">
              <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${isActive('/') ? 'text-primary bg-accent glow-blue' : 'text-foreground hover:text-primary hover:bg-accent'}`}>
                Home
              </Link>
              <Link to="/web" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${isActive('/web') ? 'text-primary bg-accent glow-blue' : 'text-foreground hover:text-primary hover:bg-accent'}`}>
                Web
              </Link>
              <Link to="/ecommerce" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${isActive('/ecommerce') ? 'text-primary bg-accent glow-blue' : 'text-foreground hover:text-primary hover:bg-accent'}`}>
                Ecommerce
              </Link>
              <Link to="/apps" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${isActive('/apps') ? 'text-primary bg-accent glow-blue' : 'text-foreground hover:text-primary hover:bg-accent'}`}>
                Apps
              </Link>
              <Link to="/contact" className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-all duration-500 hover:scale-110 animate-neon-pulse glow-blue">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Top Bar */}
      <nav className="bg-background/90 backdrop-blur-xl shadow-2xl border-b border-border/30 fixed w-full z-50 transition-all duration-500 md:hidden block space-card">
        <div className="px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/images/junooby_logo.png" alt="Junooby Logo" className="w-12 h-12 object-contain" onError={e => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'block';
              }} />
              <div className="w-12 h-12 bg-primary rounded-lg animate-glow glow-blue" style={{
                display: 'none'
              }}></div>
              <span className="font-extrabold text-4xl text-primary text-glow">Junooby</span>
            </Link>
            
            <div className="flex items-center space-x-2">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-foreground hover:text-primary hover:bg-accent transition-colors duration-300">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-xl shadow-2xl border-t border-border/30 space-card">
            <div className="py-4 space-y-2">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className={`block px-4 py-3 text-sm font-medium transition-colors duration-300 ${isActive('/') ? 'text-primary bg-accent glow-blue' : 'text-foreground hover:text-primary hover:bg-accent'}`}>
                Home
              </Link>
              <Link to="/web" onClick={() => setIsMenuOpen(false)} className={`block px-4 py-3 text-sm font-medium transition-colors duration-300 ${isActive('/web') ? 'text-primary bg-accent glow-blue' : 'text-foreground hover:text-primary hover:bg-accent'}`}>
                Web
              </Link>
              <Link to="/ecommerce" onClick={() => setIsMenuOpen(false)} className={`block px-4 py-3 text-sm font-medium transition-colors duration-300 ${isActive('/ecommerce') ? 'text-primary bg-accent glow-blue' : 'text-foreground hover:text-primary hover:bg-accent'}`}>
                Ecommerce
              </Link>
              <Link to="/apps" onClick={() => setIsMenuOpen(false)} className={`block px-4 py-3 text-sm font-medium transition-colors duration-300 ${isActive('/apps') ? 'text-primary bg-accent glow-blue' : 'text-foreground hover:text-primary hover:bg-accent'}`}>
                Apps
              </Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block mx-4 my-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-center hover:bg-primary/90 animate-neon-pulse glow-blue">
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
