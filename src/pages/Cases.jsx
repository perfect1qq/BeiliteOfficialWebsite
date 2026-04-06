import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { blt, bltFallback } from '../utils/bltvipAsset'

function norm(p) {
  return (p || '').replace(/\/$/, '') || '/'
}

const caseDataPool = {
  '/cases/factory': [
    {
      nameKey: 'case_factory_1_title',
      image: blt('upload/image/201802/27/0112348018.jpg'),
      remotePath: 'upload/image/201802/27/0112348018.jpg',
    },
    {
      nameKey: 'case_factory_2_title',
      image: blt('upload/image/201802/03/0407276863.jpg'),
      remotePath: 'upload/image/201802/03/0407276863.jpg',
    },
  ],
  '/cases': [
    {
      nameKey: 'case_1_title',
      image: blt('upload/image/201801/25/0247320014.jpg'),
      remotePath: 'upload/image/201801/25/0247320014.jpg',
    },
    {
      nameKey: 'case_2_title',
      image: blt('upload/image/201801/25/0248058666.jpg'),
      remotePath: 'upload/image/201801/25/0248058666.jpg',
    },
  ],
}

/**
 * 工程案例 — 厂区实物 / 合作客户（配图走官网资源路径）
 */
export default function Cases() {
  const { pathname } = useLocation()
  const { t } = useTranslation()
  const path = norm(pathname)
  const currentCases = caseDataPool[path] || caseDataPool['/cases']

  return (
    <>
      <Helmet>
        <title>{t('nav_cases')}_倍力特货架</title>
      </Helmet>

      <ul className="caseList">
        {currentCases.map((item, idx) => (
          <li key={idx} className="caseItem">
            <div className="caseImg">
              <img
                src={item.image}
                alt={t(item.nameKey)}
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.src = bltFallback(item.remotePath)
                }}
              />
            </div>
            <div className="caseTit">{t(item.nameKey)}</div>
          </li>
        ))}
      </ul>
    </>
  )
}
