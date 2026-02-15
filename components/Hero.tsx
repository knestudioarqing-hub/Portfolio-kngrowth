import React, { useEffect, useState } from 'react';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detectar si es un dispositivo táctil
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouchDevice();

    const handleMouseMove = (e: MouseEvent) => {
      if (isTouchDevice) return;
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20, // -10 to 10
        y: (e.clientY / window.innerHeight - 0.5) * 20, // -10 to 10
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isTouchDevice]);

  const renderSubtitle = () => {
    const parts = t.hero.sub.split('|');
    if (parts.length === 2) {
      return (
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] leading-snug sm:leading-tight mb-6 sm:mb-8 lg:mb-10 text-gray-600 dark:text-gray-300 mx-auto lg:mx-0 font-instrument px-4 sm:px-0">
          <span className="block font-normal">{parts[0]}</span>
          <span className="block font-bold mt-0.5 sm:mt-4 text-white">{parts[1]}</span>
        </div>
      );
    }
    return (
      <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 lg:mb-10 font-light max-w-2xl mx-auto lg:mx-0 px-4 sm:px-0">
        {t.hero.sub}
      </p>
    );
  };

  const handleScrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#work');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative min-h-[100svh] flex items-center justify-center py-12 sm:pt-24 sm:pb-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Mobile background image */}
        <img
          alt="Background"
          className="w-full h-full object-cover sm:hidden opacity-100"
          src="https://i.imgur.com/qjvaNXf.jpeg"
        />
        {/* Desktop background image */}
        <img
          alt="Background"
          className="w-full h-full object-cover hidden sm:block opacity-100 transition-transform duration-100 ease-out scale-110"
          src="https://i.imgur.com/8TFJj8m.jpeg"
          style={{
            transform: isTouchDevice ? 'none' : `translate(${mousePosition.x * -1}px, ${mousePosition.y * -1}px) scale(1.1)`,
          }}
        />
        {/* Desktop gradient */}
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background-light dark:to-background-dark"></div>
        {/* Mobile dark overlay for text contrast */}
        <div className="sm:hidden absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        {/* spotlight effect */}
        <div
          className="absolute inset-0 pointer-events-none bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-0 lg:opacity-30 transition-opacity duration-500"
          style={{
            maskImage: `radial-gradient(circle 500px at ${50 + mousePosition.x * 2}% ${50 + mousePosition.y * 2}%, black, transparent)`,
            WebkitMaskImage: `radial-gradient(circle 500px at ${50 + mousePosition.x * 2}% ${50 + mousePosition.y * 2}%, black, transparent)`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
        <div className="max-w-4xl mx-auto lg:mx-0">
          {/* Title - white with shadow on mobile for contrast, gradient on desktop */}
          <h1 className="font-serif text-[40px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold leading-[1.1] sm:leading-tight mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-black/90 drop-shadow-sm pb-2 px-2 sm:px-0 whitespace-nowrap">
            {t.hero.title}
          </h1>
          {renderSubtitle()}

          {/* Buttons - stacked full-width on mobile, row on desktop */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start w-full sm:w-auto px-4 sm:px-0">
            <a
              href="#work"
              onClick={handleScrollToWork}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-[#FF5733] text-white font-bold rounded-[10px] shadow-[inset_0px_0px_6px_0px_rgba(0,0,0,0.3)] drop-shadow-[0_4px_6px_rgba(255,87,51,0.3)] hover:bg-[#E64A2E] transform transition-all duration-300 ease-in-out hover:-translate-y-1 text-center text-sm sm:text-base active:scale-95 min-h-[52px] sm:min-h-[56px] flex items-center justify-center"
            >
              {t.hero.workBtn}
            </a>
            <a
              href="https://www.kngrowth.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-black/90 sm:bg-black border border-white/20 hover:bg-white/10 text-white font-instrument font-normal rounded-[10px] shadow-[inset_0px_0px_6px_0px_#4C4C4C] backdrop-blur-md transform transition-all duration-300 ease-in-out hover:-translate-y-1 text-center text-sm sm:text-base active:scale-95 min-h-[52px] sm:min-h-[56px] flex items-center justify-center"
            >
              {t.hero.webBtn}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
