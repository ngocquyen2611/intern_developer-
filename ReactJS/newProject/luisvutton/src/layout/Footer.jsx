import React from 'react';
import styles from './Footer.module.scss'; // Nhúng SCSS Modules

export default function Footer() {
  return (
    <footer className={styles.lvFooter}>
      
      {/* Phần Top Breadcrumb */}
      <div className={styles.footerTop}>
        <a href="/">Louis Vuitton</a> - <span>MyLV</span>
      </div>

      {/* Khung 4 cột */}
      <div className={styles.footerMain}>
        
        {/* CỘT 1: HỖ TRỢ */}
        <div className={styles.footerCol}>
          <h3>Hỗ trợ</h3>
          <p>
            Quý khách có thể liên hệ với chúng tôi qua Hotline <a href="tel:+842838614107" className={styles.inlineLink}>+84 2838614107</a>, <span className={styles.inlineLink}>Zalo</span>, <span className={styles.inlineLink}>Email</span>, hoặc <span className={styles.inlineLink}>các phương thức liên hệ khác</span>.
          </p>
          <ul>
            <li><a href="#">Câu hỏi thường gặp</a></li>
            <li><a href="#">Chăm sóc sản phẩm</a></li>
            <li><a href="#">Cửa hàng</a></li>
          </ul>
        </div>

        {/* CỘT 2: DỊCH VỤ */}
        <div className={styles.footerCol}>
          <h3>Dịch vụ</h3>
          <ul>
            <li><a href="#">Dịch vụ bảo hành</a></li>
            <li><a href="#">Dịch vụ cá nhân hóa</a></li>
            <li><a href="#">Nghệ thuật tặng quà</a></li>
            <li><a href="#">Tải ứng dụng của chúng tôi</a></li>
          </ul>
        </div>

        {/* CỘT 3: VỀ LOUIS VUITTON */}
        <div className={styles.footerCol}>
          <h3>Về Louis Vuitton</h3>
          <ul>
            <li><a href="#">Buổi trình diễn thời trang</a></li>
            <li><a href="#">Nghệ thuật & Văn hóa</a></li>
            <li><a href="#">La Maison</a></li>
            <li><a href="#">Phát triển bền vững</a></li>
            <li><a href="#">Tin mới nhất</a></li>
            <li><a href="#">Đạo đức & Tuân thủ</a></li>
            <li><a href="#">Nghề nghiệp</a></li>
            <li><a href="#">Foundation Louis Vuitton</a></li>
          </ul>
        </div>

        {/* CỘT 4: KẾT NỐI VỚI CHÚNG TÔI */}
        <div className={styles.footerCol}>
          <h3>Kết nối với chúng tôi</h3>
          <p>
            <span className={styles.inlineLink}>Đăng ký</span> nhận thư điện tử để cập nhật những tin tức mới nhất từ Louis Vuitton, bao gồm các buổi ra mắt độc quyền trực tuyến và bộ sưu tập mới.
          </p>
          <ul>
            <li><a href="#">Theo dõi chúng tôi</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}