import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';

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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Enhanced Hero Section with Space Theme */}
      <section className="min-h-screen space-bg relative overflow-hidden flex items-center">
        {/* Animated background particles */}
        <div className="particles absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="particle animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse-glow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl animate-pulse-glow" style={{animationDelay: '2s'}}></div>

        {/* Tech grid overlay */}
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="text-center animate-slide-in-up">
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-pulse-glow">
                Web Solutions
              </span>
              <br />
              <span className="text-foreground/90 text-3xl md:text-5xl lg:text-6xl">
                for Companies & Organizations
              </span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light mb-12">
              Professional websites that drive business growth, enhance brand credibility, 
              and connect you with your audience across the digital universe.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-blue-400/30">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative">Start Your Project</span>
              </button>
              
              <button className="group relative overflow-hidden glass text-foreground px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 border border-border/50 hover:border-primary/50">
                <span className="relative">View Portfolio</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Web Development Services
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              From corporate websites to organization portals, we create digital experiences 
              that represent your brand and achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webServices.map((service, index) => (
              <div key={index} className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 animate-neon-pulse">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{service.description}</p>
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <div className="w-2 h-2 bg-primary rounded-full mr-4 group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300"></div>
                      <span className="text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Web Solutions */}
      <section className="py-20 bg-card/20 relative">
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
              Why Your Business Needs a Professional Website
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-8 glow-blue group-hover:scale-110 transition-all duration-300">
                <span className="text-white text-3xl">🌍</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">Global Reach</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">Reach customers worldwide, 24/7, expanding your business beyond geographical boundaries into the digital cosmos.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-8 glow-purple group-hover:scale-110 transition-all duration-300">
                <span className="text-white text-3xl">🏆</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">Brand Credibility</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">Establish trust and professionalism with a modern, well-designed website that reflects your brand's excellence.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-300" style={{boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)'}}>
                <span className="text-white text-3xl">💰</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">Cost-Effective Marketing</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">Your website works as a powerful marketing tool, generating leads and sales continuously across the digital landscape.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default Web;