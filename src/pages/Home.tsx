import HeroSlider from '@/components/HeroSlider';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { GraduationCap, Globe, Users, Award, ChefHat, Utensils } from 'lucide-react';
import accreditationSeal from '@/assets/accreditation-seal.jpg';
import studentsTraining from '@/assets/students-training.jpg';
import graduationCeremony from '@/assets/graduation-ceremony.jpg';
import pastryExcellence from '@/assets/pastry-excellence.jpg';
import chefPlating from '@/assets/chef-plating.jpg';
import chefTeam from '@/assets/chef-team.jpg';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Accreditation Section - Very Prominent */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Institution Officiellement <span className="text-secondary">Accréditée</span>
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed opacity-95">
                Reconnus par le gouvernement marocain depuis 2015
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <p className="text-lg">Diplômes reconnus nationalement et internationalement</p>
                </div>
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <p className="text-lg">Corps professoral hautement qualifié</p>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <p className="text-lg">Opportunités de carrière au Maroc et à l'international</p>
                </div>
              </div>
              <Link to="/diplomes">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg px-8 py-6 mt-4">
                  Découvrir Nos Diplômes
                </Button>
              </Link>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
              <img 
                src={accreditationSeal} 
                alt="Établissement Accrédité par le Gouvernement Marocain" 
                className="relative w-full max-w-md mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Excellence in Training Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Formation d'<span className="text-primary">Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Depuis 2015, nous formons les futurs professionnels de l'hôtellerie et de la restauration
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group overflow-hidden rounded-2xl shadow-2xl h-[400px] hover-scale">
              <img 
                src={studentsTraining} 
                alt="Étudiants en formation pratique dans les cuisines professionnelles SOS CHEF" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">Formation Pratique</h3>
                <p className="text-lg opacity-90">Équipements professionnels et techniques modernes</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-2xl h-[400px] hover-scale">
              <img 
                src={graduationCeremony} 
                alt="Cérémonie de remise des diplômes - Diplômés SOS CHEF en tenue professionnelle" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">Réussite Garantie</h3>
                <p className="text-lg opacity-90">Des diplômés fiers et prêts pour le marché du travail</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations Showcase */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Nos <span className="text-primary">Spécialisations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Des programmes complets adaptés à vos ambitions professionnelles
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-xl bg-card hover-scale">
              <div className="h-64 overflow-hidden">
                <img 
                  src={pastryExcellence} 
                  alt="Formation en pâtisserie professionnelle - Viennoiseries et pains artisanaux" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <ChefHat className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold">Pâtisserie</h3>
                </div>
                <p className="text-muted-foreground">
                  Maîtrisez l'art de la pâtisserie française et de la boulangerie artisanale
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-xl bg-card hover-scale">
              <div className="h-64 overflow-hidden">
                <img 
                  src={chefPlating} 
                  alt="Formation en arts culinaires - Chef préparant une assiette gastronomique" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Utensils className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold">Arts Culinaires</h3>
                </div>
                <p className="text-muted-foreground">
                  De la cuisine marocaine traditionnelle à la gastronomie internationale
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-xl bg-card hover-scale">
              <div className="h-64 overflow-hidden">
                <img 
                  src={chefTeam} 
                  alt="Formation en gestion hôtelière - Équipe de chefs professionnels" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold">Gestion Hôtelière</h3>
                </div>
                <p className="text-muted-foreground">
                  Leadership, management et entrepreneuriat dans l'industrie hôtelière
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/formations">
              <Button size="lg" className="luxury-gradient text-primary-foreground font-bold text-lg px-10 py-6">
                Voir Toutes Nos Formations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* International Opportunities */}
      <section className="py-20 bg-gradient-to-br from-accent/10 to-primary/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-primary font-semibold">Opportunités Internationales</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Votre Avenir <span className="text-primary">au Canada</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Grâce à nos partenariats internationaux, nous facilitons l'immigration de nos diplômés 
                vers le Canada et d'autres destinations prestigieuses.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-lg">Accompagnement complet pour l'immigration</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-lg">Réseau d'employeurs partenaires à l'international</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-lg">Diplômes reconnus mondialement</span>
                </li>
              </ul>
              <Link to="/diplomes">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 mt-4">
                  En Savoir Plus
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl"></div>
              <div className="relative grid grid-cols-2 gap-4">
                <img 
                  src={chefPlating} 
                  alt="Opportunités de carrière internationale pour les diplômés" 
                  className="rounded-2xl shadow-xl hover-scale"
                />
                <img 
                  src={chefTeam} 
                  alt="Réseau professionnel international en hôtellerie" 
                  className="rounded-2xl shadow-xl hover-scale mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-primary via-primary/95 to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Prêt à Commencer Votre Aventure Culinaire ?
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-95">
            Rejoignez l'institution de référence en formation culinaire au Maroc
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg px-10 py-6">
                S'inscrire Maintenant
              </Button>
            </Link>
            <Link to="/formations">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 font-semibold text-lg px-10 py-6">
                Découvrir Nos Formations
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-lg opacity-90">
            📞 0520 724 513 • 📱 0625 819 387 / 0664 003 163
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
