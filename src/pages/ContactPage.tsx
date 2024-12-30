import { motion } from 'framer-motion';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { useState } from 'react';

interface StaffMember {
  id: number;
  name: string;
  available: boolean;
}

export function ContactPage() {
  const [staff, setStaff] = useState<StaffMember[]>([
    { id: 1, name: 'Barber 1', available: true },
    { id: 2, name: 'Barber 2', available: true },
    { id: 3, name: 'Barber 3', available: true },
    { id: 4, name: 'Barber 4', available: true },
  ]);

  const toggleAvailability = (id: number) => {
    setStaff((prevStaff) =>
      prevStaff.map((member) =>
        member.id === id ? { ...member, available: !member.available } : member
      )
    );
  };

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
                <p className="text-gray-600">123 Main Street, Hetauda, Nepal</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Phone className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600">+977 123-456-7890</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Mail className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">info@everestbarber.com</p>
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
            <div className="mt-4">
              <h3 className="font-semibold text-gray-900 mb-2">Staff Availability</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {staff.map((member) => (
                  <div key={member.id} className="flex items-center space-x-2">
                    <span className="font-medium text-gray-700">{member.name}:</span>
                    <button
                      onClick={() => toggleAvailability(member.id)}
                      className={`h-4 w-4 rounded-full focus:outline-none ${
                        member.available ? 'bg-green-500' : 'bg-red-500'
                      }`}
                    ></button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
