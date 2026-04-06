import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { bltFallback } from '../utils/bltvipAsset'
import {
  ABOUT_PROFILE_INLINE,
  ABOUT_CULTURE_IMAGES,
  ABOUT_STRUCTURE_IMAGE,
  ABOUT_HONOR_IMAGES,
} from '../data/aboutPageAssets'
import { SITE_ORIGIN } from '../config/site'

/**
 * 关于我们 — 文案 i18n，配图与官网 aboutus / onepage 同源
 */
export default function AboutUs() {
  const { pathname } = useLocation()
  const { t, i18n } = useTranslation()
  const isEn = i18n.language === 'en'

  const renderContent = () => {
    if (pathname.includes('culture')) {
      return (
        <>
          <h3 className="page-title">{t('about_culture_title')}</h3>
          <p>
            <strong>{t('about_culture_vision')}</strong>
          </p>
          <p>{t('about_culture_purpose')}</p>
          <p>{t('about_culture_strategy')}</p>
          {ABOUT_CULTURE_IMAGES.map(({ rel, image }) => (
            <img
              key={rel}
              className="page-image"
              src={image}
              alt=""
              loading="lazy"
              decoding="async"
              onError={(e) => {
                e.currentTarget.src = bltFallback(rel)
              }}
            />
          ))}
        </>
      )
    }
    if (pathname.includes('philosophy')) {
      return (
        <>
          <h3 className="page-title">{t('about_philosophy_title')}</h3>
          <p>{t('about_philosophy_p1')}</p>
          <p style={{ marginTop: '20px' }}>{t('about_philosophy_p2')}</p>
        </>
      )
    }
    if (pathname.includes('structure')) {
      return (
        <>
          <h3 className="page-title">{t('about_structure_title')}</h3>
          <p>{t('about_structure_p1')}</p>
          <img
            className="page-image"
            src={ABOUT_STRUCTURE_IMAGE.image}
            alt=""
            loading="lazy"
            decoding="async"
            onError={(e) => {
              e.currentTarget.src = bltFallback(ABOUT_STRUCTURE_IMAGE.rel)
            }}
          />
        </>
      )
    }
    if (pathname.includes('honor')) {
      return (
        <>
          <h3 className="page-title">{t('about_honor_title')}</h3>
          <p>{t('about_honor_p1')}</p>
          <div className="about-gallery about-gallery--honor">
            {ABOUT_HONOR_IMAGES.map(({ rel, image }) => (
              <img
                key={rel}
                className="page-image"
                src={image}
                alt=""
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.src = bltFallback(rel)
                }}
              />
            ))}
          </div>
        </>
      )
    }
    return (
      <>
        <h3 className="page-title">{t('about_profile_title')}</h3>
        <p>{t('home_about_intro_p1')}</p>
        <p style={{ marginTop: '10px' }}>{t('home_about_intro_p2')}</p>
        <img
          className="page-image"
          src={ABOUT_PROFILE_INLINE.image}
          alt=""
          loading="lazy"
          decoding="async"
          onError={(e) => {
            e.currentTarget.src = bltFallback(ABOUT_PROFILE_INLINE.rel)
          }}
        />
      </>
    )
  }

  const pageTitle = isEn ? `${t('nav_about')} | Wuhan Beilite Racking` : `${t('nav_about')} | 武汉倍力特货架`
  const desc = isEn
    ? 'Wuhan Beilite — warehouse racking manufacturer, company profile and credentials.'
    : '武汉倍力特物流装备有限公司，仓储货架生产厂家，公司简介与资质荣誉。'

  return (
    <div className="about-content">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={`${SITE_ORIGIN}${pathname}`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={desc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_ORIGIN}${pathname}`} />
        <meta property="og:locale" content={isEn ? 'en_US' : 'zh_CN'} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      {renderContent()}
    </div>
  )
}
