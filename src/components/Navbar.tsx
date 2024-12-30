import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Scissors, Bell } from 'lucide-react';
import { motion } from 'framer-motion';
import { format, sub } from 'date-fns';

interface Notification {
  id: string;
  message: string;
  date: Date;
}

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Training', href: '/training' },
  { name: 'About', href: '/about' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>(() => {
    const storedNotifications = localStorage.getItem('notifications');
    return storedNotifications ? JSON.parse(storedNotifications) : [];
  });

  useEffect(() => {
    localStorage.setItem('notifications', JSON.stringify(notifications));
  }, [notifications]);

  useEffect(() => {
    const now = new Date();
    const weekAgo = sub(now, { weeks: 1 });
    const filteredNotifications = notifications.filter(
      (notification) => notification.date > weekAgo
    );
    setNotifications(filteredNotifications);
  }, []);

  const addNotification = (message: string) => {
    const newNotification: Notification = {
      id: `notification-${Date.now()}`,
      message,
      date: new Date(),
    };
    setNotifications((prevNotifications) => [newNotification, ...prevNotifications]);
  };

  const removeNotification = (id: string) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="flex items-center space-x-2">
              <Scissors className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Everest Barber</span>
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end gap-4">
          <button
            type="button"
            className="relative -m-1.5 p-1.5 text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setNotificationsOpen(!notificationsOpen)}
          >
            <Bell className="h-6 w-6" aria-hidden="true" />
            {notifications.length > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                {notifications.length}
              </span>
            )}
          </button>
          <Link
            to="/book"
            className="text-sm font-semibold leading-6 text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Book Now
          </Link>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          className="fixed inset-y-0 right-0 z-50 w-full bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="flex items-center space-x-2">
                <Scissors className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">Everest Barber</span>
              </span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  to="/book"
                  className="block text-center text-sm font-semibold leading-6 text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
      {/* Notification Dropdown */}
      {notificationsOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg z-50"
        >
          <div className="py-2">
            {notifications.length === 0 ? (
              <p className="px-4 py-2 text-gray-500">No new notifications</p>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="flex items-center justify-between px-4 py-2 hover:bg-gray-100"
                >
                  <p className="text-sm text-gray-700">{notification.message}</p>
                  <div className="flex items-center">
                    <span className="text-xs text-gray-500 mr-2">
                      {format(notification.date, 'MMM d')}
                    </span>
                    <button
                      onClick={() => removeNotification(notification.id)}
                      className="text-gray-400 hover:text-gray-700 focus:outline-none"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </motion.div>
      )}
    </header>
  );
}
