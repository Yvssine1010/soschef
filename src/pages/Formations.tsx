import { GraduationCap, Clock, Award, Users, ChefHat, Cake, Utensils, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/formations-hero.jpg';
import chefTeaching from '@/assets/chef-teaching.jpg';
import pastryCreation from '@/assets/pastry-creation.jpg';
import cateringService from '@/assets/catering-service.jpg';

const Formations = () => {
  const artsPrograms = [
    {
      title: "Diplôme Qualification Professionnelle",
      duration: "1 an",
      level: "Niveau 9ème (collège)",
      icon: ChefHat,
      description: "Formation de base pour démarrer votre carrière culinaire",
      highlights: ["Techniques fondamentales", "Pratique intensive", "Stage professionnel"]
    },
    {
      title: "Diplôme Technicien",
      duration: "2 ans",
      level: "Niveau Bac",
      icon: Utensils,
      description: "Maîtrisez les techniques culinaires avancées",
      highlights: ["Cuisine professionnelle", "Gestion de cuisine", "Hygiène HACCP"]
    },
    {
      title: "Diplôme Technicien Spécialisé",
      duration: "2 ans",
      level: "Bac+",
      icon: Award,
      description: "Spécialisations en Cuisine, Pâtisserie, Boucherie, Service",
      highlights: ["Expertise technique", "Management d'équipe", "Innovation culinaire"]
    },
    {
      title: "Spécialisations Avancées",
      duration: "3 ans",
      level: "Bac+",
      icon: Cake,
      description: "Pâtisserie, Gestion Hôtelière, Boulangerie",
      highlights: ["Excellence artistique", "Business hôtelier", "Certification internationale"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Formations Culinaires" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full mb-6 animate-fade-in">
              <GraduationCap className="w-5 h-5" />
              <span className="text-sm font-medium">Programmes Accrédités</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 animate-fade-in leading-tight">
              Nos Formations <br />
              <span className="text-secondary">d'Excellence</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-200 animate-fade-in">
              Des programmes reconnus nationalement et internationalement pour former les chefs de demain
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6">
                  Demander une Brochure
                </Button>
              </Link>
              <a href="tel:0520724513">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary">
                  Nous Contacter
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Arts Culinaires Section */}
      <section className="py-12 sm:py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Arts Culinaires</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              4 niveaux de formation pour développer votre expertise culinaire
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {artsPrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <div 
                  key={index}
                  className="group relative bg-card border rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                        <Clock className="w-4 h-4" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="text-xs font-medium px-3 py-1 bg-secondary/20 text-secondary rounded-full">
                        {program.level}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold mb-3">{program.title}</h3>
                  <p className="text-muted-foreground mb-6">{program.description}</p>

                  <div className="space-y-2">
                    {program.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Traiteurs Section */}
      <section className="py-12 sm:py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <img 
                src={cateringService} 
                alt="Services Traiteurs" 
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Services Traiteurs</h2>
              
              <div className="bg-card border rounded-xl p-6 mb-6">
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="font-medium">1 année</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <span className="font-medium">Niveau Bac+2</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  "Maîtrise de la préparation et réalisation de produits",
                  "Concepts créatifs et numériques",
                  "Cuisine équitable et écoresponsable",
                  "Gestion d'équipe professionnelle",
                  "Arts de la table et création de buffets",
                  "Organisation d'événements prestigieux"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-secondary">{idx + 1}</span>
                    </div>
                    <span className="text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 lg:py-24 bg-gradient-to-br from-primary via-primary to-primary/90 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Prêt à Commencer Votre Parcours ?
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-white/90">
            Rejoignez SOS CHEF et transformez votre passion en carrière professionnelle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg px-8 py-6">
                S'inscrire Maintenant
              </Button>
            </Link>
            <a href="tel:0520724513">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary">
                Nous Appeler
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Formations;