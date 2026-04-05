import { useTranslation } from 'react-i18next'

/**
 * 首页 — 公司介绍板块（关于倍力特）
 *
 * 原站布局：
 *   左侧：公司简介文字 + "了解更多"按钮
 *   右侧：深蓝色数据统计墙（4 条橙色数据项）
 */
export default function AboutSection() {
  const { t } = useTranslation()

  return (
    <div className="box1Bg">
      <div className="container" style={{ overflow: 'hidden' }}>
        {/* 左侧：企业介绍 */}
        <div className="box1Lef">
          <div className="boxTith2">
            {t('home_about_title')} <span className="boxTitEn">INTRODUCTION</span>
          </div>
          <div className="box1Text">
            <p>{t('home_about_intro_p1')}</p>
            <p style={{ marginTop: '10px' }}>{t('home_about_intro_p2')}</p>
          </div>
        </div>

        {/* 右侧：蓝色数据墙 */}
        <div className="box1Rig">
          <div className="statItem">
            <h3 className="statNum">{t('stat_exp_num')}</h3>
            <p className="statDesc">{t('stat_exp_desc')}</p>
          </div>
          <div className="statItem">
            <h3 className="statNum">{t('stat_area_num')}</h3>
            <p className="statDesc">{t('stat_area_desc')}</p>
          </div>
          <div className="statItem">
            <h3 className="statNum">{t('stat_tech_num')}</h3>
            <p className="statDesc">{t('stat_tech_desc')}</p>
          </div>
          <div className="statItem">
            <h3 className="statNum">{t('stat_global_num')}</h3>
            <p className="statDesc">{t('stat_global_desc')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
