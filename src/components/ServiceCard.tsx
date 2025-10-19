import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  link?: string;
}

const ServiceCard = ({ title, description, icon: Icon, features, link }: ServiceCardProps) => {
  return (
    <div className="service-card group p-8">
      <div className="flex items-start gap-4 mb-6">
        <div className="p-3 rounded-xl bg-primary/10">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
      
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-accent mt-1">•</span>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      {link && (
        <Link to={link}>
          <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            En savoir plus
          </Button>
        </Link>
      )}
    </div>
  );
};

export default ServiceCard;
