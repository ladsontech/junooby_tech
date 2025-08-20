
import React from 'react';

const LocationServices = () => {
  const valueProps = [
    {
      title: "Why You Need a Website",
      description: "Your digital storefront works 24/7, reaching customers even when you sleep",
      benefits: ["24/7 Online Presence", "Global Reach", "Brand Credibility", "Customer Trust"],
      icon: "🌐",
      bgColor: "bg-primary"
    },
    {
      title: "Why Optimize Your Website", 
      description: "A fast, SEO-optimized website brings more customers and higher conversions",
      benefits: ["Higher Google Rankings", "Faster Loading Speed", "Better User Experience", "More Sales"],
      icon: "⚡",
      bgColor: "bg-primary"
    },
    {
      title: "Why Mobile Apps Matter",
      description: "Direct access to your customers' pockets with push notifications and loyalty features",
      benefits: ["Direct Customer Access", "Push Notifications", "Offline Functionality", "Brand Loyalty"],
      icon: "📱",
      bgColor: "bg-primary"
    },
    {
      title: "Why Choose Solar Energy",
      description: "Cut electricity costs by 80% while contributing to a sustainable future",
      benefits: ["80% Cost Reduction", "Eco-Friendly Energy", "Increased Property Value", "Government Incentives"],
      icon: "☀️",
      bgColor: "bg-primary"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
            Why Choose Digital Solutions for Your Business?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform your business with proven digital strategies that drive growth, increase efficiency, 
            and help you stay ahead of the competition in today's digital marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-6 md:gap-8">
          {valueProps.map((prop, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border h-full flex flex-col animate-neon-pulse"
            >
              <div className={`w-12 h-12 ${prop.bgColor} rounded-lg flex items-center justify-center text-2xl mb-4 flex-shrink-0 animate-glow`}>
                {prop.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                {prop.title}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm md:text-base flex-grow">
                {prop.description}
              </p>
              <div className="space-y-2">
                {prop.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center text-muted-foreground text-sm md:text-base">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 lg:mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-6 md:p-8 shadow-lg border border-border max-w-4xl mx-auto animate-neon-pulse">
            <h3 className="text-xl md:text-2xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-primary-foreground/90 leading-relaxed text-sm md:text-base lg:text-lg">
              Join hundreds of Ugandan businesses that have already transformed their operations with our 
              <strong> web development</strong>, <strong>mobile app development</strong>, 
              <strong>CCTV security systems</strong>, and <strong>solar energy solutions</strong>. 
              Get started today and see the difference professional digital solutions can make.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationServices;
