/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ArrowLeft, ArrowRight, ShieldAlert, BadgeCheck, Compass } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  // 6 sentiment pillars mapped from customer reviews
  const sentimentPillars = [
    { label: 'Multi-decadal loyalty', val: '5–20 Years', desc: 'Clients returning regularly since our opening day.' },
    { label: 'Uncompromised uniformity', val: '100% Consistency', desc: 'Same flawless scissor craft on custom request.' },
    { label: 'Welcoming NYC heritage', val: 'Friendly, Professional', desc: 'A lively, high-vibe atmosphere where everyone is family.' },
    { label: 'Elite haircut quality', val: 'Best Haircut Ever', desc: 'Widely considered the ultimate master groom experience.' },
    { label: 'Generational trust', val: 'Deep Client Trust', desc: 'Proudly cutting hair for grandpas, sons, and toddlers.' },
    { label: 'Dedicated travel', val: 'Long Distance Calls', desc: 'Frequent travelers commute from CT and Jersey specifically for us.' }
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden border-b border-white/10" id="testimonials">
      {/* Golden soft background blobs */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Intro */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-mono tracking-[0.3em] text-gold-500 uppercase font-medium">
            HEAR THEIR STORIES
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl text-white tracking-wide font-light leading-tight gold-glow">
            Decades of Loyalty. <br />
            <span className="italic text-gold-500">Generations of Trust.</span>
          </h2>
          <div className="w-16 h-[1px] bg-gold-400 mx-auto mt-6" />
        </div>

        {/* Sentiment Analysis Dashboard & Main Reviews Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start" id="sentiment-analysis-grid">
          
          {/* Left Column (5/12 cols) - Premium Sentiment Indices Summary */}
          <div className="lg:col-span-5 flex flex-col items-start text-left" id="sentiment-pillars-column">
            <span className="text-[10px] font-mono tracking-[0.25em] text-gold-500/85 uppercase flex items-center gap-1.5 mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>CUSTOMER SENTIMENT MATRIX</span>
            </span>
            <h3 className="font-serif text-2xl text-white font-light leading-snug gold-glow">
              Why New York Chooses Us
            </h3>
            <p className="mt-3 text-xs text-[#a3a3a3] font-light leading-relaxed mb-8">
              Based on hundreds of Google feedback patterns, we summarized the genuine core pillars that define the Hollywood 2002 reputation.
            </p>

            {/* Matrix Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 w-full" id="sentiment-bento-grid">
              {sentimentPillars.map((p, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded border border-white/10 bg-white/5 glass hover:border-gold-500/50 transition-all duration-300 flex items-start space-x-3 group"
                >
                  <div className="mt-1 flex items-center justify-center w-5 h-5 rounded bg-gold-500/10 text-gold-500 border border-gold-500/20 group-hover:bg-gold-500 group-hover:text-black transition-all">
                    <span className="text-[9px] font-mono font-bold">{idx + 1}</span>
                  </div>
                  <div>
                    <div className="flex items-baseline space-x-2">
                      <span className="font-serif text-white text-xs font-light tracking-wide">
                        {p.val}
                      </span>
                      <span className="text-[9px] font-mono text-[#8c8c8c]">
                        ({p.label})
                      </span>
                    </div>
                    <p className="mt-1 text-[11px] text-[#a3a3a3] leading-normal font-light">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (7/12 cols) - Active Animated Testimonial Card Slider */}
          <div className="lg:col-span-7 flex flex-col justify-between" id="active-review-slider-column">
            <div className="relative glass rounded p-8 sm:p-12 shadow-2xl overflow-hidden min-h-[380px] flex flex-col justify-between">
              
              {/* Massive background quotes icon */}
              <Quote className="absolute -top-4 -right-4 w-32 h-32 text-gold-500/5 rotate-12 pointer-events-none" />

              {/* Stars rating banner */}
              <div className="flex items-center space-x-1" id="review-stars">
                {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold-500 fill-gold-500" />
                ))}
                <span className="text-[10px] font-mono text-gold-500/80 tracking-widest uppercase ml-3">
                  5.0 ★ VERIFIED PATRON
                </span>
              </div>

              {/* Main quote */}
              <div className="my-8 relative text-left">
                <Quote className="w-8 h-8 text-gold-500/30 mb-4" />
                <p className="font-serif text-lg sm:text-2xl text-white leading-relaxed italic font-light tracking-wide">
                  "{TESTIMONIALS[currentIndex].text}"
                </p>
              </div>

              {/* Review Author Metadata */}
              <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-left">
                <div>
                  <h4 className="font-serif text-white tracking-wide text-base font-light flex items-center">
                    {TESTIMONIALS[currentIndex].author}
                    <BadgeCheck className="w-4 h-4 text-gold-500 ml-2 animate-pulse" />
                  </h4>
                  <p className="text-[11px] text-gold-500/80 font-mono tracking-widest uppercase mt-0.5">
                    {TESTIMONIALS[currentIndex].role} — {TESTIMONIALS[currentIndex].location}
                  </p>
                </div>

                {/* Loyalty Badge */}
                <div className="px-4 py-1.5 rounded border border-white/10 bg-white/5 text-left inline-flex items-center space-x-1.5 self-start sm:self-center glass">
                  <span className="text-[11px] font-mono text-[#a3a3a3]">LOYALTY:</span>
                  <span className="text-[11px] font-mono text-gold-500 font-bold tracking-wider">
                    {TESTIMONIALS[currentIndex].yearsOfLoyalty} YEARS
                  </span>
                </div>
              </div>

            </div>

            {/* Slider Navigation Buttons */}
            <div className="mt-6 flex justify-between items-center px-4" id="slider-nav-bar">
              {/* Pagination counter dot status */}
              <div className="flex space-x-1.5">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1 rounded transition-all duration-300 ${
                      currentIndex === idx ? 'w-8 bg-gold-500' : 'w-2 bg-white/20'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next buttons */}
              <div className="flex space-x-3">
                <button
                  onClick={prevTestimonial}
                  className="p-3 bg-white/5 hover:bg-gold-500 text-[#a3a3a3] hover:text-black border border-white/10 hover:border-gold-500 rounded transition-all duration-300 glass"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-3 bg-white/5 hover:bg-gold-500 text-[#a3a3a3] hover:text-black border border-white/10 hover:border-gold-500 rounded transition-all duration-300 glass"
                  aria-label="Next testimonial"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
