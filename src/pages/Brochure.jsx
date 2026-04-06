import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { BROCHURE_PAGES } from '../data/brochurePages'
import { bltFallback } from '../utils/bltvipAsset'

/**
 * 电子宣传册 — 与官网 piclist/23 分页入口一致
 */
export default function Brochure() {
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>{t('nav_brochure')}_倍力特物流装备有限公司</title>
      </Helmet>

      <ul className="book">
        {BROCHURE_PAGES.map((page) => (
          <li key={page.id}>
            <Link to={`/brochure/page/${page.id}`} className="book-link">
              <div className="bookImg">
                <img
                  src={page.image}
                  alt={t(page.titleKey)}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.src = bltFallback(page.remotePath)
                  }}
                />
                <i />
              </div>
              <div className="bookTit">{t(page.titleKey)}</div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
