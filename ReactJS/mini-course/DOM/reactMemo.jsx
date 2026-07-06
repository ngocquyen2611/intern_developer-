import { useRef, useState, useEffect } from 'react';

function TimerAndFocus() {
  const [count, setCount] = useState(60);
  
  // 1. Lưu tham chiếu đến thẻ input
  const inputRef = useRef(null); 
  
  // 2. Lưu ID của setInterval để sau này có thể clear nó
  const timerIdRef = useRef(null); 

  // Tự động focus vào input khi component mount
  useEffect(() => {
    inputRef.current.focus(); 
  }, []);

  const handleStart = () => {
    // Tránh việc click nhiều lần tạo ra nhiều interval
    if (timerIdRef.current) return; 

    timerIdRef.current = setInterval(() => {
      setCount(prev => prev - 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = null;
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Nhập gì đó..." />
      <h1>Đếm ngược: {count}</h1>
      <button onClick={handleStart}>Bắt đầu</button>
      <button onClick={handleStop}>Dừng</button>
    </div>
  );
}