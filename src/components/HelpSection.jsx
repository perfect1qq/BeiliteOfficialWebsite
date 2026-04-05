import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

/**
 * 首页底部 — "是否需要更多帮助？" 板块
 */

const SERVICE_ITEMS = [
  { icon: '⚛', nameKey: 'nav_tech',     path: '/services' },
  { icon: '▦', nameKey: 'nav_cases',    path: '/cases' },
  { icon: '☰', nameKey: 'nav_brochure', path: '/brochure' },
]

export default function HelpSection() {
  const { t } = useTranslation()

  return (
    <div className="helpBg">
      <div className="container helpInner">
        {/* 左侧介绍文字 */}
        <div className="helpText">
          <h2>{t('help_title')}</h2>
          <p>{t('help_desc')}</p>
        </div>

        {/* 右侧三大入口 */}
        <div className="helpLinks">
          {SERVICE_ITEMS.map((item) => (
            <Link key={item.path} to={item.path} className="helpItem">
              <span className="helpIcon">{item.icon}</span>
              <span className="helpName">{t(item.nameKey)}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
