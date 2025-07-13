/* import React, { useEffect, useState } from 'react';
import { useAuth } from '../AuthContext';
import Navbar from './Navbar';
// import dotenv from 'dotenv';
import '../App.css';

export default function Products() {
  const [products, setProducts] = useState([]);
  const { token } = useAuth();
  
  useEffect(() => {
  // dotenv.config();
  console.log(" Token:", token); 

let base_url = "https://bookstore-server-roni.onrender.com"; 
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
<>
<Navbar/>
<div className="product-grid">
  {products.map(p => (
    <div className="product-card" key={p._id}>
      <img src={p.image} alt={p.name} className="product-image" />
      <div className="product-info">
        <h3>{p.title}</h3>
        <p className="product-description">{p.description}</p>
        <p className="product-price">₹{p.price}</p>
      </div>
    </div>
  ))}
</div>
</>
  );
}
 */
// import React, { useEffect, useState } from 'react';
// import { useAuth } from '../AuthContext';
// import base_url from '../config'; // ✅
// import '../App.css';

// export default function Products() {
//   const [products, setProducts] = useState([]);
//   const { token } = useAuth();

//   useEffect(() => {
//     console.log("Base URL:", base_url);
//     fetch(`${base_url}/products`, {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     })
//       .then(res => res.json())
//       .then(data => {
//         console.log("Products fetched:", data);
//         setProducts(Array.isArray(data) ? data : []);
//       });
//   }, [token]);

//   return (
//     <div className="product-grid">
//       {products.map(p => (
//         <div className="product-card" key={p._id}>
//           <img src={p.image} alt={p.name} className="product-image" />
//           <div className="product-info">
//             <h3>{p.name}</h3>
//             <p className="product-description">{p.description}</p>
//             <p className="product-price">₹{p.price}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext';
//import { Link } from 'react-router-dom';
import Navbar from './Navbar'; 
import '../App.css';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [sortOrder, setSortOrder] = useState('default');
  const { token } = useAuth();
  const baseurl = "https://bookstore-server-roni.onrender.com";

  // Fetch products
  useEffect(() => {
    if (!token) return;

    axios.get(`${baseurl}/products`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => {
        setProducts(response.data);
        setFiltered(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error.response?.data || error.message);
      });
  }, [token]);

  // Apply search/filter/sort
  useEffect(() => {
    let updated = [...products];

     if (searchTerm) {
    updated = updated.filter(product =>
      product.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

 if (filterType !== 'All') {
    updated = updated.filter(product => {
      const category = product?.category;
      return typeof category === 'string' &&
             category.toLowerCase() === filterType.toLowerCase();
    });
  }





    if (sortOrder === 'asc') {
      updated.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
      updated.sort((a, b) => b.price - a.price);
    }

    setFiltered(updated);
  }, [searchTerm, filterType, sortOrder, products]);


  const addToWishlist = async (productId) => {
    try {
      const res = await axios.post(`${baseurl}/wishlist/${productId}`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.status === 200) {
        alert("Added to wishlist!");
      }
    } catch (err) {
      alert("Error adding to wishlist");
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <>
      <Navbar />

      <div className="products-container" style={{ padding: '2rem 1rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}></h2>

        {/* Controls */}
        <div className="controls" style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          <input
            type="text"
            placeholder="Search books..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #ccc', minWidth: '200px' }}
          />

          <select value={filterType} onChange={e => setFilterType(e.target.value)} style={{ padding: '10px', borderRadius: '8px' }}>
            <option value="All">All Categories</option>
            <option value="fiction">Fiction</option>
            <option value="science">Science Fiction</option>
            <option value="classic">Classic</option>
            <option value="philosophy">Philosophy</option>
          </select>

          <select value={sortOrder} onChange={e => setSortOrder(e.target.value)} style={{ padding: '10px', borderRadius: '8px' }}>
            <option value="default">Sort by Price</option>
            <option value="asc">Low → High</option>
            <option value="desc">High → Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {filtered.length > 0 ? (
            filtered.map(p => (
              <div className="product-card" key={p._id}>
                <img src={p.image} alt={p.name} className="product-image" />
                <div className="product-info">
                  <h3>{p.title}</h3>
                  <p className="product-description">{p.description}</p>
                  <p className="product-price">₹{p.price}</p>
                  <button onClick={() => addToWishlist(p._id)} className="wishlist-btn">Add to Wishlist</button>
                </div>
              </div>
            ))
          ) : (
            <p style={{ textAlign: 'center' }}>No products found.</p>
          )}
        </div>
      </div>
    </>
  );
}


