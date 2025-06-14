import React from 'react';
import { Truck, Clock, Thermometer, Package, Map, Shield, ArrowRight, CheckCircle, Star } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: <Truck className="w-12 h-12 text-orange-600" />,
      title: "Transport National et International",
      description: "Nous offrons des services de transport pour vos marchandises, que ce soit à l'échelle nationale ou internationale.",
      features: [
        "Acheminement sécurisé et efficace à travers tout le Maroc et dans le monde entier",
        "Solutions adaptées à chaque type de marchandise",
        "Suivi en temps réel grâce à notre système de tracking moderne",
        "Garantie de sécurité optimale tout au long du trajet"
      ],
      color: "from-blue-50 to-blue-100",
      iconBg: "bg-blue-50"
    },
    {
      icon: <Package className="w-12 h-12 text-orange-600" />,
      title: "Service Porte-à-Porte",
      description: "Un service complet et pratique pour tous vos besoins de transport.",
      features: [
        "Ramassage et livraison directe sans étapes intermédiaires",
        "Prise en charge intégrale du processus logistique",
        "Réduction des contraintes logistiques",
        "Solution clé en main pour vous concentrer sur votre métier"
      ],
      color: "from-green-50 to-green-100",
      iconBg: "bg-green-50"
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-600" />,
      title: "Livraison Express",
      description: "Pour vos besoins urgents, nous mettons à votre disposition des solutions de livraison rapide.",
      features: [
        "Respect des délais serrés et contraignants",
        "Solutions express fiables et sécurisées",
        "Continuité de vos opérations sans interruption",
        "Service d'urgence disponible 24h/7j"
      ],
      color: "from-red-50 to-red-100",
      iconBg: "bg-red-50"
    },
    {
      icon: <Thermometer className="w-12 h-12 text-orange-600" />,
      title: "Transport Frigorifique",
      description: "Solutions adaptées pour le transport de marchandises sensibles, notamment les produits frais.",
      features: [
        "Respect strict de la chaîne du froid",
        "Véhicules équipés d'installations de pointe",
        "Sécurité optimale des produits périssables",
        "Contrôle de température en temps réel"
      ],
      color: "from-cyan-50 to-cyan-100",
      iconBg: "bg-cyan-50"
    },
    {
      icon: <Map className="w-12 h-12 text-orange-600" />,
      title: "Gestion Logistique Intégrée",
      description: "Solutions complètes intégrant l'ensemble de la chaîne logistique, de la gestion des stocks à la distribution finale.",
      features: [
        "Optimisation de vos processus logistiques",
        "Réduction des coûts et amélioration des délais",
        "Stockage et gestion rigoureuse des stocks",
        "Outils de gestion modernes et efficaces"
      ],
      color: "from-purple-50 to-purple-100",
      iconBg: "bg-purple-50"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{
              backgroundImage: 'radial-gradient(circle at 20px 20px, rgba(249, 115, 22, 0.3) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full px-6 py-3 mb-8 shadow-lg">
            <Shield className="w-5 h-5 text-orange-400 mr-2" />
            <span className="text-orange-300 font-semibold text-sm tracking-wide uppercase">Services Professionnels</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">Services</span>
          </h1>

          <p className="text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
            Chez Movmed Trans, nous vous proposons une gamme complète de services logistiques
            adaptés à vos besoins spécifiques, que ce soit pour le transport national ou international.
          </p>

          <div className="mt-16 flex flex-wrap justify-center gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-slate-800/70">
              <div className="text-3xl font-bold text-orange-400 mb-1">5+</div>
              <div className="text-slate-300 font-medium">Services Spécialisés</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-slate-800/70">
              <div className="text-3xl font-bold text-orange-400 mb-1">24/7</div>
              <div className="text-slate-300 font-medium">Support Client</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-slate-800/70">
              <div className="text-3xl font-bold text-orange-400 mb-1">100%</div>
              <div className="text-slate-300 font-medium">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-slate-100 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-orange-600 mr-2" />
              <span className="text-slate-700 font-medium text-sm">Excellence Logistique</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Solutions Logistiques Complètes
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Nous nous engageons à offrir des solutions sur mesure pour simplifier et optimiser
              la gestion de vos expéditions, tout en garantissant sécurité, ponctualité et qualité.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white border border-slate-200 rounded-2xl hover:border-orange-200 hover:shadow-xl transition-all duration-500 overflow-hidden transform hover:-translate-y-1"
              >
                <div className="p-10">
                  <div className="flex items-start space-x-8">
                    <div className={`p-5 rounded-2xl ${service.iconBg} border border-slate-100 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-5 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-4">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-700 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-slate-100">
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-24 bg-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 opacity-60"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-slate-200 border border-slate-300 rounded-full px-6 py-3 mb-6 shadow-sm">
              <Shield className="w-4 h-4 text-orange-600 mr-2" />
              <span className="text-slate-700 font-medium">Engagement Qualité</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Notre Engagement Qualité
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Chez Movmed Trans, nous sommes déterminés à offrir des solutions de transport et de logistique
              adaptées à vos besoins spécifiques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center group">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Shield className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Qualité</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Standards de qualité élevés pour chaque service et prestation
              </p>
            </div>

            <div className="text-center group">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Clock className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Ponctualité</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Respect rigoureux des délais et engagement de ponctualité
              </p>
            </div>

            <div className="text-center group">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Package className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Sécurité</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Protection optimale de vos marchandises durant tout le transport
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-orange-500 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full" style={{
              backgroundImage: 'radial-gradient(circle at 30px 30px, rgba(255, 255, 255, 0.4) 2px, transparent 2px)',
              backgroundSize: '60px 60px'
            }}></div>
          </div>
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center px-6 lg:px-8">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-8">
            <ArrowRight className="w-4 h-4 text-white mr-2" />
            <span className="text-white font-medium">Démarrons Ensemble</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            Prêt à Optimiser Votre Logistique ?
          </h2>
          <p className="text-xl text-orange-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Notre équipe met un point d'honneur à garantir une expérience client irréprochable.
            Contactez-nous dès aujourd'hui pour discuter de vos besoins spécifiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-orange-600 px-10 py-5 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-xl border-2 border-white text-lg">
              Demander un Devis
            </button>
            <button className="border-2 border-white text-white px-10 py-5 rounded-xl font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg">
              Nous Contacter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;