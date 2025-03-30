import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <i className="fas fa-shopping-cart"></i>
        <h3>Your cart is empty</h3>
        <p>Looks like you haven't added any movies to your cart yet.</p>
        <Link to="/shopping" className="primary-btn">
          <i className="fas fa-film"></i>
          Browse Movies
        </Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="cart-header">
        <h2 className="cart-title">
          <i className="fas fa-shopping-cart"></i>
          Shopping Cart
        </h2>
        <span className="cart-count">{cart.length} items</span>
      </div>

      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="cart-item-details">
              <h3 className="cart-item-title">{item.title}</h3>
              <div className="cart-item-genre">
                <i className="fas fa-film"></i>
                {item.genre}
              </div>
              <div className="cart-item-price">
                <i className="fas fa-dollar-sign"></i>
                {item.price}
              </div>
            </div>
            <div className="cart-item-actions">
              <div className="quantity-controls">
                <button
                  className="quantity-btn"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  <i className="fas fa-minus"></i>
                </button>
                <span className="quantity">{item.quantity}</span>
                <button
                  className="quantity-btn"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                <i className="fas fa-trash"></i>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3 className="summary-title">Order Summary</h3>
        <div className="summary-details">
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>
        </div>
        <button className="checkout-btn">
          <i className="fas fa-lock"></i>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
