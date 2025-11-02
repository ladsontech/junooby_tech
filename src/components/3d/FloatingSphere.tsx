import React from 'react';

interface FloatingSphereProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  delay?: number;
}

const FloatingSphere = ({ className = '', size = 'md', delay = 0 }: FloatingSphereProps) => {
  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64',
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 backdrop-blur-xl border border-primary/30 animate-float glow-blue ${className}`}
      style={{
        animationDelay: `${delay}s`,
        boxShadow: '0 0 80px rgba(var(--primary-rgb), 0.3), inset 0 0 40px rgba(var(--primary-rgb), 0.1)',
      }}
    >
      <div className="w-full h-full rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent animate-pulse-glow"></div>
    </div>
  );
};

export default FloatingSphere;
