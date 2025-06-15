import React, { useState, useEffect } from 'react';
import ProductsLayout from '@/components/ProductsLayout';
import ProductCard from '@/components/ProductCard';
import ProductCarousel from '@/components/ProductCarousel';
import Cart from '@/components/Cart';
import { useCart } from '@/contexts/CartContext';
import { supabase } from '@/integrations/supabase/client';
import { Database } from '@/integrations/supabase/types';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

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
  condition: string;
}

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeCondition, setActiveCondition] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
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
        featured: product.featured || false,
        condition: product.condition || 'new'
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

  const conditions = [
    { id: 'all', name: 'All Conditions' },
    { id: 'new', name: 'Brand New' },
    { id: 'refurbished', name: 'Refurbished' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesCondition = activeCondition === 'all' || product.condition === activeCondition;
    const matchesSearch = searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.specs.some(spec => spec.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesCondition && matchesSearch;
  });

  // Get newest products for carousel (last 10 products)
  const newestProducts = products
    .filter(product => product.condition === 'new')
    .slice(0, 8);

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
      
      {/* New Arrivals Carousel Section */}
      {!loading && newestProducts.length > 0 && (
        <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <ProductCarousel products={newestProducts} onAddToCart={handleAddToCart} />
        </div>
      )}
      
      <section className="py-6 md:py-12">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">Our Products</h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover our premium collection of tech gadgets and security solutions designed for modern businesses
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="relative w-full max-w-2xl xl:max-w-3xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search products by name, description, or specifications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 text-base w-full rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
          
          {/* Category and Condition Filters */}
          <div className="flex flex-col lg:flex-row justify-center gap-4 lg:gap-6 mb-8 md:mb-10">
            {/* Category Filter */}
            <div className="bg-white rounded-xl p-1 shadow-md overflow-x-auto w-full lg:max-w-2xl xl:max-w-3xl">
              <div className="flex space-x-1 lg:space-x-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap text-sm md:text-base ${
                      activeCategory === category.id
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Condition Filter */}
            <div className="bg-white rounded-xl p-1 shadow-md overflow-x-auto w-full lg:max-w-xl xl:max-w-2xl">
              <div className="flex space-x-1 lg:space-x-2">
                {conditions.map((condition) => (
                  <button
                    key={condition.id}
                    onClick={() => setActiveCondition(condition.id)}
                    className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap text-sm md:text-base ${
                      activeCondition === condition.id
                        ? 'bg-green-600 text-white shadow-md'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {condition.name}
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
              <div className="text-base md:text-lg text-gray-500">
                {searchQuery ? `No products found matching "${searchQuery}"` : 'No products found with the selected filters.'}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-5">
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
