import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from '../types';

const links: NavLink[] = [
  { name: 'Story', href: '#story' },
  { name: 'Cocktails', href: '#cocktails' },
  { name: 'Food', href: '#food' },
  { name: 'Locations', href: '#locations' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-emerald-950/90 backdrop-blur-md py-4 border-b border-gold-800/30' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(true)}
              className="text-gold-400 hover:text-white transition-colors"
            >
              <Menu size={32} />
            </button>
            <span className="hidden md:block text-xs tracking-[0.2em] uppercase text-gold-400">
              Menu
            </span>
          </div>

          <div className="text-center">
            <h1 className={`font-serif font-bold tracking-tighter text-gold-100 transition-all duration-500 ${scrolled ? 'text-2xl' : 'text-4xl'}`}>
              THE VELVET STAG
            </h1>
            <p className={`text-[10px] tracking-[0.3em] text-gold-600 uppercase mt-1 transition-opacity duration-500 ${scrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
              Est. 1894 • Sofia, Bulgaria
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block border border-gold-600 text-gold-400 px-6 py-2 text-xs uppercase tracking-widest hover:bg-gold-600 hover:text-emerald-950 transition-all">
              Book a Table
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <div
        className={`fixed inset-0 bg-emerald-950 z-[60] transition-transform duration-700 ease-in-out transform ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="absolute top-6 right-6">
          <button onClick={() => setIsOpen(false)} className="text-gold-400 hover:text-white">
            <X size={40} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-serif text-5xl md:text-7xl text-gold-100 hover:text-gold-600 transition-colors italic"
            >
              {link.name}
            </a>
          ))}
          <div className="mt-12 pt-12 border-t border-gold-800/50 flex flex-col items-center gap-4">
             <p className="text-gold-400 uppercase tracking-widest text-sm">Follow Us</p>
             <div className="flex gap-4 text-cream/60">
                <span>Instagram</span>
                <span>Facebook</span>
                <span>Twitter</span>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;