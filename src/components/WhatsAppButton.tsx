import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  // Show button after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = '212625819387'; // Morocco country code + 0625 819 387
    const message = encodeURIComponent(t('whatsapp.message'));
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="group relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover-scale glow ripple"
        aria-label={t('whatsapp.tooltip')}
        title={t('whatsapp.tooltip')}
      >
        {/* WhatsApp Icon */}
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
        
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          {t('whatsapp.tooltip')}
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div>
        
        {/* Notification Badge */}
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
          !
        </div>
      </button>
    </div>
  );
};

export default WhatsAppButton;
