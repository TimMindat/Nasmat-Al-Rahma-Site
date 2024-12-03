import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-serif text-gray-900 mb-4">{t('contact.title')}</h1>
          <p className="text-xl text-gray-600">{t('contact.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gold-600 text-white rounded hover:bg-gold-700 transition-colors"
              >
                {t('contact.form.submit')}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-gold-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">{t('contact.form.email')}</h3>
                <p className="text-gray-600">{t('contact.info.email')}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-gold-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">{t('contact.form.phone')}</h3>
                <p className="text-gray-600">{t('contact.info.phone')}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-gold-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">{t('contact.form.address')}</h3>
                <p className="text-gray-600">{t('contact.info.address')}</p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-gold-50 rounded-lg">
              <p className="text-center text-gold-800 italic">
                "Indeed, Allah is with those who fear Him and those who are doers of good." - Quran 16:128
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}