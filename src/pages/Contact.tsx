import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Import images
import chefWorking1 from '@/assets/chef-working-1.jpg';
import chefWorking2 from '@/assets/chef-working-2.jpg';
import chefTeam from '@/assets/chef-team.jpg';

const Contact = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className={`min-h-screen bg-gradient-to-b from-background via-background to-muted/20 pt-24 ${isRTL ? 'rtl' : 'ltr'}`}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge className="mb-4 luxury-gradient text-primary-foreground px-4 py-2">
            {t('contact.hero.subtitle')}
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            {t('contact.hero.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="max-w-7xl mx-auto px-4 py-12 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email Card */}
          <Card className="relative overflow-hidden border-2 hover:border-primary transition-all duration-300 group">
            <div className="absolute inset-0 luxury-gradient opacity-0 group-hover:opacity-5 transition-opacity" />
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 luxury-gradient rounded-xl">
                  <Mail className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{t('contact.contact.email')}</h3>
                  <p className="text-sm text-muted-foreground">{t('contact.contact.emailLabel')}</p>
                </div>
              </div>
              <a 
                href="mailto:soschef2015@gmail.com" 
                className="text-primary hover:underline font-semibold text-lg block"
              >
                soschef2015@gmail.com
              </a>
            </CardContent>
          </Card>

          {/* Phone Card */}
          <Card className="relative overflow-hidden border-2 hover:border-primary transition-all duration-300 group">
            <div className="absolute inset-0 luxury-gradient opacity-0 group-hover:opacity-5 transition-opacity" />
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 luxury-gradient rounded-xl">
                  <Phone className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{t('contact.contact.phones')}</h3>
                  <p className="text-sm text-muted-foreground">{t('contact.contact.phoneLabel')}</p>
                </div>
              </div>
              <div className="space-y-2">
                <a href="tel:+212520724513" className="block text-primary hover:underline font-semibold">
                  📞 0520 724 513
                </a>
                <a href="tel:+212625819387" className="block text-primary hover:underline font-semibold">
                  📱 0625 819 387
                </a>
                <a href="tel:+212664003163" className="block text-primary hover:underline font-semibold">
                  📱 0664 003 163
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Address Card */}
          <Card className="relative overflow-hidden border-2 hover:border-primary transition-all duration-300 group">
            <div className="absolute inset-0 luxury-gradient opacity-0 group-hover:opacity-5 transition-opacity" />
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 luxury-gradient rounded-xl">
                  <MapPin className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{t('contact.contact.address')}</h3>
                  <p className="text-sm text-muted-foreground">Visit us</p>
                </div>
              </div>
              <p className="text-muted-foreground whitespace-pre-line">
                {t('contact.contact.addressDetails')}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Image Sections */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* Expertise Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 ${isRTL ? 'lg:order-2' : ''}`}>
              <Badge className="mb-4">{t('contact.expertise.subtitle')}</Badge>
              <h2 className="text-4xl md:text-5xl font-bold">
                {t('contact.expertise.title')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('contact.expertise.description')}
              </p>
              <div className="flex items-center gap-2 text-primary font-semibold">
                <CheckCircle2 className="w-5 h-5" />
                <span>Accredited since 2015</span>
              </div>
            </div>
            <div className={`relative overflow-hidden rounded-2xl shadow-2xl ${isRTL ? 'lg:order-1' : ''}`}>
              <img 
                src={chefWorking1} 
                alt={t('contact.expertise.imageAlt')}
                className="w-full h-[500px] object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 luxury-gradient opacity-0 hover:opacity-10 transition-opacity" />
            </div>
          </div>
        </div>

        {/* Facilities Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={chefTeam} 
                alt={t('contact.facilities.imageAlt')}
                className="w-full h-[500px] object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 luxury-gradient opacity-0 hover:opacity-10 transition-opacity" />
            </div>
            <div className="space-y-6">
              <Badge className="mb-4">{t('contact.facilities.subtitle')}</Badge>
              <h2 className="text-4xl md:text-5xl font-bold">
                {t('contact.facilities.title')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('contact.facilities.description')}
              </p>
              <div className="flex items-center gap-2 text-primary font-semibold">
                <CheckCircle2 className="w-5 h-5" />
                <span>Professional equipment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Success Section */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 ${isRTL ? 'lg:order-2' : ''}`}>
              <Badge className="mb-4">{t('contact.success.subtitle')}</Badge>
              <h2 className="text-4xl md:text-5xl font-bold">
                {t('contact.success.title')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('contact.success.description')}
              </p>
              <div className="flex items-center gap-2 text-primary font-semibold">
                <CheckCircle2 className="w-5 h-5" />
                <span>Success stories worldwide</span>
              </div>
            </div>
            <div className={`relative overflow-hidden rounded-2xl shadow-2xl ${isRTL ? 'lg:order-1' : ''}`}>
              <img 
                src={chefWorking2} 
                alt={t('contact.success.imageAlt')}
                className="w-full h-[500px] object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 luxury-gradient opacity-0 hover:opacity-10 transition-opacity" />
            </div>
          </div>
        </div>
      </section>

      {/* Hours & CTA Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Opening Hours */}
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 luxury-gradient rounded-lg">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold">{t('contact.hours.title')}</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">{t('contact.hours.weekdays')}</span>
                  <span className="text-muted-foreground">{t('contact.hours.weekdaysTime')}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">{t('contact.hours.saturday')}</span>
                  <span className="text-muted-foreground">{t('contact.hours.saturdayTime')}</span>
                </div>
                <div className="flex justify-between items-center py-3 opacity-60">
                  <span>{t('contact.hours.sunday')}</span>
                  <span>{t('contact.hours.sundayTime')}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Card */}
          <Card className="luxury-gradient border-0 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
            <CardContent className="p-8 relative z-10 text-primary-foreground">
              <h3 className="text-2xl font-bold mb-2">{t('contact.cta.title')}</h3>
              <p className="text-muted-foreground/80 mb-6">{t('contact.cta.subtitle')}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  variant="secondary"
                  className="flex-1 hover:scale-105 transition-transform"
                >
                  <a href="tel:+212520724513">
                    <Phone className="w-4 h-4 mr-2" />
                    {t('contact.cta.call')}
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  className="flex-1 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all"
                >
                  <a href="mailto:soschef2015@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    {t('contact.cta.email')}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            {t('contact.modernContact.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('contact.modernContact.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button 
              size="lg"
              asChild
              className="luxury-gradient text-primary-foreground hover:scale-105 transition-transform"
            >
              <a href="tel:+212520724513">
                <Phone className="w-5 h-5 mr-2" />
                {t('contact.cta.call')}
              </a>
            </Button>
            <Button 
              size="lg"
              asChild
              variant="outline"
              className="hover:scale-105 transition-transform"
            >
              <a href="mailto:soschef2015@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                {t('contact.cta.email')}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
