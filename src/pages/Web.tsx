
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
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Web Solutions for 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Companies & Organizations
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Professional websites that drive business growth, enhance brand credibility, 
              and connect you with your audience effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Web Development Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From corporate websites to organization portals, we create digital experiences 
              that represent your brand and achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Web Solutions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Your Business Needs a Professional Website
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Global Reach</h3>
              <p className="text-gray-600">Reach customers worldwide, 24/7, expanding your business beyond geographical boundaries.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Brand Credibility</h3>
              <p className="text-gray-600">Establish trust and professionalism with a modern, well-designed website.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cost-Effective Marketing</h3>
              <p className="text-gray-600">Your website works as a powerful marketing tool, generating leads and sales continuously.</p>
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
