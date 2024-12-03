import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function About() {
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
          <h1 className="text-4xl font-serif text-gray-900 mb-4">About Nasmat Al Rahma</h1>
          <p className="text-xl text-gray-600">Your trusted partner for Hajj and Umrah services</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1604867317798-4ae4a31d4e54?auto=format&fit=crop&w=800"
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-serif text-gray-900">Our Mission</h2>
            <p className="text-gray-600">
              At Nasmat Al Rahma, we are dedicated to providing Western Muslims with premium Hajj and Umrah services that combine spiritual fulfillment with modern comfort.
            </p>
            <h2 className="text-2xl font-serif text-gray-900">Our Values</h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gold-600 rounded-full mr-3"></span>
                <span>Excellence in service</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gold-600 rounded-full mr-3"></span>
                <span>Spiritual guidance</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gold-600 rounded-full mr-3"></span>
                <span>Cultural sensitivity</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}