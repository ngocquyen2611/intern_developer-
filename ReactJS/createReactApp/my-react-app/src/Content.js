import { useState, useEffect } from 'react'

// // Events: Add / remove event listener
// // Observer pattern: Subscribe / unsubscribe
// // Closure
// // Timers: setInterval, setTimeout, clearInterval, clearTimeout
// // useState
// // Mounted / unmounted
// // ===
// // Call API

// /**
//  * 1. Update DOM
//  *    - FB blog title
//  * 2. Call API
//  * 3. Listen DOM events
//  *    - Scroll
//  *    - Resize
//  * 4. Cleanup
//  *    - Remove listener / Unsubscribe
//  *    - Clear timer
//  */
// const tabs = [
//     {
//         id: 1,
//         name: 'Posts',
//         type: 'posts'
//     },
//     {
//         id: 2,
//         name: 'Comments',
//         type: 'comments'
//     },
//     {
//         id: 3,  
//         name: 'Albums',
//         type: 'albums'
//     }
// ]

// function Content() {
//     const [title, setTitle] = useState('');
//     const [posts, setPosts] = useState([]);
//     const [type, setType] = useState('posts');
//     const [showGoToTop, setShowGoToTop] = useState(false);

// //1.callback luon duoc goi khi component mounted(all)
// //  callback sau khi component them element vao DOM
// //2. [] chay 1 lan khi mounted
//     useEffect(() => {
//         fetch(`https://jsonplaceholder.typicode.com/${type}`)
//         .then(res => res.json())
//         .then(posts => {
//             setPosts(posts);
//         })
        
//     }, [type]); //trong [] la dependency, khi dependency thay doi thi call back duoc goi lai

//     useEffect(() => {
//         const handleScroll = () => {
//             setShowGoToTop(window.scrollY >= 200);
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll());
//         }
//     }, []);
//     return (
//         <div>
//             {tabs.map(tab => (
//                 <button
//                     key={tab.id}
//                     onClick={() => setType(tab.type)}
//                 >
//                     {tab.name}
//                 </button>
//             ))}
//             {posts.map(post => (
//                 <li key={post.id}>{post.title || post.name}</li>
//             ))}
//             {showGoToTop && (
//                 <button
//                     style={{ position: 'fixed', bottom: 20, right: 20 }}
//                     onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//                 >
//                     Go to Top
//                 </button>
//             )}
//         </div>
//     )
//     }
// export default Content

//=========================================================
function Content() {
    const [avatar, setAvatar] = useState();
    
    useEffect(() => {
        //cleanup function
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        }
    }, [avatar]);

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];

        file.preview = URL.createObjectURL(file);

        setAvatar(file);
    }
    return <div>
        <input 
            type="file"
            onChange={handlePreviewAvatar}
        />
        {avatar && <img src={avatar.preview} alt="Preview" />}
    </div>
}

export default Content