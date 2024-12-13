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
      className={`flex flex-col items-center justify-center min-w-[44px] h-full px-1 ${
        isActive ? 'text-gold-600' : 'text-gray-600'
      }`}
      aria-label={label}
      role="menuitem"
    >
      <Icon className="w-6 h-6 mb-1 flex-shrink-0" />
      <span className="text-xs text-center leading-tight line-clamp-2 max-w-[90%]">
        {label}
      </span>
    </Link>
  );
}