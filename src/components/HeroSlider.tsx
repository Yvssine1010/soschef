import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroFood from '@/assets/hero-gourmet-food.jpg';
import heroCanada from '@/assets/hero-canada-immigration.jpg';
import heroTeaching from '@/assets/hero-teaching-cooking.jpg';
interface Slide {
  image: string;
  title: string;
  subtitle: string;
}
const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const {
    t
  } = useLanguage();
  const slides: Slide[] = [{
    image: heroFood,
    title: t('hero.excellence'),
    subtitle: t('hero.subtitle')
  }, {
    image: heroCanada,
    title: t('hero.international'),
    subtitle: t('hero.internationalSubtitle')
  }, {
    image: heroTeaching,
    title: t('hero.teaching'),
    subtitle: t('hero.teachingSubtitle')
  }];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  const goToPrevious = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };
  const goToNext = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };
  return <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => <div key={index} className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/30" />
        </div>)}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4 max-w-5xl mx-auto">
          <div className="transition-all duration-1000 ease-out" key={currentSlide} style={{
          animation: 'fadeInUp 1s ease-out'
        }}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-2xl">
              {slides[currentSlide].title}
            </h1>
            <h2 className="text-3xl md:text-5xl font-semibold mb-8 text-secondary drop-shadow-lg">
              {slides[currentSlide].subtitle}
            </h2>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-secondary rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      
      

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => <button key={index} onClick={() => goToSlide(index)} className={`rounded-full transition-all duration-300 hover:scale-125 ${index === currentSlide ? 'bg-white w-8 h-3 shadow-lg' : 'bg-white/50 hover:bg-white/75 w-3 h-3'}`} aria-label={`Go to slide ${index + 1}`} />)}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div className="h-full bg-secondary transition-all duration-100 ease-linear" style={{
        width: `${(currentSlide + 1) / slides.length * 100}%`
      }} />
      </div>
    </div>;
};
export default HeroSlider;