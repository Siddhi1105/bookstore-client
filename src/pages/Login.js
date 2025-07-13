/* import React, { useState } from "react";
// import dotenv from 'dotenv';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import axios from "axios";
import "../App.css"; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // dotenv.config();
      let base_url = "https://bookstore-server-roni.onrender.com";
      const res = await axios.post(`${base_url}/auth/login`, {
        email,
        password
      });
      
      if (res.status === 200) {
        login(res.data.token);
        navigate('/products');
      }
    } catch (err) {
      alert("Login failed!");
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <form className="auth-form-container" onSubmit={handleSubmit}>
      <h1 className="auth-form-title">Login</h1>

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

      <input type="submit" value="Login" className="auth-submit-btn" />
    </form>
  );
}

export default Login; */


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import base_url from "../config"; 
import "../App.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Base URL:", base_url);
      

      const res = await axios.post(`${base_url}/auth/login`, {
        email,
        password
      });

      if (res.status === 200) {
        login(res.data.token);
        navigate('/products');
      }
    } catch (err) {
      alert("Login failed!");
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <form className="auth-form-container" onSubmit={handleSubmit}>
      <h1 className="auth-form-title">Login</h1>

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

      <input type="submit" value="Login" className="auth-submit-btn" />
    </form>
  );
}

export default Login;

/* import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../AuthContext";
import axios from "axios";
import "../App.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const baseurl = "https://bookstore-server-roni.onrender.com";
    try {
      const res = await axios.post(`${baseurl}/api/auth/login`, {
        email,
        password
      });

      if (res.status === 200) {
        login(res.data.token);
        navigate('/products');
      }
    } catch (err) {
      alert("Login failed!");
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h1 className="form-title">Login Form</h1>

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

      <input type="submit" value="Login" className="submit-btn" />

      <p>Don't have an account? <Link to="/register">Register</Link></p>
    </form>
  );
}

export default Login; */
