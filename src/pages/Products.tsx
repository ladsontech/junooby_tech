
import React, { useState, useEffect } from 'react';
import ProductsLayout from '@/components/ProductsLayout';
import ProductCard from '@/components/ProductCard';
import Cart from '@/components/Cart';
import { useCart } from '@/contexts/CartContext';
import { supabase } from '@/integrations/supabase/client';
import { Database } from '@/integrations/supabase/types';

type DbProduct = Database['public']['Tables']['products']['Row'];

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  specs: string[];
  main_image_url: string;
  featured?: boolean;
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
      
      // Transform the data to ensure specs is always a string array
      const transformedData: Product[] = (data || []).map((product: DbProduct) => ({
        id: product.id,
        name: product.name,
        category: product.category,
        price: product.price,
        description: product.description || '',
        specs: Array.isArray(product.specs) ? (product.specs as string[]) : [],
        main_image_url: product.main_image_url || '',
        featured: product.featured || false
      }));
      
      setProducts(transformedData);
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
    <ProductsLayout>
      <Cart />
      
      <section className="py-8 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 md:mb-6">Our Products</h1>
            <p className="text-base md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover our premium collection of tech gadgets and security solutions designed for modern businesses
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex justify-center mb-6 md:mb-8 lg:mb-12">
            <div className="bg-white rounded-xl p-1 shadow-lg overflow-x-auto w-full max-w-2xl">
              <div className="flex space-x-1">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex-1 px-3 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap text-sm md:text-base ${
                      activeCategory === category.id
                        ? 'bg-blue-600 text-white shadow-lg'
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
              <div className="text-base md:text-lg">Loading products...</div>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-base md:text-lg text-gray-500">No products found in this category.</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </ProductsLayout>
  );
};

export default Products;
