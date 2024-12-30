import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import { galleryImages } from '../../data/gallery';

export function GalleryPreview() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Our Gallery"
          subtitle="Take a look at our work and professional environment"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.slice(0, 8).map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="aspect-square relative overflow-hidden rounded-lg"
            >
              <img
                src={image.url}
                alt={image.description}
                className="object-cover w-full h-full transform transition-transform hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/gallery">
            <Button size="lg">View Full Gallery</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
