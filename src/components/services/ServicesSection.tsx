import { motion } from 'framer-motion';
import { ServicesList } from './ServicesList';
import { SectionTitle } from '../ui/SectionTitle';

export function ServicesSection() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Our Services"
          subtitle="Professional grooming services tailored to your style"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <ServicesList />
        </motion.div>
      </div>
    </section>
  );
}
