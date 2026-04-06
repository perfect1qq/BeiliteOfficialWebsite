import { useState, useEffect, useCallback } from 'react'
import { BLT_BANNERS } from '../data/bltvipHomeData'
import { bltFallback } from '../utils/bltvipAsset'

const FALLBACK_RELS = [
  'upload/image/201810/31/0946419831.jpg',
  'upload/image/201810/31/0946532578.jpg',
  'upload/image/201810/31/0231310007.jpg',
]

const SLIDES = BLT_BANNERS.map((src, i) => ({
  src,
  fallback: bltFallback(FALLBACK_RELS[i]),
  alt: '武汉倍力特物流装备 — 仓储货架与生产线',
}))

/**
 * 首页横幅轮播（图与 http://www.bltvip.com 一致）
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

  const onImgError = (e, fallback) => {
    const el = e.currentTarget
    if (el.src !== fallback) el.src = fallback
  }

  return (
    <div className="banBox">
      {SLIDES.map((slide, idx) => (
        <div key={idx} className={`hero-slide ${idx === current ? 'active' : ''}`}>
          <img
            src={slide.src}
            alt={slide.alt}
            decoding="async"
            onError={(e) => onImgError(e, slide.fallback)}
          />
        </div>
      ))}

      <button type="button" className="banner-arrow banner-prev" onClick={prev} aria-label="上一张">
        &#10094;
      </button>
      <button type="button" className="banner-arrow banner-next" onClick={next} aria-label="下一张">
        &#10095;
      </button>

      <div className="banBox-hd">
        <ul>
          {SLIDES.map((_, idx) => (
            <li
              key={idx}
              className={idx === current ? 'on' : ''}
              onClick={() => setCurrent(idx)}
              onKeyDown={(e) => e.key === 'Enter' && setCurrent(idx)}
              role="button"
              tabIndex={0}
              aria-label={`第 ${idx + 1} 张`}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
