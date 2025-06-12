import React from 'react';

const PartnersSection = () => {
  // Array of transport/logistics partner companies
  const partners = [
    { name: 'DHL', logo: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=150&h=80&fit=crop&crop=center' },
    { name: 'FedEx', logo: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=150&h=80&fit=crop&crop=center' },
    { name: 'UPS', logo: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=150&h=80&fit=crop&crop=center' },
    { name: 'TNT', logo: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=150&h=80&fit=crop&crop=center' },
    { name: 'Chronopost', logo: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=150&h=80&fit=crop&crop=center' },
    { name: 'GLS', logo: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=150&h=80&fit=crop&crop=center' },
  ];

  return (
    <section id="partners" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nos <span className="text-orange-600">Partenaires</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Nous collaborons avec les leaders du transport pour vous garantir un service de qualité
          </p>
        </div>

        {/* Partners grid */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 w-auto object-contain transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-lg"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/150x80/f97316/ffffff?text=${encodeURIComponent(partner.name)}`;
                }}
              />
            </div>
          ))}
        </div>

        <style jsx>{`
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 0.6s ease-out;
          }
        `}</style>

        {/* Trust indicator */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Plus de <span className="font-semibold text-orange-600">50+ partenaires</span> nous font confiance
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;