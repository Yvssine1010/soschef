import { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsVisible(false);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 150);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="flex flex-col items-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <div className="text-muted-foreground">Chargement...</div>
          </div>
        </div>
      ) : (
        <div 
          className={`transition-all duration-500 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-4 scale-95'
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default PageTransition;
