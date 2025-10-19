import { Link, useLocation } from 'react-router-dom';
import { Home, Briefcase, Users, Mail, LayoutDashboard } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Accueil', icon: Home },
    { path: '/services', label: 'Services', icon: Briefcase },
    { path: '/about', label: 'À Propos', icon: Users },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-card/80 backdrop-blur-lg border rounded-2xl p-2 shadow-lg flex gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${isActive ? 'text-primary font-medium' : 'text-foreground'}`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span className="ml-2 whitespace-nowrap">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
