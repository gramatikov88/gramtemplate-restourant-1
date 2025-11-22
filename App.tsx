import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import MenuSection from './components/MenuSection';
import FoodSection from './components/FoodSection';
import ParallaxImage from './components/ParallaxImage';
import TaproomSection from './components/TaproomSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-emerald-950 min-h-screen text-cream selection:bg-gold-600 selection:text-emerald-950">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <MenuSection />
        <FoodSection />
        <ParallaxImage />
        <TaproomSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;