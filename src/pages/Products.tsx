
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';
import Cart from '@/components/Cart';
import { useCart } from '@/contexts/CartContext';
import { supabase } from '@/integrations/supabase/client';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  specs: string[];
  main_image_url: string;
}

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'gadgets', name: 'Gadgets' },
    { id: 'cctv', name: 'CCTV Cameras' }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: parseInt(product.id),
      name: product.name,
      price: product.price,
      image: product.main_image_url || '/images/HP 15_6.jpg'
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Cart />
      
      <section className="pt-20 md:pt-24 lg:pt-28 pb-12 md:pb-20 lg:pb-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">Our Products</h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto">
              Discover our premium collection of tech gadgets and security solutions designed for modern businesses
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex justify-center mb-8 md:mb-12 lg:mb-16">
            <div className="bg-white rounded-2xl p-1 md:p-2 shadow-lg overflow-x-auto">
              <div className="flex space-x-1">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 rounded-xl font-medium transition-all duration-300 whitespace-nowrap text-sm md:text-base lg:text-lg ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Products Grid */}
          {loading ? (
            <div className="text-center py-12">
              <div className="text-lg">Loading products...</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id}
                  className="bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="relative overflow-hidden">
                    <AspectRatio ratio={1}>
                      <img 
                        src={product.main_image_url || '/images/HP 15_6.jpg'} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=400&fit=crop";
                        }}
                      />
                    </AspectRatio>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${
                        product.category === 'gadgets' 
                          ? 'bg-blue-600' 
                          : 'bg-green-600'
                      }`}>
                        {product.category === 'gadgets' ? 'Gadget' : 'CCTV'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4 md:p-6 lg:p-8">
                    <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-900 mb-2 md:mb-3">{product.name}</h3>
                    <div className="space-y-1 mb-3 md:mb-4 lg:mb-6">
                      {product.specs && product.specs.slice(0, 3).map((spec, index) => (
                        <p key={index} className="text-xs md:text-sm lg:text-base text-gray-600">• {spec}</p>
                      ))}
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3 lg:gap-4">
                      <span className="text-lg md:text-xl lg:text-2xl font-bold text-blue-600">{product.price}</span>
                      <div className="flex gap-2 w-full lg:w-auto">
                        <Link 
                          to={`/product/${product.id}`}
                          className="flex-1 lg:flex-initial bg-white border border-blue-600 text-blue-600 px-3 md:px-4 lg:px-6 py-2 md:py-3 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300 text-sm md:text-base text-center"
                        >
                          View Details
                        </Link>
                        <button 
                          onClick={() => handleAddToCart(product)}
                          className="flex-1 lg:flex-initial bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 md:px-4 lg:px-6 py-2 md:py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm md:text-base"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Products;
