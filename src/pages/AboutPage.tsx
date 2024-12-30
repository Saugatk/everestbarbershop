import { motion } from 'framer-motion';
import { SectionTitle } from '../components/ui/SectionTitle';
import { useState } from 'react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export function AboutPage() {
  const [isMissionVisible, setIsMissionVisible] = useState(false);
  const [isValuesVisible, setIsValuesVisible] = useState(false);

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="About Us"
          subtitle="Our story and commitment to excellence"
        />
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="prose prose-lg max-w-none"
        >
          <p>
            Welcome to <span className="font-bold text-blue-600">Everest Barber Shop & Training Center</span>,
            where tradition meets modern style. Located in the heart of Hetauda, Nepal, we are
            dedicated to providing top-notch grooming services and professional barber training.
          </p>
          <motion.div
            className="mt-8 cursor-pointer"
            onClick={() => setIsMissionVisible(!isMissionVisible)}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
            {isMissionVisible && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
                className="mt-2 text-gray-600 overflow-hidden"
              >
                <p>
                  To provide exceptional grooming services and empower aspiring barbers with the
                  skills and knowledge to excel in the industry. We strive to create a welcoming
                  and professional environment for all.
                </p>
              </motion.div>
            )}
          </motion.div>
          <motion.div
            className="mt-8 cursor-pointer"
            onClick={() => setIsValuesVisible(!isValuesVisible)}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold text-gray-900">Our Values</h3>
            {isValuesVisible && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
                className="mt-2 text-gray-600 overflow-hidden"
              >
                <ul className="list-disc list-inside">
                  <li>
                    <span className="font-medium">Excellence:</span> We are committed to the highest
                    standards in all our services and training programs.
                  </li>
                  <li>
                    <span className="font-medium">Professionalism:</span> We maintain a professional
                    and respectful environment for our clients and students.
                  </li>
                  <li>
                    <span className="font-medium">Innovation:</span> We embrace modern techniques and
                    trends while honoring traditional barbering practices.
                  </li>
                  <li>
                    <span className="font-medium">Community:</span> We foster a sense of community
                    and support among our clients and students.
                  </li>
                </ul>
              </motion.div>
            )}
          </motion.div>
          <p className="mt-8">
            Our team of experienced barbers is passionate about their craft and committed to
            delivering the best haircuts, beard trims, and shaves. We use only the highest quality
            products and techniques to ensure you leave looking and feeling your best.
          </p>
          <p>
            In addition to our grooming services, we offer comprehensive training programs for
            aspiring barbers. Our courses are designed to equip you with the skills and knowledge
            needed to succeed in the barbering industry.
          </p>
          <p>
            At <span className="font-bold text-blue-600">Everest Barber Shop & Training Center</span>, we believe in creating a welcoming and
            professional environment for all our clients and students. We are more than just a
            barber shop; we are a community.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
