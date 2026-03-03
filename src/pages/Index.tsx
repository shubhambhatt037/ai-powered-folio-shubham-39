
import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Products } from '@/components/Products';
import { CodingProfiles } from '@/components/CodingProfiles';
import { Portfolio } from '@/components/Portfolio';
import { Contributions } from '@/components/Contributions';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'products', 'coding-profiles', 'portfolio', 'contributions', 'contact'];
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

  const handleViewWork = () => scrollToSection('products');
  const handleGetInTouch = () => scrollToSection('contact');

  return (
    <div className="min-h-screen bg-background film-grain tech-grid">
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
        <Products />
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
