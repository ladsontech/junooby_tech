import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Autoplay from 'embla-carousel-autoplay';

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

interface ProductCarouselProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  title?: string;
  description?: string;
}

const formatPrice = (price: string) => {
  const numericPrice = price.replace(/[^0-9]/g, '');
  if (!numericPrice) return price;
  return `UGX ${parseInt(numericPrice).toLocaleString()}`;
};

const ProductCarousel: React.FC<ProductCarouselProps> = ({ 
  products, 
  onAddToCart, 
  title = "New Arrivals",
  description = "Discover our latest collection of premium tech products"
}) => {
  if (products.length === 0) return null;

  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section className="py-8 md:py-12">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            {title}
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            {description}
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
              <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5">
                <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group h-full flex flex-col border border-blue-100">
                  <div className="relative overflow-hidden">
                    <AspectRatio ratio={1}>
                      <img 
                        src={product.main_image_url || '/images/HP 15_6.jpg'} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=400&fit=crop";
                        }}
                      />
                    </AspectRatio>
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                      <Badge variant="default" className="bg-gradient-to-r from-blue-600 to-purple-600 text-xs">
                        New Arrival
                      </Badge>
                      <Badge variant={product.condition === 'new' ? 'default' : 'secondary'} className={`text-xs ${
                        product.condition === 'new' ? 'bg-emerald-600' : 'bg-amber-600'
                      }`}>
                        {product.condition === 'new' ? 'New' : 'Used'}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                    <div className="space-y-1 mb-3 flex-grow">
                      {product.specs && product.specs.slice(0, 1).map((spec, index) => (
                        <p key={index} className="text-xs text-gray-600 line-clamp-1">• {spec}</p>
                      ))}
                    </div>
                    <div className="flex flex-col gap-2 mt-auto">
                      <span className="text-lg md:text-xl font-bold text-blue-600">{formatPrice(product.price)}</span>
                      <div className="flex gap-2">
                        <Link 
                          to={`/product/${product.id}`}
                          className="flex-1 text-center"
                        >
                          <Button variant="outline" size="sm" className="w-full text-xs">
                            View
                          </Button>
                        </Link>
                        <Button 
                          onClick={() => onAddToCart(product)}
                          size="sm"
                          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs"
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProductCarousel;