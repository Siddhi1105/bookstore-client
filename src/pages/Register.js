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
const base_url = process.env.REACT_APP_BASE_URL;

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${base_url}/auth/register`, {
        name,
        email,
        password,
        
      });
      if (res.ok) {
      navigate('/login');
    } else {
      alert('Registration failed');
    }

      alert("✅ Registration successful!");
      navigate('/login');
    } catch (err) {
      console.error("❌ Registration error:", err.response?.data || err.message);
      alert("Registration failed: " + (err.response?.data || err.message));
    }
  };

  return (
    <form className="auth-form-container" onSubmit={handleSubmit}>
      <h1>Register</h1>

      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <input type="submit" value="Register" />
    </form>
  );
}

export default Register;

/* 
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import base_url from '../config';
import '../App.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Base URL:", base_url); // should show the Render HTTPS URL

      const res = await axios.post(`${base_url}/auth/register`, {
        name,
        email,
        password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (res.status === 201) {
        alert('Registration successful! Please login.');
        navigate('/login');
      }
    } catch (err) {
      console.error("Registration Error:", err.response?.data || err.message);
      alert("Registration failed! " + (err.response?.data || err.message));
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
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    number: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const baseurl = "https://bookstore-server-roni.onrender.com";
      const res = await axios.post(`${baseurl}/api/auth/register`, form);
      if (res.status === 201 || res.status === 200) {
        alert("Registered successfully!");
        navigate("/login");
      }
    } catch (err) {
      alert("Registration failed!");
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h1 className="form-title">Registration Form</h1>

      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={form.name} onChange={handleChange} placeholder="Enter your name" required />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={form.password} onChange={handleChange} placeholder="Enter your password" required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={form.email} onChange={handleChange} placeholder="Enter your email" required />

      <label htmlFor="number">Contact No.:</label>
      <input type="number" id="number" value={form.number} onChange={handleChange} placeholder="Enter your number" required />

      <input type="submit" value="Register" className="submit-btn" />

      <p>Already have an Account? <Link to="/login">Login</Link></p>
    </form>
  );
}

export default Register; */