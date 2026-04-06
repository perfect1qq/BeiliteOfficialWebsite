import { useState, useCallback, useMemo, useEffect } from 'react'
import { BLT_PARTNERS } from '../data/bltvipHomeData'
import CustomerLogos from './CustomerLogos'

const PAGE_SIZE = 10

/**
 * 合作客户 — 自动轮播 + 左右切换
 */
export default function CustomersSection() {
  const [page, setPage] = useState(0)
  const pageCount = Math.max(1, Math.ceil(BLT_PARTNERS.length / PAGE_SIZE))

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPage((p) => (p + 1) % pageCount)
    }, 3500)

    return () => window.clearInterval(timer)
  }, [pageCount])

  const slice = useMemo(() => {
    const start = page * PAGE_SIZE
    return BLT_PARTNERS.slice(start, start + PAGE_SIZE)
  }, [page])

  const prev = useCallback(() => {
    setPage((p) => (p - 1 + pageCount) % pageCount)
  }, [pageCount])

  const next = useCallback(() => {
    setPage((p) => (p + 1) % pageCount)
  }, [pageCount])

  const logos = useMemo(
    () =>
      slice.map((item) => ({
        name: item.name,
        url: item.image,
        remotePath: item.remotePath,
      })),
    [slice],
  )

  return (
    <div className="box3Bg customers-section">
      <div className="container">
        <div className="home-partners-wrap customers-section__wrap">
          <button type="button" className="home-partners-arrow home-partners-arrow--prev" onClick={prev} aria-label="上一页客户" />

          <div className="customers-section__center">
            <CustomerLogos logos={logos} />
          </div>

          <button type="button" className="home-partners-arrow home-partners-arrow--next" onClick={next} aria-label="下一页客户" />
        </div>
      </div>
    </div>
  )
}
