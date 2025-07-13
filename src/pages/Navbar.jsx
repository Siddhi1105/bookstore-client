import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";


const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();       // clear token
    navigate("/");  
  };

  const wishilistbutton = () => {
          navigate("/wishlist")
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">BookStore</Link>
      </div>
      <div className="navbar-links">
        <Link to="/products">Products</Link>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
      <div className="navbar-links">
        
        <button onClick={wishilistbutton} className="logout-btn">Wishlist</button>
      </div>

    </nav>
  );
};

export default Navbar;
