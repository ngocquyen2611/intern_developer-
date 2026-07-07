import React, { useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './layout/Header';
import Footer from './layout/Footer';
import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';

export default function App() {
  const handleSearch = useCallback((value) => {
    console.log('Từ khóa tìm kiếm:', value);
  }, []);

  return (
    <Router>
      <div style={{ backgroundColor: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header onSearch={handleSearch} />

        <main style={{ flex: 1 }}>
          <Routes>
            {/* Đường dẫn mặc định: Trang chủ */}
            <Route path="/" element={<HomePage />} />
            
            {/* Đường dẫn động: Trang chi tiết sản phẩm */}
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}