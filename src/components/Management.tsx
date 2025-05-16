import React from 'react';
import { Target, Clock, Bookmark, Briefcase, Shield, Users, Layers, AlertTriangle } from 'lucide-react';

const ManagementItem = ({ icon: Icon, title, description }: { 
  icon: React.ElementType, 
  title: string, 
  description: string 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
      <div className="flex flex-col items-center text-center">
        <div className="p-3 rounded-full bg-blue-100 text-blue-800 mb-4">
          <Icon size={28} />
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const Management = () => {
  const managementItems = [
    {
      icon: Clock,
      title: "Gestion de la planification",
      description: "Planification précise des projets assurant le respect des délais et des objectifs."
    },
    {
      icon: Bookmark,
      title: "Gestion effective du scope",
      description: "Définition claire et gestion rigoureuse du périmètre des projets."
    },
    {
      icon: Briefcase,
      title: "Gestion des approvisionnements",
      description: "Contrôle rigoureux des chaînes d'approvisionnement et des ressources."
    },
    {
      icon: Shield,
      title: "Contrôle des facteurs contraignants",
      description: "Identification et maîtrise des éléments pouvant impacter le projet."
    },
    {
      icon: Users,
      title: "Gestion du personnel",
      description: "Organisation et optimisation des compétences des équipes."
    },
    {
      icon: Layers,
      title: "Coordination des tierces parties",
      description: "Gestion efficace des relations avec les partenaires et sous-traitants."
    },
    {
      icon: Target,
      title: "Coordination et communication",
      description: "Systèmes de communication efficaces entre tous les acteurs du projet."
    },
    {
      icon: AlertTriangle,
      title: "Gestion des risques",
      description: "Identification, évaluation et mitigation des risques potentiels."
    }
  ];

  return (
    <section id="management" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Management des Projets
          </h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Notre système de Management des projets est axé sur la gestion, la coordination et le contrôle. 
            Il s'appuie sur des éléments de planification, de mesure, de conformité et de gestion des ressources et des facteurs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {managementItems.map((item, index) => (
            <ManagementItem 
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Management;