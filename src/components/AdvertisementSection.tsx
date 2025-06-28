import React, { useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Autoplay from 'embla-carousel-autoplay';

interface Advertisement {
  id: number;
  title: string;
  image: string;
  description?: string;
  link?: string;
}

interface AdvertisementSectionProps {
  advertisements: Advertisement[];
  title?: string;
  description?: string;
  autoplayDelay?: number;
}

const AdvertisementSection: React.FC<AdvertisementSectionProps> = ({ 
  advertisements, 
  title = "Featured Advertisements",
  description = "Discover our latest offers and promotions",
  autoplayDelay = 5000
}) => {
  if (advertisements.length === 0) return null;

  // Auto-scroll with customizable delay
  const plugin = useRef(
    Autoplay({ delay: autoplayDelay, stopOnInteraction: true })
  );

  const handleAdClick = (ad: Advertisement) => {
    if (ad.link) {
      window.open(ad.link, '_blank');
    }
  };

  return (
    <section className="py-8 md:py-12 bg-gradient-to-br from-gray-50 to-blue-50">
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
          className="w-full relative"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {advertisements.map((ad) => (
              <CarouselItem key={ad.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5">
                <div 
                  className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group ${
                    ad.link ? 'cursor-pointer' : ''
                  }`}
                  onClick={() => handleAdClick(ad)}
                >
                  {/* Advertisement Image with 16:9 ratio - Images only, no text */}
                  <div className="relative overflow-hidden">
                    <AspectRatio ratio={16/9}>
                      <img 
                        src={ad.image} 
                        alt={ad.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=338&fit=crop";
                        }}
                      />
                    </AspectRatio>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation Buttons - Always visible with better positioning */}
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg border-0 h-10 w-10" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg border-0 h-10 w-10" />
        </Carousel>
      </div>
    </section>
  );
};

export default AdvertisementSection;