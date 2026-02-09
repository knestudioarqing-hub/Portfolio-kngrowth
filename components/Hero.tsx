import React from 'react';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const renderTitle = () => {
    const parts = t.hero.title.split('{span}');
    return (
      <>
        {parts[0]}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-500">
          {t.hero.span}
        </span>
        {parts[1]}
      </>
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
          alt="Space background"
          className="w-full h-full object-cover opacity-100 dark:opacity-60 transition-opacity duration-500"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt23uStQ8fzqfBPmXDXVScWerbZUQVjBX9_K48H-V-ZbkAc6xZvXz2iaBOdWArHQDrlJFsE6N35yJXXwzzylgO6PszSx5kAAg4kDXTjgzyifN9A2QMElgvt7f3UXartz1X-e-cVGlZ-I34jTgUtImDf1EtbEu8IbOZwvgmuQGjiZoW7DQuGaZymDuIY4TApHSqpoykPWA9nugo9SiLfd9zpP34dVoZJi6gB3PaRQJxq3wBLZFR8AiWo_ch9J4O2-yoN2gu6f6cxM"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-light/80 to-background-light dark:via-background-dark/80 dark:to-background-dark"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900 dark:text-white">
            {renderTitle()}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 font-light">
            {t.hero.sub}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#work"
              onClick={handleScrollToWork}
              className="px-8 py-4 bg-gradient-to-r from-primary to-orange-500 hover:from-orange-600 hover:to-primary text-white font-bold rounded-xl shadow-lg shadow-orange-500/40 transform transition hover:-translate-y-1 text-center"
            >
              {t.hero.workBtn}
            </a>
            <a
              href="https://www.kngrowth.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/5 border border-white/20 hover:bg-white/10 text-white font-bold rounded-xl backdrop-blur-md transform transition hover:-translate-y-1 text-center"
            >
              {t.hero.webBtn}
            </a>
          </div>
        </div>

        <div className="relative hidden lg:flex justify-center items-center">
          <div className="relative w-[450px] h-[450px] rounded-full overflow-hidden border border-white/10 shadow-2xl shadow-primary/20 group">
            <img
              alt="Astronaut"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi4dXII4EXkie2x4VpIsOCIu7oOgz-hlctitRzIst-6pw8rJuoXgwLhJTUgIBkmy7StsBlwt00ARXQKOnwubEQz4wBmxnDztbK7tEHRK5XEp7bwYzcz5Y7U1TbYPU8V2fJpXomfCom22ScC9duh8_N3Macx8L17C1KbTz1Z9yDJUJ5_n4qVzfeHkXvShAuHbqKV5IlGI4wl0P564gbRxzWWdqFfPaQ2ajsn0ek5ox88ZkzXltP4QBMpHsL8jISe-LhehDCkiJV3YQ"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end pb-8 items-center">
              <div className="flex gap-8 text-xs font-bold tracking-widest text-white/70 mb-6 uppercase">
                <span className="cursor-pointer hover:text-white">Video</span>
                <span className="text-white border-b-2 border-primary pb-1">Photo</span>
                <span className="cursor-pointer hover:text-white">Square</span>
              </div>
              <div className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="absolute -z-10 w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full animate-pulse"></div>
        </div>
      </div>
    </header>
  );
};

export default Hero;