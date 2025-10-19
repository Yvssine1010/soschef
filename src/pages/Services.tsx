import Navigation from '@/components/Navigation';
import ServiceCard from '@/components/ServiceCard';
import { GraduationCap, ChefHat, Plane, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Développement de Carrière',
      description: 'Accompagnement complet pour votre évolution professionnelle',
      icon: GraduationCap,
      features: [
        'Conseil & Orientation personnalisés',
        'Valorisation et reconnaissance des diplômes',
        'Recrutement & placement en emploi',
        'Coaching de carrière individuel',
        'Stratégies d\'évolution professionnelle'
      ]
    },
    {
      title: 'Formation d\'Excellence',
      description: 'Programmes de formation de qualité supérieure',
      icon: ChefHat,
      features: [
        'Cours de soutien académique',
        'Formation Cuisine & Pâtisserie professionnelle',
        'Équivalence professionnelle hôtelière',
        'Certifications reconnues internationalement',
        'Formation continue et perfectionnement'
      ]
    },
    {
      title: 'Services d\'Immigration',
      description: 'Accompagnement expert pour vos démarches d\'immigration',
      icon: Plane,
      features: [
        'Inscription sur les sites officiels',
        'Accompagnement aux procédures administratives',
        'Préparation des dossiers de demande',
        'Suivi personnalisé de votre dossier',
        'Conseil en réglementation migratoire'
      ],
      isPaid: true
    },
    {
      title: 'Prestations sur Mesure',
      description: 'Solutions personnalisées adaptées à vos besoins spécifiques',
      icon: Sparkles,
      features: [
        'Consultations individuelles approfondies',
        'Plans d\'action personnalisés',
        'Accompagnement VIP prioritaire',
        'Services adaptés à votre profil',
        'Suivi et ajustements réguliers'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-24">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Nos Services Professionnels
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des solutions complètes et sur mesure pour votre réussite professionnelle dans l'hôtellerie, 
            la restauration et vos projets d'immigration
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="bg-card border rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Services Payants - Devis Personnalisé</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Tous nos services font l'objet d'honoraires professionnels. 
            Contactez-nous pour recevoir un devis adapté à vos besoins spécifiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 luxury-gradient text-primary-foreground font-semibold rounded-lg hover:shadow-[var(--shadow-luxury)] transition-all"
            >
              Demander un devis
            </a>
            <a 
              href="tel:+33123456789" 
              className="inline-flex items-center justify-center px-8 py-3 border rounded-lg hover:bg-muted transition-all"
            >
              Nous appeler
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
