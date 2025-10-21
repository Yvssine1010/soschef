import { Link, useLocation } from 'react-router-dom';
import { Home, GraduationCap, Users, Mail, Award, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import logo from '@/assets/sos-chef-logo.jpg';

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, isRTL } = useLanguage();

  const navItems = [
    { path: '/', label: t('nav.home'), icon: Home },
    { path: '/formations', label: t('nav.formations'), icon: GraduationCap },
    { path: '/about', label: t('nav.about'), icon: Users },
    { path: '/diplomes', label: t('nav.diplomes'), icon: Award },
    { path: '/contact', label: t('nav.contact'), icon: Mail },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-b shadow-sm transition-all duration-300 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between h-16 sm:h-20 ${isRTL ? 'flex-row-reverse' : ''}`}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0 group hover-scale">
            <div className="relative">
              <img 
                src={logo} 
                alt="SOS CHEF" 
                className="h-12 w-12 sm:h-16 sm:w-16 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" 
              />
              <div className="absolute inset-0 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-lg sm:text-xl text-primary group-hover:text-secondary transition-colors duration-300">SOS CHEF</div>
              <div className="text-xs text-muted-foreground group-hover:text-primary transition-colors duration-300">{t('common.institution')}</div>
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
                  <span className={`whitespace-nowrap ${isRTL ? 'mr-2' : 'ml-2'}`}>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-accent transition-all duration-300 hover-scale"
              aria-label="Toggle menu"
            >
              <div className="relative">
                {isMenuOpen ? (
                  <X className="w-6 h-6 transition-transform duration-300 rotate-180" />
                ) : (
                  <Menu className="w-6 h-6 transition-transform duration-300" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden border-t bg-card/98 backdrop-blur-lg animate-slideInDown">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 hover-scale group ${
                    isActive 
                      ? 'bg-primary text-primary-foreground font-medium' 
                      : 'hover:bg-accent'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:text-primary transition-colors duration-300">{item.label}</span>
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
