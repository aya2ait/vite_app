import React from 'react';
import { Truck, Clock, Thermometer, Package, Map, Shield, ArrowRight, CheckCircle } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: <Truck className="w-12 h-12 text-orange-500" />,
      title: "Transport National et International",
      description: "Nous offrons des services de transport pour vos marchandises, que ce soit à l'échelle nationale ou internationale.",
      features: [
        "Acheminement sécurisé et efficace à travers tout le Maroc et dans le monde entier",
        "Solutions adaptées à chaque type de marchandise",
        "Suivi en temps réel grâce à notre système de tracking moderne",
        "Garantie de sécurité optimale tout au long du trajet"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Package className="w-12 h-12 text-orange-500" />,
      title: "Service Porte-à-Porte",
      description: "Un service complet et pratique pour tous vos besoins de transport.",
      features: [
        "Ramassage et livraison directe sans étapes intermédiaires",
        "Prise en charge intégrale du processus logistique",
        "Réduction des contraintes logistiques",
        "Solution clé en main pour vous concentrer sur votre métier"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-500" />,
      title: "Livraison Express",
      description: "Pour vos besoins urgents, nous mettons à votre disposition des solutions de livraison rapide.",
      features: [
        "Respect des délais serrés et contraignants",
        "Solutions express fiables et sécurisées",
        "Continuité de vos opérations sans interruption",
        "Service d'urgence disponible 24h/7j"
      ],
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Thermometer className="w-12 h-12 text-orange-500" />,
      title: "Transport Frigorifique",
      description: "Solutions adaptées pour le transport de marchandises sensibles, notamment les produits frais.",
      features: [
        "Respect strict de la chaîne du froid",
        "Véhicules équipés d'installations de pointe",
        "Sécurité optimale des produits périssables",
        "Contrôle de température en temps réel"
      ],
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: <Map className="w-12 h-12 text-orange-500" />,
      title: "Gestion Logistique Intégrée",
      description: "Solutions complètes intégrant l'ensemble de la chaîne logistique, de la gestion des stocks à la distribution finale.",
      features: [
        "Optimisation de vos processus logistiques",
        "Réduction des coûts et amélioration des délais",
        "Stockage et gestion rigoureuse des stocks",
        "Outils de gestion modernes et efficaces"
      ],
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* The dark gradient overlay remains */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-black opacity-90"></div>
        {/* SVG background removed from here */}

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-orange-500/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <Shield className="w-5 h-5 text-orange-400 mr-2" />
            <span className="text-orange-300 font-medium">Services Professionnels</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Services</span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Chez Movmed Trans, nous vous proposons une gamme complète de services logistiques
            adaptés à vos besoins spécifiques, que ce soit pour le transport national ou international.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
              <div className="text-2xl font-bold text-orange-400">5+</div>
              <div className="text-gray-300">Services Spécialisés</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
              <div className="text-2xl font-bold text-orange-400">24/7</div>
              <div className="text-gray-300">Support Client</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
              <div className="text-2xl font-bold text-orange-400">100%</div>
              <div className="text-gray-300">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Solutions Logistiques Complètes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous nous engageons à offrir des solutions sur mesure pour simplifier et optimiser
              la gestion de vos expéditions, tout en garantissant sécurité, ponctualité et qualité.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              >
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <button className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors group">
                      En savoir plus
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black relative overflow-hidden">
        {/* SVG background removed from here */}

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Notre Engagement Qualité
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Chez Movmed Trans, nous sommes déterminés à offrir des solutions de transport et de logistique
              adaptées à vos besoins spécifiques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Qualité</h3>
              <p className="text-gray-300">
                Standards de qualité élevés pour chaque service et prestation
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Ponctualité</h3>
              <p className="text-gray-300">
                Respect rigoureux des délais et engagement de ponctualité
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Package className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Sécurité</h3>
              <p className="text-gray-300">
                Protection optimale de vos marchandises durant tout le transport
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Prêt à Optimiser Votre Logistique ?
          </h2>
          <p className="text-xl text-orange-100 mb-10 leading-relaxed">
            Notre équipe met un point d'honneur à garantir une expérience client irréprochable.
            Contactez-nous dès aujourd'hui pour discuter de vos besoins spécifiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Demander un Devis
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105">
              Nous Contacter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;