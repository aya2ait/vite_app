import React, { useState } from 'react';
import { Search, Stethoscope, Cog, Rocket, Truck, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';

const ProcessPage = () => {
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
      color: "from-orange-500 to-orange-600",
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Notre Processus
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-orange-400 mb-8">
              Les 6 D de Movmed Trans
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-700/50 shadow-2xl">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
              Chez Movmed Trans, nous avons mis en place un processus structuré, basé sur six principes fondamentaux 
              que nous suivons avec rigueur à chaque étape de la gestion des envois. Ces principes nous permettent 
              de garantir la qualité, la sécurité et la ponctualité de nos services.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps - Interactive Timeline */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Timeline Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                    activeStep === index
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-2xl'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    activeStep === index ? 'bg-white/20' : 'bg-gray-600/50'
                  }`}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-sm">{step.id}. {step.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Step Detail */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${processSteps[activeStep].color} rounded-2xl flex items-center justify-center mr-6`}>
                    {React.createElement(processSteps[activeStep].icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  <div>
                    <span className="text-orange-400 font-semibold text-lg">Étape {processSteps[activeStep].id}</span>
                    <h3 className="text-3xl font-bold text-white">{processSteps[activeStep].title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {processSteps[activeStep].description}
                </p>

                <div className="space-y-3">
                  {processSteps[activeStep].details.map((detail, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              {/* Visual Representation */}
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-12 border border-gray-700/50">
                  <div className="text-center">
                    <div className={`w-32 h-32 bg-gradient-to-r ${processSteps[activeStep].color} rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl animate-pulse`}>
                      {React.createElement(processSteps[activeStep].icon, { className: "w-16 h-16 text-white" })}
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">
                      {processSteps[activeStep].title}
                    </h4>
                    <div className="flex justify-center items-center space-x-2 text-orange-400">
                      <span className="text-4xl font-bold">{processSteps[activeStep].id}</span>
                      <span className="text-lg">/</span>
                      <span className="text-lg">6</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mt-12">
            <button
              onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
              disabled={activeStep === 0}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                activeStep === 0
                  ? 'bg-gray-800/30 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-800/50 text-white hover:bg-gray-700/50 transform hover:scale-105'
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
                    index === activeStep ? 'bg-orange-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setActiveStep(Math.min(processSteps.length - 1, activeStep + 1))}
              disabled={activeStep === processSteps.length - 1}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                activeStep === processSteps.length - 1
                  ? 'bg-gray-800/30 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-800/50 text-white hover:bg-gray-700/50 transform hover:scale-105'
              }`}
            >
              <span>Suivant</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Un Processus Éprouvé
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.id}
                  className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/30 hover:border-orange-500/50 transition-all duration-300 group hover:transform hover:scale-105 cursor-pointer"
                  onClick={() => setActiveStep(index)}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.id}. {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description.substring(0, 100)}...
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-xl rounded-3xl p-12 border border-orange-500/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Découvrez Notre Processus en Action
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Nos 6 D garantissent une approche méthodique et professionnelle pour chaque mission. 
              Faites l'expérience de notre excellence opérationnelle.
            </p>
            <button 
              onClick={() => window.location.href = '/#contact'}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 px-8 rounded-2xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Démarrer votre projet
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessPage;