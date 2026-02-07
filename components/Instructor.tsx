
import React from 'react';
import { useLanguage } from '../LanguageContext';

const Instructor: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-black py-24 scroll-mt-24 overflow-hidden" id="about">
      {/* Grid Background Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)`,
          backgroundSize: '40px 40px' 
        }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 md:mb-0">
            {t.instructor.title}
          </h2>
          
          <div className="flex items-center gap-4 text-sm font-medium">
            {t.instructor.filters.map((filter: string, i: number) => (
              <React.Fragment key={i}>
                <button className={`hover:text-primary transition-colors ${i === 0 ? 'text-primary' : 'text-gray-500'}`}>
                  {filter}
                </button>
                {i < t.instructor.filters.length - 1 && <div className="w-8 h-[1px] bg-gray-700"></div>}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.instructor.members.map((member: any, idx: number) => (
            <div key={idx} className="group relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-[#111] border border-white/5">
              {/* Image with grayscale to color transition */}
              <img 
                alt={member.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out transform group-hover:scale-110 opacity-70 group-hover:opacity-100" 
                src={member.img}
              />
              
              {/* Top UI Overlay */}
              <div className="absolute top-6 left-6 right-6 flex justify-between items-start pointer-events-none">
                <div className="px-4 py-1.5 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white/80 text-[10px] uppercase tracking-widest font-bold">
                  {member.role}
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white font-bold text-xs">
                  4.9 <span className="text-primary material-icons-round text-sm">star</span>
                </div>
              </div>

              {/* Bottom UI Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-1 tracking-tight">{member.name}</h3>
                  <p className="text-gray-400 text-xs font-medium opacity-80">{member.exp}</p>
                </div>
                
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20 transform group-hover:rotate-45 transition-transform duration-500">
                  <span className="material-icons-round">north_east</span>
                </div>
              </div>

              {/* Subtle Gradient Shadow for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructor;
