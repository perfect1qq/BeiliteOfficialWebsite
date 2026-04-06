import { memo } from 'react'
import { Link } from 'react-router-dom'

function ProductCard({ title, imageUrl, href = '#', cta = '按实际要求定制' }) {
  return (
    <Link to={href} className="product-card" aria-label={title}>
      <img className="product-card__image" src={imageUrl} alt={title} loading="lazy" decoding="async" />
      <div className="product-card__footer">
        <span className="product-card__title">{title}</span>
        <span className="product-card__cta">
          <span className="product-card__cta-icon">▶</span>
          {cta}
        </span>
      </div>
    </Link>
  )
}

export default memo(ProductCard)
