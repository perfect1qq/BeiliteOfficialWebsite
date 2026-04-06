/**
 * 与 http://www.bltvip.com 首页一致的产品 / 合作客户 / 轮播图路径（资源在 public/bltvip）
 */
import { blt } from '../utils/bltvipAsset'

export const BLT_BANNERS = [
  blt('upload/image/201810/31/0946419831.jpg'),
  blt('upload/image/201810/31/0946532578.jpg'),
  blt('upload/image/201810/31/0231310007.jpg'),
]

export const BLT_LOGO = blt('upload/image/201803/23/1155594161.png')

export const BLT_ICONS = {
  box1Tit: blt('images/box1TitIco.png'),
  box2Tit: blt('images/box2TitIco.png'),
  box4More: blt('images/box4More.png'),
  helpTech: blt('upload/image/201801/25/0250193508.png'),
  helpCases: blt('upload/image/201801/25/0250316657.png'),
  helpBrochure: blt('upload/image/201801/25/0250424097.png'),
}

const partnerRows = [
  ['中国联通', 'upload/image/201801/25/0247320014.jpg'],
  ['国美电器', 'upload/image/201801/25/0247431138.jpg'],
  ['森马', 'upload/image/201801/25/0247545447.jpg'],
  ['福田汽车', 'upload/image/201801/25/0248058666.jpg'],
  ['大唐国际', 'upload/image/201801/25/0248153945.jpg'],
  ['突破电气', 'upload/image/201801/25/0248297372.jpg'],
  ['中国农业银行', 'upload/image/201801/25/0248393942.jpg'],
  ['绫致时装', 'upload/image/201810/29/1050131771.png'],
  ['京东', 'upload/image/201810/29/1049322318.png'],
  ['庆华集团', 'upload/image/201810/29/1049033312.png'],
  ['百世汇通', 'upload/image/201810/29/1036565689.png'],
  ['包钢集团', 'upload/image/201810/29/1037143947.png'],
  ['北京奔驰', 'upload/image/201810/29/1037317650.png'],
  ['碧桂园', 'upload/image/201810/29/1037471482.png'],
  ['宾堡', 'upload/image/201810/29/1038001546.png'],
  ['大唐国际', 'upload/image/201810/29/1038127161.png'],
  ['当当网', 'upload/image/201810/29/1039239473.png'],
  ['东风汽车', 'upload/image/201810/29/1039370954.png'],
  ['福田汽车', 'upload/image/201810/29/1039516166.png'],
  ['国家电网', 'upload/image/201810/29/1040056990.png'],
  ['国美电器', 'upload/image/201810/29/1040191445.png'],
  ['京东', 'upload/image/201810/29/1040325525.png'],
  ['康明斯', 'upload/image/201810/29/1040435444.png'],
  ['乐视汽车', 'upload/image/201810/29/1040573430.png'],
  ['乐友', 'upload/image/201810/29/1041093980.png'],
  ['李宁户外体育用品', 'upload/image/201810/29/1041241017.png'],
  ['力帆时骏', 'upload/image/201810/29/1041435995.png'],
  ['丽景湾国际酒店', 'upload/image/201810/29/1042036141.png'],
  ['绫致时装', 'upload/image/201810/29/1042212317.png'],
  ['拼多多', 'upload/image/201810/29/1042401825.png'],
  ['三丰智能', 'upload/image/201810/29/1042568757.png'],
  ['森马服饰', 'upload/image/201810/29/1044379952.png'],
  ['施耐德电器', 'upload/image/201810/29/1044588607.png'],
  ['顺丰速运', 'upload/image/201810/29/1045151665.png'],
  ['同仁堂', 'upload/image/201810/29/1045330896.png'],
  ['万达集团', 'upload/image/201810/29/1045476886.png'],
  ['雪花啤酒', 'upload/image/201810/29/1046020846.png'],
  ['中国联通', 'upload/image/201810/29/1046151006.png'],
  ['农业银行', 'upload/image/201810/29/1046306676.png'],
  ['中粮集团', 'upload/image/201810/29/1047282031.png'],
]

