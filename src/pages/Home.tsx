import HeroSlider from '@/components/HeroSlider';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { GraduationCap, Globe, Users, Award, ChefHat, Utensils } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/use-scroll-animation';
import { useLanguage } from '@/contexts/LanguageContext';
import accreditationSeal from '@/assets/accreditation-seal.jpg';
import studentsTraining from '@/assets/students-training.jpg';
import graduationCeremony from '@/assets/graduation-ceremony.jpg';
import pastryExcellence from '@/assets/pastry-excellence.jpg';
import chefPlating from '@/assets/chef-plating.jpg';
import chefTeam from '@/assets/chef-team.jpg';

const Home = () => {
  const { ref: accreditationRef, isVisible: accreditationVisible } = useScrollAnimation();
  const { ref: excellenceRef, isVisible: excellenceVisible } = useScrollAnimation();
  const { ref: specializationsRef, isVisible: specializationsVisible } = useScrollAnimation();
  const { ref: internationalRef, isVisible: internationalVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();
  const { t, isRTL } = useLanguage();

  const { refs: specializationRefs, visibleItems: specializationVisible } = useStaggeredAnimation(3, 200);

  return (
    <div className={`min-h-screen ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Accreditation Section - Very Prominent */}
      <section 
        ref={accreditationRef}
        className={`relative py-24 overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent transition-all duration-1000 ${
          accreditationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`text-white space-y-6 transition-all duration-1000 delay-300 ${
              accreditationVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                {t('accreditation.title').split(' ').map((word, index) => 
                  word === 'Accréditée' || word === 'Accredited' || word === 'معتمدة' ? 
                    <span key={index} className="text-secondary text-shimmer">{word} </span> : 
                    <span key={index}>{word} </span>
                )}
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed opacity-95">
                {t('accreditation.subtitle')}
              </p>
              <div className="space-y-4 pt-4">
                <div className={`flex items-start gap-3 group ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Award className="w-6 h-6 text-secondary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-lg group-hover:text-secondary transition-colors duration-300">{t('accreditation.diplomas')}</p>
                </div>
                <div className={`flex items-start gap-3 group ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <GraduationCap className="w-6 h-6 text-secondary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-lg group-hover:text-secondary transition-colors duration-300">{t('accreditation.faculty')}</p>
                </div>
                <div className={`flex items-start gap-3 group ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Globe className="w-6 h-6 text-secondary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-lg group-hover:text-secondary transition-colors duration-300">{t('accreditation.opportunities')}</p>
                </div>
              </div>
              <Link to="/diplomes">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg px-8 py-6 mt-4 hover-scale glow ripple">
                  {t('accreditation.cta')}
                </Button>
              </Link>
            </div>
            <div className={`relative transition-all duration-1000 delay-500 ${
              accreditationVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-95'
            }`}>
              <div className="absolute inset-0 bg-secondary/20 rounded-full blur-3xl pulse-slow"></div>
              <img 
                src={accreditationSeal} 
                alt="Établissement Accrédité par le Gouvernement Marocain" 
                className="relative w-full max-w-md mx-auto drop-shadow-2xl hover-scale transition-all duration-500 float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Excellence in Training Section */}
      <section 
        ref={excellenceRef}
        className={`py-20 bg-gradient-to-b from-background to-muted/30 transition-all duration-1000 ${
          excellenceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${
            excellenceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('excellence.title').split(' ').map((word, index) => 
                word === 'Excellence' || word === 'Excellence' || word === 'التميز' ? 
                  <span key={index} className="text-primary gradient-text">{word} </span> : 
                  <span key={index}>{word} </span>
              )}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('excellence.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className={`relative group overflow-hidden rounded-2xl shadow-2xl h-[400px] hover-scale transition-all duration-1000 delay-500 ${
              excellenceVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-10 scale-95'
            }`}>
              <img 
                src={studentsTraining} 
                alt="Étudiants en formation pratique dans les cuisines professionnelles SOS CHEF" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-bold mb-2 group-hover:text-secondary transition-colors duration-300">{t('excellence.practical')}</h3>
                <p className="text-lg opacity-90 group-hover:opacity-100 transition-opacity duration-300">{t('excellence.practicalDesc')}</p>
              </div>
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className={`relative group overflow-hidden rounded-2xl shadow-2xl h-[400px] hover-scale transition-all duration-1000 delay-700 ${
              excellenceVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-95'
            }`}>
              <img 
                src={graduationCeremony} 
                alt="Cérémonie de remise des diplômes - Diplômés SOS CHEF en tenue professionnelle" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-bold mb-2 group-hover:text-secondary transition-colors duration-300">{t('excellence.success')}</h3>
                <p className="text-lg opacity-90 group-hover:opacity-100 transition-opacity duration-300">{t('excellence.successDesc')}</p>
              </div>
              <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations Showcase */}
      <section 
        ref={specializationsRef}
        className={`py-20 bg-gradient-to-br from-primary/5 to-accent/5 transition-all duration-1000 ${
          specializationsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${
            specializationsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('specializations.title').split(' ').map((word, index) => 
                word === 'Spécialisations' || word === 'Specializations' || word === 'تخصصاتنا' ? 
                  <span key={index} className="text-primary gradient-text">{word} </span> : 
                  <span key={index}>{word} </span>
              )}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('specializations.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: pastryExcellence,
                title: t('specializations.pastry'),
                description: t('specializations.pastryDesc'),
                icon: ChefHat,
                alt: "Formation en pâtisserie professionnelle - Viennoiseries et pains artisanaux"
              },
              {
                image: chefPlating,
                title: t('specializations.culinary'),
                description: t('specializations.culinaryDesc'),
                icon: Utensils,
                alt: "Formation en arts culinaires - Chef préparant une assiette gastronomique"
              },
              {
                image: chefTeam,
                title: t('specializations.management'),
                description: t('specializations.managementDesc'),
                icon: Users,
                alt: "Formation en gestion hôtelière - Équipe de chefs professionnels"
              }
            ].map((specialization, index) => {
              const Icon = specialization.icon;
              return (
                <div 
                  key={index}
                  ref={el => specializationRefs.current[index] = el}
                  className={`group relative overflow-hidden rounded-2xl shadow-xl bg-card hover-scale service-card transition-all duration-1000 ${
                    specializationVisible[index] 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-10 scale-95'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
              <div className="h-64 overflow-hidden">
                <img 
                      src={specialization.image} 
                      alt={specialization.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                    <div className="flex items-center gap-3 mb-3 group-hover:gap-4 transition-all duration-300">
                      <Icon className="w-8 h-8 text-primary group-hover:scale-110 group-hover:text-secondary transition-all duration-300" />
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">{specialization.title}</h3>
                </div>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {specialization.description}
                </p>
              </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              );
            })}
          </div>

          <div className={`text-center mt-12 transition-all duration-1000 delay-1000 ${
            specializationsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <Link to="/formations">
              <Button size="lg" className="luxury-gradient text-primary-foreground font-bold text-lg px-10 py-6 hover-scale glow ripple">
                {t('specializations.cta')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* International Opportunities */}
      <section 
        ref={internationalRef}
        className={`py-20 bg-gradient-to-br from-accent/10 to-primary/10 transition-all duration-1000 ${
          internationalVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 transition-all duration-1000 delay-300 ${
              internationalVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors duration-300">
                <span className="text-primary font-semibold">{t('international.badge')}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                {t('international.title').split(' ').map((word, index) => 
                  word === 'Canada' || word === 'Canada' || word === 'كندا' ? 
                    <span key={index} className="text-primary gradient-text">{word} </span> : 
                    <span key={index}>{word} </span>
                )}
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {t('international.subtitle')}
              </p>
              <ul className="space-y-3">
                {[
                  t('international.immigration'),
                  t('international.network'),
                  t('international.recognized')
                ].map((item, index) => (
                  <li key={index} className={`flex items-center gap-3 group ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 group-hover:bg-secondary transition-all duration-300"></div>
                    <span className="text-lg group-hover:text-primary transition-colors duration-300">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/diplomes">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 mt-4 hover-scale glow">
                  {t('international.cta')}
                </Button>
              </Link>
            </div>
            <div className={`relative transition-all duration-1000 delay-500 ${
              internationalVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-95'
            }`}>
              <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl pulse-slow"></div>
              <div className="relative grid grid-cols-2 gap-4">
                <img 
                  src={chefPlating} 
                  alt="Opportunités de carrière internationale pour les diplômés" 
                  className="rounded-2xl shadow-xl hover-scale transition-all duration-500 float"
                />
                <img 
                  src={chefTeam} 
                  alt="Réseau professionnel international en hôtellerie" 
                  className="rounded-2xl shadow-xl hover-scale transition-all duration-500 mt-8 float-delayed"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        ref={ctaRef}
        className={`py-24 bg-gradient-to-r from-primary via-primary/95 to-accent text-white relative overflow-hidden transition-all duration-1000 ${
          ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 delay-300 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            {t('cta.title').split(' ').map((word, index) => 
              word === 'Aventure' || word === 'Adventure' || word === 'مغامرتك' ? 
                <span key={index} className="text-secondary text-shimmer">{word} </span> : 
                <span key={index}>{word} </span>
            )}
          </h2>
          <p className={`text-xl md:text-2xl mb-10 opacity-95 transition-all duration-1000 delay-500 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            {t('cta.subtitle')}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg px-10 py-6 hover-scale glow ripple">
                {t('cta.register')}
              </Button>
            </Link>
            <Link to="/formations">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 font-semibold text-lg px-10 py-6 hover-scale glass">
                {t('cta.discover')}
              </Button>
            </Link>
          </div>
          <p className={`mt-8 text-lg opacity-90 transition-all duration-1000 delay-1000 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            {t('cta.phone')}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
