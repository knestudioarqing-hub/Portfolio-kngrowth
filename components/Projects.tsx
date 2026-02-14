
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';

interface Work {
  title: string;
  category: string;
  img: string;
  fullImg?: string | string[];
}

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [selectedImages, setSelectedImages] = useState<string[] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const works: Work[] = [
    {
      title: "KN Growth",
      category: "UI/UX Design • Development",
      img: "https://i.imgur.com/tEr3YiY.png",
      fullImg: "https://i.imgur.com/0WUAgJn.png"
    },
    {
      title: "Clínica de Saúde",
      category: "Medicina Estética • Growth Strategy",
      img: "https://i.imgur.com/s0GpHE6.png",
      fullImg: "https://i.imgur.com/rxNYwCx.png"
    },
    {
      title: "E-commerce",
      category: "Landing Page • Vendas Online",
      img: "https://i.imgur.com/HyB8EKW.png"
    },
    {
      title: "Turismo",
      category: "Agência de Viagens • Turismo",
      img: "https://i.imgur.com/46GGT7t.png",
      fullImg: "https://i.imgur.com/Ksbwmy7.png"
    },
    {
      title: "UP xpress",
      category: "Arquitetura • Design de Interiores",
      img: "https://i.imgur.com/ZmBG8AP.jpeg"
    },
    {
      title: "CapitalUp",
      category: "Assessoria Financeira • Growth",
      img: "https://i.imgur.com/uEqeizW.jpeg",
      fullImg: "https://i.imgur.com/Jrhal9q.png"
    },
    {
      title: "CRM BIM Projects",
      category: "CRM • B2B Solutions",
      img: "https://i.imgur.com/00qsM2K.png",
      fullImg: [
        "https://i.imgur.com/LDqTLLz.png",
        "https://i.imgur.com/OsCNbpJ.png",
        "https://i.imgur.com/voz96XM.png",
        "https://i.imgur.com/xjiMeVn.png",
        "https://i.imgur.com/qyT2RFq.png"
      ]
    },
    {
      title: "Nuevo Proyecto 2",
      category: "Categoría • Servicio",
      img: "https://i.imgur.com/tEr3YiY.png"
    }
  ];

  const handleWorkClick = (work: Work) => {
    if (work.fullImg) {
      const images = Array.isArray(work.fullImg) ? work.fullImg : [work.fullImg];
      setSelectedImages(images);
      setCurrentImageIndex(0);
    }
  };

  const closeModal = () => {
    setSelectedImages(null);
    setCurrentImageIndex(0);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImages) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedImages.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImages) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedImages.length) % selectedImages.length);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImages) return;

      if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prev) => (prev + 1) % selectedImages.length);
      } else if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prev) => (prev - 1 + selectedImages.length) % selectedImages.length);
      } else if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImages]);

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
            <div
              key={idx}
              onClick={() => handleWorkClick(work)}
              className={`group relative rounded-[2.5rem] overflow-hidden ${work.fullImg ? 'cursor-zoom-in' : 'cursor-default'} aspect-[16/10] bg-gray-900 border border-white/5 shadow-2xl transition-all duration-500 hover:shadow-primary/5`}
            >
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
              {work.fullImg && (
                <div className="absolute top-8 right-8 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0">
                  <span className="material-icons-round">zoom_in</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors font-bold" href="#">
            {t.projects.viewAll} <span className="material-icons-round text-sm">arrow_forward</span>
          </a>
        </div>
      </div>

      {/* Modal / Carousel */}
      {selectedImages && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 transition-opacity duration-300"
          onClick={closeModal}
        >
          <button
            className="absolute top-6 right-6 z-[60] text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md"
            onClick={(e) => { e.stopPropagation(); closeModal(); }}
          >
            <span className="material-icons-round text-3xl">close</span>
          </button>

          {/* Navigation Arrows */}
          {selectedImages.length > 1 && (
            <>
              <button
                className="absolute left-6 z-[60] text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md"
                onClick={prevImage}
              >
                <span className="material-icons-round text-3xl">chevron_left</span>
              </button>
              <button
                className="absolute right-6 z-[60] text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md"
                onClick={nextImage}
              >
                <span className="material-icons-round text-3xl">chevron_right</span>
              </button>
            </>
          )}

          <div
            className="w-full h-full overflow-y-auto px-4 py-12 md:px-20 scrollbar-hide"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-w-5xl mx-auto shadow-2xl rounded-3xl overflow-hidden bg-white/5 border border-white/10">
              <img
                src={selectedImages[currentImageIndex]}
                alt={`Project View ${currentImageIndex + 1}`}
                className="w-full h-auto block"
              />
            </div>

            {/* Image Counter */}
            {selectedImages.length > 1 && (
              <div className="text-center mt-6">
                <span className="text-white/70 text-sm font-medium bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                  {currentImageIndex + 1} / {selectedImages.length}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
