import React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

/**
 * 工程案例 — 支持多语言分类与内容
 */
const caseDataPool = {
  '/cases/factory': [
    { nameKey: 'case_factory_1_title', image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2836?w=600' },
    { nameKey: 'case_factory_2_title', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600' }
  ],
  '/cases': [
    { nameKey: 'case_1_title', image: 'https://images.unsplash.com/photo-1605280263929-1c42c62ef169?w=600' },
    { nameKey: 'case_2_title', image: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?w=600' }
  ]
};

export default function Cases() {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const path = pathname === '/cases/' ? '/cases' : pathname;
  const currentCases = caseDataPool[path] || caseDataPool['/cases'];

  return (
    <>
      <Helmet>
        <title>{t('nav_cases')}_倍力特货架</title>
      </Helmet>
      
      <ul className="caseList" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
        {currentCases.map((item, idx) => (
          <li key={idx} style={{ listStyle: 'none' }}>
            <div className="caseItem" style={{ border: '1px solid #eee', paddingBottom: '15px' }}>
              <div className="caseImg" style={{ width: '100%', height: '240px', overflow: 'hidden' }}>
                 <img src={item.image} alt={t(item.nameKey)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" decoding="async" />
              </div>
              <div className="caseTit" style={{ textAlign: 'center', marginTop: '15px', fontWeight: 'bold' }}>{t(item.nameKey)}</div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
