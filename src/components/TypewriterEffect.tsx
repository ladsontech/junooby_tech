import React, { useState, useEffect } from 'react';
const TypewriterEffect = () => {
  const services = ["Web Development", "Mobile App Design", "SEO Optimization", "Social Media Management", "Digital Marketing", "CCTV Installation", "Tech Solutions"];
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
  return <span className="text-blue-600 text-5xl my-0 py-[20px]">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>;
};
export default TypewriterEffect;