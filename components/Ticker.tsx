import React from 'react';
import { useLanguage } from '../LanguageContext';

const Ticker: React.FC = () => {
  const { t } = useLanguage();
  const items = t.ticker;

  // Each set of items for the marquee
  const MarqueeSet = () => (
    <div className="flex gap-8 items-center text-gray-400 dark:text-gray-500 font-display text-lg uppercase tracking-wider pr-8 flex-shrink-0">
      {items.map((item: string, idx: number) => (
        <React.Fragment key={idx}>
          <span>{item}</span>
          <span className="text-primary font-bold">+</span>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="w-full bg-white dark:bg-[#0a0a0a] border-y border-gray-200 dark:border-white/5 py-5 overflow-hidden relative">
      {/* Edge Fades */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background-light dark:from-background-dark to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background-light dark:from-background-dark to-transparent z-10 pointer-events-none"></div>
      
      {/* The moving container. Using w-max to ensure it calculates width based on content */}
      <div className="flex w-max animate-marquee">
        <MarqueeSet />
        <MarqueeSet />
        <MarqueeSet />
        <MarqueeSet />
      </div>
    </div>
  );
};

export default Ticker;