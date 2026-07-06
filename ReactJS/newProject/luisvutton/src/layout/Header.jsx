import React, { useState, useEffect, useRef, memo } from 'react';

// Nhúng toàn bộ class từ file SCSS vào biến `styles`
import styles from './Header.module.scss';

// Import component ContactDrawer vừa tạo (đảm bảo đường dẫn này đúng với dự án của bạn)
import ContactDrawer from '../components/ContactDrawer';
// Import component LoginDrawer mới tạo
import LoginDrawer from '../components/LoginDrawer';

function Header({ onSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchKey, setSearchKey] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // State quản lý việc mở/đóng bảng Liên hệ
  const [isContactOpen, setIsContactOpen] = useState(false);
  // State quản lý việc mở/đóng bảng Đăng nhập
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isSearchOpen) {
      // Nếu trạng thái tìm kiếm là MỞ (true) -> ra lệnh focus thẳng vào ô nhập chữ
      searchInputRef.current?.focus();
    }
  }, [isSearchOpen]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchKey(value);
    if (onSearch) onSearch(value);
  };

  // Cập nhật: Header đổi màu trắng khi cuộn trang HOẶC mở tìm kiếm HOẶC mở menu HOẶC mở bảng liên hệ HOẶC mở login
  const isHeaderWhite = isScrolled || isSearchOpen || isMenuOpen || isContactOpen || isLoginOpen;

  return (
    // Dùng template literal để nối class mặc định (lvHeader) và class động (isWhite)
    <header className={`${styles.lvHeader} ${isHeaderWhite ? styles.isWhite : ''}`}>

      {/* CỤM TRÁI: Menu & Nút Tìm kiếm */}
      <div className={`${styles.textSans} ${styles.leftGroup}`}>

        {/* Đã thêm sự kiện onClick để MỞ menu */}
        <button
          className={`${styles.actionBtn} ${styles.textSans}`}
          onClick={() => setIsMenuOpen(true)}
          aria-label="Mở Menu"
        >
          <span className={styles.iconMenu}>☰</span> <span>Menu</span>
        </button>

        <button
          className={`${styles.actionBtn} ${styles.textSans}`}
          onClick={() => setIsSearchOpen(!isSearchOpen)}
          aria-label="Bật tắt tìm kiếm"
        >
          <span className={styles.iconNormal}></span>
          <span>{isSearchOpen ? 'Đóng' : 'Tìm kiếm'}</span>
        </button>
      </div>

      {/* CỤM GIỮA: Logo thương hiệu */}
      <h1 className={styles.logo}>LOUIS VUITTON</h1>

      {/* CỤM PHẢI: Chức năng phụ */}
      <nav aria-label="Điều hướng tiện ích" className={`${styles.textSans} ${styles.rightNav}`} role="navigation">
        
        {/* Nút Liên hệ với chúng tôi */}
        <button 
          onClick={() => setIsContactOpen(true)}
          className={styles.smartLink}
          style={{ background: 'none', border: 'none', padding: 0, font: 'inherit', color: 'inherit', cursor: 'pointer' }}
        >
          Liên hệ với chúng tôi
        </button>

        <ul className={styles.list}>
          <li>
            <a href="/wishlist" className={styles.smartLink} aria-label="Danh sách yêu thích">
              <span className={styles.iconLarge}>♡</span>
            </a>
          </li>
          
          {/* Nút Đăng nhập */}
          <li>
            <button 
              onClick={() => setIsLoginOpen(true)}
              className={styles.smartLink} 
              aria-label="Đăng nhập tài khoản"
              style={{ background: 'none', border: 'none', padding: 0, font: 'inherit', color: 'inherit', cursor: 'pointer' }}
            >
              <span style={{ textTransform: 'none', fontSize: '13px', fontWeight: '500' }}>Đăng nhập</span>
            </button>
          </li>
        </ul>
      </nav>

      {/* ==============================================
          MENU SIDEBAR (RENDER CÓ ĐIỀU KIỆN VỚI &&)
          ============================================== */}
      {isMenuOpen && (
        <>
          {/* Lớp phủ đen. Click vào đây để đóng */}
          <div
            className={styles.menuOverlay}
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Khung Sidebar Menu */}
          <div className={styles.sidebarMenu}>

            {/* Nút Đóng */}
            <button className={styles.closeBtn} onClick={() => setIsMenuOpen(false)}>
              ✕ Đóng
            </button>

            {/* Danh sách Menu */}
            <ul className={styles.menuList}>
              <li><a href="#">Đồ Nữ</a></li>
              <li><a href="#">Đồ Nam</a></li>
              <li className={styles.divider}></li>
              <li><a href="#">Kỷ niệm ra mắt Monogram</a></li>
              <li><a href="#">Quà tặng và dịch vụ cá nhân hóa</a></li>
              <li><a href="#">Túi xách và ví</a></li>
            </ul>
          </div>
        </>
      )}

      {/* ==============================================
          KHUNG TÌM KIẾM
          ============================================== */}
      {/* Nền mờ khi bật tìm kiếm — click ra ngoài để đóng, giống menu */}
      {isSearchOpen && (
        <div
          className={styles.searchOverlay}
          onClick={() => setIsSearchOpen(false)}
        />
      )}

      {/* KHUNG TÌM KIẾM ĐỘNG */}
      <div className={`${styles.searchDrawer} ${isSearchOpen ? styles.isOpen : ''}`}>
        <div className={styles.searchWrapper}>
          <input
            ref={searchInputRef}
            type="text"
            placeholder='Tìm "Nước hoa", "Túi xách", "Ví"...'
            value={searchKey}
            onChange={handleSearchChange}
            className={styles.searchInput}
          />
          <span className={styles.searchIcon}></span>
        </div>
      </div>

      {/* ==============================================
          BẢNG LIÊN HỆ (CONTACT DRAWER)
          ============================================== */}
      <ContactDrawer 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />

      {/* ==============================================
          BẢNG ĐĂNG NHẬP (LOGIN DRAWER)
          ============================================== */}
      <LoginDrawer 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
      />

    </header>
  );
}

export default memo(Header);