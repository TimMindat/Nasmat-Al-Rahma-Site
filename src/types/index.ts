export type Language = 'en' | 'ar' | 'de';

export interface Package {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  duration: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  content: string;
  image: string;
  rating: number;
}