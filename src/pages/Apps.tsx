import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Portfolio from '@/components/Portfolio';
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
      <section className="min-h-[70vh] md:min-h-screen space-bg relative overflow-hidden flex items-center py-8 md:py-20">
        {/* Nebula background effect - hidden on mobile */}
        <div className="nebula-bg hidden lg:block opacity-30"></div>
        
        {/* Galaxy spiral effect - hidden on mobile */}
        <div className="galaxy-spiral hidden lg:block opacity-20"></div>
        
        {/* Warp speed lines - minimal on mobile */}
        <div className="warp-lines hidden md:block">
          {[...Array(3)].map((_, i) => <div key={i} className="warp-line opacity-30" style={{
          top: `${20 + i * 30}%`,
          animationDelay: `${i * 0.5}s`,
          animationDuration: `3s`
        }} />)}
        </div>

        {/* Animated background particles - very few on mobile */}
        <div className="particles absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => <div key={i} className={`particle animate-float ${i > 4 ? 'hidden md:block' : ''}`} style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 8}s`,
          animationDuration: `${12 + Math.random() * 4}s`
        }} />)}
        </div>

        {/* Floating orbs - compact on mobile */}
        <div className="absolute top-10 md:top-20 right-5 md:right-10 w-24 h-24 md:w-48 md:h-48 bg-purple-500/10 md:bg-purple-500/20 rounded-full md:blur-3xl opacity-50 md:opacity-100"></div>
        <div className="absolute bottom-10 md:bottom-20 left-5 md:left-10 w-20 h-20 md:w-40 md:h-40 bg-blue-500/10 md:bg-blue-500/20 rounded-full md:blur-2xl opacity-50 md:opacity-100"></div>

        {/* Tech grid overlay */}
        <div className="absolute inset-0 tech-grid opacity-5 md:opacity-15"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-12 md:py-20">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-8">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">
                Mobile Apps
              </span>
              <br />
              <span className="text-foreground/95 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                For Every Platform
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light mb-6 md:mb-12">
              Create powerful mobile applications that engage users, increase productivity, 
              and drive business growth across iOS, Android, and web platforms.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button onClick={() => {
              const message = 'Hello! I am interested in building a mobile app. Can you help me get started?';
              const url = `https://wa.me/256789572007?text=${encodeURIComponent(message)}`;
              window.open(url, '_blank');
            }} className="group relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white px-6 py-3 md:px-10 md:py-5 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 active:scale-95 md:hover:scale-105 shadow-lg border border-purple-400/30">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative">Build Your App</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 md:h-40 bg-gradient-to-t from-background via-background/50 to-transparent z-10"></div>
      </section>

      {/* Services Grid */}
      <section className="py-8 md:py-16 lg:py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-6">
              Mobile App Development Services
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              From native iOS and Android apps to cross-platform solutions, we create 
              mobile experiences that users love and businesses rely on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {appServices.map((service, index) => <div key={index} className="group space-card rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg transition-all duration-300 active:scale-95 md:hover:shadow-2xl md:hover:-translate-y-2 md:hover:border-primary/30">
                <div className="text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-4 lg:mb-6 transition-transform duration-300 md:group-hover:scale-110">{service.icon}</div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2 md:mb-3 lg:mb-4 transition-colors duration-300 md:group-hover:text-primary">{service.title}</h3>
                <p className="text-muted-foreground mb-3 md:mb-4 lg:mb-6 text-sm md:text-base lg:text-lg leading-relaxed">{service.description}</p>
                <div className="space-y-2 md:space-y-3">
                  {service.features.map((feature, idx) => <div key={idx} className="flex items-center text-muted-foreground transition-colors duration-300 md:group-hover:text-foreground">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full mr-2 md:mr-3 lg:mr-4 transition-all duration-300 md:group-hover:shadow-lg md:group-hover:shadow-primary/50"></div>
                      <span className="text-xs md:text-sm lg:text-base">{feature}</span>
                    </div>)}
                </div>
              </div>)}
          </div>
        </div>
      </section>

      <Portfolio filter="app" title="Our Mobile App Portfolio" description="Explore the innovative mobile applications we've developed for businesses across various industries." />

      {/* Features Section */}
      <section className="py-8 md:py-16 lg:py-20 bg-card/10 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-5 md:opacity-8"></div>
        <div className="nebula-bg opacity-10 md:opacity-30 hidden md:block"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-8">
              Why Choose Our Mobile App Development
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            <div className="text-center group">
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 lg:mb-8 transition-all duration-300 active:scale-95 md:group-hover:scale-110">
                <span className="text-white text-2xl md:text-3xl">⚡</span>
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-2 md:mb-3 lg:mb-4 transition-colors duration-300 md:group-hover:text-primary">High Performance</h3>
              <p className="text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed">Optimized for speed and efficiency with smooth animations and lightning-fast loading times.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 lg:mb-8 transition-all duration-300 active:scale-95 md:group-hover:scale-110">
                <span className="text-white text-2xl md:text-3xl">🎨</span>
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-2 md:mb-3 lg:mb-4 transition-colors duration-300 md:group-hover:text-primary">Beautiful Design</h3>
              <p className="text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed">Intuitive and attractive user interfaces that follow platform-specific design guidelines and modern aesthetics.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 lg:mb-8 transition-all duration-300 active:scale-95 md:group-hover:scale-110">
                <span className="text-white text-2xl md:text-3xl">🔒</span>
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-2 md:mb-3 lg:mb-4 transition-colors duration-300 md:group-hover:text-primary">Secure & Reliable</h3>
              <p className="text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed">Built with security best practices and thorough testing for reliable performance across all devices.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Apps;