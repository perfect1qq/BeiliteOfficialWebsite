import React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

/**
 * 产品中心 — 支持多语言分类与内容
 */
const allProductsDatabase = [
  { cat: '/products/stereo',    nameKey: 'pro_stereo',      descKey: 'pro_stereo_desc',     image: 'https://images.unsplash.com/photo-1565891741441-64926e441838?q=80&w=600' },
  { cat: '/products/heavy',     nameKey: 'pro_heavy',       descKey: 'pro_heavy_desc',      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600' },
  { cat: '/products/panel',     nameKey: 'pro_panel',       descKey: 'pro_panel_desc',      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600' },
  { cat: '/products/attic',     nameKey: 'pro_attic',       descKey: 'pro_attic_desc',      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=600' },
  { cat: '/products/through',   nameKey: 'pro_through',     descKey: 'pro_through_desc',    image: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=600' },
  { cat: '/products/cantilever',nameKey: 'pro_cantilever',  descKey: 'pro_cantilever_desc', image: 'https://images.unsplash.com/photo-1605280263929-1c42c62ef169?q=80&w=600' },
  { cat: '/products/narrow',    nameKey: 'pro_narrow',      descKey: 'pro_narrow_desc',     image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2836?q=80&w=600' },
  { cat: '/products/shuttle',   nameKey: 'pro_shuttle',     descKey: 'pro_shuttle_desc',    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600' },
  { cat: '/products/platform',  nameKey: 'pro_platform',    descKey: 'pro_platform_desc',   image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=600' },
  { cat: '/products/medium',    nameKey: 'pro_medium',      descKey: 'pro_medium_desc',     image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600' },
  { cat: '/products/drawer',    nameKey: 'pro_drawer',      descKey: 'pro_drawer_desc',     image: 'https://images.unsplash.com/photo-1565891741441-64926e441838?q=80&w=600' },
  { cat: '/products/fluent',    nameKey: 'pro_fluent',      descKey: 'pro_fluent_desc',     image: 'https://images.unsplash.com/photo-1605280263929-1c42c62ef169?q=80&w=600' },
  { cat: '/products/accessory', nameKey: 'pro_accessory',   descKey: 'pro_accessory_desc',  image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2836?q=80&w=600' },
];

export default function Products() {
  const location = useLocation();
  const { t } = useTranslation();
  
  const filteredProducts = location.pathname === '/products' || location.pathname === '/products/'
    ? allProductsDatabase.filter(p => p.cat !== '/products/accessory') // 不显示辅助设备
    : allProductsDatabase.filter(p => p.cat === location.pathname);

  return (
    <>
      <Helmet>
        <title>{t('nav_products')}_倍力特货架</title>
      </Helmet>
      
      <div className="proList">
        {filteredProducts.map((pro, idx) => (
          <div key={idx} className="proItem">
            <div className="proImg">
               <img src={pro.image} alt={t(pro.nameKey)} loading="lazy" decoding="async" />
               <div className="proTit">
                 <strong>{t(pro.nameKey)}</strong>
                 <p>{t(pro.descKey)}</p>
               </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
