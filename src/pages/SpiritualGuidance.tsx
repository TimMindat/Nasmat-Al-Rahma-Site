import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Book, Users, Heart, Map } from 'lucide-react';

export default function SpiritualGuidance() {
  const { t } = useTranslation();

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-serif text-gray-900 mb-4">Spiritual Guidance</h1>
          <p className="text-xl text-gray-600">Expert guidance for your sacred journey</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {[
            {
              icon: Book,
              title: 'Educational Resources',
              description: 'Access comprehensive guides and materials about Hajj and Umrah rituals'
            },
            {
              icon: Users,
              title: 'Expert Scholars',
              description: 'Learn from qualified scholars who provide spiritual guidance throughout your journey'
            },
            {
              icon: Heart,
              title: 'Personal Support',
              description: 'Receive one-on-one support for your spiritual and practical needs'
            },
            {
              icon: Map,
              title: 'Guided Tours',
              description: 'Experience sacred sites with knowledgeable guides who explain their significance'
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-gold-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}