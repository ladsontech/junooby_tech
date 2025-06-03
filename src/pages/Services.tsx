
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';
import WhatsAppButton from '@/components/WhatsAppButton';

const Services = () => {
  const handleGetQuote = (serviceName: string) => {
    const phoneNumber = '+256789572007';
    const message = `Hello! I would like to get a quote for ${serviceName}.`;
    const url = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js",
      features: ["Responsive Design", "E-commerce Solutions", "CMS Integration", "Performance Optimization"],
      price: "Starting at UGX 350,000",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Mobile App Design",
      description: "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter",
      features: ["Cross-Platform Development", "UI/UX Design", "App Store Optimization", "Maintenance & Support"],
      price: "Starting at UGX 500,000",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "SEO Optimization",
      description: "Comprehensive search engine optimization to boost your online visibility and organic traffic",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Analytics & Reporting"],
      price: "Starting at UGX 150,000/month",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Social Media Management",
      description: "Complete social media strategy, content creation, and community management across all platforms",
      features: ["Content Strategy", "Daily Posting", "Community Management", "Analytics & Reports"],
      price: "Starting at UGX 200,000/month",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Digital Marketing",
      description: "Data-driven marketing campaigns including PPC, email marketing, and conversion optimization",
      features: ["PPC Campaigns", "Email Marketing", "Conversion Optimization", "Marketing Automation"],
      price: "Starting at UGX 300,000/month",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "CCTV Installation",
      description: "Professional security camera systems installation and maintenance for homes and businesses",
      features: ["Site Assessment", "Professional Installation", "Mobile App Access", "24/7 Support"],
      price: "Starting at UGX 250,000",
      gradient: "from-gray-600 to-gray-800"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-16 md:pt-20 lg:pt-24 pb-8 md:pb-16 lg:pb-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-6">Our Services</h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to transform your business and drive growth in the digital age
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className={`w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center text-lg md:text-xl lg:text-2xl mb-3 md:mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  📊
                </div>
                
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 md:mb-3 lg:mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-3 md:mb-4 lg:mb-6 text-sm md:text-base leading-relaxed">{service.description}</p>
                
                <div className="mb-4 md:mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">What's Included:</h4>
                  <ul className="space-y-1 md:space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600 text-sm md:text-base">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 md:mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 md:gap-4">
                  <span className="text-lg md:text-xl lg:text-2xl font-bold text-blue-600">{service.price}</span>
                  <button 
                    onClick={() => handleGetQuote(service.title)}
                    className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm md:text-base"
                  >
                    Get Quote
                  </button>
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

export default Services;
