
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '+256789572007';
  const message = 'Hello! I would like to know more about your services.';

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-20 right-4 md:bottom-6 md:right-6 bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform duration-300" />
    </button>
  );
};

export default WhatsAppButton;
