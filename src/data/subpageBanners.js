/**
 * 内页顶图 — 与官网各栏目 Banner 一致（/images/ban*.jpg）
 */
import { blt } from '../utils/bltvipAsset'

const REL_BY_ROOT = {
  about: 'images/banOnepage.jpg',
  news: 'images/banNews.jpg',
  products: 'images/banPro.jpg',
  services: 'images/banOnepage.jpg',
  cases: 'images/banCase.jpg',
  brochure: 'images/banBook.jpg',
  contact: 'images/banContact.jpg',
}

export function subpageBannerRelForRoot(rootKey) {
  return REL_BY_ROOT[rootKey] || REL_BY_ROOT.about
}

export function subpageBannerUrlForRoot(rootKey) {
  return blt(subpageBannerRelForRoot(rootKey))
}
