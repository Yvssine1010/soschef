import Navigation from '@/components/Navigation';
import { Award, Globe, CheckCircle, Briefcase, Users, Heart, Building2, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/sos-chef-logo.jpg';
import immigrationOpportunities from '@/assets/immigration-opportunities.jpg';
import canadaFlag from '@/assets/canada-flag.jpg';
import sosServiceTeam from '@/assets/sos-service-team.jpg';
import elderlyCare from '@/assets/elderly-care.jpg';
import hospitalityStaff from '@/assets/hospitality-staff.jpg';

const Diplomes = () => {
  const { t, isRTL } = useLanguage();
  
  const diplomasList = t('diplomas.list');
  const diplomas = (Array.isArray(diplomasList) ? diplomasList : []) as any[];
  const careersList = t('diplomas.careers');
  const careers = (Array.isArray(careersList) ? careersList : []) as any[];

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
                  {(() => {
                    const countries = t('diplomas.opportunities.countries');
                    return Array.isArray(countries) ? countries.map((country: string, index: number) => (
                      <span key={index} className="px-4 py-2 bg-white/20 rounded-full text-sm font-semibold">
                        {country}
                      </span>
                    )) : null;
                  })()}
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
          <section className="text-center mb-20">
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

          {/* SOS SERVICE Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-8 md:p-12 border-2 border-primary/20">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Users className="w-4 h-4" />
                {t('diplomas.sosService.badge')}
              </div>

              {/* Header */}
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  {t('diplomas.sosService.title')}
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
                  {t('diplomas.sosService.subtitle')}
                </p>
                <p className="text-lg leading-relaxed max-w-4xl mx-auto">
                  {t('diplomas.sosService.intro')}
                </p>
              </div>

              {/* Hero Image */}
              <div className="mb-12 overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={sosServiceTeam} 
                  alt="SOS Service Team"
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Specialists Grid */}
              <div className="mb-12">
                <h3 className="text-3xl font-bold text-center mb-8">{t('diplomas.sosService.specialists.title')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Elderly Care */}
                  <div className="group bg-card rounded-2xl p-6 border-2 border-border hover:border-primary transition-all hover:shadow-[var(--shadow-elegant)]">
                    <div className="relative mb-6 overflow-hidden rounded-xl">
                      <img 
                        src={elderlyCare} 
                        alt="Elderly Care"
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                        <Heart className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h4 className="text-xl font-bold mb-3">{t('diplomas.sosService.specialists.elderly.title')}</h4>
                    <p className="text-muted-foreground">
                      {t('diplomas.sosService.specialists.elderly.description')}
                    </p>
                  </div>

                  {/* Domestic Staff */}
                  <div className="group bg-card rounded-2xl p-6 border-2 border-border hover:border-secondary transition-all hover:shadow-[var(--shadow-elegant)]">
                    <div className="relative mb-6 overflow-hidden rounded-xl">
                      <div className="w-full h-48 bg-gradient-to-br from-secondary/20 to-secondary/40 flex items-center justify-center">
                        <Users className="w-20 h-20 text-secondary" />
                      </div>
                    </div>
                    <h4 className="text-xl font-bold mb-3">{t('diplomas.sosService.specialists.domestic.title')}</h4>
                    <p className="text-muted-foreground">
                      {t('diplomas.sosService.specialists.domestic.description')}
                    </p>
                  </div>

                  {/* Hospitality Staff */}
                  <div className="group bg-card rounded-2xl p-6 border-2 border-border hover:border-accent transition-all hover:shadow-[var(--shadow-elegant)]">
                    <div className="relative mb-6 overflow-hidden rounded-xl">
                      <img 
                        src={hospitalityStaff} 
                        alt="Hospitality Staff"
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                        <Building2 className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h4 className="text-xl font-bold mb-3">{t('diplomas.sosService.specialists.hospitality.title')}</h4>
                    <p className="text-muted-foreground">
                      {t('diplomas.sosService.specialists.hospitality.description')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Commitment Section */}
              <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 mb-8 border">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{t('diplomas.sosService.commitment.title')}</h3>
                    <p className="text-lg mb-4">{t('diplomas.sosService.commitment.description')}</p>
                    <p className="text-muted-foreground mb-4 italic">
                      "{t('diplomas.sosService.commitment.trust')}"
                    </p>
                    <p className="text-muted-foreground">
                      {t('diplomas.sosService.commitment.process')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Guarantee Section */}
              <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-2xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-white/20 rounded-full">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{t('diplomas.sosService.guarantee.title')}</h3>
                <p className="text-lg opacity-90 mb-2">{t('diplomas.sosService.guarantee.description')}</p>
                <p className="text-lg font-semibold">{t('diplomas.sosService.guarantee.coverage')}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Diplomes;
