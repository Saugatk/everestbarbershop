import { motion } from 'framer-motion';
import { SectionTitle } from '../components/ui/SectionTitle';
import { ServiceCard } from '../components/services/ServiceCard';
import { services } from '../data/services';

export function ServicesPage() {
  return (
    <section className="py-16 px-6">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
