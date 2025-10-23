import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { toast } = useToast();
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('contact.form.success.title'),
      description: t('contact.form.success.description'),
    });
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className={`min-h-screen bg-background pt-24 ${isRTL ? 'rtl' : 'ltr'}`}>
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="bg-card border rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">{t('contact.form.title')}</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('contact.form.name')} *</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('contact.form.namePlaceholder')}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">{t('contact.form.email')} *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('contact.form.emailPlaceholder')}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t('contact.form.phone')}</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t('contact.form.phonePlaceholder')}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="service">{t('contact.form.service')} *</Label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-lg bg-background"
                    >
                      <option value="">{t('contact.form.servicePlaceholder')}</option>
                      <option value="career">{t('contact.form.services.career')}</option>
                      <option value="training">{t('contact.form.services.training')}</option>
                      <option value="immigration">{t('contact.form.services.immigration')}</option>
                      <option value="custom">{t('contact.form.services.custom')}</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t('contact.form.message')} *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('contact.form.messagePlaceholder')}
                    rows={6}
                  />
                </div>

                <div className="bg-muted/50 border rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong>{t('contact.form.note.title')}:</strong> {t('contact.form.note.description')}
                  </p>
                </div>

                <Button type="submit" className="w-full luxury-gradient text-primary-foreground font-semibold py-6 text-lg">
                  <Send className="w-5 h-5 mr-2" />
                  {t('contact.form.submit')}
                </Button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card border rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-6">{t('contact.info.title')}</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg luxury-gradient">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">{t('contact.info.email')}</p>
                    <a href="mailto:contact@orientapro.com" className="text-sm text-muted-foreground hover:text-primary">
                      contact@orientapro.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg luxury-gradient">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">{t('contact.info.phones')}</p>
                    <div className="space-y-1">
                      <a href="tel:+212520724513" className="block text-sm text-muted-foreground hover:text-primary">
                        📞 0520 724 513
                      </a>
                      <a href="tel:+212625819387" className="block text-sm text-muted-foreground hover:text-primary">
                        📱 0625 819 387
                      </a>
                      <a href="tel:+212664003163" className="block text-sm text-muted-foreground hover:text-primary">
                        📱 0664 003 163
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg luxury-gradient">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">{t('contact.info.address')}</p>
                    <p className="text-sm text-muted-foreground">
                      {t('contact.info.addressDetails')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">{t('contact.hours.title')}</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>{t('contact.hours.weekdays')}</span>
                  <span>{t('contact.hours.weekdaysTime')}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('contact.hours.saturday')}</span>
                  <span>{t('contact.hours.saturdayTime')}</span>
                </div>
                <div className="flex justify-between opacity-75">
                  <span>{t('contact.hours.sunday')}</span>
                  <span>{t('contact.hours.sundayTime')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
