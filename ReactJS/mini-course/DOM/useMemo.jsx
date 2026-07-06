import { useState, useMemo } from 'react';

function Cart() {
  const [name, setName] = useState('');
  const [products, setProducts] = useState([
    { name: 'Điện thoại', price: 1000 },
    { name: 'Laptop', price: 5000 },
    { name: 'Chuột', price: 200 }
  ]);

  // NẾU KHÔNG CÓ useMemo: Vòng lặp reduce này sẽ chạy lại mỗi khi bạn gõ tên vào ô input.
  // CÓ useMemo: Nó chỉ chạy tính lại tổng khi mảng `products` có sự thay đổi.
  const total = useMemo(() => {
    console.log("Đang tính toán lại tổng tiền...");
    const result = products.reduce((acc, product) => acc + product.price, 0);
    return result;
  }, [products]); // Mảng phụ thuộc là products

  return (
    <div>
      <input 
        value={name} 
        onChange={e => setName(e.target.value)} 
        placeholder="Nhập tên người mua..." 
      />
      <h2>Tổng tiền: {total} $</h2>
    </div>
  );
}