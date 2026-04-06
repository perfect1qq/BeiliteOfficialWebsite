/**
 * 官网静态资源：优先 public/bltvip
 */
const REMOTE_ORIGIN = 'http://www.bltvip.com'

export function blt(relPath) {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '')
  const p = String(relPath).replace(/^\/+/, '')
  return `${base}/bltvip/${p}`
}

/** 未同步资源时的回退（仅 http 页面或允许混合内容时有效） */
export function bltFallback(relPath) {
  const p = String(relPath).replace(/^\/+/, '')
  return `${REMOTE_ORIGIN}/${p}`
}
