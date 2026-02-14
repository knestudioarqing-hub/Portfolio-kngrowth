
import React from 'react';
import { useLanguage } from '../LanguageContext';

interface FeaturesProps {
  darkMode: boolean;
}

const Features: React.FC<FeaturesProps> = ({ darkMode }) => {
  const { t } = useLanguage();

  // Safe access to data to prevent crashes
  const features = t?.features?.items || [];
  const title = t?.features?.title || '';

  return (
    <section className={`py-24 relative overflow-hidden scroll-mt-24 transition-colors duration-500 ${darkMode ? 'bg-black' : 'bg-gray-50'}`} id="services">
      {/* Background Gradient / Glow effect - ONLY IN DARK MODE */}
      {darkMode && (
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[600px] blur-[100px] rounded-full pointer-events-none opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(37,99,235,0.4) 0%, rgba(37,99,235,0.1) 40%, transparent 70%)'
          }}
        />
      )}

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className={`font-display text-4xl md:text-5xl font-bold mb-6 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((text: any, idx: number) => {
            const icons = ['trending_up', 'verified_user', 'diamond'];
            const icon = icons[idx] || 'check';

            // Conditional Styles for Dark Mode Glassmorphism
            const cardStyle = darkMode ? {
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: `
                  inset 1px 1px 0px 0px rgba(255, 255, 255, 0.12),
                  inset -1px -1px 0px 0px rgba(255, 255, 255, 0.02),
                  inset 0px 0px 40px 0px rgba(255, 255, 255, 0.03)
                `
            } : {}; // Empty style for light mode, relying on classes

            return (
              <div
                key={idx}
                className={`group relative rounded-[2rem] p-8 flex flex-col items-start overflow-hidden transition-all duration-700 ease-out hover:-translate-y-2
                  ${darkMode
                    ? ''
                    : 'bg-white border border-gray-200 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/20'
                  }`}
                style={cardStyle}
              >
                {/* Hover Glow Effect - Dark Mode Only */}
                {darkMode && (
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.07) 0%, transparent 100%)',
                      boxShadow: 'inset 0px 0px 30px 0px rgba(59, 130, 246, 0.1)'
                    }}
                  />
                )}

                {/* Icon Container */}
                <div
                  className={`relative z-10 w-14 h-14 mb-8 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-105
                    ${darkMode ? '' : 'bg-gray-50 border border-gray-100 group-hover:bg-primary/5 group-hover:border-primary/20'}`}
                  style={darkMode ? {
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: 'inset 1px 1px 0px 0px rgba(255, 255, 255, 0.1)'
                  } : {}}
                >
                  {darkMode && <div className="absolute inset-0 rounded-2xl bg-blue-500/0 group-hover:bg-blue-500/20 transition-colors duration-500 blur-[2px]" />}
                  <span className={`material-icons-round text-3xl relative z-10 transition-colors duration-300 ${darkMode ? 'text-white/90' : 'text-gray-400 group-hover:text-primary'}`}>{icon}</span>
                </div>

                <div className="relative z-10 flex-1">
                  <p className={`text-left text-lg font-medium leading-relaxed transition-colors duration-500 ${darkMode ? 'text-gray-400 group-hover:text-gray-200' : 'text-gray-600 group-hover:text-gray-800'}`}>
                    {text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
