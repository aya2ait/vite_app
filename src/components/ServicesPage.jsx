import React from 'react';
import { Truck, Target, Eye, Award, Users, Globe, Shield } from 'lucide-react';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-slate-900 via-orange-900 to-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-orange-600/20 px-4 py-2 rounded-full text-orange-300 text-sm font-medium mb-6">
                <Truck className="w-4 h-4 mr-2" />
                Transport International
              </div>
              <h1 className="text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                MOUVMED
                <span className="block text-orange-400">TRANS</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Votre partenaire de confiance pour le transport routier de marchandises 
                entre le Maroc et l'Europe
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-600/20 to-slate-700/20 rounded-2xl p-6 backdrop-blur-sm border border-orange-600/30">
                <img 
                  src="/im13.png"
                  alt="Flotte de camions MOUVMED TRANS"
                  className="rounded-xl h-80 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 shadow-2xl">
                  <img 
                    src="/im11copy.jpg"
                    alt="Équipe professionnelle MOUVMED TRANS"
                    className="rounded-xl h-64 w-full object-cover mb-6"
                  />
                  <img 
                    src="im3copy.jpg"
                    alt="Réseau de transport Maroc-Europe"
                    className="rounded-xl h-48 w-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-xl mr-6 shadow-lg">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-2">Qui sommes-nous ?</h2>
                  <div className="w-24 h-1 bg-orange-500 rounded-full"></div>
                </div>
              </div>
              
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  MOUVMED TRANS est une société marocaine spécialisée dans le transport routier de marchandises, 
                  avec une expertise solide tant au niveau national qu'international, notamment vers l'Europe.
                </p>
                <p>
                  Depuis sa création, notre entreprise s'est engagée à fournir des solutions logistiques fiables, 
                  flexibles et adaptées aux besoins spécifiques de chaque client.
                </p>
                <p>
                  Notre équipe expérimentée, nos véhicules modernes et notre réseau étendu nous permettent d'assurer 
                  un service de haute qualité, alliant rapidité, sécurité et respect des délais.
                </p>
                <p>
                  Chez MOUVMED TRANS, la satisfaction client est notre priorité absolue, et nous mettons tout en 
                  œuvre pour bâtir des relations durables basées sur la confiance et le professionnalisme.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl mt-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="bg-white p-4 rounded-xl shadow-md mb-4">
                      <Award className="w-8 h-8 text-orange-600 mx-auto" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Excellence</h3>
                    <p className="text-sm text-gray-600">Service de qualité</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white p-4 rounded-xl shadow-md mb-4">
                      <Users className="w-8 h-8 text-orange-600 mx-auto" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Équipe</h3>
                    <p className="text-sm text-gray-600">Professionnels expérimentés</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white p-4 rounded-xl shadow-md mb-4">
                      <Globe className="w-8 h-8 text-orange-600 mx-auto" />
                    </div>
                    <h3 className="font-semibold text-gray-900">International</h3>
                    <p className="text-sm text-gray-600">Maroc - Europe</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white p-4 rounded-xl shadow-md mb-4">
                      <Truck className="w-8 h-8 text-orange-600 mx-auto" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Flotte</h3>
                    <p className="text-sm text-gray-600">Véhicules modernes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-4 rounded-xl mr-4 shadow-lg">
                  <Target className="w-8 h-8 text-gray-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Mission</h2>
                  <div className="w-16 h-1 bg-gray-500 rounded-full mt-2"></div>
                </div>
              </div>
              
              <div className="mb-6">
                <img 
                  src="im4copy.jpg"
                  alt="Transport sécurisé et fiable"
                  className="rounded-xl h-48 w-full object-cover"
                />
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="font-medium text-gray-800">
                  Offrir des solutions de transport routier de marchandises sûres, rapides et personnalisées, 
                  adaptées aux besoins spécifiques de nos clients au Maroc et en Europe.
                </p>
                <p>
                  Nous nous engageons à garantir la fiabilité, la sécurité et la ponctualité de chaque livraison, 
                  tout en optimisant les coûts et en respectant les normes environnementales.
                </p>
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-xl border-l-4 border-orange-500 mt-6">
                  <p className="text-orange-800 font-medium">
                    Grâce à une équipe professionnelle et une flotte moderne, nous visons à bâtir des relations 
                    durables basées sur la confiance, la qualité du service et l'innovation.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-4 rounded-xl mr-4 shadow-lg">
                  <Eye className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Vision</h2>
                  <div className="w-16 h-1 bg-orange-500 rounded-full mt-2"></div>
                </div>
              </div>
              
              <div className="mb-6">
                <img 
                  src="im9copy.jpg"
                  alt="Réseau européen et expansion internationale"
                  className="rounded-xl h-48 w-full object-cover"
                />
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="font-medium text-gray-800">
                  Être reconnu comme le leader fiable et innovant du transport routier de marchandises 
                  entre le Maroc et l'Europe, en offrant des solutions logistiques performantes, durables et sur mesure.
                </p>
                <p>
                  Développer un réseau solide et moderne qui facilite le commerce international, tout en 
                  contribuant à la croissance économique locale et régionale.
                </p>
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border-l-4 border-gray-500 mt-6">
                  <p className="text-gray-800 font-medium">
                    Notre vision repose sur l'excellence opérationnelle, l'innovation technologique et un 
                    engagement fort envers la satisfaction de nos clients et le respect de l'environnement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;