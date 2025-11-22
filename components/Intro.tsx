import React from 'react';
import { motion } from 'framer-motion';

const Intro: React.FC = () => {
  return (
    <section id="story" className="py-32 px-6 bg-emerald-950 text-cream relative overflow-hidden">
      {/* Decorative Background Text */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] flex items-center justify-center overflow-hidden">
        <span className="text-[20vw] font-serif italic whitespace-nowrap">1894</span>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-32 relative z-10">
        
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8 }}
            className="text-center"
        >
          <h2 className="font-serif text-4xl md:text-6xl mb-8 text-gold-100 italic">The Legend</h2>
          <div className="w-12 h-[2px] bg-gold-600 mx-auto mb-8"></div>
          <p className="font-sans text-lg md:text-xl leading-relaxed text-gray-300">
            Hidden beneath the cobblestones of Sofia, The Velvet Stag was once a clandestine meeting place for poets, revolutionaries, and artists. We have restored the original woodwork, polished the brass, and reopened the doors to a new generation of dreamers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.8 }}
            >
                 <img 
                    src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Old Bar Interior" 
                    className="w-full h-[500px] object-cover rounded-t-[10rem] border-4 border-emerald-900 grayscale hover:grayscale-0 transition-all duration-700"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.8 }}
                className="text-left"
            >
                <h3 className="text-gold-400 tracking-widest uppercase text-sm mb-4">Our Philosophy</h3>
                <h2 className="font-serif text-4xl mb-6">Chaos & Order</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                    Like the original Irish-American taverns, we believe a bar is a stage. The drinks are the props, and you are the protagonist. Our menu is divided into two acts: the chaotic energy of the Taproom and the refined elegance of the Parlor.
                </p>
                <button className="text-gold-400 border-b border-gold-400 pb-1 hover:text-white hover:border-white transition-colors">
                    Read the full story
                </button>
            </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Intro;