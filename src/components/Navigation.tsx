import { Link, useLocation } from 'react-router-dom';
import { Home, GraduationCap, Users, Mail, Award } from 'lucide-react';
import logo from '@/assets/sos-chef-logo.jpg';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Accueil', icon: Home },
    { path: '/formations', label: 'Formations', icon: GraduationCap },
    { path: '/about', label: 'Qui Sommes-nous', icon: Users },
    { path: '/diplomes', label: 'Diplômes', icon: Award },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="SOS CHEF" className="h-16 w-16 object-contain" />
            <div className="hidden md:block">
              <div className="font-bold text-xl text-primary">SOS CHEF</div>
              <div className="text-xs text-muted-foreground">Institution Marocaine Accréditée</div>
            </div>
          </Link>
          
          <div className="flex gap-1">
            {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link ${isActive ? 'text-primary font-medium' : 'text-foreground'}`}
                >
                  <Icon className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                  <span className="ml-2 whitespace-nowrap text-sm md:text-base">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
