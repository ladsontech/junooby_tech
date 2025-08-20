import React from 'react';
import TypewriterEffect from './TypewriterEffect';
import { Link } from 'react-router-dom';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const WhatsappButton = ({
  message
}: {
  message: string;
}) => {
  const phoneNumber = '+256789572007';
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  
  return (
    <button 
      onClick={handleClick} 
      className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 md:px-10 py-4 md:py-5 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-green-400/30"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative flex items-center gap-3">
        <svg width="1.5em" height="1.5em" viewBox="0 0 32 32" fill="currentColor" className="group-hover:scale-110 transition-transform duration-300">
          <path d="M16.003 4.002c6.62 0 12.001 5.376 12.001 11.998 0 2.124-.584 4.173-1.695 6.04l.952 3.513a1.196 1.196 0 0 1-1.495 1.495l-3.513-.951c-1.867 1.11-3.917 1.695-6.04 1.695-6.62.001-11.998-5.377-11.998-12.002 0-6.62 5.378-12.001 12.001-12.001zm0-2.002c-7.733 0-14.002 6.272-14.002 14.003s6.269 14.001 14.001 14.001c2.381 0 4.707-.601 6.778-1.742l3.338.904a3.196 3.196 0 0 0 3.992-3.991l-.905-3.338c1.142-2.071 1.742-4.398 1.742-6.778.003-7.732-6.267-14.003-13.999-14.003z"/>
        </svg>
        <span>Chat on WhatsApp</span>
      </div>
    </button>
  );
};

const Hero = () => {
  const avatarClass = "mx-auto rounded-full shadow-2xl border-4 border-primary/30 bg-card object-cover glow-blue " + "w-[220px] h-[220px] xs:w-[260px] xs:h-[260px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px]";
  
  return (
    <section className="min-h-screen space-bg relative overflow-hidden flex items-center">
      {/* Animated background particles */}
      <div className="particles absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse-glow"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse-glow" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl animate-pulse-glow" style={{animationDelay: '2s'}}></div>

      {/* Tech grid overlay */}
      <div className="absolute inset-0 tech-grid opacity-30"></div>
      
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center md:items-stretch justify-between px-4 gap-8 md:gap-8 lg:gap-14 relative z-10 py-20 md:py-32">
        {/* Left: Headline & Actions */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-8 animate-slide-in-up">
          <div className="space-y-6">
            <h1 className="font-extrabold leading-tight tracking-tight text-foreground text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-pulse-glow">
                Digital Solutions
              </span>
              <br />
              <span className="text-foreground/90">for the Future</span>
            </h1>
            
            <div className="h-12 xs:h-14 sm:h-16 flex items-center justify-center md:justify-start">
              <TypewriterEffect />
            </div>
            
            <p className="text-muted-foreground text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-2xl leading-relaxed font-light">
              Empowering innovation with cutting-edge web, mobile, security, and marketing technology.
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-medium">
                Built with precision. Delivered with excellence.
              </span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
            <Link 
              to="/contact"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white px-8 md:px-10 py-4 md:py-5 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-blue-400/30 text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Get Started</span>
            </Link>
            
            <WhatsappButton message="Hello! I'm interested in your digital solutions." />
          </div>
        </div>

        {/* Right: Enhanced Avatar with orbital elements */}
        <div className="flex-1 flex items-center justify-center w-full relative">
          <div className="relative">
            {/* Orbital rings */}
            <div className="absolute inset-0 border border-blue-500/20 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
            <div className="absolute inset-4 border border-purple-500/20 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
            <div className="absolute inset-8 border border-cyan-500/20 rounded-full animate-spin" style={{animationDuration: '25s'}}></div>
            
            {/* Orbiting elements */}
            <div className="absolute top-0 left-1/2 w-3 h-3 bg-blue-500 rounded-full animate-orbit" style={{animationDuration: '20s'}}></div>
            <div className="absolute top-1/2 right-0 w-2 h-2 bg-purple-500 rounded-full animate-orbit" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
            <div className="absolute bottom-0 left-1/2 w-2.5 h-2.5 bg-cyan-500 rounded-full animate-orbit" style={{animationDuration: '25s'}}></div>

            <Avatar className={avatarClass}>
              <AvatarImage 
                src="/images/hero_section.jpg" 
                alt="Future of digital technology - Junooby Digital" 
                draggable={false} 
                style={{objectFit: 'cover', width: '100%', height: '100%'}} 
                onError={e => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }} 
              />
              <AvatarFallback className="bg-gradient-to-br from-blue-600 to-purple-600 border-2 border-primary/30 flex items-center justify-center text-white font-bold w-full h-full text-6xl">
                JD
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;