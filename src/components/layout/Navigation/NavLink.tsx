import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLocalization } from '../../../hooks/useLocalization';

interface NavLinkProps {
  to: string;
  label: string;
  className?: string;
}

export default function NavLink({ to, label, className = '' }: NavLinkProps) {
  const location = useLocation();
  const { getFontFamily } = useLocalization();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`
        ${getFontFamily()}
        ${isActive ? 'text-gold-600' : 'text-gray-700 hover:text-gold-600'}
        transition-colors
        ${className}
      `}
    >
      {label}
    </Link>
  );
}