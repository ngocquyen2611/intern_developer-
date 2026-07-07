import React from 'react';

// 1. Khuôn đúc cho khối Banner lớn
export default function CampaignBanner({ subTitle, title, image }) {
  return (
    <section className="relative w-full h-[80vh] flex flex-col justify-end items-center pb-[60px] text-white">
      {/* Ảnh nền phủ toàn bộ section */}
      <img 
        src={image} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover z-[1]" 
      />
      
      {/* Khối nội dung chữ nổi lên trên */}
      <div className="relative z-[2] text-center font-sans">
        <div className="text-[11px] tracking-[3px] uppercase mb-[10px]">
          {subTitle}
        </div>
        
        <h2 className="text-[36px] font-normal mb-[20px]">
          {title}
        </h2>
        
        <button className="bg-transparent text-white border border-white py-3 px-[35px] text-[12px] tracking-[1.5px] uppercase cursor-pointer rounded-[25px] hover:bg-white hover:text-black transition-colors duration-300">
          Khám phá thêm
        </button>
      </div>
    </section>
  );
}