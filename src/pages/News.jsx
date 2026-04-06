import { useLocation, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { NEWS_ARTICLES, NEWS_VIDEO_ITEMS } from '../data/newsArticles'
import { bltFallback } from '../utils/bltvipAsset'

function normalizePath(p) {
  return (p || '').replace(/\/$/, '') || '/'
}

/**
 * 新闻中心 — 列表 + /news/a/:id 详情（与 bltvip 企业报道 / 新闻视频 对应）
 */
export default function News() {
  const { pathname } = useLocation()
  const { t } = useTranslation()
  const path = normalizePath(pathname)

  const detailMatch = path.match(/^\/news\/a\/([^/]+)$/)
  if (detailMatch) {
    const id = detailMatch[1]
    const all = [...NEWS_ARTICLES, ...NEWS_VIDEO_ITEMS]
    const article = all.find((a) => a.id === id)
    if (!article) {
      return (
        <div className="oneText">
          <p>{t('nav_news')} — 未找到该文章。</p>
          <p>
            <Link to="/news">{t('btn_view_all_news')}</Link>
          </p>
        </div>
      )
    }

    const paragraphs = t(article.bodyKey).split('\n\n').filter(Boolean)

    return (
      <>
        <Helmet>
          <title>{t(article.titleKey)} — {t('nav_news')}</title>
        </Helmet>
        <article className="news-article-page">
          <h1 className="page-title">{t(article.titleKey)}</h1>
          <div className="news-page-date" style={{ marginBottom: '16px' }}>
            {t('date_prefix')} {article.date}
            {article.isVideo && <span className="video-badge-inline"> VIDEO</span>}
          </div>
          {article.videoSrc ? (
            <div className="news-article-video-wrap">
              <video
                className="news-article-video"
                src={article.videoSrc}
                controls
                playsInline
              >
                <track kind="captions" />
              </video>
            </div>
          ) : (
            <div className="news-article-hero">
              <img
                src={article.image}
                alt=""
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.src = bltFallback(article.imageRemote)
                }}
              />
            </div>
          )}
          <div className="news-article-body">
            {paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <Link to={article.listIn} className="news-back-link">
            ← {t('btn_view_all_news')}
          </Link>
        </article>
      </>
    )
  }

  const pool = path === '/news/video' ? NEWS_VIDEO_ITEMS : NEWS_ARTICLES

  return (
    <>
      <Helmet>
        <title>{t('nav_news')}_倍力特货架</title>
      </Helmet>

      <ul className="arList">
        {pool.map((news) => (
          <li key={news.id}>
            <div className="arImg">
              <img
                src={news.image}
                alt={t(news.titleKey)}
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.src = bltFallback(news.imageRemote)
                }}
              />
              {news.isVideo && <div className="video-badge">▶</div>}
            </div>
            <div className="arText">
              <h3 className="news-page-title">{t(news.titleKey)}</h3>
              <div className="news-page-date">
                {t('date_prefix')} {news.date}
              </div>
              <p className="news-page-desc">{t(news.descKey)}</p>
              <Link to={`/news/a/${news.id}`} className="news-page-link">
                {t('btn_detail')} ▸
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
