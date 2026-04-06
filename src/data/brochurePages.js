/**
 * 电子宣传册分页 — 与官网 piclist/23 第 1 页一致
 */
import { blt } from '../utils/bltvipAsset'

const rows = [
  ['56', 'broch_cover', 'upload/image/201810/28/1021392446.jpg'],
  ['89', 'broch_p1', 'upload/image/201810/29/0445099374.jpg'],
  ['90', 'broch_p2', 'upload/image/201810/29/0431379809.jpg'],
  ['91', 'broch_p3', 'upload/image/201810/29/0432232709.jpg'],
  ['92', 'broch_p4', 'upload/image/201810/29/0447175520.jpg'],
  ['93', 'broch_p5', 'upload/image/201810/29/0501519836.jpg'],
  ['94', 'broch_p6', 'upload/image/201810/29/0502257579.jpg'],
  ['95', 'broch_p7', 'upload/image/201810/29/0503051122.jpg'],
]

export const BROCHURE_PAGES = rows.map(([id, titleKey, rel]) => ({
  id,
  titleKey,
  image: blt(rel),
  remotePath: rel,
}))

export function getBrochurePage(id) {
  return BROCHURE_PAGES.find((p) => p.id === String(id))
}
