import React from "react";
import { useProduct } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";
import "../styles/cart.css";

const Cart = () => {
  const { cart, toggleCart } = useProduct();
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert("Order placed successfully!");
    cart.forEach(item => toggleCart(item));
    navigate("/");
  };

  const handleRemoveItem = (item) => {
    toggleCart(item);
  };

  return (
    <div className="cart">
      <div className="cart-header">
        <div className="cart-header-left">
          <button 
            className="back-btn" 
            onClick={() => navigate("/shopping")}
            aria-label="Back to shopping"
          >
            <i className="fas fa-arrow-left" aria-hidden="true"></i>
            <span>Back to Movies</span>
          </button>
          <h2 className="cart-title">
            <i className="fas fa-shopping-cart" aria-hidden="true"></i>
            Your Shopping Cart
          </h2>
        </div>
        <span className="cart-count">{cart.length} items</span>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <i className="fas fa-film" aria-hidden="true"></i>
          <h3>Your Cart is Empty</h3>
          <p>Looks like you haven't added any movies to your cart yet.</p>
          <p>Start your cinematic journey by exploring our collection!</p>
          <button 
            className="primary-btn" 
            onClick={() => navigate("/shopping")}
            aria-label="Browse movies"
          >
            <i className="fas fa-film" aria-hidden="true"></i>
            Browse Movies
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.Title} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.Poster} alt={`${item.Title} movie poster`} />
                  <div className="cart-item-overlay">
                    <button 
                      className="delete-btn"
                      onClick={() => handleRemoveItem(item)}
                      aria-label={`Remove ${item.Title} from cart`}
                    >
                      <i className="fas fa-trash-alt" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
                <div className="cart-item-details">
                  <h3 className="cart-item-title">{item.Title}</h3>
                  <div className="cart-item-meta">
                    <span className="cart-item-genre">
                      <i className="fas fa-film" aria-hidden="true"></i> {item.Genre}
                    </span>
                    <span className="cart-item-year">
                      <i className="fas fa-calendar" aria-hidden="true"></i> {item.Year}
                    </span>
                    <span className="cart-item-rating">
                      <i className="fas fa-star" aria-hidden="true"></i> {item.imdbRating}
                    </span>
                  </div>
                  <div className="cart-item-price">
                    ₹{item.price}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3 className="summary-title">Order Summary</h3>
            <div className="summary-details">
              <div className="summary-row">
                <span>Subtotal ({cart.length} items)</span>
                <span>₹{calculateTotal()}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>₹{calculateTotal()}</span>
              </div>
            </div>
            <button 
              className="checkout-btn"
              onClick={handleCheckout}
              aria-label="Proceed to checkout"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart; 