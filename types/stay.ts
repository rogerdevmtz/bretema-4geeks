export type Stay = {
  id: string;
  title: string;
  location: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  images: string[];
  host: { name: string; years: number };
  amenities: string[];
  maxGuests: number;
  description: string;
};