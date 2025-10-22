import { GraduationCap, Clock, Award, Users, ChefHat, Cake, Utensils, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/use-scroll-animation';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/formations-hero.jpg';
import chefTeaching from '@/assets/chef-teaching.jpg';
import pastryCreation from '@/assets/pastry-creation.jpg';
import cateringService from '@/assets/catering-service.jpg';

const Formations = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: programsRef, isVisible: programsVisible } = useScrollAnimation();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();
  const { t, isRTL } = useLanguage();

  const { refs: programRefs, visibleItems: programVisible } = useStaggeredAnimation(4, 200);

  const artsPrograms = [
    {
      title: t('formations.programs.dqp.title'),
      duration: t('formations.programs.dqp.duration'),
      level: t('formations.programs.dqp.level'),
      icon: ChefHat,
      description: t('formations.programs.dqp.description'),
      highlights: t('formations.programs.dqp.highlights')
    },
    {
      title: t('formations.programs.dt.title'),
      duration: t('formations.programs.dt.duration'),
      level: t('formations.programs.dt.level'),
      icon: Utensils,
      description: t('formations.programs.dt.description'),
      highlights: t('formations.programs.dt.highlights')
    },
    {
      title: t('formations.programs.dts.title'),
      duration: t('formations.programs.dts.duration'),
      level: t('formations.programs.dts.level'),
      icon: Award,
      description: t('formations.programs.dts.description'),
      highlights: t('formations.programs.dts.highlights')
    },
    {
      title: t('formations.programs.advanced.title'),
      duration: t('formations.programs.advanced.duration'),
      level: t('formations.programs.advanced.level'),
      icon: Cake,
      description: t('formations.programs.advanced.description'),
      highlights: t('formations.programs.advanced.highlights')
    }
  ];

  return (
    <div className={`min-h-screen ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`relative h-[60vh] sm:h-[70vh] lg:h-[80vh] flex items-center justify-center overflow-hidden transition-all duration-1000 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Formations Culinaires" 
            className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full mb-6 transition-all duration-1000 delay-300 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              <GraduationCap className="w-5 h-5 animate-pulse" />
              <span className="text-sm font-medium">{t('formations.hero.badge')}</span>
            </div>
            <h1 className={`text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight transition-all duration-1000 delay-500 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              {t('formations.hero.title').split(' ').map((word, index) => 
                word === 'Excellence' || word === 'Excellence' || word === 'التميز' ? 
                  <span key={index} className="text-secondary text-shimmer">{word} </span> : 
                  <span key={index}>{word} </span>
              )}
            </h1>
            <p className={`text-lg sm:text-xl lg:text-2xl mb-8 text-gray-200 transition-all duration-1000 delay-700 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              {t('formations.hero.subtitle')}
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-1000 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 hover-scale glow ripple">
                  {t('formations.hero.cta.brochure')}
                </Button>
              </Link>
              <a href="tel:0520724513">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary hover-scale glass">
                  {t('formations.hero.cta.contact')}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Arts Culinaires Section */}
      <section 
        ref={programsRef}
        className={`py-12 sm:py-20 lg:py-24 bg-background transition-all duration-1000 ${
          programsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 delay-300 ${
            programsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {t('formations.programs.title').split(' ').map((word, index) => 
                word === 'Culinaires' || word === 'الطبخ' ? 
                  <span key={index} className="text-primary gradient-text">{word} </span> : 
                  <span key={index}>{word} </span>
              )}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('formations.programs.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {artsPrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <div 
                  key={index}
                  ref={el => programRefs.current[index] = el}
                  className={`group relative bg-card border rounded-2xl p-6 sm:p-8 service-card transition-all duration-1000 ${
                    programVisible[index] 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-10 scale-95'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-primary group-hover:scale-110 group-hover:text-secondary transition-all duration-300" />
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                        <Clock className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="text-xs font-medium px-3 py-1 bg-secondary/20 text-secondary rounded-full group-hover:bg-secondary group-hover:text-primary transition-all duration-300">
                        {program.level}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{program.title}</h3>
                  <p className="text-muted-foreground mb-6 group-hover:text-foreground transition-colors duration-300">{program.description}</p>

                  <div className="space-y-2">
                    {Array.isArray(program.highlights) ? program.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 group/item">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover/item:scale-150 group-hover/item:bg-secondary transition-all duration-300" />
                        <span className="text-sm group-hover/item:text-primary transition-colors duration-300">{highlight}</span>
                      </div>
                    )) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Traiteurs Section */}
      <section 
        ref={servicesRef}
        className={`py-12 sm:py-20 lg:py-24 bg-background transition-all duration-1000 ${
          servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className={`transition-all duration-1000 delay-300 ${
              servicesVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-10 scale-95'
            }`}>
              <div className="relative group">
              <img 
                src={cateringService} 
                alt="Services Traiteurs" 
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-2xl hover-scale transition-all duration-700"
              />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              </div>
            </div>
            <div className={`space-y-6 transition-all duration-1000 delay-500 ${
              servicesVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                {t('formations.services.title').split(' ').map((word, index) => 
                  word === 'Traiteurs' || word === 'الطباخين' ? 
                    <span key={index} className="text-primary gradient-text">{word} </span> : 
                    <span key={index}>{word} </span>
                )}
              </h2>
              
              <div className="bg-card border rounded-xl p-6 mb-6 hover-scale service-card">
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 group">
                    <Clock className="w-5 h-5 text-primary group-hover:scale-110 group-hover:text-secondary transition-all duration-300" />
                    <span className="font-medium group-hover:text-primary transition-colors duration-300">{t('formations.services.duration')}</span>
                  </div>
                  <div className="flex items-center gap-2 group">
                    <GraduationCap className="w-5 h-5 text-primary group-hover:scale-110 group-hover:text-secondary transition-all duration-300" />
                    <span className="font-medium group-hover:text-primary transition-colors duration-300">{t('formations.services.level')}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {(() => {
                  const highlights = t('formations.services.highlights');
                  return Array.isArray(highlights) ? highlights.map((highlight: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3 group">
                      <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                        <span className="text-xs font-bold text-secondary group-hover:text-primary transition-colors duration-300">{idx + 1}</span>
                      </div>
                      <span className="text-sm sm:text-base group-hover:text-primary transition-colors duration-300">{highlight}</span>
                    </div>
                  )) : null;
                })()}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaRef}
        className={`py-12 sm:py-20 lg:py-24 bg-gradient-to-br from-primary via-primary to-primary/90 text-white relative overflow-hidden transition-all duration-1000 ${
          ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-1000 delay-300 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            {t('formations.cta.title').split(' ').map((word, index) => 
              word === 'Parcours' || word === 'المسار' ? 
                <span key={index} className="text-secondary text-shimmer">{word} </span> : 
                <span key={index}>{word} </span>
            )}
          </h2>
          <p className={`text-lg sm:text-xl mb-8 text-white/90 transition-all duration-1000 delay-500 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            {t('formations.cta.subtitle')}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg px-8 py-6 hover-scale glow ripple">
                {t('formations.cta.register')}
              </Button>
            </Link>
            <a href="tel:0520724513">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary hover-scale glass">
                {t('formations.cta.call')}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Formations;