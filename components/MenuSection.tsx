import React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from '../types';

const drinks: MenuItem[] = [
  {
    id: 1,
    name: "The Green Knight",
    description: "Irish Whiskey, Matcha, Absinthe, Honey, Cream",
    price: "€14",
    image: "https://images.unsplash.com/photo-1560512823-8db03298e8ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["Signature", "Creamy"]
  },
  {
    id: 2,
    name: "Sofia Mule",
    description: "Rakia, Ginger Beer, Lime, Cucumber Bitters",
    price: "€11",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["Refreshing", "Local"]
  },
  {
    id: 3,
    name: "Velvet Old Fashioned",
    description: "Bourbon, Smoked Maple Syrup, Angostura, Orange Peel",
    price: "€13",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["Classic", "Strong"]
  },
  {
    id: 4,
    name: "Golden Hour",
    description: "Gin, Elderflower, Prosecco, Gold Dust",
    price: "€15",
    image: "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["Sparkling", "Sweet"]
  }
];

const MenuSection: React.FC = () => {
  return (
    <section id="cocktails" className="py-24 bg-emerald-900 text-cream">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="font-serif text-5xl md:text-7xl mb-6 text-gold-100"
          >
            Libations
          </motion.h2>
          <p className="max-w-xl mx-auto text-gold-200/80 font-light">
            Carefully curated elixirs designed to soothe the soul and ignite the spirit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {drinks.map((drink, index) => (
            <motion.div
              key={drink.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-6 border-2 border-gold-800/30 rounded-lg">
                <div className="absolute top-2 right-2 z-20 flex flex-col gap-2">
                    {drink.tags.map(tag => (
                        <span key={tag} className="bg-emerald-950/80 text-gold-400 text-[10px] px-2 py-1 uppercase tracking-wider backdrop-blur-sm">
                            {tag}
                        </span>
                    ))}
                </div>
                <img 
                    src={drink.image} 
                    alt={drink.name} 
                    className="w-full aspect-[3/4] object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
              </div>
              
              <div className="text-center">
                <h3 className="font-serif text-2xl mb-2 text-gold-100 group-hover:text-gold-400 transition-colors">{drink.name}</h3>
                <div className="w-full h-[1px] bg-gold-800/30 mb-3 mx-auto max-w-[50px]"></div>
                <p className="text-sm text-cream/70 mb-3 h-10">{drink.description}</p>
                <span className="font-serif text-xl text-gold-500 italic">{drink.price}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
            <button className="bg-gold-600 text-emerald-950 px-10 py-4 uppercase tracking-[0.2em] font-bold text-xs hover:bg-gold-400 transition-colors">
                View Full Menu
            </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;