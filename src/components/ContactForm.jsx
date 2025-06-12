import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://formsubmit.co/ayaaitsakrim@gmail.com", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (response.ok) {
          alert("Merci pour votre demande ! Nous vous contacterons bientôt.");
          setFormData({ name: '', email: '', phone: '', message: '' });
        } else {
          alert("Une erreur est survenue. Veuillez réessayer.");
        }
      })
      .catch(error => {
        console.error("Erreur :", error);
        alert("Erreur réseau. Veuillez réessayer.");
      });
  };

  return (
    <section id="contact" className="py-20 bg-gray-light">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-text-dark to-orange-primary bg-clip-text text-transparent">
            Demandez votre devis
          </h2>
          <p className="text-xl text-gray-700">Contactez-nous pour une solution logistique personnalisée</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/70 border border-gray-medium rounded-lg text-text-dark placeholder-gray-500 focus:outline-none focus:border-orange-primary focus:ring-2 focus:ring-orange-primary/20 transition-all duration-300"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/70 border border-gray-medium rounded-lg text-text-dark placeholder-gray-500 focus:outline-none focus:border-orange-primary focus:ring-2 focus:ring-orange-primary/20 transition-all duration-300"
              />
            </div>
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Votre téléphone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/70 border border-gray-medium rounded-lg text-text-dark placeholder-gray-500 focus:outline-none focus:border-orange-primary focus:ring-2 focus:ring-orange-primary/20 transition-all duration-300"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Décrivez vos besoins en détail..."
              rows="6"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/70 border border-gray-medium rounded-lg text-text-dark placeholder-gray-500 focus:outline-none focus:border-orange-primary focus:ring-2 focus:ring-orange-primary/20 transition-all duration-300 resize-vertical"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-orange-primary to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8 py-4 rounded-full text-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-primary/25"
            >
              Envoyer ma demande
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
