/**
 * 旧站 URL → React 路由（与 http://www.bltvip.com 路径对应）
 */
/** 旧站「仓储货架」下数字分类 ID（与 proinfo 编号体系不同，仅映射主导航常见项） */
const LEGACY_PRODUCT_CATEGORY = {
  8: '/products/medium',
  9: '/products/heavy',
  10: '/products/panel',
  11: '/products/accessory',
  24: '/products/narrow',
  25: '/products/attic',
  26: '/products/platform',
  27: '/products/cantilever',
  28: '/products/through',
  29: '/products',
  30: '/products/fluent',
  31: '/products/drawer',
  32: '/products',
  33: '/products/shuttle',
  34: '/products',
  35: '/products',
}

const productPairs = Object.entries(LEGACY_PRODUCT_CATEGORY).flatMap(([id, to]) => [
  { from: `products/${id}`, to },
  { from: `products/${id}/`, to },
])

export const LEGACY_REDIRECTS = [
  ...productPairs,
  { from: 'aboutus.html', to: '/about' },
  { from: 'onepage4.html', to: '/about/culture' },
  { from: 'onepage5.html', to: '/about/philosophy' },
  { from: 'onepage6.html', to: '/about/structure' },
  { from: 'onepage7.html', to: '/about/honor' },
  { from: 'onepage9.html', to: '/services' },
  { from: 'contact.html', to: '/contact' },
  { from: 'news/1', to: '/news' },
  { from: 'news/1/', to: '/news' },
  { from: 'video/22', to: '/news/video' },
  { from: 'video/22/', to: '/news/video' },
  { from: 'products/3', to: '/products' },
  { from: 'products/3/', to: '/products' },
  { from: 'products/4', to: '/products/accessory' },
  { from: 'products/4/', to: '/products/accessory' },
  { from: 'products/55', to: '/products/stereo' },
  { from: 'products/55/', to: '/products/stereo' },
  { from: 'cases/16', to: '/cases' },
  { from: 'cases/16/', to: '/cases' },
  { from: 'cases/17', to: '/cases/factory' },
  { from: 'cases/17/', to: '/cases/factory' },
  { from: 'piclist/23', to: '/brochure' },
  { from: 'piclist/23/', to: '/brochure' },
]
