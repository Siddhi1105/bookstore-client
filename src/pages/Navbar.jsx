import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";


const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();       
    navigate("/");  
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">BookStore</Link>
      </div>
      <div className="navbar-links">
        <Link to="/products">Products</Link>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
