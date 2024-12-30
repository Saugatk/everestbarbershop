export interface TrainingCourse {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  certification: string;
  syllabus: string[];
}

export const trainingCourses: TrainingCourse[] = [
  {
    id: 'basic-barbering',
    name: 'Basic Barbering Course',
    description: 'Perfect for beginners looking to start their barbering career.',
    duration: 12,
    price: 45000,
    certification: 'Basic Barbering Certificate',
    syllabus: [
      'Introduction to Barbering',
      'Basic Hair Cutting Techniques',
      'Tool Handling and Maintenance',
      'Health and Safety',
      'Customer Service Skills',
    ],
  },
  {
    id: 'advanced-styling',
    name: 'Advanced Hair Styling',
    description: 'Master modern styling techniques and trends.',
    duration: 8,
    price: 35000,
    certification: 'Advanced Styling Certificate',
    syllabus: [
      'Advanced Cutting Techniques',
      'Modern Styling Methods',
      'Color Theory and Application',
      'Trend Analysis',
      'Portfolio Building',
    ],
  },
  {
    id: 'beard-mastery',
    name: 'Beard Grooming Mastery',
    description: 'Specialized course focused on beard and facial hair styling.',
    duration: 4,
    price: 25000,
    certification: 'Beard Grooming Specialist',
    syllabus: [
      'Facial Hair Patterns',
      'Beard Shaping Techniques',
      'Hot Towel Treatments',
      'Facial Hair Products',
      'Skin Care Basics',
    ],
  },
];
