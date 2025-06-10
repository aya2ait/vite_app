import React from 'react';

const HeroSection = () => {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50">
      {/* Image de fond avec overlay sophistiqué */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero2.webp"
          alt="Transport moderne"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-transparent to-orange-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      </div>

      {/* Éléments décoratifs animés */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-16 w-24 h-24 border-2 border-orange-400 rounded-full animate-pulse shadow-lg shadow-orange-400/20"></div>
        <div className="absolute top-1/3 right-24 w-20 h-20 border-2 border-orange-500 rounded-full animate-bounce shadow-lg shadow-orange-500/20" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 border-2 border-orange-300 rounded-full animate-ping shadow-lg shadow-orange-300/20" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Particules flottantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-orange-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-orange-300 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-orange-500 rounded-full opacity-80 animate-bounce" style={{ animationDelay: '2s', animationDuration: '2s' }}></div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="backdrop-blur-sm bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-[#2e2e2e] via-[#1c1c1c] to-[#000000] bg-clip-text text-transparent drop-shadow-lg">
              Votre partenaire
            </span>
            <span className="block bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent">
              transport fiable
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-gray-800 font-medium leading-relaxed max-w-3xl mx-auto drop-shadow-sm">
            Solutions logistiques <span className="text-orange-600 font-bold">modernes</span> et <span className="text-orange-600 font-bold">innovantes</span> pour vos marchandises au Maroc et à l'international
          </p>
          
          <div className="flex justify-center">
            <a 
              href="#contact" 
              className="group relative inline-flex items-center justify-center px-10 py-5 rounded-full text-lg font-bold text-white transition-all duration-700 ease-out transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-orange-500/30"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 rounded-full transition-all duration-700 ease-out group-hover:from-orange-400 group-hover:via-orange-500 group-hover:to-orange-600"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"></div>
              <span className="relative z-10 flex items-center gap-3">
                Demander un devis
                <svg className="w-5 h-5 transition-transform duration-700 ease-out group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center text-gray-600 hover:text-orange-500 transition-colors duration-500 cursor-pointer">
          <span className="text-sm mb-2 font-medium">Découvrir</span>
          <div className="w-6 h-10 border-2 border-current rounded-full relative">
            <div className="w-1 h-3 bg-current rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-bounce"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;