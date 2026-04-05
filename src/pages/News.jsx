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

      <ul className="arList">
        {currentNews.map((news, idx) => (
          <li key={idx}>
            <div className="arImg">
              <img src={news.image} alt={t(news.titleKey)} />
              {news.isVideo && (
                <div className="video-badge">▶</div>
              )}
            </div>
            <div className="arText">
              <h3 className="news-page-title">{t(news.titleKey)}</h3>
              <div className="news-page-date">{t('date_prefix')} {news.date}</div>
              <p className="news-page-desc">{t(news.descKey)}</p>
              <Link to="#" className="news-page-link">{t('btn_detail')} ▸</Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
