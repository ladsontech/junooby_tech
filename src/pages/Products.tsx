import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';
import ProductCard from '@/components/ProductCard';
import ProductCarousel from '@/components/ProductCarousel';
import AdvertisementSection from '@/components/AdvertisementSection';
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

  // Sample advertisements for Products section
  const productAdvertisements = [
    {
      id: 1,
      title: "New Year Tech Sale",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=338&fit=crop",
      description: "Up to 30% off on all laptops and smartphones. Limited time offer!",
      link: "https://wa.me/256789572007?text=I'm interested in the New Year tech sale"
    },
    {
      id: 2,
      title: "Free Installation Service",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=338&fit=crop",
      description: "Get free CCTV installation with every security camera purchase this month.",
      link: "https://wa.me/256789572007?text=Tell me about free CCTV installation"
    },
    {
      id: 3,
      title: "Student Discount Program",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=338&fit=crop",
      description: "Special pricing for students on laptops and tablets. Valid student ID required.",
      link: "https://wa.me/256789572007?text=I need information about student discounts"
    },
    {
      id: 4,
      title: "Trade-In Your Old Device",
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&h=338&fit=crop",
      description: "Get credit for your old phone or laptop when upgrading to a newer model.",
      link: "https://wa.me/256789572007?text=I want to trade in my device"
    },
    {
      id: 5,
      title: "Extended Warranty Available",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=338&fit=crop",
      description: "Protect your tech investment with our comprehensive warranty plans.",
      link: "https://wa.me/256789572007?text=Tell me about extended warranty options"
    },
    {
      id: 6,
      title: "Bulk Purchase Discounts",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&h=338&fit=crop",
      description: "Special rates for businesses and organizations buying in bulk quantities.",
      link: "https://wa.me/256789572007?text=I need a quote for bulk purchase"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Cart />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="pt-16 md:pt-20 lg:pt-24 pb-8 md:pb-16 lg:pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-6">Tech Products</h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our premium collection of tech gadgets and security solutions designed for modern businesses across Uganda
            </p>
          </div>
        </div>
      </section>

      {/* New Arrivals Carousel Section */}
      {!loading && newestProducts.length > 0 && (
        <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <ProductCarousel products={newestProducts} onAddToCart={handleAddToCart} />
        </div>
      )}

      {/* Product Advertisements Section */}
      <AdvertisementSection 
        advertisements={productAdvertisements}
        title="Special Deals & Offers"
        description="Don't miss out on our exclusive tech deals and premium services"
        autoplayDelay={5000}
      />
      
      <section className="py-8 md:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Browse All Products</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Find the perfect tech solution for your needs from our comprehensive inventory
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="relative w-full max-w-2xl">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          )}

          {/* Product Categories Info */}
          <div className="mt-12 md:mt-16 lg:mt-20">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Product Categories</h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our diverse range of technology products across different categories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto">
                  📱
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Smartphones</h3>
                <p className="text-gray-600 text-sm">Latest smartphones from top brands including Samsung, iPhone, and more</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto">
                  💻
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Laptops & PCs</h3>
                <p className="text-gray-600 text-sm">High-performance computers from HP, Dell, Lenovo, and other leading manufacturers</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto">
                  📹
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">CCTV Cameras</h3>
                <p className="text-gray-600 text-sm">Professional security cameras including bullet, dome, and PTZ systems</p>
              </div>
            </div>
          </div>

          {/* Why Choose Our Products */}
          <div className="mt-12 md:mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 md:p-8 lg:p-12 text-white">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Our Products?</h2>
              <p className="text-base md:text-lg opacity-90 max-w-2xl mx-auto">
                We provide only the highest quality tech products with comprehensive support and warranty
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center text-3xl mb-4 mx-auto">
                  ✅
                </div>
                <h3 className="text-xl font-bold mb-2">Genuine Products</h3>
                <p className="text-sm opacity-90">100% authentic products from authorized distributors</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center text-3xl mb-4 mx-auto">
                  🛡️
                </div>
                <h3 className="text-xl font-bold mb-2">Warranty Coverage</h3>
                <p className="text-sm opacity-90">Comprehensive warranty and after-sales support</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center text-3xl mb-4 mx-auto">
                  🚚
                </div>
                <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
                <p className="text-sm opacity-90">Quick delivery across Uganda with secure packaging</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center text-3xl mb-4 mx-auto">
                  💰
                </div>
                <h3 className="text-xl font-bold mb-2">Best Prices</h3>
                <p className="text-sm opacity-90">Competitive pricing with flexible payment options</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Products;