/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Testimonial, Stat, Barber } from './types';

export const SERVICES: Service[] = [
  {
    id: 'classic-haircut',
    name: 'Classic Haircut',
    description: 'Precision shear & clipper haircut tailored to your head shape. Includes premium hair wash, hot towel neck shave, and massage.',
    price: 25,
    duration: '30 mins',
    category: 'hair',
    popular: true
  },
  {
    id: 'skin-fade',
    name: 'Skin Fade',
    description: 'Ultra-sharp skin drop, bald, or shadow fade. Sculpted with gold-standard detailers and finished with straight razor blends.',
    price: 35,
    duration: '45 mins',
    category: 'hair'
  },
  {
    id: 'beard-trim',
    name: 'Beard Trim',
    description: 'Master beard sculpting, clean shaping, edge line-up with straight razor, and condition with premium scent oils.',
    price: 20,
    duration: '30 mins',
    category: 'shave'
  },
  {
    id: 'hair-beard-combo',
    name: 'Haircut + Beard Combo',
    description: 'Our standard combo. Professional custom haircut paired with signature beard shaping, hot lather, and essential razor lining.',
    price: 45,
    duration: '60 mins',
    category: 'combo',
    popular: true
  },
  {
    id: 'premium-styling',
    name: 'Premium Styling',
    description: 'Signature blow-out and styling with world-class pomades or clays. Perfect for professional headshots, galas, or elite events.',
    price: 50,
    duration: '35 mins',
    category: 'styling'
  },
  {
    id: 'kids-haircut',
    name: 'Kids Haircut (Under 12)',
    description: 'Patient, friendly styling for children. Cool, fast haircuts that make kids feel special and confident.',
    price: 20,
    duration: '25 mins',
    category: 'hair'
  },
  {
    id: 'full-grooming',
    name: 'Full Grooming Package',
    description: 'The ultimate gentleman’s experience. Includes executive haircut, intensive steam-towel beard groom, facial, and scalp therapy.',
    price: 60,
    duration: '75 mins',
    category: 'combo'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Michael Vance',
    yearsOfLoyalty: 18,
    role: 'Creative Director',
    text: 'I have been getting my hair cut at Hollywood 2002 since they opened. In 18 years, the craftsmanship and friendly attention have never faltered once. The consistency is exceptional.',
    rating: 5,
    location: 'SOHO, Manhattan'
  },
  {
    id: '2',
    author: 'Daniel Chen',
    yearsOfLoyalty: 12,
    role: 'Investment Banker',
    text: 'Now I live in Connecticut, but I still travel back to New York specifically for Hollywood 2002. Hands down the absolute best haircut experience in the world. Unmatched skin fades.',
    rating: 5,
    location: 'Greenwich, CT'
  },
  {
    id: '3',
    author: 'Marcus & Liam Russo',
    yearsOfLoyalty: 15,
    role: 'Family Man & Entrepreneur',
    text: 'They cut my hair, my father’s hair, and now they cut my 6-year-old son Liam’s hair. Seamlessly multi-generational. They handle children with amazing friendliness and absolute mastery.',
    rating: 5,
    location: 'Brooklyn, NY'
  },
  {
    id: '4',
    author: 'David Harrison',
    yearsOfLoyalty: 6,
    role: 'Software Engineer',
    text: 'No matter which barber chair you sit in, the results are top tier. They have created an amazing professional atmosphere filled with banter, hospitality, and pure vintage New York character.',
    rating: 5,
    location: 'Queens, NYC'
  }
];

export const STATS: Stat[] = [
  {
    id: 'since',
    value: '24+',
    label: 'Years of Excellence',
    description: 'Serving New York with premium craftsmanship since 2002.'
  },
  {
    id: 'haircuts',
    value: '120k+',
    label: 'Precision Haircuts',
    description: 'Crafted by master barbers with meticulous attention.'
  },
  {
    id: 'rating',
    value: '4.9/5',
    label: 'Google Rating',
    description: 'Consistently rated as New York’s premier barbershop.'
  },
  {
    id: 'loyalty',
    value: '94%',
    label: 'Client Retention',
    description: 'Our multi-generational client loyalty is our pride.'
  }
];

export const BARBERS: Barber[] = [
  {
    id: 'tony',
    name: 'Tony "The Clipper" Valenti',
    specialty: 'Skin Fades & Hot Razor Shaves',
    experience: '22 Years',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    id: 'ramiro',
    name: 'Ramiro Ortiz',
    specialty: 'Classic Scissor Cuts & Beard Sculpting',
    experience: '18 Years',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    id: 'johnny',
    name: 'Johnny "Hollywood" King',
    specialty: 'Children’s Cuts & Modern Tapers',
    experience: '14 Years',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300'
  }
];

export const BUSINESS_INFO = {
  name: 'Hollywood 2002 Barbershop',
  phone: '+1 212 741 9680',
  phoneUrl: 'tel:+12127419680',
  location: '280 W 12th St, New York, NY 10014, USA',
  locationShort: 'New York, USA',
  hours: [
    { days: 'Monday – Friday', hours: '9:00 AM – 8:00 PM' },
    { days: 'Saturday', hours: '9:00 AM – 7:00 PM' },
    { days: 'Sunday', hours: '10:00 AM – 6:00 PM' }
  ]
};
