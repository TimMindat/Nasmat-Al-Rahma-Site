import React from 'react';
import { motion } from 'framer-motion';
import { useLocalization } from '../../../hooks/useLocalization';
import Heading from '../typography/Heading';
import Text from '../typography/Text';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export default function Section({ 
  title, 
  subtitle, 
  children, 
  className = '',
  animate = true
}: SectionProps) {
  const { isRTL } = useLocalization();

  const Content = () => (
    <>
      <div className={`text-center mb-8 ${isRTL ? 'font-arabic' : ''}`}>
        <Heading text={title} className="mb-2" />
        {subtitle && (
          <Text text={subtitle} className="text-xl text-gray-600" />
        )}
      </div>
      {children}
    </>
  );

  if (!animate) {
    return (
      <section className={className}>
        <Content />
      </section>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={className}
    >
      <Content />
    </motion.section>
  );
}