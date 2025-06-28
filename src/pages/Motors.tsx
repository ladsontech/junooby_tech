import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';
import MotorCarousel from '@/components/MotorCarousel';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { MapPin, Calendar, Fuel, Settings } from 'lucide-react';

const Motors = () => {
  const handleInquire = (vehicleName: string, location: string) => {
    const phoneNumber = '+256789572007';
    const message = `Hello! I would like to inquire about the ${vehicleName} located in ${location}.`;
    const url = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const cars = [
    {
      id: 1,
      name: "Toyota Corolla 2019",
      image: "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?w=600&h=338&fit=crop",
      condition: "used",
      year: 2019,
      price: "UGX 45,000,000",
      location: "Kampala Bond",
      mileage: "85,000 km",
      transmission: "Automatic",
      fuelType: "Petrol",
      features: [
        "Air Conditioning",
        "Power Steering", 
        "ABS Brakes",
        "Airbags",
        "Electric Windows",
        "Central Locking"
      ]
    },
    {
      id: 2,
      name: "Honda CR-V 2020",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=338&fit=crop",
      condition: "used",
      year: 2020,
      price: "UGX 85,000,000",
      location: "Entebbe Bond",
      mileage: "45,000 km",
      transmission: "CVT",
      fuelType: "Petrol",
      features: [
        "4WD",
        "Backup Camera",
        "Bluetooth",
        "Cruise Control",
        "Sunroof",
        "Leather Seats"
      ]
    },
    {
      id: 3,
      name: "Toyota Hiace 2018",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=338&fit=crop",
      condition: "used",
      year: 2018,
      price: "UGX 65,000,000",
      location: "Jinja Bond",
      mileage: "120,000 km",
      transmission: "Manual",
      fuelType: "Diesel",
      features: [
        "14 Seater",
        "High Roof",
        "Power Steering",
        "Air Conditioning",
        "Manual Windows",
        "Dual Airbags"
      ]
    },
    {
      id: 4,
      name: "Subaru Forester 2021",
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&h=338&fit=crop",
      condition: "new",
      year: 2021,
      price: "UGX 95,000,000",
      location: "Kampala Bond",
      mileage: "15,000 km",
      transmission: "CVT",
      fuelType: "Petrol",
      features: [
        "All-Wheel Drive",
        "EyeSight Safety",
        "X-Mode",
        "Panoramic Sunroof",
        "Heated Seats",
        "Keyless Entry"
      ]
    },
    {
      id: 5,
      name: "Nissan X-Trail 2019",
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&h=338&fit=crop",
      condition: "used",
      year: 2019,
      price: "UGX 70,000,000",
      location: "Mbarara Bond",
      mileage: "65,000 km",
      transmission: "CVT",
      fuelType: "Petrol",
      features: [
        "Intelligent 4WD",
        "Around View Monitor",
        "LED Headlights",
        "7 Seater",
        "Eco Mode",
        "Remote Start"
      ]
    },
    {
      id: 6,
      name: "Toyota Land Cruiser 2020",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=338&fit=crop",
      condition: "used",
      year: 2020,
      price: "UGX 180,000,000",
      location: "Kampala Bond",
      mileage: "35,000 km",
      transmission: "Automatic",
      fuelType: "Diesel",
      features: [
        "V8 Engine",
        "Full-Time 4WD",
        "Multi-Terrain Select",
        "Crawl Control",
        "Premium Interior",
        "Towing Package"
      ]
    },
    {
      id: 7,
      name: "Honda Fit 2017",
      image: "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?w=600&h=338&fit=crop",
      condition: "used",
      year: 2017,
      price: "UGX 28,000,000",
      location: "Gulu Bond",
      mileage: "95,000 km",
      transmission: "CVT",
      fuelType: "Petrol",
      features: [
        "Fuel Efficient",
        "Compact Size",
        "Easy Parking",
        "Air Conditioning",
        "Power Steering",
        "Electric Windows"
      ]
    },
    {
      id: 8,
      name: "Toyota Prado 2022",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=338&fit=crop",
      condition: "new",
      year: 2022,
      price: "UGX 150,000,000",
      location: "Kampala Bond",
      mileage: "8,000 km",
      transmission: "Automatic",
      fuelType: "Diesel",
      features: [
        "4WD",
        "Leather Interior",
        "Navigation System",
        "Reverse Camera",
        "Roof Rails",
        "Premium Sound"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-16 md:pt-20 lg:pt-24 pb-8 md:pb-16 lg:pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-6">Quality Motors</h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our premium collection of reliable vehicles available across Uganda. From fuel-efficient cars to rugged SUVs, find your perfect vehicle today.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Vehicles Carousel */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <MotorCarousel cars={cars} onInquire={handleInquire} />
      </div>
      
      <section className="py-8 md:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* All Vehicles Grid */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">All Available Vehicles</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our complete inventory of quality vehicles across all our bond locations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cars.map((car) => (
              <div key={car.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                {/* Car Image with 16:9 ratio */}
                <div className="relative overflow-hidden">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src={car.image} 
                      alt={car.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?w=600&h=338&fit=crop";
                      }}
                    />
                  </AspectRatio>
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                    <Badge variant={car.condition === 'new' ? 'default' : 'secondary'} className={
                      car.condition === 'new' ? 'bg-emerald-600' : 'bg-amber-600'
                    }>
                      {car.condition === 'new' ? 'Brand New' : 'Used'}
                    </Badge>
                  </div>
                </div>
                
                {/* Car Details */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">{car.name}</h3>
                  
                  {/* Location and Year */}
                  <div className="flex items-center justify-between mb-3 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1" />
                      <span>{car.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      <span>{car.year}</span>
                    </div>
                  </div>

                  {/* Car Specs */}
                  <div className="grid grid-cols-2 gap-2 mb-3 text-xs text-gray-600">
                    <div className="flex items-center">
                      <Settings size={12} className="mr-1" />
                      <span>{car.transmission}</span>
                    </div>
                    <div className="flex items-center">
                      <Fuel size={12} className="mr-1" />
                      <span>{car.fuelType}</span>
                    </div>
                  </div>

                  {/* Mileage */}
                  <div className="text-sm text-gray-600 mb-3">
                    <strong>Mileage:</strong> {car.mileage}
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {car.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-600">
                          <span className="w-1 h-1 bg-blue-600 rounded-full mr-1 flex-shrink-0"></span>
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>
                    {car.features.length > 4 && (
                      <div className="text-xs text-gray-500 mt-1">
                        +{car.features.length - 4} more features
                      </div>
                    )}
                  </div>

                  {/* Price and Action */}
                  <div className="flex flex-col gap-2">
                    <div className="text-lg font-bold text-blue-600">{car.price}</div>
                    <button 
                      onClick={() => handleInquire(car.name, car.location)}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105 text-sm"
                    >
                      Inquire Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bond Locations Info */}
          <div className="mt-12 md:mt-16 lg:mt-20">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Our Bond Locations</h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Visit our strategically located bonds across Uganda for vehicle inspection and collection
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto">
                  🏢
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Kampala Bond</h3>
                <p className="text-gray-600 text-sm">Main showroom with largest inventory</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto">
                  ✈️
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Entebbe Bond</h3>
                <p className="text-gray-600 text-sm">Near airport for imported vehicles</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto">
                  🌊
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Jinja Bond</h3>
                <p className="text-gray-600 text-sm">Eastern region service center</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto">
                  🏔️
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mbarara Bond</h3>
                <p className="text-gray-600 text-sm">Western region headquarters</p>
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="mt-12 md:mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 md:p-8 lg:p-12 text-white">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Complete Automotive Solutions</h2>
              <p className="text-base md:text-lg opacity-90 max-w-2xl mx-auto">
                We provide end-to-end services to make your car buying experience seamless
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center text-3xl mb-4 mx-auto">
                  🔧
                </div>
                <h3 className="text-xl font-bold mb-2">Vehicle Inspection</h3>
                <p className="text-sm opacity-90">Comprehensive pre-purchase inspections by certified mechanics</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center text-3xl mb-4 mx-auto">
                  📋
                </div>
                <h3 className="text-xl font-bold mb-2">Documentation</h3>
                <p className="text-sm opacity-90">Complete assistance with registration, transfer, and insurance</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center text-3xl mb-4 mx-auto">
                  🛡️
                </div>
                <h3 className="text-xl font-bold mb-2">Warranty & Support</h3>
                <p className="text-sm opacity-90">Extended warranty options and after-sales support</p>
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

export default Motors;