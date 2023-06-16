import React from 'react';
import styles from './our-partners.module.css';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

const partners = [
  {
    id: 'partner-1',
    name: 'Polskie Towarzystwo Akustyczne',
    logo: '/images/partners/pta.jpg',
  },
  {
    id: 'partner-2',
    name: 'European Acoustics Association',
    logo: '/images/partners/eaa.jpg',
  },
  {
    id: 'partner-3',
    name: 'Politechnika Gdańska',
    logo: '/images/partners/pg.png',
  },
  {
    id: 'partner-4',
    name: 'Polska Akademia Nauk',
    logo: '/images/partners/pan.jpg',
  },
  {
    id: 'partner-5',
    name: 'Akademia Marynarki Wojennej',
    logo: '/images/partners/amw.png',
  },
  {
    id: 'partner-6',
    name: 'International Commission for Acoustics',
    logo: '/images/partners/ica.png',
  },
];

const OurPartners = () => {
  const { t } = useTranslation('home-page');
  return (
    <section className={styles.partners}>
      <h2>{t('partners')}</h2>
      <ul>
        {partners.map((partner) => (
          <li key={partner.id}>
            <img src={partner.logo} alt='' />{' '}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default OurPartners;
