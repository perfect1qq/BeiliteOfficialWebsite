/**
 * 首页 — 合作客户板块
 *
 * 原站展示 30+ 个品牌客户 Logo，横向滚动，
 * 此处用网格布局展示核心客户名单。
 */
const PARTNERS = [
  '中国联通', '国美电器', '森马', '福田汽车', '大唐国际',
  '突破电气', '中国农业银行', '绫致时装', '京东', '庆华集团',
  '百世汇通', '包钢集团', '北京奔驰', '碧桂园', '宾堡',
  '当当网', '东风汽车', '国家电网', '康明斯', '乐视汽车',
  '乐友', '李宁', '力帆时骏', '拼多多', '三丰智能',
  '森马服饰', '施耐德电器', '顺丰速运', '同仁堂', '万达集团',
  '雪花啤酒', '中粮集团',
]

export default function CustomersSection() {
  return (
    <div className="box3Bg">
      <div className="container">
        <div className="boxTith2" style={{ textAlign: 'center', marginBottom: '40px' }}>
          合作客户 <span className="boxTitEn" style={{ display: 'block', marginTop: '5px' }}>
            Cooperative customers
          </span>
        </div>

        <ul className="box3Item">
          {PARTNERS.map((name) => (
            <li key={name}>
              <div className="box3Name">{name}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
