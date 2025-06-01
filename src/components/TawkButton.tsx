
import React from 'react';
import { MessageCircle } from 'lucide-react';

const TawkButton = () => {
  const handleTawkClick = () => {
    // Tawk.to will handle the chat opening automatically when clicked
    if (window.Tawk_API && window.Tawk_API.maximize) {
      window.Tawk_API.maximize();
    }
  };

  return (
    <button
      onClick={handleTawkClick}
      className="fixed bottom-20 md:bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
      aria-label="Open live chat"
    >
      <MessageCircle size={24} />
    </button>
  );
};

export default TawkButton;
