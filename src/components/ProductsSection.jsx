import { useState, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { BLT_HOME_PRODUCTS, BLT_ICONS } from '../data/bltvipHomeData'
import { bltFallback } from '../utils/bltvipAsset'
import ProductCard from './ProductCard'

const PAGE_SIZE = 4

/**
 * 首页产品 — 每页 4 个卡片，支持左右翻页
 */
export default function ProductsSection() {
  const { t } = useTranslation()
  const [page, setPage] = useState(0)
  const pageCount = Math.ceil(BLT_HOME_PRODUCTS.length / PAGE_SIZE)

  const slice = useMemo(() => {
    const start = page * PAGE_SIZE
    return BLT_HOME_PRODUCTS.slice(start, start + PAGE_SIZE)
  }, [page])

  const prev = useCallback(() => {
    setPage((p) => (p - 1 + pageCount) % pageCount)
  }, [pageCount])

  const next = useCallback(() => {
    setPage((p) => (p + 1) % pageCount)
  }, [pageCount])

  const titFb = bltFallback('images/box2TitIco.png')

  return (
    <div className="box2Bg">
      <div className="container">
        <div className="home-products-head">
          <h2 className="boxTith2 home-products-title">
            <img
              src={BLT_ICONS.box2Tit}
              alt=""
              className="box1-tit-ico"
              onError={(e) => {
                e.currentTarget.src = titFb
              }}
            />
            &nbsp;{t('home_products_title')}&nbsp;
            <span className="boxTitEn" style={{ fontSize: '18px' }}>
              PRODUCTS
            </span>
          </h2>
          <div className="home-products-nav">
            <button type="button" className="home-carousel-btn home-carousel-btn--prev" onClick={prev} aria-label="上一组产品" />
            <Link to="/products" className="home-products-more-link">
              更多
            </Link>
            <button type="button" className="home-carousel-btn home-carousel-btn--next" onClick={next} aria-label="下一组产品" />
          </div>
        </div>

        <ul className="home-products-page products-grid">
          {slice.map((item) => (
            <li key={item.path}>
              <ProductCard title={t(item.nameKey)} imageUrl={item.image} href={item.path} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
