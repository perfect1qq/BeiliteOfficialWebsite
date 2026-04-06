import { useState, useCallback, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoPng from '../assets/logo.png'
import { BLT_LOGO } from '../data/bltvipHomeData'
import { bltFallback } from '../utils/bltvipAsset'
import { NAV_ITEMS, MEGA_MENU, MEGA_VISIBLE_LINKS } from '../data/navConfig'
import { useTranslation } from 'react-i18next'

/**
 * 顶栏对标 bltvip：Logo 靠左、导航左展；Mega 仅单列 3～5 条，无配图
 */
export default function Header() {
  const { t, i18n } = useTranslation()
  const { pathname } = useLocation()
  const [activeKey, setActiveKey] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleLang = useCallback(() => {
    const nextLang = i18n.language === 'zh' ? 'en' : 'zh'
    i18n.changeLanguage(nextLang)
  }, [i18n])

  const isActive = (path) => (path === '/' ? pathname === '/' : pathname.startsWith(path))

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const megaLinksFor = useCallback((key) => {
    const mega = MEGA_MENU[key]
    if (!mega?.links) return []
    return mega.links.slice(0, MEGA_VISIBLE_LINKS)
  }, [])

  return (
    <header className="site-header site-header--blt">
      <div className="header-container">
        <div className="header-inner">
          <div className="header-mobile-top">
            <div className="brand-logo">
              <Link to="/">
                <img
                  src={BLT_LOGO}
                  alt={t('nav_home')}
                  className="logo-img"
                  onError={(e) => {
                    const el = e.currentTarget
                    if (el.dataset.logoFallback === '1') {
                      el.src = logoPng
                      return
                    }
                    el.dataset.logoFallback = '1'
                    el.src = bltFallback('upload/image/201803/23/1155594161.png')
                  }}
                />
              </Link>
            </div>

            <div className="header-mobile-actions">
              <div className="header-right">
                <div className="tel">
                  <span className="tel-icon">☎</span>
                  <span className="tel-nums">
                    027-69340899<br />15171431996
                  </span>
                </div>
                <button className="lang-btn" onClick={toggleLang} type="button">
                  {i18n.language === 'zh' ? 'EN' : '中'}
                </button>
              </div>

              <button
                type="button"
                className="mobile-menu-btn"
                onClick={() => setMobileMenuOpen((v) => !v)}
                aria-label="打开导航菜单"
                aria-expanded={mobileMenuOpen}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>

          <nav className="desktop-nav desktop-nav--blt">
            {NAV_ITEMS.map(({ key, path, hasMega }) => {
              const mega = MEGA_MENU[key]
              const preview = megaLinksFor(key)
              return (
                <div
                  key={key}
                  className={`nLi ${isActive(path) ? 'active' : ''}`}
                  onMouseEnter={() => setActiveKey(key)}
                  onMouseLeave={() => setActiveKey(null)}
                >
                  <Link
                    to={path}
                    className="nLi-title"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t(key)}
                  </Link>

                  {hasMega && mega && activeKey === key && preview.length > 0 && (
                    <div className="mega-dropdown mega-dropdown--simple" role="navigation" aria-label={t(mega.panelTitleKey)}>
                      <ul className="mega-dropdown__links mega-dropdown__links--only">
                        {preview.map((link) => (
                          <li key={link.path}>
                            <Link
                              to={link.path}
                              className="mega-dropdown__link"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {t(link.nameKey)}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          {mobileMenuOpen && (
            <div className="mobile-nav-panel">
              {NAV_ITEMS.map(({ key, path, hasMega }) => {
                const mega = MEGA_MENU[key]
                return (
                  <div key={key} className="mobile-nav-group">
                    <Link
                      to={path}
                      className={`mobile-nav-item ${isActive(path) ? 'active' : ''}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t(key)}
                    </Link>
                    {hasMega && mega && (
                      <div className="mobile-nav-sub">
                        {mega.links.map((link) => (
                          <Link
                            key={link.path}
                            to={link.path}
                            className="mobile-nav-sub-item"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {t(link.nameKey)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
