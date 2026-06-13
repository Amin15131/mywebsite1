/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Star, Scissors, Users, Award, Shield } from 'lucide-react';
import { STATS } from '../constants';

export default function TrustStats() {
  return (
    <section className="relative py-20 bg-[#050505] border-b border-white/10 overflow-hidden" id="trust-stats">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bento stats list */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" id="stats-grid">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="p-6 sm:p-8 rounded bg-lux-black border border-white/10 glass hover:border-gold-500/50 shadow-lg text-center flex flex-col justify-center items-center transition-all duration-300 relative group"
            >
              {/* Subtle top indicator hover lines */}
              <div className="absolute top-0 left-12 right-12 h-[1px] bg-gold-500/0 group-hover:bg-gold-500/30 transition-all duration-500" />

              <span className="font-serif text-3xl sm:text-5xl text-gold-500 font-light tracking-tight group-hover:scale-105 transition-transform duration-300 gold-glow">
                {stat.value === '4.9/5' ? (
                  <span className="flex items-center justify-center gap-1">
                    <span>4.9</span>
                    <span className="text-sm text-gold-500/40 -mt-3">★</span>
                  </span>
                ) : (
                  <span>{stat.value}</span>
                )}
              </span>

              <h3 className="mt-4 font-serif text-xs sm:text-sm tracking-[0.2em] text-white font-light uppercase">
                {stat.label}
              </h3>

              <div className="w-8 h-[1px] bg-white/10 my-3" />

              <p className="text-[11px] sm:text-xs text-[#8c8c8c] font-light leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Short luxury loyalty claim banner */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 py-4 px-6 rounded border border-white/10 bg-white/5 glass max-w-4xl mx-auto text-center sm:text-left"
          id="trust-banner"
        >
          <div className="flex -space-x-2">
            <span className="w-7 h-7 rounded-full bg-gold-800 border border-lux-black flex items-center justify-center text-[10px] font-mono text-white">NYC</span>
            <span className="w-7 h-7 rounded-full bg-gold-600 border border-lux-black flex items-center justify-center text-[10px] font-mono text-lux-black font-bold">2002</span>
            <span className="w-7 h-7 rounded-full bg-gold-500 border border-lux-black flex items-center justify-center text-[10px] font-mono text-lux-black">HQ</span>
          </div>
          <p className="text-xs font-mono text-[#a3a3a3] tracking-widest uppercase">
            ESTABLISHED REPUTATION BUILT SECURELY OVER <span className="text-white font-semibold">2,000,000 MINUTES OF COMBINED BARBER EXPERIENCE</span>.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
