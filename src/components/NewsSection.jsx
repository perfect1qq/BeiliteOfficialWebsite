import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { BLT_NEWS_HOME, BLT_ICONS } from '../data/bltvipHomeData'
import { bltFallback } from '../utils/bltvipAsset'

/**
 * 新闻中心 — 与 bltvip box4 相同三图与摘要
 */
export default function NewsSection() {
  const { t } = useTranslation()
  const moreFb = bltFallback('images/box4More.png')

  return (
    <div className="box4Bg">
      <div className="container">
        <div className="boxTit2" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 className="boxTitH2">{t('nav_news')}</h2>
          <p className="boxTitEn" style={{ marginTop: '8px' }}>News Center</p>
        </div>

        <ul className="box4List home-news-grid">
          {BLT_NEWS_HOME.map((item, idx) => (
            <li key={idx}>
              <Link to={`/news/a/${idx + 1}`}>
                <div className="box4Img">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      const rel = ['upload/image/201801/25/0422219086.jpg', 'upload/image/201801/25/0421395814.jpg', 'upload/image/201801/25/0421167546.jpg'][idx]
                      if (rel) e.currentTarget.src = bltFallback(rel)
                    }}
                  />
                </div>
                <div className="box4Text">
                  <h3 className="box4Tit ellipsis">{item.title}</h3>
                  <div className="box4Brief">
                    <p>{item.desc}</p>
                  </div>
                  <div className="box4Ico">{t('btn_read_more')}</div>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <Link to="/news" className="home-news-more">
            <img src={BLT_ICONS.box4More} alt="" width={16} height={16} onError={(e) => { e.currentTarget.src = moreFb }} />
            &nbsp;&nbsp;{t('btn_view_all_news')}
          </Link>
        </div>
      </div>
    </div>
  )
}
