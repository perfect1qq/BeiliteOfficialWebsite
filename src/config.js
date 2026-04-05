/**
 * 后端 API 基础地址
 * 
 * 动态读取环境变量：
 * - 开发环境：读取 .env (localhost:3000)
 * - 生产环境：读取 .env.production (server-ls6e.onrender.com)
 */
export const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'
