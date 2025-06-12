import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ isMobileMenuOpen, toggleMobileMenu, isNavbarSolid }) => {
  const logoPath = '/movmed-logo.png';
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navClass = `fixed top-0 w-full z-50 transition-all duration-500 ${
  isNavbarSolid 
    ? 'bg-[linear-gradient(to_right,_#2e2e2e,_#1c1c1c,_#000000)] backdrop-blur-xl border-b border-gray-700/50 shadow-2xl' 
    : 'bg-[#404041]/90 backdrop-blur-2xl'
  }`;

  // Fonction pour le smooth scroll (seulement sur la page d'accueil)
  const smoothScrollTo = (elementId) => {
    if (!isHomePage) return;
    
    const element = document.getElementById(elementId.replace('#', ''));
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Handler pour les clics sur les liens
  const handleNavClick = (e, href) => {
    // Si c'est un lien de navigation interne et qu'on est sur la page d'accueil
    if (href.startsWith('#') && isHomePage) {
      e.preventDefault();
      smoothScrollTo(href);
    }
    
    // Fermer le menu mobile si ouvert
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
  };

  return (
    <nav className={navClass} id="navbar">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section avec animation et nom de l'entreprise */}
          <Link to="/" className="flex items-center space-x-3 transform transition-transform duration-300 hover:scale-105">
            <img 
              src={logoPath} 
              alt="Movmed Trans Logo" 
              className="h-16 w-auto filter drop-shadow-lg" 
            />
            <div className="flex flex-col">
              <h1 className="text-white font-bold text-xl tracking-wide">
                Movmed Trans
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="flex space-x-10">
              {isHomePage ? (
                <>
                  <NavLink href="#accueil" onClick={handleNavClick}>Accueil</NavLink>
                  <NavLink href="#services" onClick={handleNavClick}>Services</NavLink>
                  <RouteNavLink to="/services">Tous nos Services</RouteNavLink>
                  <RouteNavLink to="/about">À propos</RouteNavLink>
                  <RouteNavLink to="/process">Notre Processus</RouteNavLink>
                  <ContactButton href="#contact" onClick={handleNavClick}>Contact</ContactButton>
                </>
              ) : (
                <>
                  <RouteNavLink to="/">Accueil</RouteNavLink>
                  <RouteNavLink to="/" onClick={() => window.location.href = '/#services'}>Services</RouteNavLink>
                  <RouteNavLink to="/services" isActive={location.pathname === '/services'}>Tous nos Services</RouteNavLink>
                  <RouteNavLink to="/about" isActive={location.pathname === '/about'}>À propos</RouteNavLink>
                  <RouteNavLink to="/process" isActive={location.pathname === '/process'}>Notre Processus</RouteNavLink>
                  <RouteNavLink to="/" onClick={() => window.location.href = '/#contact'}>Contact</RouteNavLink>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Button avec animation */}
          <div className="md:hidden">
            <button 
              id="mobile-menu-button" 
              className="relative w-10 h-10 text-white hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg transition-all duration-300 hover:bg-white/10"
              onClick={toggleMobileMenu}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <svg 
                  className={`h-6 w-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu avec animation slide */}
      <div 
        id="mobile-menu" 
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'
        } bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/30`}
      >
        <div className="px-6 py-4 space-y-2">
          {isHomePage ? (
            <>
              <MobileNavLink href="#accueil" onClick={handleNavClick}>Accueil</MobileNavLink>
              <MobileNavLink href="#services" onClick={handleNavClick}>Services</MobileNavLink>
              <MobileRouteNavLink to="/services" onClick={() => toggleMobileMenu()}>Tous nos Services</MobileRouteNavLink>
              <MobileRouteNavLink to="/about" onClick={() => toggleMobileMenu()}>À propos</MobileRouteNavLink>
              <MobileRouteNavLink to="/process" onClick={() => toggleMobileMenu()}>Notre Processus</MobileRouteNavLink>
              <MobileContactButton href="#contact" onClick={handleNavClick}>Contact</MobileContactButton>
            </>
          ) : (
            <>
              <MobileRouteNavLink to="/" onClick={() => toggleMobileMenu()}>Accueil</MobileRouteNavLink>
              <MobileRouteNavLink to="/" onClick={() => { toggleMobileMenu(); window.location.href = '/#services'; }}>Services</MobileRouteNavLink>
              <MobileRouteNavLink to="/services" onClick={() => toggleMobileMenu()} isActive={location.pathname === '/services'}>Tous nos Services</MobileRouteNavLink>
              <MobileRouteNavLink to="/about" onClick={() => toggleMobileMenu()} isActive={location.pathname === '/about'}>À propos</MobileRouteNavLink>
              <MobileRouteNavLink to="/process" onClick={() => toggleMobileMenu()} isActive={location.pathname === '/process'}>Notre Processus</MobileRouteNavLink>
              <MobileRouteNavLink to="/" onClick={() => { toggleMobileMenu(); window.location.href = '/#contact'; }}>Contact</MobileRouteNavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

// NavLink pour les liens internes (avec smooth scroll)
const NavLink = ({ href, children, onClick }) => (
  <a 
    href={href} 
    onClick={(e) => onClick(e, href)}
    className="relative px-4 py-2 text-gray-100 font-medium text-sm tracking-wide hover:text-white transition-all duration-300 group cursor-pointer"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-400/0 to-orange-600/0 group-hover:from-orange-400/10 group-hover:to-orange-600/10 transition-all duration-300 -z-10"></span>
  </a>
);

// RouteNavLink pour les liens entre pages
const RouteNavLink = ({ to, children, isActive, onClick }) => (
  <Link 
    to={to}
    onClick={onClick}
    className={`relative px-4 py-2 font-medium text-sm tracking-wide transition-all duration-300 group cursor-pointer ${
      isActive 
        ? 'text-orange-400' 
        : 'text-gray-100 hover:text-white'
    }`}
  >
    {children}
    <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-300 ${
      isActive ? 'w-full' : 'w-0 group-hover:w-full'
    }`}></span>
    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-400/0 to-orange-600/0 group-hover:from-orange-400/10 group-hover:to-orange-600/10 transition-all duration-300 -z-10"></span>
  </Link>
);

// Bouton Contact spécial
const ContactButton = ({ href, children, onClick }) => (
  <a 
    href={href} 
    onClick={(e) => onClick(e, href)}
    className="relative px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium text-sm tracking-wide rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer"
  >
    {children}
  </a>
);

// Mobile NavLinks
const MobileNavLink = ({ href, children, onClick }) => (
  <a 
    href={href} 
    onClick={(e) => onClick(e, href)}
    className="block px-4 py-3 text-gray-100 font-medium text-base hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 border-l-4 border-transparent hover:border-orange-400 transform hover:translate-x-1 cursor-pointer"
  >
    {children}
  </a>
);

const MobileRouteNavLink = ({ to, children, onClick, isActive }) => (
  <Link 
    to={to}
    onClick={onClick}
    className={`block px-4 py-3 font-medium text-base rounded-lg transition-all duration-300 border-l-4 transform hover:translate-x-1 cursor-pointer ${
      isActive 
        ? 'text-orange-400 bg-white/10 border-orange-400' 
        : 'text-gray-100 hover:text-white hover:bg-white/10 border-transparent hover:border-orange-400'
    }`}
  >
    {children}
  </Link>
);

const MobileContactButton = ({ href, children, onClick }) => (
  <a 
    href={href} 
    onClick={(e) => onClick(e, href)}
    className="block mx-4 my-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium text-base rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg cursor-pointer text-center"
  >
    {children}
  </a>
);

export default Navbar;