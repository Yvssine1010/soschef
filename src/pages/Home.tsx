import { Link } from 'react-router-dom';
import { DotScreenShader } from '@/components/ui/dot-shader-background';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Shield, TrendingUp, Users } from 'lucide-react';
import Navigation from '@/components/Navigation';
import chefWorking1 from '@/assets/chef-working-1.jpg';
import chefWorking2 from '@/assets/chef-working-2.jpg';
import chefWorking3 from '@/assets/chef-working-3.jpg';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <DotScreenShader />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white mix-blend-exclusion">
            Votre Avenir Professionnel <br />
            <span className="text-secondary">Commence Ici</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-white/90 mix-blend-exclusion max-w-3xl mx-auto leading-relaxed">
            Conseil, Orientation, Formation & Recrutement
            <br />
            <span className="text-lg">Expertise Hôtellerie • Restauration • Immigration</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button size="lg" className="luxury-gradient text-primary-foreground font-semibold px-8 py-6 text-lg">
                Découvrir nos services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Pourquoi Nous Choisir ?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Confidentialité',
                description: 'Protection totale de vos données personnelles et professionnelles'
              },
              {
                icon: CheckCircle2,
                title: 'Expertise',
                description: 'Des professionnels qualifiés dans les secteurs hôtelier et immigration'
              },
              {
                icon: TrendingUp,
                title: 'Résultats',
                description: 'Un accompagnement personnalisé jusqu\'à l\'atteinte de vos objectifs'
              },
              {
                icon: Users,
                title: 'Support',
                description: 'Une équipe dédiée disponible tout au long de votre parcours'
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

      {/* Excellence Gallery */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            L'Excellence Culinaire en Action
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Découvrez le savoir-faire et la passion qui animent les professionnels que nous formons et accompagnons
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl aspect-[3/4] shadow-lg hover:shadow-[var(--shadow-elegant)] transition-all duration-500">
              <img 
                src={chefWorking1} 
                alt="Chef en plein travail de précision" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Précision & Technique</h3>
                  <p className="text-sm text-white/90">L'art du dressage au plus haut niveau</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl aspect-[3/4] shadow-lg hover:shadow-[var(--shadow-elegant)] transition-all duration-500">
              <img 
                src={chefWorking2} 
                alt="Chef professionnel au travail" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Maîtrise Professionnelle</h3>
                  <p className="text-sm text-white/90">Excellence et rigueur culinaire</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl aspect-[3/4] shadow-lg hover:shadow-[var(--shadow-elegant)] transition-all duration-500">
              <img 
                src={chefWorking3} 
                alt="Art du dressage gastronomique" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Créativité Culinaire</h3>
                  <p className="text-sm text-white/90">Innovation et présentation raffinée</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nos Services d'Excellence
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Des solutions complètes pour votre développement professionnel dans l'hôtellerie et l'immigration
          </p>
          
          <Link to="/services">
            <Button size="lg" className="luxury-gradient text-primary-foreground font-semibold px-8">
              Voir tous nos services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à Transformer Votre Carrière ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contactez-nous dès aujourd'hui pour une consultation personnalisée
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="px-8 py-6 text-lg font-semibold">
              Demander une consultation
            </Button>
          </Link>
          <p className="mt-6 text-sm opacity-75">
            Tous nos services sont payants et font l'objet d'un devis personnalisé
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
