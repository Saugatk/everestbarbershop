import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

interface ServiceCardProps {
  name: string;
  price: number;
  duration: number;
  description: string;
}

export function ServiceCard({ name, price, duration, description }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
    >
      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-blue-600 font-medium">NPR {price}</p>
        <div className="flex items-center text-gray-500 text-sm">
          <Clock className="h-4 w-4 mr-1" />
          <span>{duration} min</span>
        </div>
      </div>
    </motion.div>
  );
}
