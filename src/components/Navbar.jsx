import React from 'react';

const Navbar = ({ isMobileMenuOpen, toggleMobileMenu, isNavbarSolid }) => {
  const logoPath = '/movmed-logo.png';

  const navClass = `fixed top-0 w-full z-50 transition-all duration-500 ${
  isNavbarSolid 
    ? 'bg-[linear-gradient(to_right,_#2e2e2e,_#1c1c1c,_#000000)] backdrop-blur-xl border-b border-gray-700/50 shadow-2xl' 
    : 'bg-[linear-gradient(to_right,_#2e2e2e,_#1c1c1c,_#000000)]/90 backdrop-blur-2xl'
  }`;

  // Fonction pour le smooth scroll
  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId.replace('#', ''));
    if (element) {
      const navbarHeight = 80; // Hauteur de votre navbar (h-20 = 80px)
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
    e.preventDefault();
    smoothScrollTo(href);
    
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
          <div className="flex items-center space-x-3 transform transition-transform duration-300 hover:scale-105">
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
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="flex space-x-10">
              <NavLink href="#accueil" onClick={handleNavClick}>Accueil</NavLink>
              <NavLink href="#services" onClick={handleNavClick}>Services</NavLink>
              <NavLink href="#apropos" onClick={handleNavClick}>À propos</NavLink>
              <NavLink href="#contact" onClick={handleNavClick}>Contact</NavLink>
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
          <MobileNavLink href="#accueil" onClick={handleNavClick}>
            Accueil
          </MobileNavLink>
          <MobileNavLink href="#services" onClick={handleNavClick}>
            Services
          </MobileNavLink>
          <MobileNavLink href="#apropos" onClick={handleNavClick}>
            À propos
          </MobileNavLink>
          <MobileNavLink href="#contact" onClick={handleNavClick}>
            Contact
          </MobileNavLink>
        </div>
      </div>
    </nav>
  );
};

// NavLink moderne avec effets visuels améliorés
const NavLink = ({ href, children, onClick }) => (
  <a 
    href={href} 
    onClick={(e) => onClick(e, href)}
    className="relative px-4 py-2 text-gray-100 font-medium text-sm tracking-wide hover:text-white transition-all duration-300 group cursor-pointer"
  >
    {children}
    
    {/* Effet de soulignement animé */}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
    
    {/* Effet de glow au hover */}
    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-400/0 to-orange-600/0 group-hover:from-orange-400/10 group-hover:to-orange-600/10 transition-all duration-300 -z-10"></span>
  </a>
);

// MobileNavLink avec design moderne
const MobileNavLink = ({ href, children, onClick }) => (
  <a 
    href={href} 
    onClick={(e) => onClick(e, href)}
    className="block px-4 py-3 text-gray-100 font-medium text-base hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 border-l-4 border-transparent hover:border-orange-400 transform hover:translate-x-1 cursor-pointer"
  >
    {children}
  </a>
);

export default Navbar;