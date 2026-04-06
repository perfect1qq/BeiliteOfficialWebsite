/**
 * 关于我们子页配图 — 与官网 onepage / aboutus 同源
 */
import { blt } from '../utils/bltvipAsset'

export const ABOUT_PROFILE_INLINE = {
  rel: 'images/oneImg.jpg',
  image: blt('images/oneImg.jpg'),
}

export const ABOUT_CULTURE_IMAGES = [
  'upload/image/201803/02/0404098523.jpg',
  'upload/image/201803/02/0404297337.jpg',
  'upload/image/201803/02/0404543450.jpg',
  'upload/image/201803/02/0405150772.jpg',
].map((rel) => ({ rel, image: blt(rel) }))

export const ABOUT_STRUCTURE_IMAGE = {
  rel: 'upload/image/201803/02/0429572395.jpg',
  image: blt('upload/image/201803/02/0429572395.jpg'),
}

export const ABOUT_HONOR_IMAGES = [
  'upload/image/201810/29/0119005517.jpg',
  'upload/image/201810/29/0117591709.jpg',
  'upload/image/201810/29/0117062586.jpg',
].map((rel) => ({ rel, image: blt(rel) }))
