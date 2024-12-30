export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export const reviews: Review[] = [
  {
    id: 'review1',
    name: 'Rajesh Kumar',
    rating: 5,
    comment: 'Best haircut I\'ve ever had! The attention to detail is amazing.',
    date: 'March 1, 2024',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
  },
  {
    id: 'review2',
    name: 'Amit Sharma',
    rating: 5,
    comment: 'Great atmosphere and professional service. Highly recommended!',
    date: 'February 28, 2024',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
  },
  {
    id: 'review3',
    name: 'Sunil Patel',
    rating: 4,
    comment: 'Very skilled barbers and friendly staff. Will come back!',
    date: 'February 25, 2024',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
  },
  {
    id: 'review4',
    name: 'Bikash Thapa',
    rating: 5,
    comment: 'The training program is excellent. Learned so much in just a few weeks.',
    date: 'February 20, 2024',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
  },
  {
    id: 'review5',
    name: 'Ram Adhikari',
    rating: 5,
    comment: 'Clean, professional, and great value for money.',
    date: 'February 15, 2024',
    avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef',
  },
  {
    id: 'review6',
    name: 'Deepak Karki',
    rating: 4,
    comment: 'Modern techniques and traditional service combined perfectly.',
    date: 'February 10, 2024',
    avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556',
  },
];
