import React from 'react';
import { motion } from 'framer-motion';
import { useLocalization } from '../../hooks/useLocalization';
import Text from './typography/Text';

interface TestimonialProps {
  content: string;
  author?: string;
  delay?: number;
}

export default function LocalizedTestimonial({ content, author, delay = 0 }: TestimonialProps) {
  const { getFontFamily } = useLocalization();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`text-center ${getFontFamily()}`}
    >
      <Text 
        text={content}
        className="text-xl"
      />
      {author && (
        <Text 
          text={author}
          className="text-gray-600 mt-2"
        />
      )}
    </motion.div>
  );
}