import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Welcome to Our E-Commerce Platform</h1>
            <p className="hero-subtitle">
              Discover a world of amazing products at unbeatable prices. Shop with confidence and enjoy a seamless shopping experience.
            </p>
            <div className="hero-buttons">
              <Link to="/products" className="primary-btn">
                <i className="fas fa-shopping-bag"></i>
                Shop Now
              </Link>
              <Link to="/categories" className="secondary-btn">
                <i className="fas fa-th-large"></i>
                Browse Categories
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/hero-image.png" alt="Shopping Experience" />
            <div className="floating-elements">
              <div className="floating-card card1">
                <i className="fas fa-truck"></i>
                <span>Free Shipping</span>
              </div>
              <div className="floating-card card2">
                <i className="fas fa-shield-alt"></i>
                <span>Secure Payment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature-card">
            <i className="fas fa-shipping-fast"></i>
            <h3>Fast Delivery</h3>
            <p>Get your products delivered quickly and efficiently to your doorstep.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-undo"></i>
            <h3>Easy Returns</h3>
            <p>Hassle-free returns and refunds within 30 days of purchase.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-headset"></i>
            <h3>24/7 Support</h3>
            <p>Our customer support team is always here to help you.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-lock"></i>
            <h3>Secure Shopping</h3>
            <p>Shop with confidence with our secure payment system.</p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter to receive updates about new products and exclusive offers.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email address" />
            <button type="submit" className="primary-btn">
              <i className="fas fa-paper-plane"></i>
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home; 