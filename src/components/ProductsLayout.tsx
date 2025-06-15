import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart } from 'lucide-react';
interface ProductsLayoutProps {
  children: React.ReactNode;
  showBackToMain?: boolean;
}
const ProductsLayout: React.FC<ProductsLayoutProps> = ({
  children,
  showBackToMain = true
}) => {
  const {
    openCart,
    getCartItemsCount
  } = useCart();
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Products-specific header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex justify-between items-center h-16 lg:h-20">
            <Link to="/products" className="flex items-center space-x-3 lg:space-x-4">
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-blue-50 flex items-center justify-center ring-2 ring-blue-100 shadow-sm">
                  <img src="/images/junooby_logo.png" alt="Junooby Logo" className="w-10 h-10 lg:w-12 lg:h-12 object-contain" />
              </div>
              <div className="flex flex-col lg:flex-row lg:items-baseline lg:space-x-2">
                <span className="font-bold lg:text-2xl xl:text-3xl text-gray-800 tracking-tight text-3xl">Junooby</span>
                <span className="text-sm lg:text-base text-gray-500 font-medium text-center">Gadgets Store</span>
              </div>
            </Link>
            
            <div className="flex items-center">
              <button onClick={openCart} className="relative p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Open cart">
                <ShoppingCart className="h-6 w-6 text-gray-700" />
                {getCartItemsCount() > 0 && <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getCartItemsCount()}
                  </span>}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Products-specific footer */}
      <footer className="bg-gray-900 text-white py-12 lg:py-16 xl:py-20">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12 xl:gap-16">
            <div className="space-y-4 lg:space-y-6 xl:col-span-2">
              <div className="flex items-center space-x-2 lg:space-x-3">
                <img src="/images/junooby_logo.png" alt="Junooby Logo" className="w-8 h-8 lg:w-10 lg:h-10 object-contain" onError={e => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'block';
              }} />
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg" style={{
                display: 'none'
              }}></div>
                <span className="text-xl lg:text-2xl xl:text-3xl font-bold">Junooby Products</span>
              </div>
              <p className="text-gray-400 leading-relaxed text-base lg:text-lg xl:text-xl max-w-2xl">
                Premium tech gadgets and security solutions for modern businesses. Discover cutting-edge technology that transforms your workspace.
              </p>
              <div className="pt-4">
                <Link to="/services" className="inline-block bg-blue-600 text-white px-6 py-3 lg:px-8 lg:py-4 xl:px-10 xl:py-5 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105 text-base lg:text-lg xl:text-xl">
                  View Our Services
                </Link>
              </div>
            </div>
            
            <div className="lg:space-y-6">
              <h3 className="text-lg lg:text-xl xl:text-2xl font-semibold mb-4 lg:mb-6">Product Categories</h3>
              <ul className="space-y-3 lg:space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors text-base lg:text-lg">Tech Gadgets</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-base lg:text-lg">CCTV Cameras</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-base lg:text-lg">Security Systems</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-base lg:text-lg">Featured Products</a></li>
              </ul>
            </div>
            
            <div className="lg:space-y-6">
              <h3 className="text-lg lg:text-xl xl:text-2xl font-semibold mb-4 lg:mb-6">Contact</h3>
              <ul className="space-y-3 lg:space-y-4 text-gray-400">
                <li className="text-base lg:text-lg">📧 products@junooby.com</li>
                <li className="text-base lg:text-lg">📞 +256789572007</li>
                <li className="text-base lg:text-lg">🛒 Shop online 24/7</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 lg:mt-16 xl:mt-20 pt-8 lg:pt-12 text-center text-gray-400">
            <p className="text-base lg:text-lg">&copy; 2024 Junooby Products. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default ProductsLayout;