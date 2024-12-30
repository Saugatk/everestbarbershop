import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import { trainingCourses } from '../../data/training';
import { GraduationCap, Clock, DollarSign } from 'lucide-react';

export function TrainingPreview() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Professional Training"
          subtitle="Start your career in barbering with our comprehensive courses"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainingCourses.slice(0, 3).map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-900">{course.name}</h3>
              <p className="mt-2 text-gray-600">{course.description}</p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-gray-500">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{course.duration} weeks</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <DollarSign className="h-4 w-4 mr-2" />
                  <span>NPR {course.price}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  <span>{course.certification}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/training">
            <Button size="lg">View All Courses</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
