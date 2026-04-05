import { useState, useEffect, useCallback } from 'react'

/** 轮播图片列表 — 后期替换为真实图片路径即可 */
const SLIDES = [
  { src: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=2000&q=80', alt: '倍力特仓储货架生产线' },
  { src: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=2000&q=80', alt: '大型仓库立体货架方案' },
]

/**
 * 首页 Hero 轮播组件
 *
 * 特性：
 * - 5 秒自动轮播
 * - 页面不可见时暂停定时器（节省资源）
 * - 首屏图片不使用 lazy loading，优化 LCP 指标
 */
export default function Hero() {
  const [current, setCurrent] = useState(0)
  const total = SLIDES.length

  const next = useCallback(() => setCurrent((i) => (i + 1) % total), [total])
  const prev = useCallback(() => setCurrent((i) => (i - 1 + total) % total), [total])

  useEffect(() => {
    let timer = setInterval(next, 5000)

    const onVisibility = () => {
      clearInterval(timer)
      if (!document.hidden) timer = setInterval(next, 5000)
    }

    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      clearInterval(timer)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [next])

  return (
    <div className="banBox">
      {SLIDES.map((slide, idx) => (
        <div key={idx} className={`hero-slide ${idx === current ? 'active' : ''}`}>
          <img src={slide.src} alt={slide.alt} decoding="async" />
        </div>
      ))}

      <button className="banner-arrow banner-prev" onClick={prev}>&#10094;</button>
      <button className="banner-arrow banner-next" onClick={next}>&#10095;</button>

      {/* 底部指示器 */}
      <div className="banBox-hd">
        <ul>
          {SLIDES.map((_, idx) => (
            <li
              key={idx}
              className={idx === current ? 'on' : ''}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
