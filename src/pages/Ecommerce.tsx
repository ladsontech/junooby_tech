
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';

const Ecommerce = () => {
  const ecommerceServices = [
    {
      title: "Online Stores",
      description: "Complete ecommerce websites with shopping cart and payment integration",
      features: ["Product Catalog", "Shopping Cart", "Payment Gateway", "Order Management"],
      icon: "🛒"
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile apps for iOS and Android",
      features: ["Push Notifications", "Offline Mode", "User Authentication", "In-App Purchases"],
      icon: "📱"
    },
    {
      title: "Marketplace Integration",
      description: "Connect your store to popular marketplaces and platforms",
      features: ["Multi-Channel Selling", "Inventory Sync", "Order Consolidation", "Automated Listings"],
      icon: "🌐"
    },
    {
      title: "Digital Payments",
      description: "Secure payment processing and financial management tools",
      features: ["Mobile Money", "Credit Cards", "Digital Wallets", "Fraud Protection"],
      icon: "💳"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-purple-900 via-blue-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ecommerce Solutions
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                That Drive Sales
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Complete ecommerce websites and mobile apps designed to maximize conversions, 
              streamline operations, and grow your online business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ecommerce Development Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From simple online stores to complex marketplace platforms, we build 
              ecommerce solutions that scale with your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ecommerceServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Ecommerce Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fast Loading</h3>
              <p className="text-gray-600">Optimized for speed to reduce bounce rates and improve user experience.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Secure Payments</h3>
              <p className="text-gray-600">SSL encryption and PCI compliance ensure safe transactions for your customers.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Scalable Growth</h3>
              <p className="text-gray-600">Built to handle increased traffic and sales as your business grows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Selling Online?
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Join thousands of businesses already selling online with our ecommerce solutions. 
            Get started today and watch your sales grow.
          </p>
        </div>
      </section>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default Ecommerce;
