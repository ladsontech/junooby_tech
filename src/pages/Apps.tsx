import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Portfolio from '@/components/Portfolio';
import ScrollReveal from '@/components/animations/ScrollReveal';
import FloatingCube from '@/components/3d/FloatingCube';
import ParallaxSection from '@/components/animations/ParallaxSection';
const Apps = () => {
  const appServices = [{
    title: "iOS Apps",
    description: "Native iOS applications for iPhone and iPad users",
    features: ["Swift Development", "App Store Optimization", "Push Notifications", "In-App Purchases"],
    icon: "📱"
  }, {
    title: "Android Apps",
    description: "Native Android applications for Google Play Store",
    features: ["Kotlin/Java Development", "Google Play Console", "Material Design", "Firebase Integration"],
    icon: "🤖"
  }, {
    title: "Cross-Platform Apps",
    description: "Build once, deploy everywhere with React Native or Flutter",
    features: ["React Native", "Flutter", "Shared Codebase", "Platform-Specific Features"],
    icon: "🔄"
  }, {
    title: "Progressive Web Apps",
    description: "Web applications that work like native mobile apps",
    features: ["Offline Functionality", "Push Notifications", "App-like Experience", "Cross-Platform"],
    icon: "🌐"
  }];
  return <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Enhanced Hero Section with Space Theme */}
      <section className="min-h-screen space-bg relative overflow-hidden flex items-center py-12 md:py-20">
        {/* 3D Floating Cube */}
        <FloatingCube />
        
        {/* Animated morphing shapes */}
        <ParallaxSection speed={0.4}>
          <div className="absolute top-32 left-10 w-72 h-72 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-morph" />
        </ParallaxSection>
        <ParallaxSection speed={0.6}>
          <div className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-morph" style={{ animationDelay: '3s' }} />
        </ParallaxSection>
        
        {/* Warp speed lines - reduced on mobile */}
        <div className="warp-lines">
          {[...Array(6)].map((_, i) => <div key={i} className="warp-line hidden md:block" style={{
          top: `${15 + i * 15}%`,
          animationDelay: `${i * 0.4}s`,
          animationDuration: `${2.5 + Math.random() * 1.5}s`
        }} />)}
        </div>

        {/* Animated background particles - fewer on mobile */}
        <div className="particles absolute inset-0">
          {[...Array(30)].map((_, i) => <div key={i} className={`particle animate-float ${i > 9 ? 'hidden md:block' : ''}`} style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 12}s`,
          animationDuration: `${8 + Math.random() * 8}s`
        }} />)}
        </div>

        {/* Floating orbs - no blur on mobile */}
        <div className="absolute top-20 right-10 w-48 h-48 bg-purple-500/20 rounded-full md:blur-3xl animate-pulse-glow glow-purple"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-blue-500/20 rounded-full md:blur-2xl animate-pulse-glow glow-blue" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-cyan-500/20 rounded-full md:blur-2xl animate-pulse-glow hidden md:block" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-28 h-28 bg-pink-500/15 rounded-full md:blur-xl animate-pulse-glow hidden md:block" style={{
        animationDelay: '3s'
      }}></div>

        {/* Tech grid overlay */}
        <div className="absolute inset-0 tech-grid opacity-15"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-20">
          <ScrollReveal className="text-center">
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold mb-8 text-glow">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text animate-pulse-glow holographic text-gray-50">
                Mobile Apps
              </span>
              <br />
              <span className="text-foreground/95 text-3xl md:text-5xl lg:text-6xl text-glow">
                For Every Platform
              </span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light mb-12 text-glow">
              Create powerful mobile applications that engage users, increase productivity, 
              and drive business growth across iOS, Android, and web platforms.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => {
                  const message = 'Hello! I am interested in building a mobile app. Can you help me get started?';
                  const url = `https://wa.me/256789572007?text=${encodeURIComponent(message)}`;
                  window.open(url, '_blank');
                }}
                className="group relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl border border-purple-400/30 animate-neon-pulse glow-purple"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative">Build Your App</span>
              </button>
              
              <button className="group relative overflow-hidden glass text-foreground px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-500 hover:scale-110 border border-border/50 hover:border-primary/50 space-card">
                <span className="relative">View Examples</span>
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent z-10"></div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20 bg-background relative overflow-hidden">
        <ParallaxSection speed={0.2}>
          <div className="absolute inset-0 tech-grid opacity-5" />
        </ParallaxSection>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-glow">
              Mobile App Development Services
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-glow">
              From native iOS and Android apps to cross-platform solutions, we create 
              mobile experiences that users love and businesses rely on.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {appServices.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up">
                <div className="group space-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift">
                <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-500 glow-purple">{service.icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-500 text-glow">{service.title}</h3>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{service.description}</p>
                <div className="space-y-3">
                  {service.features.map((feature, idx) => <div key={idx} className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      <div className="w-2 h-2 bg-primary rounded-full mr-4 group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-500 glow-purple"></div>
                      <span className="text-base">{feature}</span>
                    </div>)}
                </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Portfolio 
        filter="app"
        title="Our Mobile App Portfolio"
        description="Explore the innovative mobile applications we've developed for businesses across various industries."
      />

      {/* Features Section */}
      <section className="py-12 md:py-20 bg-card/10 relative overflow-hidden">
        <ParallaxSection speed={0.2}>
          <div className="absolute inset-0 tech-grid opacity-8" />
        </ParallaxSection>
        <div className="nebula-bg opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 text-glow">
              Why Choose Our Mobile App Development
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ScrollReveal delay={0} direction="up">
              <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-8 glow-blue group-hover:scale-125 transition-all duration-500 animate-pulse-glow">
                <span className="text-white text-3xl">⚡</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-500 text-glow">High Performance</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">Optimized for speed and efficiency with smooth animations and lightning-fast loading times.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1} direction="up">
              <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-8 glow-purple group-hover:scale-125 transition-all duration-500 animate-pulse-glow">
                <span className="text-white text-3xl">🎨</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-500 text-glow">Beautiful Design</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">Intuitive and attractive user interfaces that follow platform-specific design guidelines and modern aesthetics.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} direction="up">
              <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-125 transition-all duration-500 glow-green animate-pulse-glow">
                <span className="text-white text-3xl">🔒</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-500 text-glow">Secure & Reliable</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">Built with security best practices and thorough testing for reliable performance across all devices.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Apps;