import React from 'react';

export default function ContactDrawer({ isOpen, onClose }) {
  return (
    <>
      <style>
        {`
          /* Tùy chỉnh thanh cuộn cho đẹp mắt */
          .contact-drawer-content::-webkit-scrollbar {
            width: 6px;
          }
          .contact-drawer-content::-webkit-scrollbar-thumb {
            background-color: #ccc;
            border-radius: 4px;
          }
          .contact-list-item {
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 16px 0;
            cursor: pointer;
            font-size: 15px;
            color: #19110b;
            text-decoration: none;
            transition: opacity 0.2s;
          }
          .contact-list-item:hover {
            opacity: 0.6;
          }
          .contact-footer-link {
            display: block;
            padding: 16px 0;
            font-size: 14px;
            color: #19110b;
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            transition: opacity 0.2s;
          }
          .contact-footer-link:hover {
            opacity: 0.6;
          }
        `}
      </style>

      {/* Lớp phủ đen mờ (Backdrop) - Bấm vào đây cũng sẽ đóng menu */}
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

      {/* Bảng trượt (Drawer) */}
      <div 
        className="contact-drawer-content"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '100%',
          maxWidth: '450px', // Chiều rộng tối đa trên desktop
          height: '100vh',
          backgroundColor: '#ffffff',
          zIndex: 9999,
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          overflowY: 'auto',
          padding: '40px 32px',
          boxSizing: 'border-box',
          fontFamily: "'Montserrat', sans-serif"
        }}
      >
        {/* Header của Drawer */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <h2 style={{ margin: 0, fontSize: '20px', fontWeight: '400' }}>Liên hệ với chúng tôi</h2>
          <button 
            onClick={onClose}
            style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', padding: '0 8px', color: '#555' }}
          >
            ✕
          </button>
        </div>

        {/* Lời chào */}
        <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.6', marginBottom: '40px' }}>
          Trung tâm Tư vấn Khách hàng của Louis Vuitton rất hân hạnh được hỗ trợ quý khách.
        </p>

        {/* Danh sách liên hệ */}
        <div style={{ marginBottom: '40px' }}>
          <a href="tel:+842838614107" className="contact-list-item">
             {/* Icon Điện thoại (SVG giả lập) */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            +84 2838614107
          </a>
          <a href="mailto:contact@louisvuitton.com" className="contact-list-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            Gửi email
          </a>
          <a href="#" className="contact-list-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            WhatsApp
          </a>
          <a href="#" className="contact-list-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            Apple Message
          </a>
          <a href="#" className="contact-list-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2C6.48 2 2 6.03 2 11c0 2.84 1.48 5.37 3.77 7.03v3.77l3.41-1.89c.9.25 1.84.39 2.82.39 5.52 0 10-4.03 10-9s-4.48-9-10-9z"></path></svg>
            Facebook Messenger
          </a>
          <a href="#" className="contact-list-item">
             {/* Icon mặc định cho Zalo */}
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
            Zalo
          </a>
        </div>

        {/* Đường gạch ngang */}
        <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '0 0 24px 0' }} />

        {/* Danh sách Links */}
        <div>
          <a href="#" className="contact-footer-link">Liên hệ với chúng tôi</a>
          <a href="#" className="contact-footer-link">Câu hỏi thường gặp</a>
          <a href="#" className="contact-footer-link">Dịch vụ chăm sóc</a>
          <a href="#" className="contact-footer-link" style={{ textTransform: 'none' }}>Tìm cửa hàng</a>
        </div>
      </div>
    </>
  );
}