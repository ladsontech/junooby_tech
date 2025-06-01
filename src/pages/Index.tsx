
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import FeaturedProducts from '@/components/FeaturedProducts';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';
import WhatsAppButton from '@/components/WhatsAppButton';
import TawkButton from '@/components/TawkButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <FeaturedProducts />
      <Footer />
      <BottomNav />
      <WhatsAppButton />
      <TawkButton />
    </div>
  );
};

export default Index;
