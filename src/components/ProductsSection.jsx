import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

/**
 * 首页 — 倍力特产品板块
 */
const productsData = [
  { nameKey: 'pro_stereo',     descKey: 'pro_stereo_desc',     path: '/products/stereo',    image: 'https://images.unsplash.com/photo-1565891741441-64926e441838?q=80&w=600' },
  { nameKey: 'pro_heavy',      descKey: 'pro_heavy_desc',      path: '/products/heavy',     image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600' },
  { nameKey: 'pro_panel',      descKey: 'pro_panel_desc',      path: '/products/panel',     image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600' },
  { nameKey: 'pro_attic',      descKey: 'pro_attic_desc',      path: '/products/attic',     image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=600' },
  { nameKey: 'pro_through',    descKey: 'pro_through_desc',    path: '/products/through',   image: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=600' },
  { nameKey: 'pro_cantilever', descKey: 'pro_cantilever_desc', path: '/products/cantilever',image: 'https://images.unsplash.com/photo-1605280263929-1c42c62ef169?q=80&w=600' },
  { nameKey: 'pro_narrow',     descKey: 'pro_narrow_desc',     path: '/products/narrow',    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2836?q=80&w=600' },
  { nameKey: 'pro_shuttle',    descKey: 'pro_shuttle_desc',    path: '/products/shuttle',   image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600' },
  { nameKey: 'pro_platform',   descKey: 'pro_platform_desc',   path: '/products/platform',  image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=600' },
  { nameKey: 'pro_medium',     descKey: 'pro_medium_desc',     path: '/products/medium',    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600' },
  { nameKey: 'pro_drawer',     descKey: 'pro_drawer_desc',     path: '/products/drawer',    image: 'https://images.unsplash.com/photo-1565891741441-64926e441838?q=80&w=600' },
  { nameKey: 'pro_fluent',     descKey: 'pro_fluent_desc',     path: '/products/fluent',    image: 'https://images.unsplash.com/photo-1605280263929-1c42c62ef169?q=80&w=600' },
]

export default function ProductsSection() {
  const { t } = useTranslation()

  return (
    <div className="box4Bg">
      <div className="container">
        {/* 板块标题 */}
        <div className="boxTit2">
          <div className="boxTitH2">{t('home_products_title')}</div>
          <p className="boxTitSub">PRODUCTS</p>
        </div>

        {/* 产品网格 */}
        <ul className="box4List">
          {productsData.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>
                <div className="box4Img">
                  <img
                    src={item.image}
                    alt={`${t(item.nameKey)} - 仓储货架`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="box4Text">
                  <div className="box4Tit">{t(item.nameKey)}</div>
                  <div className="box4Brief">{t(item.descKey)}</div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
