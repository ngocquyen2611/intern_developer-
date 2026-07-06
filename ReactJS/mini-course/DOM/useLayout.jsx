import { useState, useEffect, useLayoutEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // Thử thay useLayoutEffect bằng useEffect, bạn có thể sẽ thấy số 4 bị nháy lên cực nhanh rồi mới về 0.
  useLayoutEffect(() => {
    if (count > 3) {
      setCount(0); // Đặt lại về 0 TRƯỚC KHI trình duyệt kịp in số 4 ra màn hình
    }
  }, [count]);

  const handleRun = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleRun}>Tăng</button>
    </div>
  );}
// neu vuot qua 3 thi se reset ve 0, neu dung useEffect thi se hien thi 4 roi moi reset ve 0