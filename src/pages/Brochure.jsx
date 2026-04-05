import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

/**
 * 电子宣传册 — 支持多语言
 */
const brochureData = [
  { nameKey: 'brochure_1_title', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=400&q=80' },
  { nameKey: 'brochure_2_title', image: 'https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&w=400&q=80' }
];

export default function Brochure() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('nav_brochure')}_倍力特物流装备有限公司</title>
      </Helmet>
      
      <ul className="book" style={{ display: 'flex', gap: '50px' }}>
        {brochureData.map((item, idx) => (
          <li key={idx} style={{ listStyle: 'none', width: '262px' }}>
            <a href="#" style={{ display: 'block' }}>
              <div className="bookImg">
                 <img src={item.image} alt={t(item.nameKey)} loading="lazy" decoding="async" />
                 <i></i>
              </div>
              <div className="bookTit" style={{ textAlign: 'center' }}>{t(item.nameKey)}</div>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
