import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

/**
 * 新闻中心 — 支持多语言分类与内容
 */
const newsPool = {
  '/news': [
    {
      titleKey: 'news_1_title',
      date: '2024-03-20',
      descKey: 'news_1_desc',
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2836?w=600'
    },
    {
      titleKey: 'news_2_title',
      date: '2024-03-15',
      descKey: 'news_2_desc',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600'
    }
  ],
  '/news/video': [
    {
      titleKey: 'news_video_1_title',
      date: '2024-01-10',
      descKey: 'news_video_1_desc',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600',
      isVideo: true
    }
  ]
};

export default function News() {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const path = pathname === '/news/' ? '/news' : pathname;
  const currentNews = newsPool[path] || newsPool['/news'];

  return (
    <>
      <Helmet>
        <title>{t('nav_news')}_倍力特货架</title>
      </Helmet>
      
      <ul className="arList" style={{ padding: 0 }}>
        {currentNews.map((news, idx) => (
          <li key={idx} style={{ listStyle: 'none', display: 'flex', gap: '30px', borderBottom: '1px solid #eee', padding: '30px 0' }}>
            <div className="arImg" style={{ width: '280px', height: '180px', flexShrink: 0, position: 'relative' }}>
              <img src={news.image} alt={t(news.titleKey)} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} />
              {news.isVideo && (
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(0,0,0,0.5)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '24px' }}>▶</div>
              )}
            </div>
            <div className="arText" style={{ flex: 1 }}>
              <h3 style={{ fontSize: '20px', color: '#333', marginBottom: '10px' }}>{t(news.titleKey)}</h3>
              <div style={{ color: '#999', fontSize: '13px', marginBottom: '15px' }}>{t('date_prefix')} {news.date}</div>
              <p style={{ color: '#777', fontSize: '14px', lineHeight: '1.6', height: '68px', overflow: 'hidden' }}>{t(news.descKey)}</p>
              <Link to="#" style={{ color: 'var(--blue)', fontWeight: 'bold', fontSize: '14px', marginTop: '10px', display: 'inline-block' }}>{t('btn_detail')} ▸</Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
