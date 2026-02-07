
import React from 'react';
import { useLanguage } from '../LanguageContext';

const Features: React.FC = () => {
  const { t } = useLanguage();
  const features = t.features.items;

  return (
    <section className="py-24 bg-background-light dark:bg-background-dark relative scroll-mt-24" id="services">
      <div className="container mx-auto px-6">
        <h2 className="text-center font-display text-3xl md:text-4xl font-bold mb-16 text-gray-900 dark:text-white">
          {t.features.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((text: string, idx: number) => (
            <div 
              key={idx}
              className="group bg-white dark:bg-[#121212] border border-gray-200 dark:border-white/10 rounded-3xl p-8 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-gray-300 dark:border-white/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                <span className="material-icons-round text-3xl text-gray-400 dark:text-white group-hover:text-primary transition-colors">check</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-medium leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
