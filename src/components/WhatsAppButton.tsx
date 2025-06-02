import React from 'react';
const WhatsAppButton = () => {
  const phoneNumber = '+256789572007';
  const message = 'Hello! I would like to know more about your services.';
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  return;
};
export default WhatsAppButton;