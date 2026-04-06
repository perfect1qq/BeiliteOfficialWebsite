import { lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import SubPageLayout from './layouts/SubPageLayout'
import { LEGACY_REDIRECTS } from './data/legacyRedirects'
import ProinfoHtmlRedirect from './components/ProinfoHtmlRedirect'
import ArticleHtmlRedirect from './components/ArticleHtmlRedirect'
import ProductDetail from './pages/ProductDetail'

const HomePage = lazy(() => import('./pages/HomePage'))
const AboutUs = lazy(() => import('./pages/AboutUs'))
const Products = lazy(() => import('./pages/Products'))
const News = lazy(() => import('./pages/News'))
const ContactUs = lazy(() => import('./pages/ContactUs'))
const Cases = lazy(() => import('./pages/Cases'))
const Services = lazy(() => import('./pages/Services'))
const Brochure = lazy(() => import('./pages/Brochure'))
const BrochurePage = lazy(() => import('./pages/BrochurePage'))

/**
 * 全站路由：页面懒加载（Suspense 在 AppLayout）+ 旧站重定向 + proinfo / 宣传册
 */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        {LEGACY_REDIRECTS.map(({ from, to }) => (
          <Route key={from} path={from} element={<Navigate to={to} replace />} />
        ))}
        <Route path="proinfo/:id" element={<ProinfoHtmlRedirect />} />
        <Route path="article/:id" element={<ArticleHtmlRedirect />} />
        <Route path="piclist/*" element={<Navigate to="/brochure" replace />} />

        <Route index element={<HomePage />} />
        <Route element={<SubPageLayout />}>
          <Route path="about/*" element={<AboutUs />} />
          <Route path="news/*" element={<News />} />
          <Route path="products/proinfo/:id" element={<ProductDetail />} />
          <Route path="products/*" element={<Products />} />
          <Route path="services/*" element={<Services />} />
          <Route path="cases/*" element={<Cases />} />
          <Route path="brochure/page/:pageId" element={<BrochurePage />} />
          <Route path="brochure/*" element={<Brochure />} />
          <Route path="contact" element={<ContactUs />} />
        </Route>
      </Route>
    </Routes>
  )
}
