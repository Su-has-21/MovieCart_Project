import React from "react";
import movie from "../assets/Images/movie.jpg";
import { Link, useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  const handleStartWatching = (e) => {
    e.preventDefault();
    const user = localStorage.getItem("user");
    if (user === null) {
      navigate("/login");
    } else {
      navigate("/shopping");
    }
  };

  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Your Ultimate Movie Marketplace
            </h1>
            <p className="hero-subtitle">
              Discover, collect, and enjoy your favorite movies in stunning quality. 
              Start your cinematic journey today!
            </p>
            <div className="hero-buttons">
              <button onClick={handleStartWatching} className="primary-btn">
                <i className="fas fa-play"></i>
                Start Watching
              </button>
              <Link to="/signup" className="secondary-btn">
                <i className="fas fa-user-plus"></i>
                Join Now
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img src={movie} alt="Movie Collection" />
            <div className="floating-elements">
              <div className="floating-card card1">
                <i className="fas fa-star"></i>
                <span>4.8/5 Rating</span>
              </div>
              <div className="floating-card card2">
                <i className="fas fa-film"></i>
                <span>1000+ Movies</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature-card">
            <i className="fas fa-film"></i>
            <h3>Extensive Collection</h3>
            <p>Access thousands of movies from various genres and eras</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-tv"></i>
            <h3>HD Quality</h3>
            <p>Watch your favorite movies in stunning high definition</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-mobile-alt"></i>
            <h3>Watch Anywhere</h3>
            <p>Stream on any device, anytime, anywhere</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-percent"></i>
            <h3>Best Prices</h3>
            <p>Get the best deals and discounts on movies</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-clock"></i>
            <h3>24/7 Support</h3>
            <p>Round-the-clock customer support for all your needs</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-shield-alt"></i>
            <h3>Secure Payment</h3>
            <p>Safe and secure payment options for worry-free transactions</p>
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter for exclusive offers and new releases</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">
              <i className="fas fa-paper-plane"></i>
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Logo;
