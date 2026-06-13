/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Clock, Phone, Calendar, Sparkles, Check, ChevronDown, MessageSquare, AlertCircle } from 'lucide-react';
import { SERVICES, BARBERS, BUSINESS_INFO } from '../constants';
import { BookingInput } from '../types';

interface ContactBookingProps {
  selectedServiceId: string;
  setSelectedServiceId: (id: string) => void;
}

export default function ContactBooking({ selectedServiceId, setSelectedServiceId }: ContactBookingProps) {
  // Booking Form States
  const [formData, setFormData] = useState<BookingInput>({
    name: '',
    email: '',
    phone: '',
    serviceId: selectedServiceId || '',
    date: '',
    time: '',
    barber: 'any',
    notes: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [generatedTicketId, setGeneratedTicketId] = useState('');

  // Sync prop changes with state
  useEffect(() => {
    if (selectedServiceId) {
      setFormData(prev => ({ ...prev, serviceId: selectedServiceId }));
    }
  }, [selectedServiceId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (name === 'serviceId') {
      setSelectedServiceId(value);
    }
  };

  const validatePhone = (phone: string) => {
    return phone.length >= 7;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return setErrorMessage('Please present your full name.');
    if (!formData.email.trim() || !formData.email.includes('@')) return setErrorMessage('Please present a valid email address.');
    if (!formData.phone.trim() || !validatePhone(formData.phone)) return setErrorMessage('Please present a valid phone number.');
    if (!formData.serviceId) return setErrorMessage('Please select a grooming service.');
    if (!formData.date) return setErrorMessage('Please select a convenient date.');
    if (!formData.time) return setErrorMessage('Please choose a preferred slot time.');

    setErrorMessage('');
    setIsSubmitting(true);

    // Simulate luxury API booking response
    setTimeout(() => {
      const uniqueId = `HW${Math.floor(100000 + Math.random() * 900000)}`;
      setGeneratedTicketId(uniqueId);
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1500);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceId: '',
      date: '',
      time: '',
      barber: 'any',
      notes: ''
    });
    setSelectedServiceId('');
    setFormSubmitted(false);
  };

  const selectedServiceObj = SERVICES.find(s => s.id === formData.serviceId);
  const selectedBarberObj = BARBERS.find(b => b.id === formData.barber);

  // Generate dynamic timeslots
  const timeSlots = [
    '09:00 AM', '09:45 AM', '10:30 AM', '11:15 AM',
    '12:00 PM', '12:45 PM', '01:30 PM', '02:15 PM',
    '03:00 PM', '03:45 PM', '04:30 PM', '05:15 PM',
    '06:00 PM', '06:45 PM', '07:30 PM'
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden" id="contact">
      {/* Dynamic graphic dividers */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-stretch">
          
          {/* Left Column (5/12) - Contact Info, Business Hours & Google Map */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left" id="contact-info-column">
            <div>
              <span className="text-[11px] font-mono tracking-[0.3em] text-gold-500 uppercase">
                LOCATE THE SHOP
              </span>
              <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-wide font-light leading-tight gold-glow">
                Our Manhattan <br className="hidden sm:inline" />
                <span className="italic text-gold-500">Flagship Parlor</span>
              </h2>
              <div className="w-16 h-[1px] bg-gold-400 mt-6 mb-10" />

              {/* Physical details info cards */}
              <div className="space-y-6" id="contact-details-bento">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/5 rounded border border-white/10 text-gold-500 mt-1 glass">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xs tracking-widest text-[#cfcfcf] uppercase">
                      Physical Location
                    </h3>
                    <p className="mt-1.5 text-sm text-white font-light">
                      {BUSINESS_INFO.location}
                    </p>
                    <p className="text-xs text-[#8c8c8c] mt-0.5 font-light">
                      West Village • Corner of 12th & 4th St.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/5 rounded border border-white/10 text-gold-500 mt-1 glass">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xs tracking-widest text-[#cfcfcf] uppercase">
                      Ring Store Phone
                    </h3>
                    <a
                      href={BUSINESS_INFO.phoneUrl}
                      className="block mt-1.5 text-sm text-gold-500 hover:text-gold-300 font-mono tracking-wider font-light transition-colors"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <p className="text-xs text-[#8c8c8c] mt-0.5 font-light">
                      Reservations & Walk-In inquiries.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/5 rounded border border-white/10 text-gold-500 mt-1 glass">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="w-full">
                    <h3 className="font-serif text-xs tracking-widest text-[#cfcfcf] uppercase mb-1.5">
                      Business Hours
                    </h3>
                    <div className="space-y-1 sm:max-w-xs" id="contact-hours-list">
                      {BUSINESS_INFO.hours.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-baseline text-xs">
                          <span className="text-[#a3a3a3] font-light">{item.days}</span>
                          <span className="flex-grow border-b border-white/5 mx-2" />
                          <span className="text-white font-light font-mono">{item.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map stylized integration */}
            <div className="mt-12 rounded overflow-hidden border border-white/10 relative aspect-[16/10] bg-lux-black group shadow-xl">
              {/* Premium Maps Frame */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9566276853757!2d-74.00445!3d40.73562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf6a1f8dbd%3A0x6bd778a8813bcfe3!2s280%20W%2012th%20St%2c%20New%20York%2c%20NY%2010014!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                className="w-full h-full border-0 filter grayscale invert contrast-[1.1] brightness-[0.7] opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
                title="Hollywood 2002 Google Maps location"
                id="contact-google-map-iframe"
              />
              <div className="absolute inset-0 bg-gold-500/5 mix-blend-color pointer-events-none" />
              <div className="absolute bottom-4 left-4 p-2 py-1 bg-lux-black/80 backdrop-blur border border-white/15 rounded text-[9px] font-mono text-gold-500 tracking-wider glass">
                WEST VILLAGE, MANHATTAN
              </div>
            </div>
          </div>

          {/* Right Column (7/12) - Interaction Form or Interactive Confirmation Card */}
          <div className="lg:col-span-7" id="booking-form-section">
            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                /* The Booking Form */
                <motion.div
                  key="appointment-input-form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="glass p-8 sm:p-12 rounded border border-white/10 shadow-2xl relative"
                  id="booking-form-wrapper"
                >
                  <div className="absolute inset-2 border border-white/5 rounded pointer-events-none" />

                  <div className="flex items-center space-x-2 text-[10px] font-mono tracking-widest text-gold-500 mb-2">
                    <Sparkles className="w-4 h-4 animate-pulse" />
                    <span>SECURE CONFIRMED RESERVATION</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-light tracking-wide gold-glow">
                    Reserve Your Chair
                  </h3>
                  <p className="text-xs text-[#a3a3a3] leading-relaxed font-light mt-1 mb-8">
                    Select a service, preferred date, and barber. Walk-ins are accommodated, but client scheduling guarantees immediate front-seat privilege.
                  </p>

                  <form onSubmit={handleFormSubmit} className="space-y-6" id="booking-custom-form">
                    {/* Error Alerts */}
                    {errorMessage && (
                      <div className="flex items-center space-x-2 p-4 bg-red-400/10 border border-red-500/20 text-red-400 text-xs rounded" id="form-error-alert">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label className="block text-[10px] font-mono tracking-widest text-[#a3a3a3] uppercase mb-2">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="James Carter"
                          className="w-full px-4 py-3 bg-[#121212] border border-white/10 rounded text-sm text-white focus:outline-none focus:border-gold-500 transition-colors"
                          required
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-[10px] font-mono tracking-widest text-[#a3a3a3] uppercase mb-2">
                          Mobile Phone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (212) 555-0199"
                          className="w-full px-4 py-3 bg-[#121212] border border-white/10 rounded text-sm text-white focus:outline-none focus:border-gold-500 transition-colors font-mono"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Email */}
                      <div>
                        <label className="block text-[10px] font-mono tracking-widest text-[#a3a3a3] uppercase mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="client@newyork.com"
                          className="w-full px-4 py-3 bg-[#121212] border border-white/10 rounded text-sm text-white focus:outline-none focus:border-gold-500 transition-colors"
                          required
                        />
                      </div>

                      {/* Service Selection */}
                      <div>
                        <label className="block text-[10px] font-mono tracking-widest text-[#a3a3a3] uppercase mb-2">
                          Choose Service *
                        </label>
                        <div className="relative">
                          <select
                            name="serviceId"
                            value={formData.serviceId}
                            onChange={handleInputChange}
                            className="w-full appearance-none px-4 py-3 bg-[#121212] border border-white/10 rounded text-sm text-white focus:outline-none focus:border-gold-500 transition-colors"
                            required
                          >
                            <option value="" className="bg-[#121212] text-white">-- Choose Service --</option>
                            {SERVICES.map(s => (
                              <option key={s.id} value={s.id} className="bg-[#121212] text-white">
                                {s.name} — ${s.price} ({s.duration})
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-500 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Date selection */}
                      <div>
                        <label className="block text-[10px] font-mono tracking-widest text-[#a3a3a3] uppercase mb-2">
                          Choose Date *
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 bg-[#121212] border border-white/10 rounded text-sm text-white focus:outline-none focus:border-gold-500 transition-colors font-mono"
                          required
                        />
                      </div>

                      {/* Time slot */}
                      <div>
                        <label className="block text-[10px] font-mono tracking-widest text-[#a3a3a3] uppercase mb-2">
                          Available Slot Time *
                        </label>
                        <div className="relative">
                          <select
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                            className="w-full appearance-none px-4 py-3 bg-[#121212] border border-white/10 rounded text-sm text-white focus:outline-none focus:border-gold-500 transition-colors font-mono"
                            required
                          >
                            <option value="" className="bg-[#121212] text-white">-- Choose Time Slot --</option>
                            {timeSlots.map(t => (
                              <option key={t} value={t} className="bg-[#121212] text-white">{t}</option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-500 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    {/* Barber Preference */}
                    <div>
                      <label className="block text-[10px] font-mono tracking-widest text-[#a3a3a3] uppercase mb-2">
                        Preferred Barber Specialist
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4" id="barber-selection-pills">
                        <label className={`p-3 rounded border text-center cursor-pointer transition-all ${
                          formData.barber === 'any'
                            ? 'bg-gold-500/10 border-gold-500 text-white font-medium glass'
                            : 'bg-white/5 border-white/10 text-[#a3a3a3] hover:border-gold-500/50 glass'
                        }`}>
                          <input
                            type="radio"
                            name="barber"
                            value="any"
                            checked={formData.barber === 'any'}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <span className="text-xs uppercase font-serif block">First Avail</span>
                          <span className="text-[9px] font-mono text-gold-500/80 block mt-0.5 font-light">Fast Path</span>
                        </label>

                        {BARBERS.map((barber) => (
                          <label
                            key={barber.id}
                            className={`p-3 rounded border text-center cursor-pointer transition-all ${
                              formData.barber === barber.id
                                ? 'bg-gold-500/10 border-gold-500 text-white font-medium glass'
                                : 'bg-white/5 border-white/10 text-[#a3a3a3] hover:border-gold-500/50 glass'
                            }`}
                          >
                            <input
                              type="radio"
                              name="barber"
                              value={barber.id}
                              checked={formData.barber === barber.id}
                              onChange={handleInputChange}
                              className="sr-only"
                            />
                            <span className="text-xs uppercase font-serif block truncate font-light">{barber.name.split(' ')[0]}</span>
                            <span className="text-[9px] font-mono text-gold-500/80 block mt-0.5 truncate font-light">{barber.experience} Exp</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Notes / Special queries */}
                    <div>
                      <label className="block text-[10px] font-mono tracking-widest text-[#a3a3a3] uppercase mb-2">
                        Special Instructions / Hair Details
                      </label>
                      <div className="relative">
                        <textarea
                          name="notes"
                          value={formData.notes}
                          onChange={handleInputChange}
                          rows={3}
                          placeholder="Let your barber know of any preferred skin sensitivity style requests, hair cowlicks, or beverages..."
                          className="w-full px-4 py-3 bg-[#121212] border border-white/10 rounded text-sm text-white focus:outline-none focus:border-gold-500 transition-colors resize-none"
                        />
                        <MessageSquare className="absolute right-3 bottom-3 w-4 h-4 text-[#cfcfcf]" />
                      </div>
                    </div>

                    {/* Form submit button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 hover:from-gold-500 hover:to-gold-400 text-black font-semibold text-xs tracking-[0.2em] uppercase rounded shadow-lg shadow-gold-500/15 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                      id="form-submit-button"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          <span>Generating Reservation...</span>
                        </>
                      ) : (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Finalize Reservation</span>
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : (
                /* The Luxury Confirmation Ticket Card */
                <motion.div
                  key="appointment-ticket"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="glass p-8 sm:p-12 rounded border border-gold-500/30 text-center relative max-w-xl mx-auto shadow-2xl"
                  id="booking-ticket-wrapper"
                >
                  <div className="absolute inset-2 border border-white/5 rounded pointer-events-none" />

                  {/* Aesthetic stamp check mark */}
                  <div className="mx-auto w-16 h-16 rounded-full border border-gold-500 flex items-center justify-center bg-gold-400/5 mb-6 text-gold-500 scale-100 animate-bounce">
                    <Check className="w-8 h-8" />
                  </div>

                  <span className="text-[10px] font-mono tracking-[0.3em] text-gold-500 uppercase block mb-1">
                    APPOINTMENT SECURED
                  </span>
                  <h3 className="font-serif text-3xl text-white font-light tracking-wide uppercase gold-glow">
                    Your Chair is Ready
                  </h3>
                  <div className="w-12 h-[1px] bg-gold-400 mx-auto my-4" />

                  {/* Luxury Ticket Invoice slip UI display */}
                  <div className="rounded border border-white/10 bg-white/5 p-6 text-left space-y-4 my-8 glass" id="ticket-invoice-slip">
                    
                    {/* Ticket Header */}
                    <div className="flex justify-between items-center border-b border-white/5 pb-3">
                      <div>
                        <span className="text-[9px] font-mono text-[#8c8c8c]">APPOINTMENT ID</span>
                        <p className="text-sm font-mono text-gold-500 font-bold">{generatedTicketId}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[9px] font-mono text-[#8c8c8c]">STATUS</span>
                        <p className="text-[10px] font-mono text-green-400 font-semibold uppercase tracking-wider">● CONFIRMED</p>
                      </div>
                    </div>

                    {/* Client detail */}
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-[9px] font-mono text-[#8c8c8c] block">PATRON</span>
                        <span className="text-white font-light">{formData.name}</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-mono text-[#8c8c8c] block">PATRON PHONE</span>
                        <span className="text-white font-light font-mono">{formData.phone}</span>
                      </div>
                    </div>

                    {/* Service detail */}
                    <div className="grid grid-cols-2 gap-4 text-xs border-t border-white/5 pt-3">
                      <div>
                        <span className="text-[9px] font-mono text-[#8c8c8c] block">SELECTED SERVICE</span>
                        <span className="text-white font-light">{selectedServiceObj?.name || 'Classic Haircut'}</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-mono text-[#8c8c8c] block">PRICE & SPEED</span>
                        <span className="text-gold-500 font-medium font-mono">${selectedServiceObj?.price || 25} ({selectedServiceObj?.duration || '30m'})</span>
                      </div>
                    </div>

                    {/* Time details */}
                    <div className="grid grid-cols-2 gap-4 text-xs border-t border-white/5 pt-3">
                      <div>
                        <span className="text-[9px] font-mono text-[#8c8c8c] block">DATE & TIME</span>
                        <span className="text-white font-light font-mono">{formData.date} at {formData.time}</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-mono text-[#8c8c8c] block">BARBER DEPUTY</span>
                        <span className="text-white font-light uppercase">{selectedBarberObj?.name.split(' ')[0] || 'First Available Master'}</span>
                      </div>
                    </div>

                    {/* Additional Notes if any */}
                    {formData.notes && (
                      <div className="border-t border-white/5 pt-3 text-xs">
                        <span className="text-[9px] font-mono text-[#8c8c8c] block">MEMO TO BARBER</span>
                        <p className="text-[#c5a880] italic font-light text-[11px] leading-relaxed mt-0.5">
                          "{formData.notes}"
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Ticket footer policy */}
                  <p className="text-[10px] text-[#8c8c8c] font-light leading-relaxed max-w-sm mx-auto mb-8">
                    * Confirmation slip sent to <strong className="text-white font-medium">{formData.email}</strong>. Please arrive 10 minutes early. Walk-in cancel policy permits 1 hour prior shift reschedule.
                  </p>

                  {/* Reset/Dismiss tools */}
                  <div className="flex justify-center" id="ticket-action-btns">
                    <button
                      onClick={handleResetForm}
                      className="px-6 py-2.5 border border-white/10 hover:border-gold-500 hover:bg-gold-500/5 text-[#cfcfcf] hover:text-white font-semibold text-[10px] font-mono tracking-widest uppercase rounded transition-all duration-300 cursor-pointer glass"
                    >
                      Book Another Chair
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
