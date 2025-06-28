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
import WhatsAppButton from '@/components/WhatsAppButton';
import ProductFilters from '@/components/ProductFilters';

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
  const [activeCategory, setActiveCategory] = useState('phones');
  const [activeSubcategory, setActiveSubcategory] = useState('all');
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
      
      // Normalize specs: Convert JSON object to array of string values as needed
      const transformedData: Product[] = (data || []).map((product: DbProduct) => {
        let specs: string[] = [];
        if (Array.isArray(product.specs)) {
          specs = product.specs as string[];
        } else if (product.specs && typeof product.specs === 'object') {
          specs = Object.values(product.specs).map((val) =>
            typeof val === 'string' ? val : JSON.stringify(val)
          );
        }
        return {
          id: product.id,
          name: product.name,
          category: product.category,
          price: product.price,
          description: product.description || '',
          specs,
          main_image_url: product.main_image_url || '',
          featured: product.featured || false,
          condition: product.condition || 'new'
        };
      });
      
      setProducts(transformedData);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  // Subcategory logic for filtering
  const getSubcategoryCheck = (product: Product) => {
    const specs = product.specs || [];
    // PHONES
    if (activeCategory === "phones" && activeSubcategory !== "all") {
      return (
        (activeSubcategory === "samsung" && specs.some(s => /samsung/i.test(s))) ||
        (activeSubcategory === "zte" && specs.some(s => /zte/i.test(s))) ||
        (activeSubcategory === "iphone" && specs.some(s => /iphone/i.test(s))) ||
        (activeSubcategory === "googlepixel" && specs.some(s => /google\s*pixel/i.test(s)))
      );
    }
    // PCS/LAPTOPS
    if (activeCategory === "pcs" && activeSubcategory !== "all") {
      return (
        (activeSubcategory === "hp" && specs.some(s => /hp/i.test(s))) ||
        (activeSubcategory === "dell" && specs.some(s => /dell/i.test(s))) ||
        (activeSubcategory === "lenovo" && specs.some(s => /lenovo/i.test(s))) ||
        (activeSubcategory === "asus" && specs.some(s => /asus/i.test(s))) ||
        (activeSubcategory === "acer" && specs.some(s => /acer/i.test(s))) ||
        (activeSubcategory === "macbook" && specs.some(s => /macbook/i.test(s))) ||
        (activeSubcategory === "msi" && specs.some(s => /msi/i.test(s))) ||
        (activeSubcategory === "toshiba" && specs.some(s => /toshiba/i.test(s)))
      );
    }
    // CCTV cameras
    if (activeCategory === "cctv" && activeSubcategory !== "all") {
      return (
        (activeSubcategory === "bullet" && specs.some(s => /bullet/i.test(s))) ||
        (activeSubcategory === "dome" && specs.some(s => /dome/i.test(s))) ||
        (activeSubcategory === "ptz" && specs.some(s => /ptz/i.test(s)))
      );
    }
    // If "all" subcategory, always return true
    return true;
  };

  const filteredProducts = products.filter(product => {
    // CATEGORY
    const matchesCategory =
      (activeCategory === "phones" && /phone/i.test(product.category)) ||
      (activeCategory === "pcs" && /(pc|laptop|notebook)/i.test(product.category)) ||
      (activeCategory === "cctv" && /cctv/i.test(product.category));
    // SUBCATEGORY
    const matchesSubcategory = getSubcategoryCheck(product);
    // CONDITION
    const matchesCondition = activeCondition === 'all' || product.condition === activeCondition;
    // SEARCH
    const matchesSearch =
      searchQuery === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.specs.some(spec => spec.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSubcategory && matchesCondition && matchesSearch;
  });

  // Get newest products for carousel (last 8 products)
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
      <WhatsAppButton />
      
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
          
          {/* Product Filters */}
          <ProductFilters
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            activeSubcategory={activeSubcategory}
            setActiveSubcategory={setActiveSubcategory}
            activeCondition={activeCondition}
            setActiveCondition={setActiveCondition}
          />
          
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