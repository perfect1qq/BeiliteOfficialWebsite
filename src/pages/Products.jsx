import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { BLT_HOME_PRODUCTS } from '../data/bltvipHomeData'
import { PRODUCT_SITE_DETAIL_BY_PATH } from '../data/productSiteDetail'
import { blt, bltFallback } from '../utils/bltvipAsset'
import ProductDetailInline from '../components/ProductDetailInline'

const ACCESSORY_ROW = {
  cat: '/products/accessory',
  nameKey: 'pro_accessory',
  descKey: 'pro_accessory_desc',
  image: blt('upload/image/201802/27/0913152158.jpg'),
  remotePath: 'upload/image/201802/27/0913152158.jpg',
}

const allProductsDatabase = [
  ...BLT_HOME_PRODUCTS.map((p) => ({
    cat: p.path,
    nameKey: p.nameKey,
    descKey: p.descKey,
    image: p.image,
    remotePath: p.remotePath,
  })),
  ACCESSORY_ROW,
]

function norm(p) {
  return (p || '').replace(/\/$/, '') || '/'
}

/**
 * 产品中心：列表为官网风格叠层卡片；单品路由直接展示详情（无需再点 proinfo）
 */
export default function Products() {
  const location = useLocation()
  const { t } = useTranslation()
  const p = norm(location.pathname)

  const isList = p === '/products'
  const siteDetail = PRODUCT_SITE_DETAIL_BY_PATH[p]
  const rowHome = BLT_HOME_PRODUCTS.find((x) => norm(x.path) === p)

  if (!isList && siteDetail && rowHome) {
    return (
      <>
        <Helmet>
          <title>
            {t(rowHome.nameKey)}_{t('nav_products')}_倍力特货架
          </title>
        </Helmet>
        <ProductDetailInline productPath={p} />
      </>
    )
  }

  const filteredProducts =
    p === '/products'
      ? allProductsDatabase
      : allProductsDatabase.filter((x) => norm(x.cat) === p)

  const single = filteredProducts.length === 1 ? filteredProducts[0] : null

  return (
    <>
      <Helmet>
        <title>{t('nav_products')}_倍力特货架</title>
      </Helmet>

      <ul className="proList proList--grid">
        {filteredProducts.map((pro) => {
          const hasDetail = Boolean(PRODUCT_SITE_DETAIL_BY_PATH[norm(pro.cat)])
          return (
            <li key={pro.cat} className="proItem proItem--card">
              <Link to={pro.cat} className="proCard__link">
                <div className="proCard">
                  <div className="proCard__media">
                    <img
                      className="proCard__img"
                      src={pro.image}
                      alt={t(pro.nameKey)}
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        e.currentTarget.src = bltFallback(pro.remotePath)
                      }}
                    />
                    <div className="proCard__overlay">
                      <h3 className="proCard__name">{t(pro.nameKey)}</h3>
                      <p className="proCard__desc">{t(pro.descKey)}</p>
                      {hasDetail && <span className="proCard__more">{t('pro_detail_link')}</span>}
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>

      {single && !PRODUCT_SITE_DETAIL_BY_PATH[p] && (
        <div className="pro-detail-extra oneText">
          <h4 className="pro-detail-extra-title">{t('pro_detail_title')}</h4>
          <p>{t('pro_detail_body')}</p>
        </div>
      )}
    </>
  )
}
