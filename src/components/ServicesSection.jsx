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
      
      title: 'Transport National & International',
      description: 'Transport sécurisé de vos marchandises entre le Maroc et l\'Europe avec des délais optimisés et suivi en temps réel.',
      imageUrl: '/hero1.jpg',
    },
    {
      
      title: 'Flotte Diversifiée',
      description: 'Camion tracteur, semi-remorque, camion frigorifique, camion plateau, adaptés à différents types de marchandises.',
      imageUrl: '/hero5.png',
    },
    {
      
      title: 'Services Personnalisés',
      description: 'Transport sur devis avec des solutions sur mesure pour répondre à vos exigences spécifiques.',
      imageUrl: '/hero2.webp',
    },

   
    {
      
      title: 'Suivi et Gestion',
      description: 'Une équipe dédiée assure le suivi rigoureux de vos expéditions, garantissant la transparence et la communication en temps réel.',
      imageUrl: 'hero3.png',
    },
    {
      
      title: 'Respect des Normes',
      description: 'Conformité aux réglementations nationales et internationales pour un transport sûr et fiable.',
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