import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Composants existants
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import StatsSection from './components/StatsSection.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import PartnersSection from './components/PartnersSection.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';
import ContactComponent from './components/ContactComponent.jsx';

// Nouveaux composants
import AboutPage from './components/AboutPage.jsx';
import ProcessPage from './components/ProcessPage.jsx';
import ServicesPage from './components/ServicesPage.jsx'; // Nouvelle page

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavbarSolid, setIsNavbarSolid] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsNavbarSolid(true);
      } else {
        setIsNavbarSolid(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Composant pour la page d'accueil (votre landing page actuelle)
  const HomePage = () => (
    <div className="bg-gray-light text-text-dark">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
      <PartnersSection />
      <ContactComponent />
      <ContactForm />
      

    </div>
  );

  return (
    <Router>
      <div className="bg-gray-light text-text-dark">
        <Navbar
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
          isNavbarSolid={isNavbarSolid}
        />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/process" element={<ProcessPage />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;