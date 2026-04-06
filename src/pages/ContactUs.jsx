import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { submitMessage } from '../services/messageApi'
import { BLT_WECHAT_QR } from '../data/bltvipHomeData'
import { bltFallback } from '../utils/bltvipAsset'

/**
 * 联系我们页面 — 支持多语言
 */
export default function ContactUs() {
  const { t } = useTranslation()
  const [form, setForm] = useState({ content: '', contactInfo: '' })
  const [sending, setSending] = useState(false)

  const update = (field, value) => setForm((prev) => ({ ...prev, [field]: value }))

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.contactInfo.trim() || !form.content.trim()) {
      return alert(t('mes_error_empty'))
    }

    setSending(true)
    try {
      const data = await submitMessage(form)
      alert(data.message || t('mes_success_msg'))
      setForm({ content: '', contactInfo: '' })
    } catch (err) {
      alert(err.message || 'Error occurred, please try again')
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="contact">
      <Helmet>
        <title>{t('nav_contact')}_武汉倍力特物流装备有限公司</title>
      </Helmet>

      {/* 公司联系信息 */}
      <div className="conTop">
        <div className="conName">WUHAN BEILITE LOGISTICS EQUIPMENT CO., LTD.</div>
        <div className="contact-top-inner">
          <div className="conLef">
            <p className="odd">{t('con_address_label')}{t('con_address_val')}</p>
            <p>{t('con_mobile_label')}{t('con_mobile_val')}</p>
            <p className="odd">{t('con_website_label')}www.bltvip.com</p>
            <p>{t('con_phone_label')}027-69340899</p>
          </div>
          <div className="conRig">
            <div className="conWx">
              <img
                className="con-qr-img"
                src={BLT_WECHAT_QR}
                alt="微信公众号"
                width={135}
                height={135}
                onError={(e) => {
                  e.currentTarget.src = bltFallback('upload/image/erweima/2353273286.png')
                }}
              />
            </div>
            <div className="conRigCon">
              <p>{t('con_scan')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 地图占位 */}
      <div className="conBot">
        <div id="dituContent" className="map-placeholder">
          <h3>Map API Area</h3>
        </div>
      </div>

      {/* 在线留言表单 */}
      <div className="message-section">
        <div className="mesTit">{t('mes_title')} <span>MESSAGE</span></div>
        <p className="mesTip">{t('mes_tip')}</p>

        <form onSubmit={handleSubmit} className="mesForm">
          <div className="mesBox">
            <span className="required">*</span>
            <textarea
              className="mesInput"
              rows="4"
              placeholder={t('mes_placeholder_content')}
              value={form.content}
              onChange={(e) => update('content', e.target.value)}
            />
          </div>
          <div className="mesBox">
            <span className="required">*</span>
            <input
              type="text"
              className="mesInput"
              placeholder={t('msg_phone_placeholder')}
              value={form.contactInfo}
              onChange={(e) => update('contactInfo', e.target.value)}
            />
          </div>
          <button type="submit" className="mesBtn mesBtn1" disabled={sending}>
            {sending ? t('msg_sending') : t('mes_btn_submit')}
          </button>
          <button
            type="button"
            className="mesBtn mesBtn2"
            onClick={() => setForm({ content: '', contactInfo: '' })}
          >
            {t('mes_btn_reset')}
          </button>
        </form>
      </div>
    </div>
  )
}
