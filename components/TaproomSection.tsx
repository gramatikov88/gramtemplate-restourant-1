import React from 'react';

const TaproomSection: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-cream text-emerald-950">
         <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
                <h2 className="font-serif text-6xl mb-6 text-emerald-900">The Taproom</h2>
                <p className="text-lg leading-relaxed font-light text-emerald-800 mb-8">
                    Downstairs is where the noise lives. Hand-pulled ales, sawdust on the floor, and conversations that last until dawn. It is unpretentious, loud, and exactly where you need to be after a long week.
                </p>
                <button className="bg-emerald-900 text-gold-100 px-8 py-3 uppercase text-xs tracking-widest hover:bg-emerald-800 transition-colors">
                    Explore The Taproom
                </button>
            </div>
            <div className="order-1 md:order-2">
                 <img src="https://images.unsplash.com/photo-1574096079513-d8259312b785?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-sm" alt="Taproom" />
            </div>
         </div>
    </section>
  );
};

export default TaproomSection;