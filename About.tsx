/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Award, Users, ShieldCheck, HeartHandshake } from 'lucide-react';
import barberFadeCutImg from '../assets/images/barber_fade_cut_1781364957171.jpg';
import barberInteriorImg from '../assets/images/barber_interior_1781364985030.jpg';

export default function About() {
  const highlights = [
    {
      icon: Award,
      title: '20+ Years of Craftsmanship',
      description: 'Since 2002, our blades have defined premium haircuts in New York. We merge classic techniques with modern razor artistry.'
    },
    {
      icon: Users,
      title: 'Multi-Generational Legacy',
      description: 'We cut hair for fathers, sons, grandfathers, and toddlers. Our chairs hold memories and build loyal, lifelong bonds.'
    },
    {
      icon: ShieldCheck,
      title: 'Uncompromised Consistency',
      description: 'We build relationships through precision. Experience the exact same elite styling standard on every single visit.'
    },
    {
      icon: HeartHandshake,
      title: 'The Trusted Choice',
      description: 'Trusted by Wall Street executives, creative artists, neighborhood families, and children alike. All are welcomed as family.'
    }
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden border-b border-white/10" id="about">
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Column: Visual Bento Montage */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative"
            id="about-visuals"
          >
            {/* Main Picture Frame */}
            <div className="relative group rounded overflow-hidden border border-white/10 shadow-2xl z-10 aspect-[4/5] max-w-sm sm:max-w-md mx-auto">
              <img 
                src={barberFadeCutImg} 
                alt="Hollywood 2002 classic haircutting crafting" 
                className="object-cover w-full h-full filter brightness-75 contrast-110 group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lux-black via-transparent to-transparent opacity-85" />
              
              {/* Est Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded text-left">
                <p className="text-xl font-serif text-white tracking-widest font-light gold-glow">HOLLYWOOD 2002</p>
                <p className="text-[10px] font-mono tracking-[0.2em] text-gold-500 uppercase mt-1">
                  West Village, NYC • Trusted Craft
                </p>
              </div>
            </div>

            {/* Back Floating Image (Offset layout) */}
            <div className="absolute -bottom-10 -right-4 sm:-right-8 w-1/2 hidden sm:block aspect-[4/3] rounded overflow-hidden border border-white/10 shadow-2xl z-20">
              <img 
                src={barberInteriorImg} 
                alt="Hollywood 2002 studio setup" 
                className="object-cover w-full h-full filter brightness-90 saturate-75"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-lux-black/20" />
            </div>

            {/* Decorative Gold Frame Accent */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t border-l border-white/20 pointer-events-none rounded-tl hidden sm:block z-0" />
          </motion.div>

          {/* Right Column: Narrative Info */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col text-left"
            id="about-narrative"
          >
            <span className="text-[11px] font-mono tracking-[0.3em] text-gold-500 uppercase">
              ABOUT OUR HERITAGE
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-wide font-light leading-tight gold-glow">
              Honoring the Art of the <br />
              <span className="italic text-gold-500">Classic Barber Cut</span>
            </h2>
            <div className="w-16 h-[1px] bg-gold-400 mt-6 mb-8" />
            
            <p className="font-sans text-sm sm:text-base text-[#b3b3b3] leading-relaxed font-light mb-8">
              Founded in 2002 in the heart of New York, <strong className="text-white font-medium">Hollywood 2002 Barbershop</strong> was established to uphold a disappearing standard of elite personal service. For over 20 years, our Master Barbers have combined strict attention to detail, traditional hot towels, and state-of-the-art styling. We are more than an appointment; we are a multi-generational community where style meets reputation.
            </p>

            {/* highlights bento list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" id="about-highlights">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex flex-col items-start p-5 glass rounded transition-all duration-300 hover:border-gold-500/50">
                    <div className="p-2 border border-white/10 rounded bg-white/5 mb-3">
                      <Icon className="w-4 h-4 text-gold-500" />
                    </div>
                    <h3 className="text-white font-serif tracking-wider text-sm font-light">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-[#a3a3a3] leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
