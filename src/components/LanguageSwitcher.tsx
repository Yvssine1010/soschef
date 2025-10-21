import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

const LanguageSwitcher = () => {
  const { language, setLanguage, isRTL } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'العربية', flag: '🇲🇦' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode as any);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card/80 backdrop-blur-sm border border-border hover:bg-accent transition-all duration-300 hover-scale group"
        aria-label="Change language"
      >
        <Globe className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
        <span className="text-sm font-medium">{currentLanguage?.flag}</span>
        <span className="text-sm font-medium hidden sm:block">{currentLanguage?.name}</span>
      </button>

      {isOpen && (
        <div className={`absolute top-full mt-2 bg-card border border-border rounded-lg shadow-lg z-50 min-w-[160px] ${
          isRTL ? 'left-0' : 'right-0'
        }`}>
          <div className="py-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-accent transition-colors duration-200 ${
                  language === lang.code ? 'bg-primary/10 text-primary font-medium' : 'text-foreground'
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span>{lang.name}</span>
                {language === lang.code && (
                  <div className="ml-auto w-2 h-2 bg-primary rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default LanguageSwitcher;
