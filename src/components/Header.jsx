import { useState, useCallback, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

/* ------------------------------------------------------------------ */
/*  导航菜单配置 — 严格对标 bltvip.com 原站结构                          */
/* ------------------------------------------------------------------ */

/** 主导航列表 */
const NAV_ITEMS = [
  { key: 'nav_home',     path: '/' },
  { key: 'nav_about',    path: '/about',    hasMega: true },
  { key: 'nav_news',     path: '/news',     hasMega: true },
  { key: 'nav_products', path: '/products', hasMega: true },
  { key: 'nav_tech',     path: '/services' },
  { key: 'nav_cases',    path: '/cases',    hasMega: true },
  { key: 'nav_brochure', path: '/brochure' },
  { key: 'nav_contact',  path: '/contact' },
]

/** 下拉菜单详情 — 1:1 对应原站下拉内容 */
const MEGA_MENU = {
  nav_about: {
    titleKey: 'nav_about',
    links: [
      { nameKey: 'cat_intro',      path: '/about' },
      { nameKey: 'cat_culture',    path: '/about/culture' },
      { nameKey: 'cat_philosophy', path: '/about/philosophy' },
      { nameKey: 'cat_structure',  path: '/about/structure' },
      { nameKey: 'cat_honor',      path: '/about/honor' },
    ],
  },
  nav_news: {
    titleKey: 'nav_news',
    links: [
      { nameKey: 'cat_report',     path: '/news' },
      { nameKey: 'cat_video',      path: '/news/video' },
    ],
  },
  nav_products: {
    titleKey: 'nav_products',
    links: [
      { nameKey: 'pro_stereo',     path: '/products/stereo' },
      { nameKey: 'cat_racking',    path: '/products' },
      { nameKey: 'cat_accessory',  path: '/products/accessory' },
    ],
  },
  nav_cases: {
    titleKey: 'nav_cases',
    links: [
      { nameKey: 'cat_factory',    path: '/cases/factory' },
      { nameKey: 'cat_clients',    path: '/cases' },
    ],
  },
}

/* ------------------------------------------------------------------ */
/*  组件                                                               */
/* ------------------------------------------------------------------ */

/**
 * 全站顶部导航栏
 */
export default function Header() {
  const { t, i18n } = useTranslation()
  const { pathname } = useLocation()
  const [activeKey, setActiveKey] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  /** 切换中英文 */
  const toggleLang = useCallback(() => {
    const nextLang = i18n.language === 'zh' ? 'en' : 'zh'
    i18n.changeLanguage(nextLang)
  }, [i18n])

  /** 判断导航项是否高亮 */
  const isActive = (path) =>
    path === '/' ? pathname === '/' : pathname.startsWith(path)

  /** 路由变化时自动收起移动端菜单 */
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const logoSrc = `${import.meta.env.BASE_URL}assets/logo.svg`

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="header-inner">
          <div className="header-mobile-top">
            {/* Logo 区 */}
            <div className="brand-logo">
              <Link to="/">
                <img
                  src={logoSrc}
                  alt={t('nav_home')}
                  className="logo-img"
                  onError={(e) => {
                    e.currentTarget.src = `${import.meta.env.BASE_URL}favicon.svg`
                  }}
                />
              </Link>
            </div>

            <div className="header-mobile-actions">
              {/* 右侧电话 + 语言切换 */}
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

          {/* 主导航 */}
          <nav className="desktop-nav">
            {NAV_ITEMS.map(({ key, path, hasMega }) => {
              const mega = MEGA_MENU[key]
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

                  {/* MegaMenu 白色大面板下拉 */}
                  {hasMega && mega && activeKey === key && (
                    <div className="subboxbg">
                      <div className="mega-left">
                        {mega.links.map((link) => (
                          <Link
                            key={link.path}
                            to={link.path}
                            className="mega-link"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {t(link.nameKey)}
                            <span className="mega-arrow">›</span>
                          </Link>
                        ))}
                      </div>
                      <div className="mega-right">
                        <div className="mega-contact-img">
                          <span>{t('nav_contact')}</span>
                          <small>contact us</small>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          {/* 移动端菜单面板 */}
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
