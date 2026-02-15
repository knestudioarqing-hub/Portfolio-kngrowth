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
        <div className="text-lg sm:text-2xl md:text-3xl lg:text-[40px] leading-snug sm:leading-tight mb-6 sm:mb-8 lg:mb-10 text-gray-200 sm:text-gray-600 dark:text-gray-300 mx-auto lg:mx-0 font-instrument px-4 sm:px-0">
          <span className="block font-normal text-gray-300 sm:text-gray-600 dark:text-gray-300">{parts[0]}</span>
          <span className="block font-bold mt-2 sm:mt-4 text-white">{parts[1]}</span>
        </div>
      );
    }
    return (
      <p className="text-lg sm:text-2xl md:text-3xl text-gray-200 sm:text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 lg:mb-10 font-light max-w-2xl mx-auto lg:mx-0 px-4 sm:px-0">
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
    <header className="relative min-h-[100svh] flex flex-col sm:flex-row items-center justify-center pt-16 sm:pt-24 pb-8 sm:pb-12 overflow-hidden">
      {/* Background Image - Different for mobile vs desktop */}
      <div className="absolute inset-0 z-0">
        {/* Mobile: object-contain to show full image */}
        <img
          alt="Background"
          className="w-full h-full object-contain sm:object-cover opacity-100 transition-transform duration-100 ease-out scale-110 sm:scale-110"
          src="https://i.imgur.com/8TFJj8m.jpeg"
          style={{
            transform: isTouchDevice ? 'none' : `translate(${mousePosition.x * -1}px, ${mousePosition.y * -1}px) scale(1.1)`,
          }}
        />
        {/* Dark overlay for mobile to ensure text contrast */}
        <div className="absolute inset-0 bg-black/60 sm:bg-gradient-to-b from-transparent via-transparent to-background-light dark:to-background-dark"></div>
        {/* Additional darkening for mobile */}
        <div className="absolute inset-0 bg-black/40 sm:hidden"></div>
        {/* spotlight effect - only on desktop */}
        <div
          className="absolute inset-0 pointer-events-none bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-0 lg:opacity-30 transition-opacity duration-500 hidden sm:block"
          style={{
            maskImage: `radial-gradient(circle 500px at ${50 + mousePosition.x * 2}% ${50 + mousePosition.y * 2}%, black, transparent)`,
            WebkitMaskImage: `radial-gradient(circle 500px at ${50 + mousePosition.x * 2}% ${50 + mousePosition.y * 2}%, black, transparent)`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-end sm:justify-center text-center h-full pb-8 sm:pb-0">
        <div className="max-w-4xl mx-auto w-full">
          <h1 className="font-serif text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold leading-[1.15] sm:leading-tight mb-3 sm:mb-6 text-white sm:text-transparent sm:bg-clip-text sm:bg-gradient-to-b sm:from-white sm:via-white sm:to-black/90 drop-shadow-lg sm:drop-shadow-sm pb-2 px-2 sm:px-0">
            {t.hero.title}
          </h1>
          {renderSubtitle()}

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center w-full px-4 sm:px-0">
            <a
              href="#work"
              onClick={handleScrollToWork}
              className="w-full sm:w-auto px-6 sm:px-8 py-4 bg-[#FF5733] text-white font-bold rounded-[10px] shadow-[inset_0px_0px_6px_0px_rgba(0,0,0,0.3)] drop-shadow-[0_4px_6px_rgba(255,87,51,0.3)] hover:bg-[#E64A2E] transform transition-all duration-300 ease-in-out hover:-translate-y-1 text-center text-base active:scale-95 min-h-[56px] flex items-center justify-center"
            >
              {t.hero.workBtn}
            </a>
            <a
              href="https://www.kngrowth.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-8 py-4 bg-black/80 sm:bg-black border border-white/20 hover:bg-white/10 text-white font-instrument font-normal rounded-[10px] shadow-[inset_0px_0px_6px_0px_#4C4C4C] backdrop-blur-md transform transition-all duration-300 ease-in-out hover:-translate-y-1 text-center text-base active:scale-95 min-h-[56px] flex items-center justify-center"
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
