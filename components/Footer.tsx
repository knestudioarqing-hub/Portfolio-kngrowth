import React from 'react';
import { useLanguage } from '../LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-background-light dark:bg-black py-12 border-t border-gray-200 dark:border-white/10" id="contact">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <span className="font-sans font-light text-2xl tracking-wider text-gray-900 dark:text-white uppercase">
            KN Growth
          </span>
          <div className="flex gap-6">
            <a className="text-gray-500 hover:text-primary transition-colors" href="#"><span className="material-icons-round">camera_alt</span></a> 
            <a className="text-gray-500 hover:text-primary transition-colors" href="#"><span className="material-icons-round">play_circle</span></a> 
            <a className="text-gray-500 hover:text-primary transition-colors" href="#"><span className="material-icons-round">alternate_email</span></a>
          </div>
        </div>
        <div className="text-center md:text-left text-sm text-gray-500 dark:text-gray-600">
          © 2024 KN Growth Portfolio. {t.footer.rights} <br className="md:hidden"/>{t.footer.passion}
        </div>
      </div>
    </footer>
  );
};

export default Footer;