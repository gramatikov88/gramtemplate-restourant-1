import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-emerald-950">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/50 to-emerald-950/80" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
        >
            <p className="text-gold-400 uppercase tracking-[0.4em] text-sm mb-6">
                World Class Cocktails & Taproom
            </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl text-cream font-bold leading-none mb-8 italic"
        >
          The Velvet Stag
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col md:flex-row justify-center items-center gap-6"
        >
            <p className="text-xl md:text-2xl font-light text-gray-300 max-w-2xl mx-auto leading-relaxed">
                An homage to the golden age of Bulgarian hospitality. <br/>
                <span className="text-gold-500 italic">Tradition reborn in emerald.</span>
            </p>
        </motion.div>
        
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
            <div className="w-[1px] h-24 bg-gradient-to-b from-gold-400 to-transparent"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;