export interface GalleryImage {
  id: string;
  url: string;
  description: string;
  category: 'haircut' | 'beard' | 'training' | 'shop';
}

export const galleryImages: GalleryImage[] = [
  {
    id: 'img1',
    url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1',
    description: 'Classic men\'s haircut',
    category: 'haircut',
  },
  {
    id: 'img2',
    url: 'https://images.unsplash.com/photo-1521490683712-35a1cb235d1c',
    description: 'Professional beard trimming',
    category: 'beard',
  },
  {
    id: 'img3',
    url: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c',
    description: 'Barber training session',
    category: 'training',
  },
  {
    id: 'img4',
    url: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70',
    description: 'Modern shop interior',
    category: 'shop',
  },
  {
    id: 'img5',
    url: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033',
    description: 'Precision haircut',
    category: 'haircut',
  },
  {
    id: 'img6',
    url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1',
    description: 'Beard grooming',
    category: 'beard',
  },
  {
    id: 'img7',
    url: 'https://images.unsplash.com/photo-1512690459411-b9245aed614b',
    description: 'Training workshop',
    category: 'training',
  },
  {
    id: 'img8',
    url: 'https://images.unsplash.com/photo-1521490683712-35a1cb235d1c',
    description: 'Shop equipment',
    category: 'shop',
  },
];
