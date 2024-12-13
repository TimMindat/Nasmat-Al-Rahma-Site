import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';

interface FooterProps {
  className?: string;
}

export default function Footer({ className = '' }: FooterProps) {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-gray-900 text-white py-8 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col items-center space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
          <div className="text-center">
            <p className="text-lg">© {currentYear} {t('footer.copyright')}</p>
            <p className="text-sm text-gray-400 mt-2">
              {t('footer.developedBy')}{' '}
              <a 
                href="https://timmindportfolio.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gold-400 hover:text-gold-300 transition-colors"
              >
                Tim
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}