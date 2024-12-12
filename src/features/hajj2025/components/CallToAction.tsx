import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { WHATSAPP_GROUP_LINK } from '../constants';

export default function CallToAction() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <Link to="/book-now">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-8 py-3 bg-gold-600 text-white rounded-lg text-lg font-medium hover:bg-gold-700 transition-colors w-full sm:w-auto"
        >
          {t('hajj2025.cta.book')}
        </motion.button>
      </Link>
      
      <a
        href={WHATSAPP_GROUP_LINK}
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-8 py-3 border-2 border-gold-600 text-gold-600 rounded-lg text-lg font-medium hover:bg-gold-50 transition-colors flex items-center gap-2 w-full sm:w-auto"
        >
          <MessageCircle className="w-5 h-5" />
          {t('hajj2025.cta.whatsapp')}
        </motion.button>
      </a>
    </div>
  );
}