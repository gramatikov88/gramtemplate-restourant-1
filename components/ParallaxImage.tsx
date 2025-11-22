import React from 'react';

const ParallaxImage: React.FC = () => {
  return (
    <section className="h-[60vh] w-full relative overflow-hidden flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')` }}
    >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center p-8 border-4 border-gold-500/30 bg-emerald-950/80 backdrop-blur-sm max-w-3xl mx-4">
            <h2 className="font-serif text-4xl md:text-5xl text-gold-100 mb-4 italic">
                "Good things come to those who wait."
            </h2>
            <p className="text-gold-400 uppercase tracking-widest text-xs">
                The Guinness Pour • Since 1894
            </p>
        </div>
    </section>
  );
};

export default ParallaxImage;