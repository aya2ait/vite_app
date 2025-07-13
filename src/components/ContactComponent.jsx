import React from 'react';
import { MessageSquare } from 'lucide-react';

const ContactComponent = () => {
  return (
    <div id="contactus" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 20px 20px, rgba(249, 115, 22, 0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent"></div>
      </div>
      
      <div className="relative max-w-5xl mx-auto text-center">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-16 shadow-2xl border border-white/30 transform hover:scale-105 transition-all duration-500 hover:shadow-3xl">
          <div className="inline-flex items-center bg-orange-100 border border-orange-200 rounded-full px-8 py-4 mb-12 shadow-lg">
            <MessageSquare className="w-6 h-6 text-orange-600 mr-3" />
            <span className="text-orange-700 font-semibold text-lg">Votre Partenaire Logistique</span>
          </div>
          
          <p className="text-2xl lg:text-3xl text-gray-800 leading-relaxed font-light">
            <strong className="text-orange-600 font-semibold">Contactez-nous :</strong> Vous avez un projet de transport ou souhaitez obtenir un devis personnalisé ?
            Notre équipe est à votre écoute pour répondre à toutes vos questions et vous accompagner dans vos besoins logistiques.
          </p>
          
          {/* Decorative elements */}
          <div className="mt-12 flex justify-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse delay-150"></div>
              <div className="w-3 h-3 bg-orange-300 rounded-full animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;