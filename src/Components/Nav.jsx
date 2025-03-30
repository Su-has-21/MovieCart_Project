import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import "../nav.css";
import { ProductContext } from "../context/ProductContext";

const Nav = () => {
  const location = useLocation();
  const { cart } = useContext(ProductContext);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const cartCount = cart.length;

  return (
    <nav id="nav">
      <ul>
        <Link to="/logo" className="nav-link" title="Home">
          <li className={isActive("/logo") ? "active" : ""}>
            <i className="fas fa-home"></i>
          </li>
        </Link>
        <Link to="/shopping" className="nav-link" title="Movies">
          <li className={isActive("/shopping") ? "active" : ""}>
            <i className="fas fa-film"></i>
          </li>
        </Link>
        <Link to="/signup" className="nav-link" title="Sign Up">
          <li className={isActive("/signup") ? "active" : ""}>
            <i className="fas fa-user-plus"></i>
          </li>
        </Link>
        <Link to="/login" className="nav-link" title="Login">
          <li className={isActive("/login") ? "active" : ""}>
            <i className="fas fa-sign-in-alt"></i>
          </li>
        </Link>
        <Link to="/cart" className="nav-link" title="Cart">
          <li className={isActive("/cart") ? "active" : ""}>
            <i className="fas fa-shopping-cart"></i>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
