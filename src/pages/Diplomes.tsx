import Navigation from '@/components/Navigation';
import { Award, Globe, CheckCircle, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/sos-chef-logo.jpg';
import immigrationOpportunities from '@/assets/immigration-opportunities.jpg';
import canadaFlag from '@/assets/canada-flag.jpg';

const Diplomes = () => {
  const { t, isRTL } = useLanguage();
  
  const diplomas = Array.isArray(t('diplomas.list')) ? t('diplomas.list') : [];
  const careers = Array.isArray(t('diplomas.careers')) ? t('diplomas.careers') : [];

  return (
    <div className={`min-h-screen bg-background ${isRTL ? 'rtl' : 'ltr'}`}>
      <Navigation />
      
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <img src={logo} alt="SOS CHEF Accrédité" className="h-32 w-32" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('diplomas.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('diplomas.subtitle')}
            </p>
          </header>

          {/* Recognition Section */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl p-10 text-center">
                <Globe className="w-16 h-16 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">{t('diplomas.recognition.international.title')}</h3>
                <p className="opacity-90">
                  {t('diplomas.recognition.international.description')}
                </p>
              </div>
              <div className="bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground rounded-2xl p-10 text-center">
                <Award className="w-16 h-16 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">{t('diplomas.recognition.official.title')}</h3>
                <p className="opacity-90">
                  {t('diplomas.recognition.official.description')}
                </p>
              </div>
            </div>
          </section>

          {/* Diplomas Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">{t('diplomas.section.title')}</h2>
              <p className="text-lg text-muted-foreground">
                {t('diplomas.section.subtitle')}
              </p>
            </div>

            <div className="space-y-8">
              {diplomas.map((diploma, index) => (
                <div key={index} className="bg-card border rounded-2xl p-8 hover:shadow-[var(--shadow-elegant)] transition-all">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="p-4 rounded-xl luxury-gradient flex-shrink-0">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">{diploma.title}</h3>
                      <div className="flex items-center gap-2 text-primary font-semibold mb-4">
                        <CheckCircle className="w-5 h-5" />
                        <span>{diploma.recognition}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="ml-20">
                    <h4 className="font-bold mb-3">{t('diplomas.opportunities.title')}:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {Array.isArray(diploma.opportunities) ? diploma.opportunities.map((opportunity, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-muted/50 p-3 rounded-lg">
                          <Briefcase className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">{opportunity}</span>
                        </div>
                      )) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Employment Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-muted/50 to-card border rounded-2xl p-10">
              <div className="text-center mb-10">
                <h2 className="text-4xl font-bold mb-4">{t('diplomas.employment.title')}</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {t('diplomas.employment.subtitle')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {careers.map((career, index) => (
                  <div key={index} className="bg-card border rounded-xl p-6 text-center hover:shadow-lg transition-all">
                    <Briefcase className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <h4 className="font-semibold">{career}</h4>
                  </div>
                ))}
              </div>

              <div className="bg-primary text-primary-foreground rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-3">🌟 {t('diplomas.opportunities.seize.title')}</h3>
                <p className="text-lg opacity-90 mb-6">
                  {t('diplomas.opportunities.seize.description')}
                </p>
                <div className="flex flex-wrap gap-4 justify-center mb-8">
                  {Array.isArray(t('diplomas.opportunities.countries')) ? t('diplomas.opportunities.countries').map((country, index) => (
                    <span key={index} className="px-4 py-2 bg-white/20 rounded-full text-sm font-semibold">
                      {country}
                    </span>
                  )) : null}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <img 
                    src={immigrationOpportunities} 
                    alt={t('diplomas.opportunities.images.immigration')} 
                    className="rounded-lg w-full h-64 object-cover shadow-lg"
                  />
                  <img 
                    src={canadaFlag} 
                    alt={t('diplomas.opportunities.images.canada')} 
                    className="rounded-lg w-full h-64 object-cover shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-card border rounded-2xl p-10">
              <h3 className="text-3xl font-bold mb-4">{t('diplomas.cta.title')}</h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                {t('diplomas.cta.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/formations">
                  <Button size="lg" className="luxury-gradient text-primary-foreground font-semibold px-8">
                    {t('diplomas.cta.formations')}
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="px-8">
                    {t('diplomas.cta.contact')}
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Diplomes;
