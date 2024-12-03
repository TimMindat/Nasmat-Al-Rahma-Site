import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import type { Package } from '../../types';

interface PackageCardProps {
  package: Package;
  onBook?: () => void;
  buttonText: string;
}

export default function PackageCard({ package: pkg, onBook, buttonText }: PackageCardProps) {
  const { isRTL } = useLanguage();

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={pkg.image}
        alt={pkg.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
        <p className="text-gray-600 mb-4">{pkg.description}</p>
        <ul className={`space-y-2 mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
          {pkg.features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm">
              <span className="mr-2">•</span>
              {feature}
            </li>
          ))}
        </ul>
        <div className={`flex justify-between items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
          <span className="text-gold-600 font-semibold">{pkg.price}</span>
          <span className="text-sm text-gray-500">{pkg.duration}</span>
        </div>
        <button
          onClick={onBook}
          className="w-full mt-4 px-4 py-2 bg-gold-600 text-white rounded hover:bg-gold-700 transition-colors"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}