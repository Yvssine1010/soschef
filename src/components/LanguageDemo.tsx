import { useLanguage } from '@/contexts/LanguageContext';

const LanguageDemo = () => {
  const { language, t } = useLanguage();

  return (
    <div className="fixed top-20 right-4 z-40 bg-card/90 backdrop-blur-sm border border-border rounded-lg p-4 shadow-lg">
      <div className="text-sm text-muted-foreground mb-2">
        Current Language: <span className="font-semibold text-primary">{language.toUpperCase()}</span>
      </div>
      <div className="space-y-1 text-xs">
        <div>• {t('nav.home')}</div>
        <div>• {t('nav.formations')}</div>
        <div>• {t('nav.about')}</div>
        <div>• {t('nav.diplomes')}</div>
        <div>• {t('nav.contact')}</div>
      </div>
    </div>
  );
};

export default LanguageDemo;
