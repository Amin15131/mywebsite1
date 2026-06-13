/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  category: 'hair' | 'shave' | 'styling' | 'combo';
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  author: string;
  yearsOfLoyalty: number;
  role: string;
  text: string;
  rating: number;
  location: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface BookingInput {
  name: string;
  email: string;
  phone: string;
  serviceId: string;
  date: string;
  time: string;
  barber: string;
  notes?: string;
}

export interface Barber {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  avatar: string;
}
