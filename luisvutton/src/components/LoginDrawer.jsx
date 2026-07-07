import React, { useState } from 'react';

export default function LoginDrawer({ isOpen, onClose }) {
  // State ẩn/hiện mật khẩu
  const [showPassword, setShowPassword] = useState(false);

  // 1. Khai báo state để lưu trữ giá trị người dùng nhập vào
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 2. Hàm xử lý khi người dùng bấm "Đăng nhập"
  const handleLogin = (e) => {
    e.preventDefault(); // Ngăn trình duyệt reload lại trang khi submit form

    // Kiểm tra xem đã nhập đủ thông tin chưa
    if (!email || !password) {
      alert('Vui lòng nhập đầy đủ Tài khoản và Mật khẩu!');
      return;
    }

    // TẠM THỜI GIẢ LẬP ĐĂNG NHẬP (Mock Login)
    // Sau này bạn sẽ thay đoạn này bằng API gọi lên server (VD: axios.post(...))
    if (email === 'admin' && password === '123456') {
      alert('Đăng nhập thành công! Chào mừng admin.');
      
      // Xóa form và đóng bảng sau khi đăng nhập thành công
      setEmail('');
      setPassword('');
      onClose(); 
    } else {
      alert('Sai tài khoản hoặc mật khẩu! Vui lòng thử lại.');
    }
  };

  return (
    <>
      <style>
        {`
          .login-drawer-content::-webkit-scrollbar {
            width: 6px;
          }
          .login-drawer-content::-webkit-scrollbar-thumb {
            background-color: #ccc;
            border-radius: 4px;
          }
          .lv-input {
            width: 100%;
            padding: 14px 16px;
            font-size: 15px;
            border: 1px solid #ccc;
            border-radius: 4px;
            outline: none;
            box-sizing: border-box;
            font-family: inherit;
            background-color: #ffffff; 
            color: #000000;
            transition: border-color 0.2s;
          }
          .lv-input:focus {
            border-color: #000;
          }
          .lv-label {
            display: block;
            font-size: 14px;
            margin-bottom: 8px;
            color: #19110b;
          }
          .lv-link {
            color: #19110b;
            text-decoration: underline;
            font-size: 14px;
            cursor: pointer;
            text-underline-offset: 4px;
          }
          .lv-link:hover {
            opacity: 0.7;
          }
        `}
      </style>

      {/* Lớp phủ đen mờ */}
      <div 
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 9998,
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? 'visible' : 'hidden',
          transition: 'opacity 0.3s ease, visibility 0.3s ease'
        }}
      />

      {/* Bảng trượt */}
      <div 
        className="login-drawer-content"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '100%',
          maxWidth: '450px',
          height: '100vh',
          backgroundColor: '#ffffff',
          zIndex: 9999,
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          overflowY: 'auto',
          padding: '40px 32px',
          boxSizing: 'border-box',
          fontFamily: "'Montserrat', sans-serif",
          color: '#19110b'
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <h2 style={{ margin: 0, fontSize: '20px', fontWeight: '400' }}>Thông tin xác nhận</h2>
          <button 
            onClick={onClose}
            style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', padding: '0 8px', color: '#555' }}
          >
            ✕
          </button>
        </div>

        {/* ==============================================
            PHẦN 1: ĐÃ CÓ TÀI KHOẢN (ĐĂNG NHẬP)
            Sử dụng thẻ <form> và onSubmit để bắt sự kiện
            ============================================== */}
        <form onSubmit={handleLogin}>
          <h3 style={{ fontSize: '18px', fontWeight: '400', marginBottom: '24px' }}>Tôi đã có tài khoản</h3>

          {/* Nút đăng nhập Apple */}
          <button 
            type="button" // Type button để không trigger submit form
            style={{
              width: '100%',
              padding: '14px',
              borderRadius: '30px',
              border: '1px solid #19110b',
              background: '#fff',
              color: '#000000',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              fontSize: '15px',
              fontWeight: '400',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f6f6f6'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}
          >
            <svg width="18" height="18" viewBox="0 0 384 512" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
            Đăng nhập bằng tài khoản Apple
          </button>

          <div style={{ textAlign: 'center', margin: '24px 0', fontSize: '15px', color: '#19110b' }}>
            Hoặc
          </div>

          <div style={{ textAlign: 'right', fontSize: '13px', marginBottom: '16px' }}>
            Thông tin bắt buộc*
          </div>

          {/* Ô nhập Email/Đăng nhập */}
          <div style={{ marginBottom: '20px' }}>
            <label className="lv-label">Đăng nhập*</label>
            <input 
              type="text" 
              className="lv-input" 
              value={email} // 3. Gắn state vào value
              onChange={(e) => setEmail(e.target.value)} // 4. Cập nhật state khi gõ
            />
          </div>

          {/* Ô nhập Mật khẩu */}
          <div style={{ marginBottom: '8px', position: 'relative' }}>
            <label className="lv-label">Mật khẩu *</label>
            <input 
              type={showPassword ? "text" : "password"} 
              className="lv-input" 
              style={{ paddingRight: '45px' }}
              value={password} // 3. Gắn state vào value
              onChange={(e) => setPassword(e.target.value)} // 4. Cập nhật state khi gõ
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: '12px',
                bottom: '12px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#555',
                padding: '4px'
              }}
            >
              {showPassword ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              )}
            </button>
          </div>

          <a className="lv-link">Bạn quên mật khẩu?</a>

          <div style={{ marginTop: '24px', fontSize: '14.5px', lineHeight: '1.5' }}>
            <p style={{ margin: '0 0 4px 0' }}>Hoặc sử dụng liên kết one-time để đăng nhập nhanh</p>
            <a className="lv-link">Gửi liên kết về email của tôi</a>
          </div>

          {/* Nút Submit Đăng nhập */}
          <button 
            type="submit" // 5. Để type là submit để kích hoạt form
            style={{
              width: '100%',
              padding: '16px',
              marginTop: '32px',
              borderRadius: '30px',
              backgroundColor: '#000',
              color: '#fff',
              border: 'none',
              fontSize: '15px',
              fontWeight: '400',
              cursor: 'pointer',
              transition: 'opacity 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            Đăng nhập
          </button>
        </form>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #f0f0f0' }} />

        {/* ==============================================
            PHẦN 2: CHƯA CÓ TÀI KHOẢN (ĐĂNG KÝ)
            ============================================== */}
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: '400', marginBottom: '16px' }}>Tôi không có tài khoản</h3>
          
          <p style={{ fontSize: '14px', color: '#777', lineHeight: '1.5', marginBottom: '24px', margin: '0 0 24px 0' }}>
            Tận hưởng nhiều lợi ích và trải nghiệm phong phú hơn bằng cách tạo tài khoản cá nhân
          </p>

          <button 
            type="button"
            style={{
              width: '100%',
              padding: '14px',
              borderRadius: '30px',
              border: '1px solid #19110b',
              background: '#fff',
              color: '#19110b',
              cursor: 'pointer',
              fontSize: '15px',
              fontWeight: '400',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f6f6f6'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}
          >
            Tạo tài khoản MyLV
          </button>
        </div>

      </div>
    </>
  );
}