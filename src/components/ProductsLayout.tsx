
import React from 'react';
import { Link } from 'react-router-dom';

interface ProductsLayoutProps {
  children: React.ReactNode;
  showBackToMain?: boolean;
}

const ProductsLayout: React.FC<ProductsLayoutProps> = ({ children, showBackToMain = true }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Products-specific header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img 
                src="/images/junooby_logo.png" 
                alt="Junooby Logo" 
                className="w-12 h-12 object-contain" 
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }} 
              />
              <div className="w-12 h-12 bg-blue-600 rounded-lg" style={{display: 'none'}}></div>
              <div className="flex flex-col">
                <span className="font-bold text-blue-600 text-2xl">Junooby</span>
                <span className="text-sm text-gray-600">Products Store</span>
              </div>
            </div>
            
            {showBackToMain && (
              <Link 
                to="/" 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105"
              >
                Back to Main Site
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Products-specific footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
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
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg" style={{display: 'none'}}></div>
                <span className="text-xl font-bold">Junooby Products</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Premium tech gadgets and security solutions for modern businesses.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Product Categories</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Tech Gadgets</a></li>
                <li><a href="#" className="hover:text-white transition-colors">CCTV Cameras</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security Systems</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Featured Products</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>📧 products@junooby.com</li>
                <li>📞 +256789572007</li>
                <li>🛒 Shop online 24/7</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
            <p>&copy; 2024 Junooby Products. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductsLayout;
