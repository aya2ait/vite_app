import React, { useRef, useEffect, useState } from 'react';

const ServiceCard = ({ icon, title, description, imageUrl }) => {
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
          observer.unobserve(entry.target);
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

  // Préchargement amélioré de l'image
  useEffect(() => {
    const img = new Image();
    
    img.onload = () => {
      // Attendre que l'image soit complètement décodée
      if (img.decode) {
        img.decode().then(() => {
          setImageLoaded(true);
          setImageSrc(imageUrl);
        }).catch(() => {
          setImageLoaded(true);
          setImageSrc(imageUrl);
        });
      } else {
        setImageLoaded(true);
        setImageSrc(imageUrl);
      }
    };
    
    img.onerror = () => {
      console.error(`Erreur de chargement de l'image: ${imageUrl}`);
      setImageLoaded(true);
      setImageSrc(imageUrl);
    };
    
    // Forcer le chargement immédiat
    img.loading = 'eager';
    img.decoding = 'sync';
    img.src = imageUrl;
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [imageUrl]);

  // Force le re-render de l'image après chargement
  useEffect(() => {
    if (imageLoaded && imgRef.current) {
      // Force la réinitialisation du rendu de l'image
      const img = imgRef.current;
      const src = img.src;
      img.src = '';
      img.src = src;
    }
  }, [imageLoaded]);

  return (
    <div ref={cardRef} className="group bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-400 hover:border-orange-500/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 opacity-0">
      <div className="h-48 overflow-hidden bg-gray-200">
        {imageLoaded ? (
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            style={{
              imageRendering: 'crisp-edges',
              WebkitImageRendering: 'crisp-edges',
              MozImageRendering: 'crisp-edges',
              msImageRendering: 'crisp-edges'
            }}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="w-full h-full bg-gray-300 animate-pulse flex items-center justify-center">
            <div className="text-gray-500">Chargement...</div>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
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
      imageUrl: '/im3copy.jpg',
    },
    {
      title: 'Services Personnalisés',
      description: 'Transport sur devis avec des solutions sur mesure pour répondre à vos exigences spécifiques.',
      imageUrl: '/im10copy.jpg',
    },
    {
      title: 'Flotte Diversifiée',
      description: 'Camion tracteur, semi-remorque, camion frigorifique, camion plateau, adaptés à différents types de marchandises.',
      imageUrl: '/im6copy.jpg',
    },
    {
      title: 'Suivi et Gestion',
      description: 'Une équipe dédiée assure le suivi rigoureux de vos expéditions, garantissant la transparence et la communication en temps réel.',
      imageUrl: '/im11copy.jpg',
    },
    {
      title: 'Respect des Normes',
      description: 'Conformité aux réglementations nationales et internationales pour un transport sûr et fiable.',
      imageUrl: '/im13.png',
    },
    
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-orange-500 bg-clip-text text-transparent">
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