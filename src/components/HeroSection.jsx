// src/components/HeroSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const HeroSection = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    console.log('Bouton cliqué, isMuted actuel:', isMuted); // Debug
    
    if (videoRef.current) {
      const newMutedState = !isMuted;
      console.log('Nouveau state:', newMutedState); // Debug
      
      setIsMuted(newMutedState);
      
      // Manipulation DIRECTE de l'attribut DOM (comme dans le premier code)
      videoRef.current.muted = newMutedState;
      
      console.log('Attribut muted de la vidéo:', videoRef.current.muted); // Debug

      // Relancer la lecture pour s'assurer que le son est activé
      if (!newMutedState) {
        videoRef.current
          .play()
          .catch((err) => console.warn("Lecture refusée :", err));
      }
    }
  };

  // Lecture / pause automatique selon visibilité
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(console.warn);
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    const heroSection = document.getElementById('accueil');
    if (heroSection) observer.observe(heroSection);

    return () => {
      if (heroSection) observer.unobserve(heroSection);
    };
  }, []);

  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50"
    >
      {/* Vidéo de fond */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="/transport-video.mp4"
          autoPlay
          muted // Attribut HTML initial, sera contrôlé via DOM
          loop
          playsInline
          className="w-full h-full object-cover object-bottom"
          controls={false}
        >
          <img src="/im5.jpg" alt="Transport moderne" className="w-full h-full object-cover" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-transparent to-orange-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      </div>

      {/* Bouton son - Positionné en bas à droite de la section hero uniquement */}
      <button
        onClick={toggleMute}
        className="absolute bottom-6 right-6 z-50 bg-black/60 backdrop-blur-sm text-white p-3 rounded-full hover:bg-orange-600 transition-all duration-300 border border-white/30 cursor-pointer shadow-lg"
        title={isMuted ? "Activer le son" : "Couper le son"}
        style={{ pointerEvents: 'auto' }}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>

      {/* Contenu principal */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="backdrop-blur-sm bg-gray-500/20 rounded-3xl p-8 md:p-12 border border-gray-300/30 shadow-2xl">
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            <span className="block text-white drop-shadow-lg">Votre partenaire</span>
            <span className="block bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent">
              transport fiable
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-10 text-white font-medium leading-relaxed max-w-3xl mx-auto drop-shadow-sm">
            MOVMED votre Société de <span className="text-orange-400 font-bold">transport national </span> et <span className="text-orange-400 font-bold">international</span> rapide, fiable, sur mesure
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
                <svg
                  className="w-5 h-5 transition-transform duration-700 ease-out group-hover:translate-x-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;