import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Portfolio from '@/components/Portfolio';
import ScrollReveal from '@/components/animations/ScrollReveal';
import FloatingSphere from '@/components/3d/FloatingSphere';
import ParallaxSection from '@/components/animations/ParallaxSection';

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
      
      {/* Hero Section with 3D Elements */}
      <section className="min-h-screen bg-gradient-to-br from-background via-background to-card/10 relative overflow-hidden flex items-center pt-16">
        {/* 3D Floating Spheres */}
        <FloatingSphere className="absolute top-32 left-[10%] hidden lg:block" size="md" delay={0} />
        <FloatingSphere className="absolute bottom-40 right-[15%] hidden lg:block" size="sm" delay={1.5} />
        
        {/* Animated morphing backgrounds */}
        <ParallaxSection speed={0.3}>
          <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-primary/15 to-accent/15 rounded-full blur-3xl animate-morph" />
        </ParallaxSection>
        <ParallaxSection speed={0.5}>
          <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-accent/15 to-primary/15 rounded-full blur-3xl animate-morph" style={{ animationDelay: '4s' }} />
        </ParallaxSection>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <ScrollReveal className="text-center">
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
              <button 
                onClick={() => {
                  const message = 'Hello! I am interested in starting a web development project. Can you provide more information?';
                  const url = `https://wa.me/256789572007?text=${encodeURIComponent(message)}`;
                  window.open(url, '_blank');
                }}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Start Your Project
              </button>
              
              <button className="border border-border bg-card text-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:border-primary/50">
                View Portfolio
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Web Development Services */}
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <ParallaxSection speed={0.2}>
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
        </ParallaxSection>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Web Development Services
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              From corporate websites to organization portals, we create digital experiences 
              that represent your brand and achieve your goals.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webServices.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up">
                <div className="bg-card border border-border rounded-2xl p-8 transition-all duration-500 hover:shadow-lg hover-lift hover:border-primary/30">
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ecommerce Services */}
      <section className="py-16 md:py-24 bg-card/10 relative overflow-hidden">
        <ParallaxSection speed={0.2}>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" />
        </ParallaxSection>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ecommerce Development Services
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              From simple online stores to complex marketplace platforms, we build 
              ecommerce solutions that scale with your business.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ecommerceServices.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up">
                <div className="bg-card border border-border rounded-2xl p-8 transition-all duration-500 hover:shadow-lg hover-lift hover:border-primary/30">
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Portfolio 
        filter="web"
        title="Our Web Development Portfolio"
        description="See the amazing websites and web applications we've built for our clients across Uganda."
      />

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