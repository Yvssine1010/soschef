import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import type { Language } from '@/contexts/LanguageContext';

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
    setLanguage(langCode as Language);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="ghost"
        className="group h-11 w-9 gap-2 px-0 sm:w-auto sm:px-3"
        aria-expanded={isOpen}
        aria-label="Change language"
      >
        <Globe className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
        <span className="hidden text-sm font-medium sm:inline">{currentLanguage?.flag}</span>
        <span className="text-sm font-medium hidden sm:block">{currentLanguage?.name}</span>
      </Button>

      {isOpen && (
        <div className={`absolute top-full mt-2 bg-card border border-border rounded-lg shadow-lg z-50 min-w-[160px] ${
          isRTL ? 'left-0' : 'right-0'
        }`}>
          <div className="py-2">
            {languages.map((lang) => (
              <Button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                variant="ghost"
                className={`w-full justify-start gap-3 rounded-none px-4 py-2 text-sm transition-colors duration-200 ${
                  language === lang.code ? 'bg-primary/10 text-primary font-medium' : 'text-foreground'
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span>{lang.name}</span>
                {language === lang.code && (
                  <div className="ml-auto w-2 h-2 bg-primary rounded-full"></div>
                )}
              </Button>
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
