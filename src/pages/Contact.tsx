import Navigation from '@/components/Navigation';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import contactHero from '@/assets/contact-hero.jpg';
import contactOffice from '@/assets/contact-office.jpg';
import contactTeam from '@/assets/contact-team.jpg';

const Contact = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className={`min-h-screen bg-background ${isRTL ? 'rtl' : 'ltr'}`}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={contactHero} 
            alt="Contact Us" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-fade-in">
            {t('contact.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto animate-fade-in">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Email Card */}
            <div className="group bg-card border rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full luxury-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold mb-2">{t('contact.info.email')}</h3>
              <a 
                href="mailto:soschef2015@gmail.com" 
                className="text-primary hover:underline font-medium break-all"
              >
                soschef2015@gmail.com
              </a>
            </div>

            {/* Phone Card */}
            <div className="group bg-card border rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full luxury-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold mb-2">{t('contact.info.phones')}</h3>
              <div className="space-y-2">
                <a href="tel:+212520724513" className="block text-muted-foreground hover:text-primary transition-colors">
                  0520 724 513
                </a>
                <a href="tel:+212625819387" className="block text-muted-foreground hover:text-primary transition-colors">
                  0625 819 387
                </a>
                <a href="tel:+212664003163" className="block text-muted-foreground hover:text-primary transition-colors">
                  0664 003 163
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="group bg-card border rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full luxury-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold mb-2">{t('contact.info.address')}</h3>
              <p className="text-muted-foreground">
                {t('contact.info.addressDetails')}
              </p>
            </div>

            {/* Hours Card */}
            <div className="group bg-primary text-primary-foreground rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-4">{t('contact.hours.title')}</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>{t('contact.hours.weekdays')}</span>
                  <span className="font-medium">{t('contact.hours.weekdaysTime')}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('contact.hours.saturday')}</span>
                  <span className="font-medium">{t('contact.hours.saturdayTime')}</span>
                </div>
                <div className="flex justify-between opacity-75">
                  <span>{t('contact.hours.sunday')}</span>
                  <span className="font-medium">{t('contact.hours.sundayTime')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Image Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={contactOffice} 
                alt="Our Office" 
                className="rounded-3xl shadow-2xl w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Visit Our Modern Facilities
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Experience our state-of-the-art culinary training center equipped with professional-grade equipment and comfortable consultation spaces. Our team is ready to welcome you and discuss your culinary career aspirations.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="mailto:soschef2015@gmail.com"
                  className="inline-flex items-center gap-2 px-8 py-4 luxury-gradient text-primary-foreground font-semibold rounded-xl hover:scale-105 transition-transform"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
                <a 
                  href="tel:+212520724513"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-card border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Consultation Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Professional Consultation
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our expert advisors are here to guide you through your culinary journey. Schedule a consultation to discuss training programs, career opportunities in Canada, and personalized learning paths tailored to your goals.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-card rounded-xl border">
                  <MessageCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Expert Guidance</h4>
                    <p className="text-sm text-muted-foreground">Personalized career counseling</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-card rounded-xl border">
                  <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Easy Access</h4>
                    <p className="text-sm text-muted-foreground">Conveniently located center</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={contactTeam} 
                alt="Our Team" 
                className="rounded-3xl shadow-2xl w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Culinary Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us today to learn more about our programs and how we can help you achieve your culinary dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="mailto:soschef2015@gmail.com"
              className="inline-flex items-center gap-2 px-10 py-5 luxury-gradient text-primary-foreground font-bold rounded-xl hover:scale-105 transition-transform text-lg"
            >
              <Mail className="w-6 h-6" />
              Send us an Email
            </a>
            <a 
              href="tel:+212520724513"
              className="inline-flex items-center gap-2 px-10 py-5 bg-card border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-primary-foreground transition-all text-lg"
            >
              <Phone className="w-6 h-6" />
              Give us a Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
