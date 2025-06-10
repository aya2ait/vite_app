import React from 'react';

const AboutSection = () => {
  return (
    <section id="apropos" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-orange-primary/5 rounded-full blur-3xl translate-x-36 -translate-y-36"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-orange-primary to-orange-600 bg-clip-text text-transparent leading-tight">
              À propos de Movmed
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p className="text-xl text-gray-800 font-medium leading-relaxed">
                Depuis notre création, Movmed s'est imposé comme un acteur majeur du transport et de la logistique au Maroc. Notre expertise et notre engagement envers l'excellence nous permettent d'offrir des solutions sur mesure à nos clients.
              </p>
              <p className="leading-loose">
                Avec une flotte moderne et une équipe expérimentée, nous garantissons la sécurité et la ponctualité de vos livraisons, que ce soit au niveau national ou international.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-12">
                <div className="text-center p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-orange-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  <div className="text-4xl font-black text-orange-primary mb-3">24/7</div>
                  <div className="text-sm text-gray-600 font-semibold tracking-wide uppercase">Service client</div>
                </div>
                <div className="text-center p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-orange-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  <div className="text-4xl font-black text-orange-primary mb-3">100%</div>
                  <div className="text-sm text-gray-600 font-semibold tracking-wide uppercase">Sécurisé</div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-3xl opacity-20 blur-lg group-hover:opacity-30 transition-all duration-500"></div>
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src="/hero.jpg"
                  alt="À propos de Movmed"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/40 via-orange-300/10 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-orange-primary/20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;