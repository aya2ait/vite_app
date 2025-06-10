import React, { useRef, useEffect } from 'react';

const ServiceCard = ({ icon, title, description, imageUrl }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
          observer.unobserve(entry.target); // Stop observing once animated
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div ref={cardRef} className="group bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-medium hover:border-orange-primary/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-orange-primary/20 opacity-0">
      <div className="h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-3 text-text-dark">{title}</h3>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: '🚛',
      title: 'Transport National & International',
      description: 'Acheminement sécurisé de vos marchandises partout au Maroc et à l\'international avec suivi en temps réel.',
      imageUrl: '/hero1.jpg',
    },
    {
      icon: '📦',
      title: 'Service Porte à Porte',
      description: 'Ramassage et livraison directement à destination finale. Prise en charge complète de vos marchandises.',
      imageUrl: '/hero5.png',
    },
    {
      icon: '⚡',
      title: 'Livraison Express',
      description: 'Solutions de livraison rapide pour vos besoins urgents. Respect des délais serrés garantis.',
      imageUrl: '/hero2.webp',
    },
    {
      icon: '🌡️',
      title: 'Transport Frigorifique',
      description: 'Transport spécialisé pour produits frais et sensibles. Respect strict de la chaîne du froid.',
      imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      icon: '📊',
      title: 'Gestion Logistique',
      description: 'Solutions complètes intégrant stockage, gestion des stocks et distribution optimisée.',
      imageUrl: 'hero3.png',
    },
    {
      icon: '📍',
      title: 'Suivi GPS en Temps Réel',
      description: 'Technologie de pointe pour suivre vos marchandises en temps réel, avec notifications automatiques.',
      imageUrl: 'hero4.png',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-text-dark to-orange-primary bg-clip-text text-transparent">
          Nos Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;