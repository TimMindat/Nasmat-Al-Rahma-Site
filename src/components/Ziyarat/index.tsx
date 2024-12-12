import React from 'react';
import { useTranslation } from 'react-i18next';
import LocalizedSection from '../shared/containers/LocalizedSection';
import SiteCard from './components/SiteCard';

export default function Ziyarat() {
  const { t } = useTranslation();

  const sites = [
    {
      name: t('ziyarat.sites.masjidAlHaram.name'),
      description: t('ziyarat.sites.masjidAlHaram.description'),
      image: 'https://images.unsplash.com/photo-1604867317798-4ae4a31d4e54?auto=format&fit=crop&w=800'
    },
    {
      name: t('ziyarat.sites.masjidNabawi.name'),
      description: t('ziyarat.sites.masjidNabawi.description'),
      image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800'
    }
  ];

  return (
    <LocalizedSection
      title={t('ziyarat.title')}
      subtitle={t('ziyarat.subtitle')}
      className="py-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sites.map((site, index) => (
          <SiteCard key={index} {...site} />
        ))}
      </div>
    </LocalizedSection>
  );
}