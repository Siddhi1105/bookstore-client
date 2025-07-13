/* import React, { useEffect, useState } from 'react';
import { useAuth } from '../AuthContext';
// import dotenv from 'dotenv';
export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const { token } = useAuth();
  
  useEffect(() => {
    // dotenv.config();
  let base_url = "https://bookstore-server-roni.onrender.com";
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
} */

/* import React, { useEffect, useState } from 'react';
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
} */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext';
import '../App.css';

function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const { token } = useAuth();
  const baseurl = "https://bookstore-server-roni.onrender.com";

  useEffect(() => {
    if (!token) return;

    axios.get(`${baseurl}/wishlist`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then((res) => {
      setWishlistItems(res.data);
    })
    .catch((err) => {
      console.error("Error loading wishlist:", err.response?.data || err.message);
    });
  }, [token]);

  // DELETE handler
  const removeFromWishlist = async (productId) => {
    try {
      await axios.delete(`${baseurl}/wishlist/${productId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      // Remove from UI
      setWishlistItems(prev => prev.filter(item => item._id !== productId));
    } catch (err) {
      console.error("Error deleting from wishlist:", err.response?.data || err.message);
      alert("Failed to remove item.");
    }
  };

  return (
    <div className="products-container">
      <h2>My Wishlist</h2>

     <div className="product-grid">
  {wishlistItems.length > 0 ? (
    wishlistItems.map((item) => (
      <div className="product-card" key={item._id}>
        <img src={item.image} alt={item.title} className="product-image" />
        <div className="product-info">
          <h3>{item.title}</h3>
          <p className="product-description">{item.description}</p>
          <p className="product-price">₹{item.price}</p>
          <button
            className="wishlist-remove-btn"
            onClick={() => removeFromWishlist(item._id)}
          >
            🗑 Remove
          </button>
        </div>
      </div>
    ))
  ) : (
    <p style={{ textAlign: 'center' }}>Your wishlist is empty.</p>
  )}
</div>

    </div>
  );
}

export default Wishlist;
