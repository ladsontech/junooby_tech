import React, { useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Fuel, Settings } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';

interface Car {
  id: number;
  name: string;
  image: string;
  condition: string;
  year: number;
  price: string;
  location: string;
  mileage: string;
  transmission: string;
  fuelType: string;
  features: string[];
}

interface MotorCarouselProps {
  cars: Car[];
  onInquire: (vehicleName: string, location: string) => void;
}

const MotorCarousel: React.FC<MotorCarouselProps> = ({ cars, onInquire }) => {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section className="py-8 md:py-12">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Featured Vehicles
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our handpicked selection of quality vehicles available across Uganda
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
            {cars.map((car) => (
              <CarouselItem key={car.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group h-full flex flex-col">
                  {/* Car Image with 1:1 ratio */}
                  <div className="relative overflow-hidden">
                    <AspectRatio ratio={1}>
                      <img 
                        src={car.image} 
                        alt={car.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?w=400&h=400&fit=crop";
                        }}
                      />
                    </AspectRatio>
                    <div className="absolute top-3 left-3">
                      <Badge variant={car.condition === 'new' ? 'default' : 'secondary'} className={
                        car.condition === 'new' ? 'bg-emerald-600' : 'bg-amber-600'
                      }>
                        {car.condition === 'new' ? 'New' : 'Used'}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Car Details */}
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 line-clamp-1">{car.name}</h3>
                    
                    {/* Location and Year */}
                    <div className="flex items-center justify-between mb-2 text-xs text-gray-600">
                      <div className="flex items-center">
                        <MapPin size={12} className="mr-1" />
                        <span className="truncate">{car.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar size={12} className="mr-1" />
                        <span>{car.year}</span>
                      </div>
                    </div>

                    {/* Car Specs */}
                    <div className="grid grid-cols-2 gap-1 mb-2 text-xs text-gray-600">
                      <div className="flex items-center">
                        <Settings size={10} className="mr-1" />
                        <span className="truncate">{car.transmission}</span>
                      </div>
                      <div className="flex items-center">
                        <Fuel size={10} className="mr-1" />
                        <span className="truncate">{car.fuelType}</span>
                      </div>
                    </div>

                    {/* Mileage */}
                    <div className="text-xs text-gray-600 mb-2">
                      <strong>Mileage:</strong> {car.mileage}
                    </div>

                    {/* Features */}
                    <div className="mb-3 flex-grow">
                      <div className="grid grid-cols-1 gap-0.5">
                        {car.features.slice(0, 2).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-xs text-gray-600">
                            <span className="w-1 h-1 bg-blue-600 rounded-full mr-1 flex-shrink-0"></span>
                            <span className="truncate">{feature}</span>
                          </div>
                        ))}
                      </div>
                      {car.features.length > 2 && (
                        <div className="text-xs text-gray-500 mt-1">
                          +{car.features.length - 2} more
                        </div>
                      )}
                    </div>

                    {/* Price and Action */}
                    <div className="flex flex-col gap-2 mt-auto">
                      <div className="text-sm md:text-base font-bold text-blue-600">{car.price}</div>
                      <button 
                        onClick={() => onInquire(car.name, car.location)}
                        className="w-full bg-blue-600 text-white py-2 px-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 text-xs"
                      >
                        Inquire Now
                      </button>
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

export default MotorCarousel;