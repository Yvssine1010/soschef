import Navigation from '@/components/Navigation';
import FlipGallery from '@/components/ui/flip-gallery';
import { Target, Eye, Award, Phone } from 'lucide-react';
import ownerImage from '@/assets/owner.png';
import chefPlatingImg from '@/assets/chef-plating.jpg';
import chefFlameImg from '@/assets/chef-flame.jpg';
import platingCloseupImg from '@/assets/plating-closeup.jpg';
import chefTeamImg from '@/assets/chef-team.jpg';
import homeCookingImg from '@/assets/home-cooking.jpg';

const About = () => {
  const galleryImages = [
    { title: 'Excellence Culinaire', url: chefPlatingImg },
    { title: 'Passion du Métier', url: chefFlameImg },
    { title: 'Art de la Présentation', url: platingCloseupImg },
    { title: 'Équipe Professionnelle', url: chefTeamImg },
    { title: 'Savoir-Faire', url: homeCookingImg }
  ];

  return (
    <div className="min-h-screen bg-background pt-24">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            À Propos d'ORIENTA PRO
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Votre partenaire de confiance pour l'excellence professionnelle dans l'hôtellerie et l'immigration
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-8">
            <div className="border-l-4 border-primary pl-6">
              <h2 className="text-3xl font-bold mb-4">Notre Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                ORIENTA PRO est un cabinet d'expertise professionnelle dédié à l'accompagnement 
                des professionnels et aspirants dans les secteurs de l'hôtellerie, de la restauration 
                et de l'immigration. Nous transformons les ambitions en réussites concrètes grâce à 
                notre expertise reconnue et notre approche personnalisée.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  icon: Target,
                  title: 'Mission',
                  description: 'Guider votre réussite professionnelle'
                },
                {
                  icon: Eye,
                  title: 'Vision',
                  description: 'Excellence et innovation constantes'
                },
                {
                  icon: Award,
                  title: 'Valeurs',
                  description: 'Intégrité, expertise et résultats'
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="text-center p-6 rounded-xl bg-card border">
                    <div className="inline-flex p-3 rounded-lg luxury-gradient mb-3">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <FlipGallery images={galleryImages} />
          </div>
        </div>

        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Notre Fondateur</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center">
                  <img 
                    src={ownerImage} 
                    alt="Fondateur d'Orienta Pro" 
                    className="rounded-2xl w-full max-w-sm shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Expert en Hôtellerie & Immigration</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Avec plus de 20 ans d'expérience dans l'industrie hôtelière internationale et l'accompagnement 
                    de professionnels dans leur parcours migratoire, notre fondateur met son expertise au service 
                    de votre réussite professionnelle.
                  </p>
                  <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg">
                    <Phone className="w-5 h-5 text-primary" />
                    <a href="tel:+212625819387" className="text-lg font-semibold hover:text-primary transition">
                      +212 625-819387
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted/50 rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Notre Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary">Secteur Hôtelier & Restauration</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-accent mt-1">✓</span>
                  <span>Formation professionnelle certifiée</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">✓</span>
                  <span>Placement en établissements prestigieux</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">✓</span>
                  <span>Accompagnement carrière personnalisé</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary">Immigration Professionnelle</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-accent mt-1">✓</span>
                  <span>Expertise en démarches administratives</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">✓</span>
                  <span>Accompagnement complet des dossiers</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">✓</span>
                  <span>Suivi personnalisé jusqu'à l'aboutissement</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Rejoignez Notre Communauté</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Des centaines de professionnels nous font confiance pour développer leur carrière et concrétiser leurs projets
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 luxury-gradient text-primary-foreground font-semibold rounded-lg hover:shadow-[var(--shadow-luxury)] transition-all text-lg"
          >
            Commencer votre parcours
          </a>
        </section>
      </div>
    </div>
  );
};

export default About;
