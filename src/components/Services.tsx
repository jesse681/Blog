import React, { useState } from 'react';
import { CircleDot, PenSquare, Briefcase, Wrench, Building, Ruler, Users } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, active, onClick }: { 
  icon: React.ElementType, 
  title: string, 
  description: string, 
  active: boolean,
  onClick: () => void
}) => {
  return (
    <div 
      className={`p-6 rounded-lg transition-all duration-300 cursor-pointer hover:shadow-lg ${
        active ? 'bg-blue-800 text-white' : 'bg-white text-gray-800 shadow-md hover:bg-blue-50'
      }`}
      onClick={onClick}
    >
      <div className="flex items-start">
        <div className="mr-4">
          <div className={`p-3 rounded-full ${active ? 'bg-white text-blue-800' : 'bg-blue-100 text-blue-800'}`}>
            <Icon size={24} />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className={`${active ? 'text-blue-100' : 'text-gray-600'}`}>{description}</p>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  
  const services = [
    {
      icon: PenSquare,
      title: "Bureau d'études",
      description: "Notre bureau d'études interne est expert dans la conception de plans architecturaux, plans BA, plomberie, électricité et animation 3D.",
      details: [
        "Plan architectural",
        "Plan BA (béton armé)",
        "Plan plomberie",
        "Plan électricité",
        "Plan et animation 3D"
      ]
    },
    {
      icon: Building,
      title: "Travaux de construction",
      description: "Notre expertise dans le domaine de la construction nous permet d'offrir une panoplie de technologies à nos clients.",
      details: [
        "Construction de Bâtiments et Ouvrages d'Art",
        "Hydraulique et assainissement",
        "Réhabilitation et Extension"
      ]
    },
    {
      icon: Briefcase,
      title: "Autres expertises",
      description: "MADERE Bâtiment propose des services d'ingénierie-conseil de qualité, contribuant à la réussite des plans et programmes.",
      details: [
        "Études et assistance-conseils",
        "Élaboration des cahiers de charges et termes de référence",
        "Maitrise d'œuvre et assistance technique",
        "Pilotage de projet et programme",
        "Formation et mise à niveau",
        "Mission OPC",
        "Mission de contrôle de conformité"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Services
          </h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Notre présence dans le domaine, particulièrement en matière de construction d'ouvrages de génie civil TCE, 
            répond à l'importante nécessité réglementaire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              active={activeService === index}
              onClick={() => setActiveService(index)}
            />
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 transition-all duration-500">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">
            {services[activeService].title} - Détails
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services[activeService].details.map((detail, index) => (
              <li key={index} className="flex items-start">
                <CircleDot size={18} className="text-blue-800 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;