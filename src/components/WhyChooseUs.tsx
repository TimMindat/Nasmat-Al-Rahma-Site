import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Shield, Star, Users, Clock } from 'lucide-react';

export default function WhyChooseUs() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Shield,
      title: 'Licensed & Certified',
      description: 'Fully licensed by Saudi authorities with 20+ years of experience'
    },
    {
      icon: Star,
      title: 'Premium Services',
      description: '5-star accommodations and VIP transportation services'
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Multilingual spiritual guides and dedicated support team'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock assistance throughout your journey'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-serif text-gray-900 mb-4"
          >
            Why Choose Nasmat Al Rahma
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600"
          >
            Experience excellence in every aspect of your spiritual journey
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-gold-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}