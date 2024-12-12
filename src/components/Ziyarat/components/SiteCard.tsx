import React from 'react';
import { useLocalization } from '../../../hooks/useLocalization';
import Text from '../../shared/typography/Text';

interface SiteCardProps {
  name: string;
  description: string;
  image: string;
}

export default function SiteCard({ name, description, image }: SiteCardProps) {
  const { getFontFamily } = useLocalization();

  return (
    <div className={`
      bg-white rounded-lg shadow-lg overflow-hidden
      ${getFontFamily()}
    `}>
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <Text text={name} className="text-xl font-semibold mb-2" />
        <Text text={description} className="text-gray-600" />
      </div>
    </div>
  );
}