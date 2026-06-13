/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scissors, Check, Sparkles, Clock, Calendar } from 'lucide-react';
import { SERVICES } from '../constants';
import { Service } from '../types';

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'hair' | 'shave' | 'styling' | 'combo'>('all');

  const filteredServices = SERVICES.filter(service => 
    activeCategory === 'all' ? true : service.category === activeCategory
  );

  const handleBookClick = (serviceId: string) => {
    onSelectService(serviceId);
    const element = document.getElementById('booking-form-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const categoriesSet = [
    { id: 'all', name: 'ALL SERVICES' },
    { id: 'hair', name: 'HAIRCUTS & FADES' },
    { id: 'shave', name: 'BEARD & SHAVES' },
    { id: 'styling', name: 'STYLING' },
    { id: 'combo', name: 'VIP COMBOS' }
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden border-b border-white/10" id="services">
      {/* Background radial soft gold glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono tracking-[0.3em] text-gold-500 uppercase">
            SERVICE MENU & PRICING
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl text-white tracking-wide font-light gold-glow">
            Signature Craftsmanship. <br className="sm:hidden" />
            <span className="italic text-gold-500">No Shortcuts.</span>
          </h2>
          <div className="w-16 h-[1px] bg-gold-400 mx-auto mt-6 mb-4" />
          <p className="text-sm text-[#b3b3b3] font-light max-w-xl mx-auto">
            Review our elite list of grooming, hair styling, skin fades, and master scissor work. Standard pricing built with honesty and transparency.
          </p>
        </div>

        {/* Category Controls */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-16" id="services-categories">
          {categoriesSet.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-5 py-2 border rounded text-[10px] sm:text-xs font-mono tracking-widest uppercase transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gold-500 border-gold-500 text-black font-semibold'
                  : 'bg-white/5 border-white/10 text-white/80 hover:border-gold-500 hover:text-white glass'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Dynamic Service Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20"
          id="services-cards-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={service.id}
                className={`relative group p-6 sm:p-8 rounded bg-lux-black border transition-all duration-500 flex flex-col justify-between ${
                  service.popular 
                    ? 'border-gold-500/50 hover:border-gold-500 gold-border-glow bg-white/[0.05] glass' 
                    : 'border-white/5 hover:border-gold-500/30 glass'
                }`}
              >
                {/* Popularity ribbon index */}
                {service.popular && (
                  <div className="absolute top-0 right-6 transform -translate-y-1/2 flex items-center space-x-1 px-3 py-1 bg-gold-500 rounded">
                    <Sparkles className="w-3 h-3 text-black" />
                    <span className="text-[9px] font-mono tracking-widest text-black font-bold uppercase">
                      CLIENT FAVORITE
                    </span>
                  </div>
                )}

                <div>
                  {/* Service Card Headline Group */}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-serif text-lg text-white font-light tracking-wide group-hover:text-gold-500 transition-colors">
                      {service.name}
                    </h3>
                    <div className="font-serif text-xl text-gold-500 font-light ml-4">
                      ${service.price}
                    </div>
                  </div>

                  {/* Service Description */}
                  <p className="text-xs text-[#a3a3a3] leading-relaxed font-light mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Card Footer: Metadata and Booking button */}
                <div className="pt-6 border-t border-white/5 flex items-center justify-between mt-auto">
                  <div className="flex items-center space-x-1.5 text-[10px] font-mono tracking-widest text-gold-500/80">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{service.duration}</span>
                  </div>

                  <button
                    onClick={() => handleBookClick(service.id)}
                    className={`px-4 py-2 text-[10px] font-mono tracking-widest uppercase transition-all duration-300 flex items-center space-x-1 ${
                      service.popular
                        ? 'bg-gold-500 hover:brightness-110 text-black font-bold'
                        : 'bg-white/5 hover:bg-gold-500/10 border border-white/20 hover:border-gold-500 text-white font-medium glass'
                    }`}
                  >
                    <span>Book Now</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Vintage Styled Pricing Chalkboard Board for Authenticity */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="glass p-8 sm:p-12 rounded border border-white/10 max-w-4xl mx-auto relative overflow-hidden"
          id="vintage-pricing-menu"
        >
          {/* Subtle vintage border ornament wrapper */}
          <div className="absolute inset-2 border border-white/5 rounded pointer-events-none" />

          <div className="text-center mb-10 relative">
            <span className="font-serif text-lg tracking-[0.3em] text-[#8e8e8e] uppercase">
              VINTAGE DRAFT MENU
            </span>
            <div className="flex justify-center items-center gap-3 mt-2">
              <span className="w-10 h-[1px] bg-white/10" />
              <Scissors className="w-4 h-4 text-gold-500" />
              <span className="w-10 h-[1px] bg-white/10" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6" id="vintage-pricing-grid">
            {SERVICES.map((s) => (
              <div 
                key={s.id} 
                className="group flex flex-col cursor-pointer"
                onClick={() => handleBookClick(s.id)}
              >
                <div className="flex justify-between items-baseline">
                  <span className="font-serif text-white tracking-wide text-sm font-light group-hover:text-gold-500 transition-colors flex items-center">
                    {s.name}
                    {s.popular && <span className="ml-2 w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />}
                  </span>
                  
                  {/* Ledger dotted line */}
                  <span className="flex-grow border-b border-dotted border-white/10 mx-3 relative -bottom-1" />

                  <span className="font-serif text-gold-500 text-sm font-light group-hover:scale-110 transition-transform">
                    ${s.price}
                  </span>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-[11px] text-[#8c8c8c] font-light max-w-[240px] truncate">
                    {s.description}
                  </span>
                  <span className="text-[10px] font-mono text-white/30 ml-2">{s.duration}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick info notes footer */}
          <div className="mt-12 text-center text-xs font-mono text-[#8c8c8c] tracking-wider relative">
            <span>* ALL CUTS INCLUDE CLEAN BACK AND SIDES SHAVING & HOT STEAM TOWEL MASSAGE.</span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
