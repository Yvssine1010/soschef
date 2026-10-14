import { Link, useLocation } from 'react-router-dom';
import { Home, GraduationCap, Users, Mail, Award, Menu, X, ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from './LanguageSwitcher';
import logo from '@/assets/sos-chef-logo.png.asset.json';

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, isRTL, language } = useLanguage();
  const menuLabel = language === 'ar' ? 'القائمة' : language === 'fr' ? 'Menu de navigation' : 'Navigation menu';
  const navItems = [
    { path: '/', label: t('nav.home'), icon: Home },
    { path: '/formations', label: t('nav.formations'), icon: GraduationCap },
    { path: '/about', label: t('nav.about'), icon: Users },
    { path: '/diplomes', label: t('nav.diplomes'), icon: Award },
    { path: '/contact', label: t('nav.contact'), icon: Mail },
  ];

  useEffect(() => { setIsMenuOpen(false); }, [location.pathname]);
  useEffect(() => {
    if (!isMenuOpen) return;
    const dismiss = (event: KeyboardEvent) => { if (event.key === 'Escape') setIsMenuOpen(false); };
    window.addEventListener('keydown', dismiss);
    return () => window.removeEventListener('keydown', dismiss);
  }, [isMenuOpen]);

  return (
    <header className="site-header sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-xl" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="mx-auto flex min-h-[120px] max-w-[1440px] items-center justify-between gap-2 px-3 sm:min-h-[128px] sm:gap-5 sm:px-6 lg:px-8">
        <Link to="/" aria-label="SOS CHEF" className="brand-lockup flex min-w-0 shrink-0 items-center gap-3 sm:gap-4">
          <span className="brand-logo-surface flex h-[100px] w-[76px] shrink-0 items-center justify-center sm:h-[108px] sm:w-[82px]">
            <img src={`https://orienta-pro-elevate.lovable.app${logo.url}`} alt="SOS CHEF" className="h-[96px] w-[70px] object-contain sm:h-[104px] sm:w-[76px]" fetchPriority="high" />
          </span>
          <span className="flex min-w-0 flex-col gap-1">
            <span className="brand-name whitespace-nowrap font-sans text-[25px] font-bold leading-none sm:text-[32px]">SOS <span className="text-primary">CHEF</span></span>
            <span className="max-w-[140px] text-[10px] font-medium leading-snug text-muted-foreground sm:max-w-[190px] sm:text-xs">{t('common.institution')}</span>
          </span>
        </Link>

        <nav aria-label={menuLabel} className="hidden items-center gap-1 xl:flex">
          {navItems.map(({ path, label }) => (
            <Link key={path} to={path} aria-current={location.pathname === path ? 'page' : undefined} className={`desktop-nav-link relative px-3 py-3 text-sm transition-colors hover:text-primary ${location.pathname === path ? 'font-semibold text-primary' : 'text-foreground'}`}>{label}</Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1 sm:gap-3">
          <LanguageSwitcher />
          <Button variant="outline" size="icon" onClick={() => setIsMenuOpen(open => !open)} aria-label={menuLabel} aria-expanded={isMenuOpen} aria-controls="mobile-navigation" className="h-11 w-11 border-primary/20 text-primary xl:hidden [&_svg]:size-5">
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <nav id="mobile-navigation" aria-label={menuLabel} className="mobile-nav-panel absolute inset-x-0 top-full max-h-[calc(100dvh-120px)] overflow-y-auto border-b border-border bg-card px-4 pb-5 pt-2 shadow-xl xl:hidden">
          <div className="mx-auto max-w-3xl">
            {navItems.map(({ path, label, icon: Icon }, index) => (
              <Link key={path} to={path} onClick={() => setIsMenuOpen(false)} aria-current={location.pathname === path ? 'page' : undefined} className={`group flex min-h-[60px] items-center gap-4 border-b border-border/60 px-3 py-3 transition-colors hover:bg-muted ${location.pathname === path ? 'bg-primary/5 text-primary' : 'text-foreground'}`}>
                <span className="w-5 text-[10px] font-medium text-muted-foreground">0{index + 1}</span>
                <Icon className="h-5 w-5 shrink-0" />
                <span className="flex-1 text-lg font-medium">{label}</span>
                <ArrowUpRight className={`h-4 w-4 text-primary transition-transform group-hover:-translate-y-0.5 ${isRTL ? '-scale-x-100' : ''}`} />
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navigation;
