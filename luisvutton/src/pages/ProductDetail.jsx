import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function ProductDetail() {
  // Lấy dữ liệu được truyền sang từ thẻ <Link> ở trang chủ
  const location = useLocation();
  const product = location.state?.product;

  // Xử lý trường hợp người dùng gõ trực tiếp URL mà không click từ trang chủ
  if (!product) {
    return (
      <div style={{ padding: '120px 40px', textAlign: 'center', minHeight: '60vh', fontFamily: "'Montserrat', sans-serif" }}>
        <h2>Không tìm thấy thông tin sản phẩm!</h2>
        <Link to="/" style={{ textDecoration: 'underline', color: '#000' }}>Quay lại trang chủ</Link>
      </div>
    );
  }

  return (
    <div style={{ 
      padding: '60px 40px', 
      maxWidth: '1200px', 
      margin: '0 auto', 
      display: 'flex', 
      flexWrap: 'wrap',
      gap: '60px',
      fontFamily: "'Montserrat', sans-serif",
      color: '#19110b'
    }}>
      {/* KHỐI TRÁI: HÌNH ẢNH */}
      <div style={{ flex: '1 1 500px' }}>
        <img 
          src={product.image} 
          alt={product.name} 
          style={{ width: '100%', height: 'auto', objectFit: 'cover', backgroundColor: '#f6f5f3' }} 
        />
      </div>

      {/* KHỐI PHẢI: THÔNG TIN CHI TIẾT */}
      <div style={{ flex: '1 1 400px', paddingTop: '20px' }}>
        <p style={{ fontSize: '12px', color: '#777', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>
          Sản phẩm mới
        </p>
        <h1 style={{ fontSize: '28px', fontWeight: '400', margin: '0 0 16px 0' }}>
          {product.name}
        </h1>
        <p style={{ fontSize: '20px', color: '#555', marginBottom: '40px' }}>
          {product.price}
        </p>

        {/* Nút Thêm vào giỏ hàng */}
        <button style={{
          width: '100%',
          padding: '18px',
          backgroundColor: '#000',
          color: '#fff',
          border: 'none',
          borderRadius: '30px',
          fontSize: '15px',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'opacity 0.2s',
          marginBottom: '24px'
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          Thêm vào giỏ hàng
        </button>

        {/* Thông tin phụ */}
        <ul style={{ fontSize: '14px', color: '#555', lineHeight: '1.8', paddingLeft: '20px' }}>
          <li>Miễn phí giao hàng tiêu chuẩn.</li>
          <li>Đổi trả trong vòng 30 ngày.</li>
          <li>Sản phẩm được đóng gói trong hộp quà Louis Vuitton đặc trưng.</li>
        </ul>
      </div>
    </div>
  );
}