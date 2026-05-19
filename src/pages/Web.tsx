import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Portfolio from '@/components/Portfolio';
import { Link } from 'react-router-dom';
import { Clock, DollarSign, Globe, CheckCircle2, FileText, MessageCircle, Send, CreditCard, RefreshCw, Folder } from 'lucide-react';

const openWhatsApp = (message: string) => {
  const url = `https://wa.me/256789572007?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};

const Web = () => {
  const websiteTiers = [
    {
      icon: '🟢',
      title: 'Starter Tier',
      subtitle: 'Perfect for startups, small businesses, personal brands, and local service providers.',
      price: 'UGX 350,000 / $100',
      delivery: '2–5 Days',
      deposit: '50% Before Work Begins',
      renewal: 'UGX 180,000 / $50 per year',
      idealFor: ['Local Businesses', 'Salons & Barbershops', 'Restaurants', 'Plumbers & Electricians', 'Mechanics', 'Personal Brands', 'Churches & Small NGOs'],
      includes: [
        '1–3 Professional Pages',
        'Mobile Responsive Design',
        'WhatsApp Chat Integration',
        'Contact Forms',
        'Social Media Integration',
        'Google Maps Integration',
        'Basic SEO Setup',
        'Fast & Secure Website',
        'Free Domain (First Year)',
        'Free Hosting (First Year)',
      ],
    },
    {
      icon: '🔵',
      title: 'Business Tier',
      subtitle: 'Designed for growing businesses, companies, schools, and professional organizations.',
      price: 'UGX 700,000 / $200',
      delivery: '1–2 Weeks',
      deposit: '40%',
      renewal: 'UGX 280,000 / $80 per year',
      idealFor: ['Companies', 'Schools', 'NGOs', 'SACCOs', 'Hotels', 'Travel Agencies', 'Medium Businesses'],
      includes: [
        'Up to 5–10 Pages',
        'Professional Custom Design',
        'Mobile Responsive Layout',
        'WhatsApp Integration',
        'Gallery & Portfolio Sections',
        'Contact & Inquiry Forms',
        'SEO Optimization',
        'Analytics Setup',
        'Speed Optimization',
        'Secure Website Setup',
        'Free Domain (First Year)',
        'Free Hosting (First Year)',
      ],
    },
    {
      icon: '🟣',
      title: 'Professional Tier',
      subtitle: 'Built for larger organizations and businesses that require advanced functionality and stronger branding.',
      price: 'UGX 1,500,000 / $430',
      delivery: '2–4 Weeks',
      deposit: '40%',
      renewal: 'UGX 450,000 / $130 per year',
      idealFor: ['Corporate Companies', 'Universities', 'Tourism Companies', 'Ecommerce Brands', 'Large NGOs', 'Growing Startups'],
      includes: [
        'Up to 15+ Pages',
        'Premium Custom UI/UX Design',
        'Admin Dashboard',
        'Blog/News System',
        'Booking/Reservation Features',
        'Advanced SEO Optimization',
        'Email Integration',
        'Advanced Security Setup',
        'Performance Optimization',
        'Multiple Contact Forms',
        'Analytics & Tracking',
        'Free Domain (First Year)',
        'Free Hosting (First Year)',
      ],
    },
    {
      icon: '🛒',
      title: 'Ecommerce Tier',
      subtitle: 'Professional online stores and ecommerce platforms built for sales and growth.',
      price: 'UGX 1,800,000 / $520',
      delivery: '3–6 Weeks',
      deposit: '50%',
      renewal: 'UGX 650,000 / $185 per year',
      idealFor: ['Online Shops', 'Fashion Stores', 'Electronics Stores', 'Delivery Businesses', 'Supermarkets', 'Ecommerce Startups'],
      includes: [
        'Product Listings',
        'Shopping Cart',
        'Online Payments',
        'Customer Accounts',
        'Order Tracking',
        'Admin Dashboard',
        'Discounts & Coupons',
        'Inventory Management',
        'Delivery Integration',
        'Mobile Responsive Design',
        'SEO Optimization',
        'Free Domain (First Year)',
        'Free Hosting (First Year)',
      ],
    },
  ];

  const customSystem = {
    icon: '⚙️',
    title: 'Custom Systems & Web Applications',
    subtitle: 'For businesses and organizations that need advanced systems beyond standard websites.',
    price: 'Starting From UGX 3,000,000 / $860',
    delivery: '1–4 Months',
    deposit: '30%–50%',
    renewal: 'UGX 850,000 / $240 per year',
    solutions: [
      'School Management Systems',
      'Booking Platforms',
      'Membership Systems',
      'Inventory Systems',
      'Dashboards & Admin Panels',
      'Delivery Platforms',
      'AI Integrations',
      'Sales Management Systems',
      'Custom Business Platforms',
    ],
    includes: [
      'Fully Custom Development',
      'Role-Based Authentication',
      'Real-Time Database',
      'Reports & Analytics',
      'API Integrations',
      'Cloud Deployment',
      'Advanced Security Features',
      'Mobile-Friendly Interfaces',
    ],
  };

  const mobileApps = [
    {
      icon: '📱',
      title: 'Basic Mobile App',
      price: 'UGX 1,500,000 / $430',
      delivery: '2–4 Weeks',
      deposit: '50%',
      renewal: 'UGX 450,000 / $130 per year',
      features: [
        'Android App',
        'Modern UI Design',
        'Authentication System',
        'Push Notifications',
        'Firebase Integration',
        'Basic Admin Panel',
      ],
    },
    {
      icon: '🚀',
      title: 'Advanced Mobile App',
      price: 'UGX 3,500,000 / $1,000',
      delivery: '1–3 Months',
      deposit: '40%',
      renewal: 'UGX 950,000 / $270 per year',
      features: [
        'Android & iOS Support',
        'Payment Integration',
        'GPS & Maps Features',
        'Real-Time Features',
        'Chat & Messaging',
        'Admin Dashboard',
        'Analytics & Reports',
        'Advanced Backend Infrastructure',
        'Enhanced Security Features',
      ],
    },
  ];

  const clientRequirements = [
    'Official Logo',
    'Business Information',
    'High-Quality Images',
    'Contact Details',
    'Social Media Links',
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
                Professional Website
              </span>
              <br />
              <span className="text-foreground text-3xl md:text-4xl lg:text-5xl">
                Development Packages
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light mb-8">
              Modern, secure, mobile-friendly websites built for businesses, organizations, startups, and brands across Uganda.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-12 max-w-3xl mx-auto">
              <div className="bg-card/80 border border-border rounded-xl p-4 text-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground font-semibold text-sm">Fast Delivery</p>
                <p className="text-muted-foreground text-xs mt-1">From 2–5 days</p>
              </div>
              <div className="bg-card/80 border border-border rounded-xl p-4 text-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <DollarSign className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground font-semibold text-sm">From UGX 350,000</p>
                <p className="text-muted-foreground text-xs mt-1">Starter tier</p>
              </div>
              <div className="bg-card/80 border border-border rounded-xl p-4 text-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground font-semibold text-sm">Free Domain & Hosting</p>
                <p className="text-muted-foreground text-xs mt-1">First year included</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => openWhatsApp('Hello! I would like to get started with a website project. Can we discuss?')}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Get Started
              </button>
              <button
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-border bg-card text-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:border-primary/50"
              >
                View Packages
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Website Tiers */}
      <section id="pricing" className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              🚀 Website Development Packages
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional, modern, fast, and mobile-friendly websites built for every stage of your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {websiteTiers.map((tier, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-4xl">{tier.icon}</div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">{tier.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{tier.subtitle}</p>

                <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-4">
                  <p className="text-xs text-muted-foreground mb-1">Starting From</p>
                  <p className="text-lg md:text-xl font-bold text-primary">{tier.price}</p>
                </div>

                <div className="mb-4">
                  <p className="font-semibold text-foreground text-sm mb-2">Ideal For:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {tier.idealFor.map((item, idx) => (
                      <span key={idx} className="bg-muted/40 text-muted-foreground text-xs px-2.5 py-1 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6 flex-grow">
                  <p className="font-semibold text-foreground text-sm mb-3">Package Includes:</p>
                  <ul className="space-y-2">
                    {tier.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground text-xs md:text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                  <div className="bg-muted/30 rounded-lg p-2">
                    <p className="text-[10px] text-muted-foreground uppercase">Delivery</p>
                    <p className="text-xs font-semibold text-foreground mt-0.5">{tier.delivery}</p>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-2">
                    <p className="text-[10px] text-muted-foreground uppercase">Deposit</p>
                    <p className="text-xs font-semibold text-foreground mt-0.5">{tier.deposit}</p>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-2">
                    <p className="text-[10px] text-muted-foreground uppercase">Renewal/yr</p>
                    <p className="text-xs font-semibold text-foreground mt-0.5">{tier.renewal.split(' /')[0]}</p>
                  </div>
                </div>

                <button
                  onClick={() => openWhatsApp(`Hello! I am interested in the ${tier.title} (${tier.price}). Can we discuss further?`)}
                  className="w-full bg-primary text-primary-foreground px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Request Package
                </button>
              </div>
            ))}
          </div>

          {/* Custom Systems Card */}
          <div className="mt-8 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 rounded-2xl p-6 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-4xl">{customSystem.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">{customSystem.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4 text-sm">{customSystem.subtitle}</p>

                <div className="bg-card/60 border border-border rounded-xl p-4 mb-4">
                  <p className="text-xs text-muted-foreground mb-1">Pricing</p>
                  <p className="text-lg md:text-xl font-bold text-primary">{customSystem.price}</p>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                  <div className="bg-card/60 rounded-lg p-2">
                    <p className="text-[10px] text-muted-foreground uppercase">Delivery</p>
                    <p className="text-xs font-semibold text-foreground mt-0.5">{customSystem.delivery}</p>
                  </div>
                  <div className="bg-card/60 rounded-lg p-2">
                    <p className="text-[10px] text-muted-foreground uppercase">Deposit</p>
                    <p className="text-xs font-semibold text-foreground mt-0.5">{customSystem.deposit}</p>
                  </div>
                  <div className="bg-card/60 rounded-lg p-2">
                    <p className="text-[10px] text-muted-foreground uppercase">Renewal/yr</p>
                    <p className="text-xs font-semibold text-foreground mt-0.5">UGX 850K</p>
                  </div>
                </div>

                <button
                  onClick={() => openWhatsApp('Hello! I need a custom system/web application. Can I get a quotation?')}
                  className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Inbox Us for a Quotation
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-foreground text-sm mb-3">Solutions Include:</p>
                  <ul className="space-y-2">
                    {customSystem.solutions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground text-xs">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm mb-3">Package Includes:</p>
                  <ul className="space-y-2">
                    {customSystem.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Development */}
      <section className="py-16 md:py-24 bg-card/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              📱 Mobile App Development
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Modern Android & iOS applications designed for businesses and startups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {mobileApps.map((app, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-4xl">{app.icon}</div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">{app.title}</h3>
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-4">
                  <p className="text-xs text-muted-foreground mb-1">Starting From</p>
                  <p className="text-lg md:text-xl font-bold text-primary">{app.price}</p>
                </div>

                <div className="mb-4 flex-grow">
                  <p className="font-semibold text-foreground text-sm mb-3">Features:</p>
                  <ul className="space-y-2">
                    {app.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                  <div className="bg-muted/30 rounded-lg p-2">
                    <p className="text-[10px] text-muted-foreground uppercase">Delivery</p>
                    <p className="text-xs font-semibold text-foreground mt-0.5">{app.delivery}</p>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-2">
                    <p className="text-[10px] text-muted-foreground uppercase">Deposit</p>
                    <p className="text-xs font-semibold text-foreground mt-0.5">{app.deposit}</p>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-2">
                    <p className="text-[10px] text-muted-foreground uppercase">Renewal/yr</p>
                    <p className="text-xs font-semibold text-foreground mt-0.5">{app.renewal.split(' /')[0]}</p>
                  </div>
                </div>

                <button
                  onClick={() => openWhatsApp(`Hello! I am interested in the ${app.title} (${app.price}). Can we discuss further?`)}
                  className="w-full bg-primary text-primary-foreground px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Request Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment + Requirements + Subscription */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Payment Structure */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="w-6 h-6 text-primary" />
                <h2 className="text-xl md:text-2xl font-bold text-foreground">💳 Payment Structure</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                  <p className="font-semibold text-foreground mb-1">Minimum Deposit</p>
                  <p className="text-primary font-bold">UGX 200,000 / $60</p>
                </div>
                <div className="bg-muted/30 rounded-xl p-4">
                  <p className="font-semibold text-foreground mb-1">Balance</p>
                  <p className="text-muted-foreground text-sm">Cleared before or immediately after project completion</p>
                </div>
                <div className="bg-muted/30 rounded-xl p-4">
                  <p className="font-semibold text-foreground mb-1">Work Begins</p>
                  <p className="text-muted-foreground text-sm">Only after deposit confirmation and submission of all required materials</p>
                </div>
              </div>
            </div>

            {/* Annual Subscription */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <RefreshCw className="w-6 h-6 text-primary" />
                <h2 className="text-xl md:text-2xl font-bold text-foreground">🔄 Annual Subscription</h2>
              </div>
              <p className="text-muted-foreground text-sm mb-4">From the second year. Covers:</p>
              <ul className="space-y-2 mb-6">
                {['Domain Renewal', 'Hosting Renewal', 'SSL Security', 'Basic Website Maintenance'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                <p className="text-xs text-muted-foreground mb-1">Starting From</p>
                <p className="text-primary font-bold">UGX 180,000 / $50 per year</p>
              </div>
            </div>

            {/* Project Requirements */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <Folder className="w-6 h-6 text-primary" />
                <h2 className="text-xl md:text-2xl font-bold text-foreground">📂 Project Requirements</h2>
              </div>
              <p className="text-muted-foreground text-sm mb-4">Clients should provide:</p>
              <div className="space-y-2">
                {clientRequirements.map((req, index) => (
                  <div key={index} className="flex items-center gap-3 bg-muted/30 rounded-xl p-3">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm">{req}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground text-xs italic mt-4 flex items-start gap-2">
                <span className="text-primary">⏳</span>
                Delivery timelines start after all required materials are submitted.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Portfolio
        filter="all"
        title="Our Portfolio"
        description="See the amazing websites and web applications we've built for our clients across Uganda."
      />

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              🌟 Why Choose Us?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🌍', title: 'Global Reach', desc: 'Reach customers online 24/7 from anywhere in the world.' },
              { icon: '🏆', title: 'Professional Brand Presence', desc: 'Build trust and credibility with a modern digital experience.' },
              { icon: '⚡', title: 'Fast & Secure Systems', desc: 'Optimized for speed, security, and performance.' },
              { icon: '📱', title: 'Mobile-First Design', desc: 'Websites and apps built to work perfectly on all devices.' },
              { icon: '💰', title: 'Affordable Business Growth', desc: 'Your digital platform becomes a long-term marketing and sales tool.' },
              { icon: '🛠️', title: 'Ongoing Technical Support', desc: 'We stay with you beyond launch with reliable maintenance.' },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            🚀 Need a Website, App, or Custom System?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today and let's bring your idea to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openWhatsApp('Hello! I would like to get started with a project. Can we discuss?')}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Get Started
            </button>
            <button
              onClick={() => openWhatsApp('Hello! I would like to request a quote for a project.')}
              className="border border-border bg-card text-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:border-primary/50 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Request Quote
            </button>
            <Link
              to="/terms"
              className="border border-border bg-card text-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:border-primary/50 flex items-center justify-center gap-2"
            >
              <FileText className="w-5 h-5" />
              Terms & Conditions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Web;
