/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import TrustStats from './components/TrustStats';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ContactBooking from './components/ContactBooking';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');

  return (
    <div className="relative min-h-screen bg-lux-black text-white font-sans antialiased overflow-x-hidden" id="app-root-container">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Hero Cinematic Background */}
      <Hero />

      {/* 3. About Heritage Highlight Section */}
      <About />

      {/* 4. Elite Services List with Filtration */}
      <Services onSelectService={setSelectedServiceId} />

      {/* 5. Gold Statistics Confidence Metric section */}
      <TrustStats />

      {/* 6. Cinematic Lightbox Portfolio Gallery */}
      <Gallery />

      {/* 7. Testimonials client sentiment stories */}
      <Testimonials />

      {/* 8. Contact maps & Luxury appointment form reservation */}
      <ContactBooking 
        selectedServiceId={selectedServiceId} 
        setSelectedServiceId={setSelectedServiceId} 
      />

      {/* 9. Elite Brand Footer details */}
      <Footer />

      {/* 10. Sticky bottom responsive CTA conversion slider */}
      <FloatingCTA />
    </div>
  );
}
