import { useTranslation } from 'react-i18next'

/**
 * 页脚 — 1:1 还原 bltvip.com
 */

const FRIEND_LINKS = [
  { nameKey: '仓库管理', url: '#' },
  { nameKey: '武汉货架', url: '#' },
  { nameKey: '重型货架', url: '#' },
  { nameKey: '163邮箱',  url: 'http://mail.163.com' },
  { nameKey: '立库货架', url: '#' },
  { nameKey: '百度',     url: 'http://baidu.com' },
  { nameKey: '自动化设备', url: '#' },
  { nameKey: '曲面贴合机', url: '#' },
  { nameKey: '集装袋',   url: '#' },
]

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="container">
        {/* 友情链接 */}
        <div className="footer-top">
          <span className="footer-label">{t('footer_links')} :</span>
          <ul className="footer-links">
            {FRIEND_LINKS.map((link) => (
              <li key={link.nameKey}>
                <a href={link.url} target="_blank" rel="noreferrer">{link.nameKey}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* 版权 + 电话 */}
        <div className="footer-bottom">
          <div className="footer-copy">
            {t('footer_copy')}&nbsp;&nbsp;&nbsp;
            <a href="https://beian.miit.gov.cn" target="_blank" rel="noreferrer">
              鄂ICP备18005547号-1
            </a>
            &nbsp;&nbsp;{t('footer_tech')}
          </div>
          <div className="footer-phone">
            ☎ 027-69340899/15171431996
          </div>
        </div>
      </div>
    </footer>
  )
}
