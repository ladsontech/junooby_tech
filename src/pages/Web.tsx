import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Portfolio from '@/components/Portfolio';
import { Link } from 'react-router-dom';
import { Clock, DollarSign, Globe, CheckCircle2, FileText, MessageCircle, Send } from 'lucide-react';

const Web = () => {
  const pricingTiers = [
    {
      title: "Non-Profit & Community Organizations",
      subtitle: "NGOs, CBOs, churches, charities, foundations",
      price: "UGX 250,000 – 350,000",
      icon: "🏛️",
    },
    {
      title: "Companies & Corporate Businesses",
      subtitle: "SMEs, startups, registered companies",
      price: "UGX 300,000 – 450,000",
      icon: "🏢",
    },
    {
      title: "Tourism & Hospitality",
      subtitle: "Tours, travel agencies, hotels, lodges",
      price: "UGX 350,000 – 600,000",
      icon: "✈️",
    },
    {
      title: "Schools & Educational Institutions",
      subtitle: "Schools, colleges, training centers",
      price: "UGX 300,000 – 500,000",
      icon: "🎓",
    },
    {
      title: "Local Service Providers",
      subtitle: "Plumbers, electricians, cleaners, mechanics",
      price: "UGX 200,000 – 300,000",
      icon: "🔧",
    },
  ];

  const customSystems = [
    "School management systems",
    "Booking & reservation systems",
    "Membership & subscription platforms",
    "Inventory & sales systems",
    "Dashboards & admin panels",
    "Custom mobile-friendly web apps",
  ];

  const packageIncludes = [
    "Free .com / .org domain (first year)",
    "Free hosting (first year)",
    "Mobile-responsive design",
    "Basic SEO setup",
    "WhatsApp & social media integration",
    "Secure & fast website",
  ];

  const clientRequirements = [
    "Official logo",
    "About / company information (Word document preferred)",
    "High-quality images",
    "Contact details & links",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-background via-background to-card/10 relative overflow-hidden flex items-center pt-16">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-muted/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Website Design
              </span>
              <br />
              <span className="text-foreground text-3xl md:text-4xl lg:text-5xl">
                & Custom System Development
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light mb-8">
              We design modern websites and custom digital systems for organizations, businesses, and service providers.
            </p>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-12 max-w-3xl mx-auto">
              <div className="bg-card/80 border border-border rounded-xl p-4 text-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground font-semibold text-sm">3–5 Working Days</p>
                <p className="text-muted-foreground text-xs mt-1">Fast delivery</p>
              </div>
              <div className="bg-card/80 border border-border rounded-xl p-4 text-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <DollarSign className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground font-semibold text-sm">From UGX 250,000</p>
                <p className="text-muted-foreground text-xs mt-1">Affordable pricing</p>
              </div>
              <div className="bg-card/80 border border-border rounded-xl p-4 text-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground font-semibold text-sm">Free Domain & Hosting</p>
                <p className="text-muted-foreground text-xs mt-1">First year included</p>
              </div>
            </div>

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

              <button
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-border bg-card text-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:border-primary/50"
              >
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section id="pricing" className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Services & Pricing
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Transparent pricing tailored to your industry. Every package includes a complete, professional website.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 flex flex-col">
                <div className="text-4xl mb-4">{tier.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{tier.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{tier.subtitle}</p>

                <div className="mb-6 flex-grow">
                  <p className="font-semibold text-foreground text-sm mb-3">Package Includes:</p>
                  <ul className="space-y-2">
                    {packageIncludes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground text-xs md:text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-4 border-t border-border/50">
                  <span className="text-lg md:text-xl font-bold text-primary block mb-4">{tier.price}</span>
                  <button
                    onClick={() => {
                      const message = `Hello! I am interested in the ${tier.title} website package (${tier.price}). Can we discuss further?`;
                      const url = `https://wa.me/256789572007?text=${encodeURIComponent(message)}`;
                      window.open(url, '_blank');
                    }}
                    className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/20 hover:border-primary px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Request Package
                  </button>
                </div>
              </div>
            ))}

            {/* Custom Systems Card */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col md:col-span-2 lg:col-span-1">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">Custom Systems & Web Applications</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                For clients who need more than a website.
              </p>
              <ul className="space-y-2 mb-6 flex-grow">
                {customSystems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-border/50">
                <p className="text-sm text-muted-foreground mb-2">📩 Pricing: Available on request</p>
                <button
                  onClick={() => {
                    const message = 'Hello! I need a custom system/web application. Can I get a quotation?';
                    const url = `https://wa.me/256789572007?text=${encodeURIComponent(message)}`;
                    window.open(url, '_blank');
                  }}
                  className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Inbox Us for a Quotation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Payment Structure + Requirements */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">

            {/* Payment Structure */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <DollarSign className="w-6 h-6 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Payment Structure</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                  <p className="font-semibold text-foreground mb-1">Deposit</p>
                  <p className="text-muted-foreground text-sm">UGX 100,000 to start a project</p>
                </div>
                <div className="bg-muted/30 rounded-xl p-4">
                  <p className="font-semibold text-foreground mb-1">Balance</p>
                  <p className="text-muted-foreground text-sm">Payable before or immediately after completion</p>
                </div>
                <div className="bg-muted/30 rounded-xl p-4">
                  <p className="font-semibold text-foreground mb-1">Work Begins</p>
                  <p className="text-muted-foreground text-sm">Only after deposit is confirmed</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border/50">
                <h3 className="text-lg font-bold text-foreground mb-2">Annual Subscription (From Second Year)</h3>
                <p className="text-muted-foreground text-sm">
                  <span className="text-primary font-semibold text-base">UGX 180,000 per year</span><br />
                  Covers domain renewal, hosting & basic maintenance
                </p>
              </div>
            </div>

            {/* Project Requirements */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Project Requirements</h2>
              </div>
              <p className="text-muted-foreground mb-6 text-sm">Clients must provide the following materials:</p>
              <div className="space-y-3">
                {clientRequirements.map((req, index) => (
                  <div key={index} className="flex items-center gap-3 bg-muted/30 rounded-xl p-4">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm">{req}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-border/50">
                <p className="text-muted-foreground text-sm italic flex items-start gap-2">
                  <span className="text-primary">⏳</span>
                  Delivery timeline starts only after all required materials are submitted.
                </p>
              </div>
            </div>
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

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Need a Website or Custom System?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to get started. Inbox us with your idea, and we'll guide you step by step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const message = 'Hello! I would like to get a website built. Can we discuss?';
                const url = `https://wa.me/256789572007?text=${encodeURIComponent(message)}`;
                window.open(url, '_blank');
              }}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Contact Us Today
            </button>
            <Link
              to="/terms"
              className="border border-border bg-card text-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:border-primary/50 flex items-center justify-center gap-2"
            >
              <FileText className="w-5 h-5" />
              View Terms & Conditions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Web;