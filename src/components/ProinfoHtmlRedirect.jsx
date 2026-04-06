import { Navigate, useParams } from 'react-router-dom'
import { PROINFO_TO_PATH } from '../data/proinfoLegacy'

/** 旧站 /proinfo/55.html → 直接 /products/stereo */
export default function ProinfoHtmlRedirect() {
  const { id } = useParams()
  const raw = String(id || '').replace(/\.html$/i, '')
  const path = PROINFO_TO_PATH[raw]
  if (path) {
    return <Navigate to={path} replace />
  }
  return <Navigate to={`/products/proinfo/${raw}`} replace />
}
