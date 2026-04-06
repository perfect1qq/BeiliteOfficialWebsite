import { memo } from 'react'
import { bltFallback } from '../utils/bltvipAsset'

function CustomerLogos({ logos = [] }) {
  return (
    <section className="customer-logos">
      <div className="customer-logos__head">
        <h2 className="customer-logos__title">合作客户</h2>
        <p className="customer-logos__subtitle">COOPERATIVE CUSTOMERS</p>
      </div>

      <div className="customer-logos__grid">
        {logos.map((logo, index) => {
          const key = logo.name ? `${logo.name}-${index}` : `${index}`
          const fallback = logo.remotePath ? bltFallback(logo.remotePath) : ''

          return (
            <div key={key} className="customer-logos__cell">
              <img
                src={logo.url || logo.image}
                alt={logo.name || 'customer logo'}
                className="customer-logos__image"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  if (fallback) e.currentTarget.src = fallback
                }}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default memo(CustomerLogos)
