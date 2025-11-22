import React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from '../types';

const foodItems: MenuItem[] = [
  {
    id: 1,
    name: "The Royal Stag Burger",
    description: "Wagyu beef, aged cheddar, caramelized onions, truffle aioli, brioche bun.",
    price: "€22",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["Signature", "Main"]
  },
  {
    id: 2,
    name: "Oysters Rockefeller",
    description: "Half dozen fresh oysters, spinach, bacon, pernod, parmesan crumb.",
    price: "€24",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["Seafood", "Starter"]
  },
  {
    id: 3,
    name: "Truffle & Parmesan Fries",
    description: "Hand-cut fries, white truffle oil, 24-month aged parmesan, chives.",
    price: "€9",
    image: "https://images.unsplash.com/photo-1573080496987-aeb4d9171d55?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["Shareable", "Side"]
  },
  {
    id: 4,
    name: "Artisan Charcuterie",
    description: "Selection of cured meats, local cheeses, honeycomb, house pickles, sourdough.",
    price: "€28",
    image: "https://images.unsplash.com/photo-1544982503-9f984c14501a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["Platter", "Shareable"]
  },
  {
    id: 5,
    name: "Shepherd's Pie",
    description: "Slow-braised lamb shoulder, root vegetables, rosemary, topped with cheesy mash.",
    price: "€19",
    image: "https://images.unsplash.com/photo-1619856698306-13df40009733?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["Classic", "Main"]
  },
  {
    id: 6,
    name: "Seared Scallops",
    description: "Pan-seared scallops, cauliflower purée, crispy pancetta, sage brown butter.",
    price: "€26",
    image: "https://images.unsplash.com/photo-1599084993091-1a8062963773?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["Seafood", "Starter"]
  },
  {
    id: 7,
    name: "Crispy Pork Belly",
    description: "Twice-cooked pork belly, apple slaw, cider reduction, star anise jus.",
    price: "€21",
    image: "https://images.unsplash.com/photo-1598155523122-38423bb4d6c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["Rich", "Main"]
  },
  {
    id: 8,
    name: "Sticky Toffee Pudding",
    description: "Warm date sponge, salted caramel sauce, clotted cream ice cream.",
    price: "€12",
    image: "https://images.unsplash.com/photo-1604423043492-413027c2775f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["Dessert", "Sweet"]
  }
];

const FoodSection: React.FC = () => {
  return (
    <section id="food" className="py-24 bg-emerald-950 text-cream relative border-t border-emerald-900">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <motion.h2 
             initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
             whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
             viewport={{ once: true }}
             transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
             className="font-serif text-5xl md:text-7xl mb-6 text-gold-100"
          >
            Provisions
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
             className="max-w-xl mx-auto text-gold-200/80 font-light"
          >
            Hearty fare to ground the spirits and delight the palate. From small plates to substantial sustenance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {foodItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-6 border-2 border-gold-800/30 rounded-lg">
                <div className="absolute top-2 right-2 z-20 flex flex-col gap-2 items-end">
                    {item.tags.map(tag => (
                        <span key={tag} className="bg-emerald-900/90 text-gold-400 text-[10px] px-2 py-1 uppercase tracking-wider backdrop-blur-sm border border-gold-800/30">
                            {tag}
                        </span>
                    ))}
                </div>
                <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full aspect-[3/4] object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-emerald-950/20 group-hover:bg-emerald-950/0 transition-colors duration-500"></div>
              </div>
              
              <div className="text-center">
                <h3 className="font-serif text-2xl mb-2 text-gold-100 group-hover:text-gold-400 transition-colors">{item.name}</h3>
                <div className="w-full h-[1px] bg-gold-800/30 mb-3 mx-auto max-w-[50px]"></div>
                <p className="text-sm text-cream/70 mb-3 h-12 px-4">{item.description}</p>
                <span className="font-serif text-xl text-gold-500 italic">{item.price}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="mt-20 text-center"
        >
            <button className="bg-transparent border border-gold-600 text-gold-400 px-10 py-4 uppercase tracking-[0.2em] font-bold text-xs hover:bg-gold-600 hover:text-emerald-950 transition-colors">
                Download Dinner Menu
            </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FoodSection;