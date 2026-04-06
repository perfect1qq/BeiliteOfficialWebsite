import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { BLT_ICONS } from '../data/bltvipHomeData'
import { bltFallback } from '../utils/bltvipAsset'

const SERVICE_ITEMS = [
  { iconSrc: BLT_ICONS.helpTech, rel: 'upload/image/201801/25/0250193508.png', nameKey: 'nav_tech', path: '/services' },
  { iconSrc: BLT_ICONS.helpCases, rel: 'upload/image/201801/25/0250316657.png', nameKey: 'nav_cases', path: '/cases' },
  { iconSrc: BLT_ICONS.helpBrochure, rel: 'upload/image/201801/25/0250424097.png', nameKey: 'nav_brochure', path: '/brochure' },
]

/**
 * 「是否需要更多帮助？」— 与官网相同三枚图标入口
 */
export default function HelpSection() {
  const { t } = useTranslation()

  return (
    <div className="helpBg">
      <div className="container helpInner">
        <div className="helpText">
          <h2>{t('help_title')}</h2>
          <p>{t('help_desc')}</p>
        </div>

        <div className="helpLinks">
          {SERVICE_ITEMS.map((item) => (
            <Link key={item.path} to={item.path} className="helpItem">
              <span className="helpIcon help-icon-img">
                <img
                  src={item.iconSrc}
                  alt=""
                  width={50}
                  height={50}
                  onError={(e) => {
                    e.currentTarget.src = bltFallback(item.rel)
                  }}
                />
              </span>
              <span className="helpName">{t(item.nameKey)}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
