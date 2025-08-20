
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';

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
}

const AdvertisementSection: React.FC<AdvertisementSectionProps> = ({ 
  advertisements, 
  title = "Featured Advertisements",
  description = "Discover our latest offers and promotions"
}) => {
  if (advertisements.length === 0) return null;

  const handleAdClick = (ad: Advertisement) => {
    if (ad.link) {
      window.open(ad.link, '_blank');
    }
  };

  return (
    <section className="py-8 md:py-12 bg-background tech-grid">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
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
          className="w-full relative"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {advertisements.map((ad) => (
              <CarouselItem key={ad.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5">
                <div 
                  className={`bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group border border-border animate-neon-pulse ${
                    ad.link ? 'cursor-pointer' : ''
                  }`}
                  onClick={() => handleAdClick(ad)}
                >
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
          
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-card/90 hover:bg-card shadow-lg border border-border h-10 w-10 text-foreground" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-card/90 hover:bg-card shadow-lg border border-border h-10 w-10 text-foreground" />
        </Carousel>
      </div>
    </section>
  );
};

export default AdvertisementSection;
