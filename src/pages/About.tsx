import Navigation from '@/components/Navigation';
import owner from '@/assets/owner.png';
import logo from '@/assets/sos-chef-logo.jpg';
import { Phone, Mail, MapPin, Award, Users, Target, Heart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <img src={logo} alt="SOS CHEF" className="h-32 w-32" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Qui Sommes-nous ?
            </h1>
            <p className="text-2xl text-primary font-semibold mb-2">
              SOS CHEF - Institution Marocaine Accréditée
            </p>
            <p className="text-xl text-muted-foreground">
              Formation d'excellence en hôtellerie-restauration depuis 2015
            </p>
          </header>

          {/* Main Content */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-card to-muted/30 border rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Notre Histoire</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <Award className="w-6 h-6 text-primary" />
                      Fondation & Accréditation
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Fondée en 2015 au Maroc par Mr Hassan Abandarat, SOS CHEF est une institution accréditée 
                      par l'État Marocain, reconnue pour son excellence dans la formation en hôtellerie-restauration.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <Target className="w-6 h-6 text-primary" />
                      Notre Mission
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Offrir une formation d'excellence combinant méthodes théoriques, pratiques et pédagogiques 
                      innovantes. Nous nous concentrons sur la créativité, l'innovation et le savoir-être professionnel.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <Users className="w-6 h-6 text-primary" />
                      Notre Équipe
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Un corps professoral passionné et hautement qualifié, dédié à votre réussite. 
                      Nos formateurs sont des experts reconnus dans leurs domaines.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <Heart className="w-6 h-6 text-primary" />
                      Nos Modalités
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Formation en présentiel dans nos locaux équipés et en ligne pour les cours théoriques. 
                      Flexibilité maximale pour s'adapter à votre rythme.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-primary-foreground rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Calendrier Académique</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  <div>
                    <div className="text-4xl mb-2">📝</div>
                    <h4 className="font-bold mb-1">Inscriptions</h4>
                    <p className="opacity-90">Début septembre</p>
                  </div>
                  <div>
                    <div className="text-4xl mb-2">📚</div>
                    <h4 className="font-bold mb-1">Cours</h4>
                    <p className="opacity-90">Début octobre à fin juillet</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Vision & Values */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Nos Axes de Formation</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: 'Créativité',
                  description: 'Développer l\'expression créative dans l\'art culinaire'
                },
                {
                  icon: Eye,
                  title: 'Innovation',
                  description: 'Adopter les techniques et tendances modernes'
                },
                {
                  icon: Award,
                  title: 'Savoir-être',
                  description: 'Cultiver le professionnalisme et l\'excellence'
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="text-center p-8 rounded-2xl border bg-card hover:shadow-[var(--shadow-elegant)] transition-all">
                    <div className="inline-flex p-4 rounded-xl luxury-gradient mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Founder Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Notre Fondateur</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-card border rounded-2xl p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="flex justify-center">
                    <img 
                      src={owner} 
                      alt="Mr Hassan Abandarat - Fondateur de SOS CHEF" 
                      className="rounded-2xl w-full max-w-sm shadow-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Mr Hassan Abandarat</h3>
                    <p className="text-lg text-primary font-semibold mb-4">PDG et Fondateur</p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Visionnaire et expert passionné par l'excellence culinaire, Mr Hassan Abandarat a fondé 
                      SOS CHEF en 2015 avec la mission de former les meilleurs professionnels de l'hôtellerie 
                      et de la restauration au Maroc.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg">
                        <Phone className="w-5 h-5 text-primary" />
                        <a href="tel:+212625819387" className="text-lg font-semibold hover:text-primary transition">
                          +212 625-819387
                        </a>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span className="text-sm">23 Boulevard Sidi Abderrahmane, Casablanca</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-card border rounded-2xl p-10">
              <h3 className="text-3xl font-bold mb-4">Rejoignez SOS CHEF</h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Faites partie de la prochaine génération de professionnels de l'excellence culinaire
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/formations">
                  <Button size="lg" className="luxury-gradient text-primary-foreground font-semibold px-8">
                    Découvrir nos formations
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="px-8">
                    Nous contacter
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

export default About;
