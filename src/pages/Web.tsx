import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Web = () => {
  const webServices = [
    {
      title: "Corporate Websites",
      description: "Professional websites that represent your company's brand and values",
      features: ["Custom Design", "Responsive Layout", "SEO Optimized", "Content Management"],
      icon: "🏢"
    },
    {
      title: "Organization Websites",
      description: "Websites for NGOs, nonprofits, and community organizations",
      features: ["Donation Integration", "Event Management", "Member Portal", "Newsletter Signup"],
      icon: "🏛️"
    },
    {
      title: "Portfolio Websites",
      description: "Showcase your work and professional achievements",
      features: ["Gallery Display", "Contact Forms", "Social Integration", "Mobile Optimized"],
      icon: "💼"
    },
    {
      title: "Landing Pages",
      description: "High-converting pages for marketing campaigns",
      features: ["Lead Generation", "A/B Testing", "Analytics Integration", "Fast Loading"],
      icon: "🎯"
    }
  ];

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
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Simplified Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-background via-background to-card/10 relative overflow-hidden flex items-center pt-16">
        {/* Minimal background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-muted/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Web Solutions
              </span>
              <br />
              <span className="text-foreground text-3xl md:text-4xl lg:text-5xl">
                & Ecommerce Development
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light mb-12">
              Professional websites, online stores, and mobile apps designed to drive business growth, 
              enhance brand credibility, and maximize conversions across the digital landscape.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Start Your Project
              </button>
              
              <button className="border border-border bg-card text-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:border-primary/50">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Web Development Services */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Web Development Services
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              From corporate websites to organization portals, we create digital experiences 
              that represent your brand and achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webServices.map((service, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecommerce Services */}
      <section className="py-16 md:py-24 bg-card/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ecommerce Development Services
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              From simple online stores to complex marketplace platforms, we build 
              ecommerce solutions that scale with your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ecommerceServices.map((service, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Solutions */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Why Choose Our Web & Ecommerce Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110">
                <span className="text-white text-2xl">🌍</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Global Reach</h3>
              <p className="text-muted-foreground leading-relaxed">
                Reach customers worldwide, 24/7, expanding your business beyond geographical boundaries.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110">
                <span className="text-white text-2xl">🏆</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Brand Credibility</h3>
              <p className="text-muted-foreground leading-relaxed">
                Establish trust and professionalism with modern, well-designed digital experiences.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110">
                <span className="text-white text-2xl">💰</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Cost-Effective Growth</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your website works as a powerful marketing tool, generating leads and sales continuously.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Web;