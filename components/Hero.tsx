import React, { useEffect, useState } from 'react';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20, // -10 to 10
        y: (e.clientY / window.innerHeight - 0.5) * 20, // -10 to 10
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const renderSubtitle = () => {
    const parts = t.hero.sub.split('|');
    if (parts.length === 2) {
      return (
        <div className="text-lg md:text-2xl lg:text-[40px] leading-tight mb-10 text-gray-600 dark:text-gray-300 mx-auto lg:mx-0 font-instrument">
          <span className="block font-normal">{parts[0]}</span>
          <span className="block font-bold mt-4 text-white">{parts[1]}</span>
        </div>
      );
    }
    return (
      <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 mb-10 font-light max-w-2xl mx-auto lg:mx-0">
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
    <header className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          alt="Background"
          className="w-full h-full object-cover opacity-100 transition-transform duration-100 ease-out scale-110"
          src="https://i.imgur.com/8TFJj8m.jpeg"
          style={{
            transform: `translate(${mousePosition.x * -1}px, ${mousePosition.y * -1}px) scale(1.1)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background-light dark:to-background-dark"></div>
        {/* spotlight effect */}
        <div
          className="absolute inset-0 pointer-events-none bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-0 lg:opacity-30 transition-opacity duration-500"
          style={{
            maskImage: `radial-gradient(circle 500px at ${50 + mousePosition.x * 2}% ${50 + mousePosition.y * 2}%, black, transparent)`,
            WebkitMaskImage: `radial-gradient(circle 500px at ${50 + mousePosition.x * 2}% ${50 + mousePosition.y * 2}%, black, transparent)`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
        <div
          className="max-w-4xl mx-auto lg:mx-0"
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[80px] font-bold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-black/90 drop-shadow-sm pb-2">
            {t.hero.title}
          </h1>
          {renderSubtitle()}

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#work"
              onClick={handleScrollToWork}
              className="px-8 py-4 bg-[#FF5733] text-white font-bold rounded-[10px] shadow-[inset_0px_0px_6px_0px_rgba(0,0,0,0.3)] drop-shadow-[0_4px_6px_rgba(255,87,51,0.3)] hover:bg-[#E64A2E] transform transition-all duration-300 ease-in-out hover:-translate-y-1 text-center"
            >
              {t.hero.workBtn}
            </a>
            <a
              href="https://www.kngrowth.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-black border border-white/20 hover:bg-white/10 text-white font-instrument font-normal rounded-[10px] shadow-[inset_0px_0px_6px_0px_#4C4C4C] backdrop-blur-md transform transition-all duration-300 ease-in-out hover:-translate-y-1 text-center"
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