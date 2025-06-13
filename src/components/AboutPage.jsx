import React, { useState } from 'react';
import { Truck, Shield, DollarSign, Users, Leaf, Target, Search, Stethoscope, Cog, Rocket, MessageSquare, CheckCircle, ArrowRight, Star } from 'lucide-react';

const AboutPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      id: 1,
      title: "Définition",
      icon: Search,
      color: "from-blue-500 to-blue-600",
      description: "Nous commençons chaque projet par une écoute attentive des besoins spécifiques de nos clients. Cela nous permet de définir les solutions les plus adaptées à leur demande.",
      details: [
        "Analyse des besoins clients",
        "Définition des objectifs",
        "Identification des contraintes",
        "Proposition de solutions adaptées"
      ]
    },
    {
      id: 2,
      title: "Diagnostic",
      icon: Stethoscope,
      color: "from-green-500 to-green-600",
      description: "Une analyse approfondie des conditions logistiques et des contraintes particulières liées à chaque envoi est réalisée. Nous veillons à identifier les meilleures options disponibles pour optimiser le transport.",
      details: [
        "Évaluation des conditions logistiques",
        "Analyse des contraintes spécifiques",
        "Identification des risques potentiels",
        "Optimisation des itinéraires"
      ]
    },
    {
      id: 3,
      title: "Développement",
      icon: Cog,
      color: "from-purple-500 to-purple-600",
      description: "Nous mettons en place un plan d'action détaillé pour chaque mission, en tenant compte des spécificités de la cargaison et du trajet.",
      details: [
        "Élaboration du plan d'action",
        "Planification détaillée",
        "Sélection des ressources",
        "Validation du processus"
      ]
    },
    {
      id: 4,
      title: "Déploiement",
      icon: Rocket,
      color: "from-orange-500 to-orange-600", // Using the primary orange for a key step
      description: "Une fois le plan validé, nous procédons à l'organisation du transport, en affectant les véhicules appropriés et en préparant la marchandise pour le départ.",
      details: [
        "Affectation des véhicules",
        "Préparation de la marchandise",
        "Coordination des équipes",
        "Lancement de la mission"
      ]
    },
    {
      id: 5,
      title: "Délivrance",
      icon: Truck,
      color: "from-emerald-500 to-emerald-600",
      description: "Nous nous engageons à assurer une livraison dans les délais impartis, avec un suivi régulier pour garantir que tout se déroule comme prévu.",
      details: [
        "Livraison dans les délais",
        "Suivi en temps réel",
        "Communication continue",
        "Gestion des imprévus"
      ]
    },
    {
      id: 6,
      title: "Dépôt",
      icon: MessageSquare,
      color: "from-pink-500 to-pink-600",
      description: "Après la livraison, nous effectuons un retour d'information avec nos clients pour nous assurer de leur satisfaction et pour améliorer en permanence nos services.",
      details: [
        "Retour d'information client",
        "Évaluation de la satisfaction",
        "Analyse des performances",
        "Amélioration continue"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Dark Background */}
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
          <div className="inline-flex items-center bg-gray-800/20 backdrop-blur-sm border border-gray-600/30 rounded-full px-6 py-3 mb-8 shadow-lg">
            <Shield className="w-5 h-5 text-orange-400 mr-2" />
            <span className="text-orange-300 font-semibold text-sm tracking-wide uppercase">Qui Sommes-Nous ?</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Notre <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">Histoire</span>
          </h1>

          <p className="text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
            Movmed Trans est une entreprise leader dans le domaine du transport national et international de marchandises,
            avec un engagement profond envers l'excellence et la satisfaction client.
          </p>

          <div className="mt-16 flex flex-wrap justify-center gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/70 rounded-xl px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-gray-800/70">
              <div className="text-3xl font-bold text-orange-400 mb-1">15+</div>
              <div className="text-slate-300 font-medium">Années d'expérience</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/70 rounded-xl px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-gray-800/70">
              <div className="text-3xl font-bold text-orange-400 mb-1">500+</div>
              <div className="text-slate-300 font-medium">Clients satisfaits</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/70 rounded-xl px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-gray-800/70">
              <div className="text-3xl font-bold text-orange-400 mb-1">99%</div>
              <div className="text-slate-300 font-medium">Livraisons réussies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Light Mode */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gray-200 rounded-full px-4 py-2 mb-6">
              <Target className="w-4 h-4 text-orange-600 mr-2" />
              <span className="text-gray-700 font-medium text-sm">Notre Engagement</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Notre Mission et Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Chez Movmed Trans, nous nous efforçons de fournir des services logistiques fiables, innovants et respectueux de l'environnement,
              guidés par nos valeurs fondamentales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="group bg-white border border-gray-200 rounded-2xl hover:border-orange-300 hover:shadow-xl transition-all duration-500 overflow-hidden transform hover:-translate-y-1">
              <div className="p-10">
                <div className="flex items-start space-x-8">
                  <div className="p-5 rounded-2xl bg-orange-100 border border-orange-200 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <Target className="w-12 h-12 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-700 transition-colors leading-tight">
                      Notre Mission
                    </h3>
                    <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                      Fournir des services de transport et de logistique personnalisés, fiables et écologiques.
                      Nous nous engageons à garantir la satisfaction totale de nos clients en leur
                      offrant des solutions innovantes et adaptées à leurs besoins spécifiques, tout en prenant
                      soin de l'environnement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-white border border-gray-200 rounded-2xl hover:border-orange-300 hover:shadow-xl transition-all duration-500 overflow-hidden transform hover:-translate-y-1">
              <div className="p-10">
                <div className="flex items-start space-x-8">
                  <div className="p-5 rounded-2xl bg-blue-100 border border-blue-200 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <Star className="w-12 h-12 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-700 transition-colors leading-tight">
                      Nos Valeurs
                    </h3>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start space-x-4">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 leading-relaxed">**Qualité** : Standards élevés pour chaque prestation.</span>
                      </div>
                      <div className="flex items-start space-x-4">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 leading-relaxed">**Fiabilité** : Respect rigoureux des délais et engagements.</span>
                      </div>
                      <div className="flex items-start space-x-4">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 leading-relaxed">**Innovation** : Recherche constante de solutions optimisées.</span>
                      </div>
                      <div className="flex items-start space-x-4">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 leading-relaxed">**Responsabilité** : Engagement envers la sécurité et l'environnement.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Light Mode */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-60"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gray-100 border border-gray-200 rounded-full px-6 py-3 mb-6 shadow-sm">
              <Shield className="w-4 h-4 text-orange-600 mr-2" />
              <span className="text-gray-700 font-medium">Nos Atouts</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Pourquoi Choisir Movmed Trans ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nous combinons expertise, technologies de pointe et un service client dédié pour garantir une expérience logistique sans faille.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="text-center group bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-orange-300 transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <Users className="w-12 h-12 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Équipe Expérimentée</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Des experts du secteur avec une vaste expérience et un engagement total envers nos clients.
              </p>
            </div>

            <div className="text-center group bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-orange-300 transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <Truck className="w-12 h-12 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Flotte Moderne</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Véhicules de dernière génération, parfaitement entretenus pour des livraisons sécurisées et ponctuelles.
              </p>
            </div>

            <div className="text-center group bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-orange-300 transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <Leaf className="w-12 h-12 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Engagement Écologique</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Nous réduisons notre empreinte carbone en optimisant les trajets et en adoptant des technologies plus propres.
              </p>
            </div>

            <div className="text-center group bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-orange-300 transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <Shield className="w-12 h-12 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Solutions Personnalisées</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Des solutions de transport sur mesure, parfaitement adaptées à vos exigences spécifiques.
              </p>
            </div>

            <div className="text-center group bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-orange-300 transition-all duration-300 transform hover:-translate-y-1 md:col-span-2 lg:col-span-1">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <DollarSign className="w-12 h-12 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Prix Compétitifs</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Des tarifs transparents et compétitifs pour des services de haute qualité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Light Mode */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gray-100 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-3 mb-8 shadow-lg">
              <ArrowRight className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-gray-700 font-semibold text-sm tracking-wide uppercase">Notre Approche</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Un Processus <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Éprouvé</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
              Chez Movmed Trans, nous suivons un processus structuré en six étapes pour garantir la qualité, la sécurité
              et la ponctualité de chacun de vos envois.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 group ${
                    activeStep === index
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-xl'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-800 border border-gray-200'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    activeStep === index ? 'bg-white/20' : 'bg-gray-300/50 group-hover:bg-gray-400/50'
                  }`}>
                    <IconComponent className="w-4 h-4 text-current" />
                  </div>
                  <span className="font-semibold text-sm">{step.id}. {step.title}</span>
                </button>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${processSteps[activeStep].color} rounded-2xl flex items-center justify-center mr-6 shadow-md`}>
                    {React.createElement(processSteps[activeStep].icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  <div>
                    <span className="text-orange-600 font-semibold text-lg">Étape {processSteps[activeStep].id}</span>
                    <h3 className="text-3xl font-bold text-gray-900">{processSteps[activeStep].title}</h3>
                  </div>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {processSteps[activeStep].description}
                </p>

                <div className="space-y-3">
                  {processSteps[activeStep].details.map((detail, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="bg-gray-200 rounded-3xl p-12 border border-gray-300 shadow-xl">
                  <div className="text-center">
                    <div className={`w-32 h-32 bg-gradient-to-r ${processSteps[activeStep].color} rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl animate-pulse`}>
                      {React.createElement(processSteps[activeStep].icon, { className: "w-16 h-16 text-white" })}
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">
                      {processSteps[activeStep].title}
                    </h4>
                    <div className="flex justify-center items-center space-x-2 text-orange-600">
                      <span className="text-4xl font-bold">{processSteps[activeStep].id}</span>
                      <span className="text-lg">/</span>
                      <span className="text-lg">{processSteps.length}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-12">
            <button
              onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
              disabled={activeStep === 0}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                activeStep === 0
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200 transform hover:scale-105 border border-gray-200'
              }`}
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
              <span>Précédent</span>
            </button>

            <div className="flex space-x-2">
              {processSteps.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeStep ? 'bg-orange-500' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setActiveStep(Math.min(processSteps.length - 1, activeStep + 1))}
              disabled={activeStep === processSteps.length - 1}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                activeStep === processSteps.length - 1
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200 transform hover:scale-105 border border-gray-200'
              }`}
            >
              <span>Suivant</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action - Light Mode */}
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
            <span className="text-white font-medium">Rejoignez-nous</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            Prêt à Collaborer avec un Partenaire de Confiance ?
          </h2>
          <p className="text-xl text-orange-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Contactez Movmed Trans dès aujourd'hui pour découvrir comment notre expertise et notre processus éprouvé
            peuvent optimiser votre logistique.
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

export default AboutPage;