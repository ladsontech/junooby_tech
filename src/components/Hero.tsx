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
  return <button onClick={handleClick} className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 md:px-10 py-4 md:py-5 rounded-xl font-semibold text-base md:text-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl border border-green-400/30 animate-neon-pulse">
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative flex items-center gap-3">
        <svg width="1.5em" height="1.5em" viewBox="0 0 32 32" fill="currentColor" className="group-hover:scale-125 transition-transform duration-500">
          <path d="M16.003 4.002c6.62 0 12.001 5.376 12.001 11.998 0 2.124-.584 4.173-1.695 6.04l.952 3.513a1.196 1.196 0 0 1-1.495 1.495l-3.513-.951c-1.867 1.11-3.917 1.695-6.04 1.695-6.62.001-11.998-5.377-11.998-12.002 0-6.62 5.378-12.001 12.001-12.001zm0-2.002c-7.733 0-14.002 6.272-14.002 14.003s6.269 14.001 14.001 14.001c2.381 0 4.707-.601 6.778-1.742l3.338.904a3.196 3.196 0 0 0 3.992-3.991l-.905-3.338c1.142-2.071 1.742-4.398 1.742-6.778.003-7.732-6.267-14.003-13.999-14.003z" />
        </svg>
        <span>Chat on WhatsApp</span>
      </div>
    </button>;
};
const Hero = () => {
  const avatarClass = "mx-auto rounded-full shadow-2xl border-4 border-primary/50 bg-card object-cover glow-blue animate-pulse-glow " + "w-[220px] h-[220px] xs:w-[260px] xs:h-[260px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px]";
  return <section className="min-h-screen bg-gradient-to-br from-background via-background to-card/10 relative overflow-hidden flex items-center pt-16">
      {/* Simplified background elements for better performance */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-muted/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center md:items-stretch justify-between px-4 gap-8 md:gap-8 lg:gap-14 relative z-10 py-20 md:py-32">
        {/* Left: Headline & Actions */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-8 relative z-20">
          <div className="space-y-6 relative">
            <h1 className="font-extrabold leading-tight tracking-tight text-foreground text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl relative">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Digital Solutions
              </span>
              <br />
              <span className="text-foreground">for the Future</span>
            </h1>
            
            <div className="h-12 xs:h-14 sm:h-16 flex items-center justify-center md:justify-start relative">
              <TypewriterEffect />
            </div>
            
            <p className="text-muted-foreground text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-2xl leading-relaxed font-light relative">
              Empowering innovation with cutting-edge web, mobile, security, and marketing technology.
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-medium">
                Built with precision. Delivered with excellence.
              </span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
            <Link to="/contact" className="bg-primary text-primary-foreground px-8 md:px-10 py-4 md:py-5 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-center">
              Get Started
            </Link>
            
            <WhatsappButton message="Hello! I'm interested in your digital solutions." />
          </div>
        </div>

        {/* Right: Simplified Avatar */}
        <div className="flex-1 flex items-center justify-center w-full relative">
          <div className="relative">
            {/* Minimal decorative ring - desktop only */}
            <div className="hidden md:block absolute inset-0 border border-primary/20 rounded-full animate-pulse"></div>
            
            <Avatar className={avatarClass}>
              <AvatarImage 
                src="/images/hero_section.jpg" 
                alt="Future of digital technology - Junooby Digital" 
                draggable={false} 
                className="object-cover w-full h-full"
                onError={e => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }} 
              />
              <AvatarFallback className="bg-gradient-to-br from-primary to-accent border-2 border-primary/50 flex items-center justify-center text-primary-foreground font-bold w-full h-full text-6xl">
                JD
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
    </section>;
};
export default Hero;