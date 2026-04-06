import { API_BASE } from '../config.js'

const DEFAULT_SUBMIT_PATH = '/api/messages/submit'
const REQUEST_TIMEOUT_MS = 15000

function buildSubmitUrl() {
  const base = (API_BASE || '').trim().replace(/\/$/, '')
  return base ? `${base}${DEFAULT_SUBMIT_PATH}` : DEFAULT_SUBMIT_PATH
}

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
  const content = typeof payload?.content === 'string' ? payload.content.trim() : ''
  const contactInfo = typeof payload?.contactInfo === 'string' ? payload.contactInfo.trim() : ''

  if (!content || !contactInfo) {
    throw new Error('请先填写联系方式和留言内容')
  }

  const controller = new AbortController()
  const timeout = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

  let res
  try {
    res = await fetch(buildSubmitUrl(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ ...payload, content, contactInfo }),
      signal: controller.signal,
    })
  } catch (error) {
    if (error?.name === 'AbortError') {
      throw new Error('请求超时，请检查后端服务是否正常')
    }
    throw new Error('接口无法访问，请检查后端是否已启动或代理是否配置正确')
  } finally {
    window.clearTimeout(timeout)
  }

  const contentType = res.headers.get('content-type') || ''
  let data = {}

  try {
    data = contentType.includes('application/json')
      ? await res.json()
      : { message: await res.text() }
  } catch {
    data = {}
  }

  if (!res.ok) {
    throw new Error(data.message || `提交失败（HTTP ${res.status}）`)
  }

  return data
}
