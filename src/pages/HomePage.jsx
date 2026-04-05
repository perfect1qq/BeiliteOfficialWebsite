import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import ProductsSection from '../components/ProductsSection'
import CustomersSection from '../components/CustomersSection'
import NewsSection from '../components/NewsSection'
import HelpSection from '../components/HelpSection'

/**
 * 首页 — 按 bltvip.com 原站从上到下排列：
 *
 * 1. Hero 轮播横幅
 * 2. 关于倍力特（公司简介 + 数据墙）
 * 3. 倍力特产品（产品卡片轮播）
 * 4. 合作客户（品牌 Logo 阵列）
 * 5. 新闻中心（三列新闻卡 + 查看更多按钮）
 * 6. 是否需要更多帮助？（三大服务入口）
 */
export default function HomePage() {
  return (
    <div className="home-page-wrapper">
      <Hero />
      <AboutSection />
      <ProductsSection />
      <CustomersSection />
      <NewsSection />
      <HelpSection />
    </div>
  )
}
