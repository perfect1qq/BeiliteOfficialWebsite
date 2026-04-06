import { memo } from 'react'
import { Link } from 'react-router-dom'

function SubNavBanner({
  currentPage = '仓储货架',
  bannerImage = '',
  breadcrumbs = [],
  sectionTitle = '倍力特产品',
  sectionSubtitle = 'PRODUCTS',
}) {
  const crumbs = Array.isArray(breadcrumbs) ? breadcrumbs : []

  return (
    <section className="subnav-banner">
      {bannerImage ? (
        <img className="subnav-banner__image" src={bannerImage} alt="" loading="eager" decoding="async" />
      ) : null}
      <div className="subnav-banner__overlay" />

      <div className="subnav-banner__content">
        <div className="subnav-banner__brand">
          <div className="subnav-banner__brand-inner">
            <h2 className="subnav-banner__brand-title">{sectionTitle}</h2>
            <p className="subnav-banner__brand-subtitle">{sectionSubtitle}</p>
          </div>
        </div>

        <div className="subnav-banner__trail">
          <div className="subnav-banner__trail-inner">
            <nav className="subnav-banner__breadcrumb" aria-label="Breadcrumb">
              <span className="subnav-banner__breadcrumb-prefix">🏠 您的当前位置：</span>
              {crumbs.map((crumb, index) => {
                const isLast = index === crumbs.length - 1
                const key = `${crumb.label}-${index}`

                return (
                  <span key={key} className="subnav-banner__breadcrumb-item">
                    {index > 0 ? <span className="subnav-banner__breadcrumb-sep">›</span> : null}
                    {crumb.to && !isLast ? (
                      <Link to={crumb.to} className="subnav-banner__breadcrumb-link">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className={isLast ? 'subnav-banner__breadcrumb-current' : ''}>
                        {crumb.label}
                      </span>
                    )}
                  </span>
                )
              })}
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(SubNavBanner)
