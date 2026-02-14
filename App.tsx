import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Ticker from './components/Ticker.tsx';
import Features from './components/Features.tsx';
import Projects from './components/Projects.tsx';
import Instructor from './components/Instructor.tsx';
import Footer from './components/Footer.tsx';
import { LanguageProvider } from './LanguageContext.tsx';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero />
        <Ticker />
        <Features darkMode={darkMode} />
        <Projects />
        <Instructor />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;