import { BLT_NEWS_HOME } from './bltvipHomeData'
import { blt } from '../utils/bltvipAsset'

/**
 * 新闻列表与详情（与首页三条新闻对应 + 官网视频列表 article/36）
 */
export const NEWS_ARTICLES = [
  {
    id: '1',
    titleKey: 'news_article_1_title',
    descKey: 'news_article_1_desc',
    bodyKey: 'news_article_1_body',
    date: '2018-06-12',
    image: BLT_NEWS_HOME[0].image,
    imageRemote: 'upload/image/201801/25/0422219086.jpg',
    listIn: '/news',
  },
  {
    id: '2',
    titleKey: 'news_article_2_title',
    descKey: 'news_article_2_desc',
    bodyKey: 'news_article_2_body',
    date: '2018-05-28',
    image: BLT_NEWS_HOME[1].image,
    imageRemote: 'upload/image/201801/25/0421395814.jpg',
    listIn: '/news',
  },
  {
    id: '3',
    titleKey: 'news_article_3_title',
    descKey: 'news_article_3_desc',
    bodyKey: 'news_article_3_body',
    date: '2018-05-20',
    image: BLT_NEWS_HOME[2].image,
    imageRemote: 'upload/image/201801/25/0421167546.jpg',
    listIn: '/news',
  },
]

export const NEWS_VIDEO_ITEMS = [
  {
    id: 'v1',
    titleKey: 'news_video_1_title',
    descKey: 'news_video_1_desc',
    bodyKey: 'news_video_1_body',
    date: '2024-01-10',
    image: BLT_NEWS_HOME[0].image,
    imageRemote: 'upload/image/201801/25/0422219086.jpg',
    listIn: '/news/video',
    isVideo: true,
  },
  {
    id: '36',
    titleKey: 'news_video_36_title',
    descKey: 'news_video_36_desc',
    bodyKey: 'news_video_36_body',
    date: '2018-01-26',
    image: blt('upload/image/201801/26/0218161024.jpg'),
    imageRemote: 'upload/image/201801/26/0218161024.jpg',
    listIn: '/news/video',
    isVideo: true,
    videoSrc: 'http://www.bltvip.com/upload/video/201801/26/0218412387.mp4',
  },
]
