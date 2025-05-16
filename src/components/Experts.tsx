import React from 'react';
import { User } from 'lucide-react';

const Experts = () => {
  return (
    <section id="experts" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Experts Encadreurs
          </h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-blue-800 hover:shadow-md transition-shadow">
                <p className="text-gray-700">
                  La dimension humaine de MADERE Bâtiment implique une forte réactivité de nos experts pour répondre, 
                  sans inertie, aux attentes et besoins des clients et partenaires.
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-amber-600 hover:shadow-md transition-shadow">
                <p className="text-gray-700">
                  L'expertise de nos experts et consultants-encadreurs et la diligence des dirigeants permettent 
                  la mise en œuvre des fondamentaux de MADERE Bâtiment.
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-blue-800 hover:shadow-md transition-shadow">
                <p className="text-gray-700">
                  Le niveau d'exigence de MADERE Bâtiment est aujourd'hui déterminé par les enjeux et les défis actuels. 
                  Un ensemble d'Experts de diverses compétences participent à relever les défis d'innovation et de pragmatisme opérationnel.
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-amber-600 hover:shadow-md transition-shadow">
                <p className="text-gray-700">
                  Nos Consultants spécialistes, conscients des défis des secteurs, proposent des solutions rigoureusement élaborées 
                  dans la responsabilité à travers une approche collaborative.
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Professional team" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-blue-800 text-white p-6 rounded-lg shadow-lg hidden md:block">
              <div className="flex items-center">
                <User size={36} className="mr-4" />
                <div>
                  <h3 className="text-xl font-bold">25+ Années</h3>
                  <p>d'expertise sectorielle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experts;