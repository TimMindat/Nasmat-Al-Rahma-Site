import React from 'react';
import { motion } from 'framer-motion';
import { useLocalization } from '../../../hooks/useLocalization';
import LocalizedHeading from '../typography/LocalizedHeading';
import Text from '../typography/Text';

interface LocalizedSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export default function LocalizedSection({
  title,
  subtitle,
  children,
  className = '',
  animate = true
}: LocalizedSectionProps) {
  const { getFontFamily } = useLocalization();

  const Content = () => (
    <div className={getFontFamily()}>
      <div className="text-center mb-12">
        <LocalizedHeading text={title} className="mb-4" />
        {subtitle && (
          <Text text={subtitle} className="text-xl text-gray-600" />
        )}
      </div>
      {children}
    </div>
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