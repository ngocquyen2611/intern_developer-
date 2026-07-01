import React from 'react';

// ========================================================
// PHẦN 1: NƠI CHỨA DỮ LIỆU (DATABASE GIẢ LẬP)
// Toàn bộ nội dung trang web nằm ở đây, muốn thêm bớt chỉ cần sửa ở đây
// ========================================================

const HOMEPAGE_DATA = [
  {
    type: 'banner',
    subTitle: 'Mới ra mắt',
    title: 'Chì kẻ môi LV Crayon',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
  },
  {
    type: 'grid',
    title: 'Khám phá các sáng tạo độc đáo của Louis Vuitton',
    products: [
      { name: 'Túi xách nữ thời trang', price: '95.000.000 ₫', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=500&q=80' },
      { name: 'Ví và phụ kiện bằng da cho nữ', price: '22.500.000 ₫', image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=500&q=80' },
      { name: 'Phụ kiện kính mắt cao cấp', price: '18.000.000 ₫', image: 'https://vn.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-attitude--Z0259U_PM1_Worn%20view.png?wid=490&hei=490' },
      { name: 'Giày nữ đế xuồng siêu nhẹ', price: '31.500.000 ₫', image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=500&q=80' },
      { name: 'another product', price: 'vo gia ₫', image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=500&q=80' },
      
    ]
  },
  {
    type: 'banner',
    subTitle: 'Dành cho nữ',
    title: 'Bộ sưu tập Vivienne Fashionista',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    type: 'grid',
    title: 'Bộ sưu tập Vivienne Fashionista Sport',
    products: [
      { name: 'Phụ Kiện Treo Túi Vivienne Cheerleader', price: '46.500.000 ₫', image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=500&q=80' },
      { name: 'Phụ Kiện Treo Túi Vivienne Surf', price: '46.500.000 ₫', image: 'https://images.unsplash.com/photo-1534653299134-96a171b61581?auto=format&fit=crop&w=500&q=80' },
      { name: 'Phụ Kiện Treo Túi Vivienne Yoga', price: '46.500.000 ₫', image: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&w=500&q=80' },
      { name: 'Phụ Kiện Treo Túi Vivienne Golf', price: '46.500.000 ₫', image: 'https://images.unsplash.com/photo-1576243345690-4e4b79b63288?auto=format&fit=crop&w=500&q=80' },
    ]
  },
  {
    type: 'banner',
    subTitle: 'Ra mắt trước trực tuyến',
    title: 'Sports Capsule',
    image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=1200&q=80',
  }
];

// ========================================================
// PHẦN 2: ĐỊNH NGHĨA CÁC KHUÔN ĐÚC (COMPONENTS)
// Viết duy nhất 1 lần, tái sử dụng mãi mãi
// ========================================================

// 1. Khuôn đúc cho khối Banner lớn
function CampaignBanner({ subTitle, title, image }) {
  return (
    <section style={{ position: 'relative', width: '100%', height: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', paddingBottom: '60px', color: '#fff' }}>
      <img src={image} alt={title} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }} />
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', fontFamily: 'sans-serif' }}>
        <div style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '10px' }}>{subTitle}</div>
        <h2 style={{ fontSize: '36px', fontWeight: '400', marginBottom: '20px' }}>{title}</h2>
        <button style={{ backgroundColor: 'transparent', color: '#fff', border: '1px solid #fff', padding: '12px 35px', fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', cursor: 'pointer', borderRadius: '25px' }}>Khám phá thêm</button>
      </div>
    </section>
  );
}

// 2. Khuôn đúc cho khối Lưới Sản Phẩm (Grid 4 cột)
function ProductGrid({ title, products }) {
  return (
    <section style={{ padding: '60px 40px', backgroundColor: '#fff', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h2 style={{ fontSize: '26px', fontWeight: '400', color: '#000', marginBottom: '40px', letterSpacing: '1px' }}>{title}</h2>
      
      {/* Vòng lặp map tự động sinh ra 4 cột dựa trên số lượng sản phẩm truyền vào */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px' }}>
        {products.map((item, index) => (
          <div key={index} style={{ textAlign: 'left', cursor: 'pointer' }}>
            <div style={{ backgroundColor: '#f6f6f6', aspectRatio: '1 / 1', marginBottom: '15px', overflow: 'hidden' }}>
              <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ fontSize: '14px', color: '#000', fontWeight: '400', marginBottom: '8px', lineHeight: '1.4' }}>{item.name}</div>
            <div style={{ fontSize: '14px', color: '#555', fontWeight: '300' }}>{item.price}</div>
          </div>
        ))}
      </div>
      
      <button style={{ backgroundColor: 'transparent', color: '#000', border: '1px solid #000', padding: '12px 40px', fontSize: '12px', borderRadius: '25px', textTransform: 'uppercase', letterSpacing: '1.5px', cursor: 'pointer' }}>Khám phá thêm</button>
    </section>
  );
}

// ========================================================
// PHẦN 3: ĐIỀU PHỐI VÀ HIỂN THỊ TRANG WEB (APP)
// ========================================================
export default function App() {
  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      
      {/* THANH MENU CỐ ĐỊNH */}
      <header style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255,255,255,0.9)', color: '#000', zIndex: 1000, borderBottom: '1px solid #e5e5e5', fontSize: '20px', letterSpacing: '4px', fontWeight: 'bold' }}>
        LOUIS VUITTON
      </header>

      <div style={{ paddingTop: '70px' }}>
        {/* VÒNG LẶP THẦN THÁNH: Tự động đọc mảng dữ liệu HOMEPAGE_DATA để quét layout */}
        {HOMEPAGE_DATA.map((block, index) => {
          if (block.type === 'banner') {
            return (
              <CampaignBanner 
                key={index}
                subTitle={block.subTitle}
                title={block.title}
                image={block.image}
              />
            );
          } else if (block.type === 'grid') {
            return (
              <ProductGrid 
                key={index}
                title={block.title}
                products={block.products}
              />
            );
          }
          return null;
        })}
      </div>

    </div>
  );
}