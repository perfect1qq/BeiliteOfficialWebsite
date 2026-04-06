import { Suspense, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingMessage from '../components/FloatingMessage'
import SiteOnlineSidebar from '../components/SiteOnlineSidebar'
import { SITE_ORIGIN } from '../config/site'

const ORG_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '武汉倍力特物流装备有限公司',
  alternateName: 'Wuhan Beilite Logistics Equipment Co., Ltd.',
  url: SITE_ORIGIN,
  logo: `${SITE_ORIGIN}/bltvip/upload/image/201803/23/1155594161.png`,
  telephone: '+86-27-69340899',
  description: '华中地区仓储货架、立体库及物流装备研发制造与工程服务。',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Wuhan',
    addressRegion: 'Hubei',
    addressCountry: 'CN',
  },
}

/**
 * 全站外壳：Header / Footer、SEO 默认标签、路由懒加载 Suspense、Organization 结构化数据
 */
export default function AppLayout() {
  const { pathname } = useLocation()
  const { i18n } = useTranslation()
  const pathSuffix = pathname === '/' ? '' : pathname
  const canonical = `${SITE_ORIGIN}${pathSuffix}`
  const isEn = i18n.language === 'en'
  const htmlLang = isEn ? 'en' : 'zh-CN'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="app-shell">
      <Helmet
        defaultTitle="武汉货架,仓储货架,库房货架,重型货架厂,倍力特物流装备有限公司"
        htmlAttributes={{ lang: htmlLang }}
      >
        <title>武汉货架,仓储货架,库房货架,重型货架厂,倍力特物流装备有限公司</title>
        <meta
          name="keywords"
          content="货架,货架厂,仓储货架,库房货架,武汉货架,重型货架,武汉货架厂,立体库,阁楼货架"
        />
        <meta
          name="description"
          content="武汉货架,仓储货架,库房货架,重型货架厂,倍力特仓储-华中大型货架制造厂"
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={canonical} />
        <meta property="og:site_name" content="武汉倍力特物流装备有限公司" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta
          property="og:title"
          content="武汉货架,仓储货架,库房货架,重型货架厂,倍力特物流装备有限公司"
        />
        <meta
          property="og:description"
          content="武汉货架,仓储货架,库房货架,重型货架厂,倍力特仓储-华中大型货架制造厂"
        />
        <meta property="og:locale" content="zh_CN" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(ORG_JSON_LD)}</script>
      </Helmet>

      <Header />
      <main className="app-main-content">
        <Suspense
          fallback={
            <div className="app-route-fallback" role="status" aria-live="polite">
              <span className="app-route-fallback__dot" aria-hidden />
              {isEn ? 'Loading…' : '加载中…'}
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <FloatingMessage />
      <SiteOnlineSidebar />
    </div>
  )
}
