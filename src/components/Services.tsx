import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and e-commerce solutions built with modern technologies for your business growth",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Secure", "E-commerce Ready", "CMS Integration"],
      icon: "💻",
      bgColor: "bg-blue-600",
      price: "From UGX 350K"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with modern UI/UX design",
      features: ["Cross-Platform", "Push Notifications", "Offline Mode", "App Store Ready", "Analytics", "Cloud Sync"],
      icon: "📱",
      bgColor: "bg-purple-600",
      price: "From UGX 1.5M"
    },
    {
      title: "CCTV Installation",
      description: "Professional security camera systems for homes and businesses with remote monitoring capabilities",
      features: ["HD Quality", "Night Vision", "Remote Access", "Motion Detection", "Cloud Storage", "24/7 Support"],
      icon: "📹",
      bgColor: "bg-green-600",
      price: "From UGX 400K"
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive online marketing strategies to boost your brand visibility and drive sales",
      features: ["SEO Strategy", "Social Media", "Content Creation", "PPC Campaigns", "Email Marketing", "Analytics"],
      icon: "📈",
      bgColor: "bg-indigo-600",
      price: "From UGX 200K/mo"
    },
    {
      title: "Web Hosting",
      description: "Reliable, fast, and secure web hosting solutions with 99.9% uptime guarantee",
      features: ["99.9% Uptime", "SSL Certificate", "Daily Backups", "24/7 Support", "cPanel Access", "One-Click Install"],
      icon: "☁️",
      bgColor: "bg-orange-600",
      price: "From UGX 50K/mo"
    },
    {
      title: "Solar Systems",
      description: "Eco-friendly solar energy solutions to reduce electricity costs and carbon footprint",
      features: ["80% Cost Reduction", "Eco-Friendly", "Property Value+", "Government Incentives", "25yr Warranty", "Monitoring"],
      icon: "☀️",
      bgColor: "bg-yellow-600",
      price: "From UGX 2M"
    }
  ];

  const handleGetQuote = (serviceName: string) => {
    const phoneNumber = '+256789572007';
    const message = `Hello! I would like to get a quote for ${serviceName}.`;
    const url = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-8 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-6">Our Services</h2>
          <p className="text-base md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive digital solutions to transform your business and drive growth
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12 lg:mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl lg:rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col group"
            >
              <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center text-2xl mb-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-sm md:text-base flex-grow leading-relaxed">{service.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="grid grid-cols-2 gap-1">
                  {service.features.slice(0, 6).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700 text-xs">
                      <span className="w-1 h-1 bg-blue-600 rounded-full mr-2 flex-shrink-0"></span>
                      <span className="truncate">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-auto">
                <div className="text-lg font-bold text-blue-600">{service.price}</div>
                <button 
                  onClick={() => handleGetQuote(service.title)}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105 text-sm"
                >
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 md:p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Why Choose Junooby?</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">🏆</div>
              <div className="font-semibold">Local Expertise</div>
              <div className="text-sm opacity-90">Global Standards</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-semibold">Fast Delivery</div>
              <div className="text-sm opacity-90">Quick Turnaround</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">💰</div>
              <div className="font-semibold">Competitive Pricing</div>
              <div className="text-sm opacity-90">Best Value</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">🛠️</div>
              <div className="font-semibold">24/7 Support</div>
              <div className="text-sm opacity-90">Always Available</div>
            </div>
          </div>
          <Link 
            to="/motors"
            className="inline-block bg-white text-blue-600 px-8 md:px-12 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            Explore Our Motors
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;