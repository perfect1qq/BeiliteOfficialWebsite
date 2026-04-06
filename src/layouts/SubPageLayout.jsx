import { useMemo } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { BLT_HOME_PRODUCTS } from '../data/bltvipHomeData'
import { NEWS_ARTICLES, NEWS_VIDEO_ITEMS } from '../data/newsArticles'
import { PROINFO_TO_PATH } from '../data/proinfoLegacy'
import { getBrochurePage } from '../data/brochurePages'
import {
  ABOUT_NAV_LINKS,
  NEWS_NAV_LINKS,
  PRODUCT_NAV_LINKS,
  SERVICES_NAV_LINKS,
  CASES_NAV_LINKS,
  BROCHURE_NAV_LINKS,
  CONTACT_NAV_LINKS,
} from '../data/siteSectionNav'
import { subpageBannerUrlForRoot } from '../data/subpageBanners'
import SidebarMenu from '../components/SidebarMenu'
import SubNavBanner from '../components/SubNavBanner'

function normPath(p) {
  return (p || '').replace(/\/$/, '') || '/'
}

const SIDEBAR_MAP = {
  about: {
    titleKey: 'nav_about',
    subtitle: 'ABOUT US',
    links: ABOUT_NAV_LINKS,
  },
  news: {
    titleKey: 'nav_news',
    subtitle: 'NEWS CENTER',
    links: NEWS_NAV_LINKS,
  },
  products: {
    titleKey: 'nav_products',
    subtitle: 'PRODUCTS',
    links: PRODUCT_NAV_LINKS,
  },
  services: {
    titleKey: 'nav_tech',
    subtitle: 'SERVICE',
    links: SERVICES_NAV_LINKS,
  },
  cases: {
    titleKey: 'nav_cases',
    subtitle: 'CASES',
    links: CASES_NAV_LINKS,
  },
  brochure: {
    titleKey: 'nav_brochure',
    subtitle: 'BROCHURE',
    links: BROCHURE_NAV_LINKS,
  },
  contact: {
    titleKey: 'nav_contact',
    subtitle: 'CONTACT US',
    links: CONTACT_NAV_LINKS,
  },
}

const ALL_NEWS = [...NEWS_ARTICLES, ...NEWS_VIDEO_ITEMS]

export default function SubPageLayout() {
  const { pathname } = useLocation()
  const { t } = useTranslation()

  const rootKey = pathname.split('/').filter(Boolean)[0] || 'about'
  const config = useMemo(() => SIDEBAR_MAP[rootKey] || SIDEBAR_MAP.about, [rootKey])
  const np = normPath(pathname)

  const bannerUrl = useMemo(() => subpageBannerUrlForRoot(rootKey), [rootKey])
  const newsDetailMatch = np.match(/^\/news\/a\/(.+)$/)
  const newsArticle = newsDetailMatch ? ALL_NEWS.find((a) => a.id === newsDetailMatch[1]) : null

  const brochurePageMatch = np.match(/^\/brochure\/page\/([^/]+)$/)
  const brochurePage = brochurePageMatch ? getBrochurePage(brochurePageMatch[1]) : null

  const proinfoMatch = np.match(/^\/products\/proinfo\/([^/]+)$/)
  const proinfoPid = proinfoMatch?.[1]
  const resolvedProductPath = proinfoPid ? PROINFO_TO_PATH[proinfoPid] : null
  const productRow = resolvedProductPath && BLT_HOME_PRODUCTS.find((p) => p.path === resolvedProductPath)

  let currentNameKey = config.titleKey
  const exactLink = config.links.find((l) => normPath(l.path) === np)
  if (exactLink) {
    currentNameKey = exactLink.nameKey
  } else if (newsArticle) {
    currentNameKey = newsArticle.titleKey
  } else if (brochurePage) {
    currentNameKey = brochurePage.titleKey
  } else if (productRow) {
    currentNameKey = productRow.nameKey
  } else if (rootKey === 'products' && np.startsWith('/products/') && np !== '/products') {
    const slugRow = BLT_HOME_PRODUCTS.find((p) => normPath(p.path) === np)
    if (slugRow) currentNameKey = slugRow.nameKey
    else if (np === '/products/accessory') currentNameKey = 'pro_accessory'
  }

  const sidebarItems = useMemo(
    () =>
      config.links.map((item) => ({
        href: item.path,
        label: t(item.nameKey),
      })),
    [config.links, t],
  )

  const activePath = useMemo(() => {
    if (newsArticle) return newsArticle.listIn
    if (brochurePage) return '/brochure'
    if (resolvedProductPath) return resolvedProductPath
    return np
  }, [brochurePage, newsArticle, np, resolvedProductPath])

  const breadcrumbs = useMemo(() => {
    const items = [
      { label: t('bread_home'), to: '/' },
      { label: t(config.titleKey), to: `/${rootKey}` },
    ]

    if (newsArticle) {
      items.push({ label: t(newsArticle.listIn === '/news/video' ? 'cat_video' : 'cat_report'), to: newsArticle.listIn })
    }

    items.push({ label: t(currentNameKey) })
    return items
  }, [config.titleKey, currentNameKey, newsArticle, rootKey, t])

  return (
    <div className="subpage-wrapper">
      <SubNavBanner
        currentPage={t(currentNameKey)}
        bannerImage={bannerUrl}
        breadcrumbs={breadcrumbs}
        sectionTitle={t(config.titleKey)}
        sectionSubtitle={config.subtitle}
      />

      <div className="container subpage-container--tight">
        <div className="subpage-layout">
          <SidebarMenu
            title={t(config.titleKey)}
            subtitle={config.subtitle}
            items={sidebarItems}
            activePath={activePath}
          />

          <main className="subpage-layout__main">
            <div className="subpage-layout__body">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
