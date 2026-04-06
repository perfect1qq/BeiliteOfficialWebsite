import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { BLT_HOME_PRODUCTS } from '../data/bltvipHomeData'
import { PRODUCT_SITE_DETAIL_BY_PATH } from '../data/productSiteDetail'
import { PROINFO_55_DETAIL_HTML } from '../data/proinfoLegacy'
import { blt, bltFallback } from '../utils/bltvipAsset'

/**
 * 产品详情（/products/:slug）— 图集与正文来自官网 proinfo 抓取
 */
export default function ProductDetailInline({ productPath }) {
  const { t } = useTranslation()
  const [mainIdx, setMainIdx] = useState(0)

  const row = useMemo(
    () => BLT_HOME_PRODUCTS.find((p) => p.path === productPath),
    [productPath],
  )

  const site = PRODUCT_SITE_DETAIL_BY_PATH[productPath]

  const galleryRels = useMemo(() => {
    if (site?.gallery?.length) return site.gallery
    if (row) return [row.remotePath]
    return []
  }, [site, row])

  const gallery = useMemo(() => galleryRels.map((rel) => blt(rel)), [galleryRels])

  const detailHtml = useMemo(() => {
    if (site?.detailHtml) return site.detailHtml
    if (productPath === '/products/stereo') return PROINFO_55_DETAIL_HTML
    return ''
  }, [site, productPath])

  if (!row || !site) {
    return null
  }

  return (
    <div className="product-detail product-detail--site">
      <div className="product-detail-top">
        <div className="product-detail-gallery">
          <div className="product-detail-main">
            <img
              src={gallery[mainIdx]}
              alt={t(row.nameKey)}
              onError={(e) => {
                e.currentTarget.src = bltFallback(galleryRels[mainIdx] || row.remotePath)
              }}
            />
          </div>
          {gallery.length > 1 && (
            <div className="product-detail-thumbs">
              {gallery.map((src, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`product-detail-thumb ${idx === mainIdx ? 'is-active' : ''}`}
                  onClick={() => setMainIdx(idx)}
                >
                  <img
                    src={src}
                    alt=""
                    onError={(e) => {
                      e.currentTarget.src = bltFallback(galleryRels[idx])
                    }}
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="product-detail-aside">
          <h2 className="product-detail-title">{t(row.nameKey)}</h2>
          {site.briefHtml ? (
            <div
              className="product-detail-brief product-detail-brief--html"
              dangerouslySetInnerHTML={{ __html: site.briefHtml }}
            />
          ) : (
            <p className="product-detail-brief">{t(row.descKey)}</p>
          )}
          <Link to="/products" className="product-detail-back">
            ← {t('pro_back_list')}
          </Link>
        </div>
      </div>

      <div className="product-detail-bottom">
        <h3 className="product-detail-section-title">{t('pro_detail_title')}</h3>
        {detailHtml ? (
          <div className="product-detail-html" dangerouslySetInnerHTML={{ __html: detailHtml }} />
        ) : (
          <p className="product-detail-plain">{t('pro_detail_body')}</p>
        )}
      </div>
    </div>
  )
}
