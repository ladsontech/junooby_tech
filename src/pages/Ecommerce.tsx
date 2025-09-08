import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
const Ecommerce = () => {
  const ecommerceServices = [{
    title: "Online Stores",
    description: "Complete ecommerce websites with shopping cart and payment integration",
    features: ["Product Catalog", "Shopping Cart", "Payment Gateway", "Order Management"],
    icon: "🛒"
  }, {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile apps for iOS and Android",
    features: ["Push Notifications", "Offline Mode", "User Authentication", "In-App Purchases"],
    icon: "📱"
  }, {
    title: "Marketplace Integration",
    description: "Connect your store to popular marketplaces and platforms",
    features: ["Multi-Channel Selling", "Inventory Sync", "Order Consolidation", "Automated Listings"],
    icon: "🌐"
  }, {
    title: "Digital Payments",
    description: "Secure payment processing and financial management tools",
    features: ["Mobile Money", "Credit Cards", "Digital Wallets", "Fraud Protection"],
    icon: "💳"
  }];
  return <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Enhanced Hero Section with Space Theme */}
      <section className="min-h-screen space-bg relative overflow-hidden flex items-center py-12 md:py-20">
        {/* Nebula background effect */}
        <div className="nebula-bg"></div>
        
        {/* Galaxy spiral effect */}
        <div className="galaxy-spiral"></div>
        
        {/* Warp speed lines */}
        <div className="warp-lines">
          {[...Array(6)].map((_, i) => <div key={i} className="warp-line" style={{
          top: `${15 + i * 15}%`,
          animationDelay: `${i * 0.4}s`,
          animationDuration: `${2.5 + Math.random() * 1.5}s`
        }} />)}
        </div>

        {/* Animated background particles */}
        <div className="particles absolute inset-0">
          {[...Array(30)].map((_, i) => <div key={i} className="particle animate-float" style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 12}s`,
          animationDuration: `${8 + Math.random() * 8}s`
        }} />)}
        </div>

        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-48 h-48 bg-green-500/20 rounded-full blur-3xl animate-pulse-glow glow-green"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-500/20 rounded-full blur-2xl animate-pulse-glow" style={{
        animationDelay: '1s',
        boxShadow: '0 0 30px rgba(249, 115, 22, 0.4)'
      }}></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse-glow glow-purple" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-28 h-28 bg-blue-500/15 rounded-full blur-xl animate-pulse-glow glow-blue" style={{
        animationDelay: '3s'
      }}></div>

        {/* Tech grid overlay */}
        <div className="absolute inset-0 tech-grid opacity-15"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-20">
          <div className="text-center animate-slide-in-up">
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold mb-8 text-glow">
              <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-400 bg-clip-text animate-pulse-glow holographic text-gray-50">
                Ecommerce
              </span>
              <br />
              <span className="text-foreground/95 text-3xl md:text-5xl lg:text-6xl text-glow">
                That Drive Sales
              </span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light mb-12 text-glow">
              Complete ecommerce websites and mobile apps designed to maximize conversions, 
              streamline operations, and grow your online business across the digital marketplace.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative overflow-hidden bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl border border-green-400/30 animate-neon-pulse glow-green">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative">Launch Your Store</span>
              </button>
              
              <button className="group relative overflow-hidden glass text-foreground px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-500 hover:scale-110 border border-border/50 hover:border-primary/50 space-card">
                <span className="relative">See Success Stories</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent z-10"></div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-glow">
              Ecommerce Development Services
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-glow">
              From simple online stores to complex marketplace platforms, we build 
              ecommerce solutions that scale with your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ecommerceServices.map((service, index) => <div key={index} className="group space-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:border-primary/30 animate-neon-pulse">
                <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-500 glow-green">{service.icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-500 text-glow">{service.title}</h3>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{service.description}</p>
                <div className="space-y-3">
                  {service.features.map((feature, idx) => <div key={idx} className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      <div className="w-2 h-2 bg-primary rounded-full mr-4 group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-500 glow-green"></div>
                      <span className="text-base">{feature}</span>
                    </div>)}
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 bg-card/10 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-8"></div>
        <div className="nebula-bg opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 text-glow">
              Why Choose Our Ecommerce Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-8 glow-blue group-hover:scale-125 transition-all duration-500 animate-pulse-glow">
                <span className="text-white text-3xl">⚡</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-500 text-glow">Fast Loading</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">Optimized for speed to reduce bounce rates and improve user experience across all devices.</p>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-125 transition-all duration-500 glow-green animate-pulse-glow">
                <span className="text-white text-3xl">🔒</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-500 text-glow">Secure Payments</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">SSL encryption and PCI compliance ensure safe transactions for your customers worldwide.</p>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-8 glow-purple group-hover:scale-125 transition-all duration-500 animate-pulse-glow">
                <span className="text-white text-3xl">📈</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-500 text-glow">Scalable Growth</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">Built to handle increased traffic and sales as your business expands into new markets.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Ecommerce;