
import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and e-commerce solutions built with modern technologies",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Secure"],
      icon: "💻",
      bgColor: "bg-blue-600"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: ["User-Friendly", "Cross-Platform", "Performance", "App Store Ready"],
      icon: "📱",
      bgColor: "bg-purple-600"
    },
    {
      title: "CCTV Installation",
      description: "Professional security camera systems for homes and businesses",
      features: ["HD Quality", "Night Vision", "Remote Access", "24/7 Monitoring"],
      icon: "📹",
      bgColor: "bg-green-600"
    },
    {
      title: "Digital Marketing",
      description: "Boost your online presence with SEO, social media, and content strategies.",
      features: ["SEO Strategy", "Social Media", "Content Creation", "Performance Reports"],
      icon: "📈",
      bgColor: "bg-indigo-600"
    }
  ];

  return (
    <section className="py-8 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-6">Our Services</h2>
          <p className="text-base md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive digital solutions to transform your business and drive growth
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12 lg:mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl lg:rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col"
            >
              <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center text-2xl mb-4 flex-shrink-0`}>
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-sm md:text-base flex-grow">{service.description}</p>
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-gray-700 text-sm md:text-base">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/services"
            className="inline-block bg-blue-600 text-white px-8 md:px-12 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
