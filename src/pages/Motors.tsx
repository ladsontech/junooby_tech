import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';

const Motors = () => {
  const handleGetQuote = (vehicleName: string) => {
    const phoneNumber = '+256789572007';
    const message = `Hello! I would like to inquire about ${vehicleName}.`;
    const url = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const vehicles = [{
    title: "Toyota Corolla",
    description: "Reliable and fuel-efficient sedan perfect for city driving and long-distance travel. Known for its durability and low maintenance costs.",
    features: ["Automatic Transmission", "Air Conditioning", "Power Steering", "ABS Brakes", "Airbags", "Fuel Efficient Engine"],
    price: "Starting at UGX 45,000,000",
    bgColor: "bg-red-500",
    year: "2018-2023 Models Available",
    icon: '🚗'
  }, {
    title: "Honda CR-V",
    description: "Spacious SUV with excellent safety ratings and all-weather capability. Perfect for families and adventure seekers.",
    features: ["4WD Capability", "Spacious Interior", "Advanced Safety Features", "Backup Camera", "Bluetooth Connectivity", "Roof Rails"],
    price: "Starting at UGX 85,000,000",
    bgColor: "bg-blue-500",
    year: "2017-2023 Models Available",
    icon: '🚙'
  }, {
    title: "Toyota Hiace",
    description: "Versatile commercial van ideal for passenger transport, cargo delivery, and business operations across Uganda.",
    features: ["14-Seater Capacity", "Diesel Engine", "Manual Transmission", "High Ground Clearance", "Durable Build", "Easy Maintenance"],
    price: "Starting at UGX 65,000,000",
    bgColor: "bg-green-500",
    year: "2015-2022 Models Available",
    icon: '🚐'
  }, {
    title: "Subaru Forester",
    description: "All-wheel drive SUV with excellent off-road capabilities and safety features. Perfect for Uganda's diverse terrain.",
    features: ["All-Wheel Drive", "High Ground Clearance", "EyeSight Safety System", "Panoramic Sunroof", "X-Mode for Off-Road", "Boxer Engine"],
    price: "Starting at UGX 75,000,000",
    bgColor: "bg-purple-500",
    year: "2016-2023 Models Available",
    icon: '🏔️'
  }, {
    title: "Nissan X-Trail",
    description: "Modern crossover SUV with advanced technology and comfort features. Great for both urban and rural driving.",
    features: ["CVT Transmission", "Intelligent 4WD", "Around View Monitor", "LED Headlights", "7-Seater Option", "Eco Mode"],
    price: "Starting at UGX 70,000,000",
    bgColor: "bg-indigo-500",
    year: "2017-2023 Models Available",
    icon: '🌟'
  }, {
    title: "Toyota Land Cruiser",
    description: "Premium off-road vehicle built for extreme conditions. The ultimate choice for serious adventurers and professionals.",
    features: ["V8 Engine", "Full-Time 4WD", "Multi-Terrain Select", "Crawl Control", "Premium Interior", "Towing Capacity 3.5T"],
    price: "Starting at UGX 180,000,000",
    bgColor: "bg-yellow-600",
    year: "2016-2023 Models Available",
    icon: '🏜️'
  }];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-16 md:pt-20 lg:pt-24 pb-8 md:pb-16 lg:pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-6">Quality Motors</h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our premium collection of reliable vehicles perfect for Uganda's roads. From fuel-efficient sedans to rugged SUVs, we have the right vehicle for your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {vehicles.map((vehicle, index) => (
              <div key={index} className="bg-white rounded-xl p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className={`w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 ${vehicle.bgColor} rounded-xl flex items-center justify-center text-lg md:text-xl lg:text-2xl mb-3 md:mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300 text-white`}>
                  {vehicle.icon}
                </div>
                
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 md:mb-3 lg:mb-4">{vehicle.title}</h3>
                <p className="text-gray-600 mb-3 md:mb-4 lg:mb-6 text-sm md:text-base leading-relaxed">{vehicle.description}</p>
                
                <div className="mb-4 md:mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Key Features:</h4>
                  <div className="space-y-1 md:space-y-2">
                    {vehicle.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start text-gray-600 text-sm md:text-base">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 md:mr-3 flex-shrink-0 mt-2"></span>
                        <span className="leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {vehicle.year && (
                  <div className="mb-3 md:mb-4">
                    <span className="text-sm md:text-base text-gray-500">
                      <strong>Available:</strong> {vehicle.year}
                    </span>
                  </div>
                )}
                
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3 md:gap-4">
                  <span className="text-lg md:text-xl lg:text-2xl font-bold text-blue-600 order-2 lg:order-1">{vehicle.price}</span>
                  <button 
                    onClick={() => handleGetQuote(vehicle.title)} 
                    className="w-full lg:w-auto bg-blue-600 text-white px-6 py-3 lg:px-8 lg:py-3 rounded-lg font-medium hover:bg-blue-700 hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm md:text-base order-1 lg:order-2 min-w-[140px]"
                  >
                    Inquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Services Section */}
          <div className="mt-12 md:mt-16 lg:mt-20">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Additional Services</h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Complete automotive solutions to keep your vehicle running smoothly
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto">
                  🔧
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Vehicle Inspection</h3>
                <p className="text-gray-600 text-sm">Comprehensive pre-purchase inspections to ensure quality and reliability</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto">
                  📋
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Documentation</h3>
                <p className="text-gray-600 text-sm">Complete assistance with vehicle registration and transfer processes</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto">
                  🛡️
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Warranty</h3>
                <p className="text-gray-600 text-sm">Extended warranty options available for peace of mind</p>
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