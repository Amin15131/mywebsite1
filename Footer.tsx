/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Scissors, Phone, MapPin, Mail, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] pt-20 pb-10 border-t border-white/10 overflow-hidden" id="footer-section">
      {/* Decorative vertical gold stripes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1120px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Column 1: Brand Pitch (5/12 cols) */}
          <div className="md:col-span-5 text-left" id="footer-brand-column">
            <a
              href="#"
              className="flex items-center space-x-3 group mb-6"
              onClick={handleScrollToTop}
            >
              <div className="w-10 h-10 border border-white/10 rounded flex items-center justify-center bg-white/5 glass">
                <Scissors className="w-4 h-4 text-gold-500 group-hover:rotate-45 transition-transform duration-500" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg tracking-[0.2em] font-light text-white uppercase leading-none gold-glow">
                  Hollywood 2002
                </span>
                <span className="text-[10px] font-mono tracking-[0.3em] text-gold-500/80 uppercase mt-1">
                  Barbershop • NY
                </span>
              </div>
            </a>
            
            <p className="font-sans text-xs sm:text-sm text-[#8c8c8c] font-light leading-relaxed max-w-sm mb-6">
              A premium, heritage New York barbershop. Providing high-converting luxury skin fades, master clippers styling, scissor contours, and steam hot-lather razor grooming since 2002. Craftsmanship and consistency for over 20 years.
            </p>

            <span className="text-[11px] font-mono tracking-widest text-[#555] uppercase block">
              © {currentYear} HOLLYWOOD 2002 BARBERSHOP. ALL RIGHTS RESERVED.
            </span>
          </div>

          {/* Column 2: Quick Links (3/12 cols) */}
          <div className="md:col-span-3 text-left" id="footer-links-column">
            <h3 className="font-serif text-xs tracking-[0.2em] text-white font-light uppercase mb-6 gold-glow">
              QUICK LAUNCH
            </h3>
            <ul className="space-y-3 text-xs font-mono text-[#a3a3a3]" id="footer-nav-list">
              <li>
                <a 
                  href="#about" 
                  className="hover:text-gold-500 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  [01] THE HERITAGE
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="hover:text-gold-500 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  [02] SERVICE MENU
                </a>
              </li>
              <li>
                <a 
                  href="#gallery" 
                  className="hover:text-gold-500 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  [03] MEDIA ARCHIVE
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  className="hover:text-gold-500 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  [04] CLIENT STORIES
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="hover:text-gold-500 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  [05] BOOKING SEATS
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contacts Support (4/12 cols) */}
          <div className="md:col-span-4 text-left" id="footer-contact-column">
            <h3 className="font-serif text-xs tracking-[0.2em] text-white font-light uppercase mb-6 gold-glow">
              RESERVATIONS DIRECT
            </h3>
            <div className="space-y-4" id="footer-contact-details">
              <a 
                href={BUSINESS_INFO.phoneUrl} 
                className="flex items-center space-x-3 text-xs text-[#a3a3a3] hover:text-gold-500 transition-colors py-1 group"
              >
                <Phone className="w-4 h-4 text-gold-500 group-hover:scale-110 transition-transform" />
                <span className="font-mono tracking-wider font-semibold">{BUSINESS_INFO.phone}</span>
              </a>

              <div className="flex items-start space-x-3 text-xs text-[#a3a3a3]">
                <MapPin className="w-4 h-4 text-gold-500 mt-0.5" />
                <span className="leading-relaxed font-light">{BUSINESS_INFO.location}</span>
              </div>

              <div className="flex items-center space-x-3 text-xs text-[#a3a3a3]">
                <Mail className="w-4 h-4 text-gold-500" />
                <span className="font-mono font-light">frontdesk@hollywood2002.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer bottom bar */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6" id="footer-bottom-tier">
          <p className="text-[10px] text-[#555] font-mono tracking-wide">
            DESIGNED EXCLUSIVELY FOR ELITE HOSPITALITY BRANDING • WEST VILLAGE, NYC.
          </p>

          <button
            onClick={handleScrollToTop}
            className="p-3 bg-white/5 hover:bg-gold-500 text-white hover:text-black border border-white/10 hover:border-gold-500 rounded transition-all duration-300 flex items-center space-x-1.5 text-[10px] font-mono tracking-widest uppercase cursor-pointer glass"
            aria-label="Back to top scroll"
          >
            <span>Crown Ascent</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
