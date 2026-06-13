/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scissors, Phone, Menu, X, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Location', href: '#contact' },
  ];

  const handleScrollToSegment = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-lux-black/95 backdrop-blur-lg py-3.5 shadow-lg border-b border-white/10'
            : 'bg-lux-black/80 backdrop-blur-md py-5 border-b border-white/5'
        }`}
        id="navbar-header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Group */}
            <a
              href="#"
              className="flex items-center space-x-3 group"
              id="navbar-logo-link"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="w-10 h-10 border border-white/10 glass rounded flex items-center justify-center bg-white/5 group-hover:border-gold-500/50 transition-all duration-300">
                <Scissors className="w-5 h-5 text-gold-500 group-hover:text-gold-300 group-hover:rotate-45 transition-all duration-500" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl tracking-[0.2em] font-bold text-white group-hover:text-gold-500 transition-colors duration-300 uppercase leading-none gold-glow">
                  Hollywood 2002
                </span>
                <span className="text-[10px] tracking-[0.4em] uppercase opacity-60 text-white/80 font-sans mt-1">
                  Barbershop New York
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8" id="desktop-nav">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-sans text-xs tracking-widest text-[#cfcfcf] hover:text-gold-500 uppercase transition-all duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gold-500 hover:after:w-full after:transition-all after:duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSegment(link.href.replace('#', ''));
                  }}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center space-x-6" id="desktop-nav-ctas">
              <a
                href={BUSINESS_INFO.phoneUrl}
                className="flex items-center space-x-2 text-xs font-serif tracking-widest text-white hover:text-gold-500 transition-all duration-300"
                id="navbar-phone-cta"
              >
                <Phone className="w-3.5 h-3.5 text-gold-500" />
                <span>+1 212 741 9680</span>
              </a>

              <button
                onClick={() => handleScrollToSegment('booking-form-section')}
                className="bg-gold-500 hover:brightness-110 text-black px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-300"
                id="navbar-book-cta"
              >
                Book Appointment
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex md:hidden" id="mobile-toggle-container">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gold-500 hover:text-gold-300 focus:outline-none transition-colors"
                aria-label="Toggle navigation menu"
                id="navbar-hamburger-btn"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-lux-black/98 md:hidden flex flex-col justify-center px-6 min-h-screen"
            id="mobile-nav-panel"
          >
            <div className="absolute top-6 left-6" id="mobile-drawer-brand">
              <div className="flex items-center space-x-3">
                <Scissors className="w-6 h-6 text-gold-500" />
                <span className="font-serif text-lg tracking-[0.2em] font-bold text-white uppercase">
                  Hollywood 2002
                </span>
              </div>
            </div>

            <nav className="flex flex-col space-y-6 text-center" id="mobile-nav-menu">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="font-serif text-2xl tracking-[0.15em] text-[#cfcfcf] hover:text-gold-500 transition-colors uppercase py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSegment(link.href.replace('#', ''));
                  }}
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="pt-8 flex flex-col space-y-4"
                id="mobile-nav-cta-group"
              >
                <button
                  onClick={() => handleScrollToSegment('booking-form-section')}
                  className="w-full py-4 bg-gradient-to-r from-gold-600 to-gold-400 text-lux-black text-sm tracking-[0.2em] font-bold uppercase rounded flex items-center justify-center space-x-2 shadow-lg shadow-gold-500/10"
                  id="mobile-drawer-book-btn"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </button>

                <a
                  href={BUSINESS_INFO.phoneUrl}
                  className="w-full py-4 border border-gold-500/30 hover:border-gold-500 text-white text-sm tracking-[0.2em] font-bold uppercase rounded flex items-center justify-center space-x-2 transition-colors"
                  id="mobile-drawer-call-btn"
                >
                  <Phone className="w-4 h-4 text-gold-500" />
                  <span>Call Store</span>
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
