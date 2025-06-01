
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import FeaturedProducts from '@/components/FeaturedProducts';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <FeaturedProducts />
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Index;
