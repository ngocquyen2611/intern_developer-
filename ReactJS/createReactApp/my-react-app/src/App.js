import {useState} from 'react';

// function App() {
//   const [count, setCount] = useState(1); // giá trị khởi tạo 1

//   const handleClick = ()  => {
//     setCount(prevState => prevState + 1); // gọi lại cả hàm App để render lại giao diện với giá trị count mới
//     // thay thế hoàn toàn giá trị count cũ bằng giá trị mới, không cộng dồn
//   }

//   return (
//     <div className="App">
//       <h1 style = {{ padding: '20px' }}>{count}</h1>
//       <button style={{ padding: '10px 20px', fontSize: '16px' }} onClick={handleClick}>Click me</button>
//     </div>
//   );
// }

// export default App;
// ========================================================

// import {useState} from 'react';

// const gifts = [
//   'qua1',
//   'qua2',
//   'qua3',
//   'qua4',
//   'qua5',
// ]

// function App() {
//   const [gift, setGift] = useState(); // giá trị khởi tạo 1

//   const handleClick = ()  => {
//     const randomIndex = Math.floor(Math.random() * gifts.length);
//     setGift(gifts[randomIndex]); // gọi lại cả hàm App để render lại giao diện với giá trị count mới
//     // thay thế hoàn toàn giá trị count cũ bằng giá trị mới, không cộng dồn
//   }

//   return (
//     <div className="App">
//       <h1 style = {{ padding: '20px' }}>{gift || 'Chua co phan thuong'}</h1>
//       <button style={{ padding: '10px 20px', fontSize: '16px' }} onClick={handleClick}>Lấy quà</button>
//     </div>
//   );
// }

// export default App;

//=======================================================

// const iNames = [
//   {
//     id: 1,
//     name: 'qua1'
//   },
//   {
//     id: 2,
//     name: 'qua2'
//   },
//   {
//     id: 3,
//     name: 'qua3'
//   }
// ]

// function App() {
//   // const [name, setName] = useState(); // giá trị khởi tạo 1
//   // const [email, setEmail] = useState(); // giá trị khởi tạo 1
//   // const handleClick = ()  => {
//   //   console.log({
//   //     name,
//   //     email
//   //   })
//   // }
//   const [checked, setChecked] = useState([]);

//   const handleCheck = (id) => {
//     setChecked(prev => {
//       const isChecked = checked.includes(id);
//       if (isChecked) {
//         return checked.filter(item => item !== id);
//       } else {
//         return [...prev, id];
//       }
//   })
// }
//   const handleSubmit = () => {
//     console.log({ id: checked });
//   }


//   return (
//     // // two way binding: 1. value = {name} 2. onChange={(e) => setName(e.target.value)}
//     // <div className="App">
//     //   <input value = {name} onChange={(e) => setName(e.target.value)} />
//     //   <input value = {email} onChange={(e) => setEmail(e.target.value)} />
//     //   <button style={{ padding: '10px 20px', fontSize: '16px' }} onClick={handleClick}>Lấy quà</button>
//     // </div>
//     <div style={{ padding: '20px' }}>
//       {iNames.map(iName => (
//         <div key={iName.id}>
//           <input type = "checkbox"
//           checked = {checked.includes(iName.id)}
//           onChange={() => handleCheck(iName.id)}
//           />
//           {iName.name}
//         </div>
//       ))}
//       <button style={{ padding: '10px 20px', fontSize: '16px' }} onClick={handleSubmit}>Lấy quà</button>
//     </div>
//   );
// }

// export default App;

//========================================================
// function App() {
//   const storageItems = JSON.parse(localStorage.getItem('items')) ?? [];

  
//   const [item, setItem] = useState('');
//   const [items, setItems] = useState(storageItems);
//   const handleSubmit = () => {
//     setItems(prev => {
//       const newItems = [...prev, item];

//       const jsonItems = JSON.stringify(newItems);
//       localStorage.setItem('items', jsonItems);
//       return newItems;
//     });
//     setItem('');


//   }
//   return (
//     <div style={{padding: 32}}>
//       <input 
//         value={item}
//         onChange={(e) => setItem(e.target.value)}
//       />
//       <button onClick={handleSubmit}>Add</button>


//     <ul>
//       {items.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//     </div>
//   )
// }

// export default App;


//========================================================
import Content from './Content'; // Import component Content vào đây

function App() {
    // State dùng để quyết định việc Ẩn hoặc Hiện component Content
    const [show, setShow] = useState(false);

    return (
        <div style={{ padding: 32 }}>
            {/* Nút bấm đảo ngược trạng thái của biến show */}
            <button onClick={() => setShow(!show)}>
                {show ? 'Ẩn màn hình Content' : 'Hiện màn hình Content'}
            </button>

            {/* Toán tử &&: Nếu show = true thì Content mới được đưa vào DOM */}
            {show && <Content />}
        </div>
    );
}

export default App;