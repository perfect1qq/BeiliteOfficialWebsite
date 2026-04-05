import { useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { submitMessage } from '../services/messageApi'

/**
 * 左下角悬浮留言弹窗
 *
 * 访客无需跳转到联系页面即可快速提交留言，
 * 数据通过 messageApi 发送至 Node 后端，管理员可在后台管理系统查看。
 */
export default function FloatingMessage() {
  const { t } = useTranslation()
  const [visible, setVisible] = useState(false)
  const [form, setForm] = useState({ content: '', contactInfo: '' })
  const [sending, setSending] = useState(false)

  /** 更新表单字段的通用处理函数 */
  const onChange = useCallback((field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }, [])

  /** 提交留言 */
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.content.trim() || !form.contactInfo.trim()) return

    setSending(true)
    try {
      await submitMessage(form)
      alert('留言已送达，我们会尽快安排专人跟进！')
      setForm({ content: '', contactInfo: '' })
      setVisible(false)
    } catch (err) {
      alert(err.message || '发送失败，请稍后重试')
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      {/* 收起态 — 仅显示一个蓝色条 */}
      {!visible && (
        <div className="floating-trigger" onClick={() => setVisible(true)}>
          <span>💬 {t('msg_title')}</span>
        </div>
      )}

      {/* 展开态 — 完整留言表单 */}
      {visible && (
        <div className="floating-panel">
          <div className="floating-header" onClick={() => setVisible(false)}>
            <span>💬 {t('msg_title')}</span>
            <span>▼</span>
          </div>
          <form onSubmit={handleSubmit} className="floating-form">
            <textarea
              required
              rows="4"
              value={form.content}
              onChange={(e) => onChange('content', e.target.value)}
              placeholder={t('msg_content_placeholder')}
            />
            <input
              type="text"
              required
              value={form.contactInfo}
              onChange={(e) => onChange('contactInfo', e.target.value)}
              placeholder="联系方式（电话/微信/QQ/邮箱）"
            />
            <button type="submit" className="btn btn-orange" disabled={sending}>
              {sending ? '发送中...' : t('msg_submit')}
            </button>
          </form>
        </div>
      )}
    </>
  )
}
