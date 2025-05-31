
import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Gaming PC Pro",
      category: "Computer",
      price: "$1,299",
      image: "/images/HP 15_6.jpg",
      features: ["Intel i7 Processor", "16GB RAM", "RTX 4060 GPU"]
    },
    {
      id: 2,
      name: "Security Camera 4K",
      category: "CCTV",
      price: "$299",
      image: "/images/bullet_cctv.jpg",
      features: ["4K Resolution", "Night Vision", "Mobile App"]
    },
    {
      id: 3,
      name: "WiFi Router Pro",
      category: "Networking",
      price: "$189",
      image: "/images/router.jpg",
      features: ["WiFi 6", "Gigabit Ports", "Mesh Ready"]
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our curated selection of premium tech gadgets and security solutions
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=300&fit=crop";
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>
              </div>
              
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <div className="space-y-1 mb-4">
                  {product.features.map((feature, index) => (
                    <p key={index} className="text-sm text-gray-600">• {feature}</p>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl md:text-2xl font-bold text-blue-600">{product.price}</span>
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 md:px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm md:text-base">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            to="/products"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
