import { Navigate, useParams } from 'react-router-dom'
import { PROINFO_TO_PATH } from '../data/proinfoLegacy'

/**
 * 旧站 /proinfo/:id.html → 统一跳到 /products/:slug 详情（避免重复页面）
 */
export default function ProductDetail() {
  const { id } = useParams()
  const path = PROINFO_TO_PATH[id]
  if (!path) {
    return <Navigate to="/products" replace />
  }
  return <Navigate to={path} replace />
}
