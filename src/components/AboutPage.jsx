import React from 'react';
// Vous devrez installer lucide-react si ce n'est pas déjà fait : npm install lucide-react
import { Truck, Shield, DollarSign, Users, Leaf, Target } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              À Propos de Nous
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-700/50 shadow-2xl">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
              Movmed Trans est une entreprise leader dans le domaine du transport national et international de marchandises. 
              Grâce à notre expertise approfondie et à notre engagement constant envers la satisfaction de nos clients, 
              nous offrons des solutions de transport sur mesure, fiables et efficaces. Notre objectif est de répondre 
              aux besoins spécifiques de chaque client, en assurant une gestion optimale de leurs envois, dans le respect 
              des normes de sécurité et d'environnement.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Notre Mission</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Chez Movmed Trans, notre mission est de fournir des services de transport et de logistique personnalisés, 
                fiables et écologiques. Nous nous engageons à garantir la satisfaction totale de nos clients en leur 
                offrant des solutions de transport innovantes et adaptées à leurs besoins spécifiques, tout en prenant 
                soin de l'environnement.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-3xl p-8 backdrop-blur-xl border border-orange-500/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400 mb-2">15+</div>
                    <div className="text-gray-300 text-sm">Années d'expérience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400 mb-2">500+</div>
                    <div className="text-gray-300 text-sm">Clients satisfaits</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                    <div className="text-gray-300 text-sm">Support client</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400 mb-2">99%</div>
                    <div className="text-gray-300 text-sm">Livraisons réussies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pourquoi Choisir Movmed Trans ?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Équipe expérimentée */}
            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 group hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Équipe expérimentée et engagée</h3>
              <p className="text-gray-300 leading-relaxed">
                Nos collaborateurs sont des experts du secteur, dotés d'une vaste expérience et d'un réel engagement 
                à satisfaire nos clients à chaque étape du processus.
              </p>
            </div>

            {/* Véhicules modernes */}
            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 group hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Véhicules modernes et sécurisés</h3>
              <p className="text-gray-300 leading-relaxed">
                Nous disposons d'une flotte de véhicules dernier cri, parfaitement entretenus et équipés pour assurer 
                la sécurité et la ponctualité de vos livraisons.
              </p>
            </div>

            {/* Prix compétitifs */}
            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 group hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Prix compétitifs</h3>
              <p className="text-gray-300 leading-relaxed">
                Nous offrons des tarifs transparents et compétitifs, tout en garantissant des services de haute qualité.
              </p>
            </div>

            {/* Solutions personnalisées */}
            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 group hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Solutions personnalisées et flexibles</h3>
              <p className="text-gray-300 leading-relaxed">
                Nous savons que chaque client a des besoins uniques. C'est pourquoi nous proposons des solutions de 
                transport sur mesure, adaptées à vos exigences spécifiques.
              </p>
            </div>

            {/* Engagement environnemental */}
            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 group hover:transform hover:scale-105 md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Engagement environnemental</h3>
              <p className="text-gray-300 leading-relaxed">
                Movmed Trans met un point d'honneur à réduire son empreinte écologique. Nous privilégions les solutions 
                de transport respectueuses de l'environnement, en optimisant nos trajets et en adoptant des technologies plus propres.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-xl rounded-3xl p-12 border border-orange-500/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à faire confiance à Movmed Trans ?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Découvrez comment nous pouvons optimiser vos besoins de transport et logistique. 
              Contactez-nous dès aujourd'hui pour un devis personnalisé.
            </p>
            <button 
              onClick={() => window.location.href = '/#contact'}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 px-8 rounded-2xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Contactez-nous maintenant
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;