import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface NavItemProps {
  path: string;
  icon: LucideIcon;
  label: string;
  isActive: boolean;
}

export default function NavItem({ path, icon: Icon, label, isActive }: NavItemProps) {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Link
      to={path}
      onClick={handleClick}
      className={`flex flex-col items-center justify-center min-w-[44px] min-h-[44px] px-1 ${
        isActive ? 'text-gold-600' : 'text-gray-600'
      }`}
      aria-label={label}
      role="menuitem"
    >
      <Icon className="w-6 h-6" />
      <span className="text-xs mt-1 font-medium">{label}</span>
    </Link>
  );
}