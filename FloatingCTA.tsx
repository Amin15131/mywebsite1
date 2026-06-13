/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Calendar, Scissors } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show when user scrolls past the hero section fold
      if (window.scrollY > window.innerHeight - 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleScrollToBooking = () => {
    const element = document.getElementById('booking-form-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-sm w-[90%] sm:w-auto"
          id="floating-cta-pill-wrapper"
        >
          {/* Dual Floating Interaction Pill */}
          <div className="glass p-2 rounded-full border border-white/10 flex items-center shadow-2xl justify-between sm:gap-3 bg-[#050505]/95">
            {/* Call button */}
            <a
              href={BUSINESS_INFO.phoneUrl}
              className="flex items-center space-x-2 px-4 py-2.5 rounded-full text-[10px] font-mono tracking-widest text-[#cfcfcf] hover:text-gold-500 hover:bg-white/5 transition-all"
              id="float-call-btn"
            >
              <Phone className="w-3.5 h-3.5 text-gold-500 animate-pulse" />
              <span className="hidden xs:inline">CALL STORE</span>
            </a>

            {/* Separator */}
            <div className="w-[1px] h-6 bg-white/10" />

            {/* Book button */}
            <button
              onClick={handleScrollToBooking}
              className="px-5 py-2.5 rounded-full bg-gold-500 hover:bg-gold-400 text-black font-semibold text-[10px] font-mono tracking-widest uppercase transition-all duration-300 flex items-center space-x-1.5 shadow-lg shadow-gold-500/20 cursor-pointer"
              id="float-book-btn"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>BOOK CHAIR</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
