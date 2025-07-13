import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay">
        <div className="content">
          <h1>Welcome to BookVerse</h1>
          <p>Your gateway to the world of books. Discover, Explore, and Buy!</p>
          <Link to="/register">
            <button className="shop-btn">Browse Books</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
