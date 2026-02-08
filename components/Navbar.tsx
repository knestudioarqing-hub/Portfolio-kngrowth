import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext.tsx';
import { Language } from '../translations.ts';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const languages: { code: Language; label: string }[] = [
    { code: 'pt', label: 'PT' },
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' }
  ];

  return (
    <nav className={`fixed w-full z-50 top-0 left-0 py-4 px-6 md:px-12 transition-all duration-300`}>
      <div className={`max-w-7xl mx-auto flex justify-between items-center px-6 py-3 rounded-full border border-white/10 shadow-lg transition-all duration-300 ${scrolled ? 'bg-black/40 backdrop-blur-lg border-white/20' : 'bg-transparent'}`}>
        <div className="flex items-center gap-2">
          <span className="font-light text-xl md:text-2xl tracking-wider text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
            KN Growth
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
          <a
            className="hover:text-primary transition-colors cursor-pointer"
            href="#work"
            onClick={(e) => handleSmoothScroll(e, '#work')}
          >
            {t.nav.work}
          </a>
          <a
            className="hover:text-primary transition-colors cursor-pointer"
            href="#about"
            onClick={(e) => handleSmoothScroll(e, '#about')}
          >
            {t.nav.team}
          </a>
          <a className="hover:text-primary transition-colors" href="https://www.kngrowth.com/" target="_blank" rel="noopener noreferrer">{t.nav.web}</a>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex bg-white/10 p-1 rounded-full border border-white/10">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`px-2 py-1 text-[10px] md:text-xs font-bold rounded-full transition-all ${language === lang.code
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-white/60 hover:text-white'
                  }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <span className="material-icons-round text-xl text-white">
              {darkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;