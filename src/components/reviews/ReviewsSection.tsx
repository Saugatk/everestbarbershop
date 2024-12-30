import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { Star } from 'lucide-react';
import { reviews } from '../../data/reviews';

export function ReviewsSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Customer Reviews"
          subtitle="What our clients say about their experience"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 6).map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{review.comment}</p>
              <p className="mt-2 text-sm text-gray-500">{review.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
