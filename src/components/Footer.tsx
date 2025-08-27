
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-card/50 backdrop-blur-xl border-t border-border/30 text-foreground py-8 md:py-16 pb-6 md:pb-16 space-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4 col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <img 
                src="/images/junooby_logo.png" 
                alt="Junooby Logo" 
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-orange-400 rounded-lg animate-glow glow-blue" style={{display: 'none'}}></div>
              <span className="text-2xl font-bold text-primary text-glow">Junooby</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Bringing cutting-edge technology solutions to Sub-Saharan Africa. Your trusted tech partner in the digital age.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary text-glow">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Web Development</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">SEO</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Digital Marketing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary text-glow">Products</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Gaming PCs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Routers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">CCTV Cameras</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Tech Gadgets</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary text-glow">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="text-primary glow-blue">📧</span> info@junooby.com
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary glow-blue">📞</span> +256789572007
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary glow-blue">📍</span> Sub-Saharan Africa
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/30 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Junooby. All rights reserved. Made with <span className="text-primary glow-blue">❤️</span> in Sub-Saharan Africa.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
