import { Navigate, useParams } from 'react-router-dom'

/** 旧站 /article/56.html → /brochure/page/56 */
export default function ArticleHtmlRedirect() {
  const { id } = useParams()
  const raw = String(id || '').replace(/\.html$/i, '')
  return <Navigate to={`/brochure/page/${raw}`} replace />
}
