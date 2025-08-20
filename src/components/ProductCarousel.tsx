
import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Eye, Heart } from 'lucide-react';

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

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background tech-grid">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
            {title}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {products.map((product) => (
              <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5">
                <div className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border h-full flex flex-col animate-neon-pulse">
                  
                  <div className="relative overflow-hidden bg-background">
                    <AspectRatio ratio={1}>
                      <img 
                        src={product.main_image_url || '/images/HP 15_6.jpg'} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=400&fit=crop";
                        }}
                      />
                    </AspectRatio>
                    
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex gap-3">
                        <Link to={`/product/${product.id}`}>
                          <button className="bg-card/90 hover:bg-card text-foreground p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                            <Eye size={18} />
                          </button>
                        </Link>
                        <button className="bg-card/90 hover:bg-card text-foreground p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                          <Heart size={18} />
                        </button>
                      </div>
                    </div>

                    <div className="absolute top-3 left-3 flex flex-col gap-1">
                      <Badge className="bg-primary text-primary-foreground text-xs px-2 py-1 shadow-md">
                        New Arrival
                      </Badge>
                      {product.condition === 'new' && (
                        <Badge className="bg-secondary text-secondary-foreground text-xs px-2 py-1">
                          New
                        </Badge>
                      )}
                      {product.featured && (
                        <Badge className="bg-primary text-primary-foreground text-xs px-2 py-1">
                          Featured
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-4 md:p-5 flex flex-col flex-grow">
                    <div className="mb-2">
                      <span className="text-xs font-medium text-primary uppercase tracking-wide">
                        {product.category === 'phones' && "Smartphone"}
                        {product.category === 'pcs' && "Computer"}
                        {product.category === 'cctv' && "Security"}
                      </span>
                    </div>

                    <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 line-clamp-2 leading-tight group-hover:text-primary transition-colors duration-300">
                      {product.name}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2 leading-relaxed flex-grow">
                      {product.description || "Premium quality product with excellent features and performance."}
                    </p>

                    {product.specs && product.specs.length > 0 && (
                      <div className="mb-3">
                        <p className="text-xs text-muted-foreground line-clamp-1">
                          • {product.specs[0]}
                        </p>
                      </div>
                    )}

                    <div className="mb-4">
                      <span className="text-lg md:text-xl font-bold text-foreground">
                        {formatPrice(product.price)}
                      </span>
                    </div>

                    <div className="flex gap-2 mt-auto">
                      <button
                        onClick={() => onAddToCart(product)}
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground py-2.5 px-4 rounded-xl font-medium text-sm transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2 animate-neon-pulse"
                      >
                        <ShoppingCart size={16} />
                        Add to Cart
                      </button>
                      <Link to={`/product/${product.id}`}>
                        <button className="bg-accent hover:bg-accent/80 text-accent-foreground py-2.5 px-4 rounded-xl font-medium text-sm transition-all duration-300 hover:shadow-md">
                          <Eye size={16} />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <CarouselPrevious className="hidden md:flex -left-6 bg-card/90 hover:bg-card shadow-lg border border-border h-12 w-12 text-foreground" />
          <CarouselNext className="hidden md:flex -right-6 bg-card/90 hover:bg-card shadow-lg border border-border h-12 w-12 text-foreground" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProductCarousel;
