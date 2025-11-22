import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="locations" className="bg-emerald-950 text-gold-100 pt-24 pb-12 border-t border-gold-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          
          {/* Address */}
          <div className="text-center md:text-left">
            <h4 className="font-serif text-2xl mb-6 text-gold-400">Contact</h4>
            <div className="space-y-4 text-cream/70 font-light">
              <p className="flex items-center justify-center md:justify-start gap-3">
                <MapPin size={16} className="text-gold-600" />
                12 Tsar Osvoboditel Blvd, Sofia
              </p>
              <p className="flex items-center justify-center md:justify-start gap-3">
                <Phone size={16} className="text-gold-600" />
                +359 2 988 1234
              </p>
              <p className="flex items-center justify-center md:justify-start gap-3">
                <Mail size={16} className="text-gold-600" />
                cheers@velvetstag.bg
              </p>
            </div>
          </div>

          {/* Logo */}
          <div className="text-center flex flex-col items-center justify-center">
             <h2 className="font-serif text-5xl font-bold text-gold-500 mb-2">V & S</h2>
             <p className="uppercase tracking-[0.4em] text-[10px] text-cream/50">The Velvet Stag</p>
             <div className="flex gap-6 mt-8">
                <a href="#" className="w-10 h-10 rounded-full border border-gold-800 flex items-center justify-center hover:bg-gold-600 hover:text-emerald-950 transition-all">
                    <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-gold-800 flex items-center justify-center hover:bg-gold-600 hover:text-emerald-950 transition-all">
                    <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-gold-800 flex items-center justify-center hover:bg-gold-600 hover:text-emerald-950 transition-all">
                    <Twitter size={18} />
                </a>
             </div>
          </div>

          {/* Hours */}
          <div className="text-center md:text-right">
            <h4 className="font-serif text-2xl mb-6 text-gold-400">Hours</h4>
            <div className="space-y-2 text-cream/70 font-light">
              <p>Mon - Wed: 4pm - 1am</p>
              <p>Thu - Fri: 4pm - 3am</p>
              <p>Saturday: 2pm - 3am</p>
              <p>Sunday: 2pm - 12am</p>
            </div>
          </div>

        </div>

        <div className="border-t border-emerald-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-emerald-700 uppercase tracking-widest">
            <p>&copy; 2024 The Velvet Stag. All Rights Reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-gold-500">Privacy</a>
                <a href="#" className="hover:text-gold-500">Terms</a>
                <a href="#" className="hover:text-gold-500">Press</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;