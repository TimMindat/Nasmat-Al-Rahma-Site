import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  [key: string]: string;
}

export function useForm<T extends FormData>(initialState: T) {
  const [formData, setFormData] = useState<T>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof T]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = (data: T): boolean => {
    const newErrors: Partial<Record<keyof T, string>> = {};
    let isValid = true;

    // Add validation rules here
    Object.entries(data).forEach(([key, value]) => {
      if (!value && value !== 0) {
        newErrors[key as keyof T] = 'This field is required';
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent, onSubmit: (data: T) => void) => {
    e.preventDefault();
    if (validate(formData)) {
      onSubmit(formData);
    }
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
    setFormData
  };
}