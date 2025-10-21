import { Link, useLocation } from 'react-router-dom';
import { Home, GraduationCap, Users, Mail, Award, Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '@/assets/sos-chef-logo.jpg';

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Accueil', icon: Home },
    { path: '/formations', label: 'Formations', icon: GraduationCap },
    { path: '/about', label: 'Qui Sommes-nous', icon: Users },
    { path: '/diplomes', label: 'Diplômes', icon: Award },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <img src={logo} alt="SOS CHEF" className="h-12 w-12 sm:h-16 sm:w-16 object-contain" />
            <div className="hidden sm:block">
              <div className="font-bold text-lg sm:text-xl text-primary">SOS CHEF</div>
              <div className="text-xs text-muted-foreground">Institution Marocaine Accréditée</div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-1">
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden border-t bg-card/98 backdrop-blur-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive 
                      ? 'bg-primary text-primary-foreground font-medium' 
                      : 'hover:bg-accent'
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
