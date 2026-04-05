import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

/**
 * 技术服务页面 — 支持多语言
 */
export default function Services() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('nav_tech')}_武汉倍力特物流装备有限公司</title>
      </Helmet>
      
      <div className="oneText">
        <h3 style={{ fontSize: '22px', borderLeft: '4px solid var(--blue)', paddingLeft: '10px', marginBottom: '20px', color: '#222' }}>
          {t('service_design_title')}
        </h3>
        <p>{t('service_design_p1')}</p>
        
        <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80" alt="Service design" loading="lazy" decoding="async" style={{ marginTop: '20px', marginBottom: '40px', width: '100%', borderRadius: '4px' }} />
        
        <h3 style={{ fontSize: '22px', borderLeft: '4px solid var(--blue)', paddingLeft: '10px', marginBottom: '20px', color: '#222' }}>
          {t('service_install_title')}
        </h3>
        <p>{t('service_install_p1')}</p>
      </div>
    </>
  );
}
