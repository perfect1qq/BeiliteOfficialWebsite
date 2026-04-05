import { API_BASE } from '../config'

/**
 * 向后端提交官网留言
 *
 * @param {Object} payload - 留言数据
 * @param {string} payload.contactInfo - 联系方式（电话 / 微信 / QQ / 邮箱）
 * @param {string} payload.content     - 留言正文
 * @returns {Promise<Object>} 后端返回的确认信息
 * @throws  {Error} 网络异常或服务端拒绝时抛出
 */
export async function submitMessage(payload) {
  const res = await fetch(`${API_BASE}/api/messages/submit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message || '服务器繁忙，请稍后重试')
  }

  return data
}
