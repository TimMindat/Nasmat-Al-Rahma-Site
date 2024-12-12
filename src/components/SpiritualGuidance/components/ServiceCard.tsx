import React from 'react';
import { LucideIcon } from 'lucide-react';
import { useLocalization } from '../../../hooks/useLocalization';
import Text from '../../shared/typography/Text';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  const { isRTL, getFontFamily } = useLocalization();

  return (
    <div className={`
      bg-white p-6 rounded-lg shadow-lg 
      ${isRTL ? 'text-right' : 'text-left'}
      ${getFontFamily()}
    `}>
      <div className={`
        w-12 h-12 bg-gold-100 rounded-lg 
        flex items-center justify-center mb-4
        ${isRTL ? 'mr-0 ml-auto' : 'ml-0'}
      `}>
        <Icon className="w-6 h-6 text-gold-600" />
      </div>
      <Text text={title} className="text-xl font-semibold mb-2" />
      <Text text={description} className="text-gray-600" />
    </div>
  );
}