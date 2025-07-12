// import React, { useEffect, useState } from 'react';
// import { useAuth } from '../AuthContext';
// // import dotenv from 'dotenv';
// export default function Wishlist() {
//   const [wishlist, setWishlist] = useState([]);
//   const { token } = useAuth();
  
//   useEffect(() => {
//     // dotenv.config();
//   let base_url = process.env.REACT_APP_BASE_URL;
//     fetch(`${base_url}/wishlist`, {
//       headers: { Authorization: token }
//     })
//       .then((res) => res.json())
//       .then(setWishlist);
//   }, [token]);

//   return (
//     <div>
//       <h2>Wishlist</h2>
//       <ul>
//         {wishlist.map(p => (
//           <li key={p._id}>{p.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';
import { useAuth } from '../AuthContext';
import base_url from '../config'; // ✅

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    console.log("Base URL:", base_url);
    fetch(`${base_url}/wishlist`, {
      headers: { Authorization: token }
    })
      .then((res) => res.json())
      .then(setWishlist);
  }, [token]);

  return (
    <div>
      <h2>Wishlist</h2>
      <ul>
        {wishlist.map(p => (
          <li key={p._id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}

