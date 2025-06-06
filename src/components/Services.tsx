
import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom responsive websites, e-commerce platforms, and web applications built with modern technologies. From basic business websites to complex web systems.",
      icon: "🌐",
      bgColor: "bg-blue-500",
      features: ["Responsive Design", "E-commerce", "CMS Integration", "SEO Optimized"],
      pricing: "From UGX 350,000"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter with modern UI/UX design and backend integration.",
      icon: "📱",
      bgColor: "bg-purple-500",
      features: ["iOS & Android", "Cross-platform", "Push Notifications", "App Store Publishing"],
      pricing: "From UGX 1,500,000"
    },
    {
      title: "CCTV Installation & Security",
      description: "Professional security camera systems installation with HD/4K cameras, night vision, remote monitoring, and 24/7 surveillance for homes and businesses.",
      icon: "📹",
      bgColor: "bg-gray-700",
      features: ["HD/4K Cameras", "Remote Monitoring", "Night Vision", "Professional Installation"],
      pricing: "From UGX 400,000"
    },
    {
      title: "Solar Systems Installation",
      description: "Complete solar energy solutions including solar panels, inverters, batteries, and installation services for residential and commercial properties.",
      icon: "☀️",
      bgColor: "bg-orange-500",
      features: ["Solar Panels", "Battery Systems", "Grid-tie Systems", "Maintenance"],
      pricing: "From UGX 2,000,000"
    },
    {
      title: "Digital Marketing & SEO",
      description: "Comprehensive digital marketing strategies including SEO optimization, social media management, Google Ads, and content marketing to boost your online presence.",
      icon: "🎯",
      bgColor: "bg-indigo-500",
      features: ["SEO Optimization", "Social Media", "Google Ads", "Content Marketing"],
      pricing: "From UGX 200,000/month"
    },
    {
      title: "Web Hosting & Domains",
      description: "Reliable web hosting services with 99.9% uptime, SSL certificates, email hosting, and domain registration with 24/7 technical support.",
      icon: "🔗",
      bgColor: "bg-emerald-500",
      features: ["99.9% Uptime", "SSL Certificates", "Email Hosting", "24/7 Support"],
      pricing: "From UGX 50,000/month"
    }
  ];

  const handleGetQuote = (serviceName: string) => {
    const phoneNumber = '+256789572007';
    const message = `Hello! I would like to get a quote for ${serviceName}.`;
    const url = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Our Premium Tech Services
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to transform businesses across Uganda and East Africa. 
            From web development to security systems, we deliver excellence at every step.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-12 md:mb-16 lg:mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group h-full flex flex-col"
            >
              <div className={`w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 ${service.bgColor} rounded-2xl lg:rounded-3xl flex items-center justify-center text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6 lg:mb-8 group-hover:scale-110 transition-transform duration-300 text-white flex-shrink-0`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4 lg:mb-6">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm md:text-base lg:text-lg mb-4 md:mb-6 lg:mb-8 flex-grow">
                {service.description}
              </p>
              
              <div className="mb-4 md:mb-6 lg:mb-8">
                <h4 className="font-semibold text-gray-900 mb-3 text-sm md:text-base lg:text-lg">Key Features:</h4>
                <div className="grid grid-cols-1 gap-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-600 text-sm md:text-base lg:text-lg">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 md:gap-4 lg:gap-6 pt-4 border-t border-gray-100 mt-auto">
                <span className="text-lg md:text-xl lg:text-2xl font-bold text-blue-600">
                  {service.pricing}
                </span>
                <button 
                  onClick={() => handleGetQuote(service.title)}
                  className="w-full sm:w-auto bg-blue-600 text-white px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 rounded-lg lg:rounded-xl font-medium hover:bg-blue-700 hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm md:text-base lg:text-lg"
                >
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            to="/services"
            className="inline-block bg-blue-600 text-white px-8 md:px-12 lg:px-16 py-4 md:py-5 lg:py-6 rounded-xl lg:rounded-2xl font-bold text-lg md:text-xl lg:text-2xl hover:bg-blue-700 hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            View All Services & Pricing
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
