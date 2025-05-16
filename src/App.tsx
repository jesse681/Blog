import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Experts from './components/Experts';
import Management from './components/Management';
import ValueAdded from './components/ValueAdded';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Management />
        <Experts />
        <ValueAdded />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;