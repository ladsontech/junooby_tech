import React, { ReactNode, useEffect, useRef, CSSProperties } from 'react';

interface ParallaxSectionProps {
  children?: ReactNode;
  speed?: number;
  className?: string;
  style?: CSSProperties;
}

const ParallaxSection = ({ children, speed = 0.5, className = '', style = {} }: ParallaxSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const rate = scrolled * speed;
      
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        sectionRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={sectionRef} className={`transition-transform duration-75 ${className}`} style={style}>
      {children}
    </div>
  );
};

export default ParallaxSection;
