import { useState } from 'react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Button } from '../components/Button';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import 'react-day-picker/dist/style.css';
import { services } from '../data/services';

export function BookPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
  };

  const handleBookAppointment = () => {
    if (selectedDate && name && email && phone && selectedService) {
      const formattedDate = selectedDate ? format(selectedDate, 'MMMM d, yyyy') : 'Not selected';
      toast.success(
        `Appointment booked for ${formattedDate} with service ${selectedService} for ${name}!`,
        { duration: 5000 }
      );
      console.log({
        name,
        email,
        phone: `+977${phone}`,
        date: formattedDate,
        service: selectedService,
        specialRequests,
      });
      // Reset form fields after submission
      setSelectedDate(undefined);
      setName('');
      setEmail('');
      setPhone('');
      setSelectedService('');
      setSpecialRequests('');
    } else {
      toast.error('Please fill in all required fields.');
    }
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionTitle
          title="Book an Appointment"
          subtitle="Please fill in the details below"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
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
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                Phone
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <span className="text-gray-500">+977</span>
                </div>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-12"
                  id="phone"
                  type="tel"
                  placeholder="Your Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Select a Date
              </label>
              <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={handleDateSelect}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="service">
                Select a Service
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="service"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
              >
                <option value="" disabled>Select a service</option>
                {services.map((service) => (
                  <option key={service.id} value={service.name}>{service.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="requests">
                Special Requests
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="requests"
                placeholder="Any special requests?"
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-6 text-center">
            <Button size="lg" onClick={handleBookAppointment}>
              Book Appointment
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
