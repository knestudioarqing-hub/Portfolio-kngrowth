
import React from 'react';
import { useLanguage } from '../LanguageContext';

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const works = [
    {
      title: "KN Growth",
      category: "UI/UX Design • Development",
      img: "https://i.imgur.com/tEr3YiY.png"
    },
    {
      title: "Clínica de Saúde",
      category: "Medicina Estética • Growth Strategy",
      img: "https://i.imgur.com/s0GpHE6.png"
    },
    {
      title: "E-commerce",
      category: "Landing Page • Vendas Online",
      img: "https://i.imgur.com/HyB8EKW.png"
    },
    {
      title: "Aura Interiors",
      category: "E-commerce • Branding",
      img: "https://i.imgur.com/46GGT7t.png"
    },
    {
      title: "Agência de Turismo",
      category: "Experiências • Reservas",
      img: "https://i.imgur.com/ZmBG8AP.jpeg"
    },
    {
      title: "Mercado Libre Mastery",
      category: "E-learning - Growth",
      img: "https://i.imgur.com/uEqeizW.jpeg"
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#080808] border-t border-gray-200 dark:border-white/5 scroll-mt-24" id="work">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 text-center md:text-left">
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-sm block">{t.projects.tag}</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-2 text-gray-900 dark:text-white leading-tight">{t.projects.title}</h2>
          </div>
          <a className="hidden md:flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors mt-4 md:mt-0 font-medium" href="#">
            {t.projects.viewAll} <span className="material-icons-round text-sm">arrow_forward</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {works.map((work, idx) => (
            <div key={idx} className="group relative rounded-[2.5rem] overflow-hidden cursor-pointer aspect-[16/10] bg-gray-900 border border-white/5 shadow-2xl transition-all duration-500 hover:shadow-primary/5">
              <img
                alt={work.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                src={work.img}
              />
              {/* Overlay with subtle darkening for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

              <div className="absolute bottom-0 left-0 p-6 md:p-10 transform transition-all duration-500 group-hover:translate-y-[-10px]">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-display tracking-tight">{work.title}</h3>
                <div className="h-0.5 w-12 bg-primary mb-3 transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>
                <p className="text-white/80 text-xs md:text-sm font-bold tracking-widest uppercase bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full inline-block border border-white/10">{work.category}</p>
              </div>

              {/* Action Button */}
              <div className="absolute top-8 right-8 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0">
                <span className="material-icons-round">north_east</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors font-bold" href="#">
            {t.projects.viewAll} <span className="material-icons-round text-sm">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
