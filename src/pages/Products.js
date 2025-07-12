import React, { useEffect, useState } from 'react';
import { useAuth } from '../AuthContext';
// import dotenv from 'dotenv';
import '../App.css';

export default function Products() {
  const [products, setProducts] = useState([]);
  const { token } = useAuth();
  
  useEffect(() => {
  // dotenv.config();
  console.log(" Token:", token); 

let base_url = 'https://bookstore-server-roni.onrender.com';  
fetch(`${base_url}/products`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then(res => res.json())
  .then(data => {
    console.log("Products fetched:", data); 
    setProducts(Array.isArray(data) ? data : []);
  });
}, [token]);



  return (
<div className="product-grid">
  {products.map(p => (
    <div className="product-card" key={p._id}>
      <img src={p.image} alt={p.name} className="product-image" />
      <div className="product-info">
        <h3>{p.name}</h3>
        <p className="product-description">{p.description}</p>
        <p className="product-price">₹{p.price}</p>
      </div>
    </div>
  ))}
</div>
  );
}