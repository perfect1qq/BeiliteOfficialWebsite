import { useTranslation } from 'react-i18next'
import { BLT_FOOTER_TEL } from '../data/bltvipHomeData'
import { bltFallback } from '../utils/bltvipAsset'

/**
 * 页脚 — 精简为版权信息 + 联系电话
 */

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-bottom">
          <div className="footer-copy">
            {t('footer_copy')}&nbsp;&nbsp;&nbsp;
            <a href="https://beian.miit.gov.cn" target="_blank" rel="noreferrer">
              鄂ICP备18005547号-1
            </a>
            &nbsp;&nbsp;{t('footer_tech')}
          </div>
          <div className="footer-phone">
            <img
              src={BLT_FOOTER_TEL}
              alt=""
              className="footer-tel-ico"
              width={20}
              height={20}
              onError={(e) => {
                e.currentTarget.src = bltFallback('images/tel2.png')
              }}
            />
            027-69340899/15171431996
          </div>
        </div>
      </div>
    </footer>
  )
}
