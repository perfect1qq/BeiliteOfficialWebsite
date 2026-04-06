import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { BLT_ONLINE_ICONS, BLT_WECHAT_QR } from '../data/bltvipHomeData'
import { bltFallback } from '../utils/bltvipAsset'

function useImgFallback(relPath) {
  return useCallback(
    (e) => {
      const el = e.currentTarget
      if (!el.dataset.fellback) {
        el.dataset.fellback = '1'
        el.src = bltFallback(relPath)
      }
    },
    [relPath],
  )
}

/**
 * 右侧固定条：在线咨询 / 电话 / 微信 / 回顶（对标 bltvip.com ul.online）
 */
export default function SiteOnlineSidebar() {
  const [openPhone, setOpenPhone] = useState(false)
  const [openWx, setOpenWx] = useState(false)
  const fb1 = useImgFallback('images/onlineico1.png')
  const fb2 = useImgFallback('images/onlineico2.png')
  const fb3 = useImgFallback('images/onlineico3.png')
  const fb4 = useImgFallback('images/onlineico4.png')
  const fbQr = useImgFallback('upload/image/erweima/2353273286.png')

  const scrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const togglePhone = useCallback(() => {
    setOpenPhone((v) => !v)
    setOpenWx(false)
  }, [])
  const toggleWx = useCallback(() => {
    setOpenWx((v) => !v)
    setOpenPhone(false)
  }, [])

  return (
    <ul className="site-online-bar" aria-label="快捷服务">
      <li>
        <Link to="/contact" className="site-online-item">
          <span className="site-online-ico">
            <img src={BLT_ONLINE_ICONS.consult} alt="" width={30} height={30} onError={fb1} />
          </span>
          <span className="site-online-label">在线咨询</span>
        </Link>
      </li>
      <li
        className="site-online-has-pop"
        onMouseEnter={() => setOpenPhone(true)}
        onMouseLeave={() => setOpenPhone(false)}
      >
        <button type="button" className="site-online-item" aria-expanded={openPhone} onClick={togglePhone}>
          <span className="site-online-ico">
            <img src={BLT_ONLINE_ICONS.phone} alt="" width={30} height={30} onError={fb2} />
          </span>
          <span className="site-online-label">电话咨询</span>
        </button>
        <div className={`site-online-pop site-online-pop--tel ${openPhone ? 'is-open' : ''}`} role="region">
          <div className="site-online-pop-inner">
            027-69340899<br />
            15171431996
          </div>
        </div>
      </li>
      <li
        className="site-online-has-pop"
        onMouseEnter={() => setOpenWx(true)}
        onMouseLeave={() => setOpenWx(false)}
      >
        <button type="button" className="site-online-item" aria-expanded={openWx} onClick={toggleWx}>
          <span className="site-online-ico">
            <img src={BLT_ONLINE_ICONS.wechat} alt="" width={30} height={30} onError={fb3} />
          </span>
          <span className="site-online-label">关注微信</span>
        </button>
        <div className={`site-online-pop site-online-pop--qr ${openWx ? 'is-open' : ''}`}>
          <img src={BLT_WECHAT_QR} alt="微信公众号二维码" width={135} height={135} onError={fbQr} />
        </div>
      </li>
      <li>
        <button type="button" className="site-online-item" onClick={scrollTop}>
          <span className="site-online-ico">
            <img src={BLT_ONLINE_ICONS.top} alt="" width={30} height={30} onError={fb4} />
          </span>
          <span className="site-online-label">返回顶部</span>
        </button>
      </li>
    </ul>
  )
}
