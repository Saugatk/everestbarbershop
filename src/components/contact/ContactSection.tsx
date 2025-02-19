import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

export function ContactSection() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Visit Us"
          subtitle="Find us in the heart of Hetauda"
        />
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6 text-center"
          >
            <div className="flex items-center justify-center space-x-4">
              <MapPin className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Address</h3>
                <p className="text-gray-600">BhutanDevi Road, Hetauda, Nepal</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Phone className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600">+977 9845685099</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Mail className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">ghimirepramod1235@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Clock className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Hours</h3>
                <div className="text-gray-600">
                  <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                  <p>Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
