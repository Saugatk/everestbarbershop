import { motion } from 'framer-motion';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Star } from 'lucide-react';
import { useState } from 'react';
import { Review, reviews as initialReviews } from '../data/reviews';
import { Button } from '../components/Button';
import toast from 'react-hot-toast';

export function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleReviewSubmit = () => {
    if (name && comment) {
      const newReview: Review = {
        id: `review-${Date.now()}`,
        name,
        rating,
        comment,
        date: new Date().toLocaleDateString(),
        avatar: 'https://placekitten.com/100/100', // Placeholder avatar
      };
      setReviews((prevReviews) => [newReview, ...prevReviews]);
      setName('');
      setRating(5);
      setComment('');
      toast.success('Thank you for your review!');
    } else {
      toast.error('Please fill in all required fields.');
    }
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Customer Reviews"
          subtitle="Share your experience with us"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-md mb-8"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Leave a Review</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Rating
              </label>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setRating(i + 1)}
                    className={`focus:outline-none ${
                      i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  >
                    <Star className="h-6 w-6" />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comment">
                Comment
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="comment"
                placeholder="Your Comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            <div className="text-center">
              <Button size="md" onClick={handleReviewSubmit}>
                Submit Review
              </Button>
            </div>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
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
