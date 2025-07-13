import React from 'react';
import { MessageSquare, Phone, Mail, MapPin } from 'lucide-react';

const ContactComponent = () => {
  return (
    <div id="contactus" className="py-16 bg-gradient-to-br from-slate-50 via-orange-50/20 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 20px 20px, rgba(249, 115, 22, 0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-400/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500">
          
          {/* Header */}
          <div className="inline-flex items-center bg-orange-100 border border-orange-200 rounded-full px-6 py-3 mb-8 shadow-md">
            <MessageSquare className="w-5 h-5 text-orange-600 mr-2" />
            <span className="text-orange-700 font-semibold">Contactez-nous</span>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-8">
            Notre équipe est à votre écoute pour répondre à vos questions et vous accompagner dans vos besoins logistiques.
          </p>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md border border-white/30 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-full mb-3 mx-auto">
                <Phone className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-2">Téléphone</h3>
              <p className="text-gray-600 text-xs">+212 667 19 79 19</p>
              <p className="text-gray-600 text-xs">+212 539 31 61 67</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md border border-white/30 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-full mb-3 mx-auto">
                <Mail className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-2">Site web</h3>
              <p className="text-gray-600 text-xs">www.movmedtrans.ma</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md border border-white/30 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-full mb-3 mx-auto">
                <MapPin className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-2">Adresse</h3>
              <p className="text-gray-600 text-xs">Ichrak Office Centre</p>
              <p className="text-gray-600 text-xs">Av Royaume d'Arabie Saoudite, 1er étage, Bureau N°8</p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="flex justify-center">
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-150"></div>
              <div className="w-2 h-2 bg-orange-300 rounded-full animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;