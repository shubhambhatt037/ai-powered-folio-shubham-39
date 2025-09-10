
import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { CodingProfiles } from '@/components/CodingProfiles';
import { Portfolio } from '@/components/Portfolio';
import { Contributions } from '@/components/Contributions';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setActiveSection(sectionId);
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'coding-profiles', 'portfolio', 'contributions', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleViewWork = () => scrollToSection('portfolio');
  const handleGetInTouch = () => scrollToSection('contact');

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        activeSection={activeSection} 
        onSectionClick={scrollToSection} 
      />
      
      <main>
        <Hero 
          onViewWork={handleViewWork}
          onGetInTouch={handleGetInTouch}
        />
        <About />
        <Experience />
        <CodingProfiles />
        <Portfolio />
        <Contributions />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
