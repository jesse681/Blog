import React from 'react';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram, ArrowRight } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6 text-amber-400">MADERE Bâtiment</h3>
            <p className="text-gray-400 mb-6">
              Expertise et excellence en construction avec plus de 25 ans d'expérience dans tous les corps d'état du secteur du bâtiment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-amber-400">Liens Rapides</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Accueil
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  À propos
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Services
                </a>
              </li>
              <li>
                <a href="#management" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Management
                </a>
              </li>
              <li>
                <a href="#experts" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Experts
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-amber-400">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Bureau d'études
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Travaux de construction
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Hydraulique et assainissement
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Réhabilitation et Extension
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Études et assistance-conseils
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-amber-400">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-amber-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">123 Avenue de l'Architecture, 75000 Paris, France</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-amber-400 flex-shrink-0" />
                <span className="text-gray-400">+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-amber-400 flex-shrink-0" />
                <span className="text-gray-400">contact@madere-batiment.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {year} MADERE Bâtiment. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
                Mentions légales
              </a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;