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
      className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
    >
      <span>💬</span>
      <span>Chat on WhatsApp</span>
    </button>
  );
};
const Hero = () => {
  const avatarClass = "mx-auto rounded-full shadow-2xl border-4 border-primary/50 bg-card object-cover glow-blue animate-pulse-glow " + "w-[220px] h-[220px] xs:w-[260px] xs:h-[260px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px]";
  return <section className="min-h-screen bg-black relative overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center md:items-stretch justify-between px-4 gap-8 md:gap-8 lg:gap-14 relative z-10 py-20 md:py-32">
        {/* Left: Headline & Actions */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-8 animate-slide-in-up z-20 relative bg-black/20 backdrop-blur-sm rounded-2xl p-8">
          <div className="space-y-6 z-20 relative">
            <h1 className="font-extrabold leading-tight tracking-tight text-white text-3xl xs:text-4xl sm:text-6xl md:text-7xl z-20 relative lg:text-7xl">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text animate-pulse-glow holographic text-zinc-50">
                Digital Solutions
              </span>
              <br />
              <span className="text-white z-20 relative">To Scale</span>
            </h1>
            
            <div className="h-12 xs:h-14 sm:h-16 flex items-center justify-center md:justify-start z-20 relative">
              <TypewriterEffect />
            </div>
            
            <p className="text-gray-300 text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-2xl leading-relaxed font-light z-20 relative">
              Empowering innovation with cutting-edge web, mobile, security, and marketing technology.
              
              
            </p>
          </div>

          
        </div>

        {/* Right: Simplified Avatar with minimal orbital elements */}
        <div className="flex-1 flex items-center justify-center w-full relative">
          <div className="relative">
            {/* Simplified orbital rings - only on desktop */}
            <div className="hidden md:block absolute inset-0 border border-blue-500/20 rounded-full animate-spin glow-blue" style={{
            animationDuration: '30s'
          }}></div>
            <div className="hidden md:block absolute inset-8 border border-purple-500/15 rounded-full animate-spin glow-purple" style={{
            animationDuration: '25s',
            animationDirection: 'reverse'
          }}></div>
            
            {/* Simplified orbiting elements - only on desktop */}
            <div className="hidden md:block absolute top-0 left-1/2 w-3 h-3 bg-blue-500/60 rounded-full animate-orbit glow-blue" style={{
            animationDuration: '30s'
          }}></div>
            <div className="hidden md:block absolute top-1/2 right-0 w-2 h-2 bg-purple-500/60 rounded-full animate-orbit glow-purple" style={{
            animationDuration: '25s',
            animationDirection: 'reverse'
          }}></div>

            <Avatar className={avatarClass}>
              <AvatarImage src="/images/hero_section.jpg" alt="Future of digital technology - Junooby Digital" draggable={false} style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%'
            }} onError={e => {
              (e.target as HTMLImageElement).style.display = 'none';
            }} />
              <AvatarFallback className="bg-gradient-to-br from-blue-600 to-purple-600 border-2 border-primary/50 flex items-center justify-center text-white font-bold w-full h-full text-6xl glow-blue">
                JD
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/50 to-transparent z-30"></div>
    </section>;
};
export default Hero;