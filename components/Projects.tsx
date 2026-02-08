
import React from 'react';
import { useLanguage } from '../LanguageContext';

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const works = [
    {
      title: "Neo Fintech",
      category: "UI/UX Design • Development",
      img: "https://i.imgur.com/tEr3YiY.png"
    },
    {
      title: "KN Analytics",
      category: "Dashboard UI • Growth Strategy",
      img: "https://i.imgur.com/s0GpHE6.png"
    },
    {
      title: "Vogue Editorial",
      category: "Web Design • Strategy",
      img: "https://i.imgur.com/HyB8EKW.png"
    },
    {
      title: "Aura Interiors",
      category: "E-commerce • Branding",
      img: "https://i.imgur.com/46GGT7t.png"
    },
    {
      title: "Global Horizon",
      category: "Travel - Experience",
      img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Mercado Libre Mastery",
      category: "E-learning - Growth",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#080808] border-t border-gray-200 dark:border-white/5 scroll-mt-24" id="work">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-sm">{t.projects.tag}</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-2 text-gray-900 dark:text-white">{t.projects.title}</h2>
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

              <div className="absolute bottom-0 left-0 p-10 transform transition-transform duration-500">
                <h3 className="text-3xl font-bold text-white mb-2 font-display tracking-tight">{work.title}</h3>
                <p className="text-white/70 text-sm font-medium tracking-wide uppercase">{work.category}</p>
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
