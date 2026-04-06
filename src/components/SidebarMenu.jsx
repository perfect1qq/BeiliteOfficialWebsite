import { memo } from 'react'
import { Link } from 'react-router-dom'

function normalizePath(path) {
  return (path || '').replace(/\/$/, '') || '/'
}

function SidebarMenu({ title = '倍力特产品', subtitle = 'PRODUCTS', items = [], activePath = '' }) {
  const current = normalizePath(activePath)

  return (
    <aside className="sidebar-menu">
      <div className="sidebar-menu__header">
        <h2 className="sidebar-menu__title">{title}</h2>
        <p className="sidebar-menu__subtitle">{subtitle}</p>
      </div>

      <ul className="sidebar-menu__list">
        {items.map((item) => {
          const href = item.href || item.path || '#'
          const label = item.label || item.name || ''
          const isActive = normalizePath(href) === current

          return (
            <li key={href} className={`sidebar-menu__item${isActive ? ' is-active' : ''}`}>
              <Link to={href} className="sidebar-menu__link">
                <span className="sidebar-menu__text">{label}</span>
                <span className="sidebar-menu__arrow" aria-hidden="true">
                  ›
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default memo(SidebarMenu)
