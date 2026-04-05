import { Routes, Route } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import SubPageLayout from './layouts/SubPageLayout'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import Products from './pages/Products'
import News from './pages/News'
import ContactUs from './pages/ContactUs'
import Cases from './pages/Cases'
import Services from './pages/Services'
import Brochure from './pages/Brochure'

/**
 * 全站路由配置
 *
 * 结构说明：
 *   AppLayout  → 顶部导航 + 底部页脚（全站公用壳）
 *     ├─ HomePage        首页（独占全宽，不走 SubPageLayout）
 *     └─ SubPageLayout   内页公共壳（左侧导航 + 面包屑 + 右侧内容区）
 *         ├─ about/*      关于我们（支持 /about/culture 等二级路由）
 *         ├─ products/*   产品中心
 *         ├─ news/*       新闻中心
 *         ├─ services/*   技术服务
 *         ├─ cases/*      工程案例
 *         ├─ brochure/*   电子宣传册
 *         └─ contact      联系我们
 */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route element={<SubPageLayout />}>
          <Route path="about/*" element={<AboutUs />} />
          <Route path="news/*" element={<News />} />
          <Route path="products/*" element={<Products />} />
          <Route path="services/*" element={<Services />} />
          <Route path="cases/*" element={<Cases />} />
          <Route path="brochure/*" element={<Brochure />} />
          <Route path="contact" element={<ContactUs />} />
        </Route>
      </Route>
    </Routes>
  )
}
