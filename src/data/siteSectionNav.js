/**
 * 侧栏与 Mega 下拉共用 — 与官网子导航一致，避免 navConfig / SubPageLayout 重复维护
 */
import { BLT_HOME_PRODUCTS } from './bltvipHomeData'

export const ABOUT_NAV_LINKS = [
  { nameKey: 'cat_intro', path: '/about' },
  { nameKey: 'cat_culture', path: '/about/culture' },
  { nameKey: 'cat_philosophy', path: '/about/philosophy' },
  { nameKey: 'cat_structure', path: '/about/structure' },
  { nameKey: 'cat_honor', path: '/about/honor' },
]

export const NEWS_NAV_LINKS = [
  { nameKey: 'cat_report', path: '/news' },
  { nameKey: 'cat_video', path: '/news/video' },
]

/** 顺序：货架总览 → 与首页产品条一致 → 配件 */
export const PRODUCT_NAV_LINKS = [
  { nameKey: 'cat_racking', path: '/products' },
  ...BLT_HOME_PRODUCTS.map(({ nameKey, path }) => ({ nameKey, path })),
  { nameKey: 'cat_accessory', path: '/products/accessory' },
]

export const CASES_NAV_LINKS = [
  { nameKey: 'cat_factory', path: '/cases/factory' },
  { nameKey: 'cat_clients', path: '/cases' },
]

export const SERVICES_NAV_LINKS = [{ nameKey: 'cat_services', path: '/services' }]

export const BROCHURE_NAV_LINKS = [{ nameKey: 'cat_download', path: '/brochure' }]

export const CONTACT_NAV_LINKS = [{ nameKey: 'cat_message', path: '/contact' }]
