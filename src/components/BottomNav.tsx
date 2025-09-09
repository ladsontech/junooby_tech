
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Globe, Smartphone, Phone, Users } from 'lucide-react';

const BottomNav = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/web', icon: Globe, label: 'Web' },
    { path: '/apps', icon: Smartphone, label: 'Apps' },
    { path: '/socials', icon: Users, label: 'Socials' },
    { path: '/contact', icon: Phone, label: 'Contact' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background/90 backdrop-blur-xl border-t border-border z-40 pb-[env(safe-area-inset-bottom)]">
      <div className="flex justify-around items-center py-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center py-1 px-2 min-w-0 transition-colors ${
                isActive(item.path)
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              <Icon size={18} className="mb-0.5" />
              <span className="text-[10px] leading-none font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
