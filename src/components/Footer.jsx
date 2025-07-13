import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[linear-gradient(to_right,_#2e2e2e,_#1c1c1c,_#000000)] backdrop-blur-xl border-t border-gray-700/50 py-12 text-gray-100 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            {/* MOVMED Logo avec même style que navbar */}
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-4 filter drop-shadow-lg">
              MOVMED
            </div>
            <p className="text-gray-300 leading-relaxed">
              Votre partenaire de confiance pour tous vos besoins de transport et logistique.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-orange-400 transition-colors duration-300 cursor-pointer">
                Transport National
              </li>
              <li className="text-gray-300 hover:text-orange-400 transition-colors duration-300 cursor-pointer">
                Transport International
              </li>
              <li className="text-gray-300 hover:text-orange-400 transition-colors duration-300 cursor-pointer">
                Livraison Express
              </li>
              <li className="text-gray-300 hover:text-orange-400 transition-colors duration-300 cursor-pointer">
                Livraison Frigorifique
              </li>
              <li className="text-gray-300 hover:text-orange-400 transition-colors duration-300 cursor-pointer">
                Transport Frigorifique
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-orange-400 transition-colors duration-300">
                <span className="text-orange-400">📧</span>
                <span>contact@movmedtrans.ma</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-orange-400 transition-colors duration-300">
                <span className="text-orange-400">📞</span>
                <span>+212 667 19 79 19 / +212 539 31 61 67</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-orange-400 transition-colors duration-300">
                <span className="text-orange-400">📍</span>
                <span>
                  Ichrak Office Centre,<br />
                  Av Royaume d’Arabie Saoudite,<br />
                  1er étage, Bureau N°8
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Ligne de séparation avec même style que navbar */}
        <div className="border-t border-gray-700/50 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 Movmed Trans. Tous droits réservés.
          </p>
        </div>
      </div>

      {/* Effet de glow subtil en bas */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent"></div>
    </footer>
  );
};

export default Footer;
