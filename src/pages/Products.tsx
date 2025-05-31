
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Cctv } from 'lucide-react';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const products = [
    // Gadgets
    {
      id: 1,
      name: "Gaming PC Ultimate",
      category: "gadgets",
      price: "$1,899",
      image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=300&fit=crop",
      specs: ["Intel i9 Processor", "32GB DDR4 RAM", "RTX 4080 GPU", "1TB NVMe SSD"]
    },
    {
      id: 2,
      name: "Business PC Pro",
      category: "gadgets",
      price: "$899",
      image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop",
      specs: ["Intel i5 Processor", "16GB RAM", "512GB SSD", "Windows 11 Pro"]
    },
    {
      id: 3,
      name: "WiFi 6 Router Pro",
      category: "gadgets",
      price: "$299",
      image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400&h=300&fit=crop",
      specs: ["WiFi 6 Technology", "4 Gigabit Ports", "MU-MIMO", "Mesh Compatible"]
    },
    {
      id: 4,
      name: "Enterprise Router",
      category: "gadgets",
      price: "$599",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop",
      specs: ["Dual Band", "VPN Support", "Load Balancing", "24/7 Support"]
    },
    // CCTV Cameras
    {
      id: 5,
      name: "4K Security Camera",
      category: "cctv",
      price: "$399",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      specs: ["4K Ultra HD", "Night Vision", "Motion Detection", "Mobile App"]
    },
    {
      id: 6,
      name: "PTZ Security Camera",
      category: "cctv",
      price: "$899",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
      specs: ["Pan-Tilt-Zoom", "Auto Tracking", "Audio Recording", "Weather Resistant"]
    },
    {
      id: 7,
      name: "Dome Security Camera",
      category: "cctv",
      price: "$249",
      image: "https://images.unsplash.com/photo-1591273700501-de3d25dfdfde?w=400&h=300&fit=crop",
      specs: ["1080p HD", "Vandal Resistant", "IR Night Vision", "Easy Installation"]
    },
    {
      id: 8,
      name: "CCTV System Kit",
      category: "cctv",
      price: "$1,299",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      specs: ["8 Camera System", "NVR Included", "Remote Viewing", "Professional Installation"]
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
      
      <section className="pt-24 pb-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Products</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our premium collection of tech gadgets and security solutions designed for modern businesses
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-2 shadow-lg">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
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
          
          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                  />
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
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{product.name}</h3>
                  <div className="space-y-1 mb-4">
                    {product.specs.map((spec, index) => (
                      <p key={index} className="text-sm text-gray-600">• {spec}</p>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-blue-600">{product.price}</span>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
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
    </div>
  );
};

export default Products;
