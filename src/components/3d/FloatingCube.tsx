import React, { useEffect, useRef } from 'react';

const FloatingCube = () => {
  const cubeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (cubeRef.current) {
        const scrollY = window.scrollY;
        cubeRef.current.style.transform = `
          translateY(${scrollY * 0.3}px)
          rotateX(${scrollY * 0.1}deg)
          rotateY(${scrollY * 0.15}deg)
        `;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute top-1/4 right-[10%] w-64 h-64 perspective-1000">
      <div
        ref={cubeRef}
        className="w-full h-full preserve-3d animate-float"
        style={{
          transformStyle: 'preserve-3d',
          animation: 'float 6s ease-in-out infinite',
        }}
      >
        <div className="cube-faces">
          <div className="cube-face front bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/30"></div>
          <div className="cube-face back bg-gradient-to-br from-accent/20 to-primary/20 backdrop-blur-sm border border-accent/30"></div>
          <div className="cube-face right bg-gradient-to-br from-primary/15 to-accent/15 backdrop-blur-sm border border-primary/20"></div>
          <div className="cube-face left bg-gradient-to-br from-accent/15 to-primary/15 backdrop-blur-sm border border-accent/20"></div>
          <div className="cube-face top bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm border border-primary/10"></div>
          <div className="cube-face bottom bg-gradient-to-br from-accent/10 to-primary/10 backdrop-blur-sm border border-accent/10"></div>
        </div>
      </div>
    </div>
  );
};

export default FloatingCube;
