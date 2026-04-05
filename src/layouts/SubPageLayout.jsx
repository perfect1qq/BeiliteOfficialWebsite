import { useMemo } from 'react'
import { Outlet, useLocation, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

/* ------------------------------------------------------------------ */
/*  侧边栏配置 — 1:1 对标 bltvip.com 内页左侧导航                       */
/* ------------------------------------------------------------------ */

const SIDEBAR_MAP = {
  about: {
    titleKey: 'nav_about',
    subtitle: 'ABOUT US',
    links: [
      { nameKey: 'cat_intro',      path: '/about' },
      { nameKey: 'cat_culture',    path: '/about/culture' },
      { nameKey: 'cat_philosophy', path: '/about/philosophy' },
      { nameKey: 'cat_structure',  path: '/about/structure' },
      { nameKey: 'cat_honor',      path: '/about/honor' },
    ],
  },
  news: {
    titleKey: 'nav_news',
    subtitle: 'NEWS CENTER',
    links: [
      { nameKey: 'cat_report',     path: '/news' },
      { nameKey: 'cat_video',      path: '/news/video' },
    ],
  },
  products: {
    titleKey: 'nav_products',
    subtitle: 'PRODUCTS',
    links: [
      { nameKey: 'pro_stereo',     path: '/products/stereo' },
      { nameKey: 'cat_racking',    path: '/products' },
      { nameKey: 'cat_accessory',  path: '/products/accessory' },
    ],
  },
  services: {
    titleKey: 'nav_tech',
    subtitle: 'SERVICE',
    links: [
      { nameKey: 'cat_services',   path: '/services' },
    ],
  },
  cases: {
    titleKey: 'nav_cases',
    subtitle: 'CASES',
    links: [
      { nameKey: 'cat_factory',    path: '/cases/factory' },
      { nameKey: 'cat_clients',    path: '/cases' },
    ],
  },
  brochure: {
    titleKey: 'nav_brochure',
    subtitle: 'BROCHURE',
    links: [
      { nameKey: 'cat_download',   path: '/brochure' },
    ],
  },
  contact: {
    titleKey: 'nav_contact',
    subtitle: 'CONTACT US',
    links: [
      { nameKey: 'cat_message',    path: '/contact' },
    ],
  },
}

/**
 * 内页公用布局壳
 */
export default function SubPageLayout() {
  const { pathname } = useLocation()
  const { t } = useTranslation()

  /* 提取一级路径 key */
  const rootKey = pathname.split('/')[1] || 'about'

  const config = useMemo(
    () => SIDEBAR_MAP[rootKey] || SIDEBAR_MAP.about,
    [rootKey]
  )

  /* 面包屑当前节点名称 */
  const currentLink = config.links.find((l) => l.path === pathname)
  const currentNameKey = currentLink ? currentLink.nameKey : config.titleKey

  return (
    <div className="subpage-wrapper">
      {/* 顶部装饰 Banner */}
      <div className="subpage-banner" />

      <div className="container">
        {/* 面包屑 */}
        <div className="breadNav">
          {t('bread_pos')}
          <Link to="/">{t('bread_home')}</Link> &gt;{' '}
          <Link to={`/${rootKey}`}>{t(config.titleKey)}</Link> &gt;{' '}
          <span>{t(currentNameKey)}</span>
        </div>

        <div className="mainBg">
          {/* 左侧分类导航 */}
          <aside className="left">
            <div className="leftH2">
              <h2>{t(config.titleKey)}</h2>
              <p className="left-subtitle">{config.subtitle}</p>
            </div>
            <ul className="fenlei">
              {config.links.map((item, idx) => {
                const active =
                  pathname === item.path ||
                  (pathname === `/${rootKey}` && idx === 0)
                return (
                  <li key={item.path}>
                    <div className={`fenleiH3 ${active ? 'active' : ''}`}>
                      <Link to={item.path}>{t(item.nameKey)}</Link>
                    </div>
                  </li>
                )
              })}
            </ul>
          </aside>

          {/* 右侧主内容区 */}
          <main className="right">
            <div className="comNameEn">WUHAN BEILITE LOGISTICS EQUIPMENT CO., LTD.</div>
            <div className="comNameCn">{t(currentNameKey)}</div>
            <div className="rigWrap">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
