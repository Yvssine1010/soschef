import Navigation from '@/components/Navigation';
import { GraduationCap, ChefHat, Utensils, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Formations = () => {
  const artsPrograms = [
    {
      title: 'Niveau 9ème (collège)',
      duration: '1 an',
      diploma: 'Diplôme qualification professionnelle',
      requirements: 'Niveau collège (9ème année)',
      icon: ChefHat
    },
    {
      title: 'Niveau Bac',
      duration: '2 ans',
      diploma: 'Diplôme technicien',
      requirements: 'Baccalauréat',
      icon: GraduationCap
    },
    {
      title: 'Bac+',
      duration: '2 ans',
      diploma: 'Diplôme technicien spécialisé',
      specializations: 'Cuisine • Pâtisserie • Boucherie • Service',
      requirements: 'Bac+',
      icon: Award
    },
    {
      title: 'Spécialisations avancées',
      duration: '3 ans',
      diploma: 'Diplôme supérieur',
      specializations: 'Pâtisserie • Gestion hôtelière • Boulangerie',
      requirements: 'Niveau Bac+',
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nos Formations Professionnelles
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Des programmes de formation d'excellence reconnus au niveau national et international
            </p>
          </header>

          {/* Arts Culinaires Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Arts Culinaires</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                4 programmes adaptés à votre niveau et à vos ambitions professionnelles
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {artsPrograms.map((program, index) => {
                const Icon = program.icon;
                return (
                  <div key={index} className="bg-card border rounded-2xl p-8 hover:shadow-[var(--shadow-elegant)] transition-all">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-xl luxury-gradient">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                        <p className="text-primary font-semibold">Durée : {program.duration}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="font-semibold mb-1">Diplôme obtenu :</div>
                        <p className="text-muted-foreground">{program.diploma}</p>
                      </div>
                      
                      {program.specializations && (
                        <div>
                          <div className="font-semibold mb-1">Spécialisations :</div>
                          <p className="text-muted-foreground">{program.specializations}</p>
                        </div>
                      )}
                      
                      <div>
                        <div className="font-semibold mb-1">Niveau requis :</div>
                        <p className="text-muted-foreground">{program.requirements}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Services Traiteurs Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Services Traiteurs</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Programme spécialisé pour les professionnels de la restauration événementielle
              </p>
            </div>

            <div className="bg-gradient-to-br from-card to-muted/30 border rounded-2xl p-10 max-w-4xl mx-auto">
              <div className="flex items-start gap-6 mb-8">
                <div className="p-4 rounded-xl luxury-gradient">
                  <Utensils className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">Programme Services Traiteurs</h3>
                  <div className="flex gap-6 text-muted-foreground">
                    <span className="font-semibold">📅 Durée : 1 année</span>
                    <span className="font-semibold">🎓 Niveau : Bac+2</span>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4">Résultats d'apprentissage :</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Maîtrise préparation/réalisation produits',
                    'Concepts créatifs et numériques',
                    'Cuisine équitable et écoresponsable',
                    'Gestion d\'équipe',
                    'Arts de la table et buffets',
                    'Organisation d\'événements'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-background/50 p-4 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-background/70 p-6 rounded-xl">
                <h4 className="font-bold mb-2">📦 Matériel requis :</h4>
                <p className="text-muted-foreground">
                  Outils spécifiques (détails fournis par les enseignants lors de l'inscription)
                </p>
              </div>
            </div>
          </section>

          {/* Modalités Section */}
          <section className="mb-16">
            <div className="bg-primary text-primary-foreground rounded-2xl p-10 text-center">
              <h3 className="text-3xl font-bold mb-6">Modalités de Formation</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                <div>
                  <div className="text-5xl mb-3">🏫</div>
                  <h4 className="text-xl font-bold mb-2">Présentiel</h4>
                  <p className="opacity-90">Formation pratique dans nos locaux équipés</p>
                </div>
                <div>
                  <div className="text-5xl mb-3">💻</div>
                  <h4 className="text-xl font-bold mb-2">En Ligne</h4>
                  <p className="opacity-90">Cours théoriques accessibles à distance</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-card border rounded-2xl p-10">
              <h3 className="text-3xl font-bold mb-4">Prêt à commencer votre formation ?</h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Les inscriptions pour l'année académique commencent début septembre. Contactez-nous pour plus d'informations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="luxury-gradient text-primary-foreground font-semibold px-8">
                    S'inscrire maintenant
                  </Button>
                </Link>
                <a href="tel:+212520724513">
                  <Button size="lg" variant="outline" className="px-8">
                    Nous appeler
                  </Button>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Formations;
