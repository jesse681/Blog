import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const ValueAdded = () => {
  const advantages = [
    "Expertise développée au fil des ans",
    "Solutions à la demande en main-d'œuvre",
    "Études et suivi des projets",
    "Organisation et gestion minutieuse des travaux",
    "Approche orientée sur la qualité",
    "Services efficaces et rigoureux",
    "Collaboration des compétences de nos spécialistes",
    "Structure organisée avec des responsabilités clairement définies",
    "Amélioration constante de notre performance"
  ];

  return (
    <section 
      className="py-20 bg-blue-900 text-white relative"
      style={{
        backgroundImage: 'linear-gradient(rgba(30, 58, 138, 0.9), rgba(30, 58, 138, 0.9)), url("https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Valeurs Ajoutées
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-blue-100">
            Ce qui nous distingue dans le secteur du bâtiment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ul className="space-y-4 md:col-span-2">
            {advantages.map((advantage, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle2 className="text-amber-400 mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="text-blue-50">{advantage}</span>
              </li>
            ))}
          </ul>

          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">Notre Engagement</h3>
            <p className="text-gray-700 mb-6">
              Grâce à notre expertise développée au fil des ans, nous sommes aujourd'hui considérés comme une entité polyvalente. 
              Au-delà de fournir une solution à la demande en main-d'œuvre, nous proposons également des études et un suivi des projets 
              qui assurent une organisation et une gestion minutieuse des travaux.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-blue-800 hover:bg-blue-900 text-white py-3 px-6 rounded-md font-medium transition-colors duration-300"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueAdded;