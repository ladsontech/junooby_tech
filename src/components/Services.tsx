
import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and e-commerce solutions built with modern technologies for your business growth",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Secure", "E-commerce Ready", "CMS Integration"],
      icon: "💻",
      bgColor: "bg-primary",
      price: "From UGX 350K"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with modern UI/UX design",
      features: ["Cross-Platform", "Push Notifications", "Offline Mode", "App Store Ready", "Analytics", "Cloud Sync"],
      icon: "📱",
      bgColor: "bg-primary",
      price: "From UGX 1.5M"
    },
    {
      title: "CCTV Installation",
      description: "Professional security camera systems for homes and businesses with remote monitoring capabilities",
      features: ["HD Quality", "Night Vision", "Remote Access", "Motion Detection", "Cloud Storage", "24/7 Support"],
      icon: "📹",
      bgColor: "bg-primary",
      price: "From UGX 400K"
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive online marketing strategies to boost your brand visibility and drive sales",
      features: ["SEO Strategy", "Social Media", "Content Creation", "PPC Campaigns", "Email Marketing", "Analytics"],
      icon: "📈",
      bgColor: "bg-primary",
      price: "From UGX 200K/mo"
    },
    {
      title: "Web Hosting",
      description: "Reliable, fast, and secure web hosting solutions with 99.9% uptime guarantee",
      features: ["99.9% Uptime", "SSL Certificate", "Daily Backups", "24/7 Support", "cPanel Access", "One-Click Install"],
      icon: "☁️",
      bgColor: "bg-primary",
      price: "From UGX 50K/mo"
    },
    {
      title: "Solar Systems",
      description: "Eco-friendly solar energy solutions to reduce electricity costs and carbon footprint",
      features: ["80% Cost Reduction", "Eco-Friendly", "Property Value+", "Government Incentives", "25yr Warranty", "Monitoring"],
      icon: "☀️",
      bgColor: "bg-primary",
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
    <section className="py-8 md:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-6">Our Services</h2>
          <p className="text-base md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Comprehensive digital solutions to transform your business and drive growth
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12 lg:mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl lg:rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col group animate-neon-pulse"
            >
              <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center text-2xl mb-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 text-primary-foreground`}>
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm md:text-base flex-grow leading-relaxed">{service.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="grid grid-cols-2 gap-1">
                  {service.features.slice(0, 6).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-muted-foreground text-xs">
                className="space-card rounded-xl lg:rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 h-full flex flex-col group animate-neon-pulse"
                      <span className="truncate">{feature}</span>
                <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center text-2xl mb-4 flex-shrink-0 group-hover:scale-125 transition-transform duration-500 animate-glow text-primary-foreground glow-blue`}>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-auto">
                <div className="text-lg font-bold text-primary">{service.price}</div>
                <button 
                  onClick={() => handleGetQuote(service.title)}
                  className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 text-sm animate-neon-pulse"
                >
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 lg:p-12 text-foreground text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-primary">Why Choose Junooby?</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">🏆</div>
              <div className="font-semibold text-foreground">Local Expertise</div>
              <div className="text-sm text-muted-foreground">Global Standards</div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 text-glow">
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-semibold text-foreground">Fast Delivery</div>
              <div className="text-sm text-muted-foreground">Quick Turnaround</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">💰</div>
              <div className="font-semibold text-foreground">Competitive Pricing</div>
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0 glow-blue"></span>
            </div>
            <div className="space-card rounded-2xl p-6 md:p-8 shadow-lg max-w-4xl mx-auto animate-neon-pulse">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 text-glow">
              <div className="font-semibold text-foreground">24/7 Support</div>
              <div className="text-sm text-muted-foreground">Always Available</div>
            </div>
          </div>
                <strong className="text-primary text-glow"> web development</strong>, <strong className="text-primary text-glow">mobile app development</strong>, 
                <strong className="text-primary text-glow">CCTV security systems</strong>, and <strong className="text-primary text-glow">solar energy solutions</strong>. 
            className="inline-block bg-primary text-primary-foreground px-8 md:px-12 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105"
          >
            Explore Our Motors
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
