import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Notre Vision
          </h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Convertir les normes en actions concrètes, démontrer leur importance et asseoir notre position en tant qu'acteur clé 
            dans le domaine de l'ingénierie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 duration-300">
            <img 
              src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Construction professionals" 
              className="w-full h-96 object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              MADERE Bâtiment: Expertise & Excellence
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                MADERE Bâtiment est une société experte en sous-traitance dans le secteur du bâtiment, tous corps d'état. 
                Elle rassemble des spécialistes ayant plus de 25 ans d'expertise et propose des services d'analyse, de surveillance et de travaux.
              </p>
              <p>
                Notre passion pour l'innovation technologique et l'excellence en management, associée à une amélioration constante 
                de nos ressources humaines et matérielles, nous confère une compétence unique pour mettre en œuvre les projets 
                et répondre aux exigences de qualité.
              </p>
              <p>
                MADERE Bâtiment construit son identité en s'appuyant sur deux piliers principaux : le développement durable et un service client 
                de qualité, soutenus par une organisation flexible et réactive qui propose des solutions sur mesure. 
                Notre système de gestion est centré sur l'exemplarité.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;