import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

/**
 * 首页 — 新闻中心板块
 */
const newsData = [
  {
    titleKey: '智能高效电商分拣系统助推其快速发展',
    descKey: '最近几年，国内电商呈井喷式发展，电商的这样发展，也促使国内消费流突飞猛进增长，同时也带动巨大的物流模式变革。而且客户对物流的效率产生了极高的要求。更为重要的是，..',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2836?w=600',
  },
  {
    titleKey: '电商与物流互促试点政策将推向全国',
    descKey: '日前从商务部获悉，电子商务与物流快递协同发展试点3年来已经形成一批可复制推广的经验，下一步，将在进一步总结提炼好的经验、作法的基础之上，出台相关政策文件，并向全国..',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600',
  },
  {
    titleKey: '智能高效电商分拣系统助推其快速发展',
    descKey: '最近几年，国内电商呈井喷式发展，电商的这样发展，也促使国内消费流突飞猛进增长，同时也带动巨大的物流模式变革。而且客户对物流的效率产生了极高的要求。更为重要的是，..',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600',
  },
]

export default function NewsSection() {
  const { t } = useTranslation()

  return (
    <div className="box2Bg">
      <div className="container">
        {/* 板块标题 */}
        <div className="boxTith2" style={{ textAlign: 'center', marginBottom: '40px' }}>
          {t('nav_news')} <span className="boxTitEn" style={{ display: 'block', marginTop: '5px' }}>
            News Center
          </span>
        </div>

        {/* 三列新闻卡 */}
        <ul className="box2Item">
          {newsData.map((item, idx) => (
            <li key={idx}>
              <Link to="/news">
                <div className="box2Img">
                  <img src={item.image} alt={item.titleKey} loading="lazy" decoding="async" />
                </div>
                <div className="newsCard">
                  <h3 className="newsTitle">{item.titleKey}</h3>
                  <p className="newsDesc">{item.descKey}</p>
                  <span className="newsReadMore">{t('btn_read_more')}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* 查看更多按钮 (橙色) */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link to="/news" className="btn btn-orange">{t('btn_view_all_news')}</Link>
        </div>
      </div>
    </div>
  )
}
