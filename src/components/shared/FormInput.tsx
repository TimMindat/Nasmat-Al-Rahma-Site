import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

interface FormInputProps {
  id: string;
  label: string;
  type?: 'text' | 'email' | 'tel' | 'textarea';
  required?: boolean;
}

export default function FormInput({ id, label, type = 'text', required = false }: FormInputProps) {
  const { isRTL } = useLanguage();

  const inputClasses = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500";

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          rows={4}
          className={inputClasses}
          dir={isRTL ? 'rtl' : 'ltr'}
          required={required}
        />
      ) : (
        <input
          type={type}
          id={id}
          className={inputClasses}
          dir={isRTL ? 'rtl' : 'ltr'}
          required={required}
        />
      )}
    </div>
  );
}