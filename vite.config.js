import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  /**
   * 静态资源基础路径
   * GitHub Pages 部署在：https://<user>.github.io/BeiliteOfficialWebsite/
   * 因此需要设置为仓库名，确保资源加载正确。
   */
  base: '/BeiliteOfficialWebsite/',
  
  server: {
    host: '0.0.0.0',
    port: 5174,
    strictPort: true
  }
})
