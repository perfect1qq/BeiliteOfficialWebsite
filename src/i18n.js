import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

/**
 * 全站中英文多语言字典 (i18n)
 * 为倍力特官网提供 1:1 对应的中英文翻译映射。
 */
const resources = {
  zh: {
    translation: {
      // --- 导航与布局 ---
      "nav_home": "首页",
      "nav_about": "关于倍力特",
      "nav_news": "新闻中心",
      "nav_products": "倍力特产品",
      "nav_tech": "技术服务",
      "nav_cases": "工程案例",
      "nav_brochure": "电子宣传册",
      "nav_contact": "联系我们",
      "footer_copy": "版权所有：武汉倍力特物流装备有限公司",
      "footer_tech": "网站技术支持：千助科技",
      "bread_pos": "您的当前位置：",
      "bread_home": "首页",
      
      // --- 通用按钮/标签 ---
      "btn_view_more": "了解更多",
      "btn_read_more": "阅读全文 ▸",
      "btn_view_all_news": "🌐 查看更多新闻",
      "msg_title": "请您留言",
      "msg_submit": "提交",
      "msg_sending": "发送中...",
      "msg_content_placeholder": "请在此输入留言内容，我们会尽快与您联系。（必填）",
      "msg_phone_placeholder": "联系方式（电话/微信/QQ/邮箱）",

      // --- 首页：公司介绍板块 ---
      "home_about_title": "公司介绍",
      "home_about_intro_p1": "武汉倍力特物流装备有限公司位于武汉市蔡甸区香炉山工业园，大型生产厂家，拥有各类仓储产品生产设备，从冷热卷板的纵剪，通过型材轧机，高精度专用货架轧机，数控冲压，焊接到静电粉末自动喷塑流水线等多条生产线，形成一套完整的生产体系。",
      "home_about_intro_p2": "倍力特货架以其卓越的品质，领先的技术，独特的设计，实用的功能，合理的价格，以各种方式为广大新老客商提供满意的产品与优质的服务。",
      "stat_exp_num": "20年",
      "stat_exp_desc": "货架行业经验，倍力特只专注于货架制造",
      "stat_area_num": "16000㎡",
      "stat_area_desc": "大型生产车间，拥有现代化生产基地配备各类先进生产设备，是华中地区最大的生产厂家之一",
      "stat_tech_num": "雄厚专业",
      "stat_tech_desc": "实力雄厚的技术研发团队只为更理想的产品与更周到的服务",
      "stat_global_num": "供应全球",
      "stat_global_desc": "多个国家地区并致力成为国际一流的货架研发型生产企业",

      // --- 首页：产品板块 ---
      "home_products_title": "倍力特产品",
      "pro_stereo": "立体库货架",
      "pro_stereo_desc": "测量库房后，按需定制",
      "pro_heavy": "重型横梁式货架",
      "pro_heavy_desc": "按实际要求订制",
      "pro_panel": "重型层板式货架",
      "pro_panel_desc": "按实际要求订制",
      "pro_attic": "阁楼货架",
      "pro_attic_desc": "测量库房后，按需定制",
      "pro_through": "贯通货架",
      "pro_through_desc": "测量库房后，按需定制",
      "pro_cantilever": "悬臂货架",
      "pro_cantilever_desc": "按实际要求订制",
      "pro_narrow": "窄巷道货架",
      "pro_narrow_desc": "测量库房后，按需定制",
      "pro_shuttle": "穿梭式货架",
      "pro_shuttle_desc": "测量库房后，按需定制",
      "pro_platform": "钢结构平台",
      "pro_platform_desc": "测量库房后，按需定制",
      "pro_medium": "中型货架",
      "pro_medium_desc": "标准尺寸2000*600*2000*4层",
      "pro_drawer": "抽屉式货架",
      "pro_drawer_desc": "按实际要求订制",
      "pro_fluent": "流利式货架",
      "pro_fluent_desc": "按实际要求定制",
      "pro_accessory": "仓储笼/周转箱",
      "pro_accessory_desc": "辅助物流存储设备",

      // --- 首页：底部帮助板块 ---
      "help_title": "是否需要更多帮助？",
      "help_desc": "20年行业经验，倍力特只专注于货架制造！大型生产厂家，拥有各类仓储产品生产设备。为您提供专业的测量、设计、制作、安装及售后一站式服务。",
      
      // --- 分类名 (Sidebar/Menu) ---
      "cat_intro": "公司简介",
      "cat_culture": "企业文化",
      "cat_philosophy": "经营理念",
      "cat_structure": "组织架构",
      "cat_honor": "资质荣誉",
      "cat_report": "企业报道",
      "cat_video": "新闻视频",
      "cat_racking": "仓储货架",
      "cat_accessory": "辅助设备",
      "cat_factory": "厂区实物图",
      "cat_clients": "合作客户",
      "cat_services": "服务介绍",
      "cat_download": "宣传册下载",
      "cat_message": "联系方式 & 留言",

      // --- 关于我们 子页面 ---
      "about_culture_title": "企业文化",
      "about_culture_vision": "企业愿景： 致力成为国际一流的货架研发型生产企业。",
      "about_culture_purpose": "企业宗旨： 为客户创造价值，为员工创造机会，为社会创造效益。",
      "about_culture_strategy": "经营策略： 以质量求生存，以信誉求发展，以服务求共赢。",
      
      "about_philosophy_title": "经营理念",
      "about_philosophy_p1": "倍力特货架始终坚持“匠心智造，储联天下”的核心价值观。我们相信，通过卓越的设计规划和严谨的生产工艺，可以为每一位客户提供最理想的物料存储方案。",
      "about_philosophy_p2": "我们的团队始终以专业、专注、负责的态度，参与到每一个项目的从方案设计到安装售后全过程。",

      "about_structure_title": "组织架构",
      "about_structure_p1": "倍力特物流装备拥有一套完善的现代化管理体系，涵盖：技术研发中心、生产管理部、工程项目部、海外贸易部及国内销售中心。确保每一个订单都能高效、精准地完成交付。",

      "about_honor_title": "资质荣誉",
      "about_honor_p1": "公司已通过 ISO9001 质量管理体系认证和 ISO14001 环境管理体系认证，并在行业内获得多项国家级专利及荣誉奖项。连续多年被评为“守合同重信用单位”。",

      "about_profile_title": "公司简介",

      // --- 新闻/案例 详情 ---
      "news_1_title": "倍力特：深耕仓储货架行业，致力智造精品",
      "news_1_desc": "作为华中地区领先的货架生产企业，倍力特始终坚持创新驱动，通过引入全自动化生产线...",
      "news_2_title": "智能高效物流系统论坛在汉举行，倍力特受邀参加",
      "news_2_desc": "近日，2024智造物流高峰论坛在武汉正式开幕。倍力特总工程师在会上分享了专题报告...",
      "news_video_1_title": "倍力特工厂自动化生产线实录视频",
      "news_video_1_desc": "点击观看倍力特生产工厂的一线操作流程，见证高精度货架的诞生过程。",
      "news_video_1_body": "本视频展示武汉倍力特物流装备有限公司蔡甸生产基地的型材轧制、焊接与喷塑等环节。我们采用数控冷弯成型与静电粉末喷涂工艺，保障货架承载与涂层耐久。如需实地参观或技术交流，欢迎通过网站留言或电话联系。",

      "news_article_1_title": "智能高效电商分拣系统助推其快速发展",
      "news_article_1_desc": "最近几年，国内电商呈井喷式发展，电商的这样发展，也促使国内消费流突飞猛进增长，同时也带动巨大的物流模式变革。而且客户对物流的效率产生了极高的要求。更为重要的是，..",
      "news_article_1_body": "随着电商订单碎片化、SKU 激增，传统平面仓已难以满足高频分拣与准确率要求。倍力特针对电商物流中心推出高密度存储与柔性拣选相结合的货架体系，包括窄巷道货架、流利式拣选区与钢结构平台组合方案。\n\n我们在湖北及周边地区多个项目中验证了“立体存储 + 波次拣选”的落地效果：同等面积下库容显著提升，补货动线更短，差错率下降。若您正在规划新建或改造电商仓，可预约工程师上门测量与方案论证。",

      "news_article_2_title": "电商与物流互促试点政策将推向全国",
      "news_article_2_desc": "日前从商务部获悉，电子商务与物流快递协同发展试点3年来已经形成一批可复制推广的经验，下一步，将在进一步总结提炼好的经验、作法的基础之上，出台相关政策文件，并向全国..",
      "news_article_2_body": "政策层面持续推动电商与快递协同，为仓储装备企业带来标准化、绿色化、智能化的新要求。倍力特在产品设计中注重可拆装结构、环保粉末涂料与可扩展单元，便于客户随业务增长分期扩容。\n\n公司技术服务团队可配合您解读当地产业政策与园区规范，在方案阶段预留消防通道、荷载与地坪承载等关键边界条件，减少后期整改成本。",

      "news_article_3_title": "智能仓储与精益管理融合趋势观察",
      "news_article_3_desc": "在制造业与流通企业降本增效压力下，货架系统正从“单纯存放”走向与 WMS、自动化设备深度协同。倍力特持续投入结构优化与安装标准化..",
      "news_article_3_body": "精益管理强调节拍、可视与少浪费；货架作为库内基础设施，其布局直接影响拣货路径与盘点效率。我们建议在大中型配送中心优先梳理 ABC 分类与动线，再匹配横梁式、阁楼或穿梭式等形态。\n\n倍力特提供从测量、设计、制造到安装售后的全流程服务，典型案例覆盖食品、医药、汽配、电商等行业。欢迎索取与您行业相近的参考方案。",

      "date_prefix": "发布时间：",
      "btn_detail": "查看详情",

      // --- 工程案例 详情 ---
      "case_factory_1_title": "现代化货架生产车间实拍",
      "case_factory_2_title": "高精度数控冷弯成型线",
      "case_1_title": "中国联通仓储自动化项目",
      "case_2_title": "顺丰速运中转中心货架",

      "pro_detail_title": "产品说明",
      "pro_detail_body": "以上为该品类常规说明，具体承载、层数、表面处理与配件可按现场测量与荷载要求定制。欢迎留下库房尺寸与货物规格，由工程师为您出图报价。",
      "pro_detail_link": "图文详情（多图）",
      "pro_back_list": "返回产品列表",

      "broch_cover": "封皮",
      "broch_p1": "第1页",
      "broch_p2": "第2页",
      "broch_p3": "第3页",
      "broch_p4": "第4页",
      "broch_p5": "第5页",
      "broch_p6": "第6页",
      "broch_p7": "第7页",
      "broch_back_list": "返回宣传册目录",

      "news_video_36_title": "如何排除现场环境对EAS电子商品防盗天线的干扰",
      "news_video_36_desc": "现场视频讲解，帮助您了解安装与干扰排查要点。",
      "news_video_36_body": "本视频演示相关设备在现场环境下的典型干扰因素与处理思路。若您的项目涉及仓储安防与天线布置，可联系倍力特技术部获取货架与弱电配合方面的建议。",

      // --- 联系我们 详情 ---
      "con_address_label": "地 址：",
      "con_address_val": "武汉市蔡甸区香炉山工业园",
      "con_mobile_label": "手 机：",
      "con_mobile_val": "15171431996（曹经理）",
      "con_website_label": "网 址：",
      "con_phone_label": "电 话：",
      "con_scan": "扫一扫联系我们",
      "mes_tip": "感谢您对倍力特货架的关注！您的信息将实时推送至我们的内部派单系统，专属业务代表会尽快与您取得联系。",
      "mes_btn_submit": "立即提交留言",
      "mes_btn_reset": "重新填写",
      "mes_placeholder_content": "请输入您的仓储定制需求等留言内容（必填）",
      "mes_error_empty": "提示：留言内容和联系方式均为必填项！",
      "mes_success_msg": "留言提交成功，稍后将安排专人跟进！",

      // --- 宣传册 详情 ---
      "brochure_1_title": "2023 产品选型白皮书",
      "brochure_2_title": "自动化立体库建设指南",

      // --- 技术服务 详情 ---
      "service_design_title": "方案设计与库区规划",
      "service_design_p1": "我们有一只专业的测量与制图团队。可以通过客户提供的一份简单的草图或者实地免费登门丈量您的库区，给出最具安全、空间利用效率的 AUTO CAD 数据图纸方案。",
      "service_install_title": "上门安装与售后质保",
      "service_install_p1": "所有重型立库设备发往现场之后，我们将派遣专一的安全工程师与施工队伍进场进行标准作业，安装结束提供完备的验收与十年质保协议，确保放心使用。"
    }
  },
  en: {
    translation: {
      // --- Nav & Layout ---
      "nav_home": "Home",
      "nav_about": "About",
      "nav_news": "News",
      "nav_products": "Products",
      "nav_tech": "Service",
      "nav_cases": "Cases",
      "nav_brochure": "Brochure",
      "nav_contact": "Contact",
      "footer_copy": "Copyright: Wuhan Beilite Logistics Equipment Co., Ltd.",
      "footer_tech": "Tech Support: 1000zhu.com",
      "bread_pos": "Current Position: ",
      "bread_home": "Home",

      // --- Common Buttons/Labels ---
      "btn_view_more": "Learn More",
      "btn_read_more": "Read More ▸",
      "btn_view_all_news": "🌐 View More News",
      "msg_title": "Leave a Message",
      "msg_submit": "Submit",
      "msg_sending": "Sending...",
      "msg_content_placeholder": "Please enter your message here... (Required)",
      "msg_phone_placeholder": "Contact info (Phone/WeChat/QQ/Email)",

      // --- Home: About Us ---
      "home_about_title": "Introduction",
      "home_about_intro_p1": "Wuhan Beilite Logistics Equipment Co., Ltd. is located in Xianglushan Industrial Park, Wuhan. We are a large-scale manufacturer with complete production lines, from longitudinal slitting to high-precision roll forming and electrostatic powder coating.",
      "home_about_intro_p2": "With superior quality, leading technology, and unique design, Beilite provides professional storage solutions and excellent service to domestic and international clients.",
      "stat_exp_num": "20 Years",
      "stat_exp_desc": "Industry experience, focusing exclusively on racking manufacturing",
      "stat_area_num": "16000㎡+",
      "stat_area_desc": "Modern production workshop, one of the largest manufacturers in Central China",
      "stat_tech_num": "Professional",
      "stat_tech_desc": "Strong technical team dedicated to ideal products and service",
      "stat_global_num": "Global Supply",
      "stat_global_desc": "Serving multiple countries and striving to be a world-class racking enterprise",

      // --- Home: Products ---
      "home_products_title": "Products",
      "pro_stereo": "AS/RS System",
      "pro_stereo_desc": "Customized automated warehouse solutions",
      "pro_heavy": "Heavy Duty Racking",
      "pro_heavy_desc": "Tailor-made for pallet storage",
      "pro_panel": "Shelving System",
      "pro_panel_desc": "Heavy duty shelving for manual picking",
      "pro_attic": "Mezzanine Floor",
      "pro_attic_desc": "Double space with steel structure platform",
      "pro_through": "Drive-in Racking",
      "pro_through_desc": "High density storage for non-selective goods",
      "pro_cantilever": "Cantilever Racking",
      "pro_cantilever_desc": "Perfect for long or irregular shaped items",
      "pro_narrow": "VNA Racking",
      "pro_narrow_desc": "Very Narrow Aisle solutions for space saving",
      "pro_shuttle": "Radio Shuttle Racking",
      "pro_shuttle_desc": "Semi-automated high density storage",
      "pro_platform": "Steel Platform",
      "pro_platform_desc": "Custom steel structures for warehouse space",
      "pro_medium": "Medium Duty Shelving",
      "pro_medium_desc": "Standard size racking for light weights",
      "pro_drawer": "Mold/Drawer Racking",
      "pro_drawer_desc": "Heavy duty storage for industrial molds",
      "pro_fluent": "Flow Racking",
      "pro_fluent_desc": "First-in First-out gravity storage solution",
      "pro_accessory": "Wire Mesh Container",
      "pro_accessory_desc": "Supporting equipment for material handling",

      // --- Home: Help Section ---
      "help_title": "Need More Help?",
      "help_desc": "With 20 years of experience, Beilite provides professional measuring, design, manufacturing, and installation all in one station.",

      // --- Categories (Sidebar/Menu) ---
      "cat_intro": "Profile",
      "cat_culture": "Culture",
      "cat_philosophy": "Philosophy",
      "cat_structure": "Structure",
      "cat_honor": "Honor",
      "cat_report": "Reports",
      "cat_video": "Videos",
      "cat_racking": "Store Racking",
      "cat_accessory": "Equipment",
      "cat_factory": "Factory View",
      "cat_clients": "Global Clients",
      "cat_services": "Service Intro",
      "cat_download": "Brochure Download",
      "cat_message": "Contact Info",

      // --- About Us Sub-pages ---
      "about_culture_title": "Corporate Culture",
      "about_culture_vision": "Vision: Strive to become a world-class racking R&D and manufacturing enterprise.",
      "about_culture_purpose": "Purpose: Create value for customers, opportunities for employees, and benefits for society.",
      "about_culture_strategy": "Strategy: Survival by quality, development by reputation, win-win by service.",

      "about_philosophy_title": "Philosophy",
      "about_philosophy_p1": "Beilite Racking always adheres to the core value of 'Craftsmanship and Intelligent Manufacturing'. We believe that through excellent design and rigorous manufacturing processes, we can provide the most ideal storage solutions for every customer.",
      "about_philosophy_p2": "Our team always participates in the entire process from plan design to installation and after-sales with a professional, focused, and responsible attitude.",

      "about_structure_title": "Structure",
      "about_structure_p1": "Beilite Logistics Equipment has a perfect modern management system, including: R&D Center, Production Dept, Engineering Dept, Overseas Trade Dept, and Domestic Sales Center. Ensuring every order is delivered efficiently and accurately.",

      "about_honor_title": "Honors & Qualifications",
      "about_honor_p1": "The company has passed ISO9001 and ISO14001 certifications and has obtained multiple national patents and honorary awards in the industry. It has been rated as a 'Contract-abiding and Creditworthy Enterprise' for many years.",

      "about_profile_title": "Company Profile",

      // --- News/Cases Details ---
      "news_1_title": "Beilite: Deeply Cultivating Racking Industry",
      "news_1_desc": "As a leading manufacturer in Central China, Beilite insists on innovation and automated production lines...",
      "news_2_title": "Smart Logistics Forum Held in Wuhan, Beilite Invited",
      "news_2_desc": "The 2024 Smart Logistics Forum opened in Wuhan. Beilite shared report on AS/RS applications...",
      "news_video_1_title": "Beilite Factory Automated Production Line Video",
      "news_video_1_desc": "Watch the on-site operation of Beilite factory and witness the birth of high-precision racking.",
      "news_video_1_body": "This video shows roll forming, welding, and powder coating at our Caidian plant. We use CNC roll forming and electrostatic powder coating to ensure load capacity and finish durability. Contact us for a factory visit.",

      "news_article_1_title": "Smart Sorting Systems Boost E-commerce Growth",
      "news_article_1_desc": "Domestic e-commerce has grown rapidly, driving huge changes in logistics. Customers demand higher efficiency than ever...",
      "news_article_1_body": "Fragmented orders and more SKUs make traditional flat warehouses insufficient. Beilite provides high-density storage plus flexible picking, including narrow-aisle racking, carton flow areas, and mezzanine combinations.\n\nProjects in Hubei and nearby regions show higher capacity in the same footprint, shorter replenishment paths, and fewer errors. Ask our engineers for a site survey.",

      "news_article_2_title": "E-commerce & Logistics Pilot Policies to Expand Nationwide",
      "news_article_2_desc": "The Ministry of Commerce reports that three years of coordinated e-commerce and express pilots have produced replicable experience...",
      "news_article_2_body": "Policies push greener, smarter warehousing. Beilite designs demountable structures, eco-friendly powder coating, and scalable bays for phased expansion.\n\nOur team can align layouts with local regulations and fire access early in design to avoid costly changes later.",

      "news_article_3_title": "Smart Warehousing and Lean Operations",
      "news_article_3_desc": "Under cost pressure, racking is evolving from simple storage toward deeper integration with WMS and automation...",
      "news_article_3_body": "Lean operations need clear flow and visibility; layout drives pick paths and cycle counts. We suggest ABC analysis and flow design before choosing beam, mezzanine, or shuttle systems.\n\nBeilite offers survey, design, manufacturing, installation, and after-sales across food, pharma, auto parts, e-commerce, and more.",

      "date_prefix": "Release Date: ",
      "btn_detail": "View Details",

      // --- Engineering Cases Details ---
      "case_factory_1_title": "Modern Production Workshop",
      "case_factory_2_title": "High-precision Roll Forming Line",
      "case_1_title": "China Unicom AS/RS Project",
      "case_2_title": "SF Express Hub Racking Project",

      "pro_detail_title": "Product notes",
      "pro_detail_body": "Specifications above are typical; capacity, levels, finish, and accessories can be customized after site survey and load analysis. Leave your warehouse dimensions and pallet specs for a drawing and quote.",
      "pro_detail_link": "Details (gallery)",
      "pro_back_list": "Back to product list",

      "broch_cover": "Cover",
      "broch_p1": "Page 1",
      "broch_p2": "Page 2",
      "broch_p3": "Page 3",
      "broch_p4": "Page 4",
      "broch_p5": "Page 5",
      "broch_p6": "Page 6",
      "broch_p7": "Page 7",
      "broch_back_list": "Back to brochure index",

      "news_video_36_title": "Reducing environmental interference for EAS antennas",
      "news_video_36_desc": "Short on-site video on installation and interference checks.",
      "news_video_36_body": "This video explains typical interference factors and mitigation ideas. For warehouse security and antenna layout with racking projects, contact Beilite technical support.",

      // --- Contact Us Details ---
      "con_address_label": "Address: ",
      "con_address_val": "Xianglushan Industrial Park, Caidian, Wuhan",
      "con_mobile_label": "Mobile: ",
      "con_mobile_val": "+86 15171431996 (Mr. Cao)",
      "con_website_label": "Website: ",
      "con_phone_label": "Phone: ",
      "con_scan": "Scan to contact us",
      "mes_tip": "Thank you for your interest! Your message will be sent to our system, and our representative will contact you soon.",
      "mes_btn_submit": "Submit Message",
      "mes_btn_reset": "Reset Form",
      "mes_placeholder_content": "Please enter your warehouse needs (Required)",
      "mes_error_empty": "Tip: Message and contact info are both required!",
      "mes_success_msg": "Message submitted! We will contact you soon.",

      // --- Brochure Details ---
      "brochure_1_title": "2023 Product Selection White Paper",
      "brochure_2_title": "AS/RS Construction Guide",

      // --- Technical Service Details ---
      "service_design_title": "Design & Planning",
      "service_design_p1": "Our professional team can measure your site for free and provide the safest, most efficient space-utilization CAD drawings based on your requirements.",
      "service_install_title": "Installation & Warranty",
      "service_install_p1": "After delivery, we dispatch safety engineers and professional teams for on-site installation, followed by formal acceptance and a 10-year warranty agreement."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "zh",
    fallbackLng: "zh",
    interpolation: { escapeValue: false }
  });

export default i18n;