export const BLT_PARTNERS = partnerRows.map(([name, p]) => ({
  name,
  image: blt(p),
  remotePath: p,
}))

/** 首页产品条顺序与官网 box2List 一致 */
export const BLT_HOME_PRODUCTS = [
  { nameKey: 'pro_stereo', descKey: 'pro_stereo_desc', path: '/products/stereo', rel: 'upload/image/201807/25/0337082733.jpg' },
  { nameKey: 'pro_heavy', descKey: 'pro_heavy_desc', path: '/products/heavy', rel: 'upload/image/201802/03/0407276863.jpg' },
  { nameKey: 'pro_panel', descKey: 'pro_panel_desc', path: '/products/panel', rel: 'upload/image/201802/03/0358433605.jpg' },
  { nameKey: 'pro_attic', descKey: 'pro_attic_desc', path: '/products/attic', rel: 'upload/image/201802/03/0402014936.jpg' },
  { nameKey: 'pro_through', descKey: 'pro_through_desc', path: '/products/through', rel: 'upload/image/201802/27/0112348018.jpg' },
  { nameKey: 'pro_cantilever', descKey: 'pro_cantilever_desc', path: '/products/cantilever', rel: 'upload/image/201802/27/0120050623.jpg' },
  { nameKey: 'pro_narrow', descKey: 'pro_narrow_desc', path: '/products/narrow', rel: 'upload/image/201802/27/0836246120.jpg' },
  { nameKey: 'pro_shuttle', descKey: 'pro_shuttle_desc', path: '/products/shuttle', rel: 'upload/image/201802/27/0918163430.jpg' },
  { nameKey: 'pro_platform', descKey: 'pro_platform_desc', path: '/products/platform', rel: 'upload/image/201802/27/0848588586.jpg' },
  { nameKey: 'pro_medium', descKey: 'pro_medium_desc', path: '/products/medium', rel: 'upload/image/201802/27/0950457799.jpg' },
  { nameKey: 'pro_drawer', descKey: 'pro_drawer_desc', path: '/products/drawer', rel: 'upload/image/201802/27/0133409042.jpg' },
  { nameKey: 'pro_fluent', descKey: 'pro_fluent_desc', path: '/products/fluent', rel: 'upload/image/201802/27/0913152158.jpg' },
].map(({ rel, ...rest }) => ({ ...rest, image: blt(rel), remotePath: rel }))

export const BLT_NEWS_HOME = [
  {
    title: '智能高效电商分拣系统助推其快速发展',
    desc: '最近几年，国内电商呈井喷式发展，电商的这样发展，也促使国内消费流突飞猛进增长，同时也带动巨大的物流模式变革。而且客户对物流的效率产生了极高的要求。更为重要的是，..',
    image: blt('upload/image/201801/25/0422219086.jpg'),
  },
  {
    title: '电商与物流互促试点政策将推向全国',
    desc: '日前从商务部获悉，电子商务与物流快递协同发展试点3年来已经形成一批可复制推广的经验，下一步，将在进一步总结提炼好的经验、作法的基础之上，出台相关政策文件，并向全国..',
    image: blt('upload/image/201801/25/0421395814.jpg'),
  },
  {
    title: '智能高效电商分拣系统助推其快速发展',
    desc: '最近几年，国内电商呈井喷式发展，电商的这样发展，也促使国内消费流突飞猛进增长，同时也带动巨大的物流模式变革。而且客户对物流的效率产生了极高的要求。更为重要的是，..',
    image: blt('upload/image/201801/25/0421167546.jpg'),
  },
]

export const BLT_WECHAT_QR = blt('upload/image/erweima/2353273286.png')

export const BLT_ONLINE_ICONS = {
  consult: blt('images/onlineico1.png'),
  phone: blt('images/onlineico2.png'),
  wechat: blt('images/onlineico3.png'),
  top: blt('images/onlineico4.png'),
}

export const BLT_FOOTER_TEL = blt('images/tel2.png')
