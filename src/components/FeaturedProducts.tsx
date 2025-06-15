import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { supabase } from '@/integrations/supabase/client';
import { Database } from '@/integrations/supabase/types';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

type DbProduct = Database['public']['Tables']['products']['Row'];

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  specs: string[];
  main_image_url: string;
  featured: boolean;
}

const formatPrice = (price: string) => {
  const numericPrice = price.replace(/[^0-9]/g, '');
  if (!numericPrice) return price;
  return `UGX ${parseInt(numericPrice).toLocaleString()}`;
};

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  const fetchFeaturedProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('featured', true)
        .limit(8)
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      // Transform the data to ensure proper types
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
      console.error('Error fetching featured products:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-8 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-base md:text-lg">Loading featured products...</div>
          </div>
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return null; // Don't show section if no featured products
  }

  return (
    <section className="py-8 md:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-6">Featured Products</h2>
          <p className="text-base md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover our curated selection of premium tech gadgets and security solutions
          </p>
        </div>
        
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {products.map((product) => (
              <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <div 
                  className="bg-white rounded-xl lg:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group h-full flex flex-col"
                >
                  <div className="relative overflow-hidden">
                    <AspectRatio ratio={4/3}>
                      <img 
                        src={product.main_image_url || '/images/HP 15_6.jpg'} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=300&fit=crop";
                        }}
                      />
                    </AspectRatio>
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${
                        product.category === 'gadgets' 
                          ? 'bg-blue-600' 
                          : 'bg-green-600'
                      }`}>
                        {product.category === 'gadgets' ? 'Gadget' : 'CCTV'}
                      </span>
                      <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4 md:p-6 flex flex-col flex-grow">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                    <div className="space-y-1 mb-4 flex-grow">
                      {product.specs && product.specs.slice(0, 2).map((spec, index) => (
                        <p key={index} className="text-sm text-gray-600 line-clamp-1">• {spec}</p>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mt-auto">
                      <span className="text-lg md:text-xl font-bold text-blue-600">{formatPrice(product.price)}</span>
                      <Link 
                        to={`/product/${product.id}`}
                        className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105 text-sm text-center"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
        
        <div className="text-center mt-8 md:mt-12 lg:mt-16">
          <Link 
            to="/products"
            className="inline-block bg-blue-600 text-white px-8 md:px-12 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
