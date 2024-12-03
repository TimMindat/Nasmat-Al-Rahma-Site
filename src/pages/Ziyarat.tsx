import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Ziyarat() {
  const { t } = useTranslation();

  const sites = [
    {
      name: 'Masjid Al-Haram',
      description: 'The Sacred Mosque in Makkah, home of the Kaaba',
      image: 'https://images.unsplash.com/photo-1604867317798-4ae4a31d4e54?auto=format&fit=crop&w=800'
    },
    {
      name: 'Masjid An-Nabawi',
      description: 'The Prophet\'s Mosque in Madinah',
      image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800'
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-serif text-gray-900 mb-4">Sacred Sites</h1>
          <p className="text-xl text-gray-600">Explore the holy places of Islam</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sites.map((site, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={site.image}
                alt={site.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{site.name}</h3>
                <p className="text-gray-600">{site.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}