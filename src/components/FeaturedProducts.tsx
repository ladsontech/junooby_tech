
import React from 'react';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Gaming PC Pro",
      category: "Computer",
      price: "UGX 4,680,000",
      image: "/images/HP 15_6.jpg",
      features: ["Intel i7 Processor", "16GB RAM", "RTX 4060 GPU"]
    },
    {
      id: 2,
      name: "Security Camera 4K",
      category: "CCTV",
      price: "UGX 1,080,000",
      image: "/images/bullet_cctv.jpg",
      features: ["4K Resolution", "Night Vision", "Mobile App"]
    },
    {
      id: 3,
      name: "WiFi Router Pro",
      category: "Networking",
      price: "UGX 680,000",
      image: "/images/router.jpg",
      features: ["WiFi 6", "Gigabit Ports", "Mesh Ready"]
    }
  ];

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">Featured Products</h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto">
            Discover our curated selection of premium tech gadgets and security solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-8 md:mb-12 lg:mb-16">
          {products.map((product) => (
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
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>
              </div>
              
              <div className="p-4 md:p-6 lg:p-8">
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 md:mb-3">{product.name}</h3>
                <div className="space-y-1 mb-4 md:mb-6">
                  {product.features.map((feature, index) => (
                    <p key={index} className="text-sm md:text-base text-gray-600">• {feature}</p>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-600">{product.price}</span>
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 md:px-4 lg:px-6 py-2 md:py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm md:text-base">
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
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 md:px-8 lg:px-12 py-3 md:py-4 lg:py-5 rounded-lg font-semibold text-base md:text-lg lg:text-xl hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
