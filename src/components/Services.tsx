
import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      icon: "🌐",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Mobile App Design",
      description: "Native and cross-platform mobile applications for iOS and Android",
      icon: "📱",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "SEO Optimization",
      description: "Boost your online visibility with expert search engine optimization",
      icon: "🔍",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Social Media Management",
      description: "Comprehensive social media strategy and content management",
      icon: "📊",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Digital Marketing",
      description: "Data-driven marketing campaigns to grow your business online",
      icon: "🎯",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "CCTV Installation",
      description: "Professional security camera systems for homes and businesses",
      icon: "📹",
      gradient: "from-gray-600 to-gray-800"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive technology solutions to help your business thrive in the digital age
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
            >
              <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-xl md:text-2xl mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
