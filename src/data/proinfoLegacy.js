/**
 * 旧站 /proinfo/*.html 与首页产品卡片 ID 对应 → 本站路由 + 图集（官网 upload 路径）
 */
export const PROINFO_TO_PATH = {
  55: '/products/stereo',
  15: '/products/heavy',
  14: '/products/panel',
  12: '/products/attic',
  37: '/products/through',
  38: '/products/cantilever',
  46: '/products/narrow',
  51: '/products/shuttle',
  47: '/products/platform',
  16: '/products/medium',
  39: '/products/drawer',
  50: '/products/fluent',
}

/** 立体库货架 proinfo/55 官网图集 */
export const PROINFO_55_GALLERY = [
  'upload/image/201807/25/0337183315.jpg',
  'upload/image/201810/28/1035199097.jpg',
  'upload/image/201810/28/1035268774.jpg',
  'upload/image/201810/28/1036298863.jpg',
  'upload/image/201810/28/1036360700.jpg',
  'upload/image/201811/01/0401025006.jpg',
  'upload/image/201811/01/0401127832.jpg',
  'upload/image/201811/01/0401423840.jpg',
  'upload/image/201811/01/0401470546.jpg',
]

/** 立体库货架详情（摘自官网 proinfo/55） */
export const PROINFO_55_DETAIL_HTML = `
<p>立体库也称为高架库或高架仓库，一般是指采用几层、十几层乃至几十层高的货架储存单元货物，用相应的物料搬运设备进行货物入库和出库作业的仓库。由于这类仓库能充分利用空间储存货物，故常形象地将其称为「立体仓库」。</p>
<h4>产品详情</h4>
<p><strong>自动化立体库基本由以下部分组成：</strong><br/>
1、高层货架：用于存储货物的钢结构。目前主要有焊接式货架和组合式货架两种基本形式。<br/>
2、托盘（货箱）：用于承载货物的器具，亦称工位器具。<br/>
3、巷道堆垛机：用于自动存取货物的设备。按结构形式分为单立柱和双立柱两种基本形式；按服务方式分为直道、弯道和转移车三种基本形式。<br/>
4、输送机系统：立体库的主要外围设备，负责将货物运送到堆垛机或从堆垛机将货物移走。<br/>
5、AGV 系统：即自动导向小车。<br/>
6、自动控制系统：驱动自动化立体库系统各设备的自动控制系统。<br/>
7、库存信息管理系统（WMS）：亦称中央计算机管理系统。</p>
<p>自动化立体库库应用范围很广，几乎遍布所有行业。在我国，自动化高架仓库应用的行业主要有机械、冶金、化工、航空航天、电子、医药、图书、食品加工、烟草、印刷、配送中心、机场、港口等。</p>
`
