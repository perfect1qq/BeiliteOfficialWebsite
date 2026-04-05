import React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

/**
 * 关于我们 — 全局多语言适配版
 */
export default function AboutUs() {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const renderContent = () => {
    if (pathname.includes('culture')) {
      return (
        <>
          <h3 className="page-title">{t('about_culture_title')}</h3>
          <p><strong>{t('about_culture_vision')}</strong></p>
          <p>{t('about_culture_purpose')}</p>
          <p>{t('about_culture_strategy')}</p>
          <img className="page-image" src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800" alt="Culture" />
        </>
      );
    } 
    if (pathname.includes('philosophy')) {
      return (
        <>
          <h3 className="page-title">{t('about_philosophy_title')}</h3>
          <p>{t('about_philosophy_p1')}</p>
          <p style={{ marginTop: '20px' }}>{t('about_philosophy_p2')}</p>
        </>
      );
    }
    if (pathname.includes('structure')) {
      return (
        <>
          <h3 className="page-title">{t('about_structure_title')}</h3>
          <p>{t('about_structure_p1')}</p>
          <img className="page-image" src="https://images.unsplash.com/photo-1587293852726-70cdb56c2836?auto=format&fit=crop&w=800" alt="Structure" />
        </>
      );
    }
    if (pathname.includes('honor')) {
      return (
        <>
          <h3 className="page-title">{t('about_honor_title')}</h3>
          <p>{t('about_honor_p1')}</p>
          <div className="about-gallery">
            <img className="page-image" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=400" alt="Honor 1" />
            <img className="page-image" src="https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&w=400" alt="Honor 2" />
          </div>
        </>
      );
    }
    // Default: Profile
    return (
      <>
        <h3 className="page-title">{t('about_profile_title')}</h3>
        <p>{t('home_about_intro_p1')}</p>
        <p style={{ marginTop: '10px' }}>{t('home_about_intro_p2')}</p>
        <img className="page-image" src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80" alt="Profile" />
      </>
    );
  };

  return (
    <div className="about-content">
      <Helmet>
        <title>{t('nav_about')}_武汉倍力特货架官方网站</title>
      </Helmet>
      {renderContent()}
    </div>
  );
}
