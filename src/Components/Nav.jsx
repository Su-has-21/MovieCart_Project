import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div id="nav">
      <ul>
        <Link to="/logo" className="link" style={{ textDecoration: "none" }}>
          <li>Home</li>
        </Link>
        <Link
          to="/shopping"
          className="link"
          style={{ textDecoration: "none" }}
        >
          <li>Movies</li>
        </Link>
        <Link to="/signup" className="link" style={{ textDecoration: "none" }}>
          <li>Sign Up</li>
        </Link>
        <Link to="/login" className="link" style={{ textDecoration: "none" }}>
          <li>Login</li>
        </Link>
        <Link to="/cart" className="link" style={{ textDecoration: "none" }}>
          <li>Cart</li>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
