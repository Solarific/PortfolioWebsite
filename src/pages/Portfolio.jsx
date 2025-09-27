import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation.jsx';
import Hero from '../components/Hero.jsx';
import Education from '../components/Education.jsx';
import Projects from '../components/Projects.jsx';
import Skills from '../components/Skills.jsx';
import Experience from '../components/Experience.jsx';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';
import LoadingScreen from '../components/LoadingScreen.jsx';
import './Portfolio.css';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Set to false to skip loading

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'education', 'projects', 'skills', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="portfolio">
      <Navigation 
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />
      <Hero scrollToSection={scrollToSection} />
      <Education />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default Portfolio;