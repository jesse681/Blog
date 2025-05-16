import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.pexels.com/photos/2574328/pexels-photo-2574328.jpeg?auto=compress&cs=tinysrgb&w=1600")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="max-w-3xl">
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Expertise et Excellence en Construction
          </h1>
          <p 
            className={`text-xl text-gray-200 mb-8 transition-all duration-1000 delay-300 ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            MADERE Bâtiment vous accompagne avec plus de 25 ans d'expertise dans tous les corps d'état du secteur du bâtiment.
          </p>
          <div 
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <a 
              href="#services" 
              className="bg-blue-800 hover:bg-blue-900 text-white py-3 px-6 rounded-md font-medium flex items-center justify-center transition-all duration-300 group"
            >
              Découvrir nos services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <a 
              href="#contact" 
              className="border-2 border-white text-white py-3 px-6 rounded-md font-medium hover:bg-white hover:text-blue-800 transition-all duration-300 flex items-center justify-center"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <svg 
            className="w-8 h-8 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;