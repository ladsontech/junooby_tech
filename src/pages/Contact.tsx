
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-16 md:pt-20 lg:pt-24 pb-8 md:pb-16 lg:pb-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-6">Contact Us</h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with cutting-edge technology? Get in touch with our expert team
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl p-4 md:p-6 lg:p-8 shadow-lg">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Send us a message</h2>
              <form className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm md:text-base"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm md:text-base"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm md:text-base"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                  <select className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm md:text-base">
                    <option>Select a service</option>
                    <option>Web Development</option>
                    <option>Mobile App Design</option>
                    <option>SEO Optimization</option>
                    <option>Social Media Management</option>
                    <option>Digital Marketing</option>
                    <option>CCTV Installation</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm md:text-base"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-4 md:space-y-6 lg:space-y-8">
              <div className="bg-white rounded-xl p-4 md:p-6 lg:p-8 shadow-lg">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 md:mb-6">Get in Touch</h3>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      📧
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm md:text-base">Email</p>
                      <p className="text-gray-600 text-sm md:text-base">info@junooby.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      📞
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm md:text-base">Phone</p>
                      <p className="text-gray-600 text-sm md:text-base">+256 789 572 007</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      📍
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm md:text-base">Location</p>
                      <p className="text-gray-600 text-sm md:text-base">Kampala, Uganda</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-4 md:p-6 lg:p-8 text-white">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Why Choose Junooby?</h3>
                <ul className="space-y-2 md:space-y-3">
                  <li className="flex items-center space-x-2 md:space-x-3">
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                    <span className="text-sm md:text-base">Local expertise, global standards</span>
                  </li>
                  <li className="flex items-center space-x-2 md:space-x-3">
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                    <span className="text-sm md:text-base">24/7 customer support</span>
                  </li>
                  <li className="flex items-center space-x-2 md:space-x-3">
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                    <span className="text-sm md:text-base">Competitive pricing</span>
                  </li>
                  <li className="flex items-center space-x-2 md:space-x-3">
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                    <span className="text-sm md:text-base">Proven track record</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Contact;
