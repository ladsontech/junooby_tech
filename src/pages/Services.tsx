import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';

const Services = () => {
  const handleGetQuote = (serviceName: string) => {
    const phoneNumber = '+256789572007';
    const message = `Hello! I would like to get a quote for ${serviceName}.`;
    const url = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const services = [{
    title: "Website Development",
    description: "From simple portfolios to complex e-commerce platforms, we build responsive, fast, and secure websites tailored to your needs.",
    features: ["Custom & Responsive Design", "E-commerce Functionality", "Content Management System (CMS)", "SEO & Performance Optimized", "Payment Gateway Integration", "Post-launch Maintenance"],
    price: "Starting at UGX 350,000",
    bgColor: "bg-blue-500",
    deliveryTime: "Varies by project scope",
    icon: '💻'
  }, {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps for iOS and Android with modern UI/UX, push notifications, and offline capabilities.",
    features: ["iOS & Android (Cross-platform)", "Modern UI/UX Design", "Push Notifications & Offline Mode", "App Store Submission Assistance", "Analytics & Crash Reporting", "Post-launch Support"],
    price: "Starting at UGX 1,500,000",
    bgColor: "bg-pink-500",
    deliveryTime: "Varies by project scope",
    icon: '📱'
  }, {
    title: "Digital Marketing & SEO",
    description: "Boost your online presence with our comprehensive digital marketing, social media management, and SEO services.",
    features: ["SEO Audits & Strategy", "Social Media Management", "Content Creation & Marketing", "Paid Advertising (PPC)", "Email Marketing Campaigns", "Monthly Performance Reports"],
    price: "Starting at UGX 200,000/month",
    bgColor: "bg-indigo-500",
    deliveryTime: "Ongoing service",
    icon: '📈'
  }, {
    title: "CCTV & Security Systems",
    description: "Professional installation of high-definition security camera systems for homes and businesses, with remote monitoring.",
    features: ["HD & 4K Camera Installation", "Remote Viewing on Mobile", "Night Vision & Motion Detection", "Cloud & Local Storage", "Weatherproof Cameras", "Maintenance & Support"],
    price: "Starting at UGX 400,000",
    bgColor: "bg-gray-700",
    deliveryTime: "2-3 business days",
    icon: '📹'
  }, {
    title: "Web Hosting",
    description: "Reliable, fast, and secure web hosting solutions with 99.9% uptime and 24/7 technical support.",
    features: ["99.9% Uptime Guarantee", "Free SSL Certificate", "Daily Automated Backups", "24/7 Technical Support", "cPanel Access", "One-click Installer (WordPress, etc.)"],
    price: "Starting at UGX 50,000/month",
    bgColor: "bg-orange-500",
    deliveryTime: "Instant activation",
    icon: '☁️'
  }];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-16 md:pt-20 lg:pt-24 pb-8 md:pb-16 lg:pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-6">Our Services</h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to transform your business and drive growth in the digital age
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className={`w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 ${service.bgColor} rounded-xl flex items-center justify-center text-lg md:text-xl lg:text-2xl mb-3 md:mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300 text-white`}>
                  {service.icon}
                </div>
                
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 md:mb-3 lg:mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-3 md:mb-4 lg:mb-6 text-sm md:text-base leading-relaxed">{service.description}</p>
                
                <div className="mb-4 md:mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">What's Included:</h4>
                  <div className="space-y-1 md:space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start text-gray-600 text-sm md:text-base">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 md:mr-3 flex-shrink-0 mt-2"></span>
                        <span className="leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {service.deliveryTime && (
                  <div className="mb-3 md:mb-4">
                    <span className="text-sm md:text-base text-gray-500">
                      <strong>Delivery Time:</strong> {service.deliveryTime}
                    </span>
                  </div>
                )}
                
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3 md:gap-4">
                  <span className="text-lg md:text-xl lg:text-2xl font-bold text-blue-600 order-2 lg:order-1">{service.price}</span>
                  <button 
                    onClick={() => handleGetQuote(service.title)} 
                    className="w-full lg:w-auto bg-blue-600 text-white px-6 py-3 lg:px-8 lg:py-3 rounded-lg font-medium hover:bg-blue-700 hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm md:text-base order-1 lg:order-2 min-w-[140px]"
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
    </div>
  );
};

export default Services;
