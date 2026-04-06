/**
 * 后端 API 基础地址
 *
 * 默认使用相对路径 /api/messages/submit，配合 Vite 代理或同域反向代理。
 * 如需直连独立后端，可在环境变量中设置 VITE_API_BASE_URL。
 */
export const API_BASE = import.meta.env.VITE_API_BASE_URL || ''
