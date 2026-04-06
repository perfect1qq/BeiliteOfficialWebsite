/**
 * 顶部导航与 Mega 下拉 — 对标 http://www.bltvip.com
 * 下拉链接为单列列表（样式见 styles.css），条目与侧栏一致。
 */
import {
  ABOUT_NAV_LINKS,
  NEWS_NAV_LINKS,
  PRODUCT_NAV_LINKS,
  CASES_NAV_LINKS,
} from './siteSectionNav'

/** 顶部下拉每列最多展示条数（其余在侧栏查看） */
export const MEGA_VISIBLE_LINKS = 5

export const NAV_ITEMS = [
  { key: 'nav_home', path: '/', hasMega: false },
  { key: 'nav_about', path: '/about', hasMega: true },
  { key: 'nav_news', path: '/news', hasMega: true },
  { key: 'nav_products', path: '/products', hasMega: true },
  { key: 'nav_tech', path: '/services', hasMega: false },
  { key: 'nav_cases', path: '/cases', hasMega: true },
  { key: 'nav_brochure', path: '/brochure', hasMega: false },
  { key: 'nav_contact', path: '/contact', hasMega: false },
]

export const MEGA_MENU = {
  nav_about: {
    panelTitleKey: 'nav_about',
    links: ABOUT_NAV_LINKS,
  },
  nav_news: {
    panelTitleKey: 'nav_news',
    links: NEWS_NAV_LINKS,
  },
  nav_products: {
    panelTitleKey: 'nav_products',
    links: PRODUCT_NAV_LINKS,
  },
  nav_cases: {
    panelTitleKey: 'nav_cases',
    links: CASES_NAV_LINKS,
  },
}
