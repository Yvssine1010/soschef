import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Award, Users, Globe } from 'lucide-react';
import Navigation from '@/components/Navigation';
import HeroSlider from '@/components/HeroSlider';
import chefWorking1 from '@/assets/chef-working-1.jpg';
import chefWorking2 from '@/assets/chef-working-2.jpg';
import chefWorking3 from '@/assets/chef-working-3.jpg';

const Home = () => {
  const heroSlides = [
    {
      image: chefWorking1,
      title: 'SOS CHEF',
      subtitle: 'Institution Marocaine Accréditée',
      description: 'Formation d\'excellence en hôtellerie-restauration depuis 2015'
    },
    {
      image: chefWorking2,
      title: 'Excellence Culinaire',
      subtitle: 'Diplômes Reconnus',
      description: 'Programmes de formation professionnelle de haut niveau'
    },
    {
      image: chefWorking3,
      title: 'Votre Avenir',
      subtitle: 'Commence Ici',
      description: 'Opportunités de carrière au Maroc et à l\'international'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Slider */}
      <HeroSlider slides={heroSlides} />

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Pourquoi Choisir SOS CHEF ?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Accréditation Officielle',
                description: 'Institution accréditée par l\'État Marocain depuis 2015'
              },
              {
                icon: CheckCircle2,
                title: 'Excellence Académique',
                description: 'Corps professoral passionné et hautement qualifié'
              },
              {
                icon: Globe,
                title: 'Reconnaissance Internationale',
                description: 'Diplômes reconnus au Maroc et à l\'international'
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center p-8 rounded-2xl border bg-card hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
                  <div className="inline-flex p-4 rounded-2xl luxury-gradient mb-6">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Notre Mission
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              SOS CHEF, fondée en 2015 par Mr Hassan Abandarat, est une institution marocaine dédiée à la formation d'excellence en hôtellerie-restauration. Nous combinons méthodes théoriques, pratiques et pédagogiques innovantes pour former les chefs de demain.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Calendrier Académique 2024-2025</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-card border rounded-xl">
                  <div className="w-12 h-12 rounded-full luxury-gradient flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Inscriptions</h4>
                    <p className="text-sm text-muted-foreground">Début septembre</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-card border rounded-xl">
                  <div className="w-12 h-12 rounded-full luxury-gradient flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Cours</h4>
                    <p className="text-sm text-muted-foreground">Début octobre à fin juillet</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">2015</div>
                <div className="text-sm text-muted-foreground">Année de fondation</div>
              </div>
              <div className="bg-card border rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Années d'expérience</div>
              </div>
              <div className="bg-card border rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Accrédité</div>
              </div>
              <div className="bg-card border rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">∞</div>
                <div className="text-sm text-muted-foreground">Opportunités</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formations Preview */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nos Formations
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Programmes de formation professionnelle en arts culinaires et services traiteurs
          </p>
          
          <Link to="/formations">
            <Button size="lg" className="luxury-gradient text-primary-foreground font-semibold px-8">
              Découvrir nos formations
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Rejoignez SOS CHEF
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Inscrivez-vous maintenant et commencez votre parcours vers l'excellence culinaire
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="px-8 py-6 text-lg font-semibold">
                S'inscrire maintenant
              </Button>
            </Link>
            <a href="tel:+212520724513">
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20 px-8 py-6 text-lg">
                Nous appeler
              </Button>
            </a>
          </div>
          <p className="mt-6 text-sm opacity-75">
            📍 23 Boulevard Sidi Abderrahmane, Casablanca, Maroc
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
