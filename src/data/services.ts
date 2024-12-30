export interface Service {
  id: string;
  name: string;
  price: number;
  duration: number;
  description: string;
}

export const services: Service[] = [
  {
    id: 'haircut',
    name: 'Classic Haircut',
    price: 500,
    duration: 30,
    description: 'Precision haircut tailored to your style, includes washing and styling.',
  },
  {
    id: 'beard-trim',
    name: 'Beard Trim & Shape',
    price: 300,
    duration: 20,
    description: 'Professional beard grooming with precise trimming and shaping.',
  },
  {
    id: 'hot-towel-shave',
    name: 'Hot Towel Shave',
    price: 400,
    duration: 25,
    description: 'Traditional hot towel shave for the smoothest, closest result.',
  },
  {
    id: 'hair-color',
    name: 'Hair Color',
    price: 1500,
    duration: 90,
    description: 'Professional hair coloring with premium products.',
  },
  {
    id: 'kids-cut',
    name: "Kids' Haircut",
    price: 300,
    duration: 20,
    description: 'Gentle and patient service for our younger clients.',
  },
  {
    id: 'styling',
    name: 'Hair Styling',
    price: 800,
    duration: 45,
    description: 'Complete styling service for any occasion.',
  },
];
