
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';

const Apps = () => {
  const appServices = [
    {
      title: "iOS Apps",
      description: "Native iOS applications for iPhone and iPad users",
      features: ["Swift Development", "App Store Optimization", "Push Notifications", "In-App Purchases"],
      icon: "📱"
    },
    {
      title: "Android Apps",
      description: "Native Android applications for Google Play Store",
      features: ["Kotlin/Java Development", "Google Play Console", "Material Design", "Firebase Integration"],
      icon: "🤖"
    },
    {
      title: "Cross-Platform Apps",
      description: "Build once, deploy everywhere with React Native or Flutter",
      features: ["React Native", "Flutter", "Shared Codebase", "Platform-Specific Features"],
      icon: "🔄"
    },
    {
      title: "Progressive Web Apps",
      description: "Web applications that work like native mobile apps",
      features: ["Offline Functionality", "Push Notifications", "App-like Experience", "Cross-Platform"],
      icon: "🌐"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-black tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Mobile App Development
              <span className="block text-primary animate-glow">
                For Every Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Create powerful mobile applications that engage users, increase productivity, 
              and drive business growth across iOS, Android, and web platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Mobile App Development Services
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              From native iOS and Android apps to cross-platform solutions, we create 
              mobile experiences that users love and businesses rely on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {appServices.map((service, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-neon-pulse">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our Mobile App Development
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center mx-auto mb-6 animate-glow">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">High Performance</h3>
              <p className="text-gray-400">Optimized for speed and efficiency with smooth animations and fast loading times.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center mx-auto mb-6 animate-glow">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Beautiful Design</h3>
              <p className="text-gray-400">Intuitive and attractive user interfaces that follow platform-specific design guidelines.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center mx-auto mb-6 animate-glow">
                <span className="text-white text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Secure & Reliable</h3>
              <p className="text-gray-400">Built with security best practices and thorough testing for reliable performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Turn your app idea into reality with our expert mobile development team. 
            Let's create something amazing together.
          </p>
        </div>
      </section>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default Apps;
