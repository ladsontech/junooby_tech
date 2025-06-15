import React from 'react';
import TypewriterEffect from './TypewriterEffect';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// WhatsApp button native implementation
const WhatsappButton = ({ message }: { message: string }) => {
  const phoneNumber = '+256789572007';
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 border-2 border-green-600 text-green-700 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-green-600 hover:text-white transition-all duration-300 text-center"
    >
      <svg width="1.4em" height="1.4em" viewBox="0 0 32 32" fill="currentColor">
        <g>
          <path d="M16.003 4.002c6.62 0 12.001 5.376 12.001 11.998 0 2.124-.584 4.173-1.695 6.04l.952 3.513a1.196 1.196 0 0 1-1.495 1.495l-3.513-.951c-1.867 1.11-3.917 1.695-6.04 1.695-6.62.001-11.998-5.377-11.998-12.002 0-6.62 5.378-12.001 12.001-12.001zm0-2.002c-7.733 0-14.002 6.272-14.002 14.003s6.269 14.001 14.001 14.001c2.381 0 4.707-.601 6.778-1.742l3.338.904a3.196 3.196 0 0 0 3.992-3.991l-.905-3.338c1.142-2.071 1.742-4.398 1.742-6.778.003-7.732-6.267-14.003-13.999-14.003zm7.998 23.997a.998.998 0 1 1 0 1.997.998.998 0 0 1 0-1.997zm-9.001-16.998c-3.859 0-7.001 3.139-7.001 7.001 0 1.06.211 2.081.595 3.029l-1.196 4.354c-.063.228.045.475.256.565l7.896 3.422c.209.09.447.013.569-.19 1.006-1.734 1.851-3.541 2.529-5.418.073-.21-.018-.45-.185-.563a4.438 4.438 0 0 1-1.105-.938 4.47 4.47 0 0 1-1.001-1.723 4.518 4.518 0 0 1-.246-1.423c0-.547.098-1.081.284-1.561a5.736 5.736 0 0 1 1.561-2.283 5.514 5.514 0 0 1 2.28-1.564c.482-.187 1.016-.284 1.561-.284.482 0 .95.093 1.423.245.494.14.939.453 1.244.925s.42 1.064.333 1.62a8.433 8.433 0 0 1-1.566 3.305 8.23 8.23 0 0 1-1.785 1.816z" fill="currentColor"/>
        </g>
      </svg>
      Chat on WhatsApp
    </button>
  );
};

const Hero = () => {
  return (
    <>
      {/* Tech Hero Section */}
      <section className="min-h-[70vh] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 pt-16 pb-8 md:pt-24 md:pb-14 flex items-center animate-fade-in">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center md:items-stretch justify-between px-4 gap-8 md:gap-8 lg:gap-14">
          {/* Left: Headline & Actions */}
          <div className="flex-1 flex flex-col justify-center items-start text-left space-y-6 xs:space-y-7">
            <h1 className="font-extrabold leading-tight tracking-tight text-white drop-shadow-xl text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl transition-all">
              <span className="block mb-1 xs:mb-2 text-blue-400 text-base xs:text-lg sm:text-2xl md:text-3xl">
                Junooby Digital Solutions
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-cyan-400 animate-glow">
                Tech for Uganda&#39;s Businesses
              </span>
            </h1>
            <div className="h-8 xs:h-10 sm:h-12 flex items-center text-cyan-300 font-semibold text-base xs:text-xl sm:text-2xl md:text-3xl mb-0.5 xs:mb-1 transition-all">
              <TypewriterEffect />
            </div>
            <p className="text-gray-300 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl max-w-xl leading-relaxed font-medium">
              Empowering innovation with modern web, mobile, security, and marketing technology.<br className="hidden sm:block" />
              Built with passion. Delivered with precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-2 w-full">
              <Link 
                to="/services" 
                className="bg-blue-600 text-white px-5 xs:px-8 py-2.5 xs:py-3.5 rounded-lg font-semibold text-sm xs:text-base md:text-lg hover:bg-blue-700 shadow-md transition hover:scale-105 text-center"
              >
                Explore Our Services
              </Link>
              <div>
                <WhatsappButton message="Hello! I would like to get a quote for your services." />
              </div>
            </div>
          </div>
          {/* Right: Hero Image (Portrait Aspect Ratio) */}
          <div className="flex-1 flex items-center justify-center w-full">
            <div className="relative w-full max-w-[270px] xs:max-w-[320px] sm:max-w-[370px] md:max-w-[410px] lg:max-w-[420px] xl:max-w-[440px] 2xl:max-w-[460px] transition-all rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-700 animate-scale-in">
              <AspectRatio ratio={3 / 4}>
                <img
                  src="/images/hero_section.jpg"
                  alt="Tech solutions in action - Junooby Digital"
                  className="w-full h-full object-cover select-none"
                  onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  loading="eager"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent pointer-events-none" />
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
