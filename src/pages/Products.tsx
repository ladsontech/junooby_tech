
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';
import WhatsAppButton from '@/components/WhatsAppButton';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleOrderNow = (productName: string) => {
    const phoneNumber = '+256789572007';
    const message = `Hello! I would like to order ${productName}.`;
    const url = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const products = [
    // Gadgets
    {
      id: 1,
      name: "Gaming PC Ultimate",
      category: "gadgets",
      price: "$1,899",
      image: "/images/HP 15_6.jpg",
      specs: ["Intel i9 Processor", "32GB DDR4 RAM", "RTX 4080 GPU", "1TB NVMe SSD"]
    },
    {
      id: 2,
      name: "Business PC Pro",
      category: "gadgets",
      price: "$899",
      image: "/images/dell_latitude.jpg",
      specs: ["Intel i5 Processor", "16GB RAM", "512GB SSD", "Windows 11 Pro"]
    },
    {
      id: 3,
      name: "WiFi 6 Router Pro",
      category: "gadgets",
      price: "$299",
      image: "/images/router.jpg",
      specs: ["WiFi 6 Technology", "4 Gigabit Ports", "MU-MIMO", "Mesh Compatible"]
    },
    {
      id: 4,
      name: "HP Slim Laptop",
      category: "gadgets",
      price: "$599",
      image: "/images/hp_slim.jpg",
      specs: ["Dual Band", "VPN Support", "Load Balancing", "24/7 Support"]
    },
    // CCTV Cameras
    {
      id: 5,
      name: "4K Security Camera",
      category: "cctv",
      price: "$399",
      image: "/images/bullet_cctv.jpg",
      specs: ["4K Ultra HD", "Night Vision", "Motion Detection", "Mobile App"]
    },
    {
      id: 6,
      name: "PTZ Security Camera",
      category: "cctv",
      price: "$899",
      image: "/images/dual_lens_ptz.jpg",
      specs: ["Pan-Tilt-Zoom", "Auto Tracking", "Audio Recording", "Weather Resistant"]
    },
    {
      id: 7,
      name: "Solar PTZ Camera",
      category: "cctv",
      price: "$1,299",
      image: "/images/single_lens_solar_ptz.jpg",
      specs: ["Solar Powered", "4G Connectivity", "PIR Detection", "Two-way Audio"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'gadgets', name: 'Gadgets' },
    { id: 'cctv', name: 'CCTV Cameras' }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-20 md:pt-24 lg:pt-28 pb-12 md:pb-20 lg:pb-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">Our Products</h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto">
              Discover our premium collection of tech gadgets and security solutions designed for modern businesses
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex justify-center mb-8 md:mb-12 lg:mb-16">
            <div className="bg-white rounded-2xl p-1 md:p-2 shadow-lg overflow-x-auto">
              <div className="flex space-x-1">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 rounded-xl font-medium transition-all duration-300 whitespace-nowrap text-sm md:text-base lg:text-lg ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden">
                  <AspectRatio ratio={1}>
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=400&fit=crop";
                      }}
                    />
                  </AspectRatio>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${
                      product.category === 'gadgets' 
                        ? 'bg-blue-600' 
                        : 'bg-green-600'
                    }`}>
                      {product.category === 'gadgets' ? 'Gadget' : 'CCTV'}
                    </span>
                  </div>
                </div>
                
                <div className="p-4 md:p-6 lg:p-8">
                  <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-900 mb-2 md:mb-3">{product.name}</h3>
                  <div className="space-y-1 mb-3 md:mb-4 lg:mb-6">
                    {product.specs.map((spec, index) => (
                      <p key={index} className="text-xs md:text-sm lg:text-base text-gray-600">• {spec}</p>
                    ))}
                  </div>
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3 lg:gap-4">
                    <span className="text-lg md:text-xl lg:text-2xl font-bold text-blue-600">{product.price}</span>
                    <button 
                      onClick={() => handleOrderNow(product.name)}
                      className="w-full lg:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 md:px-4 lg:px-6 py-2 md:py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm md:text-base"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
      <BottomNav />
      <WhatsAppButton />
    </div>
  );
};

export default Products;
