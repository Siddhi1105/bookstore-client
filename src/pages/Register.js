/*  import React, { useState } from "react";
 import axios from "axios";
 import { useNavigate } from "react-router-dom";
 import "../App.css";
// import dotenv from 'dotenv';


 function Register() {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // dotenv.config();
          let base_url = "https://bookstore-server-roni.onrender.com";
      await axios.post(`${base_url}/auth/register`, {
        name,
        email,
        password
      });
      alert("Registration successful!");
      navigate('/login');
    } catch (err) {
      alert("Registration failed!");
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <form className="auth-form-container" onSubmit={handleSubmit}>
      <h1 className="auth-form-title">Register</h1>

      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

     <label htmlFor="email">Email:</label>
       <input
        type="email"
        id="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
         placeholder="Enter your password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         required
       />

       <input type="submit" value="Register" className="auth-submit-btn" />
     </form>
   );
 }

 export default Register; */


/* import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import base_url from "../config"; // ✅
import "../App.css";

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Base URL:", base_url);
      await axios.post(`${base_url}/auth/register`, {
        name,
        email,
        password
      });
      alert("Registration successful!");
      navigate('/login');
    } catch (err) {
      alert("Registration failed!");
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <form className="auth-form-container" onSubmit={handleSubmit}>
      <h1 className="auth-form-title">Register</h1>

      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <input type="submit" value="Register" className="auth-submit-btn" />
    </form>
  );
}

export default Register; */

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// ✅ Use .env variable for base URL
/* const base_url = process.env.REACT_APP_BASE_URL; */


function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const base_url = "https://bookstore-server-roni.onrender.com"
      const res = await axios.post(`${base_url}/auth/register`, {
        name,
        email,
        password,
        
      });
      if (res.ok) {
      navigate('/login');
    } 

      alert("✅ Registration successful!");
      navigate('/login');
    } catch (err) {
     // console.error("❌ Registration error:", err.response?.data || err.message);
      alert("Registration failed: " + (err.response?.data || err.message));
    }
  };

  return (
    <div className="auth-form-container">
  <form className="auth-form-box" onSubmit={handleSubmit}>
    <h1 className="auth-form-title">Register</h1>

    <label htmlFor="name">Name:</label>
    <input
      type="text"
      id="name"
      placeholder="Enter your name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
    />

    <label htmlFor="email">Email:</label>
    <input
      type="email"
      id="email"
      placeholder="Enter your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />

    <label htmlFor="password">Password:</label>
    <input
      type="password"
      id="password"
      placeholder="Enter your password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />

    <input type="submit" value="Register" className="auth-submit-btn" />

    <p>Already have an account? <a href="/login">Login</a></p>
  </form>
</div>
  );
}

export default Register;

