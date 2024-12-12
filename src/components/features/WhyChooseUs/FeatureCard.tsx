import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all"
    >
      <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-gold-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}