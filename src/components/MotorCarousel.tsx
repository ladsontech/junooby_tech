import React, { useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Fuel, Settings, Eye, Heart } from 'lucide-react';
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
    <section className="py-12 md:py-16 lg:py-20">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
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
                <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                  
                  {/* Car Image Container */}
                  <div className="relative overflow-hidden bg-gray-50">
                    <AspectRatio ratio={1}>
                      <img 
                        src={car.image} 
                        alt={car.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?w=400&h=400&fit=crop";
                        }}
                      />
                    </AspectRatio>
                    
                    {/* Overlay Actions */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex gap-3">
                        <button className="bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                          <Eye size={18} />
                        </button>
                        <button className="bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                          <Heart size={18} />
                        </button>
                      </div>
                    </div>

                    {/* Vehicle Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1">
                      <Badge className="bg-gradient-to-r from-green-600 to-blue-600 text-white text-xs px-2 py-1 shadow-md">
                        Featured
                      </Badge>
                      <Badge variant={car.condition === 'new' ? 'default' : 'secondary'} className={
                        car.condition === 'new' ? 'bg-emerald-600 text-white' : 'bg-amber-600 text-white'
                      }>
                        {car.condition === 'new' ? 'New' : 'Used'}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Car Details */}
                  <div className="p-4 md:p-5 flex flex-col flex-grow">
                    {/* Vehicle Category */}
                    <div className="mb-2">
                      <span className="text-xs font-medium text-green-600 uppercase tracking-wide">
                        Vehicle
                      </span>
                    </div>

                    {/* Vehicle Name */}
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 line-clamp-1 group-hover:text-green-600 transition-colors duration-300">
                      {car.name}
                    </h3>
                    
                    {/* Location and Year */}
                    <div className="flex items-center justify-between mb-3 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1 text-green-600" />
                        <span className="truncate">{car.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1 text-blue-600" />
                        <span>{car.year}</span>
                      </div>
                    </div>

                    {/* Car Specs */}
                    <div className="grid grid-cols-2 gap-2 mb-3 text-xs text-gray-600">
                      <div className="flex items-center">
                        <Settings size={12} className="mr-1 text-gray-400" />
                        <span className="truncate">{car.transmission}</span>
                      </div>
                      <div className="flex items-center">
                        <Fuel size={12} className="mr-1 text-gray-400" />
                        <span className="truncate">{car.fuelType}</span>
                      </div>
                    </div>

                    {/* Mileage */}
                    <div className="text-sm text-gray-600 mb-3">
                      <span className="font-medium">Mileage:</span> {car.mileage}
                    </div>

                    {/* Features Preview */}
                    <div className="mb-4 flex-grow">
                      <div className="grid grid-cols-1 gap-1">
                        {car.features.slice(0, 2).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-xs text-gray-600">
                            <span className="w-1 h-1 bg-green-600 rounded-full mr-2 flex-shrink-0"></span>
                            <span className="truncate">{feature}</span>
                          </div>
                        ))}
                      </div>
                      {car.features.length > 2 && (
                        <div className="text-xs text-gray-500 mt-1">
                          +{car.features.length - 2} more features
                        </div>
                      )}
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                      <span className="text-lg md:text-xl font-bold text-gray-900">{car.price}</span>
                    </div>

                    {/* Action Button */}
                    <button 
                      onClick={() => onInquire(car.name, car.location)}
                      className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-2.5 px-4 rounded-xl font-medium text-sm transition-all duration-300 hover:shadow-lg hover:scale-105 mt-auto"
                    >
                      Inquire Now
                    </button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation Buttons */}
          <CarouselPrevious className="hidden md:flex -left-6 bg-white/90 hover:bg-white shadow-lg border-0 h-12 w-12" />
          <CarouselNext className="hidden md:flex -right-6 bg-white/90 hover:bg-white shadow-lg border-0 h-12 w-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default MotorCarousel;