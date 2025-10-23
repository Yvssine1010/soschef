import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'fr' | 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('soschef-language') as Language;
    if (savedLanguage && ['fr', 'en', 'ar'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const isRTL = language === 'ar';

  // Save language to localStorage when changed
  useEffect(() => {
    localStorage.setItem('soschef-language', language);
  }, [language]);

  // Set document direction based on language
  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [isRTL, language]);

  // Translation function
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Translation data
const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      formations: 'Formations',
      about: 'Qui Sommes-nous',
      diplomes: 'Diplômes',
      contact: 'Contact'
    },
    hero: {
      excellence: 'Excellence Culinaire',
      subtitle: 'Formation d\'Élite en Arts Gastronomiques',
      international: 'Opportunités Internationales',
      internationalSubtitle: 'Votre Carrière au Canada',
      teaching: 'Enseignement de Qualité',
      teachingSubtitle: 'Apprenez des Meilleurs Chefs'
    },
    accreditation: {
      title: 'Institution Officiellement Accréditée',
      subtitle: 'Reconnus par le gouvernement marocain depuis 2015',
      diplomas: 'Diplômes reconnus nationalement et internationalement',
      faculty: 'Corps professoral hautement qualifié',
      opportunities: 'Opportunités de carrière au Maroc et à l\'international',
      cta: 'Découvrir Nos Diplômes'
    },
    excellence: {
      title: 'Formation d\'Excellence',
      subtitle: 'Depuis 2015, nous formons les futurs professionnels de l\'hôtellerie et de la restauration',
      practical: 'Formation Pratique',
      practicalDesc: 'Équipements professionnels et techniques modernes',
      success: 'Réussite Garantie',
      successDesc: 'Des diplômés fiers et prêts pour le marché du travail'
    },
    specializations: {
      title: 'Nos Spécialisations',
      subtitle: 'Des programmes complets adaptés à vos ambitions professionnelles',
      pastry: 'Pâtisserie',
      pastryDesc: 'Maîtrisez l\'art de la pâtisserie française et de la boulangerie artisanale',
      culinary: 'Arts Culinaires',
      culinaryDesc: 'De la cuisine marocaine traditionnelle à la gastronomie internationale',
      management: 'Gestion Hôtelière',
      managementDesc: 'Leadership, management et entrepreneuriat dans l\'industrie hôtelière',
      cta: 'Voir Toutes Nos Formations'
    },
    international: {
      badge: 'Opportunités Internationales',
      title: 'Votre Avenir au Canada',
      subtitle: 'Grâce à nos partenariats internationaux, nous facilitons l\'immigration de nos diplômés vers le Canada et d\'autres destinations prestigieuses.',
      immigration: 'Accompagnement complet pour l\'immigration',
      network: 'Réseau d\'employeurs partenaires à l\'international',
      recognized: 'Diplômes reconnus mondialement',
      cta: 'En Savoir Plus'
    },
    cta: {
      title: 'Prêt à Commencer Votre Aventure Culinaire ?',
      subtitle: 'Rejoignez l\'institution de référence en formation culinaire au Maroc',
      register: 'S\'inscrire Maintenant',
      discover: 'Découvrir Nos Formations',
      phone: '📞 0520 724 513 • 📱 0625 819 387 / 0664 003 163'
    },
    formations: {
      hero: {
        badge: 'Programmes Accrédités',
        title: 'Nos Formations d\'Excellence',
        subtitle: 'Des programmes reconnus nationalement et internationalement pour former les chefs de demain',
        cta: {
          brochure: 'Demander une Brochure',
          contact: 'Nous Contacter'
        }
      },
      programs: {
        badge: 'Programmes',
        title: 'Arts Culinaires',
        subtitle: '4 niveaux de formation pour développer votre expertise culinaire',
        dqp: {
          title: 'Diplôme Qualification Professionnelle',
          duration: '1 an',
          level: 'Niveau 9ème (collège)',
          description: 'Formation de base pour démarrer votre carrière culinaire',
          highlights: ['Techniques fondamentales', 'Pratique intensive', 'Stage professionnel']
        },
        dt: {
          title: 'Diplôme Technicien',
          duration: '2 ans',
          level: 'Niveau Bac',
          description: 'Maîtrisez les techniques culinaires avancées',
          highlights: ['Cuisine professionnelle', 'Gestion de cuisine', 'Hygiène HACCP']
        },
        dts: {
          title: 'Diplôme Technicien Spécialisé',
          duration: '2 ans',
          level: 'Bac+',
          description: 'Spécialisations en Cuisine, Pâtisserie, Boucherie, Service',
          highlights: ['Expertise technique', 'Management d\'équipe', 'Innovation culinaire']
        },
        advanced: {
          title: 'Spécialisations Avancées',
          duration: '3 ans',
          level: 'Bac+',
          description: 'Pâtisserie, Gestion Hôtelière, Boulangerie',
          highlights: ['Excellence artistique', 'Business hôtelier', 'Certification internationale']
        }
      },
      services: {
        title: 'Services Traiteurs',
        duration: '1 année',
        level: 'Niveau Bac+2',
        highlights: [
          'Maîtrise de la préparation et réalisation de produits',
          'Concepts créatifs et numériques',
          'Cuisine équitable et écoresponsable',
          'Gestion d\'équipe professionnelle',
          'Arts de la table et création de buffets',
          'Organisation d\'événements prestigieux'
        ]
      },
      cta: {
        title: 'Prêt à Commencer Votre Parcours ?',
        subtitle: 'Rejoignez SOS CHEF et transformez votre passion en carrière professionnelle',
        register: 'S\'inscrire Maintenant',
        call: 'Nous Appeler'
      }
    },
    about: {
      title: 'Qui Sommes-nous ?',
      subtitle: 'SOS CHEF - Institution Marocaine Accréditée',
      description: 'Formation d\'excellence en hôtellerie-restauration depuis 2015',
      history: {
        title: 'Notre Histoire',
        foundation: {
          title: 'Fondation & Accréditation',
          description: 'Fondée en 2015 au Maroc par Mr Hassan Abandarat, SOS CHEF est une institution accréditée par l\'État Marocain, reconnue pour son excellence dans la formation en hôtellerie-restauration.'
        },
        mission: {
          title: 'Notre Mission',
          description: 'Offrir une formation d\'excellence combinant méthodes théoriques, pratiques et pédagogiques innovantes. Nous nous concentrons sur la créativité, l\'innovation et le savoir-être professionnel.'
        },
        team: {
          title: 'Notre Équipe',
          description: 'Un corps professoral passionné et hautement qualifié, dédié à votre réussite. Nos formateurs sont des experts reconnus dans leurs domaines.'
        },
        modalities: {
          title: 'Nos Modalités',
          description: 'Formation en présentiel dans nos locaux équipés et en ligne pour les cours théoriques. Flexibilité maximale pour s\'adapter à votre rythme.'
        }
      },
      calendar: {
        title: 'Calendrier Académique',
        registration: {
          title: 'Inscriptions',
          date: 'Début septembre'
        },
        courses: {
          title: 'Cours',
          period: 'Début octobre à fin juillet'
        }
      },
      axes: {
        title: 'Nos Axes de Formation',
        items: [
          { icon: 'Target', title: 'Créativité', description: 'Développer l\'expression créative dans l\'art culinaire' },
          { icon: 'Eye', title: 'Innovation', description: 'Adopter les techniques et tendances modernes' },
          { icon: 'Award', title: 'Savoir-être', description: 'Cultiver le professionnalisme et l\'excellence' }
        ]
      },
      founder: {
        title: 'Notre Fondateur',
        name: 'Mr Hassan Abandarat',
        position: 'PDG et Fondateur',
        description: 'Visionnaire et expert passionné par l\'excellence culinaire, Mr Hassan Abandarat a fondé SOS CHEF en 2015 avec la mission de former les meilleurs professionnels de l\'hôtellerie et de la restauration au Maroc.',
        imageAlt: 'Mr Hassan Abandarat - Fondateur de SOS CHEF',
        address: '23 Boulevard Sidi Abderrahmane, Casablanca'
      },
      cta: {
        title: 'Rejoignez SOS CHEF',
        subtitle: 'Faites partie de la prochaine génération de professionnels de l\'excellence culinaire',
        discover: 'Découvrir nos formations',
        contact: 'Nous contacter'
      }
    },
    contact: {
      title: 'Contactez SOS CHEF',
      subtitle: 'Notre équipe est à votre écoute pour vous accompagner dans votre parcours de formation',
      form: {
        title: 'Demande de Consultation',
        name: 'Nom complet',
        namePlaceholder: 'Votre nom',
        email: 'Email',
        emailPlaceholder: 'votre@email.com',
        phone: 'Téléphone',
        phonePlaceholder: '+33 1 23 45 67 89',
        service: 'Service souhaité',
        servicePlaceholder: 'Sélectionnez un service',
        services: {
          career: 'Développement de Carrière',
          training: 'Formation d\'Excellence',
          immigration: 'Services d\'Immigration',
          custom: 'Prestations sur Mesure'
        },
        message: 'Votre message',
        messagePlaceholder: 'Décrivez votre projet ou vos besoins...',
        note: {
          title: 'Note importante',
          description: 'Tous nos services sont payants et font l\'objet d\'un devis personnalisé. Nous vous contacterons pour discuter de vos besoins et vous proposer une offre adaptée.'
        },
        submit: 'Envoyer ma demande',
        success: {
          title: 'Message envoyé !',
          description: 'Nous vous contacterons dans les plus brefs délais.'
        }
      },
      info: {
        title: 'Informations de Contact',
        email: 'Email',
        phones: 'Téléphones',
        address: 'Adresse',
        addressDetails: '23 Boulevard Sidi Abderrahmane\nCasablanca, Maroc'
      },
      hours: {
        title: 'Horaires d\'Ouverture',
        weekdays: 'Lundi - Vendredi',
        weekdaysTime: '9h00 - 18h00',
        saturday: 'Samedi',
        saturdayTime: '10h00 - 14h00',
        sunday: 'Dimanche',
        sundayTime: 'Fermé'
      }
    },
    whatsapp: {
      message: 'Salut ! 👨‍🍳 Je veux en savoir plus sur vos formations SOS CHEF',
      tooltip: 'Contactez-nous sur WhatsApp'
    },
    diplomas: {
      title: 'Diplômes & Accréditations',
      subtitle: 'Diplômes reconnus au niveau national et international, délivrés par une institution accréditée par l\'État Marocain',
      recognition: {
        international: {
          title: 'Reconnaissance Internationale',
          description: 'Nos diplômes sont reconnus au Maroc et à l\'étranger, ouvrant des opportunités de carrière partout dans le monde'
        },
        official: {
          title: 'Accréditation Officielle',
          description: 'Institution accréditée par l\'État Marocain depuis 2015, garantissant la qualité de nos formations'
        }
      },
      section: {
        title: 'Nos Diplômes',
        subtitle: 'Des qualifications de haut niveau pour votre réussite professionnelle'
      },
      list: [
        {
          title: 'Bachelor International en Arts Culinaires',
          recognition: 'Reconnaissance nationale et internationale',
          opportunities: [
            'Chef cuisinier dans restaurants gastronomiques',
            'Chef exécutif dans hôtels de luxe',
            'Consultant culinaire',
            'Opportunités à l\'international'
          ]
        },
        {
          title: 'Bachelor Chef "Chef d\'Entreprise"',
          recognition: 'Formation en gestion et entrepreneuriat culinaire',
          opportunities: [
            'Créer et gérer son propre restaurant',
            'Gérer une entreprise de traiteur',
            'Manager de restauration',
            'Consultant en gestion hôtelière'
          ]
        },
        {
          title: 'Bachelor "Responsable d\'Unité Opérationnelle"',
          recognition: 'Spécialisation en management opérationnel',
          opportunities: [
            'Responsable de production alimentaire',
            'Manager d\'unité de restauration collective',
            'Superviseur d\'équipes culinaires',
            'Coordinateur de services traiteurs'
          ]
        }
      ],
      careers: [
        'Chef cuisinier / Cuisiniers',
        'Chef gérant / Manager restaurant',
        'Responsable banquets',
        'Serveurs / Barmen',
        'Traiteur / Organisateur réceptions',
        'Personnels domestiques'
      ],
      opportunities: {
        title: 'Opportunités de carrière',
        seize: {
          title: 'Opportunités à Saisir',
          description: 'Nos partenariats avec des établissements prestigieux vous offrent des opportunités au Maroc et à l\'international'
        },
        countries: ['Maroc', 'Europe', 'Canada', 'Moyen-Orient'],
        images: {
          immigration: 'Opportunités d\'immigration et de travail',
          canada: 'Canada - Opportunités à l\'étranger'
        }
      },
      employment: {
        title: 'Emploi & Opportunités',
        subtitle: 'Collaboration avec des entreprises marocaines et multinationales pour garantir votre insertion professionnelle'
      },
      cta: {
        title: 'Obtenez votre diplôme reconnu',
        subtitle: 'Rejoignez SOS CHEF et obtenez un diplôme qui ouvrira les portes de votre carrière internationale',
        formations: 'Voir les formations',
        contact: 'Nous contacter'
      },
      sosService: {
        badge: 'Service Personnel',
        title: 'SOS SERVICE - Placement de Personnel Qualifié',
        subtitle: 'Des professionnels expérimentés pour vos besoins au Maroc et à l\'international',
        intro: 'SOS SERVICE place du personnel qualifié (maison et restaurants, snacks, cafés) partout au Maroc : Femmes ou Hommes, ménage, nounou, baby-sitter, bonne, esthéticienne expérimentée, professionnels dans leurs métiers.',
        specialists: {
          title: 'Nos Spécialistes',
          elderly: {
            title: 'Soins aux Personnes Âgées',
            description: 'Des assistants avec une excellente expérience professionnelle qui s\'occupent des personnes âgées entre 60 et 95 ans'
          },
          domestic: {
            title: 'Personnel Domestique',
            description: 'Cuisinière, chauffeur, gouvernante, auxiliaire de vie pour particuliers et entreprises'
          },
          hospitality: {
            title: 'Personnel Hôtelier',
            description: 'Placement de personnel qualifié dans les établissements hôteliers et restaurants'
          }
        },
        commitment: {
          title: 'Notre Engagement',
          description: 'SOS SERVICES est à votre disposition et met tout en œuvre pour vous trouver le meilleur candidat, celui qui conviendra à toutes vos attentes.',
          trust: 'Accueillir chez soi une personne que l\'on ne connaît pas, lui confier la gestion de sa maison, l\'éducation de ses enfants, la faire entrer dans son quotidien demande une confiance absolue.',
          process: 'C\'est pour cette raison que notre processus de recrutement est minutieux et rigoureux. Tous les candidats que nous présentons sont qualifiés et disposent d\'au moins une expérience contrôlable.'
        },
        guarantee: {
          title: 'Garantie de Remplacement',
          description: 'Pour rassurer davantage nos clients, nous proposons des garanties de remplacement allant jusqu\'à 1 mois.',
          coverage: 'Nos services couvrent tout le territoire marocain et même à l\'international'
        }
      }
    },
    common: {
      loading: 'Chargement...',
      institution: 'Institution Marocaine Accréditée'
    }
  },
  en: {
    nav: {
      home: 'Home',
      formations: 'Training',
      about: 'About Us',
      diplomes: 'Diplomas',
      contact: 'Contact'
    },
    hero: {
      excellence: 'Culinary Excellence',
      subtitle: 'Elite Training in Gastronomic Arts',
      international: 'International Opportunities',
      internationalSubtitle: 'Your Career in Canada',
      teaching: 'Quality Education',
      teachingSubtitle: 'Learn from the Best Chefs'
    },
    accreditation: {
      title: 'Officially Accredited Institution',
      subtitle: 'Recognized by the Moroccan government since 2015',
      diplomas: 'Diplomas recognized nationally and internationally',
      faculty: 'Highly qualified teaching staff',
      opportunities: 'Career opportunities in Morocco and internationally',
      cta: 'Discover Our Diplomas'
    },
    excellence: {
      title: 'Excellence in Training',
      subtitle: 'Since 2015, we have been training future hospitality and restaurant professionals',
      practical: 'Practical Training',
      practicalDesc: 'Professional equipment and modern techniques',
      success: 'Guaranteed Success',
      successDesc: 'Proud graduates ready for the job market'
    },
    specializations: {
      title: 'Our Specializations',
      subtitle: 'Complete programs adapted to your professional ambitions',
      pastry: 'Pastry',
      pastryDesc: 'Master the art of French pastry and artisanal baking',
      culinary: 'Culinary Arts',
      culinaryDesc: 'From traditional Moroccan cuisine to international gastronomy',
      management: 'Hotel Management',
      managementDesc: 'Leadership, management and entrepreneurship in the hospitality industry',
      cta: 'View All Our Training'
    },
    international: {
      badge: 'International Opportunities',
      title: 'Your Future in Canada',
      subtitle: 'Thanks to our international partnerships, we facilitate the immigration of our graduates to Canada and other prestigious destinations.',
      immigration: 'Complete support for immigration',
      network: 'Network of international partner employers',
      recognized: 'Globally recognized diplomas',
      cta: 'Learn More'
    },
    cta: {
      title: 'Ready to Start Your Culinary Adventure?',
      subtitle: 'Join the reference institution in culinary training in Morocco',
      register: 'Register Now',
      discover: 'Discover Our Training',
      phone: '📞 0520 724 513 • 📱 0625 819 387 / 0664 003 163'
    },
    formations: {
      hero: {
        badge: 'Accredited Programs',
        title: 'Our Excellence Training',
        subtitle: 'Programs recognized nationally and internationally to train tomorrow\'s chefs',
        cta: {
          brochure: 'Request a Brochure',
          contact: 'Contact Us'
        }
      },
      programs: {
        badge: 'Programs',
        title: 'Culinary Arts',
        subtitle: '4 levels of training to develop your culinary expertise',
        dqp: {
          title: 'Professional Qualification Diploma',
          duration: '1 year',
          level: '9th grade level (college)',
          description: 'Basic training to start your culinary career',
          highlights: ['Fundamental techniques', 'Intensive practice', 'Professional internship']
        },
        dt: {
          title: 'Technician Diploma',
          duration: '2 years',
          level: 'Bac level',
          description: 'Master advanced culinary techniques',
          highlights: ['Professional cuisine', 'Kitchen management', 'HACCP hygiene']
        },
        dts: {
          title: 'Specialized Technician Diploma',
          duration: '2 years',
          level: 'Bac+',
          description: 'Specializations in Cuisine, Pastry, Butchery, Service',
          highlights: ['Technical expertise', 'Team management', 'Culinary innovation']
        },
        advanced: {
          title: 'Advanced Specializations',
          duration: '3 years',
          level: 'Bac+',
          description: 'Pastry, Hotel Management, Bakery',
          highlights: ['Artistic excellence', 'Hotel business', 'International certification']
        }
      },
      services: {
        title: 'Catering Services',
        duration: '1 year',
        level: 'Bac+2 level',
        highlights: [
          'Mastery of product preparation and production',
          'Creative and digital concepts',
          'Fair and eco-responsible cuisine',
          'Professional team management',
          'Table arts and buffet creation',
          'Organization of prestigious events'
        ]
      },
      cta: {
        title: 'Ready to Start Your Journey?',
        subtitle: 'Join SOS CHEF and transform your passion into a professional career',
        register: 'Register Now',
        call: 'Call Us'
      }
    },
    whatsapp: {
      message: 'Hi! 👨‍🍳 I want to know more about your SOS CHEF training',
      tooltip: 'Contact us on WhatsApp'
    },
    about: {
      title: 'Who We Are?',
      subtitle: 'SOS CHEF - Accredited Moroccan Institution',
      description: 'Excellence training in hospitality-restaurant since 2015',
      history: {
        title: 'Our History',
        foundation: {
          title: 'Foundation & Accreditation',
          description: 'Founded in 2015 in Morocco by Mr Hassan Abandarat, SOS CHEF is an institution accredited by the Moroccan State, recognized for its excellence in hospitality-restaurant training.'
        },
        mission: {
          title: 'Our Mission',
          description: 'To offer excellence training combining theoretical, practical and innovative pedagogical methods. We focus on creativity, innovation and professional know-how.'
        },
        team: {
          title: 'Our Team',
          description: 'A passionate and highly qualified teaching staff, dedicated to your success. Our trainers are recognized experts in their fields.'
        },
        modalities: {
          title: 'Our Modalities',
          description: 'Face-to-face training in our equipped premises and online for theoretical courses. Maximum flexibility to adapt to your pace.'
        }
      },
      calendar: {
        title: 'Academic Calendar',
        registration: {
          title: 'Registrations',
          date: 'Beginning of September'
        },
        courses: {
          title: 'Courses',
          period: 'Beginning of October to end of July'
        }
      },
      axes: {
        title: 'Our Training Axes',
        items: [
          { icon: 'Target', title: 'Creativity', description: 'Develop creative expression in culinary art' },
          { icon: 'Eye', title: 'Innovation', description: 'Adopt modern techniques and trends' },
          { icon: 'Award', title: 'Know-how', description: 'Cultivate professionalism and excellence' }
        ]
      },
      founder: {
        title: 'Our Founder',
        name: 'Mr Hassan Abandarat',
        position: 'CEO and Founder',
        description: 'Visionary and expert passionate about culinary excellence, Mr Hassan Abandarat founded SOS CHEF in 2015 with the mission to train the best professionals in hospitality and restaurant in Morocco.',
        imageAlt: 'Mr Hassan Abandarat - Founder of SOS CHEF',
        address: '23 Boulevard Sidi Abderrahmane, Casablanca'
      },
      cta: {
        title: 'Join SOS CHEF',
        subtitle: 'Be part of the next generation of culinary excellence professionals',
        discover: 'Discover our training',
        contact: 'Contact us'
      }
    },
    contact: {
      title: 'Contact SOS CHEF',
      subtitle: 'Our team is listening to accompany you in your training journey',
      form: {
        title: 'Consultation Request',
        name: 'Full name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        phone: 'Phone',
        phonePlaceholder: '+33 1 23 45 67 89',
        service: 'Desired service',
        servicePlaceholder: 'Select a service',
        services: {
          career: 'Career Development',
          training: 'Excellence Training',
          immigration: 'Immigration Services',
          custom: 'Custom Services'
        },
        message: 'Your message',
        messagePlaceholder: 'Describe your project or needs...',
        note: {
          title: 'Important note',
          description: 'All our services are paid and subject to a personalized quote. We will contact you to discuss your needs and propose an adapted offer.'
        },
        submit: 'Send my request',
        success: {
          title: 'Message sent!',
          description: 'We will contact you as soon as possible.'
        }
      },
      info: {
        title: 'Contact Information',
        email: 'Email',
        phones: 'Phones',
        address: 'Address',
        addressDetails: '23 Boulevard Sidi Abderrahmane\nCasablanca, Morocco'
      },
      hours: {
        title: 'Opening Hours',
        weekdays: 'Monday - Friday',
        weekdaysTime: '9:00 AM - 6:00 PM',
        saturday: 'Saturday',
        saturdayTime: '10:00 AM - 2:00 PM',
        sunday: 'Sunday',
        sundayTime: 'Closed'
      }
    },
    diplomas: {
      title: 'Diplomas & Accreditations',
      subtitle: 'Diplomas recognized at national and international level, issued by an institution accredited by the Moroccan State',
      recognition: {
        international: {
          title: 'International Recognition',
          description: 'Our diplomas are recognized in Morocco and abroad, opening career opportunities worldwide'
        },
        official: {
          title: 'Official Accreditation',
          description: 'Institution accredited by the Moroccan State since 2015, guaranteeing the quality of our training'
        }
      },
      section: {
        title: 'Our Diplomas',
        subtitle: 'High-level qualifications for your professional success'
      },
      list: [
        {
          title: 'International Bachelor in Culinary Arts',
          recognition: 'National and international recognition',
          opportunities: [
            'Chef in gourmet restaurants',
            'Executive chef in luxury hotels',
            'Culinary consultant',
            'International opportunities'
          ]
        },
        {
          title: 'Bachelor Chef "Business Chef"',
          recognition: 'Management and culinary entrepreneurship training',
          opportunities: [
            'Create and manage your own restaurant',
            'Manage a catering business',
            'Restaurant manager',
            'Hotel management consultant'
          ]
        },
        {
          title: 'Bachelor "Operational Unit Manager"',
          recognition: 'Operational management specialization',
          opportunities: [
            'Food production manager',
            'Collective catering unit manager',
            'Culinary teams supervisor',
            'Catering services coordinator'
          ]
        }
      ],
      careers: [
        'Chef / Cooks',
        'Chef manager / Restaurant manager',
        'Banquet manager',
        'Waiters / Bartenders',
        'Caterer / Reception organizer',
        'Domestic staff'
      ],
      opportunities: {
        title: 'Career opportunities',
        seize: {
          title: 'Opportunities to Seize',
          description: 'Our partnerships with prestigious establishments offer you opportunities in Morocco and internationally'
        },
        countries: ['Morocco', 'Europe', 'Canada', 'Middle East'],
        images: {
          immigration: 'Immigration and work opportunities',
          canada: 'Canada - Opportunities abroad'
        }
      },
      employment: {
        title: 'Employment & Opportunities',
        subtitle: 'Collaboration with Moroccan and multinational companies to guarantee your professional integration'
      },
      cta: {
        title: 'Get your recognized diploma',
        subtitle: 'Join SOS CHEF and get a diploma that will open the doors to your international career',
        formations: 'View training',
        contact: 'Contact us'
      },
      sosService: {
        badge: 'Personnel Service',
        title: 'SOS SERVICE - Qualified Personnel Placement',
        subtitle: 'Experienced professionals for your needs in Morocco and internationally',
        intro: 'SOS SERVICE places qualified personnel (homes and restaurants, snacks, cafés) throughout Morocco: Women or Men, housekeeping, nanny, babysitter, housekeeper, experienced beauticians, professionals in their fields.',
        specialists: {
          title: 'Our Specialists',
          elderly: {
            title: 'Elderly Care',
            description: 'Assistants with excellent professional experience who care for seniors aged 60 to 95'
          },
          domestic: {
            title: 'Domestic Staff',
            description: 'Cook, driver, housekeeper, caregiver for individuals and businesses'
          },
          hospitality: {
            title: 'Hospitality Staff',
            description: 'Placement of qualified personnel in hotels and restaurants'
          }
        },
        commitment: {
          title: 'Our Commitment',
          description: 'SOS SERVICES is at your disposal and does everything possible to find you the best candidate, one who will meet all your expectations.',
          trust: 'Welcoming someone you don\'t know into your home, entrusting them with managing your household, educating your children, and integrating them into your daily life requires absolute trust.',
          process: 'This is why our recruitment process is meticulous and rigorous. All candidates we present are qualified and have at least one verifiable experience.'
        },
        guarantee: {
          title: 'Replacement Guarantee',
          description: 'To further reassure our clients, we offer replacement guarantees of up to 1 month.',
          coverage: 'Our services cover all of Morocco and even internationally'
        }
      }
    },
    common: {
      loading: 'Loading...',
      institution: 'Accredited Moroccan Institution'
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      formations: 'التكوينات',
      about: 'من نحن',
      diplomes: 'الشهادات',
      contact: 'اتصل بنا'
    },
    hero: {
      excellence: 'التميز الطهوي',
      subtitle: 'التدريب النخبوي في الفنون الغاسترونومية',
      international: 'الفرص الدولية',
      internationalSubtitle: 'مستقبلك في كندا',
      teaching: 'التعليم الجيد',
      teachingSubtitle: 'تعلم من أفضل الطهاة'
    },
    accreditation: {
      title: 'مؤسسة معتمدة رسمياً',
      subtitle: 'معترف بها من قبل الحكومة المغربية منذ 2015',
      diplomas: 'شهادات معترف بها وطنياً ودولياً',
      faculty: 'هيئة تدريس عالية التأهيل',
      opportunities: 'فرص مهنية في المغرب ودولياً',
      cta: 'اكتشف شهاداتنا'
    },
    excellence: {
      title: 'التدريب المتميز',
      subtitle: 'منذ 2015، نكون المهنيين المستقبليين في الضيافة والمطاعم',
      practical: 'التدريب العملي',
      practicalDesc: 'معدات مهنية وتقنيات حديثة',
      success: 'النجاح مضمون',
      successDesc: 'خريجون فخورون وجاهزون لسوق الشغل'
    },
    specializations: {
      title: 'تخصصاتنا',
      subtitle: 'برامج شاملة مكيفة مع طموحاتكم المهنية',
      pastry: 'الحلويات',
      pastryDesc: 'أتقن فن الحلويات الفرنسية والخبز الحرفي',
      culinary: 'الفنون الطهوية',
      culinaryDesc: 'من المطبخ المغربي التقليدي إلى الغاسترونوميا الدولية',
      management: 'إدارة الفنادق',
      managementDesc: 'القيادة والإدارة وريادة الأعمال في صناعة الضيافة',
      cta: 'شاهد جميع تكويناتنا'
    },
    international: {
      badge: 'الفرص الدولية',
      title: 'مستقبلك في كندا',
      subtitle: 'بفضل شراكاتنا الدولية، نسهل هجرة خريجينا إلى كندا ووجهات مرموقة أخرى.',
      immigration: 'مرافقة شاملة للهجرة',
      network: 'شبكة من أرباب العمل الشركاء دولياً',
      recognized: 'شهادات معترف بها عالمياً',
      cta: 'اعرف المزيد'
    },
    cta: {
      title: 'مستعد لبدء مغامرتك الطهوية؟',
      subtitle: 'انضم إلى المؤسسة المرجعية في التدريب الطهوي في المغرب',
      register: 'سجل الآن',
      discover: 'اكتشف تكويناتنا',
      phone: '📞 0520 724 513 • 📱 0625 819 387 / 0664 003 163'
    },
    formations: {
      hero: {
        badge: 'برامج معتمدة',
        title: 'تكويناتنا المتميزة',
        subtitle: 'برامج معترف بها وطنياً ودولياً لتكوين طهاة الغد',
        cta: {
          brochure: 'اطلب كتيب',
          contact: 'اتصل بنا'
        }
      },
      programs: {
        badge: 'البرامج',
        title: 'الفنون الطهوية',
        subtitle: '4 مستويات تدريب لتطوير خبرتك الطهوية',
        dqp: {
          title: 'دبلوم التأهيل المهني',
          duration: 'سنة واحدة',
          level: 'مستوى 9 (إعدادي)',
          description: 'تدريب أساسي لبدء مسيرتك الطهوية',
          highlights: ['التقنيات الأساسية', 'التطبيق المكثف', 'التدريب المهني']
        },
        dt: {
          title: 'دبلوم التقني',
          duration: 'سنتان',
          level: 'مستوى الباك',
          description: 'أتقن التقنيات الطهوية المتقدمة',
          highlights: ['المطبخ المهني', 'إدارة المطبخ', 'النظافة HACCP']
        },
        dts: {
          title: 'دبلوم التقني المتخصص',
          duration: 'سنتان',
          level: 'باك+',
          description: 'تخصصات في المطبخ والحلويات والجزارة والخدمة',
          highlights: ['الخبرة التقنية', 'إدارة الفريق', 'الابتكار الطهوي']
        },
        advanced: {
          title: 'التخصصات المتقدمة',
          duration: '3 سنوات',
          level: 'باك+',
          description: 'الحلويات وإدارة الفنادق والخبز',
          highlights: ['التميز الفني', 'أعمال الفنادق', 'الشهادة الدولية']
        }
      },
      services: {
        title: 'خدمات المطاعم',
        duration: 'سنة واحدة',
        level: 'مستوى باك+2',
        highlights: [
          'إتقان تحضير وإنتاج المنتجات',
          'المفاهيم الإبداعية والرقمية',
          'المطبخ العادل والمستدام',
          'إدارة الفريق المهني',
          'فنون المائدة وإنشاء البوفيهات',
          'تنظيم الأحداث المرموقة'
        ]
      },
      cta: {
        title: 'مستعد لبدء رحلتك؟',
        subtitle: 'انضم إلى SOS CHEF وحول شغفك إلى مهنة احترافية',
        register: 'سجل الآن',
        call: 'اتصل بنا'
      }
    },
    about: {
      title: 'من نحن؟',
      subtitle: 'SOS CHEF - مؤسسة مغربية معتمدة',
      description: 'تدريب متميز في الضيافة والمطاعم منذ 2015',
      history: {
        title: 'تاريخنا',
        foundation: {
          title: 'التأسيس والاعتماد',
          description: 'تأسست في 2015 في المغرب من قبل السيد حسن أباندرات، SOS CHEF هي مؤسسة معتمدة من قبل الدولة المغربية، معترف بها لتميزها في تدريب الضيافة والمطاعم.'
        },
        mission: {
          title: 'مهمتنا',
          description: 'تقديم تدريب متميز يجمع بين الطرق النظرية والعملية والبيداغوجية المبتكرة. نركز على الإبداع والابتكار والمعرفة المهنية.'
        },
        team: {
          title: 'فريقنا',
          description: 'هيئة تدريس شغوفة وعالية التأهيل، مكرسة لنجاحكم. مدربونا خبراء معترف بهم في مجالاتهم.'
        },
        modalities: {
          title: 'طرقنا',
          description: 'التدريب الحضوري في مرافقنا المجهزة وعبر الإنترنت للدروس النظرية. مرونة قصوى للتكيف مع إيقاعكم.'
        }
      },
      calendar: {
        title: 'التقويم الأكاديمي',
        registration: {
          title: 'التسجيلات',
          date: 'بداية سبتمبر'
        },
        courses: {
          title: 'الدروس',
          period: 'بداية أكتوبر إلى نهاية يوليو'
        }
      },
      axes: {
        title: 'محاور تدريبنا',
        items: [
          { icon: 'Target', title: 'الإبداع', description: 'تطوير التعبير الإبداعي في الفن الطهوي' },
          { icon: 'Eye', title: 'الابتكار', description: 'تبني التقنيات والاتجاهات الحديثة' },
          { icon: 'Award', title: 'المعرفة', description: 'زرع المهنية والتميز' }
        ]
      },
      founder: {
        title: 'مؤسسنا',
        name: 'السيد حسن أباندرات',
        position: 'الرئيس التنفيذي والمؤسس',
        description: 'رؤيوي وخبير شغوف بالتميز الطهوي، أسس السيد حسن أباندرات SOS CHEF في 2015 بمهمة تكوين أفضل المهنيين في الضيافة والمطاعم في المغرب.',
        imageAlt: 'السيد حسن أباندرات - مؤسس SOS CHEF',
        address: '23 شارع سيدي عبد الرحمان، الدار البيضاء'
      },
      cta: {
        title: 'انضم إلى SOS CHEF',
        subtitle: 'كن جزءاً من الجيل القادم من مهنيي التميز الطهوي',
        discover: 'اكتشف تكويناتنا',
        contact: 'اتصل بنا'
      }
    },
    contact: {
      title: 'اتصل بـ SOS CHEF',
      subtitle: 'فريقنا يستمع إليكم لمرافقتكم في رحلة تدريبكم',
      form: {
        title: 'طلب استشارة',
        name: 'الاسم الكامل',
        namePlaceholder: 'اسمكم',
        email: 'البريد الإلكتروني',
        emailPlaceholder: 'بريدكم@الإلكتروني.com',
        phone: 'الهاتف',
        phonePlaceholder: '+33 1 23 45 67 89',
        service: 'الخدمة المطلوبة',
        servicePlaceholder: 'اختر خدمة',
        services: {
          career: 'تطوير المسيرة المهنية',
          training: 'التدريب المتميز',
          immigration: 'خدمات الهجرة',
          custom: 'خدمات مخصصة'
        },
        message: 'رسالتكم',
        messagePlaceholder: 'اوصفوا مشروعكم أو احتياجاتكم...',
        note: {
          title: 'ملاحظة مهمة',
          description: 'جميع خدماتنا مدفوعة وتخضع لعرض سعر شخصي. سنتصل بكم لمناقشة احتياجاتكم واقتراح عرض مكيف.'
        },
        submit: 'أرسل طلبي',
        success: {
          title: 'تم إرسال الرسالة!',
          description: 'سنتصل بكم في أقرب وقت ممكن.'
        }
      },
      info: {
        title: 'معلومات الاتصال',
        email: 'البريد الإلكتروني',
        phones: 'الهواتف',
        address: 'العنوان',
        addressDetails: '23 شارع سيدي عبد الرحمان\nالدار البيضاء، المغرب'
      },
      hours: {
        title: 'ساعات العمل',
        weekdays: 'الاثنين - الجمعة',
        weekdaysTime: '9:00 - 18:00',
        saturday: 'السبت',
        saturdayTime: '10:00 - 14:00',
        sunday: 'الأحد',
        sundayTime: 'مغلق'
      }
    },
    diplomas: {
      title: 'الشهادات والاعتمادات',
      subtitle: 'شهادات معترف بها على المستوى الوطني والدولي، صادرة عن مؤسسة معتمدة من قبل الدولة المغربية',
      recognition: {
        international: {
          title: 'الاعتراف الدولي',
          description: 'شهاداتنا معترف بها في المغرب والخارج، تفتح فرص مهنية في جميع أنحاء العالم'
        },
        official: {
          title: 'الاعتماد الرسمي',
          description: 'مؤسسة معتمدة من قبل الدولة المغربية منذ 2015، تضمن جودة تدريبنا'
        }
      },
      section: {
        title: 'شهاداتنا',
        subtitle: 'مؤهلات عالية المستوى لنجاحكم المهني'
      },
      list: [
        {
          title: 'بكالوريوس دولي في الفنون الطهوية',
          recognition: 'اعتراف وطني ودولي',
          opportunities: [
            'طاه في المطاعم الفاخرة',
            'طاه تنفيذي في الفنادق الفاخرة',
            'مستشار طهوي',
            'فرص دولية'
          ]
        },
        {
          title: 'بكالوريوس طاه "طاه المؤسسة"',
          recognition: 'تدريب في الإدارة وريادة الأعمال الطهوية',
          opportunities: [
            'إنشاء وإدارة مطعمكم الخاص',
            'إدارة مؤسسة تقديم الطعام',
            'مدير المطعم',
            'مستشار إدارة الفنادق'
          ]
        },
        {
          title: 'بكالوريوس "مدير الوحدة التشغيلية"',
          recognition: 'تخصص في الإدارة التشغيلية',
          opportunities: [
            'مدير إنتاج الغذاء',
            'مدير وحدة تقديم الطعام الجماعي',
            'مشرف فرق الطهي',
            'منسق خدمات تقديم الطعام'
          ]
        }
      ],
      careers: [
        'طاه / طباخون',
        'طاه مدير / مدير مطعم',
        'مدير الولائم',
        'نادلون / سقاة',
        'مقدم طعام / منظم حفلات',
        'موظفو منزليون'
      ],
      opportunities: {
        title: 'فرص مهنية',
        seize: {
          title: 'فرص للاستفادة منها',
          description: 'شراكاتنا مع المؤسسات المرموقة تقدم لكم فرصاً في المغرب ودولياً'
        },
        countries: ['المغرب', 'أوروبا', 'كندا', 'الشرق الأوسط'],
        images: {
          immigration: 'فرص الهجرة والعمل',
          canada: 'كندا - فرص في الخارج'
        }
      },
      employment: {
        title: 'العمل والفرص',
        subtitle: 'تعاون مع الشركات المغربية والمتعددة الجنسيات لضمان إدماجكم المهني'
      },
      cta: {
        title: 'احصلوا على شهادتكم المعترف بها',
        subtitle: 'انضموا إلى SOS CHEF واحصلوا على شهادة تفتح لكم أبواب مسيرتكم الدولية',
        formations: 'شاهدوا التكوينات',
        contact: 'اتصلوا بنا'
      },
      sosService: {
        badge: 'خدمة الموظفين',
        title: 'SOS SERVICE - توظيف موظفين مؤهلين',
        subtitle: 'محترفون ذوو خبرة لاحتياجاتكم في المغرب ودولياً',
        intro: 'SOS SERVICE يوظف موظفين مؤهلين (منازل ومطاعم ووجبات خفيفة ومقاهي) في جميع أنحاء المغرب: نساء أو رجال، تنظيف منازل، مربية أطفال، خادمة، خبيرة تجميل ذات خبرة، محترفون في مجالاتهم.',
        specialists: {
          title: 'متخصصونا',
          elderly: {
            title: 'رعاية المسنين',
            description: 'مساعدون ذوو خبرة مهنية ممتازة يعتنون بكبار السن الذين تتراوح أعمارهم بين 60 و 95 عاماً'
          },
          domestic: {
            title: 'الموظفون المنزليون',
            description: 'طاهية، سائق، مدبرة منزل، مساعد معيشة للأفراد والشركات'
          },
          hospitality: {
            title: 'موظفو الضيافة',
            description: 'توظيف موظفين مؤهلين في الفنادق والمطاعم'
          }
        },
        commitment: {
          title: 'التزامنا',
          description: 'SOS SERVICES في خدمتكم ويبذل كل جهد للعثور على أفضل مرشح، الذي سيلبي جميع توقعاتكم.',
          trust: 'إن استقبال شخص لا تعرفه في منزلك، وتكليفه بإدارة منزلك، وتعليم أطفالك، وإدخاله في حياتك اليومية يتطلب ثقة مطلقة.',
          process: 'لهذا السبب، فإن عملية التوظيف لدينا دقيقة وصارمة. جميع المرشحين الذين نقدمهم مؤهلون ولديهم خبرة واحدة على الأقل يمكن التحقق منها.'
        },
        guarantee: {
          title: 'ضمان الاستبدال',
          description: 'لطمأنة عملائنا بشكل أكبر، نقدم ضمانات استبدال لمدة تصل إلى شهر واحد.',
          coverage: 'تغطي خدماتنا جميع أنحاء المغرب وحتى دولياً'
        }
      }
    },
    whatsapp: {
      message: 'مرحبا! 👨‍🍳 أريد معرفة المزيد عن تكوينات SOS CHEF',
      tooltip: 'اتصل بنا على واتساب'
    },
    common: {
      loading: 'جاري التحميل...',
      institution: 'مؤسسة مغربية معتمدة'
    }
  }
};
