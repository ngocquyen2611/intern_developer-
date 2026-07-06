import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductGrid({ title, products }) {
  return (
    <>
      <style>
        {`
          .lv-product-container {
            padding: 60px 40px;
            max-width: 1400px;
            margin: 0 auto;
          }
          .lv-grid {
            display: grid;
            /* Trên Máy tính (Desktop): Chia chuẩn 4 cột */
            grid-template-columns: repeat(4, 1fr); 
            gap: 40px 20px;
          }

          /* TRÊN MÁY TÍNH BẢNG (Tablet - Dưới 1024px) */
          @media (max-width: 1024px) {
            .lv-product-container {
              padding: 40px 24px;
            }
            .lv-grid {
              /* Hạ xuống còn 3 cột để ảnh không bị thu nhỏ quá mức */
              grid-template-columns: repeat(3, 1fr);
              gap: 30px 16px;
            }
          }

          /* TRÊN ĐIỆN THOẠI (Mobile - Dưới 640px) */
          @media (max-width: 640px) {
            .lv-product-container {
              padding: 30px 16px;
            }
            .lv-grid {
              /* Điện thoại chia làm 2 cột hàng hiệu mỏng nhẹ, vừa khít mắt nhìn */
              grid-template-columns: repeat(2, 1fr);
              gap: 24px 12px;
            }
            .lv-product-title {
              font-size: 18px !important;
              margin-bottom: 24px !important;
              letter-spacing: 1px !important;
            }
            .lv-card-name {
              font-size: 13px !important;
            }
            .lv-card-price {
              font-size: 12px !important;
            }
          }
        `}
      </style>

      <div className="lv-product-container">
        
        {/* Tiêu đề của Grid (Ví dụ: SẢN PHẨM MỚI NHẤT) */}
        <h2 className="lv-product-title" style={{
          textAlign: 'center', fontSize: '22px', fontWeight: '400',
          letterSpacing: '3px', margin: '0 0 40px 0', textTransform: 'uppercase'
        }}>
          {title}
        </h2>

        <div className="lv-grid">
          {products && products.map((product, index) => (
            /* Dùng Link để chuyển hướng sang trang chi tiết sản phẩm không cần load lại trang */
            <Link 
              to={`/product/${product.id || index}`} 
              key={product.id || index} 
              style={{ display: 'flex', flexDirection: 'column', gap: '12px', cursor: 'pointer', textDecoration: 'none' }}
            >
              
              {/* Khung ảnh giữ nguyên tỉ lệ vuông 1:1 đặc trưng */}
              <div style={{ width: '100%', backgroundColor: '#f6f6f6', aspectRatio: '1 / 1', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>

              {/* Thông tin sản phẩm chữ mảnh tinh tế */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <h3 className="lv-card-name" style={{ margin: 0, fontSize: '14px', fontWeight: '400', color: '#000', lineHeight: '1.4' }}>
                  {product.name}
                </h3>
                <span className="lv-card-price" style={{ fontSize: '14px', color: '#555', fontWeight: '300' }}>
                  {product.price}
                </span>
              </div>
              
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}