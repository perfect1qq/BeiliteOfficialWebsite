import { Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingMessage from '../components/FloatingMessage'

/**
 * 全站公共外壳
 *
 * 职责：
 * - 渲染所有页面共享的 Header / Footer / FloatingMessage
 * - 注入全局 SEO meta 标签
 * - 通过 <Outlet /> 渲染当前路由对应的子页面
 */
export default function AppLayout() {
  return (
    <div className="app-shell">
      <Helmet>
        <title>
          武汉货架_重型货架_仓储货架_中型货架_托盘货架_横梁货架_仓库货架_倍力特物流装备
        </title>
        <meta
          name="keywords"
          content="重型货架,仓储货架,中型货架,货架,仓储,仓库货架,托盘货架,横梁货架,倍力特货架"
        />
        <meta
          name="description"
          content="武汉倍力特物流装备有限公司专业制造重型货架、仓储货架、托盘横梁货架等，为您提供极佳立体空间利用方案。"
        />
      </Helmet>

      <Header />
      <main className="app-main-content">
        <Outlet />
      </main>
      <Footer />
      <FloatingMessage />
    </div>
  )
}
