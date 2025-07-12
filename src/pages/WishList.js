import React, { useEffect, useState } from 'react';
import { useAuth } from '../AuthContext';
// import dotenv from 'dotenv';
export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const { token } = useAuth();
  
  useEffect(() => {
    // dotenv.config();
   let base_url ='https://bookstore-server-roni.onrender.com';
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
