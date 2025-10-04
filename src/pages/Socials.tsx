import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Portfolio from '@/components/Portfolio';
import { Check, Star, TrendingUp, Users, Calendar, Image, Megaphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Socials = () => {
  const packages = [
    {
      name: "Starter",
      price: "150,000",
      period: "per week",
      description: "Perfect for small businesses starting their social media journey",
      features: [
        "5 custom graphic posts per week",
        "2 social media platforms (Facebook & Instagram)",
        "Basic content calendar",
        "Community management (2 hours/day)",
        "Weekly performance report",
        "Stock photo access"
      ],
      popular: false,
      color: "from-gray-600 to-gray-800"
    },
    {
      name: "Professional",
      price: "300,000",
      period: "per week", 
      description: "Ideal for growing businesses wanting consistent engagement",
      features: [
        "10 custom graphic posts per week",
        "4 social media platforms (Facebook, Instagram, Twitter, LinkedIn)",
        "Advanced content calendar with themes",
        "Community management (4 hours/day)",
        "Bi-weekly strategy calls",
        "Custom hashtag research",
        "Stories & reels creation (5 per week)",
        "Detailed analytics report",
        "Premium design templates"
      ],
      popular: true,
      color: "from-blue-600 to-purple-600"
    },
    {
      name: "Enterprise",
      price: "500,000",
      period: "per week",
      description: "Complete social media dominance for established businesses",
      features: [
        "15+ custom graphic posts per week",
        "All major social platforms + TikTok",
        "Premium content calendar with seasonal campaigns",
        "Full-time community management (8 hours/day)",
        "Weekly strategy & optimization calls",
        "Advanced hashtag & trend analysis",
        "Video content creation (3 per week)",
        "Stories & reels (10+ per week)",
        "Influencer collaboration setup",
        "Competitor analysis reports",
        "Custom brand guidelines",
        "Priority 24/7 support"
      ],
      popular: false,
      color: "from-purple-600 to-pink-600"
    }
  ];

  const services = [
    {
      icon: Image,
      title: "Custom Graphics",
      description: "Eye-catching designs tailored to your brand identity"
    },
    {
      icon: Calendar,
      title: "Content Planning", 
      description: "Strategic content calendars aligned with your business goals"
    },
    {
      icon: Users,
      title: "Community Management",
      description: "Engage with your audience and build lasting relationships"
    },
    {
      icon: TrendingUp,
      title: "Analytics & Growth",
      description: "Data-driven insights to maximize your social media ROI"
    },
    {
      icon: Megaphone,
      title: "Campaign Management",
      description: "Targeted advertising campaigns to reach your ideal customers"
    },
    {
      icon: Star,
      title: "Brand Building",
      description: "Consistent messaging that strengthens your brand presence"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Social Media <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Management</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your social media presence with our comprehensive weekly packages. 
            We create, manage, and optimize your social media to drive real business results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={() => {
                const message = 'Hello! I am interested in your social media management services. Can you provide more details?';
                const url = `https://wa.me/256789572007?text=${encodeURIComponent(message)}`;
                window.open(url, '_blank');
              }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold"
            >
              Get Started Today
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            What We Do
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 group">
                <CardContent className="p-6">
                  <service.icon className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Weekly Packages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect package for your business size and goals. All packages include premium design, 
              strategic planning, and dedicated account management.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative bg-gray-900/80 border-gray-700 hover:bg-gray-900 transition-all duration-300 ${pkg.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-white mb-2">{pkg.name}</CardTitle>
                  <div className={`text-4xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent mb-2`}>
                    UGX {pkg.price}
                  </div>
                  <p className="text-gray-400">{pkg.period}</p>
                  <p className="text-gray-300 mt-4">{pkg.description}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={() => {
                      const message = `Hello! I am interested in the ${pkg.name} social media management package. Can you provide more details?`;
                      const url = `https://wa.me/256789572007?text=${encodeURIComponent(message)}`;
                      window.open(url, '_blank');
                    }}
                    className={`w-full bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105`}
                  >
                    Choose {pkg.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Our Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Strategy Session", description: "We analyze your brand and create a custom social media strategy" },
              { step: "02", title: "Content Creation", description: "Our designers create stunning graphics tailored to your brand" },
              { step: "03", title: "Scheduling & Posting", description: "We schedule and publish content at optimal times for engagement" },
              { step: "04", title: "Monitor & Optimize", description: "We track performance and continuously optimize for better results" }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{process.title}</h3>
                <p className="text-gray-400">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Portfolio 
        filter="social"
        title="Our Social Media Success Stories"
        description="See how we've helped businesses grow their social media presence and engagement."
      />

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Social Media?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of businesses that trust us with their social media presence. 
            Get started today and see the difference professional management makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => {
                const message = 'Hello! I want to start my first week of social media management. Can we discuss the packages?';
                const url = `https://wa.me/256789572007?text=${encodeURIComponent(message)}`;
                window.open(url, '_blank');
              }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold"
            >
              Start Your First Week
            </Button>
            <Button 
              onClick={() => {
                const message = 'Hello! I would like to schedule a consultation for social media management services.';
                const url = `https://wa.me/256789572007?text=${encodeURIComponent(message)}`;
                window.open(url, '_blank');
              }}
              variant="outline" 
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Socials;