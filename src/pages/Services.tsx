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
    title: "Basic Website Development",
    description: "Perfect starter websites for small businesses, personal portfolios, and simple online presence with essential features and modern design",
    features: ["Up to 5 responsive pages (Home, About, Services, Contact, Gallery)", "Mobile-first responsive design", "Contact form with email integration", "Google Maps integration", "Basic SEO optimization", "Social media integration", "Fast loading optimization", "SSL certificate setup", "2 rounds of revisions", "1 month free maintenance"],
    price: "Starting at UGX 350,000",
    bgColor: "bg-blue-500",
    deliveryTime: "5-7 business days"
  }, {
    title: "Advanced Website Development",
    description: "Feature-rich websites with custom functionality, content management systems, and advanced integrations for growing businesses",
    features: ["Up to 15 custom pages with dynamic content", "Custom Content Management System (CMS)", "Advanced contact forms with file uploads", "Blog/News section with commenting system", "User registration and login system", "Payment gateway integration (Mobile Money, Cards)", "Advanced SEO with schema markup", "Analytics and reporting dashboard", "Email newsletter integration", "Social media automation", "Advanced security features", "Database design and optimization", "API integrations (WhatsApp, SMS, etc.)", "3 months free maintenance", "Training on content management"],
    price: "Starting at UGX 800,000",
    bgColor: "bg-purple-600",
    deliveryTime: "10-14 business days"
  }, {
    title: "E-commerce Website Development",
    description: "Complete online store solutions with inventory management, payment processing, and customer management systems",
    features: ["Unlimited product listings with categories", "Shopping cart and checkout system", "Multiple payment gateways (Mobile Money, Visa, MasterCard)", "Inventory management system", "Order tracking and management", "Customer account creation and management", "Wishlist and favorites functionality", "Product reviews and ratings", "Discount codes and promotions system", "Email order confirmations", "Sales analytics and reporting", "Multi-currency support", "Shipping calculator integration", "SEO optimized product pages", "Mobile app-like experience (PWA)", "6 months free maintenance", "Staff training included"],
    price: "Starting at UGX 1,200,000",
    bgColor: "bg-emerald-600",
    deliveryTime: "15-21 business days"
  }, {
    title: "Web Hosting Services",
    description: "Reliable, fast, and secure web hosting solutions with 99.9% uptime guarantee and 24/7 technical support",
    features: ["99.9% uptime guarantee with SLA", "Free SSL certificates for all domains", "Daily automated backups", "DDoS protection and security monitoring", "Email hosting with professional addresses", "One-click WordPress installation", "Website builder tools included", "24/7 technical support", "Control panel access (cPanel)", "Database management (MySQL/PostgreSQL)", "File manager and FTP access", "Domain registration assistance", "Website migration service", "Performance monitoring and optimization", "Multiple data center locations"],
    price: "Starting at UGX 50,000/month",
    bgColor: "bg-orange-500",
    deliveryTime: "Instant activation"
  }, {
    title: "Mobile App Design",
    description: "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter with modern UI/UX design",
    features: ["Cross-platform development (iOS & Android)", "Modern UI/UX design with user research", "Push notifications system", "User authentication and profiles", "Offline functionality", "In-app purchases integration", "Social media integration", "Analytics and crash reporting", "App store optimization (ASO)", "Beta testing and deployment", "App store submission assistance", "Post-launch support and updates", "Performance optimization", "Security implementation", "API integration and backend connectivity"],
    price: "Starting at UGX 1,500,000",
    bgColor: "bg-pink-500",
    deliveryTime: "20-30 business days"
  }, {
    title: "SEO Optimization",
    description: "Comprehensive search engine optimization to boost your online visibility, organic traffic, and search rankings with proven strategies",
    features: ["Complete website SEO audit", "Keyword research and analysis", "On-page optimization (meta tags, content)", "Technical SEO (site speed, mobile optimization)", "Local SEO optimization", "Google My Business setup and optimization", "Content strategy and creation", "Link building campaigns", "Competitor analysis", "Monthly performance reports", "Google Analytics and Search Console setup", "Schema markup implementation", "Website structure optimization", "Image and video optimization", "Social signals optimization"],
    price: "Starting at UGX 200,000/month",
    bgColor: "bg-emerald-500",
    deliveryTime: "Ongoing service"
  }, {
    title: "Social Media Management",
    description: "Complete social media strategy, content creation, and community management across all platforms to build your brand presence",
    features: ["Social media strategy development", "Daily content creation and posting", "Platform management (Facebook, Instagram, Twitter, LinkedIn)", "Community management and engagement", "Social media advertising campaigns", "Influencer collaboration management", "Brand voice and tone development", "Visual content creation (graphics, videos)", "Hashtag research and optimization", "Monthly analytics and performance reports", "Crisis management and reputation monitoring", "Social media contest and giveaway management", "User-generated content campaigns", "Cross-platform content adaptation", "Social listening and trend analysis"],
    price: "Starting at UGX 300,000/month",
    bgColor: "bg-rose-500",
    deliveryTime: "Ongoing service"
  }, {
    title: "Digital Marketing",
    description: "Data-driven marketing campaigns including PPC, email marketing, conversion optimization, and comprehensive digital strategies",
    features: ["Digital marketing strategy development", "Google Ads and Facebook Ads management", "Email marketing automation", "Conversion rate optimization (CRO)", "Marketing funnel development", "Lead generation campaigns", "Retargeting and remarketing campaigns", "A/B testing and optimization", "Landing page creation and optimization", "Marketing automation setup", "Customer journey mapping", "ROI tracking and attribution modeling", "Comprehensive analytics and reporting", "Market research and competitor analysis", "Brand positioning and messaging"],
    price: "Starting at UGX 400,000/month",
    bgColor: "bg-indigo-500",
    deliveryTime: "Ongoing service"
  }, {
    title: "CCTV Installation",
    description: "Professional security camera systems installation and maintenance for homes and businesses with remote monitoring capabilities",
    features: ["Free site assessment and consultation", "HD/4K camera installation", "Night vision and motion detection", "Remote viewing via mobile app", "Cloud storage and local backup options", "Professional cable management", "Weatherproof outdoor cameras", "Indoor and outdoor camera options", "Motion alerts and notifications", "24/7 monitoring services available", "Integration with existing security systems", "Regular maintenance and updates", "Technical support and training", "Warranty on equipment and installation", "Expandable system design"],
    price: "Starting at UGX 400,000",
    bgColor: "bg-gray-700",
    deliveryTime: "2-3 business days"
  }];
  return <div className="min-h-screen">
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
            {services.map((service, index) => <div key={index} className="bg-white rounded-xl p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className={`w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 ${service.bgColor} rounded-xl flex items-center justify-center text-lg md:text-xl lg:text-2xl mb-3 md:mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300 text-white`}>
                  📊
                </div>
                
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 md:mb-3 lg:mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-3 md:mb-4 lg:mb-6 text-sm md:text-base leading-relaxed">{service.description}</p>
                
                <div className="mb-4 md:mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">What's Included:</h4>
                  <div className="space-y-1 md:space-y-2">
                    {service.features.map((feature, idx) => <div key={idx} className="flex items-start text-gray-600 text-sm md:text-base">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 md:mr-3 flex-shrink-0 mt-2"></span>
                        <span className="leading-relaxed">{feature}</span>
                      </div>)}
                  </div>
                </div>
                
                {service.deliveryTime && <div className="mb-3 md:mb-4">
                    <span className="text-sm md:text-base text-gray-500">
                      <strong>Delivery Time:</strong> {service.deliveryTime}
                    </span>
                  </div>}
                
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 md:gap-4">
                  <span className="text-lg md:text-xl font-bold text-blue-600 lg:text-base">{service.price}</span>
                  <button onClick={() => handleGetQuote(service.title)} className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 md:py-3 rounded-lg font-medium hover:bg-blue-700 hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm md:text-base md:px-[24px]">
                    Get Quote
                  </button>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      
      <Footer />
      <BottomNav />
    </div>;
};
export default Services;