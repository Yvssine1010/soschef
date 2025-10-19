import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface FlipImage {
  title: string;
  url: string;
}

interface FlipGalleryProps {
  images: FlipImage[];
}

const FLIP_SPEED = 750;
const flipTiming = { duration: FLIP_SPEED, iterations: 1 };

const flipAnimationTop = [
  { transform: 'rotateX(0)' },
  { transform: 'rotateX(-90deg)' },
  { transform: 'rotateX(-90deg)' }
];
const flipAnimationBottom = [
  { transform: 'rotateX(90deg)' },
  { transform: 'rotateX(90deg)' },
  { transform: 'rotateX(0)' }
];

const flipAnimationTopReverse = [
  { transform: 'rotateX(-90deg)' },
  { transform: 'rotateX(-90deg)' },
  { transform: 'rotateX(0)' }
];
const flipAnimationBottomReverse = [
  { transform: 'rotateX(0)' },
  { transform: 'rotateX(90deg)' },
  { transform: 'rotateX(90deg)' }
];

export default function FlipGallery({ images }: FlipGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const uniteRef = useRef<HTMLDivElement[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;
    uniteRef.current = Array.from(containerRef.current.querySelectorAll('.unite'));
    defineFirstImg();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const defineFirstImg = () => {
    uniteRef.current.forEach(setActiveImage);
    setImageTitle();
  };

  const setActiveImage = (el: HTMLElement) => {
    el.style.backgroundImage = `url('${images[currentIndex].url}')`;
  };

  const setImageTitle = () => {
    const gallery = containerRef.current;
    if (!gallery) return;
    gallery.setAttribute('data-title', images[currentIndex].title);
    gallery.style.setProperty('--title-y', '0');
    gallery.style.setProperty('--title-opacity', '1');
  };

  const updateGallery = (nextIndex: number, isReverse = false) => {
    const gallery = containerRef.current;
    if (!gallery) return;

    const topAnim = isReverse ? flipAnimationTopReverse : flipAnimationTop;
    const bottomAnim = isReverse ? flipAnimationBottomReverse : flipAnimationBottom;

    gallery.querySelector('.overlay-top')?.animate(topAnim, flipTiming);
    gallery.querySelector('.overlay-bottom')?.animate(bottomAnim, flipTiming);

    gallery.style.setProperty('--title-y', '-1rem');
    gallery.style.setProperty('--title-opacity', '0');
    gallery.setAttribute('data-title', '');

    uniteRef.current.forEach((el, idx) => {
      const delay =
        (isReverse && (idx !== 1 && idx !== 2)) ||
        (!isReverse && (idx === 1 || idx === 2))
          ? FLIP_SPEED - 200
          : 0;

      setTimeout(() => setActiveImage(el), delay);
    });

    setTimeout(setImageTitle, FLIP_SPEED * 0.5);
  };

  const updateIndex = (increment: number) => {
    const inc = Number(increment);
    const newIndex = (currentIndex + inc + images.length) % images.length;
    const isReverse = inc < 0;
    setCurrentIndex(newIndex);
    updateGallery(newIndex, isReverse);
  };

  return (
    <div className='relative'>
      <div
        id='flip-gallery'
        ref={containerRef}
        className='relative w-[240px] h-[400px] md:w-[300px] md:h-[500px] text-center'
        style={{ perspective: '800px' }}
      >
        <div className='top unite bg-cover bg-no-repeat'></div>
        <div className='bottom unite bg-cover bg-no-repeat'></div>
        <div className='overlay-top unite bg-cover bg-no-repeat'></div>
        <div className='overlay-bottom unite bg-cover bg-no-repeat'></div>
      </div>

      <div className='absolute top-full right-0 mt-4 flex gap-2'>
        <button
          type='button'
          onClick={() => updateIndex(-1)}
          title='Previous'
          className='text-foreground opacity-75 hover:opacity-100 hover:scale-125 transition p-2 rounded-lg bg-card border'
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type='button'
          onClick={() => updateIndex(1)}
          title='Next'
          className='text-foreground opacity-75 hover:opacity-100 hover:scale-125 transition p-2 rounded-lg bg-card border'
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <style>{`
        #flip-gallery::after {
          content: '';
          position: absolute;
          background-color: hsl(var(--primary));
          width: 100%;
          height: 4px;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }

        #flip-gallery::before {
          content: attr(data-title);
          color: hsl(var(--muted-foreground));
          font-size: 0.875rem;
          left: -0.5rem;
          position: absolute;
          top: calc(100% + 1rem);
          line-height: 2;
          opacity: var(--title-opacity, 0);
          transform: translateY(var(--title-y, 0));
          transition: opacity 500ms ease-in-out, transform 500ms ease-in-out;
        }

        #flip-gallery > * {
          position: absolute;
          width: 100%;
          height: 50%;
          overflow: hidden;
          background-size: 240px 400px;
        }

        @media (min-width: 600px) {
          #flip-gallery > * {
            background-size: 300px 500px;
          }
        }

        .top,
        .overlay-top {
          top: 0;
          transform-origin: bottom;
          background-position: top;
        }

        .bottom,
        .overlay-bottom {
          bottom: 0;
          transform-origin: top;
          background-position: bottom;
        }
      `}</style>
    </div>
  );
}
