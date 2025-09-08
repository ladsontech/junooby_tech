import React, { useState, useEffect } from 'react';
const TypewriterEffect = () => {
  const services = ["Web Development", "Mobile App Design", "SEO Optimization", "Social Media Management", "Digital Marketing", "CCTV Installation", "Tech Solutions", "AI Integration", "Cloud Services"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(150);
  useEffect(() => {
    const handleType = () => {
      const current = services[currentIndex];
      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, -1));
        setTypeSpeed(75);
      } else {
        setCurrentText(prev => current.slice(0, prev.length + 1));
        setTypeSpeed(150);
      }
      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex(prev => (prev + 1) % services.length);
      }
    };
    const timer = setTimeout(handleType, typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, services, typeSpeed]);
  return <div className="relative">
      <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text font-bold text-2xl md:text-4xl lg:text-5xl animate-pulse-glow holographic text-glow text-cyan-200">
        {currentText}
        <span className="animate-pulse text-blue-400 ml-1 glow-blue">|</span>
      </span>
      
      {/* Glowing underline effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 opacity-70 animate-pulse glow-blue rounded-full"></div>
    </div>;
};
export default TypewriterEffect;