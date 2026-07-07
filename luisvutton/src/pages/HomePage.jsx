import React from 'react';
import { Link } from 'react-router-dom';
import { HOMEPAGE_DATA } from '../data/homepageData';

export default function HomePage() {
  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", backgroundColor: '#ffffff', paddingBottom: '60px' }}>
      
      {HOMEPAGE_DATA.map((section, sectionIndex) => {
        if (section.type === 'banner') {
          return (
            <div key={sectionIndex} style={{ position: 'relative', width: '100%', height: '75vh', overflow: 'hidden', marginBottom: '70px' }}>
              {/* Lớp phủ mờ nhẹ ở đáy ảnh giúp chữ trắng luôn luôn đọc được rõ ràng */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,0.25) 100%)',
                zIndex: 1
              }} />

              <img 
                src={section.image} 
                alt={section.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />

              {/* Khối chữ cố định ở GIỮA CHÍNH XÁC theo chiều ngang, nằm sát dưới đáy banner */}
              <div style={{ 
                position: 'absolute', 
                bottom: '60px', 
                left: '50%', 
                transform: 'translateX(-50%)', 
                color: '#ffffff',
                textAlign: 'center',
                width: '90%',
                zIndex: 2
              }}>
                <p style={{ 
                  fontSize: '12px', 
                  textTransform: 'uppercase', 
                  letterSpacing: '3px', 
                  margin: '0 0 12px 0',
                  fontWeight: '500',
                  textShadow: '0px 2px 4px rgba(0,0,0,0.4)'
                }}>
                  {section.subTitle}
                </p>
                <h2 style={{ 
                  fontSize: '36px', 
                  fontWeight: '400', 
                  margin: 0,
                  letterSpacing: '1px',
                  textShadow: '0px 2px 8px rgba(0,0,0,0.5)'
                }}>
                  {section.title}
                </h2>
              </div>
            </div>
          );
        }

        if (section.type === 'grid') {
          return (
            <div key={sectionIndex} style={{ padding: '0 40px', marginBottom: '90px' }}>
              
              {/* CHỮ Ở GIỮA: TIÊU ĐỀ SECTION ĐƯỢC ĐỔI MÀU RIÊNG BIỆT BIỂU TƯỢNG CỦA LV */}
              <h2 style={{ 
                fontSize: '24px', 
                fontWeight: '400', 
                color: '#19110b',
                textAlign: 'center',
                marginBottom: '40px',
                letterSpacing: '0.5px'
              }}>
                {section.title}
              </h2>
              
              {/* Vùng hiển thị danh sách sản phẩm */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '30px 16px'
              }}>
                {section.products.map((item, index) => (
                  <Link 
                    to={`/product/${index}`} 
                    state={{ product: item }} 
                    key={index} 
                    style={{ textDecoration: 'none', color: 'inherit', display: 'block', textAlign: 'center' }}
                  >
                    {/* Khung ảnh sản phẩm */}
                    <div style={{ width: '100%', height: '280px', backgroundColor: '#f6f5f3', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px', overflow: 'hidden' }}>
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                      />
                    </div>
                    <h3 style={{ fontSize: '14px', fontWeight: '400', color: '#19110b', margin: '0 0 6px 0', lineHeight: '1.4' }}>
                      {item.name}
                    </h3>
                    <p style={{ fontSize: '13px', color: '#555555', margin: 0 }}>
                      {item.price}
                    </p>
                  </Link>
                ))}
              </div>

            </div>
          );
        }

        return null;
      })}

    </div>
  );
}