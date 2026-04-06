import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { getBrochurePage } from '../data/brochurePages'
import { bltFallback } from '../utils/bltvipAsset'

/**
 * 电子宣传册单页大图 — /brochure/page/:pageId
 */
export default function BrochurePage() {
  const { pageId } = useParams()
  const { t } = useTranslation()
  const page = getBrochurePage(pageId)

  if (!page) {
    return <Navigate to="/brochure" replace />
  }

  return (
    <>
      <Helmet>
        <title>{t(page.titleKey)} — {t('nav_brochure')}</title>
      </Helmet>
      <div className="brochure-page-view">
        <h2 className="page-title">{t(page.titleKey)}</h2>
        <div className="brochure-page-frame">
          <img
            src={page.image}
            alt={t(page.titleKey)}
            className="brochure-page-img"
            onError={(e) => {
              e.currentTarget.src = bltFallback(page.remotePath)
            }}
          />
        </div>
        <Link to="/brochure" className="news-back-link">
          ← {t('broch_back_list')}
        </Link>
      </div>
    </>
  )
}
