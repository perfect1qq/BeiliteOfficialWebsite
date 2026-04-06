import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { BLT_ICONS } from '../data/bltvipHomeData'
import { bltFallback } from '../utils/bltvipAsset'

/**
 * 首页「公司介绍」— 布局对标 http://www.bltvip.com box1：左文+四宫格数据，右侧蓝色推广区
 */
export default function AboutSection() {
  const { t } = useTranslation()
  const titFb = () => bltFallback('images/box1TitIco.png')

  return (
    <div className="box1Bg">
      <div className="container">
        <div className="box1Lef">
          <div className="boxTit box1-intro-head">
            <h2 className="boxTith2 box1-intro-title">
              <img
                src={BLT_ICONS.box1Tit}
                alt=""
                className="box1-tit-ico"
                onError={(e) => {
                  e.currentTarget.src = titFb()
                }}
              />
              &nbsp;{t('home_about_title')}&nbsp;
              <span className="box1-intro-sub">introduction</span>
            </h2>
          </div>
          <div className="box1Text">
            <p>{t('home_about_intro_p1')}</p>
            <p style={{ marginTop: '10px' }}>{t('home_about_intro_p2')}</p>
          </div>
          <ul className="box1Bot">
            <li>
              <div className="box1Con">
                <span className="box1Num">{t('stat_exp_num')}</span>
                <div className="box1Brief">
                  <p>{t('stat_exp_desc')}</p>
                </div>
              </div>
            </li>
            <li>
              <div className="box1Con">
                <span className="box1Num">{t('stat_area_num')}</span>
                <div className="box1Brief">
                  <p>{t('stat_area_desc')}</p>
                </div>
              </div>
            </li>
            <li>
              <div className="box1Con">
                <span className="box1Num">{t('stat_tech_num')}</span>
                <div className="box1Brief">
                  <p>{t('stat_tech_desc')}</p>
                </div>
              </div>
            </li>
            <li>
              <div className="box1Con">
                <span className="box1Num">{t('stat_global_num')}</span>
                <div className="box1Brief">
                  <p>{t('stat_global_desc')}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="box1Rig box1-promo">
          <div className="box1RigTop">
            <h3>华中地区大型的</h3>
            <h4>货架生产厂家之一</h4>
            <p>ONE OF THE LARGEST</p>
            <p>SHELVES MANUFACTURERS</p>
          </div>
          <div className="box1RigBot">
            <h3>关于倍力特</h3>
            <h4>ABOUT US</h4>
            <i className="box1RigLine" aria-hidden />
            <div className="box1RigMore">
              <Link to="/about">{t('btn_view_more')}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
