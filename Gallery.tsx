/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, Scissors, Heart, Camera } from 'lucide-react';

import barberFadeCutImg from '../assets/images/barber_fade_cut_1781364957171.jpg';
import beardTrimmingImg from '../assets/images/beard_trimming_1781364971562.jpg';
import barberInteriorImg from '../assets/images/barber_interior_1781364985030.jpg';
import stylishStylingImg from '../assets/images/stylish_styling_1781364998369.jpg';

interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: string;
  subtitle: string;
}

export default function Gallery() {
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);
  const [likedPhotos, setLikedPhotos] = useState<Record<string, boolean>>({});

  const galleryItems: GalleryItem[] = [
    {
      id: 'fade-cut',
      src: barberFadeCutImg,
      title: 'Precision Mid Skin Fade',
      category: 'MODERN FADES',
      subtitle: 'Blending perfection carved with silver and gold detail shears.'
    },
    {
      id: 'beard-sculpt',
      src: beardTrimmingImg,
      title: 'Signature Beard Sculpting',
      category: 'BEARD GROOMING',
      subtitle: 'Finished with local Brooklyn beard balms and steam heat treatment.'
    },
    {
      id: 'interior-view',
      src: barberInteriorImg,
      title: 'Heritage West Village Studio',
      category: 'PREMIUM INTERIOR',
      subtitle: 'Ethereal vanity lighting illuminating custom plush leather seats.'
    },
    {
      id: 'pomade-style',
      src: stylishStylingImg,
      title: 'Executive Style Comb-Over',
      category: 'HAIR STYLING',
      subtitle: 'Sleek premium water-soluble matte clay finishing.'
    },
    {
      id: 'shear-detail',
      src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800&h=600',
      title: 'Master Scissor Styling',
      category: 'BARBER WORK',
      subtitle: 'Meticulous shear-over-comb techniques designed for organic volume.'
    },
    {
      id: 'vintage-chair',
      src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800&h=600',
      title: 'Classic Leather Station',
      category: 'ATMOSPHERE',
      subtitle: 'Legacy heavy-gauge iron barber seats maintained to perfection.'
    }
  ];

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedPhotos(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden border-b border-white/10" id="gallery">
      {/* Visual background accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Gallery Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="text-left max-w-2xl">
            <span className="text-[11px] font-mono tracking-[0.3em] text-gold-500 uppercase flex items-center space-x-2">
              <Camera className="w-3.5 h-3.5 animate-pulse" />
              <span>THE HOLLYWOOD EXPERIENCE</span>
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-5xl text-white tracking-wide font-light gold-glow">
              Craftsmanship <br />
              <span className="italic text-gold-500">In Every Portrait</span>
            </h2>
            <div className="w-16 h-[1px] bg-gold-400 mt-6" />
          </div>
          <p className="mt-6 md:mt-0 max-w-sm text-xs sm:text-sm text-[#a3a3a3] font-light leading-relaxed text-left">
            An inside look into our vintage NYC studio. Real barbershop frames, authentic walk-in portfolios, and luxurious custom-tailored haircuts.
          </p>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="gallery-image-bento">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onClick={() => setActivePhoto(item)}
              className="group relative cursor-pointer aspect-[4/3] rounded overflow-hidden border border-white/10 bg-lux-dark/80 hover:border-gold-500/50 transition-all duration-500 shadow-xl glass"
            >
              {/* Image with extreme luxury overlays */}
              <img
                src={item.src}
                alt={item.title}
                className="object-cover w-full h-full filter brightness-75 contrast-105 group-hover:scale-110 group-hover:brightness-90 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />

              {/* Dynamic Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-lux-black via-lux-black/10 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Quick Hover Controls */}
              <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                {/* Like Button */}
                <button
                  onClick={(e) => handleLike(item.id, e)}
                  className="p-2 bg-lux-black/70 hover:bg-lux-black text-white hover:text-red-500 rounded-full border border-white/10 transition-colors"
                  aria-label="Like photo"
                >
                  <Heart className={`w-4 h-4 ${likedPhotos[item.id] ? 'fill-red-500 text-red-500' : ''}`} />
                </button>
                {/* Maximize Button */}
                <div className="p-2 bg-lux-black/70 text-gold-500 rounded-full border border-gold-500/20">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Caption details always visible but animates */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 text-left">
                <span className="font-mono text-[9px] tracking-[0.25em] text-gold-500 font-bold block mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-base text-white font-light tracking-wide group-hover:text-gold-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-[#cfcfcf] font-light mt-1 max-w-sm truncate opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cinematic Lightbox Modal */}
        <AnimatePresence>
          {activePhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-lux-black/95 backdrop-blur-md"
              onClick={() => setActivePhoto(null)}
              id="gallery-lightbox-modal"
            >
              <div className="absolute top-6 right-6 z-50" id="lightbox-close-group">
                <button
                  onClick={() => setActivePhoto(null)}
                  className="p-3 bg-white/5 hover:bg-gold-500 text-white hover:text-black rounded-full border border-white/10 transition-all duration-300 glass"
                  aria-label="Close lightbox"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                className="glass max-w-4xl w-full rounded overflow-hidden border border-white/10 shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
                id="lightbox-container"
              >
                <div className="grid grid-cols-1 md:grid-cols-3">
                  {/* Photo Canvas */}
                  <div className="md:col-span-2 aspect-[4/3] bg-[#050505] flex items-center justify-center border-b md:border-b-0 md:border-r border-white/5">
                    <img
                      src={activePhoto.src}
                      alt={activePhoto.title}
                      className="object-cover w-full h-full filter brightness-90"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Photo Description Side Panel */}
                  <div className="p-8 flex flex-col justify-between bg-lux-dark/95 text-left">
                    <div>
                      <div className="flex items-center space-x-2 text-[10px] font-mono tracking-widest text-gold-500 mb-4">
                        <Scissors className="w-3.5 h-3.5" />
                        <span>{activePhoto.category}</span>
                      </div>

                      <h4 className="font-serif text-xl sm:text-2xl text-white font-light leading-snug gold-glow">
                        {activePhoto.title}
                      </h4>

                      <div className="w-10 h-[1px] bg-gold-400 my-4" />

                      <p className="text-xs text-[#b3b3b3] leading-relaxed font-light">
                        {activePhoto.subtitle}
                      </p>
                    </div>

                    <div className="pt-8 border-t border-white/5 flex items-center justify-between" id="lightbox-sidebar-footer">
                      <button
                        onClick={(e) => handleLike(activePhoto.id, e)}
                        className={`flex items-center space-x-1.5 text-xs font-mono tracking-widest uppercase transition-colors ${
                          likedPhotos[activePhoto.id] ? 'text-red-500' : 'text-[#8c8c8c] hover:text-white'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${likedPhotos[activePhoto.id] ? 'fill-red-500' : ''}`} />
                        <span>{likedPhotos[activePhoto.id] ? 'Liked' : 'Like Work'}</span>
                      </button>

                      <span className="text-[10px] font-mono text-[#5c5c5c]">HOLLYWOOD 2002</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
